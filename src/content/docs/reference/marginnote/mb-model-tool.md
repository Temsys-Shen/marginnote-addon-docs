---
title: MbModelTool
description: 数据库工具协议，Database 单例的实现类型，提供笔记/笔记本/文档的增删改查与导入导出。
---

`Database.sharedInstance()` 返回的对象即实现 `MbModelTool` 协议的单例。API 与 [Database](/reference/global/database/) 一致，本页列出完整方法签名便于对照原生接口。

## 单例与查询

| 方法 | 说明 |
|------|------|
| `sharedInstance()` | 获取单例。 |
| `getNoteById(noteId)` | 根据笔记 ID 获取 MbBookNote。 |
| `getNotebookById(topicId)` | 根据笔记本 ID 获取 MbTopic。 |
| `getDocumentById(docMd5)` | 根据文档 MD5 获取 MbBook。 |
| `getMediaByHash(hash)` | 根据媒体哈希获取 NSData。 |
| `getFlashcardByNoteId(noteId, topicId)` / `getFlashcardsByNoteId(noteId)` / `hasFlashcardByNoteId(noteId)` | 闪卡相关查询。 |
| `allNotebooks()` / `allDocuments()` | 所有笔记本/文档。 |

## 持久化与同步

| 方法 | 说明 |
|------|------|
| `savedb()` | 手动保存数据库。 |
| `setNotebookSyncDirty(topicid)` | 将笔记本标记为同步脏。 |
| `saveHistoryArchive(topicid, key)` / `loadHistoryArchive(topicid, key)` | 历史归档。 |

## 删除与克隆

| 方法 | 说明 |
|------|------|
| `deleteBookNote(noteId)` | 删除单条笔记（不删子节点）。 |
| `deleteBookNoteTree(noteId)` | 删除笔记及其所有后代。 |
| `cloneNotes(notes, topicId)` / `cloneNotesToFlashcards(notes, topicId)` | 克隆笔记到指定笔记本或闪卡。 |

## 导入导出

| 方法 | 说明 |
|------|------|
| `exportNotebook(topicid, storePath)` | 导出笔记本。 |
| `importNotebookFromStorePath(storePath, merge)` | 从路径导入笔记本。 |

## 相关

- [Database](/reference/global/database/) — 使用同一单例的入口文档
