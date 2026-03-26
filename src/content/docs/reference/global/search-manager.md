---
title: SearchManager
description: 搜索与索引管理器（全文检索、URL 搜索、相似笔记检索等）。
---

`SearchManager` 通过 `Application.sharedInstance().searchManager` 获取。其返回结构与索引能力会随版本变化；先在控制台打印返回值结构再做兼容处理。

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
| `searchFts3Text(query, titleOnly, topicid, limit, noteOnly)` | 通过 FTS3 搜索。 |
| `searchURLs(urls, topicid)` | 按 URL 列表搜索。插件环境`urls`必须为`NSArray`，传原始字符串会报`TypeError: Cannot convert primitive to NSArray`。`topicid`可传`string`或`NSArray`。 |
| `searchPage(query, beginsWith, limit)` | 页内搜索。 |
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
| `loadVectorCacheForTopic(topicId)` / `syncTopicVectorsForceCompletion(topicId, force, completion)` / `invalidateVectorCacheForTopics(topicIds)` | 向量缓存相关。 |

### 已确认行为

- `searchPage(...)`有命中时返回数组对象，无命中时返回空数组。
- `searchPage("", ...)`返回`undefined`，不是空数组。
- 当前样本中`searchFts3Text(...)`有命中与无命中都会返回空数组，结果受索引状态影响较大。
- `snippetForFts3RowId(rowid)`与`snippetForPageRowId(rowid)`在当前样本中返回`undefined`。

## 相关

- [Application](/reference/global/application/) — `Application.sharedInstance().searchManager`
