---
title: JSExtension
description: 插件主类必须继承的基类，处理生命周期与工具栏命令。
---

你的插件主类必须通过 `JSB.defineClass('MyAddon : JSExtension', ...)` 继承 JSExtension，用于处理窗口/笔记本/文档的生命周期以及工具栏图标状态。

## 实例成员 (Instance members)

### 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `window` | `UIWindow` | 当前插件所在窗口。在实例方法内也可用 `self.window`。 |

### 实例方法（生命周期）

| 方法 | 参数 | 说明 |
|------|------|------|
| `sceneWillConnect()` | — | 插件窗口即将创建时调用，可在此做 UI 初始化。 |
| `sceneDidDisconnect()` | — | 插件窗口断开时调用。 |
| `sceneWillResignActive()` | — | 窗口即将失去活跃时调用。 |
| `sceneDidBecomeActive()` | — | 窗口变为活跃时调用。 |
| `notebookWillOpen(topicid)` | `topicid`: string | 某个笔记本即将打开时调用。 |
| `notebookWillClose(topicid)` | `topicid`: string | 某个笔记本即将关闭时调用。 |
| `documentDidOpen(docmd5)` | `docmd5`: string | 某文档已打开时调用。 |
| `documentWillClose(docmd5)` | `docmd5`: string | 某文档即将关闭时调用。 |

### 实例方法（工具栏与扩展）

| 方法 | 返回值/参数 | 说明 |
|------|-------------|------|
| `queryAddonCommandStatus()` | `NSDictionary` \| null | MarginNote 用来决定工具栏图标状态。必须返回包含 `image`、`object`、`selector`、`checked` 的对象；不显示图标可返回 null。 |
| `additionalTitleLinksOfNotebook(topicid)` | `NSArray` | 为指定笔记本提供额外标题链接。 |
| `viewControllerForTitleLink(titleLink)` | `UIViewController` | 根据标题链接返回对应视图控制器。 |
| `controllerWillLayoutSubviews(controller)` | `controller`: UIViewController | 指定控制器即将布局子视图时调用，可在此调整插件面板位置。 |
| `additionalShortcutKeys()` | `NSArray` | 返回插件提供的额外快捷键。 |
| `queryShortcutKey(command, keyFlags)` | `NSDictionary` | 查询某快捷键的状态。 |
| `processShortcutKey(command, keyFlags)` | — | 处理快捷键按下。 |

## 类成员 (Class members)

### 类方法

| 方法 | 说明 |
|------|------|
| `addonDidConnect()` | 插件被 MarginNote 加载后调用。 |
| `addonWillDisconnect()` | 插件即将卸载时调用。 |
| `applicationDidEnterBackground()` | 应用进入后台时调用。 |
| `applicationWillEnterForeground()` | 应用即将进入前台时调用。 |
| `applicationDidReceiveLocalNotification(notify)` | 收到本地通知时调用。 |

## 相关

- [JSB](/reference/global/jsb/) — 使用 `defineClass('MyAddon : JSExtension', ...)`
- [快速开始](/guides/getting-started/)、[生命周期与窗口](/guides/lifecycle-and-window/)、[工具栏与命令](/guides/toolbar-and-commands/)
