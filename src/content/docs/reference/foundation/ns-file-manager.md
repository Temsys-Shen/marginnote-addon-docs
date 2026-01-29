---
title: NSFileManager
description: 文件系统操作，检查路径、创建目录、读写文件等。
---

用于文件系统操作。通过 `NSFileManager.defaultManager()` 获取默认实例。常与 [Application.documentPath](/reference/global/application/)、[Application.tempPath](/reference/global/application/) 配合使用。

## 获取实例

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `static defaultManager()` | `NSFileManager` | 获取默认文件管理器。 |

## 路径与目录

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `fileExistsAtPath(path)` | path: string | boolean | 检查文件或目录是否存在。 |
| `isDirectoryAtPath(path)` | path: string | boolean | 是否为目录。 |
| `createDirectoryAtPath(path, withIntermediateDirectories, attributes)` | path, createIntermediates: boolean, attributes: NSDictionary \| null | boolean | 创建目录。 |
| `createDirectoryAtPath(path, attributes)` | path, attributes | boolean | 创建单级目录。 |
| `contentsOfDirectoryAtPath(path)` | path: string | string[] | 目录内容（文件名列表）。 |
| `subpathsOfDirectoryAtPath(path)` | path: string | string[] | 子路径列表。 |
| `subpathsAtPath(path)` | path: string | string[] | 同上。 |
| `directoryContentsAtPath(path)` | path: string | string[] | 目录内容。 |

## 读写与复制

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `contentsAtPath(path)` | path: string | NSData | 读取文件为 NSData。 |
| `copyItemAtPath(srcPath, toPath)` | srcPath, dstPath: string | boolean | 复制文件/目录。 |
| `moveItemAtPath(srcPath, toPath)` | srcPath, dstPath: string | boolean | 移动。 |

## 属性与权限

| 方法 | 说明 |
|------|------|
| `attributesOfItemAtPath(path)` | 获取项属性。 |
| `attributesOfFileSystemForPath(path)` | 获取文件系统属性。 |
| `fileAttributesAtPath(path, traverseLink)` | 文件属性。 |
| `isReadableFileAtPath(path)` / `isWritableFileAtPath(path)` / `isExecutableFileAtPath(path)` / `isDeletableFileAtPath(path)` | 权限检查。 |

## 相关

- [NSData](/reference/foundation/ns-data/)、[Application](/reference/global/application/)
- [教程：存储与文件](/guides/storage-and-files/)
