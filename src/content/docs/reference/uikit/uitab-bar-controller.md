---
title: UITabBarController
description: Tab 容器控制器。管理 viewControllers、selectedIndex/selectedViewController，并暴露 tabBar。
---

`UITabBarController` 继承自 [UIViewController](/reference/uikit/uiview-controller/)，用于管理多个子控制器并通过 `UITabBar` 切换。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `tabBar` | UITabBar | 只读。关联的 tabBar。 |
| `viewControllers` | NSArray | 子控制器数组。 |
| `customizableViewControllers` | NSArray | 允许自定义（重排）的控制器数组。 |
| `selectedIndex` | number | 当前选中索引。 |
| `selectedViewController` | UIViewController \| null | 当前选中控制器。 |
| `moreNavigationController` | UINavigationController | 只读。更多页面的导航控制器。 |
| `tabBarController` | UITabBarController | 只读。运行时暴露的 tabBarController 引用。 |
| `tabBarItem` | UITabBarItem \| null | 自身在更外层容器中的 tabBarItem。 |
| `delegate` | id | 代理对象。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setViewControllersAnimated(viewControllers, animated)` | viewControllers: NSArray, animated: boolean | void | 设置子控制器数组（可动画）。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UITabBarController` 的类成员。

## 相关

- [UITabBar](/reference/uikit/uitab-bar/)
- [UITabBarItem](/reference/uikit/uitab-bar-item/)
- [UINavigationController](/reference/uikit/uinavigation-controller/)
- [NSArray](/reference/foundation/ns-array/)
