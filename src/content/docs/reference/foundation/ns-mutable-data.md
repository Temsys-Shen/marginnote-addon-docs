---
title: NSMutableData
description: 可变二进制数据缓冲区。
---

`NSMutableData` 是可变的二进制数据缓冲区，可用于构造/拼接二进制内容（例如网络 body、文件数据块等）。

## 类成员 (Class members)

### `dataWithCapacity`

预分配容量创建。

```javascript
static dataWithCapacity(aNumItems: number): NSMutableData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aNumItems` | `number` | 初始容量（字节数）。 |

**Return Value:**

- `NSMutableData`: 新实例。

### `dataWithLength`

创建指定长度的数据（零填充）。

```javascript
static dataWithLength(length: number): NSMutableData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `length` | `number` | 长度（字节）。 |

**Return Value:**

- `NSMutableData`: 新实例。

## 实例成员 (Instance members)

### `mutableBytes`

可变字节指针（用于直接写入）。

```javascript
mutableBytes(): any
```

**Return Value:**

- `any`: 字节缓冲区指针。

### `setLength`

设置数据长度。

```javascript
setLength(length: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `length` | `number` | 新长度（字节）。 |

**Return Value:**

- 无。

### `increaseLengthBy`

增加长度。

```javascript
increaseLengthBy(extraLength: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `extraLength` | `number` | 要增加的字节数。 |

**Return Value:**

- 无。

### `appendBytesLength`

在末尾追加字节。

```javascript
appendBytesLength(bytes: any, length: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `bytes` | `any` | 字节序列。 |
| `length` | `number` | 字节数。 |

**Return Value:**

- 无。

### `appendData`

在末尾追加另一 NSData。

```javascript
appendData(other: NSData): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSData` | 要追加的数据。 |

**Return Value:**

- 无。

### `replaceBytesInRangeWithBytes`

在范围内替换为字节序列。

```javascript
replaceBytesInRangeWithBytes(range: any, bytes: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围（如 { location, length }）。 |
| `bytes` | `any` | 替换字节序列。 |

**Return Value:**

- 无。

### `replaceBytesInRangeWithBytesLength`

在范围内替换为指定长度的字节序列。

```javascript
replaceBytesInRangeWithBytesLength(range: any, replacementBytes: any, replacementLength: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |
| `replacementBytes` | `any` | 替换字节序列。 |
| `replacementLength` | `number` | 替换长度。 |

**Return Value:**

- 无。

### `resetBytesInRange`

将范围内字节置零。

```javascript
resetBytesInRange(range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |

**Return Value:**

- 无。

### `setData`

用另一 NSData 整体替换内容。

```javascript
setData(data: NSData): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `NSData` | 源数据。 |

**Return Value:**

- 无。
