import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { env, pipeline } from '@huggingface/transformers';
import { Agent, ProxyAgent, setGlobalDispatcher } from 'undici';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_ROOT = path.resolve(__dirname, '..');

const MODEL_ID = 'Xenova/bge-small-zh-v1.5';
const MODEL_DIM = 512;
const INDEX_VERSION = 2;
const MAX_EXTRACTOR_RETRIES = 3;

const QUERY_SYNONYMS = {
	mn: ['marginnote'],
	marginnote: ['mn'],
	卡片: ['笔记', '脑图节点'],
	笔记: ['卡片'],
	字段: ['属性'],
	属性: ['字段'],
	方法: ['函数'],
	comment: ['comments', '评论'],
	comments: ['comment', '评论'],
	markdown: ['md'],
};

const DOC_ALIAS_HINTS = {
	MbBookNote: ['笔记', '卡片', '脑图节点', 'mn卡片', '笔记对象'],
	Note: ['创建笔记', '新建笔记', '笔记工厂'],
	MbTopic: ['笔记本', '脑图', '卡片组'],
	MbBook: ['文档', '书本', '书籍'],
};

let extractorPromise;
let proxyInitialized = false;
const IS_STDIO = process.env.MCP_STDIO === '1';
const IS_SILENT = process.env.MCP_SILENT === '1';
const NO_COLOR = process.env.MCP_NO_COLOR === '1';
let lastDownloadProgress = -1;

function resolveRootDir() {
	const envRoot = (process.env.MN_DOCS_ROOT || '').trim();
	if (envRoot && fsSyncExists(path.join(envRoot, 'src', 'content', 'docs'))) return envRoot;
	const cwd = process.cwd();
	const docsFromCwd = path.join(cwd, 'src', 'content', 'docs');
	try {
		if (fsSyncExists(docsFromCwd)) return cwd;
	} catch {}
	return DEFAULT_ROOT;
}

function fsSyncExists(p) {
	try {
		return fsSync.statSync(p).isDirectory();
	} catch {
		return false;
	}
}

const ROOT_DIR = resolveRootDir();
const DOCS_DIR = path.join(ROOT_DIR, 'src', 'content', 'docs');
const MCP_DIR = path.join(ROOT_DIR, '.mcp');
const INDEX_PATH = path.join(MCP_DIR, 'index.json');

function logInfo(message) {
	if (IS_SILENT) return;
	if (IS_STDIO) {
		process.stderr.write(`${message}\n`);
	} else {
		console.log(message);
	}
}

function color(text, code) {
	if (NO_COLOR) return text;
	return `\x1b[${code}m${text}\x1b[0m`;
}

function formatBytes(bytes) {
	if (!Number.isFinite(bytes)) return '';
	const units = ['B', 'KB', 'MB', 'GB'];
	let idx = 0;
	let value = bytes;
	while (value >= 1024 && idx < units.length - 1) {
		value /= 1024;
		idx += 1;
	}
	return `${value.toFixed(1)}${units[idx]}`;
}

function logDownloadProgress(info) {
	if (IS_SILENT) return;
	if (info?.status === 'download') {
		if (IS_STDIO) {
			process.stderr.write('\r\x1b[K');
			process.stderr.write(color('开始下载模型...', '38;5;45') + '\n');
		} else {
			process.stdout.write('\r\x1b[K');
			console.log(color('开始下载模型...', '38;5;45'));
		}
		lastDownloadProgress = -1;
		return;
	}
	if (info?.status === 'progress' && typeof info.progress === 'number') {
		const pct = Math.max(0, Math.min(100, Math.round(info.progress)));
		if (pct === lastDownloadProgress) return;
		lastDownloadProgress = pct;
		const loaded = formatBytes(info.loaded);
		const total = formatBytes(info.total);
		const suffix = loaded && total ? ` ${loaded}/${total}` : '';
		const line = `${color('模型下载进度', '38;5;45')}: ${pct}%${suffix}`;
		if (IS_STDIO) {
			process.stderr.write(`\r\x1b[K${line}`);
			if (pct === 100) process.stderr.write('\n');
		} else {
			process.stdout.write(`\r\x1b[K${line}`);
			if (pct === 100) process.stdout.write('\n');
		}
	}
}

function setupProxy() {
	if (proxyInitialized) return;
	proxyInitialized = true;
	const proxyUrl = (process.env.HTTPS_PROXY || process.env.HTTP_PROXY || process.env.ALL_PROXY || '').trim();
	if (!proxyUrl) return;
	try {
		setGlobalDispatcher(new ProxyAgent(proxyUrl));
	} catch {
		setGlobalDispatcher(new Agent());
	}
}

