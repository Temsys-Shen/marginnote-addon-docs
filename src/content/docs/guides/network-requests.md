---
title: 网络请求
description: 使用 NSURLConnection 发起 HTTP 请求；含 Base64 解码与 Response 封装完整代码，解析 JSON 与纯文本。
---

插件运行在 JavaScriptCore 环境中，**没有浏览器的 `fetch`**，也**没有内置的 Base64 解码**。网络请求需使用系统导出的 `NSURLConnection`，配合 `NSMutableURLRequest`、`NSOperationQueue`、`NSData`、`NSJSONSerialization` 等完成。响应体在回调的 **data**（NSData）里；**data 转 JSON 与 data 转纯文本方式不同**：JSON 用 `NSJSONSerialization` 直接对 data 解析，纯文本需先用 `data.base64Encoding()` 再经 Base64 解码得字符串（需自行提供 Base64 解码实现）。下文给出完整可用的 Base64 解码与网络封装代码，照抄即用。

## 核心要点

- **读 data**：异步回调形参为 `(response, data, error)`。响应体在 **data**（NSData）里，处理结果以 data 为主；`response` 用于取 `statusCode()`，`error` 用于判断失败，不必用到所有参数。
- **data → JSON**：直接对 **NSData** 调用 `NSJSONSerialization.JSONObjectWithDataOptions(data, 0 或 1)`，得到 JS 对象；**不要**先转成字符串再 `JSON.parse`。
- **data → 纯文本**：环境中无现成「NSData → 字符串」API 时，用 `data.base64Encoding()` 得到 base64 字符串，再用 **Base64 解码**得到 JS 字符串。运行时不提供 Base64 解码，需在插件内实现（见下一节完整代码）。

---

## Base64 解码

环境中没有 Base64 的 decode，需在插件中自备。将以下代码保存为 `base64.js`，放在插件包内，在入口（如 main.js）中先 `JSB.require('base64')` 再使用依赖它的网络封装。

```javascript
// base64.js —— Base64 解码工具，供 NSData 转纯文本使用
var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  decode: function (input) {
    var output = "";
    var i = 0;
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;

    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    return output;
  }
};
```

---

## 网络封装：Response + MNNetwork

以下封装提供 `Response#text()`（data → 纯文本，依赖 Base64）和 `Response#json()`（data → JS 对象，直接对 NSData 用 NSJSONSerialization）。将代码保存为 `network.js`，在入口中先 `JSB.require('base64')` 再 `JSB.require('network')`，然后使用 `MNNetwork.fetch(url, options)`。

```javascript
// network.js —— Response#text() 依赖 Base64，由入口加载 base64.js 后可用

class Response {
  constructor(data, nsResponse) {
    this.data = data;
    this.nsResponse = nsResponse;
    this.status = nsResponse ? nsResponse.statusCode() : 0;
  }

  static isNil(obj) {
    return obj === null || typeof obj === 'undefined' || obj instanceof NSNull;
  }

  text() {
    if (Response.isNil(this.data) || this.data.length() === 0) return "";

    var encoding = this.data.base64Encoding();
    var decoding = Base64.decode(encoding);
    return decoding;
  }

  json() {
    if (Response.isNil(this.data) || this.data.length() === 0) return {};

    try {
      return NSJSONSerialization.JSONObjectWithDataOptions(this.data, 1);
    } catch (e) {
      return null;
    }
  }
}

class MNNetwork {
  static isNil(obj) {
    return obj === null || typeof obj === 'undefined' || obj instanceof NSNull;
  }

  static _initRequest(url, options) {
    var fullUrl = url.trim();
    if (fullUrl.indexOf("://") === -1) fullUrl = "https://" + fullUrl;

    var request = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(fullUrl));
    request.setHTTPMethod(options.method || "GET");
    request.setTimeoutInterval(options.timeout || 10);

    var headers = {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)",
      "Content-Type": "application/json",
      "Accept": "application/json"
    };
    if (options.headers) {
      for (var k in options.headers) headers[k] = options.headers[k];
    }
    request.setAllHTTPHeaderFields(headers);

    if (options.json) {
      request.setHTTPBody(NSJSONSerialization.dataWithJSONObjectOptions(options.json, 1));
    } else if (options.body) {
      request.setHTTPBody(NSData.dataWithStringEncoding(String(options.body), 4));
    }

    if (options.search) {
      var components = NSURLComponents.componentsWithString(fullUrl);
      var qs = Object.keys(options.search).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(options.search[k]);
      }).join("&");
      components.query = qs;
      request.setURL(components.URL());
    }

    return request;
  }

  static fetch(url, options) {
    var req = this._initRequest(url, options || {});

    return new Promise(function (resolve, reject) {
      NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(
        req,
        NSOperationQueue.mainQueue(),
        function (res, data, err) {
          if (!MNNetwork.isNil(err)) {
            reject(err.localizedDescription ? err.localizedDescription() : "Network Error");
          } else {
            var response = new Response(data, res);
            resolve(response);
          }
        }
      );
    });
  }
}
```

**说明**：

- `Response#text()`：用 `data.base64Encoding()` 得到 base64 串，再 `Base64.decode(encoding)` 得到 JS 字符串；环境无 Base64 解码，故依赖上面的 `base64.js`。
- `Response#json()`：直接对 **NSData** 调用 `NSJSONSerialization.JSONObjectWithDataOptions(this.data, 1)`，不经过 base64 或字符串。
- 错误信息：`error.localizedDescription` 在部分运行时为方法，需 `error.localizedDescription()`，封装里已按「有则调用」处理。

---

