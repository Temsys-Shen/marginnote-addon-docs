---
title: CAAnimationGroup
description: 动画组。可组合多段动画，并配置 timingFunction、keyPath、from/to/by 等常见字段。
---

`CAAnimationGroup` 继承自 [CAAnimation](/reference/quartzcore/caanimation/)，用于把多段动画组合为一个整体并一起添加到 `CALayer` 上。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `animations` | NSArray | 子动画数组。 |
| `keyPath` | string \| null | keyPath（若该组被用作属性动画时）。 |
| `fromValue` / `toValue` / `byValue` | any | 起始/结束/增量值。 |
| `values` | NSArray | 关键帧 values（若运行时复用字段）。 |
| `keyTimes` | NSArray | 关键时间点数组。 |
| `timingFunction` | CAMediaTimingFunction \| null | timingFunction。 |
| `timingFunctions` | NSArray | 多段 timingFunctions。 |
| `calculationMode` | string \| null | 计算模式。 |
| `rotationMode` | string \| null | 旋转模式。 |
| `type` | string \| null | 类型。 |
| `subtype` | string \| null | 子类型。 |
| `path` | any | 路径对象。 |
| `valueFunction` | CAValueFunction \| null | valueFunction。 |
| `delegate` | id | delegate 对象。 |
| `filter` | id | filter。 |
| `startProgress` / `endProgress` | number | 起止进度。 |
| `tensionValues` / `continuityValues` / `biasValues` | NSArray | 张力/连续性/偏置数组。 |
| `additive` | boolean | 是否 additive。 |
| `cumulative` | boolean | 是否 cumulative。 |
| `removedOnCompletion` | boolean | 是否在完成后移除。 |

## 类成员 (Class members)

当前运行时未额外暴露 `CAAnimationGroup` 的类成员。

## 相关

- [CAAnimation](/reference/quartzcore/caanimation/)
- [CALayer](/reference/quartzcore/calayer/)
- [CAMediaTimingFunction](/reference/quartzcore/camedia-timing-function/)
- [CAValueFunction](/reference/quartzcore/cavalue-function/)
