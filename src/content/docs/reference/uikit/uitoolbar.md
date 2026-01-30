---
title: UIToolbar
description: 工具栏视图。管理 items 与外观（barTintColor/barStyle/translucent），并支持动画设置 items。
---

`UIToolbar` 继承自 [UIView](/reference/uikit/uiview/)，用于展示一排工具按钮（`UIBarButtonItem`）。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `items` | NSArray | 工具栏按钮项数组。 |
| `delegate` | id | 代理对象。 |
| `translucent` | boolean | 是否半透明。 |
| `barTintColor` | UIColor \| null | bar 背景色。 |
| `barStyle` | number | bar 样式。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setItemsAnimated(items, animated)` | items: NSArray, animated: boolean | void | 设置 items（可动画）。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UIToolbar` 的类成员。

## 相关

- [UIBarButtonItem](/reference/uikit/uibar-button-item/)
- [UIView](/reference/uikit/uiview/)
- [UIColor](/reference/uikit/uicolor/)
- [NSArray](/reference/foundation/ns-array/)
