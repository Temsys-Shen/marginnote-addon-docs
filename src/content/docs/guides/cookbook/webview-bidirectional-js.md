---
title: WebView 内 JS 与插件 JS 双向通信
description: 通过 evaluateJavaScript 与自定义 URL Scheme 实现插件与 WebView 页面的双向调用。
---

**场景**：插件内嵌 UIWebView 加载本地或远程 HTML，需要（1）插件向页面注入数据或执行脚本；（2）页面内按钮/脚本触发插件逻辑（如 showHUD、写数据库）。**WebView 内 JS 不能直接访问插件全局对象**（如 JSB、Application），只能通过「插件执行 evaluateJavaScript」或「页面跳转自定义 URL 被 delegate 拦截」实现通信。

## 插件 → WebView 内 JS

使用 `webView.evaluateJavaScript(javaScriptString, completionHandler)` 在页面上下文中执行 JS。加载完成后（如在 `webViewDidFinishLoad` 中）调用。

**示例**：向页面注入数据并调用页面内全局函数。

```javascript
// 插件端（在 webViewDidFinishLoad 或用户点击后）
var data = { title: "来自插件", count: 1 };
var script = "window.receiveFromAddon && window.receiveFromAddon(" + JSON.stringify(JSON.stringify(data)) + ");";
self.webView.evaluateJavaScript(script, null);

// 或执行并取回结果
self.webView.evaluateJavaScript("document.title", function (result) {
  JSB.log("页面标题: %@", result);
});
```

**页面内**（HTML 中）：定义 `window.receiveFromAddon = function(jsonStr) { var data = JSON.parse(jsonStr); ... }` 即可在插件调用时收到数据。

## WebView 内 JS → 插件

通过**自定义 URL Scheme** 由插件拦截：页面内执行 `location.href = 'marginnote://action?key=value'` 或创建 iframe 的 `src` 为自定义 URL。在 delegate 的 `webViewShouldStartLoadWithRequestNavigationType(webView, request, type)` 中判断 `request.URL` 的 scheme（如 `marginnote`），解析参数并执行插件逻辑，**return false** 阻止实际加载该 URL。

**示例**：页面内按钮点击后通知插件并显示 HUD。

**HTML 片段（内嵌或 loadHTMLString 加载）**：

```html
<button id="btn">通知插件</button>
<script>
  document.getElementById("btn").onclick = function () {
    var msg = "Hello from WebView";
    window.location.href = "marginnote://notify?msg=" + encodeURIComponent(msg);
  };
</script>
```

**插件端（实例成员）**：

```javascript
webViewShouldStartLoadWithRequestNavigationType: function (webView, request, type) {
  var url = request.URL;
  if (!url) return true;
  var scheme = url.scheme;
  if (scheme === "marginnote") {
    var path = url.path || "";
    if (path.indexOf("notify") !== -1) {
      var query = url.query || "";
      var msg = query.replace(/^msg=/, "").replace(/\+/g, " ");
      try { msg = decodeURIComponent(msg); } catch (e) {}
      Application.sharedInstance().showHUD(msg, self.window, 2);
    }
    return false;  // 阻止加载该 URL
  }
  return true;
}
```

## 完整最小示例

**1. 插件内创建 WebView 并加载内联 HTML**（在 ViewController 的 viewDidLoad 等实例成员中）：

```javascript
var html = [
  "<!DOCTYPE html><html><body>",
  "<p id='text'>初始</p>",
  "<button id='send'>发送到插件</button>",
  "<script>",
  "document.getElementById('send').onclick = function() {",
  "  window.location.href = 'marginnote://notify?msg=' + encodeURIComponent('从页面发出');",
  "};",
  "</script>",
  "</body></html>"
].join("");
self.webView = new UIWebView(frame);
self.webView.delegate = self;
self.view.addSubview(self.webView);
self.webView.loadHTMLStringBaseURL(html, null);
```

**2. 实现 webViewShouldStartLoadWithRequestNavigationType**（同上，解析 `marginnote://notify?msg=...` 并 showHUD，return false）。

**3. 插件向页面更新文字**（例如在 webViewDidFinishLoad 后延迟执行）：

```javascript
self.webView.evaluateJavaScript("document.getElementById('text').innerText = '已由插件更新';", null);
```

这样即形成「页面点击 → 自定义 URL → 插件拦截并 showHUD」与「插件 evaluateJavaScript 更新页面」的双向通信。

## 相关

- [UIWebView](/reference/uikit/uiwebview/)、[原生 UI：使用 WebView](/guides/native-ui/#使用-webview)
- [Cookbook：在插件中嵌入 WebView 面板](/guides/cookbook/embed-webview-panel/)（可选）
