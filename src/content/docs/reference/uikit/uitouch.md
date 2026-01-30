---
title: UITouch
description: 触摸对象。可查询 phase/timestamp/tapCount 与 view/window，并获取当前/上一位置。
---

`UITouch` 表示一次触摸点。插件运行时暴露了 UIKit 常用字段与位置查询方法。

> 注意：运行时还在此对象上暴露了一组 SpriteKit（`SKNode`）相关字段与方法（例如 `position`、`xScale` 等）。这通常是桥接层的复用/混入结果，**并不意味着每个 touch 都可以当作 SpriteKit 节点使用**。实际使用中建议把它当作触摸对象，仅使用与触摸相关的成员。

## 实例成员 (Instance members)

### 属性（触摸相关）

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `phase` | number | 只读。触摸阶段。 |
| `timestamp` | number | 只读。时间戳。 |
| `tapCount` | number | 只读。点击次数。 |
| `view` | UIView \| null | 只读。触摸所在 view。 |
| `window` | UIWindow \| null | 只读。触摸所在 window。 |
| `gestureRecognizers` | NSArray | 只读。关联的手势识别器列表。 |

### 方法（触摸位置）

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `locationInView(view)` | view: UIView \| null | { x: number, y: number } | 返回在指定 view 坐标系下的位置。 |
| `previousLocationInView(view)` | view: UIView \| null | { x: number, y: number } | 返回上一时刻位置。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UITouch` 的类成员。

## 相关

- [UIEvent](/reference/uikit/uievent/)
- [UIView](/reference/uikit/uiview/)
- [UIWindow](/reference/uikit/uiwindow/)
- [NSArray](/reference/foundation/ns-array/)
