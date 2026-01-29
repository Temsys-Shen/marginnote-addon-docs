---
title: NSURL
description: URL 对象，用于网页、文件路径与 Application.openURL。
---

用于表示 URL（网页或本地文件路径）。可通过 `Application.sharedInstance().openURL(url)` 打开网页或 App URL Scheme。

## 类方法（创建）

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `URLWithString(URLString)` | URLString: string | NSURL | 从字符串创建（如 "https://..."）。 |
| `URLWithStringRelativeToURL(URLString, baseURL)` | URLString, baseURL | NSURL | 相对 URL。 |
| `fileURLWithPath(path)` | path: string | NSURL | 从文件路径创建。 |
| `fileURLWithPathIsDirectory(path, isDir)` | path: string, isDir: boolean | NSURL | 文件 URL，可指定是否目录。 |

## 实例属性（常用）

| 属性 | 类型 | 说明 |
|------|------|------|
| `path` | string | 路径部分。 |
| `absoluteString` | string | 完整 URL 字符串。 |
| `host` / `scheme` / `query` / `fragment` | string | URL 组成部分。 |

## 相关

- [Application.openURL](/reference/global/application/)
