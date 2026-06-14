---
title: MNNote
description: LibMN中的MNNote对象使用文档。
---

`MNNote`是用于操作卡片的核心对象，提供卡片读取、定位、修改、内容提取和关联管理等功能，访问和管理卡片数据。

## 构造函数

```ts
new MNNote(note:MNNote|MbBookNote|string|NoteConfig,alert?:boolean)
```

构造一个新的MNNote实例。

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `note` | `MNNote\|MbBookNote\|string\|NoteConfig` | 是 | 可传`MNNote`、`MbBookNote`、卡片id、`marginnote4app://note/...`链接、`current`等关键字、或建卡配置对象。 |
| `alert` | `boolean` | 否 | 保留参数，当前实现中不会改变返回逻辑。 |

## 类成员(Class members)

### 属性

| 字段名 | 类型 | 说明 |
|:-------|:-----|:-----|
| `noteCache` | `Record<string,MNNote>` | 缓存已包装过的卡片实例，避免重复创建。 |

### 方法

#### `getNoteFromCache`

##### 类型

```ts
static getNoteFromCache(noteId:string):MNNote|undefined
```

##### 说明

按`noteId`直接读缓存。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `noteId` | `string` | 是 | 目标卡片id。 |

##### 返回值

- 类型:`MNNote|undefined`
- 语义:返回缓存中的MNNote实例或undefined。

#### `noteFromId`

##### 类型

```ts
static noteFromId(noteId:string):MNNote|undefined
```

##### 说明

按id获取`MNNote`，命中缓存就复用，未命中就创建并写回缓存。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `noteId` | `string` | 是 | 目标卡片id。 |

##### 返回值

- 类型:`MNNote|undefined`
- 语义:返回MNNote实例或undefined。

#### `noteFromNote`

##### 类型

```ts
static noteFromNote(note:MbBookNote):MNNote|undefined
```

##### 说明

把原生`MbBookNote`包装成`MNNote`并接入缓存。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `note` | `MbBookNote` | 是 | 原生卡片对象。 |

##### 返回值

- 类型:`MNNote|undefined`
- 语义:返回MNNote实例或undefined。

## 实例成员(Instance members)

### 属性