async function getExtractor() {
	if (extractorPromise) return extractorPromise;
	setupProxy();

	env.allowRemoteModels = true;
	env.disableProgressBars = true;
	env.disableSymlinksWarning = true;
	env.remoteHost = 'https://hf-mirror.com';
	if (!process.env.LOG_LEVEL) process.env.LOG_LEVEL = 'error';

	const modelDir = env.cacheDir ? path.join(env.cacheDir, 'Xenova', 'bge-small-zh-v1.5') : null;
	const create = async () =>
		pipeline('feature-extraction', MODEL_ID, {
			progress_callback: logDownloadProgress,
		});

	extractorPromise = (async () => {
		for (let attempt = 1; attempt <= MAX_EXTRACTOR_RETRIES; attempt += 1) {
			try {
				return await create();
			} catch (error) {
				const message = error?.message || String(error);
				const shouldRetry =
					message.includes('Protobuf parsing failed') ||
					message.includes('Load model') ||
					message.includes('fetch failed') ||
					message.includes('ConnectTimeoutError');

				if (!shouldRetry || attempt === MAX_EXTRACTOR_RETRIES) throw error;

				lastDownloadProgress = -1;
				logInfo(`模型下载失败，准备重试(${attempt}/${MAX_EXTRACTOR_RETRIES})...`);
				if (modelDir) await fs.rm(modelDir, { recursive: true, force: true });
			}
		}
		throw new Error('模型加载失败');
	})();

	return extractorPromise;
}

export function getPaths() {
	return { ROOT_DIR, DOCS_DIR, MCP_DIR, INDEX_PATH };
}

export function normalizeWhitespace(text) {
	return text.replace(/\s+/g, ' ').trim();
}

export function stripMarkdown(raw) {
	let text = raw;
	text = text.replace(/```[\s\S]*?```/g, ' ');
	text = text.replace(/`[^`]*`/g, ' ');
	text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ');
	text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
	text = text.replace(/<[^>]+>/g, ' ');
	text = text.replace(/[*_~]+/g, ' ');
	return normalizeWhitespace(text);
}

function slugToUrl(slug) {
	let cleaned = slug.replace(/\\/g, '/');
	if (cleaned.endsWith('/index')) cleaned = cleaned.slice(0, -'/index'.length);
	if (cleaned === 'index') cleaned = '';
	return '/' + cleaned;
}

function splitByHeadingAndParagraph(content) {
	const lines = content.split(/\r?\n/);
	let currentHeading = '';
	let currentParagraph = [];
	const chunks = [];
	const flush = () => {
		const text = normalizeWhitespace(currentParagraph.join(' '));
		if (text) {
			chunks.push({ heading: currentHeading, text });
		}
		currentParagraph = [];
	};

	for (const line of lines) {
		const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
		if (headingMatch) {
			flush();
			currentHeading = headingMatch[2].trim();
			continue;
		}
		if (line.trim() === '') {
			flush();
			continue;
		}
		currentParagraph.push(line.trim());
	}
	flush();
	return chunks;
}

async function walkFiles(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const results = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			results.push(...(await walkFiles(full)));
		} else if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
			results.push(full);
		}
	}
	return results;
}

function makeDocId(slug) {
	return slug;
}

function makeChunkId(docId, index) {
	return `${docId}::${index}`;
}

function uniqueList(values) {
	const set = new Set();
	for (const value of values) {
		const normalized = normalizeWhitespace(String(value || ''));
		if (!normalized) continue;
		set.add(normalized);
	}
	return [...set];
}

function normalizeForMatch(text) {
	return normalizeWhitespace(String(text || '').toLowerCase())
		.replace(/[`"'“”‘’()[\]{}:;,.!?/\\|<>+=_*&#%-]+/g, ' ')
		.trim();
}

function splitIdentifierWords(text) {
	const value = String(text || '')
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.replace(/[_/-]+/g, ' ');
	return uniqueList(value.split(/\s+/));
}

function tokenize(text) {
	const normalized = normalizeForMatch(text);
	if (!normalized) return [];
	const matches = normalized.match(/[a-z0-9]+|[\p{Script=Han}]+/gu);
	if (!matches) return [];
	const tokens = [];
	for (const match of matches) {
		tokens.push(match);
		if (/^[\p{Script=Han}]+$/u.test(match) && match.length >= 2) {
			for (let i = 0; i < match.length - 1; i += 1) {
				tokens.push(match.slice(i, i + 2));
			}
		}
	}
	return uniqueList(tokens);
}

