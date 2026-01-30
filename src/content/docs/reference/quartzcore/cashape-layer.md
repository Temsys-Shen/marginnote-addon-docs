---
title: CAShapeLayer
description: 形状图层。支持 path、fill/stroke、线宽/线帽/连接样式、虚线与 strokeStart/strokeEnd。
---

`CAShapeLayer` 继承自 [CALayer](/reference/quartzcore/calayer/)，用于渲染矢量路径的描边与填充。插件运行时的 `path`/`fillColor`/`strokeColor` 等字段以“运行时对象”形式暴露，你可以把它们当作可传递的值来设置与读取。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `path` | any | 路径对象。 |
| `fillColor` | any | 填充颜色。 |
| `strokeColor` | any | 描边颜色。 |
| `fillRule` | string \| null | 填充规则。 |
| `lineWidth` | number | 线宽。 |
| `lineCap` | string \| null | 线帽样式。 |
| `lineJoin` | string \| null | 连接样式。 |
| `miterLimit` | number | 斜接限制。 |
| `lineDashPattern` | NSArray | 虚线样式数组。 |
| `lineDashPhase` | number | 虚线相位。 |
| `strokeStart` | number | 描边起始（0~1）。 |
| `strokeEnd` | number | 描边结束（0~1）。 |

## 类成员 (Class members)

当前运行时未额外暴露 `CAShapeLayer` 的类成员。

## 相关

- [CALayer](/reference/quartzcore/calayer/)
- [NSArray](/reference/foundation/ns-array/)
