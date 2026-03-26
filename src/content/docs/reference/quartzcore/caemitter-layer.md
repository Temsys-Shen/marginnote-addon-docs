---
title: CAEmitterLayer
description: 粒子发射图层。用于粒子特效渲染。
---

`CAEmitterLayer`是QuartzCore粒子发射图层，用于配置发射位置、形状、速率与粒子单元集合。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `emitterPosition` | [`CGPoint`](/reference/value-sturct/#cgpoint) | 发射器位置。 |
| `emitterSize` | [`CGSize`](/reference/value-sturct/#cgsize) | 发射器尺寸。 |
| `emitterShape` | string | 发射形状。 |
| `emitterMode` | string | 发射模式。 |
| `emitterDepth` | number | 发射深度。 |
| `birthRate` | number | 出生速率。 |
| `lifetime` | number | 生命周期。 |
| `velocity` | number | 速度。 |
| `scale` | number | 缩放。 |
| `spin` | number | 旋转速度。 |
| `emitterCells` | NSArray | 粒子单元数组。 |
| `preservesDepth` | boolean | 是否保留深度。 |
| `renderMode` | string | 渲染模式。 |
| `seed` | number | 随机种子。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `layer()` | — | id | 创建图层实例。 |
| `defaultValueForKey(key)` | key: string | any | 返回属性默认值。 |
| `needsDisplayForKey(key)` | key: string | boolean | 判断属性变化是否触发重绘。 |

## 运行时建议

- 需要把图层挂到可见layer树才会看到效果。
- `emitterCells`配置不兼容时常见“无效果不报错”，建议先用最小配置验证链路。

## 相关

- [CALayer](/reference/quartzcore/calayer/)
