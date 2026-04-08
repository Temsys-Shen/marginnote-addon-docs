---
title: MNWebview
description: LibMN中的MNWebview对象API文档。
---

`MNWebview`是用于管理网页容器的对象，提供网页加载、脚本执行、界面属性控制和通信等功能，创建和管理网页视图。

## 构造函数

```ts
new MNWebview(frame: CGRect)
```

构造一个新的MNWebview实例。

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `frame` | `CGRect` | 是 | 初始位置与尺寸。 |

## 类成员(Class members)

### 属性

无。

### 方法

#### `loadFile`

##### 类型

```ts
static loadFile(webview: UIWebView,file: string,baseURL: string): void
```

##### 说明

把本地文件加载到指定webview并设置可读目录范围。file不在baseURL授权目录内时资源引用会失败。

##### 参数

| 参数名    | 类型        | 必填 | 说明                               |
|:----------|:------------|:-----|:-----------------------------------|
| `webview` | `UIWebView` | 是   | 目标网页视图。                     |
| `file`    | `string`    | 是   | 本地文件绝对路径。                 |
| `baseURL` | `string`    | 是   | 本地目录绝对路径，作为读权限范围。 |

##### 返回值

- 类型:`void`
- 语义:提交文件加载请求后立即返回，加载结果通过webview回调观察。

#### `loadHTML`

##### 类型

```ts
static loadHTML(webview: UIWebView,html: string,baseURL: string): void
```

##### 说明

把HTML字符串写入指定webview并按baseURL解析相对资源。baseURL无效时页面可显示但相对资源可能无法加载。

##### 参数

| 参数名    | 类型        | 必填 | 说明                                      |
|:----------|:------------|:-----|:------------------------------------------|
| `webview` | `UIWebView` | 是   | 目标网页视图。                            |
| `html`    | `string`    | 是   | 要渲染的HTML内容。                        |
| `baseURL` | `string`    | 是   | 相对路径解析基准，最终会被转换为`NSURL`。 |

##### 返回值

- 类型:`void`
- 语义:提交HTML加载请求后立即返回，不同步等待页面资源加载完成。

#### `loadPDF`

##### 类型

```ts
static loadPDF(webview: UIWebView,path: string): void
```

##### 说明

读取本地PDF并在指定webview中渲染。path不存在或不可读时页面不会得到有效内容。

##### 参数

| 参数名    | 类型        | 必填 | 说明              |
|:----------|:------------|:-----|:------------------|
| `webview` | `UIWebView` | 是   | 目标网页视图。    |
| `path`    | `string`    | 是   | 本地PDF绝对路径。 |

##### 返回值

- 类型:`void`
- 语义:提交PDF加载请求后立即返回，渲染失败不会通过返回值体现。

#### `loadRequest`

##### 类型

```ts
static loadRequest(webview: UIWebView,url: string,desktop?: boolean): void
```

##### 说明

加载网络地址并可选切换UA。`desktop`为`true`时使用桌面Safari
UA，`false`时使用iPhone UA，不传时保持当前UA。
##### 参数

| 参数名    | 类型        | 必填 | 说明               |
|:----------|:------------|:-----|:-------------------|
| `webview` | `UIWebView` | 是   | 目标网页视图。     |
| `url`     | `string`    | 是   | 要访问的URL。      |
| `desktop` | `boolean`   | 否   | 是否切换到桌面UA。 |

##### 返回值

- 类型:`void`
- 语义:提交网络请求后立即返回，页面最终状态由webview加载回调决定。

#### `isNSNull`

##### 类型

```ts
static isNSNull(obj: object): boolean
```

##### 说明

判断脚本返回值是否是`NSNull`。这个方法主要给`runJavaScript`做结果归一化。
##### 参数

| 参数名 | 类型      | 必填 | 说明         |
|:-------|:----------|:-----|:-------------|
| `obj`  | `object` | 是   | 待判断对象。 |

##### 返回值

- 类型:`boolean`
- 语义:是`NSNull`实例返回`true`，否则返回`false`。

#### `setWebMode`

##### 类型

```ts
static setWebMode(webview: UIWebView,desktop?: boolean): void
```

