---
title: UISlider
description: 滑杆控件。支持 value/min/max、三段轨道/拇指图片与 tintColor。
---

`UISlider` 继承自 [UIControl](/reference/uikit/uicontrol/)，用于在一个连续区间内选择数值。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `value` | number | 当前值。 |
| `minimumValue` | number | 最小值。 |
| `maximumValue` | number | 最大值。 |
| `minimumValueImage` | UIImage \| null | 最小值侧图片。 |
| `maximumValueImage` | UIImage \| null | 最大值侧图片。 |
| `minimumTrackTintColor` | UIColor \| null | 最小值轨道颜色。 |
| `maximumTrackTintColor` | UIColor \| null | 最大值轨道颜色。 |
| `thumbTintColor` | UIColor \| null | 拇指颜色。 |
| `currentThumbImage` | UIImage | 只读。当前拇指图片。 |
| `currentMinimumTrackImage` | UIImage | 只读。当前最小轨道图片。 |
| `currentMaximumTrackImage` | UIImage | 只读。当前最大轨道图片。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setValueAnimated(value, animated)` | value: number, animated: boolean | void | 设置值（可动画）。 |
| `setThumbImageForState(image, state)` | image: UIImage, state: number | void | 设置拇指图片。 |
| `setMinimumTrackImageForState(image, state)` | image: UIImage, state: number | void | 设置最小轨道图片。 |
| `setMaximumTrackImageForState(image, state)` | image: UIImage, state: number | void | 设置最大轨道图片。 |
| `thumbImageForState(state)` | state: number | UIImage \| null | 获取某状态的拇指图片。 |
| `minimumTrackImageForState(state)` | state: number | UIImage \| null | 获取某状态的最小轨道图片。 |
| `maximumTrackImageForState(state)` | state: number | UIImage \| null | 获取某状态的最大轨道图片。 |
| `minimumValueImageRectForBounds(bounds)` | bounds: { x: number, y: number, width: number, height: number } | { x: number, y: number, width: number, height: number } | 计算最小值图片区域。 |
| `maximumValueImageRectForBounds(bounds)` | bounds: { x: number, y: number, width: number, height: number } | { x: number, y: number, width: number, height: number } | 计算最大值图片区域。 |
| `trackRectForBounds(bounds)` | bounds: { x: number, y: number, width: number, height: number } | { x: number, y: number, width: number, height: number } | 计算轨道区域。 |
| `thumbRectForBoundsTrackRectValue(bounds, rect, value)` | bounds: { x: number, y: number, width: number, height: number }, rect: { x: number, y: number, width: number, height: number }, value: number | { x: number, y: number, width: number, height: number } | 计算拇指区域。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UISlider` 的类成员。

## 相关

- [UIControl](/reference/uikit/uicontrol/)
- [UIImage](/reference/uikit/uiimage/)
- [UIColor](/reference/uikit/uicolor/)
