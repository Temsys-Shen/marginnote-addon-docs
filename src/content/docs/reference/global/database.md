---
title: Database
description: MarginNote 核心数据库访问对象（MbModelTool），用于获取/修改笔记、笔记本与文档。
---

`Database` 即底层类型 `MbModelTool` 的单例，用于访问 MarginNote 的笔记与文档数据。通过 `Database.sharedInstance()` 获取。修改数据后建议使用 [UndoManager](/reference/utility/undo-manager/) 的 `undoGrouping(title, topicid, fn)` 包裹，并调用 `Application.sharedInstance().refreshAfterDBChanged(topicid)` 刷新界面。

## 获取实例

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `static sharedInstance()` | `MbModelTool` | 获取全局唯一的数据库工具实例。 |

## 方法

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `getNoteById(noteId)` | `noteId`: string | `MbBookNote` \| undefined | 根据笔记 ID 获取笔记。 |
| `getNotebookById(topicId)` | `topicId`: string | `MbTopic` \| undefined | 根据笔记本 ID 获取笔记本。 |
| `getDocumentById(docMd5)` | `docMd5`: string | `MbBook` \| undefined | 根据文档 MD5 获取文档。 |
| `getMediaByHash(hash)` | `hash`: string | `NSData` \| undefined | 根据媒体哈希获取二进制数据。 |
| `getFlashcardByNoteId(noteId, topicId)` | 笔记 ID、笔记本 ID | 单条笔记 | 按 Evernote 笔记 ID 与笔记本获取闪卡。 |
| `getFlashcardsByNoteId(noteId)` | `noteId`: string | `NSArray` | 按 Evernote 笔记 ID 获取所有关联闪卡。 |
| `hasFlashcardByNoteId(noteId)` | `noteId`: string | boolean | 是否存在该 Evernote 笔记的闪卡。 |
| `allNotebooks()` | — | `MbTopic[]` | 所有笔记本。 |
| `allDocuments()` | — | `MbBook[]` | 所有文档。 |
| `savedb()` | — | void | 手动保存数据库到磁盘，慎用。 |
| `setNotebookSyncDirty(topicid)` | `topicid`: string | void | 将笔记本标记为同步脏（JS 名 `setNotebookSyncDirty`）。 |
| `saveHistoryArchive(topicid, key)` | 笔记本 ID、键 | NSArray | 保存历史归档。 |
| `loadHistoryArchive(topicid, key)` | 同上 | NSArray | 加载历史归档。 |
| `deleteBookNote(noteId)` | `noteId`: string | void | 删除单条笔记（不删子节点）。 |
| `deleteBookNoteTree(noteId)` | `noteId`: string | void | 删除笔记及其所有后代。 |
| `cloneNotes(notes, topicId)` | 笔记数组、目标笔记本 ID | NSArray | 将笔记克隆到指定笔记本。 |
| `cloneNotesToFlashcards(notes, topicId)` | 同上 | NSArray | 将笔记克隆为闪卡到指定笔记本。 |
| `exportNotebook(topicid, storePath)` | 笔记本 ID、存储路径 | boolean | 导出笔记本。 |
| `importNotebookFromStorePath(storePath, merge)` | 路径、是否合并 | 导入结果 | 从路径导入笔记本。 |

## 相关

- [MbBookNote](/reference/marginnote/mb-book-note/)、[MbTopic](/reference/marginnote/mb-topic/)、[MbBook](/reference/marginnote/mb-book/)
- [教程：笔记与数据库](/guides/notes-and-database/)
