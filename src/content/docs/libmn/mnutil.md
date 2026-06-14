---
title: MNUtil
description: LibMN中的MNUtil对象API文档。
---

`MNUtil`是提供核心工具函数的对象，包含插件开发常用的上下文读取、学习集查询、文件操作、URL处理、HUD提示与异步交互等能力。

## 类成员(Class members)

### 属性

| 成员 | 类型 | 说明 |
| :--- | :--- | :--- |
| `onAlert` | `boolean` | 弹窗流程状态位，用于判断是否处于弹窗中。 |
| `themeColor` | `{Gray:UIColor,Default:UIColor,Dark:UIColor,Green:UIColor,Sepia:UIColor}` | 内置主题色映射表，按主题名取UIColor。 |
| `imageTypeCache` | `Record<string,string>` | 图片类型缓存，减少重复识别。 |
| `popUpNoteInfo` | `{noteId:string}\|undefined` | 弹出卡片上下文，常用字段是noteId。 |
| `popUpSelectionInfo` | `{docController:DocumentController}\|undefined` | 弹出选区上下文，包含docController。 |
| `initialized` | `boolean` | 初始化状态位。 |
| `dataFolder` | `string` | 插件数据目录路径。 |
| `MNImagePattern` | `RegExp` | 图片标记匹配规则。 |
| `defaultNoteColors` | `string[]` | 默认卡片颜色列表。 |
| `focusHistory` | `Array<{ type: string; time: number; noteId?: string; text?: string; imageData?: NSData; notebookId?: string; docMd5?: string; pageIndex?: number }>` | 最近聚焦记录列表。 |
| `errorLog` | `Array<{ source?: string; time: string; error: string|{ message: string; detail?: string }; info?: object|string }>` | 错误日志列表。 |
| `version` | `{ version: 'marginnote4'\|'marginnote3'; versionNumber: number; type: 'iPadOS'\|'iPhoneOS'\|'macOS' }\|undefined` | 当前MarginNote版本信息。 |
| `app` | `Application` | Application单例。 |
| `db` | `Database` | 数据库访问入口。 |
| `currentWindow` | `UIWindow` | 当前活动窗口。 |
| `windowWidth` | `number` | 当前窗口宽度。 |
| `windowHeight` | `number` | 当前窗口高度。 |
| `studyController` | `StudyController` | 当前学习控制器。 |
| `studyView` | `UIView` | 当前学习视图。 |
| `studyWidth` | `number` | 学习区域宽度。 |
| `studyRight` | `number` | 学习区域右边界。 |
| `studyHeight` | `number` | 学习区域高度。 |
| `isLeftSidebarOpen` | `boolean` | 左侧栏是否打开。 |
| `leftSidebarWidth` | `number` | 左侧栏宽度。 |
| `isFixedRightSidebarOpen` | `boolean` | 固定右侧栏是否打开。 |
| `fixedRightSidebarWidth` | `number` | 固定右侧栏宽度。 |
| `fixedRightSidebar` | `UIView\|undefined` | 固定右侧栏视图。 |
| `isFloatRightSidebarOpen` | `boolean` | 浮动右侧栏是否打开。 |
| `floatRightSidebar` | `UIView\|undefined` | 浮动右侧栏视图。 |
| `floatRightSidebarPosition` | `'left'\|'right'\|undefined` | 浮动右侧栏位置。 |
| `floatRightSidebarWidth` | `number` | 浮动右侧栏宽度。 |
| `isVertical` | `boolean` | 当前是否竖向分栏。 |
| `isHorizontal` | `boolean` | 当前是否横向分栏。 |
| `orientation` | `'vertical'\|'horizontal'` | 当前布局方向。 |
| `extensionPanelController` | `{ view: UIView }\|undefined` | 扩展面板控制器。 |
| `extensionPanelView` | `UIView\|undefined` | 扩展面板视图。 |
| `extensionPanelOn` | `boolean` | 扩展面板是否开启。 |
| `mainPath` | `string` | 插件主目录路径。 |
| `studyMode` | `number` | 当前学习模式。 |
| `readerController` | `ReaderController` | 当前阅读控制器。 |
| `notebookController` | `NotebookController` | 当前学习集控制器。 |
| `docControllers` | `DocumentController[]` | 当前文档控制器列表。 |
| `currentDocController` | `DocumentController` | 当前文档控制器。 |
| `mindmapView` | `MindMapView` | 当前脑图视图。 |
| `selectionText` | `string\|undefined` | 当前选中文本。 |
| `isSelectionText` | `boolean` | 当前是否选中文本。 |
| `activeTextView` | `UITextView\|undefined` | 当前活跃文本视图。 |
| `selectionRefreshTime` | `number` | 选区缓存刷新时间。 |
| `_currentSelection` | `{onSelection:boolean,image?:NSData,text?:string,isText?:boolean,docMd5?:string,pageIndex?:number,source?:string,docController?:DocumentController}` | 内部选区缓存。 |
| `currentSelection` | `{onSelection:boolean,image?:NSData,text?:string,isText?:boolean,docMd5?:string,pageIndex?:number,source?:string}` | 统一选区对象，含文本或图片信息。 |
| `currentNotebookId` | `string` | 当前学习集id。 |
| `currentNotebook` | `MbTopic\|undefined` | 当前学习集对象。 |
| `currentNotebookFlags` | `number` | 当前学习集标记。 |
| `currentNotebookType` | `'Hiden'\|'Doc'\|'MindMap'\|'FlashCard'\|'Unknown'` | 当前学习集类型。 |
| `currentNotebookController` | `NotebookController` | 当前学习集控制器对象。 |
| `currentNotebookExcerptColor` | `string[]` | 当前学习集摘录颜色。 |
| `currentDoc` | `MbBook` | 当前文档对象。 |
| `currentDocmd5` | `string\|undefined` | 当前文档md5旧命名。 |
| `currentDocMd5` | `string\|undefined` | 当前文档md5。 |
| `isZH` | `boolean` | 当前语言是否中文。 |
| `currentTheme` | `'Default'\|'Dark'\|'Light'\|'Gray'\|'Green'\|'Sepia'` | 当前主题名。 |
| `currentThemeColor` | `UIColor` | 当前主题颜色。 |
| `clipboardText` | `string` | 剪贴板文本。 |
| `clipboardImage` | `UIImage\|undefined` | 剪贴板图片对象。 |
| `clipboardImageData` | `NSData\|undefined` | 剪贴板图片数据。 |
| `dbFolder` | `string` | 数据库目录路径。 |
| `cacheFolder` | `string` | 缓存目录路径。 |
| `documentFolder` | `string` | 文档目录路径。 |
| `tempFolder` | `string` | 临时目录路径。 |
| `splitLine` | `number\|undefined` | 分隔线文本。 |
| `_appVersion` | `{ version: 'marginnote4'\|'marginnote3'; versionNumber: number; type: 'iPadOS'\|'iPhoneOS'\|'macOS' }\|undefined` | 内部缓存的版本号。 |
| `cancelString` | `string` | 取消按钮文案。 |
| `confirmString` | `string` | 确认按钮文案。 |

