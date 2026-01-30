---
title: NSMutableURLRequest
description: 可变 URL 请求对象（NSURLRequest 子类），用于设置 method/headers/body 等。
---

完整用法见 [网络请求](/guides/network-requests/) 教程。

`NSMutableURLRequest` 继承自 `NSURLRequest`，用于构造可变的 HTTP 请求（设置 method/header/body 等）。在插件的网络请求里（例如 `NSURLConnection`）通常用它来构造请求。

## 实例成员 (Instance members)

### 常用写法

```javascript
var req = NSMutableURLRequest.requestWithURL(NSURL.URLWithString("https://example.com"));
req.setHTTPMethod("POST");
req.setValueForHTTPHeaderField("application/json", "Content-Type");
req.setHTTPBody(NSData.dataWithStringEncoding("{}", 4));
```

## 类成员 (Class members)

当前运行时未额外在本文列出 `NSMutableURLRequest` 的类成员；通常通过 `requestWithURL(...)` 等工厂方法创建（以你的运行时实际暴露为准，站内搜索即可定位）。

相关：[网络请求](/guides/network-requests/) 教程含完整请求构建示例。

