---
title: UILongPressGestureRecognizer
description: 长按手势识别器。支持最小按压时长、允许移动距离、触点/点击次数要求。
---

`UILongPressGestureRecognizer` 继承自 [UIGestureRecognizer](/reference/uikit/uigesture-recognizer/)，用于识别“长按”手势。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `allowableMovement` | number | 允许的最大移动距离（超过后可能识别失败）。 |
| `minimumPressDuration` | number | 最小按压时长（秒）。 |
| `numberOfTapsRequired` | number | 所需点击次数。 |
| `numberOfTouchesRequired` | number | 所需触点数。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UILongPressGestureRecognizer` 的类成员。

## 相关

- [UIGestureRecognizer](/reference/uikit/uigesture-recognizer/)
