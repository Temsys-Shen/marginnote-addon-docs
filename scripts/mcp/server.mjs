import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { buildIndex, getPaths, isIndexStale, loadIndex, searchDocs } from './lib.mjs';

const TOOL_NAME = 'search_docs';

async function ensureIndex() {
	const { INDEX_PATH } = getPaths();
	try {
		await loadIndex();
		const stale = await isIndexStale();
		if (stale) {
			console.log(`检测到文档更新，开始重建索引：${INDEX_PATH}`);
			await buildIndex();
		}
	} catch {
		console.log(`未找到索引，开始重建：${INDEX_PATH}`);
		await buildIndex();
	}
}

const server = new Server(
	{ name: 'marginnote-docs-mcp', version: '0.1.0' },
	{ capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
	tools: [
		{
			name: TOOL_NAME,
			description: '在本地文档索引中检索相关文本片段',
			inputSchema: {
				type: 'object',
				properties: {
					query: { type: 'string', description: '检索关键词或问题' },
					top_k: { type: 'number', description: '返回片段数量', default: 5 },
				},
				required: ['query'],
			},
		},
	],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
	if (request.params.name !== TOOL_NAME) {
		return { content: [{ type: 'text', text: '未知工具' }] };
	}
	const args = request.params.arguments || {};
	const query = typeof args.query === 'string' ? args.query : '';
	const topK = Number(args.top_k || 5);
	if (!query.trim()) {
		return { content: [{ type: 'text', text: 'query不能为空' }] };
	}
	const results = await searchDocs(query, topK);
	return {
		content: results.map((text) => ({ type: 'text', text })),
	};
});

await ensureIndex();

const transport = new StdioServerTransport();
await server.connect(transport);
console.log('MCP服务已启动(stdio)，等待客户端连接...');
