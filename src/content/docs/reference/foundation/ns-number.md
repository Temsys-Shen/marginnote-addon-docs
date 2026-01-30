---
title: NSNumber
description: 数值对象封装（整数/浮点/布尔等）。
---

`NSNumber` 用于把标量数值以对象形式表示。在插件 API 里非常常见（例如页码、各种 flags、配置值等）。

## 类成员 (Class members)

### `numberWithInt`

从 int 创建。

```javascript
static numberWithInt(value: number): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 整数值。 |

**Return Value:**

- `NSNumber`: 新实例。

### `numberWithInteger`

从 integer 创建。

```javascript
static numberWithInteger(value: number): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 整数值。 |

**Return Value:**

- `NSNumber`: 新实例。

### `numberWithLong`

从 long 创建。

```javascript
static numberWithLong(value: number): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 长整值。 |

**Return Value:**

- `NSNumber`: 新实例。

### `numberWithLongLong`

从 long long 创建。

```javascript
static numberWithLongLong(value: number): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 长整值。 |

**Return Value:**

- `NSNumber`: 新实例。

### `numberWithUnsignedInt`

从 unsigned int 创建。

```javascript
static numberWithUnsignedInt(value: number): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 无符号整数值。 |

**Return Value:**

- `NSNumber`: 新实例。

### `numberWithUnsignedInteger`

从 unsigned integer 创建。

```javascript
static numberWithUnsignedInteger(value: number): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 无符号整数值。 |

**Return Value:**

- `NSNumber`: 新实例。

### `numberWithUnsignedLong`

从 unsigned long 创建。

```javascript
static numberWithUnsignedLong(value: number): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 无符号长整值。 |

**Return Value:**

- `NSNumber`: 新实例。

### `numberWithUnsignedLongLong`

从 unsigned long long 创建。

```javascript
static numberWithUnsignedLongLong(value: number): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 无符号长整值。 |

**Return Value:**

- `NSNumber`: 新实例。

### `numberWithFloat`

从 float 创建。

```javascript
static numberWithFloat(value: number): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 浮点值。 |

**Return Value:**

- `NSNumber`: 新实例。

### `numberWithDouble`

从 double 创建。

```javascript
static numberWithDouble(value: number): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 双精度值。 |

**Return Value:**

- `NSNumber`: 新实例。

### `numberWithBool`

从布尔创建。

```javascript
static numberWithBool(value: boolean): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `boolean` | 布尔值。 |

**Return Value:**

- `NSNumber`: 新实例。

## 实例成员 (Instance members)

### `intValue`

取 int 值。

```javascript
intValue(): number
```

**Return Value:**

- `number`: int 值。

### `integerValue`

取 integer 值。

```javascript
integerValue(): number
```

**Return Value:**

- `number`: integer 值。

### `longValue`

取 long 值。

```javascript
longValue(): number
```

**Return Value:**

- `number`: long 值。

### `longLongValue`

取 long long 值。

```javascript
longLongValue(): number
```

**Return Value:**

- `number`: long long 值。

### `unsignedIntValue`

取 unsigned int 值。

```javascript
unsignedIntValue(): number
```

**Return Value:**

- `number`: unsigned int 值。

### `unsignedIntegerValue`

取 unsigned integer 值。

```javascript
unsignedIntegerValue(): number
```

**Return Value:**

- `number`: unsigned integer 值。

### `unsignedLongValue`

取 unsigned long 值。

```javascript
unsignedLongValue(): number
```

**Return Value:**

- `number`: unsigned long 值。

### `unsignedLongLongValue`

取 unsigned long long 值。

```javascript
unsignedLongLongValue(): number
```

**Return Value:**

- `number`: unsigned long long 值。

### `floatValue`

取 float 值。

```javascript
floatValue(): number
```

**Return Value:**

- `number`: float 值。

### `doubleValue`

取 double 值。

```javascript
doubleValue(): number
```

**Return Value:**

- `number`: double 值。

### `boolValue`

取布尔值。

```javascript
boolValue(): boolean
```

**Return Value:**

- `boolean`: 布尔值。

### `stringValue`

取字符串表示。

```javascript
stringValue(): string
```

**Return Value:**

- `string`: 字符串。

### `compare`

与另一 NSNumber 比较。

```javascript
compare(otherNumber: NSNumber): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherNumber` | `NSNumber` | 另一数值对象。 |

**Return Value:**

- `number`: 比较结果。

### `isEqualToNumber`

是否与另一 NSNumber 数值相等。

```javascript
isEqualToNumber(otherNumber: NSNumber): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherNumber` | `NSNumber` | 另一数值对象。 |

**Return Value:**

- `boolean`: 是否相等。

## 相关

- `NSDecimalNumber` — 十进制高精度
- `NSNumberFormatter` — 格式化输出
