---
title: MNNotebook
description: LibMN中的MNNotebook对象API文档。
---

`MNNotebook`是用于操作学习集和文档笔记本的核心对象，提供集合管理、范围选择、卡片遍历和文档关联等功能，管理集合数据和执行相关操作。

## 构造函数

```ts
new MNNotebook(notebook: MbTopic|string|MNNotebook)
```

构造一个新的MNNotebook实例。

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `notebook` | `MbTopic\|string\|MNNotebook` | 是 | 学习集对象、学习集id或MNNotebook实例。 |

## 类成员(Class members)

### 属性

#### `currentNotebook`

##### 类型

```ts
static get currentNotebook(): MNNotebook|undefined
```

##### 说明

返回当前学习集实例。

##### 返回值

- 类型:`MNNotebook|undefined`
- 语义:返回当前学习集实例，无法解析时返回undefined。

### 方法

#### `allNotebooks`

#### 类型

```ts
static allNotebooks(): MNNotebook[]
```

#### 说明

返回当前数据库中的全部学习集并转换为MNNotebook实例数组。结果包含文档学习集、学习集和复习组，可用于全量遍历。

#### 参数

无。

#### 返回值

- 类型:`MNNotebook[]`
- 语义:返回所有notebook的MNNotebook包装数组。

#### `allNotebookIds`

#### 类型

```ts
static allNotebookIds(): string[]
```

#### 说明

返回全部学习集的topicId数组。仅返回id不包含对象详情，适合做快速存在性判断。

#### 参数

无。

#### 返回值

- 类型:`string[]`
- 语义:返回全部notebookId数组。

#### `allDocumentNotebooks`

#### 类型

```ts
static allDocumentNotebooks(option?: { exceptNotebookIds?: string[]; exceptNotebookNames?: string[] }): MNNotebook[]
```

#### 说明

返回全部文档学习集并支持排除指定id或名称。未传option时执行全量查询。

#### 参数

| 参数名   | 类型                    | 必填 | 说明           |
|:---------|:------------------------|:-----|:---------------|
| `option` | `{ exceptNotebookIds?: string[]; exceptNotebookNames?: string[] }` | 否   | 筛选参数对象。 |

#### 返回值

- 类型:`MNNotebook[]`
- 语义:返回文档笔记本的MNNotebook实例数组。

#### `allReviewGroups`

#### 类型

```ts
static allReviewGroups(option?: { exceptNotebookIds?: string[]; exceptNotebookNames?: string[] }): MNNotebook[]
```

#### 说明

返回全部复习组并支持排除指定id或名称。未传option时执行全量查询。

#### 参数

| 参数名   | 类型                    | 必填 | 说明           |
|:---------|:------------------------|:-----|:---------------|
| `option` | `{ exceptNotebookIds?: string[]; exceptNotebookNames?: string[] }` | 否   | 筛选参数对象。 |

#### 返回值

- 类型:`MNNotebook[]`
- 语义:返回复习组的MNNotebook实例数组。

#### `allStudySets`

#### 类型

```ts
static allStudySets(option: {exceptNotebookIds?:string[],exceptNotebookNames?:string[]}): MNNotebook[]
```

#### 说明

返回flags为2的学习集实例数组。会按option排除指定学习集，不满足条件时返回空数组。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `option` | `{exceptNotebookIds?:string[],exceptNotebookNames?:string[]}` | 否 | 排除配置。 |

#### 返回值

- 类型:`MNNotebook[]`
- 语义:返回flags为2且满足排除条件的学习集数组。

## 实例成员(Instance members)

### 属性

#### `notebook`

#### 类型

```ts
notebook: MbTopic
```

#### 说明

暴露当前实例绑定的原生MbTopic对象。该对象用于访问底层字段，修改时会直接影响当前学习集状态。

#### 返回值

- 类型:`MbTopic`
- 语义:返回当前实例绑定的原生notebook对象。

#### `notebookId`

#### 类型

```ts
get notebookId(): string
```

#### 说明

读取当前学习集的topicId。该字段与notebookId等价，可用于需要原生topic标识的接口。

#### 返回值

- 类型:`string`
- 语义:返回当前notebook的topicId。

#### `topicId`

#### 类型

```ts
get topicId(): string
```

#### 说明

读取当前学习集的topicId。该字段是topicId别名，便于与不同调用方命名保持一致。

#### 返回值

- 类型:`string`
- 语义:返回当前notebook的topicId。

#### `id`

#### 类型

```ts
get id(): string
```

#### 说明

读取当前学习集的topicId。该字段是id别名，适合通用对象列表渲染场景。

#### 返回值

- 类型:`string`
- 语义:返回当前notebook的topicId。

#### `title`

#### 类型

```ts
get title(): string
```

