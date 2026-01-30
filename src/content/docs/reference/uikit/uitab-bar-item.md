---
title: UITabBarItem
description: Tab 项。支持 badgeValue、selectedImage，以及设置“完成态”选中/未选中图片与标题偏移。
---

`UITabBarItem` 继承自 [UIBarItem](/reference/uikit/uibar-item/)，表示标签栏中的一个条目。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `selectedImage` | UIImage \| null | 选中态图片。 |
| `badgeValue` | string \| null | badge 文本。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setFinishedSelectedImageWithFinishedUnselectedImage(selectedImage, unselectedImage)` | selectedImage: UIImage, unselectedImage: UIImage | void | 设置“完成态”的选中/未选中图片。 |
| `finishedSelectedImage()` | — | UIImage \| null | 获取完成态选中图片。 |
| `finishedUnselectedImage()` | — | UIImage \| null | 获取完成态未选中图片。 |
| `setTitlePositionAdjustment(adjustment)` | adjustment: object | void | 设置标题位置偏移。 |
| `titlePositionAdjustment()` | — | object | 获取标题位置偏移。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UITabBarItem` 的类成员。

## 相关

- [UIBarItem](/reference/uikit/uibar-item/)
- [UIImage](/reference/uikit/uiimage/)
