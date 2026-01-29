---
title: UndoManager
description: 撤销管理，修改笔记数据时应用 undoGrouping 以支持撤销并刷新界面。
---

修改笔记/笔记本数据时，应使用 `undoGrouping(actionName, topicid, block)` 包裹修改逻辑，以便支持撤销并在块执行后刷新界面。通过 `UndoManager.sharedInstance()` 获取（类型为 JSBUndoManager）。

## 获取实例

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `static sharedInstance()` | JSBUndoManager | 获取全局 UndoManager。 |

## 方法

| 方法 | 参数 | 说明 |
|------|------|------|
| `undoGrouping(actionName, inNotebook topicid, block)` | actionName: string；topicid: string；block: JSValue（无参函数） | 在指定笔记本下执行 block，作为一次可撤销操作；执行后界面会刷新。 |
| `undo()` | — | 执行撤销。 |
| `redo()` | — | 执行重做。 |
| `canUndo` / `canRedo` | — | 是否可撤销/重做。 |
| `clearAll()` | — | 清空撤销栈。 |

## 使用示例

修改笔记标题时，先取笔记本 ID（如 note.notebookId），再在 block 内修改 note.noteTitle，块外可调用 `Application.sharedInstance().refreshAfterDBChanged(topicid)`（若需）。

## 相关

- [Database](/reference/global/database/)、[MbBookNote](/reference/marginnote/mb-book-note/)
- [教程：笔记与数据库](/guides/notes-and-database/)