##### 说明

只切换`customUserAgent`，不触发页面跳转。通常配合`loadRequest`在下次请求前设置访问模式。
##### 参数

| 参数名    | 类型        | 必填 | 说明                                  |
|:----------|:------------|:-----|:--------------------------------------|
| `webview` | `UIWebView` | 是   | 目标网页视图。                        |
| `desktop` | `boolean`   | 否   | `true`设为桌面UA，`false`设为移动UA。 |

##### 返回值

- 类型:`void`
- 语义:UA字段写入后立即返回，不会自动触发页面重载。

## 实例成员(Instance members)

### 属性

| 字段名 | 类型 | 说明 |
|:-------|:-----|:-----|
| `backgroundColor` | `string\|UIColor` | 设置网页背景色。传`string`时会走`MNUtil.hexColor`转换，传`UIColor`时直接写入。 |
| `layer` | `CALayer` | 读取网页视图的图层。 |
| `borderColor` | `string\|UIColor` | 设置边框颜色。行为与`backgroundColor`一致，字符串会先转换为颜色对象。 |
| `borderWidth` | `number` | 设置或读取边框宽度，单位与`UIWebView.layer`一致。 |
| `cornerRadius` | `number` | 设置或读取圆角半径，直接写入`webview.layer.cornerRadius`。 |
| `masksToBounds` | `boolean` | 设置或读取子内容是否按圆角边界裁切。 |
| `hidden` | `boolean` | 设置或读取视图显示状态。 |
| `scalesPageToFit` | `boolean` | 控制网页是否按视图自动缩放。 |
| `autoresizingMask` | `number` | 设置自动布局掩码，直接透传给`webview.autoresizingMask`。 |
| `frame` | `CGRect` | 设置或读取整体位置与尺寸。 |
| `height` | `number` | 设置或读取高度。 |
| `width` | `number` | 设置或读取宽度。 |
| `size` | `number` | 设置或读取尺寸。 |
| `x` | `number` | 设置或读取x坐标。 |
| `y` | `number` | 设置或读取y坐标。 |
| `delegate` | `UIWebViewDelegate` | 设置或读取网页代理对象，拦截加载回调事件。 |
| `webMode` | `boolean` | 设置或读取访问模式。`true`偏桌面UA，`false`偏移动UA。 |
| `desktop` | `boolean` | `webMode`的别名，设置或读取访问模式。 |
| `customUserAgent` | `string` | 设置或读取用户代理字符串。 |
| `UA` | `string` | `customUserAgent`的别名，设置或读取用户代理字符串。 |
| `currentURL` | `string` | 读取当前页面URL字符串。 |
| `window` | `UIWindow\|undefined` | 读取`UIWebView`所在窗口。 |
| `scrollView` | `UIScrollView` | 读取网页视图的滚动视图。 |
| `contentOffset` | `{x:number,y:number}` | 设置或读取滚动偏移量。 |
| `canGoForward` | `boolean` | 判断当前是否可前进到下一条历史记录。 |

### 方法

#### `endEditing`

##### 类型

```ts
endEditing(): void
```

##### 说明

结束当前webview中的编辑状态并收起输入焦点。该方法不改变页面内容，仅影响输入交互状态。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:结束编辑并收起键盘后立即返回，不改变页面DOM内容。

#### `addSubview`

##### 类型

```ts
addSubview(view: UIView): void
```

##### 说明

向网页视图追加子视图，比如覆盖按钮或浮层。
##### 参数

| 参数名 | 类型     | 必填 | 说明             |
|:-------|:---------|:-----|:-----------------|
| `view` | `UIView` | 是   | 要挂载的子视图。 |

##### 返回值

- 类型:`void`
- 语义:子视图加入当前webview后立即返回，不返回层级位置。

#### `removeFromSuperview`

##### 类型

```ts
removeFromSuperview(): void
```

##### 说明

把当前webview从父视图树中移除。移除后视图仍可复用，但不会继续显示在原界面。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:webview从父视图移除后立即返回，可后续再次挂载复用。

#### `loadRequest`

##### 类型

```ts
loadRequest(request: NSURLRequest): void
```

##### 说明

