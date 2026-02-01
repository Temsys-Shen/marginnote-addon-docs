---
title: 在插件中嵌入 WebView 面板
description: 从工具栏打开浮窗，浮窗内为 UIWebView，加载本地或内联 HTML，并与插件双向通信。
---

**场景**：用户点击插件工具栏按钮后，在主界面上显示一个浮窗面板，面板内为 [UIWebView](/reference/uikit/uiwebview/)，加载本地或内联 HTML；面板内可通过自定义 URL 触发插件逻辑（如 showHUD），插件也可通过 `evaluateJavaScript` 更新页面内容。

**要点**：浮窗为自定义 ViewController 的 view，在入口中 `JSB.require` 该 ViewController **一次**，在 `sceneWillConnect` 中创建实例；在 ViewController 的 **viewWillAppear** 中设置 `webView.delegate = self`，在 **viewWillDisappear** 中 `webView.stopLoading()` 并 `webView.delegate = null`。加载 HTML 用 `loadHTMLStringBaseURL(html, null)`，加载失败时在 `webViewDidFailLoadWithError` 中用 `error.localizedDescription` 拼 HTML 后用 `loadHTMLStringBaseURL` 显示错误页。双向通信写法见 [WebView 内 JS 与插件 JS 双向通信](/guides/cookbook/webview-bidirectional-js/)。

下文给出与 Samples/UIKit/WebView 同构的完整代码：main.js 中挂面板与切换显示，MyWebViewController.js 中创建 WebView、生命周期与 delegate。

---

## main.js 中挂载面板

在 `JSB.newAddon` 内 **只** 在入口 require 一次 ViewController，在 `sceneWillConnect` 中创建实例并定义 `layoutViewController`，在 `notebookWillOpen` 中根据持久化 key 决定是否加 view，在 `toggleWebViewPanel` 中切换显示/隐藏；显示面板后可用 NSTimer 调用 `becomeFirstResponder` 便于在 iOS 上收起键盘。

```javascript
JSB.newAddon = function (mainPath) {
  JSB.require('MyWebViewController');
  var newAddonClass = JSB.defineClass('MyWebViewAddon : JSExtension', {
    sceneWillConnect: function () {
      var self = this;
      self.layoutViewController = function () {
        var frame = Application.sharedInstance().studyController(self.window).view.bounds;
        var width = frame.width > 300 ? (300 + (frame.width - 300) / 2) : 300;
        self.webViewController.view.frame = {
          x: (frame.width - width) / 2,
          y: frame.height - 500,
          width: width,
          height: 480
        };
      };
      self.webViewController = MyWebViewController.new();
      self.webViewController.mainPath = mainPath;
    },
    notebookWillOpen: function (topicid) {
      var self = this;
      NSTimer.scheduledTimerWithTimeInterval(0.2, false, function () {
        var on = NSUserDefaults.standardUserDefaults().objectForKey('my_webview_panel_on');
        if (on === true) {
          Application.sharedInstance().studyController(self.window).view.addSubview(self.webViewController.view);
          self.layoutViewController();
          Application.sharedInstance().studyController(self.window).refreshAddonCommands();
        }
      });
    },
    controllerWillLayoutSubviews: function (controller) {
      if (controller === Application.sharedInstance().studyController(self.window)) {
        this.layoutViewController();
      }
    },
    queryAddonCommandStatus: function () {
      return {
        image: 'icon.png',
        object: this,
        selector: 'toggleWebViewPanel:',
        checked: this.webViewController.view.window ? true : false
      };
    },
    toggleWebViewPanel: function (sender) {
      var self = this;
      if (self.webViewController.view.window) {
        self.webViewController.view.removeFromSuperview();
        NSUserDefaults.standardUserDefaults().setObjectForKey(false, 'my_webview_panel_on');
      } else {
        Application.sharedInstance().studyController(self.window).view.addSubview(self.webViewController.view);
        self.layoutViewController();
        NSUserDefaults.standardUserDefaults().setObjectForKey(true, 'my_webview_panel_on');
        NSTimer.scheduledTimerWithTimeInterval(0.2, false, function () {
          Application.sharedInstance().studyController(self.window).becomeFirstResponder();
        });
      }
      Application.sharedInstance().studyController(self.window).refreshAddonCommands();
    }
  }, {});
  return newAddonClass;
};
```

---

## MyWebViewController.js

