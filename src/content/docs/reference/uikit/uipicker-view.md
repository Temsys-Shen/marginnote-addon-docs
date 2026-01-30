---
title: UIPickerView
description: 滚轮选择器视图。支持多列组件、行选择、刷新组件，以及通过 dataSource/delegate 提供内容。
---

`UIPickerView` 继承自 [UIView](/reference/uikit/uiview/)，用于展示多列滚轮选择器。插件运行时通过 `dataSource` 与 `delegate` 提供行数与行视图。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `showsSelectionIndicator` | boolean | 是否显示选中指示器。 |
| `dataSource` | id | 数据源对象。 |
| `delegate` | id | 代理对象。 |
| `numberOfComponents` | number | 只读。组件（列）数。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `numberOfRowsInComponent(component)` | component: number | number | 返回某组件的行数。 |
| `rowSizeForComponent(component)` | component: number | { width: number, height: number } | 返回某组件行尺寸。 |
| `viewForRowForComponent(row, component)` | row: number, component: number | UIView \| null | 返回某行对应的 view（由运行时/代理提供）。 |
| `reloadAllComponents()` | — | void | 刷新全部组件。 |
| `reloadComponent(component)` | component: number | void | 刷新指定组件。 |
| `selectRowInComponentAnimated(row, component, animated)` | row: number, component: number, animated: boolean | void | 选中指定行。 |
| `selectedRowInComponent(component)` | component: number | number | 返回当前选中行。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UIPickerView` 的类成员。

## 相关

- [UIView](/reference/uikit/uiview/)