### 方法

#### `init`

##### 类型

```ts
static init(mainPath: string): void
```

##### 说明

初始化MNUtil运行环境并记录主路径。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `mainPath` | `string` | 是 | 插件主目录路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `checkDataDir`

##### 类型

```ts
static checkDataDir(): void
```

##### 说明

检查并准备数据目录。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `addHistory`

##### 类型

```ts
static addHistory(type: string, detail: { noteId?: string; text?: string; imageData?: NSData; notebookId?: string; docMd5?: string; pageIndex?: number }): void
```

##### 说明

写入一次聚焦历史记录。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `type` | `string` | 是 | 历史记录类型。 |
| `detail` | `{ noteId?: string; text?: string; imageData?: NSData; notebookId?: string; docMd5?: string; pageIndex?: number }` | 是 | 历史记录详情。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `addErrorLog`

##### 类型

```ts
static addErrorLog(error: string|{ message: string; detail?: string }, source: string, info?: object|string): void
```

##### 说明

写入一条错误日志。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `error` | `string\|{ message: string; detail?: string }` | 是 | 错误信息或错误对象。 |
| `source` | `string` | 是 | 错误来源。 |
| `info` | `object\|string` | 否 | 附加信息。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `customBtoa`

##### 类型

```ts
static customBtoa(str: string): string
```

##### 说明

把字符串做Base64编码。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `str` | `string` | 是 | 要编码的字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回Base64编码后的字符串。

#### `utf8_to_b64`

##### 类型

```ts
static utf8_to_b64(str: string): string
```

##### 说明

UTF-8字符串转Base64。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `str` | `string` | 是 | 要编码的UTF-8字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回Base64编码后的字符串。

#### `customAtob`

##### 类型

```ts
static customAtob(input: string): string
```

##### 说明

把Base64解码成字符串。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `input` | `string` | 是 | 要解码的Base64字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回解码后的字符串。

#### `b64_to_utf8`

##### 类型

```ts
static b64_to_utf8(str: string): string
```

##### 说明

Base64转UTF-8字符串。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `str` | `string` | 是 | 要解码的Base64字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回解码后的UTF-8字符串。

#### `btoa`

##### 类型

```ts
static btoa(str: string): string
```

##### 说明

字符串转Base64。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `str` | `string` | 是 | 要编码的字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回Base64编码后的字符串。

#### `compressAndEncode`

##### 类型

```ts
static compressAndEncode(jsonObj: object, type?: 'pako'|'lz-string'): string|undefined
```

##### 说明

压缩JSON并输出可传输字符串。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `jsonObj` | `object` | 是 | 要压缩的JSON对象。 |
| `type` | `'pako'|'lz-string'` | 否 | 压缩类型，默认为pako。 |

##### 返回值

- 类型:`string|undefined`
- 语义:返回压缩后的字符串，失败时返回undefined。

#### `decodeAndDecompress`

##### 类型

```ts
static decodeAndDecompress(base64: string, type?: 'pako'|'lz-string'): string|undefined
```

##### 说明

还原压缩字符串。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `base64` | `string` | 是 | 要解压的Base64字符串。 |
| `type` | `'pako'|'lz-string'` | 否 | 压缩类型，默认为pako。 |

##### 返回值

- 类型:`string|undefined`
- 语义:返回解压后的字符串，失败时返回undefined。

#### `atob`

##### 类型

```ts
static atob(str: string): string
```

##### 说明

Base64转字符串。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `str` | `string` | 是 | 要解码的Base64字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回解码后的字符串。

#### `generateURLScheme`

##### 类型

```ts
static generateURLScheme(scheme: string, host?: string, path?: string|string[], query?: Record<string,string|number|boolean|object>, fragment?: string): string
```

##### 说明

按组件拼装URL。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `scheme` | `string` | 是 | URL协议。 |
| `host` | `string` | 否 | URL主机。 |
| `path` | `string|string[]` | 否 | URL路径。 |
| `query` | `Record<string,string|number|boolean|object>` | 否 | URL查询参数。 |
| `fragment` | `string` | 否 | URL片段。 |

##### 返回值

- 类型:`string`
- 语义:返回拼装后的目标URL字符串。

#### `parseMNUIStatusURL`

##### 类型

```ts
static parseMNUIStatusURL(encodedURL: string): object|string|null|undefined
```

##### 说明

解析MNUI状态URL。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `encodedURL` | `string` | 是 | 要解析的MNUI状态URL。 |

##### 返回值

- 类型:`object|string|null|undefined`
- 语义:返回解析后的状态对象，失败时返回null或undefined。

#### `generateMNUIStatusURL`

##### 类型

```ts
static generateMNUIStatusURL(jsonObj: object): string|null
```

##### 说明

把状态对象转成MNUI状态URL。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `jsonObj` | `object` | 是 | 要转换的状态对象。 |

##### 返回值

- 类型:`string|null`
- 语义:返回生成的MNUI状态URL，失败时返回null。

#### `setUIStatusByConfig`

##### 类型

```ts
static setUIStatusByConfig(jsonObj: object): void|null
```

##### 说明

按配置切换界面状态。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `jsonObj` | `object` | 是 | 界面状态配置对象。 |

##### 返回值

- 类型:`void|null`
- 语义:无返回值，失败时返回null。

#### `setMindmapZoonScale`

##### 类型

