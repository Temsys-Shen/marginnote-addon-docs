---
title: MbModelTool
description: 数据库工具协议，Database 单例的实现类型，提供笔记/笔记本/文档的增删改查与导入导出。
---

`Database.sharedInstance()` 返回的对象即实现 `MbModelTool` 协议的单例。API 与 [Database](/reference/global/database/) 一致，本页列出完整方法签名便于对照原生接口。

## 实例成员 (Instance members)

### 查询与列表

| 方法 | 说明 |
|------|------|
| `getNoteById(noteId)` | 根据笔记 ID 获取 `MbBookNote`。 |
| `getNotebookById(topicId)` | 根据笔记本 ID 获取 `MbTopic`。 |
| `getDocumentById(docMd5)` | 根据文档 MD5 获取 `MbBook`。 |
| `getMediaByHash(hash)` | 根据媒体哈希获取 `NSData`。 |
| `getFlashcardByNoteId(noteId, topicId)` / `getFlashcardsByNoteId(noteId)` / `hasFlashcardByNoteId(noteId)` | 闪卡相关查询。 |
| `allNotebooks()` / `allDocuments()` | 获取所有笔记本/文档。 |

### 持久化、同步与归档

| 方法 | 说明 |
|------|------|
| `savedb()` | 手动保存数据库。 |
| `setNotebookSyncDirty(topicid)` | 将笔记本标记为同步脏。 |
| `saveHistoryArchiveKey(topicid, key)` / `loadHistoryArchiveKey(topicid, key)` | 历史归档。 |

### 删除、创建与克隆

| 方法 | 说明 |
|------|------|
| `deleteBookNote(noteId)` | 删除单条笔记（不删子节点）。 |
| `deleteBookNoteTree(noteId)` | 删除笔记及其所有后代。 |
| `createNoteWithTitleTopicid(title, topicid)` | 在指定笔记本创建新笔记。 |
| `cloneNotesToTopic(notes, topicid)` | 将笔记克隆到指定笔记本。 |
| `cloneNotesToFlashcardsToTopic(notes, topicid)` | 将笔记克隆为闪卡到指定笔记本。 |

### 导入导出

| 方法 | 说明 |
|------|------|
| `exportNotebookStorePath(topicid, storePath)` | 导出笔记本到路径。 |
| `importNotebookFromStorePathMerge(storePath, merge)` | 从路径导入笔记本（可选择合并）。 |

### 草稿/手写（Sketch）

| 方法 | 说明 |
|------|------|
| `getSketchNoteForMindMapFocusNoteId(topicid, focusNoteId)` | 获取脑图草稿笔记。 |
| `getSketchNoteForDocumentMd5Page(topicid, md5, page)` | 获取指定文档页的草稿笔记。 |
| `getSketchNotesForDocumentMd5Page(topicid, md5, page)` | 获取指定文档页的草稿笔记列表。 |
| `getSketchNotesForMindMap(topicid)` | 获取脑图草稿笔记列表。 |

## 类成员 (Class members)

### 类方法

| 方法 | 说明 |
|------|------|
| `sharedInstance()` | 获取单例（通常通过全局对象 [Database](/reference/global/database/) 使用）。 |
| `transDictionaryToJSCompatible(dic)` / `transArrayToJSCompatible(arr)` | 将原生容器转换为更易于 JS 使用的结构（按运行时实现）。 |

## 相关

- [Database](/reference/global/database/) — 使用同一单例的入口文档
