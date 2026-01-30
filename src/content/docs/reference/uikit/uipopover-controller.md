---
title: UIPopoverController
description: 弹出层控制器（旧）。可设置 contentViewController、从 rect 或 barButtonItem 弹出并可动画关闭。
---

`UIPopoverController` 用于以弹出层形式展示一个 `contentViewController`（旧接口）。在插件中它常用于在指定视图区域或工具栏按钮附近弹出一个小面板。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `contentViewController` | UIViewController | 内容控制器。 |
| `popoverContentSize` | { width: number, height: number } | 弹出层内容尺寸。 |
| `passthroughViews` | NSArray | 允许点击穿透的视图列表。 |
| `popoverVisible` | boolean | 只读。当前是否可见。 |
| `delegate` | id | 代理对象。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `initWithContentViewController(viewController)` | viewController: UIViewController | id | 以内容控制器初始化。 |
| `setContentViewControllerAnimated(viewController, animated)` | viewController: UIViewController, animated: boolean | void | 设置内容控制器（可动画）。 |
| `presentPopoverFromRect(rect, inView, permittedArrowDirections, animated)` | rect: { x: number, y: number, width: number, height: number }, inView: UIView, permittedArrowDirections: number, animated: boolean | void | 从指定矩形区域弹出。 |
| `presentPopoverFromBarButtonItem(item, permittedArrowDirections, animated)` | item: UIBarButtonItem, permittedArrowDirections: number, animated: boolean | void | 从 barButtonItem 弹出。 |
| `dismissPopoverAnimated(animated)` | animated: boolean | void | 关闭弹出层。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UIPopoverController` 的类成员。

## 相关

- [UIViewController](/reference/uikit/uiview-controller/)
- [UIView](/reference/uikit/uiview/)
- [UIBarButtonItem](/reference/uikit/uibar-button-item/)
- [NSArray](/reference/foundation/ns-array/)
