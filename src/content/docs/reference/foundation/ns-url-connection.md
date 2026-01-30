---
title: NSURLConnection
description: 插件环境中唯一导出的网络请求类（deprecated，但可用）。
---

完整用法见 [网络请求](/guides/network-requests/) 教程。

`NSURLConnection` 是插件环境中导出的网络请求类（头文件标注为 deprecated，但在当前接口里仍可用）。它通常与 `NSURLRequest`/`NSMutableURLRequest`、`NSOperationQueue`、`NSData`、`NSError`、`NSHTTPURLResponse` 配合使用。

## 类成员 (Class members)

### `connectionWithRequestDelegate`

创建连接并设置 delegate。

```javascript
static connectionWithRequestDelegate(request: NSURLRequest, delegate: any): NSURLConnection
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `NSURLRequest` | 请求对象。 |
| `delegate` | `any` | 委托对象（实现 delegate 回调）。 |

**Return Value:**

- `NSURLConnection`: 新连接实例。

### `canHandleRequest`

是否可处理该请求。

```javascript
static canHandleRequest(request: NSURLRequest): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `NSURLRequest` | 请求对象。 |

**Return Value:**

- `boolean`: 是否可处理。

### `sendSynchronousRequestReturningResponseError`

同步发送请求。

```javascript
static sendSynchronousRequestReturningResponseError(request: NSURLRequest, response: any, error: any): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `NSURLRequest` | 请求对象。 |
| `response` | `any` | 输出参数，接收响应对象。 |
| `error` | `any` | 输出参数，接收错误对象。 |

**Return Value:**

- `NSData`: 响应数据，失败时为 null/undefined。

### `sendAsynchronousRequestQueueCompletionHandler`

异步发送请求。

```javascript
static sendAsynchronousRequestQueueCompletionHandler(request: NSURLRequest, queue: NSOperationQueue, completionHandler: (response: any, data: NSData, error: NSError) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `NSURLRequest` | 请求对象。 |
| `queue` | `NSOperationQueue` | 完成回调所在队列。 |
| `completionHandler` | `(response, data, error) => void` | 完成回调。 |

**Return Value:**

- 无。

## 实例成员 (Instance members)

### `originalRequest`

原始请求。

```javascript
originalRequest(): NSURLRequest
```

**Return Value:**

- `NSURLRequest`: 原始请求。

### `currentRequest`

当前请求（可能经重定向等变更）。

```javascript
currentRequest(): NSURLRequest
```

**Return Value:**

- `NSURLRequest`: 当前请求。

### `start`

开始连接。

```javascript
start(): void
```

**Return Value:**

- 无。

### `cancel`

取消连接。

```javascript
cancel(): void
```

**Return Value:**

- 无。

### `setDelegateQueue`

设置 delegate 回调所在队列。

```javascript
setDelegateQueue(queue: NSOperationQueue): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `queue` | `NSOperationQueue` | 队列。 |

**Return Value:**

- 无。

### Delegate 回调

将插件对象作为 delegate 传入时，可实现对应回调方法接收数据流与生命周期事件（如 `connectionDidReceiveResponse`、`connectionDidReceiveData`、`connectionDidFinishLoading`、`connectionDidFailWithError` 等）。

## 相关

- [网络请求](/guides/network-requests/) —— 完整 GET/POST 示例
- [NSURLRequest](/reference/foundation/ns-url-request/)
- [NSMutableURLRequest](/reference/foundation/ns-mutable-url-request/)
- [NSOperationQueue](/reference/foundation/ns-operation-queue/)
- [NSData](/reference/foundation/ns-data/)
- [NSError](/reference/foundation/ns-error/)
- [NSHTTPURLResponse](/reference/foundation/ns-http-url-response/)
