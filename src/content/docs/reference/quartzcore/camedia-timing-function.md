---
title: CAMediaTimingFunction
description: 动画时间函数。支持按名称创建或用四个控制点创建，并可读取控制点。
---

`CAMediaTimingFunction` 用于描述动画的时间曲线（缓入/缓出等）。它常用于 `CAPropertyAnimation.timingFunction` 或 `CATransaction.setAnimationTimingFunction(...)`。

## 实例成员 (Instance members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `initWithControlPoints(c1x, c1y, c2x, c2y)` | c1x: number, c1y: number, c2x: number, c2y: number | CAMediaTimingFunction | 以四个控制点初始化。 |
| `getControlPointAtIndexValues(idx, ptr)` | idx: number, ptr: any | void | 读取指定索引的控制点值（运行时以指针形式暴露；通常无需直接调用）。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `functionWithName(name)` | name: string | CAMediaTimingFunction | 以名称创建（例如 `"linear"`、`"easeIn"` 等）。 |
| `functionWithControlPoints(c1x, c1y, c2x, c2y)` | c1x: number, c1y: number, c2x: number, c2y: number | CAMediaTimingFunction | 以四个控制点创建。 |

## 相关

- [CATransaction](/reference/quartzcore/catransaction/)
- [CAAnimationGroup](/reference/quartzcore/caanimation-group/)
