---
title: UINavigationBar
description: 导航栏视图。管理导航项栈、左右按钮、标题/提示文案与外观属性。
---

`UINavigationBar` 继承自 [UIView](/reference/uikit/uiview/)，用于展示导航栏并管理 `UINavigationItem` 栈。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `title` | string | 标题（部分运行时会把它映射到 `topItem.title`）。 |
| `prompt` | string \| null | 提示文案。 |
| `items` | NSArray | 导航项栈。 |
| `topItem` | UINavigationItem | 只读。栈顶导航项。 |
| `backItem` | UINavigationItem | 只读。返回项。 |
| `hidesBackButton` | boolean | 是否隐藏返回按钮。 |
| `backBarButtonItem` | UIBarButtonItem \| null | 返回按钮项。 |
| `leftBarButtonItem` | UIBarButtonItem \| null | 左侧按钮项。 |
| `rightBarButtonItem` | UIBarButtonItem \| null | 右侧按钮项。 |
| `leftBarButtonItems` | NSArray | 左侧按钮项数组。 |
| `rightBarButtonItems` | NSArray | 右侧按钮项数组。 |
| `titleView` | UIView \| null | 自定义标题视图。 |
| `titleTextAttributes` | NSDictionary \| null | 标题文本属性。 |
| `barTintColor` | UIColor \| null | bar 背景色。 |
| `barStyle` | number | bar 样式。 |
| `translucent` | boolean | 是否半透明。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `pushNavigationItemAnimated(item, animated)` | item: UINavigationItem, animated: boolean | void | 压入导航项。 |
| `popNavigationItemAnimated(animated)` | animated: boolean | UINavigationItem \| null | 弹出栈顶导航项。 |
| `setItemsAnimated(items, animated)` | items: NSArray, animated: boolean | void | 设置导航项栈（可动画）。 |
| `setBackgroundImageForBarMetrics(backgroundImage, barMetrics)` | backgroundImage: UIImage, barMetrics: number | void | 设置背景图。 |
| `backgroundImageForBarMetrics(barMetrics)` | barMetrics: number | UIImage \| null | 获取背景图。 |
| `setTitleVerticalPositionAdjustmentForBarMetrics(adjustment, barMetrics)` | adjustment: number, barMetrics: number | void | 设置标题垂直偏移。 |
| `titleVerticalPositionAdjustmentForBarMetrics(barMetrics)` | barMetrics: number | number | 获取标题垂直偏移。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UINavigationBar` 的类成员。

## 相关

- [UINavigationItem](/reference/uikit/uinavigation-item/)
- [UIBarButtonItem](/reference/uikit/uibar-button-item/)
- [UIView](/reference/uikit/uiview/)、[UIColor](/reference/uikit/uicolor/)
- [NSArray](/reference/foundation/ns-array/)、[NSDictionary](/reference/foundation/ns-dictionary/)