function buildAliasCandidates({ title, slug, description, headings, plainText }) {
	const slugTail = slug.split('/').pop() || slug;
	const firstSentence = plainText.split(/[。！？.!?]/)[0] || '';
	const aliases = [
		title,
		description,
		slugTail,
		slugTail.replace(/-/g, ' '),
		...splitIdentifierWords(title),
		...splitIdentifierWords(slugTail),
		...headings.slice(0, 6),
		firstSentence,
		...(DOC_ALIAS_HINTS[title] || []),
	];
	return uniqueList(aliases);
}

async function embedText(text) {
	const extractor = await getExtractor();
	const output = await extractor(text, { pooling: 'mean', normalize: true });
	const list = typeof output.tolist === 'function' ? output.tolist() : output;
	if (Array.isArray(list) && Array.isArray(list[0])) return list[0];
	if (Array.isArray(list)) return list;
	throw new Error('向量生成失败，输出格式不正确');
}

export async function buildIndex() {
	const { DOCS_DIR, MCP_DIR, INDEX_PATH } = getPaths();
	await fs.mkdir(MCP_DIR, { recursive: true });

	const files = await walkFiles(DOCS_DIR);
	const documents = [];
	const chunks = [];
	const tasks = [];

	for (const file of files) {
		const rel = path.relative(DOCS_DIR, file).replace(/\\/g, '/');
		const slug = rel.replace(/\.(md|mdx)$/i, '');
		const raw = await fs.readFile(file, 'utf-8');
		const parsed = matter(raw);
		const frontmatterTitle = typeof parsed.data?.title === 'string' ? parsed.data.title.trim() : '';
		const frontmatterSlug = typeof parsed.data?.slug === 'string' ? parsed.data.slug.trim() : '';
		const frontmatterDescription =
			typeof parsed.data?.description === 'string' ? parsed.data.description.trim() : '';
		const rawMarkdown = parsed.content.trim();
		const plainText = stripMarkdown(parsed.content);
		const chunkEntries = splitByHeadingAndParagraph(rawMarkdown);
		const pageTitle = frontmatterTitle || (chunkEntries[0]?.heading || slug.split('/').pop() || slug);
		const finalSlug = frontmatterSlug || slug;
		const url = slugToUrl(finalSlug);
		const headings = uniqueList(chunkEntries.map((chunk) => chunk.heading).filter(Boolean));
		const docId = makeDocId(finalSlug);
		const aliases = buildAliasCandidates({
			title: pageTitle,
			slug: finalSlug,
			description: frontmatterDescription,
			headings,
			plainText,
		});

		documents.push({
			doc_id: docId,
			title: pageTitle,
			slug: finalSlug,
			url,
			description: frontmatterDescription,
			aliases,
			headings,
			raw_markdown: rawMarkdown,
			plain_text: plainText,
		});

		chunkEntries.forEach((chunk, index) => {
			tasks.push({
				chunk_id: makeChunkId(docId, index),
				doc_id: docId,
				section: chunk.heading,
				text: chunk.text,
			});
		});
	}

	const total = tasks.length;
	let done = 0;
	let lastRender = 0;
	const renderProgress = (force = false) => {
		if (IS_SILENT) return;
		const stream = IS_STDIO ? process.stderr : process.stdout;
		if (!stream.isTTY) return;
		const now = Date.now();
		if (!force && now - lastRender < 120) return;
		lastRender = now;
		stream.write(`\r索引构建中：${done}/${total}`);
	};
	renderProgress(true);

	for (const task of tasks) {
		const embedding = await embedText(task.text);
		chunks.push({ ...task, embedding });
		done += 1;
		renderProgress(false);
		if (done % 10 === 0) await new Promise((resolve) => setImmediate(resolve));
	}

	if (IS_STDIO ? process.stderr.isTTY : process.stdout.isTTY) {
		const stream = IS_STDIO ? process.stderr : process.stdout;
		stream.write(`\r索引构建完成：${done}/${total}\n`);
	} else {
		logInfo(`索引构建完成：${done}/${total}`);
	}

	const payload = {
		version: INDEX_VERSION,
		generatedAt: new Date().toISOString(),
		source: {
			root: 'src/content/docs',
			split: 'document+heading+paragraph',
			model: MODEL_ID,
			dim: MODEL_DIM,
		},
		documents,
		chunks,
	};
	await fs.writeFile(INDEX_PATH, JSON.stringify(payload, null, 2));
	return {
		documentCount: documents.length,
		chunkCount: chunks.length,
		path: INDEX_PATH,
	};
}

