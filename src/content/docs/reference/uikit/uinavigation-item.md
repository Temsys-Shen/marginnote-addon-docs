---
title: UINavigationItem
description: 导航项。用于配置标题、左右按钮、返回按钮与提示文案，并支持动画设置。
---

`UINavigationItem` 是导航栏上的“一个页面”的配置对象，常由 `UINavigationBar`/`UINavigationController` 管理为栈结构。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `title` | string | 标题。 |
| `prompt` | string \| null | 提示文案。 |
| `hidesBackButton` | boolean | 是否隐藏返回按钮。 |
| `backBarButtonItem` | UIBarButtonItem \| null | 返回按钮项。 |
| `leftBarButtonItem` | UIBarButtonItem \| null | 左侧按钮项。 |
| `rightBarButtonItem` | UIBarButtonItem \| null | 右侧按钮项。 |
| `titleView` | UIView \| null | 自定义标题视图。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `initWithTitle(title)` | title: string | id | 以标题初始化。 |
| `setHidesBackButtonAnimated(hidesBackButton, animated)` | hidesBackButton: boolean, animated: boolean | void | 设置返回按钮隐藏（可动画）。 |
| `setLeftBarButtonItemsAnimated(items, animated)` | items: NSArray, animated: boolean | void | 设置左侧按钮数组（可动画）。 |
| `setRightBarButtonItemsAnimated(items, animated)` | items: NSArray, animated: boolean | void | 设置右侧按钮数组（可动画）。 |
| `setLeftBarButtonItemAnimated(item, animated)` | item: UIBarButtonItem, animated: boolean | void | 设置左侧按钮（可动画）。 |
| `setRightBarButtonItemAnimated(item, animated)` | item: UIBarButtonItem, animated: boolean | void | 设置右侧按钮（可动画）。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UINavigationItem` 的类成员。

## 相关

- [UINavigationBar](/reference/uikit/uinavigation-bar/)
- [UIBarButtonItem](/reference/uikit/uibar-button-item/)
- [UIView](/reference/uikit/uiview/)
- [NSArray](/reference/foundation/ns-array/)
