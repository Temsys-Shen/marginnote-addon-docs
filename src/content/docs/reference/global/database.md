---
title: Database
description: MarginNote 核心数据库访问对象（MbModelTool），用于获取/修改笔记、笔记本与文档。
---

`Database` 即底层类型 `MbModelTool` 的单例，用于访问 MarginNote 的笔记与文档数据。通过 `Database.sharedInstance()` 获取。修改数据后建议使用 [UndoManager](/reference/utility/undo-manager/) 的 `undoGrouping(title, topicid, fn)` 包裹，并调用 `Application.sharedInstance().refreshAfterDBChanged(topicid)` 刷新界面。

## 类成员 (Class members)

### `sharedInstance`

获取全局唯一的数据库工具实例。

```javascript
static sharedInstance(): MbModelTool
```

**Return Value:**

- `MbModelTool`: 数据库工具单例。

## 实例成员 (Instance members)

### 方法

### `getNoteById`

根据笔记 ID 获取笔记。

```javascript
getNoteById(noteId: string): MbBookNote | undefined
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `noteId` | `string` | 笔记唯一 ID。 |

**Return Value:**

- `MbBookNote | undefined`: 对应的笔记对象，若不存在则返回 undefined。

### `getNotebookById`

根据笔记本 ID 获取笔记本。

```javascript
getNotebookById(topicId: string): MbTopic | undefined
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `topicId` | `string` | 笔记本 ID。 |

**Return Value:**

- `MbTopic | undefined`: 对应的笔记本对象。

### `getDocumentById`

根据文档 MD5 获取文档。

```javascript
getDocumentById(docMd5: string): MbBook | undefined
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `docMd5` | `string` | 文档 MD5。 |

**Return Value:**

- `MbBook | undefined`: 对应的文档对象。

### `getMediaByHash`

根据媒体哈希获取二进制数据。

```javascript
getMediaByHash(hash: string): NSData | undefined
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `hash` | `string` | 媒体哈希字符串。 |

**Return Value:**

- `NSData | undefined`: 媒体数据。

### `getFlashcardByNoteId`

按 Evernote 笔记 ID 与笔记本获取闪卡（笔记）。

```javascript
getFlashcardByNoteId(noteId: string, topicId: string): MbBookNote | undefined
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `noteId` | `string` | 原始笔记 ID (Evernote ID)。 |
| `topicId` | `string` | 笔记本 ID。 |

**Return Value:**

- `MbBookNote | undefined`: 对应的闪卡笔记。

### `getFlashcardsByNoteId`

按 Evernote 笔记 ID 获取所有关联闪卡。

```javascript
getFlashcardsByNoteId(noteId: string): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `noteId` | `string` | 原始笔记 ID。 |

**Return Value:**

- `NSArray`: 包含 `MbBookNote` 的数组。

### `hasFlashcardByNoteId`

是否存在该 Evernote 笔记的闪卡。

```javascript
hasFlashcardByNoteId(noteId: string): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `noteId` | `string` | 原始笔记 ID。 |

**Return Value:**

- `boolean`: 是否存在。

### `allNotebooks`

获取所有笔记本。

```javascript
allNotebooks(): NSArray
```

**Return Value:**

- `NSArray`: 包含所有 `MbTopic` 的数组。

### `allDocuments`

获取所有文档。

```javascript
allDocuments(): NSArray
```

**Return Value:**

- `NSArray`: 包含所有 `MbBook` 的数组。

### `savedb`

手动保存数据库到磁盘。慎用，通常由系统自动管理。

```javascript
savedb(): void
```

### `setNotebookSyncDirty`

将笔记本标记为同步脏（需要同步）。

```javascript
setNotebookSyncDirty(topicid: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `topicid` | `string` | 笔记本 ID。 |

### `saveHistoryArchive`

保存历史归档。

```javascript
saveHistoryArchive(topicid: string, key: string): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `topicid` | `string` | 笔记本 ID。 |
| `key` | `string` | 归档键名。 |

**Return Value:**

- `NSArray`: 归档数据。

### `loadHistoryArchive`

加载历史归档。

```javascript
loadHistoryArchive(topicid: string, key: string): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `topicid` | `string` | 笔记本 ID。 |
| `key` | `string` | 归档键名。 |

**Return Value:**

- `NSArray`: 归档数据。

### `deleteBookNote`

删除单条笔记（不删子节点）。

```javascript
deleteBookNote(noteId: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `noteId` | `string` | 笔记 ID。 |

### `deleteBookNoteTree`

删除笔记及其所有后代。

```javascript
deleteBookNoteTree(noteId: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `noteId` | `string` | 笔记 ID。 |

### `cloneNotes`

将笔记克隆到指定笔记本。

```javascript
cloneNotes(notes: NSArray, topicId: string): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `notes` | `NSArray` | `MbBookNote` 数组。 |
| `topicId` | `string` | 目标笔记本 ID。 |

**Return Value:**

- `NSArray`: 克隆后的新笔记数组。

### `cloneNotesToFlashcards`

将笔记克隆为闪卡到指定笔记本。

```javascript
cloneNotesToFlashcards(notes: NSArray, topicId: string): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `notes` | `NSArray` | `MbBookNote` 数组。 |
| `topicId` | `string` | 目标笔记本 ID。 |

**Return Value:**

- `NSArray`: 克隆后的新笔记数组。

### `exportNotebook`

导出笔记本。

```javascript
exportNotebook(topicid: string, storePath: string): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `topicid` | `string` | 笔记本 ID。 |
| `storePath` | `string` | 导出路径。 |

**Return Value:**

- `boolean`: 是否成功。

### `importNotebookFromStorePath`

从路径导入笔记本。

```javascript
importNotebookFromStorePath(storePath: string, merge: boolean): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `storePath` | `string` | 导入文件路径。 |
| `merge` | `boolean` | 是否合并。 |

**Return Value:**

- `any`: 导入结果（通常为导入的笔记本对象或状态）。

## 相关

- [MbBookNote](/reference/marginnote/mb-book-note/)、[MbTopic](/reference/marginnote/mb-topic/)、[MbBook](/reference/marginnote/mb-book/)
- [教程：笔记与数据库](/guides/notes-and-database/)
