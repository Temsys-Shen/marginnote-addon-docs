---
title: NSURLRequest
description: 不可变 URL 请求对象，包含 URL、缓存策略、HTTP header/body 等只读访问。
---

`NSURLRequest` 表示一个不可变的 URL 请求。通常在插件里用于读取请求信息，或作为 `NSMutableURLRequest` 的父接口使用。

## 类成员 (Class members)

### `requestWithURL`

从 URL 创建请求。

```javascript
static requestWithURL(URL: NSURL): NSURLRequest
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `URL` | `NSURL` | 请求 URL。 |

**Return Value:**

- `NSURLRequest`: 新请求实例。

### `requestWithURLCachePolicyTimeoutInterval`

从 URL、缓存策略与超时创建请求。

```javascript
static requestWithURLCachePolicyTimeoutInterval(URL: NSURL, cachePolicy: number, timeoutInterval: number): NSURLRequest
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `URL` | `NSURL` | 请求 URL。 |
| `cachePolicy` | `number` | 缓存策略。 |
| `timeoutInterval` | `number` | 超时时间（秒）。 |

**Return Value:**

- `NSURLRequest`: 新请求实例。

### `supportsSecureCoding`

是否支持安全编码。

```javascript
static supportsSecureCoding(): boolean
```

**Return Value:**

- `boolean`: 是否支持。

## 实例成员 (Instance members)

### `URL`

请求 URL。

```javascript
URL(): NSURL
```

**Return Value:**

- `NSURL`: 请求 URL。

### `cachePolicy`

缓存策略。

```javascript
cachePolicy(): number
```

**Return Value:**

- `number`: 缓存策略。

### `timeoutInterval`

超时时间（秒）。

```javascript
timeoutInterval(): number
```

**Return Value:**

- `number`: 超时时间。

### `mainDocumentURL`

主文档 URL。

```javascript
mainDocumentURL(): NSURL
```

**Return Value:**

- `NSURL`: 主文档 URL。

### `networkServiceType`

网络服务类型。

```javascript
networkServiceType(): number
```

**Return Value:**

- `number`: 服务类型。

### `allowsCellularAccess`

是否允许蜂窝网络。

```javascript
allowsCellularAccess(): boolean
```

**Return Value:**

- `boolean`: 是否允许。

### `HTTPMethod`

HTTP 方法（如 GET、POST）。

```javascript
HTTPMethod(): string
```

**Return Value:**

- `string`: 方法名。

### `allHTTPHeaderFields`

所有 HTTP 头。

```javascript
allHTTPHeaderFields(): NSDictionary
```

**Return Value:**

- `NSDictionary`: 头字段字典。

### `valueForHTTPHeaderField`

指定头字段值。

```javascript
valueForHTTPHeaderField(field: string): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `field` | `string` | 头字段名。 |

**Return Value:**

- `string`: 头字段值。

### `HTTPBody`

请求体数据。

```javascript
HTTPBody(): NSData
```

**Return Value:**

- `NSData`: 请求体。

### `HTTPBodyStream`

请求体流。

```javascript
HTTPBodyStream(): any
```

**Return Value:**

- `any`: 流对象。

### `HTTPShouldHandleCookies`

是否自动处理 Cookie。

```javascript
HTTPShouldHandleCookies(): boolean
```

**Return Value:**

- `boolean`: 是否处理。

### `HTTPShouldUsePipelining`

是否使用 HTTP 管道。

```javascript
HTTPShouldUsePipelining(): boolean
```

**Return Value:**

- `boolean`: 是否使用。

> 建议：需要设置 method/header/body 等可变字段时，直接使用 [NSMutableURLRequest](/reference/foundation/ns-mutable-url-request/)。