export async function loadIndex() {
	const { INDEX_PATH } = getPaths();
	const raw = await fs.readFile(INDEX_PATH, 'utf-8');
	const data = JSON.parse(raw);
	if (data?.version !== INDEX_VERSION) {
		throw new Error('索引版本过旧，需要重建');
	}
	if (!Array.isArray(data?.documents) || !Array.isArray(data?.chunks)) {
		throw new Error('索引文件格式错误，未找到documents或chunks数组');
	}
	return data;
}

async function getDocsLatestMtime() {
	const { DOCS_DIR } = getPaths();
	const files = await walkFiles(DOCS_DIR);
	let latest = 0;
	for (const file of files) {
		const stat = await fs.stat(file);
		if (stat.mtimeMs > latest) latest = stat.mtimeMs;
	}
	return latest;
}

export async function isIndexStale() {
	const index = await loadIndex();
	const generatedAt = Date.parse(index?.generatedAt || '');
	if (!Number.isFinite(generatedAt)) return true;
	const latestDocMtime = await getDocsLatestMtime();
	return latestDocMtime > generatedAt;
}

function cosineSimilarity(a, b) {
	let dot = 0;
	let normA = 0;
	let normB = 0;
	for (let i = 0; i < a.length; i += 1) {
		dot += a[i] * b[i];
		normA += a[i] * a[i];
		normB += b[i] * b[i];
	}
	return dot / (Math.sqrt(normA) * Math.sqrt(normB) || 1);
}

function expandQueryTerms(query) {
	const normalizedQuery = normalizeForMatch(query);
	const baseTerms = tokenize(query);
	const expanded = new Set(baseTerms);
	for (const key of Object.keys(QUERY_SYNONYMS)) {
		if (normalizedQuery.includes(normalizeForMatch(key))) {
			expanded.add(key);
		}
	}
	for (const term of baseTerms) {
		for (const synonym of QUERY_SYNONYMS[term] || []) {
			expanded.add(synonym);
		}
	}
	return [...expanded];
}

function countContains(text, terms) {
	const normalized = normalizeForMatch(text);
	if (!normalized) return 0;
	let count = 0;
	for (const term of terms) {
		if (normalized.includes(normalizeForMatch(term))) count += 1;
	}
	return count;
}

function makeSnippetSummary(text, maxLength = 180) {
	const compact = normalizeWhitespace(text);
	if (compact.length <= maxLength) return compact;
	return `${compact.slice(0, maxLength - 1)}...`;
}

function scoreDocument(doc, query, terms) {
	const title = normalizeForMatch(doc.title);
	const slug = normalizeForMatch(doc.slug);
	const url = normalizeForMatch(doc.url);
	const aliasText = normalizeForMatch(doc.aliases.join(' '));
	const headingText = normalizeForMatch(doc.headings.join(' '));
	const bodyText = normalizeForMatch(doc.plain_text);
	const exactQuery = normalizeForMatch(query);
	let score = 0;
	const matchedBy = new Set();

	if (exactQuery && (title === exactQuery || slug === exactQuery || url === exactQuery)) {
		score += 12;
		matchedBy.add('title_exact');
	}

	for (const alias of doc.aliases) {
		if (normalizeForMatch(alias) === exactQuery && exactQuery) {
			score += 10;
			matchedBy.add('alias_match');
			break;
		}
	}

	if (exactQuery && slug.includes(exactQuery)) {
		score += 6;
		matchedBy.add('slug_match');
	}
	if (exactQuery && title.includes(exactQuery) && title !== exactQuery) {
		score += 5;
		matchedBy.add('title_match');
	}
	if (exactQuery && aliasText.includes(exactQuery)) {
		score += 4;
		matchedBy.add('alias_match');
	}

	const titleHits = countContains(doc.title, terms);
	const slugHits = countContains(doc.slug, terms);
	const aliasHits = countContains(doc.aliases.join(' '), terms);
	const headingHits = countContains(doc.headings.join(' '), terms);
	const bodyHits = countContains(doc.plain_text, terms);

	if (titleHits > 0) matchedBy.add('title_match');
	if (slugHits > 0) matchedBy.add('slug_match');
	if (aliasHits > 0) matchedBy.add('alias_match');
	if (bodyHits > 0) matchedBy.add('keyword_body');

	score += titleHits * 2.8;
	score += slugHits * 2.4;
	score += aliasHits * 2.2;
	score += headingHits * 1.4;
	score += Math.min(bodyHits, 6) * 0.8;

	if (/^[a-z][a-z0-9]+(?:[A-Z][a-z0-9]+)+$/.test(query.trim()) && doc.title === query.trim()) {
		score += 8;
		matchedBy.add('title_exact');
	}

	return { score, matchedBy: [...matchedBy] };
}

