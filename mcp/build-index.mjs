import { buildIndex } from './lib.mjs';

try {
	const result = await buildIndex();
	console.log(`索引构建完成，共${result.count}个片段。文件：${result.path}`);
} catch (error) {
	console.error('索引构建失败：', error?.message || error);
	process.exit(1);
}
