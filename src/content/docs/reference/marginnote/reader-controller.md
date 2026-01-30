---
title: ReaderController
description: 文档阅读区域控制器，管理当前显示的文档控制器。
---

管理一个或多个文档阅读视图，通过 `StudyController.readerController` 获取。

## 实例成员 (Instance members)

### 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `currentDocumentController` | `DocumentController` | 当前正在显示的文档控制器（getter 为 fBookViewController）。 |
| `documentControllers` | `NSMutableArray` | 所有文档控制器（getter 为 bookViewControllers）。 |

说明：该对象具备 `UIViewController` 的基础能力（例如 `view`），并额外提供“当前文档控制器/全部文档控制器”等阅读区状态。

## 类成员 (Class members)

当前运行时未额外暴露 `ReaderController` 的类成员。

## 相关

- [StudyController](/reference/marginnote/study-controller/)
- [DocumentController](/reference/marginnote/document-controller/)
