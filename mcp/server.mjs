import { FastMCP } from 'fastmcp';
import { z } from 'zod';
import { buildIndex, getPaths, isIndexStale, loadIndex, searchDocs } from './lib.mjs';

const TOOL_NAME = 'search_docs';
const IS_SILENT = process.env.MCP_SILENT === '1';

function logError(...args) {
	if (IS_SILENT) return;
	console.error(...args);
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
		logError(`未找到索引，开始重建：${INDEX_PATH}`);
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
	name: TOOL_NAME,
	description: '在本地文档索引中检索相关文本片段',
	parameters: z.object({
		query: z.string().describe('检索关键词或问题'),
		top_k: z.number().optional().describe('返回片段数量'),
	}),
	execute: async ({ query, top_k }) => {
		const topK = Number(top_k || 5);
		if (!query.trim()) {
			return { content: [{ type: 'text', text: 'query不能为空' }] };
		}
		if (initPromise) {
			await initPromise;
		} else {
			await initIndexInBackground();
		}
		const results = await searchDocs(query, topK);
		return {
			content: results.map((text) => ({ type: 'text', text })),
		};
	},
});

await server.start({
	transportType: 'stdio',
});

// 默认不自动构建，避免阻塞握手；仅在首次查询时构建
if (process.env.MCP_PREBUILD === '1') {
	setTimeout(() => initIndexInBackground(), 1000);
}
