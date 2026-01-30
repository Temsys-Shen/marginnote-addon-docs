// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'node:path';
import { cp, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

/**
 * Starlight 默认把 Pagefind bundle 输出到 `dist/pagefind/`，并在运行时请求 `/pagefind/*`。
 * 但一些旧的部署/缓存或人工排查会请求 `/_pagefind/*`，导致“搜索弹窗空白（资源 404）”的错觉。
 *
 * 这里在构建结束后把 `pagefind/` 复制一份到 `_pagefind/`，实现兼容双路径。
 *
 * @returns {import('astro').AstroIntegration}
 */
function pagefindCompatAlias() {
	return {
		name: 'pagefind-compat-alias',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				const outDir = fileURLToPath(dir);
				const src = path.join(outDir, 'pagefind');
				const dst = path.join(outDir, '_pagefind');

				try {
					const s = await stat(src);
					if (!s.isDirectory()) return;
				} catch {
					// 没有 pagefind 输出时，直接跳过（例如未来关闭内置搜索）
					return;
				}

				try {
					await cp(src, dst, { recursive: true, force: true });
					logger.info('Created compatibility alias: /_pagefind/ → /pagefind/');
				} catch (err) {
					logger.warn(`Failed to create /_pagefind/ alias: ${String(err)}`);
				}
			},
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://mn-docs.museday.top',
	integrations: [
		starlight({
			title: 'MarginNote 插件开发文档',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Temsys-Shen/marginnote-addon-docs' }],
			sidebar: [
				{
					label: '入门',
					items: [
						{ label: '快速开始', slug: 'guides/getting-started' },
					],
				},
				{
					label: '教程与 Cookbook',
					items: [
						{ label: '生命周期与窗口', slug: 'guides/lifecycle-and-window' },
						{ label: '笔记与数据库', slug: 'guides/notes-and-database' },
						{ label: '脑图与选区', slug: 'guides/mindmap-and-selection' },
						{ label: '工具栏与命令', slug: 'guides/toolbar-and-commands' },
						{ label: '原生 UI', slug: 'guides/native-ui' },
						{ label: '存储与文件', slug: 'guides/storage-and-files' },
						{
							label: 'Cookbook 配方',
							items: [
								{ label: '批量修改笔记标题', slug: 'guides/cookbook/batch-rename-notes' },
								{ label: '导出当前笔记本', slug: 'guides/cookbook/export-notebook' },
								{ label: '在脑图中高亮指定笔记', slug: 'guides/cookbook/focus-note-in-mindmap' },
								{ label: '将选区追加为评论', slug: 'guides/cookbook/append-selection-as-comment' },
								{ label: '插件设置页', slug: 'guides/cookbook/addon-settings' },
								{ label: '在插件中嵌入 WebView 面板', slug: 'guides/cookbook/embed-webview-panel' },
								{ label: 'WebView 内 JS 与插件 JS 双向通信', slug: 'guides/cookbook/webview-bidirectional-js' },
							],
						},
					],
				},
				{
					label: 'API 参考',
					items: [
						{
							label: '全局与入口',
							items: [
								{ label: 'JSB', slug: 'reference/global/jsb' },
								{ label: 'Application', slug: 'reference/global/application' },
								{ label: 'Database', slug: 'reference/global/database' },
								{ label: 'Note', slug: 'reference/global/note' },
								{ label: 'self', slug: 'reference/global/self' },
							],
						},
						{
							label: 'MarginNote 核心',
							items: [
								{ label: 'JSExtension', slug: 'reference/marginnote/jsextension' },
								{ label: 'StudyController', slug: 'reference/marginnote/study-controller' },
								{ label: 'NotebookController', slug: 'reference/marginnote/notebook-controller' },
								{ label: 'ReaderController', slug: 'reference/marginnote/reader-controller' },
								{ label: 'DocumentController', slug: 'reference/marginnote/document-controller' },
								{ label: 'MindMapView', slug: 'reference/marginnote/mindmap-view' },
								{ label: 'MindMapNode', slug: 'reference/marginnote/mindmap-node' },
								{ label: 'MbBookNote', slug: 'reference/marginnote/mb-book-note' },
								{ label: 'NoteComment', slug: 'reference/marginnote/note-comment' },
								{ label: 'MbTopic', slug: 'reference/marginnote/mb-topic' },
								{ label: 'MbBook', slug: 'reference/marginnote/mb-book' },
								{ label: 'MbModelTool', slug: 'reference/marginnote/mb-model-tool' },
							],
						},
						{
							label: 'Foundation',
							items: [
								{ label: 'NSUserDefaults', slug: 'reference/foundation/ns-user-defaults' },
								{ label: 'NSFileManager', slug: 'reference/foundation/ns-file-manager' },
								{ label: 'NSData', slug: 'reference/foundation/ns-data' },
								{ label: 'NSURL', slug: 'reference/foundation/ns-url' },
								{ label: 'NSJSONSerialization', slug: 'reference/foundation/ns-json-serialization' },
								{ label: 'NSTimer', slug: 'reference/foundation/ns-timer' },
								{ label: 'NSNotificationCenter', slug: 'reference/foundation/ns-notification-center' },
							],
						},
						{
							label: 'UIKit',
							items: [
								{ label: 'UIView', slug: 'reference/uikit/uiview' },
								{ label: 'UIViewController', slug: 'reference/uikit/uiview-controller' },
								{ label: 'UIAlertView', slug: 'reference/uikit/uialertview' },
								{ label: 'UIButton', slug: 'reference/uikit/uibutton' },
								{ label: 'UILabel', slug: 'reference/uikit/uilabel' },
								{ label: 'UITextField', slug: 'reference/uikit/uitextfield' },
								{ label: 'UISwitch', slug: 'reference/uikit/uiswitch' },
								{ label: 'UIColor', slug: 'reference/uikit/uicolor' },
								{ label: 'UIPasteboard', slug: 'reference/uikit/uipasteboard' },
								{ label: 'UIWebView', slug: 'reference/uikit/uiwebview' },
							],
						},
						{
							label: 'Utility',
							items: [
								{ label: 'UndoManager', slug: 'reference/utility/undo-manager' },
								{ label: 'MenuController', slug: 'reference/utility/menu-controller' },
								{ label: 'SpeechManager', slug: 'reference/utility/speech-manager' },
								{ label: 'ZipArchive', slug: 'reference/utility/zip-archive' },
							],
						},
					],
				},
			],

		}),
		pagefindCompatAlias(),
	],
});
