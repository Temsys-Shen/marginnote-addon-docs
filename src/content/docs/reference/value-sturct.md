---
title: Value Sturct
description: 非globalThis但可在插件API中直接使用的值类型与字段定义。
---

本页汇总插件环境可直接使用、但不属于`globalThis`标准内置对象清单的值类型。

## CGRect

矩形区域，包含位置和大小。

字段定义：

| 字段 | 类型 |
| :--- | :--- |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

## CGPoint

二维坐标点。

字段定义：

| 字段 | 类型 |
| :--- | :--- |
| `x` | `number` |
| `y` | `number` |

## CGSize

二维尺寸。

字段定义：

| 字段 | 类型 |
| :--- | :--- |
| `width` | `number` |
| `height` | `number` |

## NSRange

范围结构，用于位置和长度。

字段定义：

| 字段 | 类型 |
| :--- | :--- |
| `location` | `number` |
| `length` | `number` |

## UIEdgeInsets

上下左右内边距。

字段定义：

| 字段 | 类型 |
| :--- | :--- |
| `top` | `number` |
| `left` | `number` |
| `bottom` | `number` |
| `right` | `number` |

## CGAffineTransform

2D仿射变换矩阵。

字段定义：

| 字段 | 类型 |
| :--- | :--- |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `tx` | `number` |
| `ty` | `number` |

## CATransform3D

3D变换矩阵。

字段定义：

| 字段 | 类型 |
| :--- | :--- |
| `m11` | `number` |
| `m12` | `number` |
| `m13` | `number` |
| `m14` | `number` |
| `m21` | `number` |
| `m22` | `number` |
| `m23` | `number` |
| `m24` | `number` |
| `m31` | `number` |
| `m32` | `number` |
| `m33` | `number` |
| `m34` | `number` |
| `m41` | `number` |
| `m42` | `number` |
| `m43` | `number` |
| `m44` | `number` |
