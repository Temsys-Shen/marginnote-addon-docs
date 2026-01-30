---
title: NSValue
description: 通用值对象封装（CGRect/CGPoint/CGSize/NSRange 等）。
---

`NSValue` 用于封装非对象类型的值（例如 `CGPoint`、`CGRect`、`CGSize`、`NSRange`、`CGAffineTransform`、`CATransform3D` 等），以便在集合中传递或作为返回值使用。

## 类成员 (Class members)

### `valueWithCGPoint`

从 CGPoint 创建。

```javascript
static valueWithCGPoint(point: any): NSValue
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `point` | `any` | 点（如 { x, y }）。 |

**Return Value:**

- `NSValue`: 新实例。

### `valueWithCGSize`

从 CGSize 创建。

```javascript
static valueWithCGSize(size: any): NSValue
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `size` | `any` | 尺寸（如 { width, height }）。 |

**Return Value:**

- `NSValue`: 新实例。

### `valueWithCGRect`

从 CGRect 创建。

```javascript
static valueWithCGRect(rect: any): NSValue
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rect` | `any` | 矩形（如 { x, y, width, height }）。 |

**Return Value:**

- `NSValue`: 新实例。

### `valueWithCGAffineTransform`

从 CGAffineTransform 创建。

```javascript
static valueWithCGAffineTransform(transform: any): NSValue
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `transform` | `any` | 仿射变换。 |

**Return Value:**

- `NSValue`: 新实例。

### `valueWithRange`

从 NSRange 创建。

```javascript
static valueWithRange(range: any): NSValue
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围（如 { location, length }）。 |

**Return Value:**

- `NSValue`: 新实例。

### `valueWithCATransform3D`

从 CATransform3D 创建（若环境中提供）。

```javascript
static valueWithCATransform3D(transform3d: any): NSValue
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `transform3d` | `any` | 3D 变换。 |

**Return Value:**

- `NSValue`: 新实例。

## 实例成员 (Instance members)

### `CGPointValue`

取 CGPoint 值。

```javascript
CGPointValue(): any
```

**Return Value:**

- `any`: 点（如 { x, y }）。

### `CGSizeValue`

取 CGSize 值。

```javascript
CGSizeValue(): any
```

**Return Value:**

- `any`: 尺寸（如 { width, height }）。

### `CGRectValue`

取 CGRect 值。

```javascript
CGRectValue(): any
```

**Return Value:**

- `any`: 矩形（如 { x, y, width, height }）。

### `CGAffineTransformValue`

取 CGAffineTransform 值。

```javascript
CGAffineTransformValue(): any
```

**Return Value:**

- `any`: 仿射变换。

### `rangeValue`

取 NSRange 值。

```javascript
rangeValue(): any
```

**Return Value:**

- `any`: 范围（如 { location, length }）。

### `CATransform3DValue`

取 CATransform3D 值。

```javascript
CATransform3DValue(): any
```

**Return Value:**

- `any`: 3D 变换。

## 相关

- `CGPoint` / `CGRect` / `CGSize` / `NSRange`（作为值类型）
