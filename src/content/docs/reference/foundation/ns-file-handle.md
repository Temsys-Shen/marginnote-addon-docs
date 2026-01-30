---
title: NSFileHandle
description: 文件句柄（读写文件/标准输入输出）。
---

`NSFileHandle` 表示一个文件句柄，可用于读取/写入数据，或访问标准输入/输出/错误。

## 类成员 (Class members)

### `fileHandleWithStandardInput`

标准输入句柄。

```javascript
static fileHandleWithStandardInput(): NSFileHandle
```

**Return Value:**

- `NSFileHandle`: 标准输入句柄。

### `fileHandleWithStandardOutput`

标准输出句柄。

```javascript
static fileHandleWithStandardOutput(): NSFileHandle
```

**Return Value:**

- `NSFileHandle`: 标准输出句柄。

### `fileHandleWithStandardError`

标准错误句柄。

```javascript
static fileHandleWithStandardError(): NSFileHandle
```

**Return Value:**

- `NSFileHandle`: 标准错误句柄。

### `fileHandleWithNullDevice`

空设备句柄。

```javascript
static fileHandleWithNullDevice(): NSFileHandle
```

**Return Value:**

- `NSFileHandle`: 空设备句柄。

### `fileHandleForReadingAtPath`

以只读方式打开文件。

```javascript
static fileHandleForReadingAtPath(path: string): NSFileHandle
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 文件路径。 |

**Return Value:**

- `NSFileHandle`: 句柄实例。

### `fileHandleForWritingAtPath`

以只写方式打开文件。

```javascript
static fileHandleForWritingAtPath(path: string): NSFileHandle
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 文件路径。 |

**Return Value:**

- `NSFileHandle`: 句柄实例。

### `fileHandleForUpdatingAtPath`

以读写方式打开文件。

```javascript
static fileHandleForUpdatingAtPath(path: string): NSFileHandle
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 文件路径。 |

**Return Value:**

- `NSFileHandle`: 句柄实例。

### `fileHandleForReadingFromURLError`

从 URL 以只读方式打开。

```javascript
static fileHandleForReadingFromURLError(url: NSURL, error: any): NSFileHandle
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 文件 URL。 |
| `error` | `any` | 输出参数，接收错误。 |

**Return Value:**

- `NSFileHandle`: 句柄实例。

### `fileHandleForWritingToURLError`

从 URL 以只写方式打开。

```javascript
static fileHandleForWritingToURLError(url: NSURL, error: any): NSFileHandle
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 文件 URL。 |
| `error` | `any` | 输出参数，接收错误。 |

**Return Value:**

- `NSFileHandle`: 句柄实例。

### `fileHandleForUpdatingURLError`

从 URL 以读写方式打开。

```javascript
static fileHandleForUpdatingURLError(url: NSURL, error: any): NSFileHandle
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 文件 URL。 |
| `error` | `any` | 输出参数，接收错误。 |

**Return Value:**

- `NSFileHandle`: 句柄实例。

## 实例成员 (Instance members)

### `availableData`

当前可读数据（非阻塞）。

```javascript
availableData(): NSData
```

**Return Value:**

- `NSData`: 可读数据。

### `readDataToEndOfFile`

读取到文件末尾。

```javascript
readDataToEndOfFile(): NSData
```

**Return Value:**

- `NSData`: 读取的数据。

### `readDataOfLength`

读取指定长度。

```javascript
readDataOfLength(length: number): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `length` | `number` | 字节数。 |

**Return Value:**

- `NSData`: 读取的数据。

### `writeData`

写入数据。

```javascript
writeData(data: NSData): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `NSData` | 要写入的数据。 |

**Return Value:**

- 无。

### `offsetInFile`

当前文件偏移。

```javascript
offsetInFile(): number
```

**Return Value:**

- `number`: 偏移量（字节）。

### `seekToEndOfFile`

移动到文件末尾。

```javascript
seekToEndOfFile(): number
```

**Return Value:**

- `number`: 新偏移量。

### `seekToFileOffset`

移动到指定偏移。

```javascript
seekToFileOffset(offset: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `offset` | `number` | 偏移量（字节）。 |

**Return Value:**

- 无。

### `truncateFileAtOffset`

在指定偏移处截断文件。

```javascript
truncateFileAtOffset(offset: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `offset` | `number` | 偏移量。 |

**Return Value:**

- 无。

### `synchronizeFile`

同步到磁盘。

```javascript
synchronizeFile(): void
```

**Return Value:**

- 无。

### `closeFile`

关闭文件。

```javascript
closeFile(): void
```

**Return Value:**

- 无。

### `readInBackgroundAndNotify`

在后台读取并发送通知（较少用）。

```javascript
readInBackgroundAndNotify(): void
```

**Return Value:**

- 无。

### `readInBackgroundAndNotifyForModes`

在指定 run loop 模式下后台读取并通知。

```javascript
readInBackgroundAndNotifyForModes(modes: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `modes` | `NSArray` | run loop 模式数组。 |

**Return Value:**

- 无。

### `readToEndOfFileInBackgroundAndNotify`

在后台读取到末尾并通知。

```javascript
readToEndOfFileInBackgroundAndNotify(): void
```

**Return Value:**

- 无。

### `readToEndOfFileInBackgroundAndNotifyForModes`

在指定模式下后台读取到末尾并通知。

```javascript
readToEndOfFileInBackgroundAndNotifyForModes(modes: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `modes` | `NSArray` | run loop 模式数组。 |

**Return Value:**

- 无。

### `acceptConnectionInBackgroundAndNotify`

在后台接受连接并通知（较少用）。

```javascript
acceptConnectionInBackgroundAndNotify(): void
```

**Return Value:**

- 无。

### `acceptConnectionInBackgroundAndNotifyForModes`

在指定模式下后台接受连接并通知。

```javascript
acceptConnectionInBackgroundAndNotifyForModes(modes: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `modes` | `NSArray` | run loop 模式数组。 |

**Return Value:**

- 无。

### `waitForDataInBackgroundAndNotify`

在后台等待数据并通知。

```javascript
waitForDataInBackgroundAndNotify(): void
```

**Return Value:**

- 无。

### `waitForDataInBackgroundAndNotifyForModes`

在指定模式下后台等待数据并通知。

```javascript
waitForDataInBackgroundAndNotifyForModes(modes: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `modes` | `NSArray` | run loop 模式数组。 |

**Return Value:**

- 无。

### `fileDescriptor`

底层文件描述符。

```javascript
fileDescriptor(): number
```

**Return Value:**

- `number`: 文件描述符。
