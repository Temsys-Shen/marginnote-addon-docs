import http from 'node:http';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { buildIndex, getPaths, isIndexStale, loadIndex, searchDocs } from './lib.mjs';

const TOOL_NAME = 'search_docs';
const PORT = Number(process.env.MCP_HTTP_PORT || 8788);

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

const transports = new Map();

const httpServer = http.createServer(async (req, res) => {
	if (!req.url) {
		res.writeHead(400);
		res.end('Bad Request');
		return;
	}

	if (req.method === 'GET' && req.url.startsWith('/sse')) {
		const transport = new SSEServerTransport('/messages', res);
		transports.set(transport.sessionId, transport);
		await server.connect(transport);
		return;
	}

	if (req.method === 'POST' && req.url.startsWith('/messages')) {
		const url = new URL(req.url, `http://localhost:${PORT}`);
		const sessionId = url.searchParams.get('sessionId');
		const transport = sessionId ? transports.get(sessionId) : null;
		if (!transport) {
			res.writeHead(404);
			res.end('Unknown session');
			return;
		}
		await transport.handlePostMessage(req, res);
		return;
	}

	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	res.end('MCP HTTP服务已启动。SSE: /sse  Messages: /messages');
});

httpServer.listen(PORT, () => {
	console.log(`MCP服务已启动(HTTP)：http://127.0.0.1:${PORT}`);
	console.log(`SSE端点：http://127.0.0.1:${PORT}/sse`);
});
