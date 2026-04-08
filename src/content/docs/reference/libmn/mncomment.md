---
title: MNComment
description: LibMN中的MNComment对象API文档。
---

`MNComment`是用于处理卡片评论的对象，提供评论类型识别、内容读取、媒体数据获取和链接管理等功能，访问和管理评论数据。

## 构造函数

```ts
new MNComment(comment: NoteComment)
```

构造一个新的MNComment实例。

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `comment` | `NoteComment` | 是 | 原生评论对象。 |

## 类成员(Class members)

### 属性

无。

### 方法

#### `commentBelongsToType`

##### 类型

```ts
static commentBelongsToType(comment: NoteComment,types: string[]): boolean
```

##### 说明

判断评论是否属于给定类型集合，支持原始`comment.type`和标准化类型名两种匹配。

##### 参数

| 参数名    | 类型          | 必填 | 说明                                       |
|:----------|:--------------|:-----|:-------------------------------------------|
| `comment` | `NoteComment` | 是   | 原生评论对象。                             |
| `types`   | `string[]`    | 是   | 允许的类型列表，支持原始type和规范化type。 |

##### 返回值

- 类型:`boolean`
- 语义:命中任一类型返回true，没有命中返回false。

#### `getCommentType`

##### 类型

```ts
static getCommentType(comment: NoteComment): string|undefined
```

##### 说明

根据评论内容和原始type返回标准化评论类型。

##### 参数

| 参数名    | 类型          | 必填 | 说明               |
|:----------|:--------------|:-----|:-------------------|
| `comment` | `NoteComment` | 是   | 待识别的评论对象。 |

##### 返回值

- 类型:`string|undefined`
- 语义:返回规范化类型字符串，无法识别时返回undefined。

## 实例成员(Instance members)

### 属性

#### `imageId`

##### 类型

```ts
get imageId(): string|undefined
```

##### 说明

返回图片评论对应的媒体hash。

##### 返回值

- 类型:`string|undefined`
- 语义:图片型评论返回媒体hash，非图片型返回undefined。

#### `imageData`

##### 类型

```ts
get imageData(): NSData|undefined
```

##### 说明

返回图片评论对应的媒体二进制数据。

##### 返回值

- 类型:`NSData|undefined`
- 语义:图片型评论返回图片二进制数据，其他类型返回undefined。

#### `videoId`

##### 类型

```ts
get videoId(): string|undefined
```

##### 说明

返回音视频评论对应的媒体hash。

##### 返回值

- 类型:`string|undefined`
- 语义:audioComment返回hash，其他类型返回undefined。

#### `audioId`

##### 类型

```ts
get audioId(): string|undefined
```

##### 说明

返回音频评论对应的媒体hash。

##### 返回值

- 类型:`string|undefined`
- 语义:audioComment返回hash，其他类型返回undefined。

#### `audioData`

##### 类型

```ts
get audioData(): NSData|undefined
```

##### 说明

返回音频评论对应的媒体二进制数据。

##### 返回值

- 类型:`NSData|undefined`
- 语义:audioComment返回媒体数据，其他类型返回undefined。

#### `videoData`

##### 类型

```ts
get videoData(): NSData|undefined
```

##### 说明

返回音视频评论对应的媒体二进制数据。

##### 返回值

- 类型:`NSData|undefined`
- 语义:audioComment返回媒体数据，其他类型返回undefined。

#### `text`

##### 类型

```ts
get text(): string
```

##### 说明

返回当前评论的文本内容。

##### 返回值

- 类型:`string`
- 语义:有文本时返回文本，没有可用文本时返回空字符串。

#### `markdown`

##### 类型

```ts
get markdown(): boolean
```

##### 说明

判断当前评论是否为Markdown评论。

##### 返回值

- 类型:`boolean`
- 语义:类型为markdownComment时返回true，否则返回false。

#### `markdown`

##### 类型

```ts
set markdown(markdown: boolean): void
```

##### 说明

在普通文本评论和Markdown评论之间切换。

##### 返回值

