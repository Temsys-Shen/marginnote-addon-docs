---
title: SearchManager
description: 搜索与索引管理器（全文检索、URL 搜索、相似笔记检索等）。
---

`SearchManager` 通过 `Application.sharedInstance().searchManager` 获取。其返回结构与索引能力会随版本变化；建议先在控制台打印返回值结构再做兼容处理。

## 实例成员 (Instance members)

### 属性（只读）

| 属性 | 类型 | 说明 |
|---|---|---|
| `ftsIndexing` | `boolean` | FTS 索引是否正在构建/工作中。 |
| `propIndexing` | `boolean` | 属性索引是否正在构建/工作中。 |
| `vectorIndexing` | `boolean` | 向量索引是否正在构建/工作中。 |

### 常用搜索

| 方法 | 说明 |
|---|---|
| `searchText(query, titleOnly, topicid, beginsWith, limit)` | 文本搜索。 |
| `searchTextNoteOnly(query, titleOnly, topicid, beginsWith, limit, noteOnly)` | 文本搜索（可限定只搜笔记）。 |
| `searchTextWordList(textWordLst, titleOnly, topicid, beginsWith, limit)` | 使用分词列表进行搜索。 |
| `searchFts3Text(query, titleOnly, topicid, limit, noteOnly)` | 通过 FTS3 搜索（实现依赖运行时）。 |
| `searchURLs(urls, topicid)` | 按 URL 列表搜索。 |
| `searchPage(query, beginsWith, limit)` | 页内搜索（实现依赖运行时）。 |
| `snippetForFts3RowId(rowid)` / `snippetForPageRowId(rowid)` | 获取 snippet（结果摘要）。 |

### 同步与索引

| 方法 | 说明 |
|---|---|
| `syncTopicForceBlock(topicid, force, block)` | 同步/构建指定笔记本的索引（block 为回调）。 |
| `syncDB()` / `syncDBAfterMigration()` | 同步索引数据库。 |
| `hasTopicIndex(topicid)` / `hasVectorIndex(topicid)` / `hasBookIndex(md5)` | 检查索引是否存在。 |
| `resetBookIndex()` | 重置文档索引（慎用）。 |

### 相似检索（向量）

| 方法 | 说明 |
|---|---|
| `findSimilarNotes(queryVector, topicId, k)` | 向量相似笔记检索。 |
| `batchFindSimilarNotes(queryVectors, topicId, k)` | 批量向量相似检索。 |
| `findSimilarNotesHybrid(queryVector, queryText, topicId, k, semanticWeight, bm25Weight)` | 语义+BM25 混合检索。 |
| `loadVectorCacheForTopic(topicId)` / `syncTopicVectorsForceCompletion(topicId, force, completion)` / `invalidateVectorCacheForTopics(topicIds)` | 向量缓存相关（实现依赖运行时）。 |

## 相关

- [Application](/reference/global/application/) — `Application.sharedInstance().searchManager`

