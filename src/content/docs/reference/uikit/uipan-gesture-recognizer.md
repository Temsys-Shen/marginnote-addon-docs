---
title: UIPanGestureRecognizer
description: 平移手势识别器。支持查询/设置 translation，并获取 velocity。
---

`UIPanGestureRecognizer` 继承自 [UIGestureRecognizer](/reference/uikit/uigesture-recognizer/)，用于识别拖拽/平移手势。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `minimumNumberOfTouches` | number | 最小触点数。 |
| `maximumNumberOfTouches` | number | 最大触点数。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `translationInView(view)` | view: UIView \| null | { x: number, y: number } | 获取平移量。 |
| `setTranslationInView(translation, view)` | translation: { x: number, y: number }, view: UIView \| null | void | 设置平移量。 |
| `velocityInView(view)` | view: UIView \| null | { x: number, y: number } | 获取速度。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UIPanGestureRecognizer` 的类成员。

## 相关

- [UIGestureRecognizer](/reference/uikit/uigesture-recognizer/)
- [UIView](/reference/uikit/uiview/)