按NSURLRequest对象发起页面加载。请求头、方法和body完全以传入request为准。

##### 参数

| 参数名    | 类型           | 必填 | 说明                   |
|:----------|:---------------|:-----|:-----------------------|
| `request` | `NSURLRequest` | 是   | 预先构造好的请求对象。 |

##### 返回值

- 类型:`void`
- 语义:请求提交后立即返回，响应结果通过webview加载流程处理。

#### `loadURL`

##### 类型

```ts
loadURL(url: string,desktop: boolean): void
```

##### 说明

按URL字符串发起加载，并通过`desktop`决定是否同步切换UA。
##### 参数

| 参数名    | 类型      | 必填 | 说明                          |
|:----------|:----------|:-----|:------------------------------|
| `url`     | `string`  | 是   | 要访问的URL。                 |
| `desktop` | `boolean` | 是   | `true`桌面UA，`false`移动UA。 |

##### 返回值

- 类型:`void`
- 语义:URL加载触发后立即返回，不同步等待请求完成。

#### `loadPDF`

##### 类型

```ts
loadPDF(path: string): void
```

##### 说明

在当前实例上加载本地PDF文件。path无效时不会得到可见PDF页面。

##### 参数

| 参数名 | 类型     | 必填 | 说明              |
|:-------|:---------|:-----|:------------------|
| `path` | `string` | 是   | 本地PDF绝对路径。 |

##### 返回值

- 类型:`void`
- 语义:PDF加载触发后立即返回，错误状态需通过页面表现或回调判断。

#### `loadFile`

##### 类型

```ts
loadFile(file: string,baseURL: string): void
```

##### 说明

加载本地HTML文件并声明可读目录。此实例方法和静态`loadFile`行为一致。
##### 参数

| 参数名    | 类型     | 必填 | 说明               |
|:----------|:---------|:-----|:-------------------|
| `file`    | `string` | 是   | 本地文件绝对路径。 |
| `baseURL` | `string` | 是   | 本地可读目录路径。 |

##### 返回值

- 类型:`void`
- 语义:本地文件加载触发后立即返回，资源解析结果依赖baseURL权限范围。

#### `goBack`

##### 类型

```ts
goBack(): void
```

##### 说明

导航到历史上一页。
##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:触发回退导航后立即返回，无法回退时页面状态保持不变。

#### `goForward`

##### 类型

```ts
goForward(): void
```

##### 说明

导航到历史下一页。
##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:触发前进导航后立即返回，无法前进时页面状态保持不变。

#### `reload`

##### 类型

```ts
reload(): void
```

##### 说明

刷新当前页面。
##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:触发当前页面重新加载后立即返回。

#### `stopLoading`

##### 类型

```ts
stopLoading(): void
```

##### 说明

中断当前加载流程。
##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:当前加载流程被请求中断后立即返回。

#### `evaluateJavaScript`

##### 类型

```ts
evaluateJavaScript(script: string): void
```

##### 说明

向页面注入脚本并执行。这个实例方法不返回Promise，也不暴露回调结果。
##### 参数

| 参数名   | 类型     | 必填 | 说明                     |
|:---------|:---------|:-----|:-------------------------|
| `script` | `string` | 是   | 要执行的JavaScript代码。 |

##### 返回值

- 类型:`void`
- 语义:脚本提交执行后立即返回，不直接暴露脚本返回值。

#### `runJavaScript`

##### 类型

```ts
runJavaScript(script: string): Promise<object|string|number|boolean|undefined>
static runJavaScript(webview: UIWebView,script: string): Promise<object|string|number|boolean|undefined>
```

##### 说明

- `result`为`NSNull`时转换成`undefined`。
- `webview`为空时直接`resolve(undefined)`。
- 执行异常时记录`MNUtil.addErrorLog(error,'MNWebview.runJavaScript')`并`resolve(undefined)`。
##### 参数

| 参数名    | 类型        | 必填 | 说明                     |
|:----------|:------------|:-----|:-------------------------|
| `webview` | `UIWebView` | 否   | 仅静态方法需要。         |
| `script`  | `string`    | 是   | 要执行的JavaScript代码。 |

