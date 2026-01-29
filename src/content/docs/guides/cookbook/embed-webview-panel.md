---
title: 在插件中嵌入 WebView 面板
description: 从工具栏打开浮窗，浮窗内为 UIWebView，加载本地或内联 HTML，并与插件双向通信。
---

**场景**：用户点击插件工具栏按钮后，在主界面上显示一个浮窗面板，面板内为 [UIWebView](/reference/uikit/uiwebview/)，加载本地或内联 HTML；面板内点击可触发插件逻辑（如 showHUD），插件也可通过 `evaluateJavaScript` 更新页面内容。

## 步骤概览

1. **工具栏与浮窗**：实现 `queryAddonCommandStatus` 与 selector（如 `toggleWebViewPanel:`），在 selector 中切换浮窗的显示/隐藏；浮窗为自定义 ViewController 的 view，在 `sceneWillConnect` 中创建该 ViewController。
2. **浮窗内 WebView**：在 ViewController 的 viewDidLoad 中创建 UIWebView、设置 frame 与 delegate，加载 `loadHTMLStringBaseURL(html, null)` 或 `loadRequest` 远程 URL。
3. **布局**：在 `controllerWillLayoutSubviews` 中根据 `studyController.view.bounds` 计算浮窗 frame，与 [工具栏与命令](/guides/toolbar-and-commands/) 中面板布局方式一致。
4. **双向通信**：实现 `webViewShouldStartLoadWithRequestNavigationType` 拦截自定义 URL（如 `marginnote://action?msg=...`），解析后执行插件逻辑并 return false；需要时用 `webView.evaluateJavaScript(script, completionHandler)` 向页面注入数据或执行脚本。完整代码与 HTML 示例见 [WebView 内 JS 与插件 JS 双向通信](/guides/cookbook/webview-bidirectional-js/)。

## 关键片段

**main.js 中创建 WebView 面板并挂到 studyController.view**（与 Samples/UIKit/WebView 类似）：

```javascript
sceneWillConnect: function () {
  self.layoutViewController = function () {
    var frame = Application.sharedInstance().studyController(self.window).view.bounds;
    var width = Math.min(400, frame.width - 40);
    self.webViewController.view.frame = {
      x: (frame.width - width) / 2,
      y: frame.height - 500,
      width: width,
      height: 480
    };
  };
  self.webViewController = MyWebViewController.new();
  self.webViewController.mainPath = mainPath;  // 若需加载包内 HTML
},
notebookWillOpen: function (notebookid) {
  NSTimer.scheduledTimerWithTimeInterval(0.2, false, function () {
    var show = NSUserDefaults.standardUserDefaults().objectForKey("my_webview_panel_on");
    if (show === true) {
      Application.sharedInstance().studyController(self.window).view.addSubview(self.webViewController.view);
      self.layoutViewController();
      Application.sharedInstance().studyController(self.window).refreshAddonCommands();
    }
  });
},
controllerWillLayoutSubviews: function (controller) {
  if (controller === Application.sharedInstance().studyController(self.window)) {
    self.layoutViewController();
  }
},
queryAddonCommandStatus: function () {
  return {
    image: "icon.png",
    object: self,
    selector: "toggleWebViewPanel:",
    checked: self.webViewController.view.window ? true : false
  };
},
toggleWebViewPanel: function (sender) {
  if (self.webViewController.view.window) {
    self.webViewController.view.removeFromSuperview();
    NSUserDefaults.standardUserDefaults().setObjectForKey(false, "my_webview_panel_on");
  } else {
    Application.sharedInstance().studyController(self.window).view.addSubview(self.webViewController.view);
    self.layoutViewController();
    NSUserDefaults.standardUserDefaults().setObjectForKey(true, "my_webview_panel_on");
  }
  Application.sharedInstance().studyController(self.window).refreshAddonCommands();
}
```

**MyWebViewController**：用 `JSB.defineClass('MyWebViewController : UIViewController <UIWebViewDelegate>', { ... })` 定义，在 viewDidLoad 中 `self.webView = new UIWebView(frame)`、`self.webView.delegate = self`、`self.webView.loadHTMLStringBaseURL(html, null)`，并实现 webViewDidStartLoad、webViewDidFinishLoad、webViewDidFailLoadWithError、webViewShouldStartLoadWithRequestNavigationType（拦截 `marginnote://` 并 return false）。具体 delegate 与页面内 `location.href = 'marginnote://...'` 写法见 [WebView 内 JS 与插件 JS 双向通信](/guides/cookbook/webview-bidirectional-js/)。

## 相关

- [工具栏与命令](/guides/toolbar-and-commands/)、[原生 UI：使用 WebView](/guides/native-ui/#使用-webview)
- [WebView 内 JS 与插件 JS 双向通信](/guides/cookbook/webview-bidirectional-js/)、[UIWebView](/reference/uikit/uiwebview/)
