---
title: NoteComment
description: 笔记评论条目的类型说明，comments 数组中的元素结构。
---

`MbBookNote.comments` 是评论数组，每项为具有 `type` 属性的对象，根据类型不同包含不同字段。

## 实例成员 (Instance members)

### 类型与结构

| type | 说明 | 其他字段 |
|------|------|----------|
| `TextNote` | 纯文本评论 | `text`: string |
| `LinkNote` | 指向另一条笔记的链接 | `noteid`: string（目标笔记 ID） |
| `PaintNote` | 手写/图片评论 | `paint`: string（媒体哈希，可用 Database.getMediaByHash 取数据） |
| `HtmlNote` | 富文本评论 | `html`: string，`text`: string |

## 类成员 (Class members)

`NoteComment` 是数据结构说明，不以类成员形式使用。

## 相关

- [MbBookNote](/reference/marginnote/mb-book-note/) — `comments`、`appendTextComment`、`appendNoteLink`、`removeCommentByIndex`
- [Database.getMediaByHash](/reference/global/database/) — 用于 PaintNote 的图片数据