#### 说明

读取学习集标题用于界面展示或日志输出。标题内容来自原生对象，不做额外格式化。

#### 返回值

- 类型:`string`
- 语义:返回学习集标题。

#### `flags`

#### 类型

```ts
get flags(): number
```

#### 说明

读取原生flags数值。该值用于区分文档学习集、学习集和复习组。

#### 返回值

- 类型:`number`
- 语义:返回原生flags数值。

#### `noteColors`

#### 类型

```ts
get noteColors(): void
```

#### 说明

触发当前学习集摘录颜色查询。当前实现不返回颜色结果，仅执行内部查询调用。

#### 返回值

- 类型:`void`
- 语义:当前实现只调用查询函数，不返回颜色结果。

#### `type`

#### 类型

```ts
get type(): 'documentNotebook'|'studySet'|'reviewGroup'|string
```

#### 说明

根据flags返回学习集类型标识。遇到未收录flags时返回字符串类型值。

#### 返回值

- 类型:`'documentNotebook'|'studySet'|'reviewGroup'|string`
- 语义:按flags映射返回集合类型。

#### `url`

#### 类型

```ts
get url(): string
```

#### 说明

生成当前学习集的MarginNote内部链接。链接格式固定为marginnote4app://notebook/<topicId>。

#### 返回值

- 类型:`string`
- 语义:返回`marginnote4app://notebook/<topicId>`格式链接。

#### `mainDocMd5`

#### 类型

```ts
get mainDocMd5(): string|undefined
```

#### 说明

读取学习集主文档md5。非文档学习集或未绑定主文档时返回undefined。

#### 返回值

- 类型:`string|undefined`
- 语义:返回主文档md5。

#### `mainDoc`

#### 类型

```ts
get mainDoc(): MbBook|undefined
```

#### 说明

按mainDocMd5解析并返回文档对象。主文档不存在或无法解析时返回undefined。

#### 返回值

- 类型:`MbBook|undefined`
- 语义:可解析时返回文档对象，失败返回undefined。

#### `notes`

#### 类型

```ts
get notes(): MNNote[]
```

#### 说明

返回学习集中的卡片数组并转换为MNNote实例。学习集类型为studySet时会过滤内部辅助卡片。

#### 返回值

- 类型:`MNNote[]`
- 语义:返回当前集合中的MNNote数组。

#### `documents`

#### 类型

```ts
get documents(): MbBook[]
```

#### 说明

返回当前学习集关联的文档对象数组。没有关联文档时返回空数组。

#### 返回值

- 类型:`MbBook[]`
- 语义:返回关联文档对象数组。

#### `documentIds`

#### 类型

```ts
get documentIds(): string[]|undefined
```

#### 说明

返回当前学习集关联文档id列表。底层docList为空时返回undefined。

#### 返回值

- 类型:`string[]|undefined`
- 语义:返回docList按`|`拆分后的id数组。

#### `options`

#### 类型

```ts
get options(): object
```

#### 说明

读取学习集附加配置对象。配置结构随MarginNote版本变化，使用前应先判断字段是否存在。

#### 返回值

- 类型:`object`
- 语义:返回notebook附加配置对象。

#### `hashtags`

#### 类型

```ts
get hashtags(): string
```

#### 说明

读取学习集原始hashtags字符串。未设置标签时可能返回空字符串。

#### 返回值

- 类型:`string`
- 语义:返回原始hashtags字符串。

#### `tags`

#### 类型

```ts
get tags(): string[]
```

#### 说明

把hashtags拆分为标签数组并移除空项。返回结果不包含前导#。

#### 返回值

- 类型:`string[]`
- 语义:返回去空后的标签数组。

#### `tagsTree`

#### 类型

```ts
get tagsTree(): Array<{ name: string; path: string; children: Array<{ name: string; path: string; children: object[]; isLeaf?: boolean }>; isLeaf?: boolean }>
```

#### 说明

把标签数组转换为树形结构，便于分级展示。无标签时返回空数组。

#### 返回值

- 类型:`Array<{ name: string; path: string; children: Array<{ name: string; path: string; children: object[]; isLeaf?: boolean }>; isLeaf?: boolean }>`
- 语义:返回标签树对象。

#### `hideLinksInMindMapNode`

#### 类型

```ts
set hideLinksInMindMapNode(hide: boolean): void
```

#### 说明

设置脑图节点是否隐藏链接。写入后会直接更新当前学习集配置。

#### 返回值

- 类型:`void`
- 语义:写入当前学习集配置后立即返回，不提供持久化结果回调。

#### `hideLinksInMindMapNode`

#### 类型

```ts
get hideLinksInMindMapNode(): boolean
```

#### 说明

读取脑图节点隐藏链接开关。未显式设置时返回底层默认值。

