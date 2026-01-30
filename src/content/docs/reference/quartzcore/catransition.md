---
title: CATransition
description: 转场动画。通过 type/subtype 等字段描述转场类型，并支持 timingFunction、removedOnCompletion 等。
---

`CATransition` 继承自 [CAAnimation](/reference/quartzcore/caanimation/)，用于描述层的转场动画（例如淡入淡出、推入等）。插件运行时暴露了常见动画配置字段。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `type` | string \| null | 转场类型标识。 |
| `subtype` | string \| null | 转场子类型标识。 |
| `timingFunction` | CAMediaTimingFunction \| null | timingFunction。 |
| `delegate` | id | delegate 对象。 |
| `filter` | id | filter。 |
| `keyPath` | string \| null | keyPath（若运行时复用字段）。 |
| `fromValue` / `toValue` / `byValue` | any | 起始/结束/增量值（若运行时复用字段）。 |
| `values` | NSArray | values（若运行时复用字段）。 |
| `keyTimes` | NSArray | keyTimes。 |
| `timingFunctions` | NSArray | timingFunctions。 |
| `calculationMode` | string \| null | 计算模式。 |
| `rotationMode` | string \| null | 旋转模式。 |
| `path` | any | path。 |
| `valueFunction` | CAValueFunction \| null | valueFunction。 |
| `startProgress` / `endProgress` | number | 起止进度。 |
| `tensionValues` / `continuityValues` / `biasValues` | NSArray | 张力/连续性/偏置数组。 |
| `additive` | boolean | 是否 additive。 |
| `cumulative` | boolean | 是否 cumulative。 |
| `removedOnCompletion` | boolean | 是否在完成后移除。 |
| `animations` | NSArray | 子动画数组（若运行时复用字段）。 |

## 类成员 (Class members)

当前运行时未额外暴露 `CATransition` 的类成员。

## 相关

- [CAAnimation](/reference/quartzcore/caanimation/)
- [CALayer](/reference/quartzcore/calayer/)
- [CAMediaTimingFunction](/reference/quartzcore/camedia-timing-function/)
- [CAValueFunction](/reference/quartzcore/cavalue-function/)