##### 返回值

- 类型:`Promise<object|string|number|boolean|undefined>`
- 语义:Promise resolve为脚本结果；脚本返回`NSNull`或执行失败时为`undefined`。

#### `canGoBack`

##### 类型

```ts
canGoBack(): boolean
```

##### 说明

判断当前是否可回退到上一条历史记录。
##### 参数

无。

##### 返回值

- 类型:`boolean`
- 语义:存在上一条历史记录时返回`true`，否则返回`false`。

#### `loadHTML`

##### 类型

```ts
loadHTML(html: string,baseURL: string): void
```

##### 说明

在当前实例上加载HTML字符串并设置资源基准地址。baseURL只影响相对路径解析，不会自动下载远程依赖。

##### 参数

| 参数名    | 类型     | 必填 | 说明                   |
|:----------|:---------|:-----|:-----------------------|
| `html`    | `string` | 是   | 要渲染的HTML内容。     |
| `baseURL` | `string` | 是   | 相对资源解析基准地址。 |

##### 返回值

- 类型:`void`
- 语义:HTML加载触发后立即返回，实际渲染结果需通过页面状态确认。

#### `blur`

##### 类型

```ts
async blur(): Promise<void>
```

##### 说明

使网页视图失去焦点。

##### 返回值

- 类型:`Promise<void>`
- 语义:Promise完成表示失焦脚本已提交，不返回额外数据。

#### `getCurrentWebInfo`

##### 类型

```ts
async getCurrentWebInfo(): Promise<{url: string,title: string,hasVideo: boolean,videoTime?: number,desktop?: boolean,urlConfig?: object}|undefined>
```

##### 说明

获取当前网页信息。

##### 返回值

- 类型:`Promise<{url: string,title: string,hasVideo: boolean,videoTime?: number,desktop?: boolean,urlConfig?: object}|undefined>`
- 语义:成功返回当前网页信息对象，无法获取时返回`undefined`。

#### `getSelectedTextInWebview`

##### 类型

```ts
async getSelectedTextInWebview(): Promise<string|undefined>
```

##### 说明

获取网页中选中的文本。

##### 返回值

- 类型:`Promise<string|undefined>`
- 语义:有选区时返回选中文本，无选区或读取失败返回`undefined`。

#### `getTextInWebview`

##### 类型

```ts
async getTextInWebview(): Promise<string|undefined>
```

##### 说明

获取网页中的所有文本。

##### 返回值

- 类型:`Promise<string|undefined>`
- 语义:成功返回页面文本内容，读取失败时返回`undefined`。

#### `takeSnapshotWithWidth`

##### 类型

```ts
async takeSnapshotWithWidth(width: number): Promise<NSData>
```

##### 说明

按指定宽度拍摄网页快照。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `width` | `number` | 是 | 快照宽度。 |

##### 返回值

- 类型:`Promise<NSData>`
- 语义:返回指定宽度下生成的网页快照`NSData`数据。

#### `screenshot`

##### 类型

```ts
async screenshot(width: number): Promise<NSData>
```

##### 说明

拍摄网页截图。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `width` | `number` | 是 | 截图宽度。 |

##### 返回值

- 类型:`Promise<NSData>`
- 语义:返回截图`NSData`数据，宽度由入参控制。

#### `runJavaScript`

##### 类型

```ts
static async runJavaScript(webview: UIWebView,script: string): Promise<object|string|number|boolean|undefined>
```

##### 说明

在指定网页视图中执行JavaScript代码。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `webview` | `UIWebView` | 是 | 网页视图对象。 |
| `script` | `string` | 是 | 要执行的JavaScript代码。 |

##### 返回值

- 类型:`Promise<object|string|number|boolean|undefined>`
- 语义:Promise resolve为脚本结果；webview为空或执行失败时返回`undefined`。

#### `blur`

##### 类型

```ts
static async blur(webview: UIWebView): Promise<void>
```

##### 说明

使指定网页视图失去焦点。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `webview` | `UIWebView` | 是 | 网页视图对象。 |

##### 返回值

- 类型:`Promise<void>`
- 语义:Promise完成表示失焦操作已提交，不返回额外数据。