将以下代码保存为 `MyWebViewController.js`，在入口中通过 `JSB.require('MyWebViewController')` 加载（见上一节）。

- **viewDidLoad**：创建 UIWebView，设置 `backgroundColor`、`scalesPageToFit`、`autoresizingMask`、`delegate`，`addSubview` 后 `loadRequest` 或 `loadHTMLStringBaseURL(html, null)`。
- **viewWillAppear**：`self.webView.delegate = self`。
- **viewWillDisappear**：`self.webView.stopLoading()`，`self.webView.delegate = null`。
- **webViewDidStartLoad / webViewDidFinishLoad**：可按需开关 `UIApplication.sharedApplication().networkActivityIndicatorVisible`。
- **webViewDidFailLoadWithError**：用 `error.localizedDescription` 替换错误页 HTML 中的占位符，`loadHTMLStringBaseURL(errorString, null)` 显示。
- **webViewShouldStartLoadWithRequestNavigationType**：若需双向通信，在此判断 `request.URL` 的 scheme（如 `marginnote`），解析后执行插件逻辑并 **return false**；否则 **return true**。

```javascript
var MyWebViewController = JSB.defineClass('MyWebViewController : UIViewController <UIWebViewDelegate>', {
  viewDidLoad: function () {
    self.view.backgroundColor = UIColor.whiteColor();
    self.view.layer.shadowOffset = { width: 0, height: 0 };
    self.view.layer.shadowRadius = 10;
    self.view.layer.shadowOpacity = 0.5;
    self.view.layer.shadowColor = UIColor.colorWithWhiteAlpha(0.5, 1);

    var webFrame = { x: 0, y: 0, width: self.view.bounds.width, height: self.view.bounds.height };
    self.webView = new UIWebView(webFrame);
    self.webView.backgroundColor = UIColor.whiteColor();
    self.webView.scalesPageToFit = true;
    self.webView.autoresizingMask = (1 << 1 | 1 << 4 | 1 << 5);
    self.webView.delegate = self;
    self.view.addSubview(self.webView);

    var html = '<!DOCTYPE html><html><body><p id="text">Hello</p><button id="btn">通知插件</button><script>document.getElementById("btn").onclick=function(){ window.location.href="marginnote://notify?msg="+encodeURIComponent("from page"); };</script></body></html>';
    self.webView.loadHTMLStringBaseURL(html, null);
  },
  viewWillAppear: function (animated) {
    self.webView.delegate = self;
  },
  viewWillDisappear: function (animated) {
    self.webView.stopLoading();
    self.webView.delegate = null;
    UIApplication.sharedApplication().networkActivityIndicatorVisible = false;
  },
  webViewDidStartLoad: function (webView) {
    UIApplication.sharedApplication().networkActivityIndicatorVisible = true;
  },
  webViewDidFinishLoad: function (webView) {
    UIApplication.sharedApplication().networkActivityIndicatorVisible = false;
  },
  webViewDidFailLoadWithError: function (webView, error) {
    UIApplication.sharedApplication().networkActivityIndicatorVisible = false;
    var tpl = "<!DOCTYPE html><html><head><meta charset='utf-8'></head><body><div style='text-align:center;color:red;'>Error: %@</div></body></html>";
    var errorString = tpl.replace("%@", error.localizedDescription);
    self.webView.loadHTMLStringBaseURL(errorString, null);
  },
  webViewShouldStartLoadWithRequestNavigationType: function (webView, request, type) {
    var url = request.URL;
    if (!url) return true;
    if (url.scheme === 'marginnote') {
      var host = url.host || '';
      var query = url.query || '';
      if (host === 'notify') {
        var msg = query.replace(/^msg=/, '').replace(/\+/g, ' ');
        try { msg = decodeURIComponent(msg); } catch (e) {}
        Application.sharedInstance().showHUD(msg, self.window, 2);
      }
      return false;
    }
    return true;
  }
});
```

---

## 相关

- [工具栏与命令](/guides/toolbar-and-commands/)、[原生 UI：使用 WebView](/guides/native-ui/#使用-webview)
- [WebView 内 JS 与插件 JS 双向通信](/guides/cookbook/webview-bidirectional-js/)、[UIWebView](/reference/uikit/uiwebview/)
- [网络请求](/guides/network-requests/) —— 获取远程数据后注入 HTML 或通过 evaluateJavaScript 注入