| 字段名 | 类型 | 说明 |
|:-------|:-----|:-----|
| `note` | `MbBookNote` | 当前包装对象对应的原生卡片。 |
| `noteId` | `string` | 当前卡片id。 |
| `id` | `string` | `noteId`别名。 |
| `type` | `"textNote"|"blankTextNote"|"imageNote"|"videoNote"` | 返回当前卡片的主内容类型。 |
| `isBlankNote` | `boolean` | 判断是否为空白摘录卡。 |
| `notebookId` | `string` | 当前卡片所在学习集id。 |
| `notebook` | `MNNotebook` | 当前卡片所在学习集包装对象。 |
| `originNoteId` | `string|undefined` | 对应文档摘录原始卡片id。 |
| `originNote` | `MNNote|undefined` | 返回`originNoteId`对应的`MNNote`。 |
| `groupNoteId` | `string|undefined` | 返回合并组主卡id。 |
| `groupNote` | `MNNote|undefined` | 返回合并组主卡对象。 |
| `groupMode` | `number` | 返回分组模式值。 |
| `mindmapBranchClose` | `boolean` | 返回脑图分支折叠状态。 |
| `childNotes` | `MNNote[]` | 返回直接子卡数组。 |
| `parentNote` | `MNNote|undefined` | 读取父卡，写入时把当前卡片挂到新父卡下。 |
| `parentNoteId` | `string|undefined` | 返回父卡id。 |
| `childMindMap` | `MNNote|undefined` | 返回子脑图对应卡片。 |
| `descendantNodes` | `{descendant:MNNote[],treeIndex:number[][]}` | 返回所有后代卡及其树路径索引。 |
| `ancestorNodes` | `MNNote[]` | 返回从当前卡向上的祖先链。 |
| `brotherNotes` | `MNNote[]` | 返回同级卡片数组。 |
| `indexInBrotherNotes` | `number` | 返回当前卡在同级中的索引。 |
| `titles` | `string[]` | 读写分号分隔的标题集合，写入时会去重。 |
| `title` | `string` | 主标题视图，读取时会去掉`{{...}}`来源标题。 |
| `noteTitle` | `string` | 原始标题字符串，不过滤`{{...}}`片段。 |
| `titlesFromMarkdown` | `string[]` | 返回标题中`{{...}}`片段。 |
| `titlesWithoutMarkdownSource` | `string[]` | 返回去掉`{{...}}`后的标题集合。 |
| `excerpt` | `{type:string,text?:string,textFirst?:boolean,isBlankNote?:boolean,imageHash?:string,audioHash?:string,videoHash?:string,pageNos?:number[]}` | 返回摘录聚合信息，包含类型、文本、媒体hash和页码。 |
| `_excerptCache` | `{info:{type:string,text?:string,textFirst?:boolean,isBlankNote?:boolean,imageHash?:string,audioHash?:string,videoHash?:string,pageNos?:number[]},refreshTime:number}|undefined` | 摘录缓存对象。 |
| `excerptType` | `"text"|"image"|"video"|"audio"|undefined` | 返回主摘录类型。 |
| `isOCR` | `boolean` | 判断当前摘录是否按OCR文本优先处理。 |
| `textFirst` | `boolean` | 控制摘录以文本优先还是图片优先。 |
| `excerptText` | `string|undefined` | 主摘录文本。 |
| `excerptTextMarkdown` | `boolean|undefined` | 标记摘录文本是否按Markdown解释。 |
| `mainExcerptText` | `string` | 带空字符串兜底的摘录文本访问入口。 |
| `excerptPic` | `ExcerptPic|undefined` | 返回主摘录图片结构，附带尺寸与选区信息。 |
| `excerptPicData` | `NSData|undefined` | 返回主摘录图片二进制数据。 |
| `excerptVideoData` | `NSData|undefined` | 返回主摘录视频二进制数据。 |
| `excerptAudioData` | `NSData|undefined` | 返回主摘录音频二进制数据。 |
| `image` | `UIImage|undefined` | 返回卡片中第一张图片对象。 |
| `imageId` | `string|undefined` | 返回第一张图片的资源id。 |
| `imageData` | `NSData|undefined` | 返回第一张图片的二进制数据。 |
| `images` | `UIImage[]|undefined` | 返回全部图片对象。 |
| `imageDatas` | `NSData[]|undefined` | 返回全部图片二进制数据。 |
| `hasVideo` | `boolean` | 判断是否包含视频摘录。 |
| `videoId` | `string|undefined` | 返回视频资源id。 |
| `videoData` | `NSData|undefined` | 返回视频二进制数据。 |
| `comments` | `NoteComment[]` | 返回原生评论数组。 |
| `MNComments` | `MNComment[]` | 返回评论包装对象数组。 |
| `tags` | `string[]` | 读取标签名数组，写入时会覆盖旧标签。 |
| `linkedNotes` | `object[]` | 返回卡片链接关系集合。 |
| `summaryLinks` | `object[]` | 返回摘要链接集合。 |
| `mediaList` | `object[]` | 返回媒体列表。 |
| `excerptsTextPic` | `{ocr:string[],html:string[],md:string[]}` | 聚合当前卡及其链接卡的摘录文本和图片转写结果。 |
| `commentsTextPic` | `{html:string[],md:string[]}` | 聚合评论里的文本和绘图内容。 |
| `excerptsText` | `string[]` | 收集当前卡和链接卡里的摘录文本。 |
| `commentsText` | `string[]` | 收集评论文本，过滤标签和卡片链接。 |
| `allTextPic` | `{html:string,ocr:string,md:string}` | 返回整卡文本和图片信息的拼接结果。 |
| `allText` | `string` | 返回整卡纯文本长字符串。 |
| `excerptsCommentsText` | `string[]` | 返回摘录与评论文本数组，过滤链接和标签噪音。 |
| `colorIndex` | `number` | 读写卡片颜色索引。 |
| `color` | `string` | 用颜色名读写卡片颜色。 |
| `getNoteColorHex` | `string` | 返回当前颜色的Hex值。 |
| `colorHex` | `string` | `getNoteColorHex`别名。 |
| `fillIndex` | `number` | 读写填充样式索引。 |
| `createDate` | `string` | 创建时间字符串。 |
| `createDateNumber` | `number` | 创建时间时间戳。 |
| `modifiedDate` | `string` | 最后修改时间字符串。 |
| `modifiedDateNumber` | `number` | 最后修改时间时间戳。 |
| `noteURL` | `string` | 返回卡片链接。 |
| `url` | `string` | `noteURL`别名。 |
| `notes` | `MNNote[]` | 返回当前卡与它的链接卡集合。 |
| `docMd5` | `string|undefined` | 返回关联文档md5。 |
| `startPage` | `number|undefined` | 返回起始页码。 |
| `endPage` | `number|undefined` | 返回结束页码。 |
| `pageNos` | `number[]` | 返回当前卡及关联卡涉及的页码集合。 |
| `document` | `MNDocument` | 返回当前卡关联文档对象。 |
| `exist` | `boolean` | 判断底层卡片是否仍存在。 |

