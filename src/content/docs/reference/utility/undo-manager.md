---
title: UndoManager
description: 撤销管理，修改笔记数据时应用 undoGrouping 以支持撤销并刷新界面。
---

修改笔记/笔记本数据时，应使用 `undoGrouping(actionName, topicid, block)` 包裹修改逻辑，以便支持撤销并在块执行后刷新界面。通过 `UndoManager.sharedInstance()` 获取（类型为 JSBUndoManager）。

## 类成员 (Class members)

### `sharedInstance`

获取全局 UndoManager。

```javascript
static sharedInstance(): JSBUndoManager
```

**Return Value:**

- `JSBUndoManager`: 单例对象。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `canUndo` | `boolean` | 是否可撤销。 |
| `canRedo` | `boolean` | 是否可重做。 |

### 方法

### `undoGrouping`

在指定笔记本下执行 block，作为一次可撤销操作；执行后界面会刷新。

```javascript
undoGrouping(actionName: string, topicid: string, block: () => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `actionName` | `string` | 操作名称（显示在撤销菜单中）。 |
| `topicid` | `string` | 笔记本 ID (`inNotebook`)。 |
| `block` | `() => void` | 执行修改逻辑的回调函数。 |

### `undo`

执行撤销。

```javascript
undo(): void
```

### `redo`

执行重做。

```javascript
redo(): void
```

### `clearAll`

清空撤销栈。

```javascript
clearAll(): void
```

## 使用示例

修改笔记标题时，先取笔记本 ID（如 note.notebookId），再在 block 内修改 note.noteTitle，块外可调用 `Application.sharedInstance().refreshAfterDBChanged(topicid)`（若需）。

## 相关

- [Database](/reference/global/database/)、[MbBookNote](/reference/marginnote/mb-book-note/)
- [教程：笔记与数据库](/guides/notes-and-database/)
