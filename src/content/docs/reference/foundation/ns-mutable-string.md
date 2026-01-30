---
title: NSMutableString
description: 可变字符串（可原地增删改）。
---

`NSMutableString` 是可变字符串，支持原地插入/删除/替换与追加。

## 类成员 (Class members)

### `string`

创建空可变字符串。

```javascript
static string(): NSMutableString
```

**Return Value:**

- `NSMutableString`: 新实例。

### `stringWithCapacity`

预分配容量创建。

```javascript
static stringWithCapacity(capacity: number): NSMutableString
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `capacity` | `number` | 初始容量（字符数）。 |

**Return Value:**

- `NSMutableString`: 新实例。

## 实例成员 (Instance members)

### `replaceCharactersInRangeWithString`

在范围内替换为字符串。

```javascript
replaceCharactersInRangeWithString(range: any, aString: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围（如 { location, length }）。 |
| `aString` | `string` | 替换字符串。 |

**Return Value:**

- 无。

### `insertStringAtIndex`

在指定位置插入字符串。

```javascript
insertStringAtIndex(aString: string, loc: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aString` | `string` | 要插入的字符串。 |
| `loc` | `number` | 插入位置索引。 |

**Return Value:**

- 无。

### `deleteCharactersInRange`

删除范围内字符。

```javascript
deleteCharactersInRange(range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 要删除的范围。 |

**Return Value:**

- 无。

### `appendString`

在末尾追加字符串。

```javascript
appendString(aString: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aString` | `string` | 要追加的字符串。 |

**Return Value:**

- 无。

### `setString`

用字符串整体替换内容。

```javascript
setString(aString: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aString` | `string` | 新内容字符串。 |

**Return Value:**

- 无。

### `initWithCapacity`

用容量初始化（通常由工厂方法创建）。

```javascript
initWithCapacity(capacity: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `capacity` | `number` | 初始容量。 |

**Return Value:**

- 无。

### `appendFormat`

按格式字符串追加（格式化输出）。

```javascript
appendFormat(format: string, ...arguments: any[]): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `format` | `string` | 格式字符串。 |
| `...arguments` | `any[]` | 格式参数。 |

**Return Value:**

- 无。

### `replaceOccurrencesOfStringWithStringOptionsRange`

在范围内替换所有出现的目标字符串。

```javascript
replaceOccurrencesOfStringWithStringOptionsRange(target: string, replacement: string, options: number, searchRange: any): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `target` | `string` | 要替换的子串。 |
| `replacement` | `string` | 替换为的字符串。 |
| `options` | `number` | 比较选项（如大小写敏感）。 |
| `searchRange` | `any` | 搜索范围。 |

**Return Value:**

- `number`: 替换次数。
