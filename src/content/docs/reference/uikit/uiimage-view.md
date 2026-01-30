---
title: UIImageView
description: 图片视图。支持设置 image/highlightedImage 与帧动画（animationImages）。
---

`UIImageView` 继承自 [UIView](/reference/uikit/uiview/)，用于显示图片，或通过 `animationImages` 播放简单的帧动画。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `image` | UIImage \| null | 当前显示的图片。 |
| `highlightedImage` | UIImage \| null | 高亮状态下的图片。 |
| `highlighted` | boolean | 是否高亮。 |
| `animationImages` | NSArray | 帧动画图片数组。 |
| `highlightedAnimationImages` | NSArray | 高亮状态下的帧动画图片数组。 |
| `animationDuration` | number | 动画时长（秒）。 |
| `animationRepeatCount` | number | 重复次数（0 通常表示无限）。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `startAnimating()` | — | void | 开始播放帧动画。 |
| `stopAnimating()` | — | void | 停止播放帧动画。 |
| `isAnimating()` | — | boolean | 是否正在播放。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UIImageView` 的类成员。

## 相关

- [UIView](/reference/uikit/uiview/)
- [UIImage](/reference/uikit/uiimage/)
- [NSArray](/reference/foundation/ns-array/)
