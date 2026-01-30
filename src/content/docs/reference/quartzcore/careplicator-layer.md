---
title: CAReplicatorLayer
description: 复制图层。可设置 instanceCount、instanceTransform、instanceDelay 与颜色偏移等。
---

`CAReplicatorLayer` 继承自 [CALayer](/reference/quartzcore/calayer/)，用于自动复制其子图层并应用变换/延迟等效果，常用于实现重复图形、扫描线、波纹等视觉。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `instanceCount` | number | 复制数量。 |
| `instanceDelay` | number | 每个实例的时间延迟（秒）。 |
| `instanceTransform` | object | 实例变换。 |
| `preservesDepth` | boolean | 是否保持深度。 |
| `instanceColor` | any | 实例颜色（运行时类型为 id）。 |
| `instanceRedOffset` / `instanceGreenOffset` / `instanceBlueOffset` / `instanceAlphaOffset` | number | 颜色分量偏移。 |

## 类成员 (Class members)

当前运行时未额外暴露 `CAReplicatorLayer` 的类成员。

## 相关

- [CALayer](/reference/quartzcore/calayer/)