function scoreChunk(chunk, terms, queryEmbedding) {
	const keywordHits = countContains(chunk.text, terms) + countContains(chunk.section, terms) * 0.8;
	let score = keywordHits * 1.1;
	let semanticScore = null;
	if (queryEmbedding) {
		semanticScore = cosineSimilarity(queryEmbedding, chunk.embedding);
		score += Math.max(semanticScore, 0) * 4;
	}
	return {
		score,
		semanticScore,
	};
}

function buildDocSummary(snippets) {
	if (!snippets.length) return '';
	const joined = snippets
		.slice(0, 2)
		.map((snippet) => snippet.text)
		.join(' ');
	return makeSnippetSummary(joined, 220);
}

export async function discoverDocs(query, options = {}) {
	const trimmedQuery = normalizeWhitespace(query || '');
	if (!trimmedQuery) throw new Error('query不能为空');

	const topK = Number(options.topK || 5);
	const mode = ['hybrid', 'keyword', 'semantic'].includes(options.mode) ? options.mode : 'hybrid';
	const index = await loadIndex();
	const terms = expandQueryTerms(trimmedQuery);
	const queryEmbedding = mode === 'keyword' ? null : await embedText(trimmedQuery);
	const chunkMap = new Map();

	for (const chunk of index.chunks) {
		const result = scoreChunk(chunk, terms, mode === 'semantic' || mode === 'hybrid' ? queryEmbedding : null);
		const list = chunkMap.get(chunk.doc_id) || [];
		list.push({
			section: chunk.section || '',
			text: chunk.text,
			score: result.score,
			semanticScore: result.semanticScore,
		});
		chunkMap.set(chunk.doc_id, list);
	}

	const results = index.documents
		.map((doc) => {
			const docScore = scoreDocument(doc, trimmedQuery, terms);
			const scoredChunks = (chunkMap.get(doc.doc_id) || [])
				.filter((item) => item.score > 0 || item.semanticScore === null || item.semanticScore > 0.18)
				.sort((a, b) => b.score - a.score);

			const bestChunk = scoredChunks[0];
			let score = docScore.score;
			if (bestChunk) {
				score += bestChunk.score;
				if (bestChunk.semanticScore && bestChunk.semanticScore > 0.25) {
					docScore.matchedBy.push('semantic');
				}
			}
			if (mode === 'semantic' && bestChunk?.semanticScore != null) {
				score += Math.max(bestChunk.semanticScore, 0) * 3;
			}

			const snippets = scoredChunks.slice(0, 3).map((item) => ({
				section: item.section,
				text: makeSnippetSummary(item.text, 260),
				score: Number(item.score.toFixed(4)),
			}));

			return {
				doc_id: doc.doc_id,
				title: doc.title,
				url: doc.url,
				score,
				summary: buildDocSummary(snippets),
				matched_by: uniqueList(docScore.matchedBy),
				snippets,
			};
		})
		.filter((doc) => doc.score > 0)
		.sort((a, b) => b.score - a.score)
		.slice(0, topK)
		.map((doc) => ({
			...doc,
			score: Number(doc.score.toFixed(4)),
		}));

	return {
		query: trimmedQuery,
		mode,
		results,
	};
}

function findDocument(index, identifier) {
	const docId = normalizeWhitespace(identifier.doc_id || '');
	const slug = normalizeWhitespace(identifier.slug || '');
	const url = normalizeWhitespace(identifier.url || '');

	return index.documents.find((doc) => {
		if (docId && doc.doc_id === docId) return true;
		if (slug && doc.slug === slug) return true;
		if (url && doc.url === url) return true;
		return false;
	});
}

export async function readDoc(identifier = {}) {
	const index = await loadIndex();
	const doc = findDocument(index, identifier);
	if (!doc) {
		throw new Error('未找到匹配的文档，请提供有效的doc_id、slug或url');
	}
	return {
		doc_id: doc.doc_id,
		title: doc.title,
		url: doc.url,
		headings: doc.headings,
		content: doc.raw_markdown,
	};
}
