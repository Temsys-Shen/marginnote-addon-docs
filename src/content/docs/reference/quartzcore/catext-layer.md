---
title: CATextLayer
description: 文本图层。支持 string/font/fontSize、alignmentMode、foregroundColor 与 wrapped。
---

`CATextLayer` 继承自 [CALayer](/reference/quartzcore/calayer/)，用于在图层中渲染文本。插件运行时的 `string` 可为字符串或富文本等运行时对象。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `string` | any | 文本内容（可为字符串或富文本对象）。 |
| `font` | any | 字体对象（运行时类型为 id）。 |
| `fontSize` | number | 字号。 |
| `foregroundColor` | any | 前景色（运行时类型为 id）。 |
| `alignmentMode` | string \| null | 对齐方式。 |
| `truncationMode` | string \| null | 截断模式。 |
| `wrapped` | boolean | 是否自动换行。 |

## 类成员 (Class members)

当前运行时未额外暴露 `CATextLayer` 的类成员。

## 相关

- [CALayer](/reference/quartzcore/calayer/)
