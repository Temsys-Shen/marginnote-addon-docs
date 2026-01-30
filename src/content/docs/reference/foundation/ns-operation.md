---
title: NSOperation
description: 可调度的任务单元，常与 NSOperationQueue 配合使用。
---

`NSOperation` 表示一个可调度任务。常与 `NSOperationQueue` 搭配，用于异步调度（例如 `NSURLConnection.sendAsynchronousRequest...` 的 queue 参数）。

> 注意：在插件环境里通常直接使用 `NSOperationQueue.mainQueue()` / `currentQueue()` 即可，不一定需要手动构造自定义 operation。

## 实例成员 (Instance members)

### `start`

开始执行。

```javascript
start(): void
```

**Return Value:**

- 无。

### `main`

主任务逻辑（子类重写）。

```javascript
main(): void
```

**Return Value:**

- 无。

### `cancel`

取消任务。

```javascript
cancel(): void
```

**Return Value:**

- 无。

### `isCancelled`

是否已取消。

```javascript
isCancelled(): boolean
```

**Return Value:**

- `boolean`: 是否已取消。

### `isExecuting`

是否正在执行。

```javascript
isExecuting(): boolean
```

**Return Value:**

- `boolean`: 是否正在执行。

### `isFinished`

是否已完成。

```javascript
isFinished(): boolean
```

**Return Value:**

- `boolean`: 是否已完成。

### `isConcurrent`

是否并发执行。

```javascript
isConcurrent(): boolean
```

**Return Value:**

- `boolean`: 是否并发。

### `isReady`

是否就绪可执行。

```javascript
isReady(): boolean
```

**Return Value:**

- `boolean`: 是否就绪。

### `addDependency`

添加依赖。

```javascript
addDependency(op: NSOperation): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `op` | `NSOperation` | 依赖的 operation。 |

**Return Value:**

- 无。

### `removeDependency`

移除依赖。

```javascript
removeDependency(op: NSOperation): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `op` | `NSOperation` | 要移除的依赖。 |

**Return Value:**

- 无。

### `dependencies`

依赖列表。

```javascript
dependencies(): NSArray
```

**Return Value:**

- `NSArray`: 依赖的 operation 数组。

### `queuePriority`

队列优先级。

```javascript
queuePriority(): number
```

**Return Value:**

- `number`: 优先级。

### `setQueuePriority`

设置队列优先级。

```javascript
setQueuePriority(p: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `p` | `number` | 优先级。 |

**Return Value:**

- 无。

### `completionBlock`

完成回调块。

```javascript
completionBlock(): (() => void) | undefined
```

**Return Value:**

- `(() => void) | undefined`: 完成回调。

### `setCompletionBlock`

设置完成回调块。

```javascript
setCompletionBlock(block: (() => void) | undefined): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `block` | `(() => void) | undefined` | 完成时调用的块。 |

**Return Value:**

- 无。

### `waitUntilFinished`

阻塞直到完成。

```javascript
waitUntilFinished(): void
```

**Return Value:**

- 无。

### `threadPriority`

线程优先级。

```javascript
threadPriority(): number
```

**Return Value:**

- `number`: 优先级。

### `setThreadPriority`

设置线程优先级。

```javascript
setThreadPriority(p: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `p` | `number` | 优先级。 |

**Return Value:**

- 无。

## 类成员 (Class members)

当前运行时未额外暴露 `NSOperation` 的类成员。
