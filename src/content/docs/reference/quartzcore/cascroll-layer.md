---
title: CAScrollLayer
description: 可滚动图层。提供 scrollToPoint/scrollToRect 方法。
---

`CAScrollLayer` 继承自 [CALayer](/reference/quartzcore/calayer/)，用于在图层级别提供滚动到指定点/矩形的能力。

## 实例成员 (Instance members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `scrollToPoint(p)` | p: { x: number, y: number } | void | 滚动到点。 |
| `scrollToRect(r)` | r: { x: number, y: number, width: number, height: number } | void | 滚动使矩形可见。 |

## 类成员 (Class members)

当前运行时未额外暴露 `CAScrollLayer` 的类成员。

## 相关

- [CALayer](/reference/quartzcore/calayer/)
