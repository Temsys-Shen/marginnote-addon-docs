---
title: NSURLResponse
description: URL 响应对象，包含 MIMEType、编码、建议文件名等元信息。
---

`NSURLResponse` 是 URL 请求的响应对象基类。HTTP 响应通常会是其子类 `NSHTTPURLResponse`。

## 实例成员 (Instance members)

### `initWithURLMIMETypeExpectedContentLengthTextEncodingName`

初始化响应实例。

```javascript
initWithURLMIMETypeExpectedContentLengthTextEncodingName(url: NSURL, mimeType: string, length: number, name: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 响应 URL。 |
| `mimeType` | `string` | MIME 类型。 |
| `length` | `number` | 预期内容长度。 |
| `name` | `string` | 文本编码名。 |

**Return Value:**

- 无。

### `URL`

响应 URL。

```javascript
URL(): NSURL
```

**Return Value:**

- `NSURL`: 响应 URL。

### `MIMEType`

MIME 类型。

```javascript
MIMEType(): string
```

**Return Value:**

- `string`: MIME 类型。

### `expectedContentLength`

预期内容长度（字节）。

```javascript
expectedContentLength(): number
```

**Return Value:**

- `number`: 长度。

### `textEncodingName`

文本编码名。

```javascript
textEncodingName(): string
```

**Return Value:**

- `string`: 编码名。

### `suggestedFilename`

建议保存文件名。

```javascript
suggestedFilename(): string
```

**Return Value:**

- `string`: 建议文件名。

## 类成员 (Class members)

当前运行时未额外暴露 `NSURLResponse` 的类成员。

## 相关

- [NSHTTPURLResponse](/reference/foundation/ns-http-url-response/)
