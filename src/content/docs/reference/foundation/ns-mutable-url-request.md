---
title: NSMutableURLRequest
description: 可变 URL 请求对象（NSURLRequest 子类），用于设置 method/headers/body 等。
---

完整用法见 [网络请求](/guides/network-requests/) 教程。

`NSMutableURLRequest` 继承自 `NSURLRequest`，用于构造可变的 HTTP 请求（设置 method/header/body 等）。在插件的网络请求里（例如 `NSURLConnection`）默认用它来构造请求。

## 实例成员 (Instance members)

### 常用写法

```javascript
var req = NSMutableURLRequest.requestWithURL(NSURL.URLWithString("https://example.com"));
req.setHTTPMethod("POST");
req.setValueForHTTPHeaderField("application/json", "Content-Type");
req.setHTTPBody(NSData.dataWithStringEncoding("{}", 4));
```

## 类成员 (Class members)

`NSMutableURLRequest` 通过 `requestWithURL(...)` 工厂方法创建。

相关：[网络请求](/guides/network-requests/) 教程含完整请求构建示例。
