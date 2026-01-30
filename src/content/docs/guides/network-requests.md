---
title: 网络请求
description: 使用 NSURLConnection 发起 HTTP 请求，解析 JSON 响应，无需查阅多个 API 参考。
---

插件运行在 JavaScriptCore 环境中，**没有浏览器的 `fetch`**。网络请求需使用系统导出的 `NSURLConnection`，配合 `NSMutableURLRequest`、`NSOperationQueue`、`NSData`、`NSJSONSerialization` 等完成。本篇将内联所有关键用法，照抄即用。

## 环境说明

- 请求构建：`NSMutableURLRequest`（可设置 method、headers、body、timeout）
- 发起请求：`NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(request, queue, callback)`
- 回调队列：`NSOperationQueue.mainQueue()`（在主线程执行回调，便于更新 UI）
- 回调参数：`(response, data, error)` —— `response` 为 `NSHTTPURLResponse`，`data` 为 `NSData`，`error` 为 `NSError`（成功时可能为 null）

## GET 请求完整示例

```javascript
function fetchGET(url, callback) {
  var req = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(url));
  req.setTimeoutInterval(10);

  var queue = NSOperationQueue.mainQueue();
  NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(
    req,
    queue,
    function (response, data, error) {
      if (error && error.localizedDescription) {
        callback(null, error.localizedDescription);
        return;
      }
      if (!data || data.length() === 0) {
        callback(null, "无响应数据");
        return;
      }
      // 尝试解析为 JSON
      var obj = NSJSONSerialization.JSONObjectWithDataOptions(data, 0);
      if (NSJSONSerialization.isValidJSONObject(obj)) {
        callback(obj, null);
      } else {
        callback(null, "响应不是有效 JSON");
      }
    }
  );
}

// 使用示例
fetchGET("https://api.quotable.io/random", function (result, err) {
  if (err) {
    Application.sharedInstance().alert("请求失败: " + err);
    return;
  }
  var text = result && result.content ? result.content : JSON.stringify(result);
  Application.sharedInstance().showHUD(text, self.window, 3);
});
```

## POST JSON 请求

```javascript
function fetchPOST(url, jsonBody, callback) {
  var req = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(url));
  req.setHTTPMethod("POST");
  req.setTimeoutInterval(10);
  req.setValueForHTTPHeaderField("application/json", "Content-Type");

  // 方式一：用 NSJSONSerialization（若运行时暴露了 dataWithJSONObjectOptions）
  var bodyData = NSJSONSerialization.dataWithJSONObjectOptions(jsonBody, 0);
  req.setHTTPBody(bodyData);

  var queue = NSOperationQueue.mainQueue();
  NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(
    req,
    queue,
    function (response, data, error) {
      if (error && error.localizedDescription) {
        callback(null, error.localizedDescription);
        return;
      }
      if (!data || data.length() === 0) {
        callback(null, null); // 无 body 也视为成功
        return;
      }
      var obj = NSJSONSerialization.JSONObjectWithDataOptions(data, 0);
      callback(NSJSONSerialization.isValidJSONObject(obj) ? obj : null, null);
    }
  );
}
```

若 `dataWithJSONObjectOptions` 不可用，可用字符串编码替代：

```javascript
req.setHTTPBody(NSData.dataWithStringEncoding(JSON.stringify(jsonBody), 4)); // 4 = UTF-8
```

## 设置常用 Headers

```javascript
req.setValueForHTTPHeaderField("application/json", "Content-Type");
req.setValueForHTTPHeaderField("application/json", "Accept");
req.setValueForHTTPHeaderField("Bearer YOUR_API_KEY", "Authorization");
// User-Agent 示例
req.setValueForHTTPHeaderField(
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15",
  "User-Agent"
);
```

## 解析 JSON 响应

```javascript
var obj = NSJSONSerialization.JSONObjectWithDataOptions(data, 0);
if (NSJSONSerialization.isValidJSONObject(obj)) {
  // obj 为普通 JS 对象/数组，可直接使用
  var title = obj.title;
  var items = obj.items;
} else {
  // 解析失败，可能为纯文本或非法 JSON
}
```

第二个参数 `options` 通常传 `0`；若运行时暴露了 `NSJSONReadingOptions.MutableContainers`（值为 1），也可传入以得到可变容器。

## 错误处理

```javascript
function (response, data, error) {
  if (error) {
    var msg = error.localizedDescription || "未知错误";
    Application.sharedInstance().alert("请求失败: " + msg);
    return;
  }
  // 可选：检查 HTTP 状态码
  if (response && typeof response.statusCode === "function") {
    var code = response.statusCode();
    if (code < 200 || code >= 300) {
      Application.sharedInstance().alert("HTTP " + code);
      return;
    }
  }
  // 处理 data...
}
```

## NSData 转字符串

若响应为纯文本（非 JSON），需要将 `NSData` 转为 JS 字符串：

- **若运行时导出了 `NSString`**：可用 `NSString.alloc().initWithDataEncoding(data, 4)`（4 为 UTF-8），再取 `string` 或等效属性。
- **若无 NSString**：多数 API 返回 JSON，建议先用 `NSJSONSerialization.JSONObjectWithDataOptions` 解析；若确为纯文本且无 NSString，可尝试 `data.base64Encoding` 做 base64 解码（需自行实现 base64→string），或查阅运行时是否提供其他转换方式。

## 完整流程小结

1. 用 `NSMutableURLRequest.requestWithURL(NSURL.URLWithString(url))` 创建请求
2. 按需调用 `setHTTPMethod`、`setValueForHTTPHeaderField`、`setHTTPBody`、`setTimeoutInterval`
3. 调用 `NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(request, NSOperationQueue.mainQueue(), callback)`
4. 在 callback 中检查 `error`，成功则用 `NSJSONSerialization.JSONObjectWithDataOptions(data, 0)` 解析

## 相关

- [Cookbook：调用远程 API](/guides/cookbook/network-api-call/) —— 将 API 结果展示或写入笔记
- [JavaScript 原生环境](/reference/js-runtime/) —— 为何没有 fetch
- [NSURLConnection](/reference/foundation/ns-url-connection/)、[NSMutableURLRequest](/reference/foundation/ns-mutable-url-request/)
