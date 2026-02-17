---
title: MbBook
description: 文档对象，代表一个 PDF/EPUB 文档。
---

代表一个已加入 MarginNote 的文档（如 PDF、EPUB）。通过 [Database.getDocumentById](/reference/global/database/)、[Database.allDocuments](/reference/global/database/)、或 [DocumentController.document](/reference/marginnote/document-controller/) 获取。

## 实例成员 (Instance members)

### 属性（只读）

| 属性 | 类型 | 说明 |
|------|------|------|
| `docMd5` | `string` | 文档唯一 MD5（getter 为 md5real）。 |
| `docTitle` | `string` | 文档标题（getter 为 bookTitle）。 |
| `pathFile` | `string` | 文档在 MarginNote 存储中的相对路径。 |
| `fullPathFileName` | `string` | 文档的完整路径（若环境可用）。 |
| `currentTopicId` | `string` | 当前所属笔记本 ID（getter 为 currenttopicid）。 |
| `lastVisit` | `NSDate` | 最后访问时间。 |
| `pageCount` | `number` | 总页数。 |

### 实例方法

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `textContentsForPageNo(pageNo)` | pageNo: number | `NSArray` | 获取指定页的文本内容（实现/结构依赖运行时）。 |
| `tocAll()` | — | `NSArray` | 获取文档目录（Table of Contents）。 |

## 类成员 (Class members)

当前运行时未额外暴露 `MbBook` 的类成员。

## 相关

- [Database](/reference/global/database/)、[DocumentController](/reference/marginnote/document-controller/)、[MbTopic](/reference/marginnote/mb-topic/)