```ts
static setMindmapZoonScale(scale: number): void
```

##### 说明

设置脑图缩放比例。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `scale` | `number` | 是 | 缩放比例。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `setSideBar`

##### 类型

```ts
static setSideBar(open: boolean): void
```

##### 说明

打开或关闭侧栏。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `open` | `boolean` | 是 | 是否打开侧栏。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `searchInSideBar`

##### 类型

```ts
static searchInSideBar(searchText: string, type?: 'name'|'text'): void
```

##### 说明

在侧栏按标题或文本搜索。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `searchText` | `string` | 是 | 搜索文本。 |
| `type` | `'name'|'text'` | 否 | 搜索类型，默认为name。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `_getFloatSearchWebview`

##### 类型

```ts
static _getFloatSearchWebview(): UIWebView|undefined
```

##### 说明

获取浮动搜索WebView。

##### 参数

无。

##### 返回值

- 类型:`UIWebView|undefined`
- 语义:返回浮动搜索WebView实例，不存在时返回undefined。

#### `_getFixedSearchWebview`

##### 类型

```ts
static _getFixedSearchWebview(): UIWebView|undefined
```

##### 说明

获取固定搜索WebView。

##### 参数

无。

##### 返回值

- 类型:`UIWebView|undefined`
- 语义:返回固定搜索WebView实例，不存在时返回undefined。

#### `isSearchWebviewShown`

##### 类型

```ts
static isSearchWebviewShown(): boolean
```

##### 说明

判断搜索WebView是否可见。

##### 参数

无。

##### 返回值

- 类型:`boolean`
- 语义:返回搜索WebView是否可见。

#### `getSearchWebviewURL`

##### 类型

```ts
static getSearchWebviewURL(): string|undefined
```

##### 说明

读取搜索WebView当前URL。

##### 参数

无。

##### 返回值

- 类型:`string|undefined`
- 语义:返回搜索WebView当前URL，不存在时返回undefined。

#### `showResearchView`

##### 类型

```ts
static showResearchView(): void
```

##### 说明

显示研究视图。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `openURLInResearch`

##### 类型

```ts
static openURLInResearch(url: string, needEncode?: boolean): void
```

##### 说明

在研究视图打开URL。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | `string` | 是 | 要打开的URL。 |
| `needEncode` | `boolean` | 否 | 是否需要编码，默认为false。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `openNoteEditor`

##### 类型

```ts
static openNoteEditor(noteId: string): void
```

##### 说明

打开指定卡片编辑器。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `noteId` | `string` | 是 | 卡片ID。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `selectNotesInMindmap`

##### 类型

```ts
static selectNotesInMindmap(noteIds: string[]|string): void
```

##### 说明

在脑图中选中目标卡片。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `noteIds` | `string[]|string` | 是 | 卡片ID或卡片ID数组。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `setTheme`

##### 类型

```ts
static setTheme(themeName: string): void
```

##### 说明

切换主题。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `themeName` | `string` | 是 | 主题名称。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `getToday`

##### 类型

```ts
static getToday(): number
```

##### 说明

获取当天日期数字。

##### 参数

无。

##### 返回值

- 类型:`number`
- 语义:返回当天日期数字。

#### `_isTagComment_`

##### 类型

```ts
static _isTagComment_(comment: NoteComment): boolean
```

##### 说明

判断评论是否是标签评论。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `comment` | `NoteComment` | 是 | 评论对象。 |

##### 返回值

- 类型:`boolean`
- 语义:返回评论是否是标签评论。

#### `getCurrentSelection`

##### 类型

```ts
static getCurrentSelection(): {onSelection:boolean,image?:NSData,text?:string,isText?:boolean,docMd5?:string,pageIndex?:number,source?:string,docController?:DocumentController}
```

##### 说明

读取当前选区。

##### 参数

无。

##### 返回值

- 类型:`{onSelection:boolean,image?:NSData,text?:string,isText?:boolean,docMd5?:string,pageIndex?:number,source?:string,docController?:DocumentController}`
- 语义:返回当前选区对象。

#### `rgbaToHex`

##### 类型

```ts
static rgbaToHex(rgba: { r: number; g: number; b: number; a: number }, includeAlpha?: boolean, toUpperCase?: boolean): string
```

##### 说明

RGBA转十六进制颜色。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `rgba` | `{ r: number; g: number; b: number; a: number }` | 是 | RGBA颜色对象。 |
| `includeAlpha` | `boolean` | 否 | 是否包含透明度，默认`false`。 |
| `toUpperCase` | `boolean` | 否 | 是否大写，默认`false`。 |

##### 返回值

- 类型:`string`
- 语义:返回十六进制颜色值。

#### `rgbaArrayToHexArray`

##### 类型

```ts
static rgbaArrayToHexArray(rgbaArray: Array<{ r: number; g: number; b: number; a: number }>, includeAlpha?: boolean, toUpperCase?: boolean): string[]
```

##### 说明

RGBA数组批量转十六进制颜色。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `rgbaArray` | `Array<{ r: number; g: number; b: number; a: number }>` | 是 | RGBA数组。 |
| `includeAlpha` | `boolean` | 否 | 是否包含透明度，默认`false`。 |
| `toUpperCase` | `boolean` | 否 | 是否大写，默认`false`。 |

##### 返回值

- 类型:`string[]`
- 语义:返回十六进制颜色值数组。

#### `getNotebookExcerptColorById`

##### 类型

```ts
static getNotebookExcerptColorById(notebookId: string): string[]
```

##### 说明

按学习集id获取摘录颜色。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `notebookId` | `string` | 是 | 学习集ID。 |

##### 返回值

- 类型:`string[]`
- 语义:返回学习集的摘录颜色。

#### `noteColorByNotebookIdAndColorIndex`

##### 类型

```ts
static noteColorByNotebookIdAndColorIndex(notebookId: string, colorIndex: number): string
```

##### 说明

按学习集和颜色索引取颜色值。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `notebookId` | `string` | 是 | 学习集ID。 |
| `colorIndex` | `number` | 是 | 颜色索引。 |

##### 返回值

- 类型:`string`
- 语义:返回颜色值。

#### `appVersion`

##### 类型

```ts
static appVersion(): { version: 'marginnote4'|'marginnote3'; versionNumber: number; type: 'iPadOS'|'iPhoneOS'|'macOS' }|undefined
```

