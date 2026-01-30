---
title: SQLiteResultSet
description: SQLite 查询结果集（JSBSQLiteResultSet），用于逐行读取列值。
---

`SQLiteResultSet` 是查询结果集对象，支持 `next()` 迭代与按列名/列索引读取数据。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `query` | `string` | 查询 SQL。 |
| `columnNameToIndexMap` | `object` | 列名到索引的映射。 |
| `statement` | `SQLiteStatement` | 关联的语句对象。 |

### `next`

移动到下一行。

```javascript
next(): boolean
```

**Return Value:**

- `boolean`: 是否有下一行。

### `nextWithError`

移动到下一行并接收错误。

```javascript
nextWithError(outErr: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `outErr` | `any` | 输出参数，接收错误。 |

**Return Value:**

- `boolean`: 是否有下一行。

### `hasAnotherRow`

是否还有下一行。

```javascript
hasAnotherRow(): boolean
```

**Return Value:**

- `boolean`: 是否还有行。

### `columnCount`

列数。

```javascript
columnCount(): number
```

**Return Value:**

- `number`: 列数。

### `columnIndexForName`

列名对应的索引。

```javascript
columnIndexForName(name: string): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 列名。 |

**Return Value:**

- `number`: 列索引。

### `columnNameForIndex`

索引对应的列名。

```javascript
columnNameForIndex(index: number): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 列索引。 |

**Return Value:**

- `string`: 列名。

### `intForColumn`

按列名取 int。

```javascript
intForColumn(name: string): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 列名。 |

**Return Value:**

- `number`: 整数值。

### `longForColumn`

按列名取 long。

```javascript
longForColumn(name: string): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 列名。 |

**Return Value:**

- `number`: 长整值。

### `doubleForColumn`

按列名取 double。

```javascript
doubleForColumn(name: string): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 列名。 |

**Return Value:**

- `number`: 双精度值。

### `stringForColumn`

按列名取 string。

```javascript
stringForColumn(name: string): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 列名。 |

**Return Value:**

- `string`: 字符串值。

### `dataForColumn`

按列名取 NSData。

```javascript
dataForColumn(name: string): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 列名。 |

**Return Value:**

- `NSData`: 数据值。

### `dateForColumn`

按列名取日期。

```javascript
dateForColumn(name: string): NSDate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 列名。 |

**Return Value:**

- `NSDate`: 日期值。

### `objectForKeyedSubscript`

按列名取值（下标访问）。

```javascript
objectForKeyedSubscript(name: string): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 列名。 |

**Return Value:**

- `any`: 列值。

### `objectAtIndexedSubscript`

按列索引取值（下标访问）。

```javascript
objectAtIndexedSubscript(index: number): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 列索引。 |

**Return Value:**

- `any`: 列值。

### `resultDictionary`

当前行转为字典（列名→值）。

```javascript
resultDictionary(): NSDictionary
```

**Return Value:**

- `NSDictionary`: 当前行字典。

## 类成员 (Class members)

当前运行时未额外暴露 `SQLiteResultSet` 的类成员。
