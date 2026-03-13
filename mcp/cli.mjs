#!/usr/bin/env node

const args = process.argv.slice(2);

let mode = 'stdio';
let port;
let prebuild = false;
let silent = true;

for (let i = 0; i < args.length; i += 1) {
	const arg = args[i];
	if (arg === '--http') {
		mode = 'http';
		continue;
	}
	if (arg === '--stdio') {
		mode = 'stdio';
		continue;
	}
	if (arg === '--prebuild') {
		prebuild = true;
		continue;
	}
	if (arg === '--verbose') {
		silent = false;
		continue;
	}
	if (arg === '--port' && args[i + 1]) {
		port = args[i + 1];
		i += 1;
		continue;
	}
	if (arg?.startsWith('--port=')) {
		port = arg.split('=')[1];
		continue;
	}
	if (arg === '--help' || arg === '-h') {
		process.stderr.write(
			[
				'mn-docs-mcp 使用说明:',
				'  --http            启动HTTPStream模式(默认stdio)',
				'  --port <port>     HTTP端口(默认8788)',
				'  --prebuild        启动后后台预构建索引',
				'  --verbose         输出日志(默认静默)',
				'  --stdio           显式使用stdio模式',
			].join('\n') + '\n'
		);
		process.exit(0);
	}
}

if (mode === 'stdio') {
	process.env.MCP_STDIO = '1';
	process.env.MCP_SILENT = silent ? '1' : '0';
	if (prebuild) process.env.MCP_PREBUILD = '1';
	await import('./server.mjs');
} else {
	if (port) process.env.MCP_HTTP_PORT = String(port);
	if (prebuild) process.env.MCP_PREBUILD = '1';
	await import('./server-http.mjs');
}