##### 说明

获取应用版本号。

##### 参数

无。

##### 返回值

- 类型:`{ version: 'marginnote4'|'marginnote3'; versionNumber: number; type: 'iPadOS'|'iPhoneOS'|'macOS' }\|undefined`
- 语义:返回应用版本和系统类型信息，异常时返回`undefined`。

#### `isIOS`

##### 类型

```ts
static isIOS(): boolean
```

##### 说明

判断当前系统是否iOS。

##### 参数

无。

##### 返回值

- 类型:`boolean`
- 语义:返回当前系统是否iOS。

#### `isMacOS`

##### 类型

```ts
static isMacOS(): boolean
```

##### 说明

判断当前系统是否macOS。

##### 参数

无。

##### 返回值

- 类型:`boolean`
- 语义:返回当前系统是否macOS。

#### `isIPadOS`

##### 类型

```ts
static isIPadOS(): boolean
```

##### 说明

判断当前系统是否iPadOS。

##### 参数

无。

##### 返回值

- 类型:`boolean`
- 语义:返回当前系统是否iPadOS。

#### `isMN4`

##### 类型

```ts
static isMN4(): boolean
```

##### 说明

判断当前是否MarginNote4。

##### 参数

无。

##### 返回值

- 类型:`boolean`
- 语义:返回当前是否MarginNote4。

#### `isMN3`

##### 类型

```ts
static isMN3(): boolean
```

##### 说明

判断当前是否MarginNote3。

##### 参数

无。

##### 返回值

- 类型:`boolean`
- 语义:返回当前是否MarginNote3。

#### `getMNUtilVersion`

##### 类型

```ts
static getMNUtilVersion(): string
```

##### 说明

获取MNUtil版本号。

##### 参数

无。

##### 返回值

- 类型:`string`
- 语义:返回MNUtil版本号。

#### `countWords`

##### 类型

```ts
static countWords(str: string): number
```

##### 说明

统计文本词数。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `str` | `string` | 是 | 要统计的文本。 |

##### 返回值

- 类型:`number`
- 语义:返回文本词数。

#### `removePunctuationOnlyElements`

##### 类型

```ts
static removePunctuationOnlyElements(arr: string[]): string[]
```

##### 说明

移除仅含标点的分词结果。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `arr` | `string[]` | 是 | 分词结果数组。 |

##### 返回值

- 类型:`string[]`
- 语义:返回移除标点后的分词结果数组。

#### `doSegment`

##### 类型

```ts
static doSegment(str: string): string[]
```

##### 说明

对文本做分词。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `str` | `string` | 是 | 要分词的文本。 |

##### 返回值

- 类型:`string[]`
- 语义:返回分词结果数组。

#### `wordCountBySegmentit`

##### 类型

```ts
static wordCountBySegmentit(str: string): number
```

##### 说明

按分词结果统计词数。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `str` | `string` | 是 | 要统计的文本。 |

##### 返回值

- 类型:`number`
- 语义:返回按分词结果统计的词数。

#### `importNotebook`

##### 类型

```ts
static importNotebook(path: string, merge: boolean): MNNotebook|undefined
```

##### 说明

导入学习集文件。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 是 | 学习集文件路径。 |
| `merge` | `boolean` | 是 | 是否合并。 |

##### 返回值

- 类型:`MNNotebook\|undefined`
- 语义:返回导入的学习集对象，失败时返回undefined。

#### `subpathsOfDirectory`

##### 类型

```ts
static subpathsOfDirectory(path: string): string[]
```

##### 说明

读取目录全部子路径。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 是 | 目录路径。 |

##### 返回值

- 类型:`string[]`
- 语义:返回目录全部子路径数组。

#### `contentsOfDirectory`

##### 类型

```ts
static contentsOfDirectory(path: string): string[]
```

##### 说明

读取目录直属内容。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 是 | 目录路径。 |

##### 返回值

- 类型:`string[]`
- 语义:返回目录直属内容数组。

#### `allNotebooks`

##### 类型

```ts
static allNotebooks(): MNNotebook[]
```

##### 说明

获取全部学习集。

##### 参数

无。

##### 返回值

- 类型:`MNNotebook[]`
- 语义:返回全部学习集数组。

#### `allNotebookIds`

##### 类型

```ts
static allNotebookIds(): string[]
```

##### 说明

获取全部学习集id。

##### 参数

无。

##### 返回值

- 类型:`string[]`
- 语义:返回全部学习集id数组。

#### `allDocumentNotebooks`

##### 类型

```ts
static allDocumentNotebooks(option?: { exceptNotebookIds?: string[]; exceptNotebookNames?: string[] }): MNNotebook[]
```

##### 说明

获取文档学习集列表。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `option` | `{ exceptNotebookIds?: string[]; exceptNotebookNames?: string[] }` | 否 | 排除选项。 |

##### 返回值

- 类型:`MNNotebook[]`
- 语义:返回文档学习集列表。

#### `allReviewGroups`

##### 类型

```ts
static allReviewGroups(option?: { exceptNotebookIds?: string[]; exceptNotebookNames?: string[] }): MNNotebook[]
```

##### 说明

获取复习组列表。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `option` | `{ exceptNotebookIds?: string[]; exceptNotebookNames?: string[] }` | 否 | 排除选项。 |

##### 返回值

- 类型:`MNNotebook[]`
- 语义:返回复习组列表。

#### `allStudySets`

##### 类型

```ts
static allStudySets(option?: { exceptNotebookIds?: string[]; exceptNotebookNames?: string[] }): MNNotebook[]
```

##### 说明

获取学习集列表。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `option` | `{ exceptNotebookIds?: string[]; exceptNotebookNames?: string[] }` | 否 | 排除选项。 |

##### 返回值

- 类型:`MNNotebook[]`
- 语义:返回学习集列表。

#### `notesInStudySet`

##### 类型

```ts
static notesInStudySet(studySetId?: string|MNNotebook): MbBookNote[]
```

##### 说明

获取学习集内卡片。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `studySetId` | `string\|MNNotebook` | 否 | 学习集ID或学习集对象。 |

##### 返回值

- 类型:`MbBookNote[]`
- 语义:返回学习集内卡片数组。

