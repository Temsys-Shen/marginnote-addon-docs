---
title: NSOperationQueue
description: 任务队列，用于调度 NSOperation 或 block（常用于异步回调队列）。
---

`NSOperationQueue` 用于调度 `NSOperation` 或 block。插件里常用 `mainQueue()` 作为回调队列（例如 `NSURLConnection` 的异步请求回调）。

## 类成员 (Class members)

### `currentQueue`

当前队列。

```javascript
static currentQueue(): NSOperationQueue
```

**Return Value:**

- `NSOperationQueue`: 当前队列实例。

### `mainQueue`

主队列。

```javascript
static mainQueue(): NSOperationQueue
```

**Return Value:**

- `NSOperationQueue`: 主队列实例。

## 实例成员 (Instance members)

### `addOperation`

添加一个 operation。

```javascript
addOperation(op: NSOperation): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `op` | `NSOperation` | 要执行的任务。 |

**Return Value:**

- 无。

### `addOperationsWaitUntilFinished`

添加多个 operation，可选等待完成。

```javascript
addOperationsWaitUntilFinished(ops: NSArray, wait: boolean): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `ops` | `NSArray` | operation 数组。 |
| `wait` | `boolean` | 是否阻塞直到完成。 |

**Return Value:**

- 无。

### `addOperationWithBlock`

添加 block 作为 operation。

```javascript
addOperationWithBlock(block: () => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `block` | `() => void` | 要执行的块。 |

**Return Value:**

- 无。

### `operations`

当前队列中的 operation 数组。

```javascript
operations(): NSArray
```

**Return Value:**

- `NSArray`: operation 数组。

### `operationCount`

当前 operation 个数。

```javascript
operationCount(): number
```

**Return Value:**

- `number`: 个数。

### `maxConcurrentOperationCount`

最大并发数。

```javascript
maxConcurrentOperationCount(): number
```

**Return Value:**

- `number`: 最大并发数。

### `setMaxConcurrentOperationCount`

设置最大并发数。

```javascript
setMaxConcurrentOperationCount(cnt: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `cnt` | `number` | 最大并发数。 |

**Return Value:**

- 无。

### `setSuspended`

暂停/恢复队列。

```javascript
setSuspended(b: boolean): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `b` | `boolean` | 是否暂停。 |

**Return Value:**

- 无。

### `isSuspended`

是否已暂停。

```javascript
isSuspended(): boolean
```

**Return Value:**

- `boolean`: 是否暂停。

### `setName`

设置队列名称。

```javascript
setName(n: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `n` | `string` | 名称。 |

**Return Value:**

- 无。

### `name`

队列名称。

```javascript
name(): string
```

**Return Value:**

- `string`: 名称。

### `cancelAllOperations`

取消队列中所有 operation。

```javascript
cancelAllOperations(): void
```

**Return Value:**

- 无。

### `waitUntilAllOperationsAreFinished`

阻塞直到所有 operation 完成。

```javascript
waitUntilAllOperationsAreFinished(): void
```

**Return Value:**

- 无。
