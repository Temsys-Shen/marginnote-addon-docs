---
title: JavaScript 原生环境
description: MarginNote 插件运行时的 JavaScriptCore 能力边界与常见误区。
---

MarginNote 插件的 JS 运行环境是 **JavaScriptCore**（不是浏览器）。因此很多“浏览器 JS”里理所当然的能力，在插件里可能不存在或行为不同。

## 你仍然拥有的标准能力

- `Math` / `Date` / `JSON` / `RegExp`
- 基本语法与原型链
- 通过 JSB 导出的 Objective‑C 对象与方法（本项目的 API 参考主体）

## 常见误区

### 1) 没有原生 `fetch`

插件环境里通常**没有**浏览器的 `fetch`。网络请求应使用已导出的 Objective‑C 网络类，完整用法见 [网络请求](/guides/network-requests/) 教程（`NSURLConnection`、`NSMutableURLRequest`、`NSOperationQueue` 等）。

### 2) 可能没有 `setTimeout` / `setInterval`

纯 JSCore 环境通常**不包含**这两个定时器函数（它们属于浏览器/宿主实现）。在插件里推荐使用 `NSTimer` 实现延时/轮询。

## 相关

- [NSTimer](/reference/foundation/ns-timer/)
- [网络请求](/guides/network-requests/)

