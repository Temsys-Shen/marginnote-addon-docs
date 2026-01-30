---
title: UIBezierPath
description: 贝塞尔路径（绘制形状/裁剪/命中测试）。
---

`UIBezierPath` 用于构造与绘制 2D 路径（线段、圆角矩形、圆弧等）。常见于自定义绘制或生成 `CGPath`。

## 类成员 (Class members)

### `bezierPath`

创建空路径。

```javascript
static bezierPath(): UIBezierPath
```

**Return Value:**

- `UIBezierPath`: 新路径实例。

### `bezierPathWithRect`

从矩形创建路径。

```javascript
static bezierPathWithRect(rect: any): UIBezierPath
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rect` | `any` | 矩形（如 { x, y, width, height }）。 |

**Return Value:**

- `UIBezierPath`: 新路径。

### `bezierPathWithOvalInRect`

从椭圆（内接矩形）创建路径。

```javascript
static bezierPathWithOvalInRect(rect: any): UIBezierPath
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rect` | `any` | 外接矩形。 |

**Return Value:**

- `UIBezierPath`: 新路径。

### `bezierPathWithRoundedRectCornerRadius`

从圆角矩形创建路径（四角同半径）。

```javascript
static bezierPathWithRoundedRectCornerRadius(rect: any, cornerRadius: number): UIBezierPath
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rect` | `any` | 矩形。 |
| `cornerRadius` | `number` | 圆角半径。 |

**Return Value:**

- `UIBezierPath`: 新路径。

### `bezierPathWithRoundedRectByRoundingCornersCornerRadii`

从圆角矩形创建路径（指定角与半径）。

```javascript
static bezierPathWithRoundedRectByRoundingCornersCornerRadii(rect: any, corners: number, cornerRadii: any): UIBezierPath
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rect` | `any` | 矩形。 |
| `corners` | `number` | 要圆角的角（位掩码）。 |
| `cornerRadii` | `any` | 圆角尺寸（如 { width, height }）。 |

**Return Value:**

- `UIBezierPath`: 新路径。

### `bezierPathWithArcCenterRadiusStartAngleEndAngleClockwise`

从圆弧创建路径。

```javascript
static bezierPathWithArcCenterRadiusStartAngleEndAngleClockwise(center: any, radius: number, startAngle: number, endAngle: number, clockwise: boolean): UIBezierPath
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `center` | `any` | 圆心（如 { x, y }）。 |
| `radius` | `number` | 半径。 |
| `startAngle` | `number` | 起始角度（弧度）。 |
| `endAngle` | `number` | 结束角度（弧度）。 |
| `clockwise` | `boolean` | 是否顺时针。 |

**Return Value:**

- `UIBezierPath`: 新路径。

### `bezierPathWithCGPath`

从 CGPath 创建路径。

```javascript
static bezierPathWithCGPath(CGPath: any): UIBezierPath
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `CGPath` | `any` | 已有 CGPath。 |

**Return Value:**

- `UIBezierPath`: 新路径。

## 实例成员 (Instance members)

`UIBezierPath` 的实例方法（如 moveTo/lineTo/append/closePath、fill/stroke、变换、命中测试等）较多，且组合方式灵活。建议通过站内搜索你关心的方法名来快速定位。

## 提示

- 具体绘制/变换/填充/描边等方法较多，建议用站内搜索成员名。
