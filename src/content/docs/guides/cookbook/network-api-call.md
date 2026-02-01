---
title: 调用远程 API
description: 用户点击插件按钮后，用 MNNetwork 调用 REST API，将返回的 JSON 或文本展示或写入笔记。
---

**场景**：用户点击插件工具栏按钮后，调用某个 REST API（如公开接口），将返回的 JSON 或纯文本解析后通过 HUD/弹窗展示，或追加到当前焦点笔记的评论中。

**前提**：已按 [网络请求](/guides/network-requests/) 在插件内加入完整的 `base64.js` 与 `network.js`，并在入口中先 `JSB.require('base64')` 再 `JSB.require('network')`。以下示例均使用其中的 `MNNetwork.fetch`、`res.json()`、`res.text()`。

**步骤**：

1. 在工具栏命令对应的 selector 中调用封装：`await MNNetwork.fetch(url, options)` 得到响应，在 try 中用 `res.json()`（JSON）或 `res.text()`（纯文本）取结果
2. 将结果用 `showHUD` / `alert` 展示，或通过 `focusNote.appendTextComment` / `appendHtmlComment` 写入笔记
3. 在 catch 中处理错误（如 `alert("请求失败: " + err)`）

---

## 示例一：GET 并显示 HUD

调用公开接口获取一句话，解析 JSON 后用 HUD 显示。使用 [网络请求](/guides/network-requests/) 中的 `MNNetwork` 与 `base64.js`。

```javascript
// 入口中已执行：JSB.require('base64'); JSB.require('network');

async function fetchQuoteAndShow() {
  try {
    var res = await MNNetwork.fetch("https://api.quotable.io/random");
    var obj = res.json();
    if (!obj) {
      Application.sharedInstance().showHUD("响应不是有效 JSON", self.window, 2);
      return;
    }
    var text = (obj.content || obj.quote || JSON.stringify(obj)).substring(0, 80);
    Application.sharedInstance().showHUD(text, self.window, 3);
  } catch (err) {
    Application.sharedInstance().alert("请求失败: " + err);
  }
}
```

将 `fetchQuoteAndShow` 绑定到工具栏按钮的 selector（如 `fetchQuote:`），在 `fetchQuote:` 中调用即可。

---

## 示例二：GET 后写入笔记评论

将 API 返回的文本追加到当前焦点笔记的评论中，使用 `res.json()` 取内容后通过 UndoManager 写入。

```javascript
async function fetchAndAppendToNote() {
  var studyController = Application.sharedInstance().studyController(self.window);
  if (!studyController) return;
  var focusNote = studyController.notebookController.focusNote;
  if (!focusNote) {
    Application.sharedInstance().alert("请先选中一条笔记");
    return;
  }

  try {
    var res = await MNNetwork.fetch("https://api.quotable.io/random");
    var obj = res.json();
    if (!obj) return;

    var text = obj.content || obj.quote || JSON.stringify(obj);
    var topicid = focusNote.notebookId;
    UndoManager.sharedInstance().undoGrouping("追加 API 结果", topicid, function () {
      focusNote.appendTextComment(text);
    });
    Application.sharedInstance().refreshAfterDBChanged(topicid);
    Application.sharedInstance().showHUD("已追加到笔记", self.window, 2);
  } catch (err) {
    Application.sharedInstance().alert("请求失败: " + err);
  }
}
```

---

## 示例三：带 API Key 的请求

从 `NSUserDefaults` 读取保存的 API Key，通过 `options.headers` 传入。使用 [网络请求](/guides/network-requests/) 中的 `MNNetwork.fetch(url, { headers: { ... } })`。

```javascript
async function fetchWithAPIKey() {
  var apiKey = NSUserDefaults.standardUserDefaults().objectForKey("my_addon_api_key");
  if (!apiKey) {
    Application.sharedInstance().alert("请先在设置中填写 API Key");
    return;
  }

  try {
    var res = await MNNetwork.fetch("https://api.example.com/data", {
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Accept": "application/json"
      }
    });
    var obj = res.json();
    if (NSJSONSerialization.isValidJSONObject(obj)) {
      Application.sharedInstance().showHUD("获取成功", self.window, 2);
      // 使用 obj...
    }
  } catch (err) {
    Application.sharedInstance().alert("请求失败: " + err);
  }
}
```

API Key 的保存与读取见 [插件设置页](/guides/cookbook/addon-settings/)。保存后可选择调用简单 API 验证 Key 是否有效。

---

## 示例四：纯文本响应（res.text()）

若接口返回的是纯文本（如 `text/plain`），用 `res.text()` 获取字符串。`text()` 依赖 [网络请求](/guides/network-requests/) 中的 `base64.js`（需已 `JSB.require('base64')`）。

```javascript
async function fetchPlainText() {
  try {
    var res = await MNNetwork.fetch("https://example.com/plain");
    var str = res.text();
    Application.sharedInstance().showHUD(str.substring(0, 100), self.window, 3);
  } catch (err) {
    Application.sharedInstance().alert("请求失败: " + err);
  }
}
```

---

## 相关

- [网络请求](/guides/network-requests/) —— Base64 与 MNNetwork 完整代码、data 转 JSON/文本说明
- [插件设置页](/guides/cookbook/addon-settings/) —— 存储 API Key
- [笔记与数据库](/guides/notes-and-database/) —— 修改笔记与 Undo
