---
title: UIWindow
description: 顶层窗口。支持设置 rootViewController、windowLevel、screen，并提供坐标系转换与事件分发。
---

`UIWindow` 继承自 [UIView](/reference/uikit/uiview/)，表示一个顶层窗口。插件运行时里你会经常把它作为 `self.window` 或 controller 相关 API 的参数传递。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `screen` | UIScreen | 所属屏幕。 |
| `keyWindow` | boolean | 只读。是否为 keyWindow。 |
| `rootViewController` | UIViewController \| null | 根控制器。 |
| `windowLevel` | number | 窗口层级。 |

### 窗口状态

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `becomeKeyWindow()` | — | void | 成为 key window。 |
| `resignKeyWindow()` | — | void | 放弃 key window。 |
| `makeKeyWindow()` | — | void | 使其成为 key window。 |
| `makeKeyAndVisible()` | — | void | 成为 key 且可见。 |

### 事件与坐标转换

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `sendEvent(event)` | event: UIEvent | void | 向窗口分发事件。 |
| `convertPointToWindow(point, window)` | point: { x: number, y: number }, window: UIWindow \| null | { x: number, y: number } | 点坐标转换到另一个 window。 |
| `convertPointFromWindow(point, window)` | point: { x: number, y: number }, window: UIWindow \| null | { x: number, y: number } | 点坐标从另一个 window 转换回来。 |
| `convertRectToWindow(rect, window)` | rect: { x: number, y: number, width: number, height: number }, window: UIWindow \| null | { x: number, y: number, width: number, height: number } | 矩形转换到另一个 window。 |
| `convertRectFromWindow(rect, window)` | rect: { x: number, y: number, width: number, height: number }, window: UIWindow \| null | { x: number, y: number, width: number, height: number } | 矩形从另一个 window 转换回来。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UIWindow` 的类成员。

## 相关

- [UIView](/reference/uikit/uiview/)
- [UIViewController](/reference/uikit/uiview-controller/)
- [UIScreen](/reference/uikit/uiscreen/)
- [UIEvent](/reference/uikit/uievent/)
