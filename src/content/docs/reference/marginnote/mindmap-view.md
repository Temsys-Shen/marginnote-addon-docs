---
title: MindMapView
description: 脑图视图，继承自 UIScrollView，展示脑图节点列表与选中项。
---

脑图视图，通过 `NotebookController.mindmapView` 获取。它的行为与 `UIScrollView` 接近（可滚动/缩放），但额外暴露了脑图节点列表与选中项。

## 实例成员 (Instance members)

### 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `mindmapNodes` | `NSArray` | 脑图中所有节点（MindMapNode 或等价类型）。 |
| `selViewLst` | `NSArray` | 当前选中的节点视图列表，每项通常包含 `note`（MindMapNode）与 `view`（UIView）。 |

## 类成员 (Class members)

当前运行时未额外暴露 `MindMapView` 的类成员。

## 相关

- [NotebookController](/reference/marginnote/notebook-controller/)
- [MindMapNode](/reference/marginnote/mindmap-node/)
