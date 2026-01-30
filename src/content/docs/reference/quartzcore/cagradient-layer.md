---
title: CAGradientLayer
description: 渐变图层。可配置 colors/locations 与 startPoint/endPoint，并以 type 决定渐变类型。
---

`CAGradientLayer` 继承自 [CALayer](/reference/quartzcore/calayer/)，用于渲染线性/径向等渐变效果（具体类型由 `type` 决定）。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `colors` | NSArray | 渐变颜色数组。 |
| `locations` | NSArray | 渐变位置数组（0~1）。 |
| `startPoint` | { x: number, y: number } | 起点（单位坐标）。 |
| `endPoint` | { x: number, y: number } | 终点（单位坐标）。 |
| `type` | string \| null | 渐变类型标识。 |

## 类成员 (Class members)

当前运行时未额外暴露 `CAGradientLayer` 的类成员。

## 相关

- [CALayer](/reference/quartzcore/calayer/)
- [NSArray](/reference/foundation/ns-array/)
