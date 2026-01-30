---
title: NSData
description: 二进制数据对象，用于读写文件、字符串编码、网络等。
---

用于表示二进制数据。常用创建方式：从文件/URL 读取、从字符串编码、从字节。编码常用值：4 表示 UTF-8（NSUTF8StringEncoding）。

## 类成员 (Class members)

### `data`

返回空数据。

```javascript
static data(): NSData
```

**Return Value:**

- `NSData`: 空数据实例。

### `dataWithStringEncoding`

从字符串与编码创建。

```javascript
static dataWithStringEncoding(string: string, encoding: number): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `string` | `string` | 源字符串。 |
| `encoding` | `number` | 编码（4 为 UTF-8）。 |

**Return Value:**

- `NSData`: 新数据。

### `dataWithContentsOfFile`

从文件路径读取。

```javascript
static dataWithContentsOfFile(path: string): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 文件路径。 |

**Return Value:**

- `NSData`: 新数据。

### `dataWithContentsOfURL`

从 URL 读取。

```javascript
static dataWithContentsOfURL(url: NSURL): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 资源 URL。 |

**Return Value:**

- `NSData`: 新数据。

### `dataWithBytesLength`

从字节与长度创建。

```javascript
static dataWithBytesLength(bytes: any, length: number): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `bytes` | `any` | 字节序列。 |
| `length` | `number` | 长度。 |

**Return Value:**

- `NSData`: 新数据。

### `dataWithData`

拷贝数据。

```javascript
static dataWithData(data: NSData): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `NSData` | 源数据。 |

**Return Value:**

- `NSData`: 新数据。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `length` | `number` | 字节数。 |
| `bytes` | 只读 | 原始字节。 |
| `base64Encoding` | `string` | Base64 编码字符串。 |

### `writeToFileAtomically`

写入文件。

```javascript
writeToFileAtomically(path: string, useAuxiliaryFile: boolean): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 文件路径。 |
| `useAuxiliaryFile` | `boolean` | 是否先写临时再替换。 |

**Return Value:**

- `boolean`: 是否成功。

### `writeToURLAtomically`

写入 URL。

```javascript
writeToURLAtomically(url: NSURL, atomically: boolean): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 目标 URL。 |
| `atomically` | `boolean` | 是否原子写入。 |

**Return Value:**

- `boolean`: 是否成功。

### `subdataWithRange`

取子数据。

```javascript
subdataWithRange(range: any): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围（如 { location, length }）。 |

**Return Value:**

- `NSData`: 子数据。

## 相关

- [NSFileManager](/reference/foundation/ns-file-manager/)、[NSURL](/reference/foundation/ns-url/)
- [教程：存储与文件](/guides/storage-and-files/)
