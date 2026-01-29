---
title: NotebookController
description: 脑图与大纲的控制器，提供当前笔记本与焦点笔记。
---

管理脑图和大纲的控制器，通过 `StudyController.notebookController` 获取。

## 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `mindmapView` | `MindMapView` | 脑图视图（getter 为 noteMindMap）。 |
| `outlineView` | `OutlineView` | 大纲视图。 |
| `notebookId` | `string` | 当前笔记本 ID（getter 为 currTopic）。 |
| `focusNote` | `MbBookNote` \| undefined | 当前在脑图中聚焦的笔记。 |
| `visibleFocusNote` | `MbBookNote` \| undefined | 当前可见的焦点笔记。 |

## 相关

- [StudyController](/reference/marginnote/study-controller/)
- [MindMapView](/reference/marginnote/mindmap-view/)、[MindMapNode](/reference/marginnote/mindmap-node/)
