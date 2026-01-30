---
title: SQLiteDatabase
description: SQLite 数据库连接（JSBSQLiteDatabase），用于执行 SQL 与事务控制。
---

`SQLiteDatabase` 是插件环境中暴露的 SQLite 连接器。可用于打开/关闭数据库、执行查询/更新、事务控制、读取错误信息等。

## 类成员 (Class members)

### `databaseWithPath`

从路径创建数据库实例。

```javascript
static databaseWithPath(inPath: string): SQLiteDatabase
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `inPath` | `string` | 数据库文件路径。 |

**Return Value:**

- `SQLiteDatabase`: 新实例（需调用 `open()` 打开）。

### `isSQLiteThreadSafe`

SQLite 库是否线程安全。

```javascript
static isSQLiteThreadSafe(): boolean
```

**Return Value:**

- `boolean`: 是否线程安全。

### `sqliteLibVersion`

SQLite 库版本字符串。

```javascript
static sqliteLibVersion(): string
```

**Return Value:**

- `string`: 版本字符串。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `traceExecution` | `boolean` | 是否跟踪执行。 |
| `checkedOut` | `boolean` | 是否已检出。 |
| `crashOnErrors` | `boolean` | 出错时是否崩溃。 |
| `logsErrors` | `boolean` | 是否记录错误。 |
| `cachedStatements` | `object` | 缓存的语句。 |

### `open`

打开数据库连接。

```javascript
open(): boolean
```

**Return Value:**

- `boolean`: 是否成功。

### `close`

关闭数据库连接。

```javascript
close(): boolean
```

**Return Value:**

- `boolean`: 是否成功。

### `executeUpdate`

执行更新语句（INSERT/UPDATE/DELETE 等）。

```javascript
executeUpdate(sql: string, withArgumentsInArray: NSArray): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sql` | `string` | SQL 语句。 |
| `withArgumentsInArray` | `NSArray` | 参数数组。 |

**Return Value:**

- `boolean`: 是否成功。

### `executeQuery`

执行查询语句，返回结果集。

```javascript
executeQuery(sql: string, withArgumentsInArray: NSArray): SQLiteResultSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sql` | `string` | SQL 语句。 |
| `withArgumentsInArray` | `NSArray` | 参数数组。 |

**Return Value:**

- `SQLiteResultSet`: 结果集。

### `beginTransaction`

开始事务。

```javascript
beginTransaction(): void
```

**Return Value:**

- 无。

### `commit`

提交事务。

```javascript
commit(): void
```

**Return Value:**

- 无。

### `rollback`

回滚事务。

```javascript
rollback(): void
```

**Return Value:**

- 无。

### `lastErrorMessage`

最后一条错误消息。

```javascript
lastErrorMessage(): string
```

**Return Value:**

- `string`: 错误消息。

### `lastErrorCode`

最后一条错误码。

```javascript
lastErrorCode(): number
```

**Return Value:**

- `number`: 错误码。

### `lastError`

最后一条错误对象。

```javascript
lastError(): NSError
```

**Return Value:**

- `NSError`: 错误对象。

## 相关

- [SQLiteResultSet](/reference/utility/sqlite-result-set/)
- [SQLiteStatement](/reference/utility/sqlite-statement/)
