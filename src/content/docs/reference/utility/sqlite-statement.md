---
title: SQLiteStatement
description: SQLite 语句对象（JSBSQLiteStatement），用于缓存/复用预编译语句。
---

`SQLiteStatement` 表示一个 SQLite 语句对象，通常由 SQLite 库内部管理与缓存。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `useCount` | `number` | 使用次数。 |
| `query` | `string` | 查询 SQL。 |
| `inUse` | `boolean` | 是否正在使用。 |

### `close`

关闭语句并释放资源。

```javascript
close(): void
```

**Return Value:**

- 无。

### `reset`

重置语句以便再次执行。

```javascript
reset(): void
```

**Return Value:**

- 无。

## 类成员 (Class members)

当前运行时未额外暴露 `SQLiteStatement` 的类成员。