- 类型:`void`
- 语义:完成切换后立即返回。

#### `text`

##### 类型

```ts
set text(text: string): void
```

##### 说明

更新当前评论文本，并同步写回原始卡片评论。

##### 返回值

- 类型:`void`
- 语义:写入完成后立即返回。

#### `tags`

##### 类型

```ts
get tags(): string[]|undefined
```

##### 说明

返回标签评论中的标签列表。

##### 返回值

- 类型:`string[]|undefined`
- 语义:tagComment返回以#开头的标签列表，其他类型返回undefined。

#### `direction`

##### 类型

```ts
get direction(): 'one-way'|'both'|undefined
```

##### 说明

返回链接评论的链接方向。

##### 返回值

- 类型:`'one-way'|'both'|undefined`
- 语义:linkComment返回方向值，其他类型返回undefined。

#### `direction`

##### 类型

```ts
set direction(direction: 'one-way'|'both'): void
```

##### 说明

设置链接评论方向，并同步处理反向链接。

##### 返回值

- 类型:`void`
- 语义:执行方向切换后返回。

#### `note`

##### 类型

```ts
get note(): MNNote|undefined
```

##### 说明

返回链接或留白评论关联的目标卡片。

##### 返回值

- 类型:`MNNote|undefined`
- 语义:可解析时返回MNNote实例，无法关联卡片时返回undefined。

### 方法

#### `refresh`

##### 类型

```ts
refresh(): void
```

##### 说明

按`originalNoteId`和`index`重新读取评论内容并刷新类型。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:同步完成后返回。

#### `copyImage`

##### 类型

```ts
copyImage(): void
```

##### 说明

复制当前评论对应的图片数据到剪贴板。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:复制动作触发后立即返回。

#### `copyText`

##### 类型

```ts
copyText(): void
```

##### 说明

复制当前评论文本到剪贴板。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:复制动作触发后立即返回。

#### `copy`

##### 类型

```ts
copy(): void
```

##### 说明

按评论类型自动复制文本或图片内容。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:复制动作触发后立即返回。

#### `remove`

##### 类型

```ts
remove(): void
```

##### 说明

从原始卡片中删除当前评论。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:删除动作发起后返回。

#### `replaceLink`

##### 类型

```ts
replaceLink(note: MNNote|MbBookNote|string): void
```

##### 说明

将链接评论目标替换为指定卡片，并根据方向维护反向链接。

##### 参数

| 参数名 | 类型     | 必填       | 说明     |
|:-------|:---------|:-----------|:---------|
| `note` | `MNNote\|MbBookNote\|string` | 是 | 目标卡片。 |

##### 返回值

- 类型:`void`
- 语义:替换完成后返回。

#### `hasBackLink`

##### 类型

```ts
hasBackLink(): boolean
```

##### 说明

检查当前链接评论是否存在反向链接。

##### 参数

无。

##### 返回值

- 类型:`boolean`
- 语义:存在反链返回true，不存在返回false。

#### `removeBackLink`

##### 类型

```ts
removeBackLink(): void
```

##### 说明

移除当前链接评论对应的反向链接。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:反链删除完成后返回。

#### `addBackLink`

##### 类型

```ts
addBackLink(force: boolean): void
```

##### 说明

为当前链接评论补充反向链接。

##### 参数

| 参数名  | 类型      | 必填 | 说明                                        |
|:--------|:----------|:-----|:--------------------------------------------|
| `force` | `boolean` | 否   | 为true时忽略当前direction，强制尝试补反链。 |

##### 返回值

- 类型:`void`
- 语义:补反链动作完成后返回。

#### `belongsToType`

##### 类型

```ts
belongsToType(types: string[]): boolean
```

##### 说明

判断当前评论实例是否命中类型列表。

##### 参数

| 参数名  | 类型       | 必填 | 说明             |
|:--------|:-----------|:-----|:-----------------|
| `types` | `string[]` | 是   | 允许的类型列表。 |

##### 返回值

- 类型:`boolean`
- 语义:实例类型命中列表返回true，否则返回false。
