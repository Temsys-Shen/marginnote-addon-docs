import { FastMCP } from 'fastmcp';
import { z } from 'zod';
import { buildIndex, discoverDocs, getPaths, isIndexStale, loadIndex, readDoc } from './lib.mjs';

const DISCOVER_TOOL_NAME = 'discover_docs';
const READ_TOOL_NAME = 'read_doc';
const IS_SILENT = process.env.MCP_SILENT === '1';
const NO_COLOR = process.env.MCP_NO_COLOR === '1';

function logError(...args) {
	if (IS_SILENT) return;
	console.error(...args);
}

function color(text, code) {
	if (NO_COLOR) return text;
	return `\x1b[${code}m${text}\x1b[0m`;
}

function stripAnsi(text) {
	return text.replace(/\x1b\[[0-9;]*m/g, '');
}

function stringWidth(text) {
	const plain = stripAnsi(text);
	let width = 0;
	for (const char of plain) {
		const code = char.codePointAt(0);
		if (!code) continue;
		const isWide =
			(code >= 0x1100 && code <= 0x115f) ||
			(code === 0x2329 || code === 0x232a) ||
			(code >= 0x2e80 && code <= 0xa4cf) ||
			(code >= 0xac00 && code <= 0xd7a3) ||
			(code >= 0xf900 && code <= 0xfaff) ||
			(code >= 0xfe10 && code <= 0xfe19) ||
			(code >= 0xfe30 && code <= 0xfe6f) ||
			(code >= 0xff00 && code <= 0xff60) ||
			(code >= 0xffe0 && code <= 0xffe6);
		width += isWide ? 2 : 1;
	}
	return width;
}

function padLine(line, width) {
	const len = stringWidth(line);
	const padding = width - len;
	return line + (padding > 0 ? ' '.repeat(padding) : '');
}

function renderSplash() {
	if (IS_SILENT) return;
	const version = process.env.MN_DOCS_VERSION || '0.0.0';
	const mode = process.env.MN_DOCS_MODE || 'stdio';
	const contentLines = [
		color(`mn-docs-mcp v${version}`, '38;5;45'),
		color(`模式: ${mode}`, '38;5;39'),
	];
	const maxWidth = Math.max(...contentLines.map((line) => stringWidth(line))) + 4;
	const top = color('╭' + '─'.repeat(maxWidth) + '╮', '38;5;45');
	const bottom = color('╰' + '─'.repeat(maxWidth) + '╯', '38;5;45');
	const body = contentLines.map((line) => {
		const padded = padLine(line, maxWidth - 4);
		return color('│', '38;5;45') + '  ' + padded + '  ' + color('│', '38;5;45');
	});
	process.stderr.write([top, ...body, bottom].join('\n') + '\n');
}

async function ensureIndex() {
	const { INDEX_PATH } = getPaths();
	try {
		await loadIndex();
		const stale = await isIndexStale();
		if (stale) {
			logError(`检测到文档更新，开始重建索引：${INDEX_PATH}`);
			await buildIndex();
		}
	} catch {
		logError(`未找到可用索引，开始重建：${INDEX_PATH}`);
		await buildIndex();
	}
}

let initPromise = null;
function initIndexInBackground() {
	if (!initPromise) {
		initPromise = ensureIndex().catch((error) => {
			logError('索引初始化失败：', error?.message || error);
		});
	}
	return initPromise;
}

async function ensureReady() {
	if (initPromise) {
		await initPromise;
	} else {
		await initIndexInBackground();
	}
}

function renderJsonPayload(payload) {
	return {
		content: [
			{
				type: 'text',
				text: JSON.stringify(payload, null, 2),
			},
		],
	};
}

function renderError(message) {
	return {
		content: [{ type: 'text', text: message }],
		isError: true,
	};
}

const logger = IS_SILENT
	? {
			debug() {},
			error() {},
			info() {},
			log() {},
			warn() {},
		}
	: {
			debug: (...args) => console.error(...args),
			error: (...args) => console.error(...args),
			info: (...args) => console.error(...args),
			log: (...args) => console.error(...args),
			warn: (...args) => console.error(...args),
		};

const server = new FastMCP({
	name: 'marginnote-docs-mcp',
	version: '0.1.0',
	logger,
});

server.addTool({
	name: DISCOVER_TOOL_NAME,
	description:
		[
			'发现与当前问题最相关的MarginNote文档。这个工具适合做第一步检索：先找对文档，再决定是否读取全文。',
			'推荐用法：当用户问某个类、对象、字段、方法、返回值、示例、完整API时，先调用discover_docs。',
			'如果结果已经出现明确目标文档，再调用read_doc读取整篇文档，不要只依赖片段回答“字段有哪些”“完整API是什么”。',
			'当query中包含类名、方法名、属性名时，优先使用mode=hybrid或mode=keyword。',
			'返回结果按文档聚合，每项包含doc_id、title、url、summary、matched_by和snippets，便于继续跳转。',
		].join('\n'),
	parameters: z.object({
		query: z.string().describe('用户的问题、关键词或API名，例如“mn卡片字段”“MbBookNote comments”“创建新笔记的方法”'),
		top_k: z
			.number()
			.int()
			.min(1)
			.max(20)
			.optional()
			.describe('返回文档数量，默认5。通常3到8足够。'),
		mode: z
			.enum(['hybrid', 'keyword', 'semantic'])
			.optional()
			.describe('检索模式。默认hybrid；keyword适合精确API名；semantic适合自然语言描述。'),
	}),
	execute: async ({ query, top_k, mode }) => {
		try {
			await ensureReady();
			const payload = await discoverDocs(query, {
				topK: top_k,
				mode,
			});
			return renderJsonPayload(payload);
		} catch (error) {
			return renderError(error?.message || 'discover_docs执行失败');
		}
	},
});

server.addTool({
	name: READ_TOOL_NAME,
	description:
		[
			'读取某篇MarginNote文档的全文。这个工具适合做第二步检索：在discover_docs确认目标文档后，拉取完整字段、方法、返回值和示例。',
			'推荐优先使用discover_docs返回的doc_id调用read_doc，避免slug或url歧义。',
			'当用户追问“还有哪些字段”“完整API”“相关示例”“完整方法签名”时，应继续调用read_doc，而不是只根据片段猜测。',
		].join('\n'),
	parameters: z
		.object({
			doc_id: z.string().optional().describe('discover_docs返回的doc_id，最推荐使用'),
			slug: z.string().optional().describe('文档slug，例如reference/marginnote/mb-book-note'),
			url: z.string().optional().describe('文档URL，例如/reference/marginnote/mb-book-note/'),
		})
		.refine((value) => Boolean(value.doc_id || value.slug || value.url), {
			message: 'doc_id、slug、url至少需要提供一个',
		}),
	execute: async ({ doc_id, slug, url }) => {
		try {
			await ensureReady();
			const payload = await readDoc({ doc_id, slug, url });
			return renderJsonPayload(payload);
		} catch (error) {
			return renderError(error?.message || 'read_doc执行失败');
		}
	},
});

await server.start({
	transportType: 'stdio',
});

renderSplash();

setTimeout(() => initIndexInBackground(), 0);
