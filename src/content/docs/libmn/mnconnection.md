---
title: MNConnection
description: LibMN中的网络与请求工具集。
---

`MNConnection`是用于网络请求和资源获取的工具对象，提供构建请求、发送网络调用、处理WebDAV和下载媒体等功能。

## 类成员(Class members)

### 属性

#### `IPCache`

##### 类型

```ts
static IPCache: object|undefined
```

##### 说明

缓存最近一次`fetchIPInfo`成功结果。你希望在同一次会话里减少重复IP查询时可以直接读取它。

##### 返回值

- 类型:`object|undefined`
- 语义:有缓存时返回IP信息对象，没有缓存时返回`undefined`。

### 方法

#### `addErrorLog`

##### 类型

```ts
static addErrorLog(error: Error|string|{message?:string;detail?:string},source: string,info?: object|string): void
```

##### 说明

记录网络相关错误并写入`MNUtil.errorLog`。当你捕获到接口异常，且希望统一展示和排查时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `error` | `Error\|string\|{message?:string;detail?:string}` | 是 | 错误对象或错误文本。 |
| `source` | `string` | 是 | 错误来源标识，例如`fetchProfile`。 |
| `info` | `object\|string` | 否 | 附加上下文，建议传请求URL和参数摘要。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `genURL`

##### 类型

```ts
static genURL(url: string): NSURL
```

##### 说明

把字符串地址转换为`NSURL`对象。你要调用原生只接受`NSURL`的接口时用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `url` | `string` | 是 | 完整目标URL字符串。 |

##### 返回值

- 类型:`NSURL`
- 语义:返回可直接传给原生API的URL对象。

#### `requestWithURL`

##### 类型

```ts
static requestWithURL(url: string): NSMutableURLRequest
```

##### 说明

创建一个可继续设置方法、头和请求体的请求对象。你准备手动配置请求细节时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `url` | `string` | 是 | 请求地址。 |

##### 返回值

- 类型:`NSMutableURLRequest`
- 语义:返回可变请求对象。

#### `loadRequest`

##### 类型

```ts
static loadRequest(webview: UIWebView,url: string,desktop?: boolean): void
```

##### 说明

让`UIWebView`直接加载指定URL，并可选切换桌面或移动端UA。你要在插件内嵌网页时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `webview` | `UIWebView` | 是 | 目标网页视图。 |
| `url` | `string` | 是 | 要加载的地址。 |
| `desktop` | `boolean` | 否 | `true`使用桌面UA，`false`使用移动UA。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `setWebMode`

##### 类型

```ts
static setWebMode(webview: UIWebView,desktop?: boolean): void
```

##### 说明

只切换`webview`的User-Agent，不触发加载。你想先改UA、后续再自己控制加载时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `webview` | `UIWebView` | 是 | 目标网页视图。 |
| `desktop` | `boolean` | 否 | `true`桌面UA，`false`移动UA。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `loadFile`

##### 类型

```ts
static loadFile(webview: UIWebView,file: string,baseURL: string): void
```

##### 说明

加载本地文件并授予`baseURL`目录读取权限。你要展示本地HTML并允许引用同目录资源时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `webview` | `UIWebView` | 是 | 目标网页视图。 |
| `file` | `string` | 是 | 文件绝对路径。 |
| `baseURL` | `string` | 是 | 允许读取的目录绝对路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `loadPDF`

##### 类型

```ts
static loadPDF(webview: UIWebView,path: string): void
```

##### 说明

把本地PDF文件读成数据并加载到`webview`。你需要在面板内直接预览PDF时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `webview` | `UIWebView` | 是 | 目标网页视图。 |
| `path` | `string` | 是 | PDF绝对路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `loadFileAtFolder`

##### 类型

```ts
static loadFileAtFolder(webview: UIWebView,file: string,folder: string): void
```

##### 说明

在给定目录下按相对路径加载文件。你只有目录和相对文件名时使用这个方法更方便。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `webview` | `UIWebView` | 是 | 目标网页视图。 |
| `file` | `string` | 是 | 相对文件路径。 |
| `folder` | `string` | 是 | 目录绝对路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `loadHTML`

##### 类型

```ts
static loadHTML(webview: UIWebView,html: string,baseURL: string): void
```

##### 说明

直接加载HTML字符串，并用`baseURL`解析相对资源地址。你在运行时拼页面内容时会用到它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `webview` | `UIWebView` | 是 | 目标网页视图。 |
| `html` | `string` | 是 | HTML文本。 |
| `baseURL` | `string` | 是 | 资源基准地址。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `initRequest`

##### 类型

```ts
static initRequest(url: string,options: {
  method?: string
  timeout?: number
  headers?: Record<string, string>
  search?: Record<string, string|number|boolean>
  body?: string
  form?: Record<string, string|number|boolean>
  json?: object
}): NSMutableURLRequest
```

##### 说明

按统一规则创建HTTP请求。你不想每次手动写请求头、超时和body编码时，直接使用这个方法。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `url` | `string` | 是 | 请求地址。 |
| `options` | `object` | 是 | 请求配置。支持`method`、`headers`、`search`、`body`、`form`、`json`。 |

