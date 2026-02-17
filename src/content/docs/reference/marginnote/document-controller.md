---
title: DocumentController
description: 单个文档的控制器，提供当前文档与选区。
---

管理单个打开的文档，通过 `ReaderController.currentDocumentController` 获取当前显示的文档控制器。

## 实例成员 (Instance members)

### 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `document` | `MbBook` \| undefined | 当前文档对象（getter 为 currBook）。 |
| `docMd5` | `string` | 当前文档 MD5（getter 为 currentBookMd5）。 |
| `notebookId` | `string` | 当前笔记本 ID（getter 为 currTopicId）。 |
| `focusNote` | `MbBookNote` \| undefined | 当前焦点笔记。 |
| `visibleFocusNote` | `MbBookNote` \| undefined | 当前可见的焦点笔记。 |
| `lastFocusNote` | `MbBookNote` \| undefined | 上一次的焦点笔记（getter 为 lastFocusNote）。 |
| `selectionText` | `string` \| undefined | 用户在 PDF 中当前选中的文本。 |
| `currPageNo` | `number` | 当前页码（运行时定义，通常从 1 开始）。 |
| `currPageIndex` | `number` | 当前页索引（运行时定义，通常从 0 开始）。 |
| `isSelectionText` | `boolean` | 当前是否存在文本选区。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `imageFromSelection()` | — | `NSData` | 从当前选区导出图片数据（若可用）。 |
| `imageFromFocusNote()` | — | `NSData` | 从当前焦点笔记导出图片数据（若可用）。 |
| `setPageAtIndex(index)` | index: number | — | 跳转到指定页索引。 |
| `indicesFromPageNo(pageNo)` | pageNo: number | `NSArray<number>` | 由页码得到可能的页索引列表。 |
| `indexFromPageNo(pageNo)` | pageNo: number | number | 由页码得到页索引。 |
| `pageNoFromIndex(index)` | index: number | number | 由页索引得到页码。 |
| `highlightFromSelection()` | — | `any` | 从当前选区生成高亮对象（类型依赖运行时）。 |

## 类成员 (Class members)

当前运行时未额外暴露 `DocumentController` 的类成员。

## 相关

- [ReaderController](/reference/marginnote/reader-controller/)
- [MbBook](/reference/marginnote/mb-book/)、[MbBookNote](/reference/marginnote/mb-book-note/)
- [教程：脑图与选区](/guides/mindmap-and-selection/)
