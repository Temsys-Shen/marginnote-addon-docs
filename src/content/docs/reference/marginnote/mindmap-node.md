---
title: MindMapNode
description: 脑图中的单个节点，关联一条 MbBookNote 与父子节点、位置。
---

代表脑图中的一个节点，与一条 [MbBookNote](/reference/marginnote/mb-book-note/) 一一对应。通过 `MindMapView.mindmapNodes` 或选中列表 `selViewLst` 中的项获取。

## 实例成员 (Instance members)

### 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `note` | `MbBookNote` | 该节点关联的笔记对象。 |
| `parentNode` | `MindMapNode` \| undefined | 父节点（getter 为 parentNote，类型为 MindMapNote）。 |
| `childNodes` | `NSArray` | 子节点数组（getter 为 childNotes）。 |
| `summaryLinks` | `NSArray` | 摘要链接。 |
| `frame` | `CGRect` | 节点在脑图视图中的位置与大小。 |

## 类成员 (Class members)

当前运行时未额外暴露 `MindMapNode` 的类成员。

## 相关

- [MindMapView](/reference/marginnote/mindmap-view/)
- [MbBookNote](/reference/marginnote/mb-book-note/)
