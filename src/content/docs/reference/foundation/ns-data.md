---
title: NSData
description: 二进制数据对象，用于读写文件、字符串编码、网络等。
---

用于表示二进制数据。常用创建方式：从文件/URL 读取、从字符串编码、从字节。编码常用值：4 表示 UTF-8（NSUTF8StringEncoding）。

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `data()` | — | NSData | 空数据。 |
| `dataWithStringEncoding(string, encoding)` | string: string, encoding: number | NSData | 从字符串创建（encoding 4 为 UTF-8）。 |
| `dataWithContentsOfFile(path)` | path: string | NSData | 从文件读取。 |
| `dataWithContentsOfURL(url)` | url: NSURL | NSData | 从 URL 读取。 |
| `dataWithBytesLength(bytes, length)` | bytes, length | NSData | 从字节创建。 |
| `dataWithData(data)` | data: NSData | NSData | 拷贝。 |

## 实例成员 (Instance members)

| 方法/属性 | 返回值 | 说明 |
|-----------|--------|------|
| `length` | number | 字节数。 |
| `bytes` | 只读 | 原始字节。 |
| `writeToFileAtomically(path, useAuxiliaryFile)` | boolean | 写入文件。 |
| `writeToURLAtomically(url, atomically)` | boolean | 写入 URL。 |
| `subdataWithRange(range)` | NSData | 子数据。 |
| `base64Encoding` | string | Base64 编码字符串。 |

## 相关

- [NSFileManager](/reference/foundation/ns-file-manager/)、[NSURL](/reference/foundation/ns-url/)
- [教程：存储与文件](/guides/storage-and-files/)