## 使用封装发起请求

在 main.js（或入口）中的使用示例：

```javascript
JSB.require('base64');
JSB.require('network');

// GET JSON
async function fetchQuote() {
  try {
    var res = await MNNetwork.fetch("https://api.quotable.io/random");
    var obj = res.json();
    if (obj && obj.content) {
      Application.sharedInstance().showHUD(obj.content, self.window, 3);
    }
  } catch (err) {
    Application.sharedInstance().alert("请求失败: " + err);
  }
}

// GET 纯文本（如某接口返回 text/plain）
async function fetchPlain() {
  try {
    var res = await MNNetwork.fetch("https://example.com/plain");
    var str = res.text();
    Application.sharedInstance().showHUD(str.substring(0, 80), self.window, 2);
  } catch (err) {
    Application.sharedInstance().alert("请求失败: " + err);
  }
}

// POST JSON
async function postEcho() {
  try {
    var res = await MNNetwork.fetch("https://api.example.com/echo", {
      method: "POST",
      json: { key: "value" }
    });
    var obj = res.json();
    // 使用 obj...
  } catch (err) {
    Application.sharedInstance().alert("请求失败: " + err);
  }
}

// 自定义 Headers（如 Authorization）
async function fetchWithAuth() {
  try {
    var res = await MNNetwork.fetch("https://api.example.com/data", {
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Accept": "application/json"
      }
    });
    var obj = res.json();  // 或 res.text()
    // 使用 obj...
  } catch (err) {
    Application.sharedInstance().alert("请求失败: " + err);
  }
}
```

---

## 不使用封装时的原始写法

若不引入上述封装，直接使用系统 API 时要点如下。

- **回调**：`NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(request, NSOperationQueue.mainQueue(), function (response, data, error) { ... })`。有用的是 **data**（响应体）、可选的 `response.statusCode()`、以及 **error**（失败时）。
- **JSON**：直接对 **data**（NSData）解析，不要先转字符串再 `JSON.parse`：
  - `var obj = NSJSONSerialization.JSONObjectWithDataOptions(data, 0);` 或选项 `1`（若运行时支持）。
- **纯文本**：无 Base64 解码时无法从 NSData 得到字符串；必须先按上文提供 `base64.js`，再 `var str = Base64.decode(data.base64Encoding());`。
- **错误**：`error.localizedDescription` 可能是属性或方法，建议统一写成：`var msg = (typeof error.localizedDescription === "function" ? error.localizedDescription() : error.localizedDescription) || "未知错误";`。

**原始 GET + JSON 示例**：

```javascript
var req = NSMutableURLRequest.requestWithURL(NSURL.URLWithString("https://api.quotable.io/random"));
req.setTimeoutInterval(10);

NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(
  req,
  NSOperationQueue.mainQueue(),
  function (response, data, error) {
    if (error) {
      var msg = (typeof error.localizedDescription === "function" ? error.localizedDescription() : error.localizedDescription) || "未知错误";
      Application.sharedInstance().alert("请求失败: " + msg);
      return;
    }
    if (!data || data.length() === 0) {
      Application.sharedInstance().alert("无响应数据");
      return;
    }
    var obj = NSJSONSerialization.JSONObjectWithDataOptions(data, 0);
    if (NSJSONSerialization.isValidJSONObject(obj)) {
      Application.sharedInstance().showHUD(obj.content || JSON.stringify(obj), self.window, 3);
    } else {
      Application.sharedInstance().alert("响应不是有效 JSON");
    }
  }
);
```

**原始 POST JSON 示例**：

```javascript
var req = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(url));
req.setHTTPMethod("POST");
req.setTimeoutInterval(10);
req.setValueForHTTPHeaderField("application/json", "Content-Type");
req.setHTTPBody(NSJSONSerialization.dataWithJSONObjectOptions(jsonBody, 0));

NSURLConnection.sendAsynchronousRequestQueueCompletionHandler(
  req,
  NSOperationQueue.mainQueue(),
  function (response, data, error) {
    if (error) {
      var msg = (typeof error.localizedDescription === "function" ? error.localizedDescription() : error.localizedDescription) || "未知错误";
      Application.sharedInstance().alert("请求失败: " + msg);
      return;
    }
    if (!data || data.length() === 0) return;
    var obj = NSJSONSerialization.JSONObjectWithDataOptions(data, 0);
    // 使用 obj...
  }
);
```

---

## 小结

| 目的 | 做法 |
|------|------|
| 响应体 | 使用回调中的 **data**（NSData），不必依赖 response 的其他字段 |
| data → JSON | `NSJSONSerialization.JSONObjectWithDataOptions(data, 0)` 或 `1`，直接对 data |
| data → 纯文本 | `data.base64Encoding()` 得到 base64 串，再 **Base64.decode**（需自备 base64.js） |
| 错误信息 | `error.localizedDescription` 或 `error.localizedDescription()`，依运行时而定 |

推荐在插件内包含完整的 `base64.js` 与 `network.js`（如上），先 `JSB.require('base64')` 再 `JSB.require('network')`，然后用 `MNNetwork.fetch` 发起请求，在 try/catch 中用 `res.json()` 或 `res.text()` 处理 JSON 与纯文本。

## 相关

- [Cookbook：调用远程 API](/guides/cookbook/network-api-call/) —— 将 API 结果展示或写入笔记
- [JavaScript 原生环境](/reference/js-runtime/) —— 为何没有 fetch
- [NSURLConnection](/reference/foundation/ns-url-connection/)、[NSMutableURLRequest](/reference/foundation/ns-mutable-url-request/)
