---
title: UITabBar
description: 标签栏视图。管理 items、选中项与外观，并支持进入/退出自定义模式。
---

`UITabBar` 继承自 [UIView](/reference/uikit/uiview/)，用于展示一组 `UITabBarItem` 并管理选中项。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `items` | NSArray | tab item 列表。 |
| `selectedItem` | UITabBarItem \| null | 当前选中项。 |
| `delegate` | id | 代理对象。 |
| `selectionIndicatorImage` | UIImage \| null | 选中指示图片。 |
| `backgroundImage` | UIImage \| null | 背景图。 |
| `barTintColor` | UIColor \| null | bar 背景色。 |
| `selectedImageTintColor` | UIColor \| null | 选中图片 tintColor。 |
| `barStyle` | number | bar 样式。 |
| `translucent` | boolean | 是否半透明。 |
| `itemWidth` | number | item 宽度。 |
| `itemSpacing` | number | item 间距。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setItemsAnimated(items, animated)` | items: NSArray, animated: boolean | void | 设置 items（可动画）。 |
| `beginCustomizingItems(items)` | items: NSArray | void | 进入自定义模式。 |
| `endCustomizingAnimated(animated)` | animated: boolean | boolean | 结束自定义模式。 |
| `isCustomizing()` | — | boolean | 是否处于自定义模式。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UITabBar` 的类成员。

## 相关

- [UITabBarItem](/reference/uikit/uitab-bar-item/)
- [UIView](/reference/uikit/uiview/)
- [UIImage](/reference/uikit/uiimage/) 、[UIColor](/reference/uikit/uicolor/)
- [NSArray](/reference/foundation/ns-array/)
