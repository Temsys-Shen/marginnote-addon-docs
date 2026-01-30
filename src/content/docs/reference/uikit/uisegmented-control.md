---
title: UISegmentedControl
description: 分段选择控件。支持插入/删除段、设置标题/图片/宽度/偏移与外观资源。
---

`UISegmentedControl` 继承自 [UIControl](/reference/uikit/uicontrol/)，用于在多个选项之间切换。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `segmentedControlStyle` | number | 样式。 |
| `numberOfSegments` | number | 只读。段数量。 |
| `selectedSegmentIndex` | number | 当前选中段索引（未选中时常为 -1）。 |
| `momentary` | boolean | 是否瞬时（点按不保持选中）。 |

### 段管理

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `insertSegmentWithTitleAtIndexAnimated(title, segment, animated)` | title: string, segment: number, animated: boolean | void | 插入文字段。 |
| `insertSegmentWithImageAtIndexAnimated(image, segment, animated)` | image: UIImage, segment: number, animated: boolean | void | 插入图片段。 |
| `removeSegmentAtIndexAnimated(segment, animated)` | segment: number, animated: boolean | void | 删除指定段。 |
| `removeAllSegments()` | — | void | 删除全部段。 |

### 内容设置/查询

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setTitleForSegmentAtIndex(title, segment)` | title: string, segment: number | void | 设置段标题。 |
| `titleForSegmentAtIndex(segment)` | segment: number | string \| null | 获取段标题。 |
| `setImageForSegmentAtIndex(image, segment)` | image: UIImage, segment: number | void | 设置段图片。 |
| `imageForSegmentAtIndex(segment)` | segment: number | UIImage \| null | 获取段图片。 |
| `setWidthForSegmentAtIndex(width, segment)` | width: number, segment: number | void | 设置段宽度。 |
| `widthForSegmentAtIndex(segment)` | segment: number | number | 获取段宽度。 |
| `setContentOffsetForSegmentAtIndex(offset, segment)` | offset: { width: number, height: number }, segment: number | void | 设置段内容偏移。 |
| `contentOffsetForSegmentAtIndex(segment)` | segment: number | { width: number, height: number } | 获取段内容偏移。 |
| `setEnabledForSegmentAtIndex(enabled, segment)` | enabled: boolean, segment: number | void | 设置段是否可用。 |
| `isEnabledForSegmentAtIndex(segment)` | segment: number | boolean | 查询段是否可用。 |

### 外观资源

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setBackgroundImageForStateBarMetrics(backgroundImage, state, barMetrics)` | backgroundImage: UIImage, state: number, barMetrics: number | void | 设置背景图。 |
| `backgroundImageForStateBarMetrics(state, barMetrics)` | state: number, barMetrics: number | UIImage \| null | 获取背景图。 |
| `setDividerImageForLeftSegmentStateRightSegmentStateBarMetrics(dividerImage, leftState, rightState, barMetrics)` | dividerImage: UIImage, leftState: number, rightState: number, barMetrics: number | void | 设置分割线图。 |
| `dividerImageForLeftSegmentStateRightSegmentStateBarMetrics(leftState, rightState, barMetrics)` | leftState: number, rightState: number, barMetrics: number | UIImage \| null | 获取分割线图。 |
| `setTitleTextAttributesForState(attributes, state)` | attributes: NSDictionary, state: number | void | 设置标题文字属性。 |
| `titleTextAttributesForState(state)` | state: number | NSDictionary \| null | 获取标题文字属性。 |
| `setContentPositionAdjustmentForSegmentTypeBarMetrics(adjustment, segmentType, barMetrics)` | adjustment: object, segmentType: number, barMetrics: number | void | 设置内容位置微调。 |
| `contentPositionAdjustmentForSegmentTypeBarMetrics(segmentType, barMetrics)` | segmentType: number, barMetrics: number | object | 获取内容位置微调。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UISegmentedControl` 的类成员。

## 相关

- [UIControl](/reference/uikit/uicontrol/)
- [UIImage](/reference/uikit/uiimage/)
- [NSDictionary](/reference/foundation/ns-dictionary/)
