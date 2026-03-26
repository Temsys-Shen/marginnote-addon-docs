---
title: DocumentController
description: 单个文档的控制器，提供当前文档与选区。
---

管理单个打开的文档，通过 `ReaderController.currentDocumentController` 获取当前显示的文档控制器。

## 实例成员 (Instance members)

### 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `document` | `MbBook` \| undefined | 当前文档对象。 |
| `docMd5` | `string` | 当前文档MD5。 |
| `notebookId` | `string` | 当前笔记本ID。 |
| `focusNote` | `MbBookNote` \| undefined | 当前焦点笔记。 |
| `visibleFocusNote` | `MbBookNote` \| undefined | 当前可见的焦点笔记。 |
| `lastFocusNote` | `MbBookNote` \| undefined | 上一次的焦点笔记。 |
| `selectionText` | `string` \| undefined | 用户在 PDF 中当前选中的文本。 |
| `currPageNo` | `number` | 当前页码（默认从 1 开始）。 |
| `currPageIndex` | `number` | 当前页索引（默认从 0 开始）。 |
| `isSelectionText` | `boolean` | 当前是否存在文本选区。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `imageFromSelection()` | — | `NSData` | 从当前选区导出图片数据（若可用）。 |
| `imageFromFocusNote()` | — | `NSData` | 从当前焦点笔记导出图片数据（若可用）。 |
| `setPageAtIndex(index)` | index: number | — | 跳转到指定页索引。 |
| `indicesFromPageNo(pageNo)` | pageNo: number | `NSArray<number>` | 由页码得到会的页索引列表。 |
| `indexFromPageNo(pageNo)` | pageNo: number | number | 由页码得到页索引。 |
| `pageNoFromIndex(index)` | index: number | number | 由页索引得到页码。 |
| `highlightFromSelection()` | — | `MbBookNote \| undefined` | 从当前选区创建或定位高亮笔记并返回该笔记。 |

### `highlightFromSelection`

```javascript
highlightFromSelection(): MbBookNote | undefined
```

**定义：**

从当前文档选区创建或定位一条高亮笔记并返回。

**返回：**

- 有有效选区时返回`MbBookNote`。
- 无选区时返回`undefined`。

**行为：**

- 调用前可通过`selectionText`与`isSelectionText`读取当前选区状态。
- 调用后可直接读取返回对象的`noteId`确认结果。

**副作用：**

- 会更新当前焦点笔记或当前笔记状态。
- 会刷新与选区相关的界面状态。

**最小验证：**

1. 读取`selectionText`与`isSelectionText`。
2. 调用`highlightFromSelection()`。
3. 检查返回对象是否存在且包含`noteId`。
4. 清空选区后重复调用，确认返回`undefined`。

## 类成员 (Class members)

当前接口未额外暴露 `DocumentController` 的类成员。

## 相关

- [ReaderController](/reference/marginnote/reader-controller/)
- [MbBook](/reference/marginnote/mb-book/)、[MbBookNote](/reference/marginnote/mb-book-note/)
- [教程：脑图与选区](/guides/mindmap-and-selection/)
