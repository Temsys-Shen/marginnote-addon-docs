---
title: NSCharacterSet
description: 字符集合（用于字符串过滤、扫描、拆分等）。
---

`NSCharacterSet` 表示一组字符的集合，常用于字符串扫描/过滤/拆分等场景。

## 类成员 (Class members)

### 常用预置集合

### `controlCharacterSet`

控制字符集。

```javascript
static controlCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `whitespaceCharacterSet`

空白字符集。

```javascript
static whitespaceCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `whitespaceAndNewlineCharacterSet`

空白与换行字符集。

```javascript
static whitespaceAndNewlineCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `newlineCharacterSet`

换行字符集。

```javascript
static newlineCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `decimalDigitCharacterSet`

十进制数字字符集。

```javascript
static decimalDigitCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `letterCharacterSet`

字母字符集。

```javascript
static letterCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `lowercaseLetterCharacterSet`

小写字母字符集。

```javascript
static lowercaseLetterCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `uppercaseLetterCharacterSet`

大写字母字符集。

```javascript
static uppercaseLetterCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `capitalizedLetterCharacterSet`

首字母大写字符集。

```javascript
static capitalizedLetterCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `alphanumericCharacterSet`

字母数字字符集。

```javascript
static alphanumericCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `nonBaseCharacterSet`

非基础字符集。

```javascript
static nonBaseCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `decomposableCharacterSet`

可分解字符集。

```javascript
static decomposableCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `illegalCharacterSet`

非法字符集。

```javascript
static illegalCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `punctuationCharacterSet`

标点字符集。

```javascript
static punctuationCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `symbolCharacterSet`

符号字符集。

```javascript
static symbolCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### URL 相关预置集合

### `URLUserAllowedCharacterSet`

URL 用户部分允许字符集。

```javascript
static URLUserAllowedCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `URLPasswordAllowedCharacterSet`

URL 密码部分允许字符集。

```javascript
static URLPasswordAllowedCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `URLHostAllowedCharacterSet`

URL 主机部分允许字符集。

```javascript
static URLHostAllowedCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `URLPathAllowedCharacterSet`

URL 路径部分允许字符集。

```javascript
static URLPathAllowedCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `URLQueryAllowedCharacterSet`

URL 查询部分允许字符集。

```javascript
static URLQueryAllowedCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### `URLFragmentAllowedCharacterSet`

URL 片段部分允许字符集。

```javascript
static URLFragmentAllowedCharacterSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 预置集合。

### 创建

### `characterSetWithRange`

从 Unicode 范围创建。

```javascript
static characterSetWithRange(aRange: any): NSCharacterSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aRange` | `any` | 范围（如 { location, length }）。 |

**Return Value:**

- `NSCharacterSet`: 新实例。

### `characterSetWithCharactersInString`

从字符串中的字符创建。

```javascript
static characterSetWithCharactersInString(aString: string): NSCharacterSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aString` | `string` | 字符来源字符串。 |

**Return Value:**

- `NSCharacterSet`: 新实例。

### `characterSetWithBitmapRepresentation`

从位图数据创建。

```javascript
static characterSetWithBitmapRepresentation(data: NSData): NSCharacterSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `NSData` | 位图数据。 |

**Return Value:**

- `NSCharacterSet`: 新实例。

### `characterSetWithContentsOfFile`

从文件内容创建。

```javascript
static characterSetWithContentsOfFile(fName: string): NSCharacterSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `fName` | `string` | 文件路径。 |

**Return Value:**

- `NSCharacterSet`: 新实例。

## 实例成员 (Instance members)

### `characterIsMember`

某字符是否在集合中。

```javascript
characterIsMember(aCharacter: number): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aCharacter` | `number` | Unicode 码点。 |

**Return Value:**

- `boolean`: 是否在集合中。

### `longCharacterIsMember`

某长字符（如 surrogate pair）是否在集合中。

```javascript
longCharacterIsMember(theLongChar: number): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `theLongChar` | `number` | 长字符码点。 |

**Return Value:**

- `boolean`: 是否在集合中。

### `isSupersetOfSet`

是否包含另一字符集的所有字符。

```javascript
isSupersetOfSet(other: NSCharacterSet): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSCharacterSet` | 另一字符集。 |

**Return Value:**

- `boolean`: 是否为超集。

### `hasMemberInPlane`

指定 plane 是否有成员。

```javascript
hasMemberInPlane(thePlane: number): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `thePlane` | `number` | Unicode plane。 |

**Return Value:**

- `boolean`: 是否有成员。

### `bitmapRepresentation`

位图表示。

```javascript
bitmapRepresentation(): NSData
```

**Return Value:**

- `NSData`: 位图数据。

### `invertedSet`

取反字符集（不在当前集合中的字符）。

```javascript
invertedSet(): NSCharacterSet
```

**Return Value:**

- `NSCharacterSet`: 取反后的新字符集。