#### `chatNotesInStudySet`

##### 类型

```ts
static chatNotesInStudySet(studySetId?: string|MNNotebook): MbBookNote[]
```

##### 说明

获取学习集内可聊天卡片。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `studySetId` | `string\|MNNotebook` | 否 | 学习集ID或学习集对象。 |

##### 返回值

- 类型:`MbBookNote[]`
- 语义:返回学习集内可聊天卡片数组。

#### `convertDate`

##### 类型

```ts
static convertDate(date: string|number|Date|null|undefined): Date|null
```

##### 说明

把输入值转成Date对象。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `date` | `string\|number\|Date\|null\|undefined` | 是 | 要转换的日期值。 |

##### 返回值

- 类型:`Date\|null`
- 语义:返回转换后的Date对象，失败时返回null。

#### `convertNsAttrsToFsStats`

##### 类型

```ts
static convertNsAttrsToFsStats(nsAttrs: Record<string, object|string|number|Date>): {
  dev: number
  ino: number
  mode: number
  nlink: number
  uid: number
  gid: number
  rdev: number
  size: number
  blksize: number
  blocks: number
  atimeMs: number
  mtimeMs: number
  ctimeMs: number
  birthtimeMs: number
  atime: Date
  mtime: Date
  ctime: Date
  birthtime: Date
  _nsFileType?: string
  _nsFileOwnerAccountName?: string
  _nsFileGroupOwnerAccountName?: string
  _nsFileProtectionKey?: string
  _nsFileExtendedAttributes?: object
  isFile: boolean
  isDirectory: boolean
  isSymbolicLink: boolean
  isFIFO: boolean
  isSocket: boolean
  isBlockDevice: boolean
  isCharacterDevice: boolean
}
```

##### 说明

把NS文件属性转成常见文件属性结构。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `nsAttrs` | `Record<string,object\|string\|number\|Date>` | 是 | NS文件属性对象。 |

##### 返回值

- 类型:`{ dev: number; ino: number; mode: number; nlink: number; uid: number; gid: number; rdev: number; size: number; blksize: number; blocks: number; atimeMs: number; mtimeMs: number; ctimeMs: number; birthtimeMs: number; atime: Date; mtime: Date; ctime: Date; birthtime: Date; _nsFileType?: string; _nsFileOwnerAccountName?: string; _nsFileGroupOwnerAccountName?: string; _nsFileProtectionKey?: string; _nsFileExtendedAttributes?: object; isFile: boolean; isDirectory: boolean; isSymbolicLink: boolean; isFIFO: boolean; isSocket: boolean; isBlockDevice: boolean; isCharacterDevice: boolean }`
- 语义:返回转换后的文件属性对象。

#### `getFileAttributes`

##### 类型

```ts
static getFileAttributes(path: string): {
  dev: number
  ino: number
  mode: number
  nlink: number
  uid: number
  gid: number
  rdev: number
  size: number
  blksize: number
  blocks: number
  atimeMs: number
  mtimeMs: number
  ctimeMs: number
  birthtimeMs: number
  atime: Date
  mtime: Date
  ctime: Date
  birthtime: Date
  isFile: boolean
  isDirectory: boolean
  isSymbolicLink: boolean
  isFIFO: boolean
  isSocket: boolean
  isBlockDevice: boolean
  isCharacterDevice: boolean
  path: string
}
```

##### 说明

读取文件属性。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 是 | 文件路径。 |

##### 返回值

- 类型:`{ dev: number; ino: number; mode: number; nlink: number; uid: number; gid: number; rdev: number; size: number; blksize: number; blocks: number; atimeMs: number; mtimeMs: number; ctimeMs: number; birthtimeMs: number; atime: Date; mtime: Date; ctime: Date; birthtime: Date; isFile: boolean; isDirectory: boolean; isSymbolicLink: boolean; isFIFO: boolean; isSocket: boolean; isBlockDevice: boolean; isCharacterDevice: boolean; path: string }`
- 语义:返回文件属性对象。

#### `strCode`

##### 类型

```ts
static strCode(str: string): number
```

##### 说明

计算字符串编码值。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `str` | `string` | 是 | 要计算的字符串。 |

##### 返回值

- 类型:`number`
- 语义:返回字符串编码值。

#### `textMatchPhrase`

##### 类型

```ts
static textMatchPhrase(text: string, query: string): boolean
```

##### 说明

判断文本是否命中查询短语。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `text` | `string` | 是 | 要匹配的文本。 |
| `query` | `string` | 是 | 查询短语。 |

##### 返回值

- 类型:`boolean`
- 语义:返回文本是否命中查询短语。

#### `allDocuments`

##### 类型

```ts
static allDocuments(): MbBook[]
```

##### 说明

获取全部文档。

##### 参数

无。

##### 返回值

- 类型:`MbBook[]`
- 语义:返回全部文档数组。

#### `allDocumentIds`

##### 类型

```ts
static allDocumentIds(): string[]
```

##### 说明

获取全部文档id。

##### 参数

无。

##### 返回值

- 类型:`string[]`
- 语义:返回全部文档id数组。

#### `getNoteFileById`

##### 类型

```ts
static getNoteFileById(noteId: string): { fileExists: false } | { name: string; path: string; md5: string; fileExists: true; pageCount: number }
```

##### 说明

按卡片id获取关联文件信息。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `noteId` | `string` | 是 | 卡片ID。 |

##### 返回值

- 类型:`{ fileExists: false } | { name: string; path: string; md5: string; fileExists: true; pageCount: number }`
- 语义:返回卡片关联文件信息。

#### `isNSNull`

##### 类型

```ts
static isNSNull(obj: object): boolean
```

##### 说明

判断对象是否为NSNull。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `obj` | `object` | 是 | 要判断的对象。 |

##### 返回值

- 类型:`boolean`
- 语义:返回对象是否为NSNull。

#### `createFolder`

##### 类型

```ts
static createFolder(path: string): void
```

##### 说明

创建目录。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 是 | 目录路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `createFolderDev`

##### 类型

```ts
static createFolderDev(path: string): void
```

##### 说明

在开发场景创建目录。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 是 | 目录路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `writeDataToFile`

##### 类型

```ts
static writeDataToFile(data: NSData, path: string): boolean
```

