---
title: NoteComment
description: 笔记评论条目的类型说明，comments 数组中的元素结构。
---

`MbBookNote.comments` 是评论数组，每项为具有 `type` 属性的对象，根据类型不同包含不同字段。

## 实例成员 (Instance members)

### 类型与结构

| type | 说明 | 其他字段 |
|------|------|----------|
| `TextNote` | 文本评论（包括纯文本、Markdown、链接笔记） | `text`: string，`markdown`: boolean（可选，是否为 Markdown 格式） |
| `PaintNote` | 手写/图片评论 | `paint`: string（媒体哈希，可用 Database.getMediaByHash 取数据） |

**说明**：
- 所有文本类评论（纯文本、Markdown、链接笔记）现在统一为 `TextNote` 类型
- Markdown 评论通过 `markdown: true` 字段标识
- 链接笔记的 `text` 字段存储格式为 `marginnote4app://note/{noteId}`

## 类成员 (Class members)

`NoteComment` 是数据结构说明，不以类成员形式使用。

## 相关

- [MbBookNote](/reference/marginnote/mb-book-note/) — `comments`、`appendTextComment`、`appendNoteLink`、`removeCommentByIndex`
- [Database.getMediaByHash](/reference/global/database/) — 用于 PaintNote 的图片数据