#### 返回值

- 类型:`boolean`
- 语义:返回当前是否隐藏链接。

#### `reviewGroup`

#### 类型

```ts
get reviewGroup(): MNNotebook|undefined
```

#### 说明

返回当前学习集关联的复习组实例。没有reviewTopic时返回undefined。

#### 返回值

- 类型:`MNNotebook|undefined`
- 语义:有reviewTopic时返回复习组实例，没有则返回undefined。

#### `tabDocuments`

#### 类型

```ts
get tabDocuments(): MbBook[]
```

#### 说明

返回当前学习集的标签页文档列表。未配置tab文档时返回空数组。

#### 返回值

- 类型:`MbBook[]`
- 语义:返回标签页文档对象列表，没有配置时返回空数组。

#### `focusedChat`

#### 类型

```ts
get focusedChat(): MNNote|undefined
```

#### 说明

返回当前学习集聚焦的聊天卡片。没有FocusChatId时返回undefined。

#### 返回值

- 类型:`MNNote|undefined`
- 语义:有FocusChatId时返回聊天卡片，否则返回undefined。

### 方法

#### `constructor`

#### 类型

```ts
constructor(notebook: MbTopic|string)
```

#### 说明

构造并绑定一个学习集对象到当前实例。建议优先使用MNNotebook.new以获得统一转换和空值校验。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `notebook` | `MbTopic|string` | 是 | 学习集对象或学习集id。 |

#### 返回值

- 类型:`MNNotebook`
- 语义:返回与输入学习集绑定的`MNNotebook`实例。

#### `notebooksForDoc`

#### 类型

```ts
notebooksForDoc(docMd5?: string): MNNotebook[]|undefined
```

#### 说明

返回目标文档在当前学习集中的文档学习集列表。目标文档没有映射时返回undefined。

#### 参数

| 参数名   | 类型     | 必填 | 说明                    |
|:---------|:---------|:-----|:------------------------|
| `docMd5` | `string` | 否   | 文档md5，默认当前文档。 |

#### 返回值

- 类型:`MNNotebook[]|undefined`
- 语义:命中映射返回MNNotebook数组，没有映射返回undefined。

#### `mainNoteForDoc`

#### 类型

```ts
mainNoteForDoc(docMd5?: string): MNNote|undefined
```

#### 说明

返回目标文档在当前学习集中的主卡片。没有主卡映射时返回undefined。

#### 参数

| 参数名   | 类型     | 必填 | 说明                    |
|:---------|:---------|:-----|:------------------------|
| `docMd5` | `string` | 否   | 文档md5，默认当前文档。 |

#### 返回值

- 类型:`MNNote|undefined`
- 语义:找到映射返回主卡片，未找到返回undefined。

#### `tocNotesForDoc`

#### 类型

```ts
tocNotesForDoc(docMd5?: string): MNNote[]
```

#### 说明

返回目标文档对应的目录卡片列表。没有目录映射时返回空数组。

#### 参数

| 参数名   | 类型     | 必填 | 说明                    |
|:---------|:---------|:-----|:------------------------|
| `docMd5` | `string` | 否   | 文档md5，默认当前文档。 |

#### 返回值

- 类型:`MNNote[]`
- 语义:找到映射返回目录卡片数组，没有映射返回空数组。

#### `open`

#### 类型

```ts
open(): void
```

#### 说明

打开当前学习集。该方法只触发跳转行为，不返回打开结果。

#### 参数

无。

#### 返回值

- 类型:`void`
- 语义:触发打开学习集动作后立即返回，不等待界面跳转完成。

#### `openDoc`

#### 类型

```ts
openDoc(docMd5: string): void
```

#### 说明

在当前学习集中打开指定文档。传入docMd5无效时不会得到可用文档页面。

#### 参数

| 参数名   | 类型     | 必填 | 说明                   |
|:---------|:---------|:-----|:-----------------------|
| `docMd5` | `string` | 是   | 目标文档md5。 |

#### 返回值

- 类型:`void`
- 语义:触发文档打开动作后立即返回，不等待文档渲染完成。
#### `importDoc`

#### 类型

```ts
importDoc(): void
```

#### 说明

调起导入文档流程并把文档加入当前学习集。该方法仅触发系统动作，不返回导入结果。

#### 参数

无。

#### 返回值

- 类型:`void`
- 语义:触发系统导入流程后立即返回，不直接提供导入结果。
#### `copy`

#### 类型

```ts
copy(): void
```

#### 说明

复制当前学习集的关键信息到剪贴板。输出内容主要用于调试和手动核对。

#### 参数

无。

#### 返回值

- 类型:`void`
- 语义:完成复制动作后立即返回，不返回剪贴板写入状态。