##### 说明

把数据写入文件。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `data` | `NSData` | 是 | 要写入的数据。 |
| `path` | `string` | 是 | 文件路径。 |

##### 返回值

- 类型:`boolean`
- 语义:写入成功返回`true`，失败返回`false`。

#### `getFileFold`

##### 类型

```ts
static getFileFold(path: string): string
```

##### 说明

获取文件所在目录。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 是 | 文件路径。 |

##### 返回值

- 类型:`string`
- 语义:返回文件所在目录。

#### `getFileFolder`

##### 类型

```ts
static getFileFolder(path: string): string
```

##### 说明

获取文件所在目录。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 是 | 文件路径。 |

##### 返回值

- 类型:`string`
- 语义:返回文件所在目录。

#### `copyFile`

##### 类型

```ts
static copyFile(sourcePath: string, targetPath: string): void
```

##### 说明

复制文件。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `sourcePath` | `string` | 是 | 源文件路径。 |
| `targetPath` | `string` | 是 | 目标文件路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `moveFile`

##### 类型

```ts
static moveFile(sourcePath: string, targetPath: string): void
```

##### 说明

移动文件。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `sourcePath` | `string` | 是 | 源文件路径。 |
| `targetPath` | `string` | 是 | 目标文件路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `moveFileToCacheFolder`

##### 类型

```ts
static moveFileToCacheFolder(path: string): void
```

##### 说明

把文件移动到缓存目录。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 是 | 文件路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `moveFolderToCacheFolder`

##### 类型

```ts
static moveFolderToCacheFolder(path: string): void
```

##### 说明

把目录移动到缓存目录。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 是 | 目录路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `moveToCacheFolder`

##### 类型

```ts
static moveToCacheFolder(path: string): void
```

##### 说明

把文件或目录移动到缓存目录。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 是 | 文件或目录路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `getRandomElement`

##### 类型

```ts
static getRandomElement(arr: any[]): any
```

##### 说明

从集合随机取一个元素。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `arr` | `any[]` | 是 | 集合对象。 |

##### 返回值

- 类型:`any`
- 语义:返回随机选取的元素，空数组时返回空字符串。

#### `showHUD`

##### 类型

```ts
static showHUD(message: string, duration?: number, view?: UIView): void
```

##### 说明

显示HUD提示。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `message` | `string` | 是 | 提示消息。 |
| `duration` | `number` | 否 | 显示时长，默认为2秒。 |
| `view` | `UIView` | 否 | 显示视图，默认为当前窗口。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `waitHUD`

##### 类型

```ts
static waitHUD(message: string, view?: UIView): void
```

##### 说明

显示等待HUD。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `message` | `string` | 是 | 提示消息。 |
| `view` | `UIView` | 否 | 显示视图，默认为当前窗口。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `findToc`

##### 类型

```ts
static findToc(md5: string, excludeNotebookId?: string): MNNote[]|undefined
```

##### 说明

查找文档目录卡片。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `md5` | `string` | 是 | 文档MD5。 |
| `excludeNotebookId` | `string` | 否 | 排除的笔记本ID。 |

##### 返回值

- 类型:`MNNote[]\|undefined`
- 语义:找到目录卡片时返回数组，否则返回`undefined`。

#### `getDocTocNotes`

##### 类型

```ts
static getDocTocNotes(md5?: string, notebookId?: string): MNNote[]|undefined
```

##### 说明

获取文档目录卡片列表。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `md5` | `string` | 否 | 文档MD5，默认当前文档。 |
| `notebookId` | `string` | 否 | 笔记本ID，默认当前学习集。 |

##### 返回值

- 类型:`MNNote[]\|undefined`
- 语义:返回目录卡片列表，未找到时返回`undefined`。

#### `fileTypeFromBase64URL`

##### 类型

```ts
static fileTypeFromBase64URL(content: string): string|undefined
```

##### 说明

从DataURL判断文件类型。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `content` | `string` | 是 | DataURL内容。 |

##### 返回值

- 类型:`string\|undefined`
- 语义:返回文件类型。

#### `getFileTypeFromhexHeader`

##### 类型

```ts
static getFileTypeFromhexHeader(hexHeader: string): string
```

##### 说明

从十六进制头判断文件类型。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `hexHeader` | `string` | 是 | 十六进制头信息。 |

##### 返回值

- 类型:`string`
- 语义:返回文件类型。

#### `hexHeaderFromData`

##### 类型

```ts
static hexHeaderFromData(data: NSData): string|undefined
```

##### 说明

提取数据头部十六进制。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `data` | `NSData` | 是 | 数据对象。 |

##### 返回值

- 类型:`string\|undefined`
- 语义:返回十六进制头部信息。

#### `getFileTypeFromBase64`

##### 类型

```ts
static getFileTypeFromBase64(base64: string): string
```

##### 说明

从Base64字符串判断文件类型。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `base64` | `string` | 是 | Base64字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回文件类型。

#### `getFileType`

##### 类型

```ts
static getFileType(data: NSData|string): string
```

##### 说明

从二进制数据判断文件类型。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `data` | `NSData\|string` | 是 | 二进制数据或Base64字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回文件类型。

#### `copyObject`

##### 类型

```ts
static copyObject(object: object|NSData|UIImage): void
```

##### 说明

复制对象。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `object` | `object\|NSData\|UIImage` | 是 | 要复制的对象。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `copy`

##### 类型

```ts
static copy(object: string|object|NSData|UIImage|number|boolean|undefined): void
```

##### 说明

复制文本或对象到剪贴板。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `object` | `string\|object\|NSData\|UIImage\|number\|boolean\|undefined` | 是 | 要复制的文本或对象。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `copyJSON`

##### 类型

```ts
static copyJSON(object: object): void
```

##### 说明

复制JSON字符串到剪贴板。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `object` | `object` | 是 | 要复制的对象。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `copyImage`

##### 类型

```ts
static copyImage(imageData: NSData): void
```

##### 说明

复制图片到剪贴板。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `imageData` | `NSData` | 是 | 图片数据。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `openMarginNoteURL`

##### 类型

```ts
static openMarginNoteURL(url: string): void
```

##### 说明

打开MarginNote内部URL。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | `string` | 是 | MarginNote内部URL。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `openURL`

