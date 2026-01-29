---
title: MbTopic
description: 笔记本（主题）对象，包含根笔记列表与关联文档。
---

代表一个笔记本（主题）。通过 [Database.getNotebookById](/reference/global/database/)、[Database.allNotebooks](/reference/global/database/)、或控制器上下文获取。

## 属性

| 属性 | 类型 | R/W | 说明 |
|------|------|-----|------|
| `topicId` | `string` | R | 笔记本唯一 ID。 |
| `title` | `string` | R/W | 笔记本标题（setter 为 setTopicTitle）。 |
| `lastVisit` | `NSDate` | R | 最后访问时间。 |
| `mainDocMd5` | `string` | R | 主文档 MD5（getter 为 localbookmd5）。 |
| `historyDate` | `NSDate` | R | 历史日期。 |
| `syncMode` | `NSNumber` | R | 同步模式。 |
| `categoryList` | `string` | R | 分类列表（getter 为 taglist）。 |
| `hashtags` | `string` | R | 标签。 |
| `docList` | `string` | R | 文档列表（getter 为 booklist）。 |
| `options` | `NSDictionary` | R | 选项。 |
| `documents` | `NSArray` | R | 关联文档数组（getter 为 books）。 |
| `notes` | `NSArray` | R | 笔记本中所有**根节点**笔记。 |
| `hideLinksInMindMapNode` | `boolean` | R/W | 是否在脑图节点中隐藏链接。 |

## 相关

- [Database](/reference/global/database/)、[MbBookNote](/reference/marginnote/mb-book-note/)、[MbBook](/reference/marginnote/mb-book/)
