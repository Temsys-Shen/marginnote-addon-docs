---
title: NSFileManager
description: 文件系统操作，检查路径、创建目录、读写文件等。
---

用于文件系统操作。通过 `NSFileManager.defaultManager()` 获取默认实例。常与 [Application.documentPath](/reference/global/application/)、[Application.tempPath](/reference/global/application/) 配合使用。

## 类成员 (Class members)

### `defaultManager`

获取默认文件管理器。

```javascript
static defaultManager(): NSFileManager
```

**Return Value:**

- `NSFileManager`: 默认单例。

## 实例成员 (Instance members)

### 路径与目录

### `fileExistsAtPath`

检查文件或目录是否存在。

```javascript
fileExistsAtPath(path: string): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 文件或目录路径。 |

### `isDirectoryAtPath`

检查路径是否为目录。

```javascript
isDirectoryAtPath(path: string): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 路径。 |

### `createDirectoryAtPath`

创建目录（支持创建中间目录）。

```javascript
createDirectoryAtPath(path: string, withIntermediateDirectories: boolean, attributes: NSDictionary | null): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 目录路径。 |
| `withIntermediateDirectories` | `boolean` | 是否创建中间目录。 |
| `attributes` | `NSDictionary \| null` | 目录属性（通常传 null）。 |

### `createDirectoryAtPath` (简易版)

创建目录（简易版）。

```javascript
createDirectoryAtPath(path: string, attributes: NSDictionary | null): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 目录路径。 |
| `attributes` | `NSDictionary \| null` | 目录属性。 |

### `contentsOfDirectoryAtPath`

获取目录内容（浅层遍历）。

```javascript
contentsOfDirectoryAtPath(path: string): string[]
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 目录路径。 |

**Return Value:**

- `string[]`: 文件名/子目录名列表。

### `subpathsOfDirectoryAtPath`

获取目录的所有子路径（深层遍历）。

```javascript
subpathsOfDirectoryAtPath(path: string): string[]
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 目录路径。 |

### `subpathsAtPath`

获取路径下的所有子路径。

```javascript
subpathsAtPath(path: string): string[]
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 路径。 |

### `directoryContentsAtPath`

获取目录内容（旧 API）。

```javascript
directoryContentsAtPath(path: string): string[]
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 目录路径。 |

### 读写与复制

### `contentsAtPath`

读取文件内容。

```javascript
contentsAtPath(path: string): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 文件路径。 |

**Return Value:**

- `NSData`: 文件数据对象。

### `copyItemAtPath`

复制文件或目录。

```javascript
copyItemAtPath(srcPath: string, toPath: string): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `srcPath` | `string` | 源路径。 |
| `toPath` | `string` | 目标路径。 |

### `moveItemAtPath`

移动（重命名）文件或目录。

```javascript
moveItemAtPath(srcPath: string, toPath: string): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `srcPath` | `string` | 源路径。 |
| `toPath` | `string` | 目标路径。 |

### 属性与权限

### `attributesOfItemAtPath`

获取文件/目录属性。

```javascript
attributesOfItemAtPath(path: string): NSDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 路径。 |

### `attributesOfFileSystemForPath`

获取文件系统属性（如磁盘空间）。

```javascript
attributesOfFileSystemForPath(path: string): NSDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 路径。 |

### `fileAttributesAtPath`

获取文件属性（遍历符号链接选项）。

```javascript
fileAttributesAtPath(path: string, traverseLink: boolean): NSDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 路径。 |
| `traverseLink` | `boolean` | 是否跟随符号链接。 |

### `isReadableFileAtPath`

检查文件是否可读。

```javascript
isReadableFileAtPath(path: string): boolean
```

### `isWritableFileAtPath`

检查文件是否可写。

```javascript
isWritableFileAtPath(path: string): boolean
```

### `isExecutableFileAtPath`

检查文件是否可执行。

```javascript
isExecutableFileAtPath(path: string): boolean
```

### `isDeletableFileAtPath`

检查文件是否可删除。

```javascript
isDeletableFileAtPath(path: string): boolean
```

## 相关

- [NSData](/reference/foundation/ns-data/)、[Application](/reference/global/application/)
- [教程：存储与文件](/guides/storage-and-files/)
