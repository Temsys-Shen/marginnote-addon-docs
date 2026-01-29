---
title: ZipArchive
description: 压缩与解压 ZIP 文件（JSBSSZipArchive）。
---

协议名为 JSBSSZipArchive，用于 ZIP 的创建与解压。

## 类方法

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `unzipFileAtPathToDestination(path, destination)` | path, destination: string | boolean | 解压到目录。 |
| `unzipFileAtPathToDestinationOverwritePassword(path, destination, overwrite, password)` | path, destination, overwrite: boolean, password: string | boolean | 解压并可覆盖、带密码。 |
| `createZipFileAtPathWithFilesAtPaths(path, filenames)` | path: string, filenames: NSArray | boolean | 将多个文件打包为 ZIP。 |
| `createZipFileAtPathWithContentsOfDirectory(path, directoryPath)` | path, directoryPath: string | boolean | 将目录打包为 ZIP。 |

## 实例方法（流式写入）

| 方法 | 说明 |
|------|------|
| `initWithPath(path)` | 创建实例，path 为 ZIP 路径。 |
| `open()` | 打开准备写入。 |
| `writeFile(path)` | 写入文件。 |
| `writeDataFilename(data, filename)` | 写入 NSData 并指定文件名。 |
| `close()` | 关闭。 |

## 相关

- [NSFileManager](/reference/foundation/ns-file-manager/)
