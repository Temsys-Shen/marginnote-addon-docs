---
title: ReaderController
description: 文档阅读区域控制器，管理当前显示的文档控制器。
---

管理一个或多个文档阅读视图，通过 `StudyController.readerController` 获取。

## 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `currentDocumentController` | `DocumentController` | 当前正在显示的文档控制器（getter 为 fBookViewController）。 |
| `documentControllers` | `NSMutableArray` | 所有文档控制器（getter 为 bookViewControllers）。 |

## 相关

- [StudyController](/reference/marginnote/study-controller/)
- [DocumentController](/reference/marginnote/document-controller/)
