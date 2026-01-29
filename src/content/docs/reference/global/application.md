---
title: Application
description: MarginNote 应用主对象，通过单例访问窗口、路径与 UI 能力。
---

`Application` 代表 MarginNote 应用本身，通过 `Application.sharedInstance()` 获取单例。用于获取当前窗口、学习控制器、路径以及弹窗/ HUD 等 UI。

## 获取实例

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `static sharedInstance()` | `Application` | 获取全局唯一的应用实例。 |

## 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `focusWindow` | `UIWindow` | 当前活动窗口（文档中有时写作 `window`，getter 为 window）。 |
| `currentTheme` | `string` | 当前主题，如 `"dark"` / `"light"`。 |
| `dbPath` | `string` | 主数据库文件路径。 |
| `documentPath` | `string` | 文稿目录路径。 |
| `cachePath` | `string` | 缓存目录路径。 |
| `tempPath` | `string` | 临时目录路径。 |
| `osType` | `number` | 系统类型：0 iPadOS，1 iPhoneOS，2 macOS。 |
| `defaultTintColor` | `UIColor` | 默认强调色。 |
| `defaultTintColorForDarkBackground` | `UIColor` | 深色背景下的默认强调色。 |
| `defaultTintColorForSelected` | `UIColor` | 选中态默认强调色。 |
| `defaultBookPageColor` | `UIColor` | 默认书本页色。 |
| `defaultNotebookColor` | `UIColor` | 默认笔记本色。 |
| `defaultTextColor` | `UIColor` | 默认文本色。 |
| `defaultDisableColor` | `UIColor` | 默认禁用色。 |
| `defaultHighlightBlendColor` | `UIColor` | 默认高亮混合色。 |

## 方法

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `studyController(window)` | `window`: `UIWindow`（通常传 `self.window`） | `StudyController` | 获取指定窗口的学习控制器，是访问脑图、文档等的入口。JS 侧方法名为 `studyController`。 |
| `showHUD(message, view, duration)` | `message`: string；`view`: UIView；`duration`: number（秒） | void | 在指定视图上显示短暂 HUD 提示。 |
| `waitHUD(message, view)` | `message`: string；`view`: UIView | void | 显示等待态 HUD。 |
| `stopWaitHUDOnView(view)` | `view`: UIView | void | 停止指定视图上的等待 HUD。 |
| `alert(message)` | `message`: string | void | 显示系统警告框（阻塞）。 |
| `openURL(url)` | `url`: NSURL | void | 打开 URL（网页或 App URL Scheme）。 |
| `refreshAfterDBChanged(topicid)` | `topicid`: string | void | 数据库变更后刷新指定笔记本。 |
| `queryCommandStatus(command, keyFlags, window)` | 命令、按键、窗口 | NSDictionary | 查询命令状态。 |
| `processCommand(command, keyFlags, window)` | 同上 | void | 执行命令。 |
| `saveFile(mfile, uti)` | 文件路径、UTI | void | 保存文件。 |
| `checkObject(obj, window)` | 对象、窗口 | boolean | 检查对象是否在指定窗口中（JS 名 `checkNotifySenderInWindow`）。 |
| `openFileWithUTIs(types, controller, block)` | 类型数组、ViewController、回调 | void | 按 UTI 打开文件。 |
| `regsiterHtmlCommentEditor(commentEditor, htmlEditor, htmlRender, commentTag)` | 配置与标签 | void | 注册 HTML 评论编辑器。 |
| `unregsiterHtmlCommentEditorWithCommentTag(commentTag)` | 标签 | void | 注销 HTML 评论编辑器。 |

## 相关

- [StudyController](/reference/marginnote/study-controller/) — 由 `studyController(window)` 返回
- [快速开始](/guides/getting-started/) — 使用 `showHUD` 的示例
