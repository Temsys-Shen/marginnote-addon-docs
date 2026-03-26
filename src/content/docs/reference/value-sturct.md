---
title: Value Sturct
description: 非globalThis但可在插件API中直接使用的运行时值类型。
---

本页汇总插件运行时可直接使用、但不属于`globalThis`标准内置对象清单的常见值类型。

## CGRect

矩形区域，包含位置和大小。

常见字段：

- `x`
- `y`
- `width`
- `height`

## CGPoint

二维坐标点。

常见字段：

- `x`
- `y`

## CGSize

二维尺寸。

常见字段：

- `width`
- `height`

## NSRange

范围结构，常用于位置和长度。

常见字段：

- `location`
- `length`

## UIEdgeInsets

上下左右内边距。

常见字段：

- `top`
- `left`
- `bottom`
- `right`

## CGAffineTransform

2D仿射变换矩阵。

常见字段：

- `a`
- `b`
- `c`
- `d`
- `tx`
- `ty`

## CATransform3D

3D变换矩阵。

常见字段：

- `m11`到`m44`
