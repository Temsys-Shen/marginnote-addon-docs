---
title: DocumentController
description: 单个文档的控制器，提供当前文档与选区。
---

管理单个打开的文档，通过 `ReaderController.currentDocumentController` 获取当前显示的文档控制器。

## 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `document` | `MbBook` \| undefined | 当前文档对象（getter 为 currBook）。 |
| `docMd5` | `string` | 当前文档 MD5（getter 为 currentBookMd5）。 |
| `notebookId` | `string` | 当前笔记本 ID（getter 为 currTopicId）。 |
| `focusNote` | `MbBookNote` \| undefined | 当前焦点笔记。 |
| `visibleFocusNote` | `MbBookNote` \| undefined | 当前可见的焦点笔记。 |
| `selectionText` | `string` \| undefined | 用户在 PDF 中当前选中的文本。 |

## 方法

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `imageFromSelection()` | `NSData` | 获取当前选中区域的截图（若头文件中有声明）。 |

## 相关

- [ReaderController](/reference/marginnote/reader-controller/)
- [MbBook](/reference/marginnote/mb-book/)、[MbBookNote](/reference/marginnote/mb-book-note/)
- [教程：脑图与选区](/guides/mindmap-and-selection/)
