---
title: NSKeyedArchiver
description: 对象归档（对象→NSData/文件）。
---

`NSKeyedArchiver` 用于把对象图归档为二进制数据（`NSData`）或写入文件。

## 类成员 (Class members)

### `archivedDataWithRootObject`

将根对象归档为 NSData。

```javascript
static archivedDataWithRootObject(rootObject: any): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rootObject` | `any` | 根对象（需支持 NSCoding）。 |

**Return Value:**

- `NSData`: 归档数据。

### `archiveRootObjectToFile`

将根对象归档到文件。

```javascript
static archiveRootObjectToFile(rootObject: any, path: string): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rootObject` | `any` | 根对象。 |
| `path` | `string` | 文件路径。 |

**Return Value:**

- `boolean`: 是否成功。

### `setClassNameForClass`

设置类名映射（归档用）。

```javascript
static setClassNameForClass(codedName: string, cls: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `codedName` | `string` | 归档中的类名。 |
| `cls` | `any` | 实际类。 |

**Return Value:**

- 无。

### `classNameForClass`

取类的归档名。

```javascript
static classNameForClass(cls: any): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `cls` | `any` | 类。 |

**Return Value:**

- `string`: 归档类名。

## 实例成员 (Instance members)

### `initForWritingWithMutableData`

用可变数据初始化（用于增量编码）。

```javascript
initForWritingWithMutableData(data: NSMutableData): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `NSMutableData` | 目标数据。 |

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

### `setOutputFormat`

设置输出格式。

```javascript
setOutputFormat(format: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `format` | `number` | 格式。 |

**Return Value:**

- 无。

### `outputFormat`

输出格式。

```javascript
outputFormat(): number
```

**Return Value:**

- `number`: 格式。

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

### `encodeObjectForKey`

编码对象。

```javascript
encodeObjectForKey(objv: any, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `objv` | `any` | 对象。 |
| `key` | `string` | 键。 |

**Return Value:**

- 无。

### `encodeConditionalObjectForKey`

条件编码对象。

```javascript
encodeConditionalObjectForKey(objv: any, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `objv` | `any` | 对象。 |
| `key` | `string` | 键。 |

**Return Value:**

- 无。

### `encodeBoolForKey`

编码布尔。

```javascript
encodeBoolForKey(boolv: boolean, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `boolv` | `boolean` | 值。 |
| `key` | `string` | 键。 |

**Return Value:**

- 无。

### `encodeIntForKey`

编码 int。

```javascript
encodeIntForKey(intv: number, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `intv` | `number` | 值。 |
| `key` | `string` | 键。 |

**Return Value:**

- 无。

### `encodeInt32ForKey`

编码 int32。

```javascript
encodeInt32ForKey(intv: number, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `intv` | `number` | 值。 |
| `key` | `string` | 键。 |

**Return Value:**

- 无。

### `encodeInt64ForKey`

编码 int64。

```javascript
encodeInt64ForKey(intv: number, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `intv` | `number` | 值。 |
| `key` | `string` | 键。 |

**Return Value:**

- 无。

### `encodeFloatForKey`

编码 float。

```javascript
encodeFloatForKey(realv: number, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `realv` | `number` | 值。 |
| `key` | `string` | 键。 |

**Return Value:**

- 无。

### `encodeDoubleForKey`

编码 double。

```javascript
encodeDoubleForKey(realv: number, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `realv` | `number` | 值。 |
| `key` | `string` | 键。 |

**Return Value:**

- 无。

### `encodeBytesLengthForKey`

编码字节数组。

```javascript
encodeBytesLengthForKey(bytesp: any, lenv: number, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `bytesp` | `any` | 字节指针。 |
| `lenv` | `number` | 长度。 |
| `key` | `string` | 键。 |

**Return Value:**

- 无。

### `finishEncoding`

完成编码。

```javascript
finishEncoding(): void
```

**Return Value:**

- 无。
