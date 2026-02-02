---
title: MbBookNote
description: 笔记核心对象，代表脑图中的一条笔记及其摘录、评论、链接与层级。
---

插件开发中最核心的数据对象，代表一条笔记（脑图节点）。可通过 [Database.getNoteById](/reference/global/database/)、[NotebookController.focusNote](/reference/marginnote/notebook-controller/)、[MindMapNode.note](/reference/marginnote/mindmap-node/) 等获取。修改后建议使用 [UndoManager.undoGrouping](/reference/utility/undo-manager/) 包裹并刷新界面。

## 实例成员 (Instance members)

### 可读写属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `noteTitle` | `string` | 笔记标题。 |
| `excerptText` | `string` | 摘录文本。 |
| `colorIndex` | `number` | 颜色索引 (0–15)。 |
| `fillIndex` | `number` | 填充类型。 |
| `mindmapPosition` | `CGPoint` | 脑图中的位置。 |

### 只读属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `noteId` | `string` | 笔记唯一 ID。 |
| `docMd5` | `string` | 来源文档 MD5。 |
| `notebookId` | `string` | 所属笔记本 ID。 |
| `startPage` / `endPage` | `NSNumber` | 摘录起止页码。 |
| `startPos` / `endPos` | `string` | 摘录起止位置。 |
| `excerptPic` | `NSDictionary` | 摘录图片信息。 |
| `createDate` / `modifiedDate` | `NSDate` | 创建/修改时间。 |
| `mediaList` | `string` | 媒体列表。 |
| `originNoteId` | `string` | 原始笔记 ID（如 Evernote）。 |
| `mindmapBranchClose` | `NSNumber` | 脑图分支是否折叠。 |
| `notesText` | `string` | 笔记文本聚合。 |
| `groupNoteId` | `string` | 分组笔记 ID。 |
| `comments` | `NSArray` | 评论数组，元素为 [NoteComment](/reference/marginnote/note-comment/) 结构。 |
| `parentNote` | `MbBookNote` \| undefined | 父笔记。 |
| `linkedNotes` | `NSArray` | 链接的笔记。 |
| `childNotes` | `NSArray` | 子笔记数组。 |
| `summaryLinks` | `NSArray` | 摘要链接。 |
| `zLevel` / `hidden` / `toc` / `annotation` / `textFirst` / `groupMode` / `flashcard` / `flagged` | `NSNumber` | 各类标志。 |
| `summary` | `boolean` | 是否有摘要链接（getter hasSummaryLinks）。 |
| `textHighlight` / `options` | `NSDictionary` | 文本高亮与选项。 |

### 实例方法

### `appendTextComment`

添加一条文本评论。

```javascript
appendTextComment(text: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | 评论内容。 |

### `appendMarkdownComment`

添加一条 Markdown 格式评论。

```javascript
appendMarkdownComment(text: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | Markdown 格式的评论内容。 |

### `appendNoteLink`

添加指向另一条笔记的链接（JS 中也可用 addNoteLink）。

```javascript
appendNoteLink(note: MbBookNote): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `note` | `MbBookNote` | 目标笔记对象。 |

**说明**：会在 `comments` 数组中添加一条 `TextNote` 类型的评论，`text` 字段存储格式为 `marginnote4app://note/{noteId}`。

### `appendHtmlComment`

添加 HTML 评论（已废弃，建议使用 `appendMarkdownComment`）。

```javascript
appendHtmlComment(html: string, text: string, tag: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `html` | `string` | HTML 内容。 |
| `text` | `string` | 纯文本内容（用于搜索等）。 |
| `tag` | `string` | 标签/尺寸信息。 |

**说明**：此方法已废弃，HTML 评论不再单独存储，建议使用 `appendMarkdownComment` 替代。

### `removeCommentByIndex`

按索引删除一条评论。

```javascript
removeCommentByIndex(index: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 评论在 `comments` 数组中的索引。 |

### `clearFormat`

清除笔记文本格式。

```javascript
clearFormat(): void
```

### `paste`

粘贴（将剪贴板内容作为评论或摘录）。

```javascript
paste(): void
```

### `allNoteText`

获取笔记全部文本（标题+摘录+评论）。

```javascript
allNoteText(): string
```

**Return Value:**

- `string`: 聚合文本。

## 类成员 (Class members)

当前运行时未额外暴露 `MbBookNote` 的类成员。

## 创建笔记

创建新笔记的方法**不在** `MbBookNote` 类上，而是在全局注入的 `Note` 对象上：

- [Note](/reference/global/note/) — `Note.createWithTitleNotebookDocument(title, notebook, doc)`

## 相关

- [NoteComment](/reference/marginnote/note-comment/)、[MbTopic](/reference/marginnote/mb-topic/)、[MbBook](/reference/marginnote/mb-book/)
- [教程：笔记与数据库](/guides/notes-and-database/)