##### 类型

```ts
static openURL(url: string|NSURL, mode?: 'auto'|'external'|'mnbrowser'): void
```

##### 说明

按模式打开URL。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | `string\|NSURL` | 是 | 要打开的URL。 |
| `mode` | `'auto'\|'external'\|'mnbrowser'` | 否 | 打开模式，默认为auto。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `canOpenURL`

##### 类型

```ts
static canOpenURL(url: string): boolean
```

##### 说明

判断URL是否可打开。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | `string` | 是 | 要检查的URL。 |

##### 返回值

- 类型:`boolean`
- 语义:返回URL是否可打开。

#### `parseTagsToTree`

##### 类型

```ts
static parseTagsToTree(tags: string[]): Array<{ name: string; path: string; children: Array<{ name: string; path: string; children: object[]; isLeaf?: boolean }>; isLeaf?: boolean }>
```

##### 说明

把标签数组转成树结构。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `tags` | `string[]` | 是 | 标签数组。 |

##### 返回值

- 类型:`Array<{ name: string; path: string; children: Array<{ name: string; path: string; children: object[]; isLeaf?: boolean }>; isLeaf?: boolean }>`
- 语义:返回标签树结构。

#### `openWith`

##### 类型

```ts
static openWith(config: { url?: string; mode?: 'openURL'|'search'; textToSearch?: string; noteId?: string; engine?: string }, addon?: 'external'|'mnbrowser'): void
```

##### 说明

调用指定插件执行openWith。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `config` | `{ url?: string; mode?: 'openURL'\|'search'; textToSearch?: string; noteId?: string; engine?: string }` | 是 | 配置对象。 |
| `addon` | `'external'\|'mnbrowser'` | 否 | 插件名称，默认`external`。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `compressImage`

##### 类型

```ts
static compressImage(imageData: string|NSData|UIImage, quality?: number): NSData|undefined
```

##### 说明

压缩图片数据。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `imageData` | `string\|NSData\|UIImage` | 是 | 图片数据。 |
| `quality` | `number` | 否 | 压缩质量，0-1之间，默认`0.1`。 |

##### 返回值

- 类型:`NSData\|undefined`
- 语义:压缩成功返回图片数据，失败返回`undefined`。

#### `parseURL`

##### 类型

```ts
static parseURL(urlString: string|NSURL|NSURLRequest): {url:string,scheme:string,host?:string,query?:string,params:Record<string,string|boolean|object>,pathComponents?:string[],isBlank:boolean,fragment?:string,port?:number}
```

##### 说明

解析URL并返回结构化信息。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `urlString` | `string\|NSURL\|NSURLRequest` | 是 | 要解析的URL。 |

##### 返回值

- 类型:`{url:string,scheme:string,host?:string,query?:string,params:Record<string,string\|boolean\|object>,pathComponents?:string[],isBlank:boolean,fragment?:string,port?:number}`
- 语义:返回解析后的URL结构信息。

#### `isNoteInReview`

##### 类型

```ts
static isNoteInReview(noteId: string): boolean
```

##### 说明

判断卡片是否在复习状态。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `noteId` | `string` | 是 | 卡片ID。 |

##### 返回值

- 类型:`boolean`
- 语义:返回卡片是否在复习状态。

#### `notebookExists`

##### 类型

```ts
static notebookExists(notebookId: string, checkNotes?: boolean): boolean
```

##### 说明

判断学习集是否存在。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `notebookId` | `string` | 是 | 学习集ID。 |
| `checkNotes` | `boolean` | 否 | 是否检查卡片，默认`false`。 |

##### 返回值

- 类型:`boolean`
- 语义:返回学习集是否存在。

#### `noteExists`

##### 类型

```ts
static noteExists(noteId: string|MNNote): boolean
```

##### 说明

判断卡片是否存在。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `noteId` | `string\|MNNote` | 是 | 卡片ID或MNNote实例。 |

##### 返回值

- 类型:`boolean`
- 语义:返回卡片是否存在。

#### `getNoteById`

##### 类型

```ts
static getNoteById(noteid: string, alert?: boolean): MbBookNote|undefined
```

##### 说明

按id获取卡片对象。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `noteid` | `string` | 是 | 卡片ID。 |
| `alert` | `boolean` | 否 | 是否显示警告，默认为false。 |

##### 返回值

- 类型:`MbBookNote\|undefined`
- 语义:返回卡片对象，不存在时返回undefined。

#### `getNoteBookById`

##### 类型

```ts
static getNoteBookById(notebookId: string): MbTopic|undefined
```

##### 说明

按id获取学习集对象。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `notebookId` | `string` | 是 | 学习集ID。 |

##### 返回值

- 类型:`MbTopic\|undefined`
- 语义:返回学习集对象，不存在时返回`undefined`。

#### `getDocById`

##### 类型

```ts
static getDocById(md5: string): MbBook|undefined
```

##### 说明

按md5获取文档对象。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `md5` | `string` | 是 | 文档MD5。 |

##### 返回值

- 类型:`MbBook\|undefined`
- 语义:返回文档对象，不存在时返回undefined。

#### `getNoteIdByURL`

##### 类型

```ts
static getNoteIdByURL(url: string): string
```

##### 说明

从卡片URL提取卡片id。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | `string` | 是 | 卡片URL。 |

##### 返回值

- 类型:`string`
- 语义:返回卡片ID。

#### `getNoteURLById`

##### 类型

```ts
static getNoteURLById(noteId: string): string
```

##### 说明

按卡片id生成卡片URL。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `noteId` | `string` | 是 | 卡片ID。 |

##### 返回值

- 类型:`string`
- 语义:返回卡片URL。

#### `getNotebookIdByURL`

##### 类型

```ts
static getNotebookIdByURL(url: string): string
```

##### 说明

从学习集URL提取学习集id。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | `string` | 是 | 学习集URL。 |

##### 返回值

- 类型:`string`
- 语义:返回学习集ID。

## 实例成员(Instance members)

MNUtil以类静态能力为主，实例成员暂无稳定对外约定。

### 异步方法

#### `getCurrentUIStatusURL`

##### 类型

```ts
static async getCurrentUIStatusURL(): Promise<string|undefined>
```

##### 说明

