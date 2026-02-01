---
title: UIWebView
description: 在插件中嵌入网页或本地 HTML，支持加载 URL、执行 JS 与 delegate 回调。
---

UIWebView 用于在插件中嵌入网页或本地 HTML 页面，继承自 [UIView](/reference/uikit/uiview/)。可通过设置 `delegate` 接收加载开始/完成/失败与请求拦截（如自定义 URL Scheme 实现 WebView 内 JS 与插件 JS 的双向通信）。参见 [Cookbook：WebView 内 JS 与插件 JS 双向通信](/guides/cookbook/webview-bidirectional-js/)。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `delegate` | `id` | 实现 UIWebViewDelegate 的对象，通常为承载 WebView 的 ViewController（self）。 |
| `scrollView` | `UIScrollView` | 只读，内嵌滚动视图。 |
| `request` | `NSURLRequest` | 只读，当前请求。 |
| `loading` | `boolean` | 只读，是否正在加载（getter 为 isLoading）。 |
| `canGoBack` | `boolean` | 只读，是否可后退。 |
| `canGoForward` | `boolean` | 只读，是否可前进。 |
| `scalesPageToFit` | `boolean` | 是否按比例缩放以适应视图。 |
| `dataDetectorTypes` | `UIDataDetectorTypes` | 检测的数据类型（如电话、链接）。 |
| `customUserAgent` | `string` | 自定义 User-Agent。 |

### 加载方法

### `loadRequest`

加载 URL 请求（如远程网页）。

```javascript
loadRequest(request: NSURLRequest): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `NSURLRequest` | URL 请求对象。 |

### `loadHTMLString`

加载 HTML 字符串。

```javascript
loadHTMLString(string: string, baseURL: NSURL | null): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `string` | `string` | HTML 内容字符串。 |
| `baseURL` | `NSURL \| null` | 基础 URL（用于解析相对路径）。 |

**Note:** 在 JS 中实际调用时方法名为 **loadHTMLStringBaseURL(string, baseURL)**，与 Objective-C 的 `loadHTMLString:baseURL:` 对应；若环境不同则可能导出为 `loadHTMLString`。与 [原生 UI：使用 WebView](/guides/native-ui/#使用-webview) 中的表述一致。

### `loadData`

加载二进制数据。

```javascript
loadData(data: NSData, MIMEType: string, textEncodingName: string, baseURL: NSURL): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `NSData` | 数据内容。 |
| `MIMEType` | `string` | MIME 类型（如 "text/html"）。 |
| `textEncodingName` | `string` | 文本编码名称（如 "UTF-8"）。 |
| `baseURL` | `NSURL` | 基础 URL。 |

### `loadFileURL`

加载本地文件 URL。

```javascript
loadFileURL(URL: NSURL, allowingReadAccessToURL: NSURL): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `URL` | `NSURL` | 文件 URL。 |
| `allowingReadAccessToURL` | `NSURL` | 允许读取的访问路径（通常也是文件 URL 或其父目录）。 |

### `reload`

重新加载。

```javascript
reload(): void
```

### `stopLoading`

停止加载。

```javascript
stopLoading(): void
```

### `goBack`

后退。

```javascript
goBack(): void
```

### `goForward`

前进。

```javascript
goForward(): void
```

### 脚本与截图

### `evaluateJavaScript`

在页面上下文中执行 JS；执行完成后调用 completionHandler（可选）。用于**插件 → WebView 内 JS** 的通信。

```javascript
evaluateJavaScript(javaScriptString: string, completionHandler: (result: any) => void | null): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `javaScriptString` | `string` | 要执行的 JavaScript 代码字符串。 |
| `completionHandler` | `(result: any) => void \| null` | 执行完成后的回调，`result` 为执行结果。 |

### `takeSnapshotWithWidth`

按指定宽度截取快照，完成后回调。

```javascript
takeSnapshotWithWidth(width: number, completionHandler: (image: UIImage) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `width` | `number` | 快照宽度。 |
| `completionHandler` | `(image: UIImage) => void` | 完成回调，接收生成的图片。 |

## Delegate（UIWebViewDelegate）

以下方法需在 `webView.delegate` 所指对象的**实例成员**中实现（例如承载 WebView 的 ViewController 在 `JSB.defineClass` 的第二个参数里定义）。

### `webViewDidStartLoad`

开始加载时调用。

```javascript
webViewDidStartLoad(webView: UIWebView): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `webView` | `UIWebView` | 发起回调的 WebView。 |

### `webViewDidFinishLoad`

加载完成时调用。

```javascript
webViewDidFinishLoad(webView: UIWebView): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `webView` | `UIWebView` | 发起回调的 WebView。 |

### `webViewDidFailLoadWithError`

加载失败时调用。

```javascript
webViewDidFailLoadWithError(webView: UIWebView, error: NSError): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `webView` | `UIWebView` | 发起回调的 WebView。 |
| `error` | `NSError` | 错误信息。 |

### `webViewShouldStartLoadWithRequestNavigationType`

是否允许加载该请求。

```javascript
webViewShouldStartLoadWithRequestNavigationType(webView: UIWebView, request: NSURLRequest, type: number): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `webView` | `UIWebView` | 发起回调的 WebView。 |
| `request` | `NSURLRequest` | 即将加载的请求。 |
| `type` | `number` | 导航类型（如链接点击、表单提交等）。 |

**Return Value:**

- `boolean`: 返回 `true` 允许加载，`false` 阻止加载。

**Usage:** 可在此拦截自定义 URL Scheme（如 `marginnote://...`），解析后执行插件逻辑并 `return false`，实现 **WebView 内 JS → 插件** 的通信。

## 类成员 (Class members)

当前运行时未额外暴露 `UIWebView` 的类成员。

## 相关

- [原生 UI：使用 WebView](/guides/native-ui/#使用-webview)、[Cookbook：WebView 内 JS 与插件 JS 双向通信](/guides/cookbook/webview-bidirectional-js/)
- [UIView](/reference/uikit/uiview/)、[UIViewController](/reference/uikit/uiview-controller/)
