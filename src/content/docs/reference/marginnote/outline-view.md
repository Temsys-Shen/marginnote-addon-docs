---
title: OutlineView
description: 大纲视图（旧版接口）。继承自 UITableView，并提供从 indexPath 反查笔记的能力。
---

`OutlineView` 用于展示笔记本的大纲/列表视图。在插件运行时它继承自 [UITableView](/reference/uikit/uitable-view/)，并额外暴露了一个把 `indexPath` 映射回笔记对象的方法。

## 实例成员 (Instance members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `noteFromIndexPath(indexPath)` | indexPath: NSIndexPath | MbBookNote \| null | 根据表格行的 `indexPath` 获取对应的笔记对象。 |

## 类成员 (Class members)

当前运行时未额外暴露 `OutlineView` 的类成员。

## 相关

- [NotebookController](/reference/marginnote/notebook-controller/)
- [MbBookNote](/reference/marginnote/mb-book-note/)
- [UITableView](/reference/uikit/uitable-view/)
- [NSIndexPath](/reference/foundation/ns-index-path/)