### 方法

#### `getExcerptInfo`

##### 类型

```ts
getExcerptInfo():object|undefined
```

##### 说明

返回摘录细节对象，包括类型、hash、选区、页码等。

##### 返回值

- 类型:`object|undefined`
- 语义:返回摘录细节对象或undefined。

#### `open`

##### 类型

```ts
open():void
```

##### 说明

在MarginNote中打开当前卡片。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `appendExcerptText`

##### 类型

```ts
appendExcerptText(text:string):void
```

##### 说明

在摘录正文末尾追加文本。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `text` | `string` | 是 | 要追加的文本。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `prependExcerptText`

##### 类型

```ts
prependExcerptText(text:string):void
```

##### 说明

在摘录正文开头插入文本。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `text` | `string` | 是 | 要插入的文本。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `copy`

##### 类型

```ts
copy():void
```

##### 说明

复制当前卡的关键信息到剪贴板。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `config`

##### 类型

```ts
config(opt?:{first?:boolean}):object
```

##### 说明

按配置导出卡片对象。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `opt` | `{first?:boolean}` | 否 | 导出选项，默认`{first:true}`。 |

##### 返回值

- 类型:`object`
- 语义:返回卡片配置对象。

#### `realGroupNoteIdForTopicId`

##### 类型

```ts
realGroupNoteIdForTopicId(nodebookid?:string):string
```

##### 说明

返回当前卡在指定学习集下的真实组卡id。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `nodebookid` | `string` | 否 | 目标学习集id，默认当前学习集。 |

##### 返回值

- 类型:`string`
- 语义:返回真实组卡id。

#### `realGroupNoteForTopicId`

##### 类型

```ts
realGroupNoteForTopicId(nodebookid?:string):MNNote
```

##### 说明

返回指定学习集下的真实组卡对象。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `nodebookid` | `string` | 否 | 目标学习集id，默认当前学习集。 |

##### 返回值

- 类型:`MNNote`
- 语义:返回真实组卡对象。

#### `noteInDocForTopicId`

##### 类型

```ts
noteInDocForTopicId(nodebookid?:string):MNNote
```

##### 说明

按学习集映射返回对应卡片对象。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `nodebookid` | `string` | 否 | 目标学习集id，默认当前学习集。 |

##### 返回值

- 类型:`MNNote`
- 语义:返回映射后的卡片对象。

#### `processMarkdownBase64Images`

##### 类型

```ts
processMarkdownBase64Images():void
```

##### 说明

处理正文里Base64图片引用。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `allNoteText`

##### 类型

```ts
allNoteText():string
```

##### 说明

返回标题、正文、评论拼接文本，不含链接和标签。

##### 返回值

- 类型:`string`
- 语义:返回拼接后的文本。

#### `setTitle`

##### 类型

```ts
setTitle(title:string):MNNote
```

##### 说明

设置标题并返回自身，便于链式调用。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `title` | `string` | 是 | 新标题。 |

##### 返回值

- 类型:`MNNote`
- 语义:返回自身，便于链式调用。

#### `setTtiles`

##### 类型

```ts
setTtiles(titles:string[]):MNNote
```

##### 说明

设置多标题并返回自身。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `titles` | `string[]` | 是 | 标题数组。 |

##### 返回值

- 类型:`MNNote`
- 语义:返回自身，便于链式调用。

#### `setTitleAndUpdateFromMarkdown`

##### 类型

```ts
setTitleAndUpdateFromMarkdown(title:string|string[]):MNNote
```

##### 说明

先设置标题，再把正文Markdown标题补进`{{...}}`来源标题。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `title` | `string|string[]` | 是 | 字符串或标题数组。 |

##### 返回值

- 类型:`MNNote`
- 语义:返回自身，便于链式调用。

#### `updateTitleFromMarkdown`

##### 类型

```ts
updateTitleFromMarkdown():MNNote
```

##### 说明

仅根据现有Markdown内容刷新来源标题片段。

##### 返回值

- 类型:`MNNote`
- 语义:返回自身，便于链式调用。

#### `_getMDContent`

##### 类型

```ts
_getMDContent():string
```

##### 说明

提取正文与评论中的Markdown内容。

##### 返回值

- 类型:`string`
- 语义:返回Markdown内容。

#### `getMDContent`

##### 类型

```ts
getMDContent(withBase64?:boolean):string
```

##### 说明

把当前卡转换成完整Markdown文本。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `withBase64` | `boolean` | 否 | 为`true`时会把图片内容转成Base64文本嵌入。 |

##### 返回值

- 类型:`string`
- 语义:返回完整的Markdown文本。