##### 返回值

- 类型:`NSMutableURLRequest`
- 语义:返回已写入方法、头和请求体的请求对象。

#### `sendRequest`

##### 类型

```ts
static async sendRequest(request: NSMutableURLRequest): Promise<object|NSData>
```

##### 说明

异步发送请求并返回基础结果。你只需要拿到JSON或原始数据时可以用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `request` | `NSMutableURLRequest` | 是 | 已配置好的请求对象。 |

##### 返回值

- 类型:`Promise<object|NSData>`
- 语义:优先返回JSON对象，非JSON时返回`NSData`，异常时返回带`error`字段对象。

#### `sendRequestDev`

##### 类型

```ts
static async sendRequestDev(request: NSMutableURLRequest): Promise<Response>
```

##### 说明

发送请求并返回`Response`包装对象。你希望用`ok`、`status`、`json()`这类接口时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `request` | `NSMutableURLRequest` | 是 | 已配置好的请求对象。 |

##### 返回值

- 类型:`Promise<Response>`
- 语义:返回LibMN的`Response`实例。

#### `sendRequestWithDelegate`

##### 类型

```ts
static sendRequestWithDelegate(request: NSMutableURLRequest,delegate: NSObject): NSURLConnection
```

##### 说明

以delegate模式发送请求。你需要流式或分段回调时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `request` | `NSMutableURLRequest` | 是 | 已配置好的请求对象。 |
| `delegate` | `NSObject` | 是 | 处理连接回调的代理对象。 |

##### 返回值

- 类型:`NSURLConnection`
- 语义:返回连接实例。

#### `fetch`

##### 类型

```ts
static async fetch(url: string,options?: object): Promise<object|NSData|undefined>
```

##### 说明

`initRequest+sendRequest`的一步封装。你只想快速发请求并拿结果时用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `url` | `string` | 是 | 请求地址。 |
| `options` | `object` | 否 | 与`initRequest`一致的请求配置。 |

##### 返回值

- 类型:`Promise<object|NSData|undefined>`
- 语义:成功返回对象或数据，异常时返回`undefined`。

#### `fetchDev`

##### 类型

```ts
static async fetchDev(url: string,options?: object): Promise<Response|undefined>
```

##### 说明

`initRequest+sendRequestDev`的一步封装。你要统一用`Response`对象处理网络响应时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `url` | `string` | 是 | 请求地址。 |
| `options` | `object` | 否 | 与`initRequest`一致的请求配置。 |

##### 返回值

- 类型:`Promise<Response|undefined>`
- 语义:成功返回`Response`，异常时返回`undefined`。

#### `fetchIPInfo`

##### 类型

```ts
static async fetchIPInfo(cache?: boolean): Promise<object|undefined>
```

##### 说明

查询当前设备公网IP与地域信息。你要做地区分流或网络环境判断时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `cache` | `boolean` | 否 | 默认`true`。开启后优先返回`IPCache`。 |

##### 返回值

- 类型:`Promise<object|undefined>`
- 语义:成功返回IP信息对象，失败返回`undefined`。

#### `isInChina`

##### 类型

```ts
static async isInChina(cache?: boolean): Promise<boolean>
```

##### 说明

判断当前IP是否位于中国。你需要选择国内外接口或模型服务时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `cache` | `boolean` | 否 | 是否复用已缓存IP结果。 |

##### 返回值

- 类型:`Promise<boolean>`
- 语义:位于中国返回`true`，否则返回`false`。

#### `btoa`

##### 类型

```ts
static btoa(str: string): string
```

##### 说明

把字符串编码成Base64文本。你需要生成Basic认证头或传输编码时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `str` | `string` | 是 | 待编码文本。 |

##### 返回值

- 类型:`string`
- 语义:Base64编码结果。

#### `readWebDAVFile`

##### 类型

```ts
static async readWebDAVFile(url: string,username: string,password: string): Promise<object|NSData|undefined>
```

##### 说明

通过WebDAV读取文件内容。你需要用账号密码访问远端文件时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `url` | `string` | 是 | WebDAV文件URL。 |
| `username` | `string` | 是 | 用户名。 |
| `password` | `string` | 是 | 密码。 |

##### 返回值

- 类型:`Promise<object|NSData|undefined>`
- 语义:成功返回JSON或原始数据，失败返回错误对象或`undefined`。

#### `readWebDAVFileWithDelegate`

##### 类型

```ts
static readWebDAVFileWithDelegate(url: string,username: string,password: string): NSMutableURLRequest
```

##### 说明

生成带WebDAV认证头的请求对象。你要交给delegate连接流程处理时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `url` | `string` | 是 | WebDAV文件URL。 |
| `username` | `string` | 是 | 用户名。 |
| `password` | `string` | 是 | 密码。 |

##### 返回值

- 类型:`NSMutableURLRequest`
- 语义:返回已配置认证头的GET请求。

#### `requestOfWebDAV`

##### 类型

