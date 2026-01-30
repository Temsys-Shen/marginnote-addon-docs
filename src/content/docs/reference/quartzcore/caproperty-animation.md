---
title: CAPropertyAnimation
description: 属性动画基类。支持按 keyPath 创建，并暴露 timingFunction、keyPath、from/to/by 等常用字段。
---

`CAPropertyAnimation` 继承自 [CAAnimation](/reference/quartzcore/caanimation/)，用于对图层的某个 `keyPath` 属性做动画（例如 `"opacity"`、`"position"` 等）。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `keyPath` | string \| null | 动画的 keyPath。 |
| `fromValue` / `toValue` / `byValue` | any | 起始/结束/增量值。 |
| `timingFunction` | CAMediaTimingFunction \| null | timingFunction。 |
| `values` | NSArray | values（关键帧/复用字段）。 |
| `keyTimes` | NSArray | keyTimes。 |
| `timingFunctions` | NSArray | timingFunctions。 |
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
| `animations` | NSArray | 子动画数组（在部分运行时复用字段）。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `animationWithKeyPath(path)` | path: string | CAPropertyAnimation | 按 keyPath 创建属性动画。 |

## 相关

- [CAAnimation](/reference/quartzcore/caanimation/)
- [CALayer](/reference/quartzcore/calayer/)
- [CAMediaTimingFunction](/reference/quartzcore/camedia-timing-function/)
- [CAValueFunction](/reference/quartzcore/cavalue-function/)
