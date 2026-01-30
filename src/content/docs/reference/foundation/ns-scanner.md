---
title: NSScanner
description: 字符串扫描器（按规则逐段解析字符串）。
---

`NSScanner` 用于在字符串中按规则向前扫描并解析数字、十六进制、子串等。适合写一些轻量级解析逻辑。

## 类成员 (Class members)

### `scannerWithString`

从字符串创建扫描器。

```javascript
static scannerWithString(string: string): NSScanner
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `string` | `string` | 要扫描的字符串。 |

**Return Value:**

- `NSScanner`: 新扫描器实例。

### `localizedScannerWithString`

从字符串创建使用当前 locale 的扫描器。

```javascript
static localizedScannerWithString(string: string): NSScanner
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `string` | `string` | 要扫描的字符串。 |

**Return Value:**

- `NSScanner`: 新扫描器实例。

## 实例成员 (Instance members)

### `string`

当前扫描的字符串。

```javascript
string(): string
```

**Return Value:**

- `string`: 源字符串。

### `scanLocation`

当前扫描位置。

```javascript
scanLocation(): number
```

**Return Value:**

- `number`: 位置索引。

### `setScanLocation`

设置扫描位置。

```javascript
setScanLocation(pos: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `pos` | `number` | 位置索引。 |

**Return Value:**

- 无。

### `charactersToBeSkipped`

要跳过的字符集。

```javascript
charactersToBeSkipped(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 要跳过的字符集。

### `setCharactersToBeSkipped`

设置要跳过的字符集。

```javascript
setCharactersToBeSkipped(set: NSCharacterSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `set` | `NSCharacterSet` | 字符集。 |

**Return Value:**

- 无。

### `caseSensitive`

是否区分大小写。

```javascript
caseSensitive(): boolean
```

**Return Value:**

- `boolean`: 是否区分大小写。

### `setCaseSensitive`

设置是否区分大小写。

```javascript
setCaseSensitive(flag: boolean): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `flag` | `boolean` | 是否区分大小写。 |

**Return Value:**

- 无。

### `locale`

当前 locale。

```javascript
locale(): NSLocale
```

**Return Value:**

- `NSLocale`: locale 实例。

### `setLocale`

设置 locale。

```javascript
setLocale(locale: NSLocale): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `locale` | `NSLocale` | locale。 |

**Return Value:**

- 无。

### `scanInt`

扫描 int。

```javascript
scanInt(result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `result` | `any` | 输出参数，接收解析的 int。 |

**Return Value:**

- `boolean`: 是否成功扫描。

### `scanInteger`

扫描 integer。

```javascript
scanInteger(result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `result` | `any` | 输出参数。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanLongLong`

扫描 long long。

```javascript
scanLongLong(result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `result` | `any` | 输出参数。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanUnsignedLongLong`

扫描 unsigned long long。

```javascript
scanUnsignedLongLong(result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `result` | `any` | 输出参数。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanFloat`

扫描 float。

```javascript
scanFloat(result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `result` | `any` | 输出参数。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanDouble`

扫描 double。

```javascript
scanDouble(result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `result` | `any` | 输出参数。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanHexInt`

扫描十六进制 int。

```javascript
scanHexInt(result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `result` | `any` | 输出参数。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanHexLongLong`

扫描十六进制 long long。

```javascript
scanHexLongLong(result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `result` | `any` | 输出参数。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanHexFloat`

扫描十六进制 float。

```javascript
scanHexFloat(result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `result` | `any` | 输出参数。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanHexDouble`

扫描十六进制 double。

```javascript
scanHexDouble(result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `result` | `any` | 输出参数。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanStringIntoString`

扫描指定字符串。

```javascript
scanStringIntoString(string: string, result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `string` | `string` | 要匹配的字符串。 |
| `result` | `any` | 输出参数，接收扫描到的子串。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanCharactersFromSetIntoString`

扫描属于字符集的字符。

```javascript
scanCharactersFromSetIntoString(set: NSCharacterSet, result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `set` | `NSCharacterSet` | 字符集。 |
| `result` | `any` | 输出参数。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanUpToStringIntoString`

扫描直到遇到指定字符串。

```javascript
scanUpToStringIntoString(string: string, result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `string` | `string` | 终止字符串。 |
| `result` | `any` | 输出参数，接收扫描到的子串。 |

**Return Value:**

- `boolean`: 是否成功。

### `scanUpToCharactersFromSetIntoString`

扫描直到遇到字符集中的字符。

```javascript
scanUpToCharactersFromSetIntoString(set: NSCharacterSet, result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `set` | `NSCharacterSet` | 终止字符集。 |
| `result` | `any` | 输出参数。 |

**Return Value:**

- `boolean`: 是否成功。

### `isAtEnd`

是否已扫描到末尾。

```javascript
isAtEnd(): boolean
```

**Return Value:**

- `boolean`: 是否到末尾。

### `scanUpToEndOfStringIntoString`

扫描剩余部分到 result。

```javascript
scanUpToEndOfStringIntoString(result: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `result` | `any` | 输出参数，接收剩余字符串。 |

**Return Value:**

- `boolean`: 是否成功。
