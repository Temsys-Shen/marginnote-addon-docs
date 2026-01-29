---
title: StudyController
description: 学习场景主视图控制器，访问脑图与文档的入口。
---

学习场景的主视图控制器，通过 `Application.sharedInstance().studyController(window)` 获取（通常传入 `self.window`）。是访问脑图、文档、当前笔记本等的根对象。

## 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `view` | `UIView` | 控制器主视图，可在此添加插件 UI。 |
| `notebookController` | `NotebookController` | 脑图/大纲控制器（getter 为 `fSearchViewController`，JS 侧为 notebookController）。 |
| `readerController` | `ReaderController` | 文档阅读区域控制器（getter 为 `detailController`）。 |
| `studyMode` | `number` | 当前学习模式：0/1 文档模式，2 学习模式，3 复习模式。 |
| `narrowMode` | `boolean` | 是否窄屏模式（窄屏下书本分屏模式 1 不可用）。 |
| `docMapSplitMode` | `number` | 书本/脑图分屏模式：0 全脑图，1 半脑图半文档，2 全文档（getter/setter 为 bookSplitMode）。 |
| `rightMapMode` | `boolean` | 脑图是否在右侧。 |

## 方法

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `focusNoteInMindMapById(noteId)` | `noteId`: string | void | 在脑图中聚焦并高亮指定笔记。 |
| `focusNoteInDocumentById(noteId)` | `noteId`: string | void | 在文档中聚焦指定笔记。 |
| `refreshAddonCommands()` | — | void | 强制刷新插件在工具栏的图标状态。 |

## 相关

- [Application](/reference/global/application/) — `studyController(window)`
- [NotebookController](/reference/marginnote/notebook-controller/)、[ReaderController](/reference/marginnote/reader-controller/)
