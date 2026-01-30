---
title: NSKeyedUnarchiver
description: 对象反归档（NSData/文件→对象）。
---

`NSKeyedUnarchiver` 用于从归档数据（`NSData`）或文件中还原对象图。

## 类成员 (Class members)

### `unarchiveObjectWithData`

从 NSData 反归档根对象。

```javascript
static unarchiveObjectWithData(data: NSData): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `NSData` | 归档数据。 |

**Return Value:**

- `any`: 根对象。

### `unarchiveObjectWithFile`

从文件反归档根对象。

```javascript
static unarchiveObjectWithFile(path: string): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 文件路径。 |

**Return Value:**

- `any`: 根对象。

### `setClassForClassName`

设置类名映射（反归档用）。

```javascript
static setClassForClassName(cls: any, codedName: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `cls` | `any` | 实际类。 |
| `codedName` | `string` | 归档中的类名。 |

**Return Value:**

- 无。

### `classForClassName`

取归档名对应的类。

```javascript
static classForClassName(codedName: string): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `codedName` | `string` | 归档类名。 |

**Return Value:**

- `any`: 类。

## 实例成员 (Instance members)

### `initForReadingWithData`

用数据初始化（用于增量解码）。

```javascript
initForReadingWithData(data: NSData): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `NSData` | 归档数据。 |

**Return Value:**

- 无。

### `setDelegate`

设置委托。

```javascript
setDelegate(delegate: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `delegate` | `any` | 委托对象。 |

**Return Value:**

- 无。

### `delegate`

委托。

```javascript
delegate(): any
```

**Return Value:**

- `any`: 委托对象。

### `setRequiresSecureCoding`

设置是否要求安全编码。

```javascript
setRequiresSecureCoding(b: boolean): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `b` | `boolean` | 是否要求。 |

**Return Value:**

- 无。

### `containsValueForKey`

是否包含某键。

```javascript
containsValueForKey(key: string): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键。 |

**Return Value:**

- `boolean`: 是否包含。

### `decodeObjectForKey`

解码对象。

```javascript
decodeObjectForKey(key: string): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键。 |

**Return Value:**

- `any`: 对象。

### `decodeBoolForKey`

解码布尔。

```javascript
decodeBoolForKey(key: string): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键。 |

**Return Value:**

- `boolean`: 值。

### `decodeIntForKey`

解码 int。

```javascript
decodeIntForKey(key: string): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键。 |

**Return Value:**

- `number`: 值。

### `decodeInt32ForKey`

解码 int32。

```javascript
decodeInt32ForKey(key: string): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键。 |

**Return Value:**

- `number`: 值。

### `decodeInt64ForKey`

解码 int64。

```javascript
decodeInt64ForKey(key: string): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键。 |

**Return Value:**

- `number`: 值。

### `decodeFloatForKey`

解码 float。

```javascript
decodeFloatForKey(key: string): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键。 |

**Return Value:**

- `number`: 值。

### `decodeDoubleForKey`

解码 double。

```javascript
decodeDoubleForKey(key: string): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键。 |

**Return Value:**

- `number`: 值。

### `decodeBytesForKeyReturnedLength`

解码字节数组。

```javascript
decodeBytesForKeyReturnedLength(key: string, lengthp: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键。 |
| `lengthp` | `any` | 输出参数，接收长度。 |

**Return Value:**

- `any`: 字节指针。

### `finishDecoding`

完成解码。

```javascript
finishDecoding(): void
```

**Return Value:**

- 无。