```ts
static requestOfWebDAV(config: {url: string;authorization?: string;username?: string;password?: string}): NSMutableURLRequest
```

##### 说明

按配置构造WebDAV请求。你已有Bearer或Basic认证串时可直接传`authorization`，否则传用户名密码。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `config` | `object` | 是 | 需包含`url`，并提供`authorization`或`username/password`。 |

##### 返回值

- 类型:`NSMutableURLRequest`
- 语义:返回可直接发送的WebDAV请求。

#### `readJSONFromWebDAV`

##### 类型

```ts
static async readJSONFromWebDAV(config: {url: string;authorization?: string;username?: string;password?: string}): Promise<object|Response|undefined>
```

##### 说明

从WebDAV地址读取并解析JSON。你希望直接得到对象而不是手工判断响应时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `config` | `object` | 是 | 与`requestOfWebDAV`一致。 |

##### 返回值

- 类型:`Promise<object|Response|undefined>`
- 语义:解析成功返回对象；返回非JSON时给`Response`；失败返回`undefined`。

#### `readJSONFromURL`

##### 类型

```ts
static async readJSONFromURL(url: string,headers?: Record<string, string>): Promise<object|Response|undefined>
```

##### 说明

从普通URL读取并解析JSON。你访问REST接口且只关心JSON结果时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `url` | `string` | 是 | 目标地址。 |
| `headers` | `Record<string,string>` | 否 | 额外请求头。 |

##### 返回值

- 类型:`Promise<object|Response|undefined>`
- 语义:解析成功返回对象；返回非JSON时给`Response`；失败返回`undefined`。

#### `uploadWebDAVFile`

##### 类型

```ts
static async uploadWebDAVFile(url: string,username: string,password: string,fileContent: string|NSData): Promise<object|NSData|undefined>
```

##### 说明

上传内容到WebDAV目标地址。你要同步文本或二进制附件时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `url` | `string` | 是 | WebDAV目标URL。 |
| `username` | `string` | 是 | 用户名。 |
| `password` | `string` | 是 | 密码。 |
| `fileContent` | `string\|NSData` | 是 | 上传内容。 |

##### 返回值

- 类型:`Promise<object|NSData|undefined>`
- 语义:返回上传响应内容。

#### `getOnlineImage`

##### 类型

```ts
static getOnlineImage(url: string,scale?: number): UIImage|undefined
```

##### 说明

下载网络图片并直接转成`UIImage`。你要把远端图片显示到按钮或视图上时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `url` | `string` | 是 | 图片地址。 |
| `scale` | `number` | 否 | 图像缩放倍率，默认`3`。 |

##### 返回值

- 类型:`UIImage|undefined`
- 语义:下载成功返回图片对象，失败返回`undefined`。

#### `getImageFromNote`

##### 类型

```ts
static getImageFromNote(note: MNNote|MbBookNote,checkTextFirst?: boolean): NSData|undefined
```

##### 说明

从卡片正文或评论里提取首个可用图片数据。你需要把卡片图片发往OCR或上传接口时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `note` | `MNNote\|MbBookNote` | 是 | 目标卡片。 |
| `checkTextFirst` | `boolean` | 否 | 默认`true`。开启时会跳过`textFirst`的图片摘录。 |

##### 返回值

- 类型:`NSData|undefined`
- 语义:找到图片时返回二进制数据，否则返回`undefined`。

#### `initRequestForChatGPT`

##### 类型

```ts
static initRequestForChatGPT(history: object[],apikey: string,url: string,model: string,temperature: number,funcIndices?: number[]): NSMutableURLRequest|undefined
```

##### 说明

构造流式聊天请求。你对接SSE风格聊天接口时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `history` | `object[]` | 是 | 消息数组。 |
| `apikey` | `string` | 是 | 接口密钥。 |
| `url` | `string` | 是 | 聊天接口地址。 |
| `model` | `string` | 是 | 模型名。 |
| `temperature` | `number` | 是 | 采样温度。 |
| `funcIndices` | `number[]` | 否 | 预留工具索引参数。 |

##### 返回值

- 类型:`NSMutableURLRequest|undefined`
- 语义:密钥有效时返回请求对象，否则返回`undefined`。

#### `initRequestForChatGPTWithoutStream`

##### 类型

```ts
static initRequestForChatGPTWithoutStream(history: object[],apikey: string,url: string,model: string,temperature: number,funcIndices?: number[]): NSMutableURLRequest|undefined
```

##### 说明

构造非流式聊天请求。你只需要一次性拿完整回复时使用它。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `history` | `object[]` | 是 | 消息数组。 |
| `apikey` | `string` | 是 | 接口密钥。 |
| `url` | `string` | 是 | 聊天接口地址。 |
| `model` | `string` | 是 | 模型名。 |
| `temperature` | `number` | 是 | 采样温度。 |
| `funcIndices` | `number[]` | 否 | 预留工具索引参数。 |

##### 返回值

- 类型:`NSMutableURLRequest|undefined`
- 语义:密钥有效时返回请求对象，否则返回`undefined`。
