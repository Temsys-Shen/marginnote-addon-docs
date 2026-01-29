---
title: UIWebView
description: 在插件中嵌入网页或本地 HTML，支持加载 URL、执行 JS 与 delegate 回调。
---

UIWebView 用于在插件中嵌入网页或本地 HTML 页面，继承自 [UIView](/reference/uikit/uiview/)。可通过设置 `delegate` 接收加载开始/完成/失败与请求拦截（如自定义 URL Scheme 实现 WebView 内 JS 与插件 JS 的双向通信）。参见 [Cookbook：WebView 内 JS 与插件 JS 双向通信](/guides/cookbook/webview-bidirectional-js/)。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `delegate` | id | 实现 UIWebViewDelegate 的对象，通常为承载 WebView 的 ViewController（self）；需在其**实例成员**中实现 webViewDidStartLoad、webViewDidFinishLoad、webViewDidFailLoadWithError、webViewShouldStartLoadWithRequestNavigationType。 |
| `scrollView` | UIScrollView | 只读，内嵌滚动视图。 |
| `request` | NSURLRequest | 只读，当前请求。 |
| `loading` | boolean | 只读，是否正在加载（getter 为 isLoading）。 |
| `canGoBack` | boolean | 只读，是否可后退。 |
| `canGoForward` | boolean | 只读，是否可前进。 |
| `scalesPageToFit` | boolean | 是否按比例缩放以适应视图。 |
| `dataDetectorTypes` | UIDataDetectorTypes | 检测的数据类型（如电话、链接）。 |
| `customUserAgent` | string | 自定义 User-Agent。 |

### 加载方法

| 方法 | 参数 | 说明 |
|------|------|------|
| `loadRequest(request)` | request: NSURLRequest | 加载 URL 请求（如远程网页）。 |
| `loadHTMLString(string, baseURL)` | string: string, baseURL: NSURL \| null | 加载 HTML 字符串；baseURL 可为 null。部分环境导出名为 `loadHTMLStringBaseURL`。 |
| `loadData(data, MIMEType, textEncodingName, baseURL)` | data: NSData, MIMEType, textEncodingName: string, baseURL: NSURL | 加载二进制数据。 |
| `loadFileURL(URL, allowingReadAccessToURL)` | URL, readAccessURL: NSURL | 加载本地文件 URL。 |
| `reload()` | — | 重新加载。 |
| `stopLoading()` | — | 停止加载。 |
| `goBack()` / `goForward()` | — | 后退 / 前进。 |

### 脚本与截图

| 方法 | 参数 | 说明 |
|------|------|------|
| `evaluateJavaScript(javaScriptString, completionHandler)` | javaScriptString: string, completionHandler: (result) => void \| null | 在页面上下文中执行 JS；执行完成后调用 completionHandler（可选）。用于**插件 → WebView 内 JS** 的通信。 |
| `takeSnapshotWithWidth(width, completionHandler)` | width: number, completionHandler | 按指定宽度截取快照，完成后回调。 |

## Delegate（UIWebViewDelegate）

以下方法需在 `webView.delegate` 所指对象的**实例成员**中实现（例如承载 WebView 的 ViewController 在 `JSB.defineClass` 的第二个参数里定义）。

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `webViewDidStartLoad(webView)` | webView: UIWebView | — | 开始加载时调用。 |
| `webViewDidFinishLoad(webView)` | webView: UIWebView | — | 加载完成时调用。 |
| `webViewDidFailLoadWithError(webView, error)` | webView, error | — | 加载失败时调用。 |
| `webViewShouldStartLoadWithRequestNavigationType(webView, request, type)` | webView, request: NSURLRequest, type: number | boolean | 是否允许加载该请求；可在此拦截自定义 URL Scheme（如 `marginnote://...`），解析后执行插件逻辑并 **return false** 阻止实际加载，实现 **WebView 内 JS → 插件** 的通信。 |

## 相关

- [原生 UI：使用 WebView](/guides/native-ui/#使用-webview)、[Cookbook：WebView 内 JS 与插件 JS 双向通信](/guides/cookbook/webview-bidirectional-js/)
- [UIView](/reference/uikit/uiview/)、[UIViewController](/reference/uikit/uiview-controller/)
