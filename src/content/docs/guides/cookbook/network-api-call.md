---
title: 调用远程 API
description: 用户点击插件按钮后，调用 REST API 获取数据并显示或写入笔记。
---

**场景**：用户点击插件工具栏按钮后，调用某个 REST API（如公开接口），将返回的 JSON 解析后通过 HUD/弹窗展示，或追加到当前焦点笔记的评论中。

**步骤**：

1. 构建 `NSMutableURLRequest`（URL、method、headers、timeout）
2. 使用 `NSURLConnection.sendAsynchronousRequestQueueCompletionHandler` 发起异步请求
3. 在回调中检查 `error`，成功则用 `NSJSONSerialization.JSONObjectWithDataOptions` 解析 `data`
4. 将结果展示（`showHUD` / `alert`）或通过 `focusNote.appendTextComment` / `appendHtmlComment` 写入笔记

## 示例一：GET 并显示 HUD

调用公开接口获取一句话，解析 JSON 后用 HUD 显示：

```javascript
function fetchQuoteAndShow() {
  var url = "https://api.quotable.io/random";
  var req = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(url));
  req.setTimeoutInterval(10);

  var queue = NSOperationQueue.mainQueue();
  NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(
    req,
    queue,
    function (response, data, error) {
      if (error && error.localizedDescription) {
        Application.sharedInstance().alert("请求失败: " + error.localizedDescription);
        return;
      }
      if (!data || data.length() === 0) {
        Application.sharedInstance().showHUD("无响应", self.window, 2);
        return;
      }
      var obj = NSJSONSerialization.JSONObjectWithDataOptions(data, 0);
      if (!NSJSONSerialization.isValidJSONObject(obj)) {
        Application.sharedInstance().showHUD("响应不是有效 JSON", self.window, 2);
        return;
      }
      var text = (obj.content || obj.quote || JSON.stringify(obj)).substring(0, 80);
      Application.sharedInstance().showHUD(text, self.window, 3);
    }
  );
}
```

将 `fetchQuoteAndShow` 绑定到工具栏按钮的 selector（如 `fetchQuote:`），在 `fetchQuote:` 中调用即可。

## 示例二：GET 后写入笔记评论

将 API 返回的文本追加到当前焦点笔记的评论中：

```javascript
function fetchAndAppendToNote() {
  var studyController = Application.sharedInstance().studyController(self.window);
  if (!studyController) return;
  var focusNote = studyController.notebookController.focusNote;
  if (!focusNote) {
    Application.sharedInstance().alert("请先选中一条笔记");
    return;
  }

  var url = "https://api.quotable.io/random";
  var req = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(url));
  req.setTimeoutInterval(10);
  var queue = NSOperationQueue.mainQueue();

  NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(
    req,
    queue,
    function (response, data, error) {
      if (error && error.localizedDescription) {
        Application.sharedInstance().alert("请求失败: " + error.localizedDescription);
        return;
      }
      if (!data || data.length() === 0) return;

      var obj = NSJSONSerialization.JSONObjectWithDataOptions(data, 0);
      if (!NSJSONSerialization.isValidJSONObject(obj)) return;

      var text = obj.content || obj.quote || JSON.stringify(obj);
      var topicid = focusNote.notebookId;
      UndoManager.sharedInstance().undoGrouping("追加 API 结果", topicid, function () {
        focusNote.appendTextComment(text);
      });
      Application.sharedInstance().refreshAfterDBChanged(topicid);
      Application.sharedInstance().showHUD("已追加到笔记", self.window, 2);
    }
  );
}
```

## 示例三：带 API Key 的请求

从 `NSUserDefaults` 读取保存的 API Key，设置到请求头：

```javascript
function fetchWithAPIKey() {
  var apiKey = NSUserDefaults.standardUserDefaults().objectForKey("my_addon_api_key");
  if (!apiKey) {
    Application.sharedInstance().alert("请先在设置中填写 API Key");
    return;
  }

  var url = "https://api.example.com/data";
  var req = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(url));
  req.setTimeoutInterval(10);
  req.setValueForHTTPHeaderField("Bearer " + apiKey, "Authorization");
  req.setValueForHTTPHeaderField("application/json", "Accept");

  var queue = NSOperationQueue.mainQueue();
  NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(
    req,
    queue,
    function (response, data, error) {
      if (error && error.localizedDescription) {
        Application.sharedInstance().alert("请求失败: " + error.localizedDescription);
        return;
      }
      if (!data || data.length() === 0) {
        Application.sharedInstance().showHUD("无响应", self.window, 2);
        return;
      }
      var obj = NSJSONSerialization.JSONObjectWithDataOptions(data, 0);
      if (NSJSONSerialization.isValidJSONObject(obj)) {
        Application.sharedInstance().showHUD("获取成功", self.window, 2);
        // 使用 obj...
      }
    }
  );
}
```

API Key 的保存与读取见 [插件设置页](/guides/cookbook/addon-settings/)。保存后可选择调用简单 API 验证 Key 是否有效。

## 相关

- [网络请求](/guides/network-requests/) —— 完整网络 API 说明
- [插件设置页](/guides/cookbook/addon-settings/) —— 存储 API Key
- [笔记与数据库](/guides/notes-and-database/) —— 修改笔记与 Undo
