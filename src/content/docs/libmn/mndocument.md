---
title: MNDocument
description: LibMN中的MNDocument对象使用文档。
---

`MNDocument`是用于文档级操作的核心对象，提供文档读取、页面定位、内容提取和导出等功能，支持获取文档信息、操作页面内容和管理文档相关的学习集。

## 构造函数

```ts
new MNDocument(document: MbBook|string|MNDocument)
```

构造一个新的MNDocument实例。

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `document` | `MbBook\|string\|MNDocument` | 是 | 文档对象、文档id或文档URL。 |

## 类成员(Class members)

### 属性

| 字段名 | 类型 | 说明 |
|:-------|:-----|:-----|
| `cachedDocuments` | `Record<string,MNDocument>` | 文档实例缓存。键是`docMd5`，值是`MNDocument`实例。 |
| `currentDocument` | `MNDocument` | 当前文档的包装实例。 |

### 方法

#### `extractPDFPage`

##### 类型

```ts
static async extractPDFPage(path: string,targetPageIndices: number[]): Promise<NSData|undefined>
```

##### 说明

从PDF中提取指定页并返回新的PDF数据。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `path` | `string` | 是 | PDF文件路径。 |
| `targetPageIndices` | `number[]` | 是 | 要提取的页码数组。 |

##### 返回值

- 类型:`Promise<NSData|undefined>`
- 语义:返回提取的PDF数据或undefined。

## 实例成员(Instance members)

### 属性

| 字段名 | 类型 | 说明 |
|:-------|:-----|:-----|
| `document` | `MbBook\|undefined` | 原生文档对象。 |
| `docMd5` | `string\|undefined` | 文档md5。 |
| `md5` | `string\|undefined` | `docMd5`别名。 |
| `id` | `string\|undefined` | `docMd5`别名。 |
| `docTitle` | `string\|undefined` | 文档标题。 |
| `title` | `string\|undefined` | `docTitle`别名。 |
| `pageCount` | `number\|undefined` | 文档总页数。 |
| `fullPathFileName` | `string\|undefined` | 文档完整路径。 |
| `path` | `string\|undefined` | `fullPathFileName`别名。 |
| `fileData` | `NSData\|undefined` | 文档文件二进制数据。 |
| `lastVisit` | `number\|Date\|undefined` | 最近访问时间。 |
| `currentTopicId` | `string\|undefined` | 当前关联学习集id。 |
| `currentNotebookId` | `string\|undefined` | 当前关联学习集id。 |
| `currentNotebook` | `MNNotebook\|undefined` | 当前关联学习集对象。 |
| `cacheContent` | `Record<number,string>` | 按页缓存文本内容。 |
| `tocNotes` | `MNNote[]\|undefined` | 文档目录卡片集合。 |
| `documentNotebooks` | `MNNote[]` | 以该文档为主文档的文档学习集。 |
| `studySets` | `MNNote[]` | 包含该文档的学习集。 |
| `info` | `{ pageCount?: number; docURL: string; file_type?: string; type: string; title?: string; docId?: string; md5: string; currentNotebook?: { id: string; name: string }; path: string; fileExists: boolean; name?: string }` | 文档信息对象，含路径、页数、URL和存在状态。 |
| `fileExists` | `boolean` | 文档文件是否存在。 |

### 方法

#### `getFileDataAtPages`

##### 类型

```ts
getFileDataAtPages(pageIndices: number[]): NSData|undefined
```

##### 说明

读取指定页组成的新PDF数据。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `pageIndices` | `number[]` | 是 | 要读取的页码数组。 |

##### 返回值

- 类型:`NSData|undefined`
- 语义:返回PDF数据或undefined。

#### `textContentsForPageNo`

##### 类型

```ts
textContentsForPageNo(pageNo: number): string
```

##### 说明

读取指定页文本。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `pageNo` | `number` | 是 | 页码。 |

##### 返回值

- 类型:`string`
- 语义:返回页面文本。

#### `getPageContent`

##### 类型

```ts
getPageContent(pageNo: number,cache?: boolean): string
```

##### 说明

读取一页文本，可选使用缓存。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `pageNo` | `number` | 是 | 页码。 |
| `cache` | `boolean` | 否 | 是否使用缓存。 |

##### 返回值

- 类型:`string`
- 语义:返回页面文本。

#### `getFileContent`

##### 类型

```ts
getFileContent(asArray?: boolean,cache?: boolean): string|string[]
```

##### 说明

读取整本文本，可返回拼接字符串或分页数组。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `asArray` | `boolean` | 否 | 是否返回数组。 |
| `cache` | `boolean` | 否 | 是否使用缓存。 |

##### 返回值

- 类型:`string|string[]`
- 语义:返回文本字符串或文本数组。

#### `open`

##### 类型

```ts
open(notebookId?: string): void
```

##### 说明

打开该文档。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `notebookId` | `string` | 否 | 学习集id。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `openAtPage`

##### 类型

```ts
openAtPage(pageNo: number,notebookId?: string): Promise<void>
```

##### 说明

打开文档并定位到指定页。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `pageNo` | `number` | 是 | 页码。 |
| `notebookId` | `string` | 否 | 学习集id。 |

##### 返回值

- 类型:`Promise<void>`
- 语义:无返回值。

#### `documentNotebookInStudySet`

##### 类型

```ts
documentNotebookInStudySet(notebookId?: string): MNNotebook|undefined
```

##### 说明

在学习集中查找该文档对应的文档学习集。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `notebookId` | `string` | 否 | 学习集id。 |

##### 返回值

- 类型:`MNNotebook|undefined`
- 语义:返回文档学习集或undefined。

#### `notesInDocumentInStudySet`

##### 类型

```ts
notesInDocumentInStudySet(notebookId?: string): MNNote[]
```

##### 说明

获取该文档在学习集对应文档学习集下的卡片。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `notebookId` | `string` | 否 | 学习集id。 |

##### 返回值

- 类型:`MNNote[]`
- 语义:返回卡片数组。

#### `mainNoteInNotebook`

##### 类型

```ts
mainNoteInNotebook(notebookId?: string): MNNote|undefined
```

##### 说明

获取文档在学习集中的主卡片。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `notebookId` | `string` | 否 | 学习集id。 |

##### 返回值

- 类型:`MNNote|undefined`
- 语义:返回主卡片或undefined。

#### `copy`

##### 类型

```ts
copy(): void
```

##### 说明

复制文档关键信息到剪贴板。

##### 返回值

- 类型:`void`
- 语义:无返回值。