异步获取当前UI状态URL。

##### 参数

无。

##### 返回值

- 类型:`Promise<string|undefined>`
- 语义:返回当前UI状态URL，失败时返回undefined。

#### `setUIStatusByConfigAsync`

##### 类型

```ts
static async setUIStatusByConfigAsync(jsonObj: object): Promise<void>
```

##### 说明

异步按配置设置UI状态。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `jsonObj` | `object` | 是 | 界面状态配置对象。 |

##### 返回值

- 类型:`Promise<void>`
- 语义:无返回值。

#### `getSearchWebview`

##### 类型

```ts
static async getSearchWebview(force?: boolean): Promise<UIWebView|undefined>
```

##### 说明

异步获取搜索WebView。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `force` | `boolean` | 否 | 是否强制创建，默认为false。 |

##### 返回值

- 类型:`Promise<UIWebView|undefined>`
- 语义:返回搜索WebView实例，失败时返回undefined。

#### `openURLInResearchAsync`

##### 类型

```ts
static async openURLInResearchAsync(url: string, needEncode?: boolean): Promise<void>
```

##### 说明

异步在研究视图打开URL。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | `string` | 是 | 要打开的URL。 |
| `needEncode` | `boolean` | 否 | 是否需要编码，默认为false。 |

##### 返回值

- 类型:`Promise<void>`
- 语义:无返回值。

#### `convertImageBase64ToPdfBase64`

##### 类型

```ts
static async convertImageBase64ToPdfBase64(pngBase64: string): Promise<string|undefined>
```

##### 说明

异步把图片Base64转成PDFBase64。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `pngBase64` | `string` | 是 | 图片Base64字符串。 |

##### 返回值

- 类型:`Promise<string|undefined>`
- 语义:返回PDF Base64字符串，失败时返回undefined。

#### `convertImageDataToPdfData`

##### 类型

```ts
static async convertImageDataToPdfData(imageData: NSData): Promise<NSData|undefined>
```

##### 说明

异步把图片数据转成PDF数据。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `imageData` | `NSData` | 是 | 图片数据。 |

##### 返回值

- 类型:`Promise<NSData|undefined>`
- 语义:返回PDF数据，失败时返回undefined。

#### `runJavaScript`

##### 类型

```ts
static async runJavaScript(webview: UIWebView, script: string): Promise<object|string|number|boolean|undefined>
```

##### 说明

在WebView里执行JavaScript并返回结果。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `webview` | `UIWebView` | 是 | WebView实例。 |
| `script` | `string` | 是 | 要执行的JavaScript代码。 |

##### 返回值

- 类型:`Promise<object|string|number|boolean|undefined>`
- 语义:返回JavaScript执行结果。

#### `webviewBlur`

##### 类型

```ts
static async webviewBlur(webView: UIWebView): Promise<void>
```

##### 说明

触发WebView失焦。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `webView` | `UIWebView` | 是 | WebView实例。 |

##### 返回值

- 类型:`Promise<void>`
- 语义:无返回值。

#### `stopHUD`

##### 类型

```ts
static async stopHUD(delay?: number, view?: UIView): Promise<void>
```

##### 说明

关闭HUD。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `delay` | `number` | 否 | 延迟时间，默认为0。 |
| `view` | `UIView` | 否 | 显示视图，默认为当前窗口。 |

##### 返回值

- 类型:`Promise<void>`
- 语义:无返回值。

#### `alert`

##### 类型

```ts
static async alert(mainTitle: string, subTitle?: string): Promise<number>
```

##### 说明

弹出提示框并返回按钮索引。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `mainTitle` | `string` | 是 | 主标题。 |
| `subTitle` | `string` | 否 | 副标题。 |

##### 返回值

- 类型:`Promise<number>`
- 语义:返回按钮索引。

#### `confirm`

##### 类型

```ts
static async confirm(mainTitle: string, subTitle?: string, items?: string[]): Promise<boolean>
```

##### 说明

弹出确认框并返回布尔结果。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `mainTitle` | `string` | 是 | 主标题。 |
| `subTitle` | `string` | 否 | 副标题。 |
| `items` | `string[]` | 否 | 选项列表。 |

##### 返回值

- 类型:`Promise<boolean>`
- 语义:返回用户是否确认。

#### `userSelect`

##### 类型

```ts
static async userSelect(mainTitle: string, subTitle?: string, items: string[]): Promise<number>
```

##### 说明

弹出选项框并返回选中索引。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `mainTitle` | `string` | 是 | 主标题。 |
| `subTitle` | `string` | 否 | 副标题。 |
| `items` | `string[]` | 是 | 选项列表。 |

##### 返回值

- 类型:`Promise<number>`
- 语义:返回选中的选项索引。

#### `openMarginNoteURLAsync`

##### 类型

```ts
static async openMarginNoteURLAsync(url: string): Promise<void>
```

##### 说明

异步打开MarginNote内部URL。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | `string` | 是 | MarginNote内部URL。 |

##### 返回值

- 类型:`Promise<void>`
- 语义:无返回值。

#### `openURLAsync`

##### 类型

```ts
static async openURLAsync(url: string, mode?: string): Promise<void>
```

##### 说明

异步打开URL。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | `string` | 是 | 要打开的URL。 |
| `mode` | `string` | 否 | 打开模式。 |

##### 返回值

- 类型:`Promise<void>`
- 语义:无返回值。

#### `openURLOptionsCompletionHandler`

##### 类型

```ts
static async openURLOptionsCompletionHandler(url: string): Promise<boolean>
```

##### 说明

异步打开URL并返回是否成功。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `url` | `string` | 是 | 要打开的URL。 |

##### 返回值

- 类型:`Promise<boolean>`
- 语义:返回URL是否打开成功。

#### `openNotebook`

##### 类型

```ts
static async openNotebook(notebook: string|MNNotebook|MbTopic, needConfirm?: boolean): Promise<boolean>
```

##### 说明

异步打开学习集。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `notebook` | `string|MNNotebook|MbTopic` | 是 | 学习集ID或学习集对象。 |
| `needConfirm` | `boolean` | 否 | 是否需要确认，默认为false。 |

##### 返回值

- 类型:`Promise<boolean>`
- 语义:返回学习集是否打开成功。
