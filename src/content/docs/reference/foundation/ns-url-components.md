---
title: NSURLComponents
description: URL 组件化读写（scheme/host/path/query 等）。
---

`NSURLComponents` 用于把 URL 拆分为可读写的组件（scheme/host/path/query 等），或由组件组装回 URL。

## 类成员 (Class members)

### `componentsWithURLResolvingAgainstBaseURL`

从 URL 创建，可选相对 base 解析。

```javascript
static componentsWithURLResolvingAgainstBaseURL(url: NSURL, resolve: boolean): NSURLComponents
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 源 URL。 |
| `resolve` | `boolean` | 是否相对 base 解析。 |

**Return Value:**

- `NSURLComponents`: 新实例。

### `componentsWithString`

从 URL 字符串创建。

```javascript
static componentsWithString(urlString: string): NSURLComponents
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `urlString` | `string` | URL 字符串。 |

**Return Value:**

- `NSURLComponents`: 新实例。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `scheme` | `string` | 协议（如 https）。 |
| `user` | `string` | 用户部分。 |
| `password` | `string` | 密码部分。 |
| `host` | `string` | 主机。 |
| `port` | `number` | 端口。 |
| `path` | `string` | 路径。 |
| `query` | `string` | 查询串。 |
| `fragment` | `string` | 片段。 |

### `URL`

组装为 NSURL。

```javascript
URL(): NSURL
```

**Return Value:**

- `NSURL`: 当前组件对应的 URL。

### `string`

组装为 URL 字符串。

```javascript
string(): string
```

**Return Value:**

- `string`: URL 字符串。
