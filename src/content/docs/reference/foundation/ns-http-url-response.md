---
title: NSHTTPURLResponse
description: HTTP 响应对象（NSURLResponse 子类），提供 statusCode 与 headerFields。
---

`NSHTTPURLResponse` 是 `NSURLResponse` 的 HTTP 子类，提供 HTTP 状态码与响应头信息。常见于 `NSURLConnection` 请求回调的 response 参数类型。

## 类成员 (Class members)

### `localizedStringForStatusCode`

返回状态码的本地化描述。

```javascript
static localizedStringForStatusCode(statusCode: number): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `statusCode` | `number` | HTTP 状态码。 |

**Return Value:**

- `string`: 本地化描述。

## 实例成员 (Instance members)

### `initWithURLStatusCodeHTTPVersionHeaderFields`

初始化 HTTP 响应实例。

```javascript
initWithURLStatusCodeHTTPVersionHeaderFields(url: NSURL, statusCode: number, httpVersion: string, headerFields: NSDictionary): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 响应 URL。 |
| `statusCode` | `number` | HTTP 状态码。 |
| `httpVersion` | `string` | HTTP 版本。 |
| `headerFields` | `NSDictionary` | 响应头字典。 |

**Return Value:**

- 无。

### `statusCode`

HTTP 状态码。

```javascript
statusCode(): number
```

**Return Value:**

- `number`: 状态码（如 200、404）。

### `allHeaderFields`

所有响应头。

```javascript
allHeaderFields(): NSDictionary
```

**Return Value:**

- `NSDictionary`: 头字段字典。
