---
title: UIGestureRecognizer
description: 手势识别器基类（tap/pan/pinch 等的基础）。
---

`UIGestureRecognizer` 是手势识别器基类，常见子类包括 tap/pan/pinch/longPress/rotation/swipe 等。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `state` | `number` | 手势状态。 |
| `enabled` | `boolean` | 是否启用。 |
| `view` | `UIView` | 附加的视图。 |
| `delegate` | `any` | 委托。 |
| `cancelsTouchesInView` | `boolean` | 是否取消视图中的触摸。 |
| `delaysTouchesBegan` | `boolean` | 是否延迟 touchesBegan。 |
| `delaysTouchesEnded` | `boolean` | 是否延迟 touchesEnded。 |

### `initWithTargetAction`

用 target 与 action 初始化。

```javascript
initWithTargetAction(target: any, action: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `target` | `any` | 目标对象。 |
| `action` | `string` | 方法名。 |

**Return Value:**

- 无。

### `addTargetAction`

添加 target-action。

```javascript
addTargetAction(target: any, action: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `target` | `any` | 目标对象。 |
| `action` | `string` | 方法名。 |

**Return Value:**

- 无。

### `removeTargetAction`

移除 target-action。

```javascript
removeTargetAction(target: any, action: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `target` | `any` | 目标对象。 |
| `action` | `string` | 方法名。 |

**Return Value:**

- 无。

### `requireGestureRecognizerToFail`

要求另一手势失败后才识别。

```javascript
requireGestureRecognizerToFail(otherGestureRecognizer: UIGestureRecognizer): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherGestureRecognizer` | `UIGestureRecognizer` | 另一手势识别器。 |

**Return Value:**

- 无。

### `locationInView`

手势在视图中的位置。

```javascript
locationInView(view: UIView): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `view` | `UIView` | 参考视图。 |

**Return Value:**

- `any`: 点（如 { x, y }）。

### `numberOfTouches`

当前触摸点数。

```javascript
numberOfTouches(): number
```

**Return Value:**

- `number`: 触摸点数。

### `locationOfTouchInView`

指定触摸在视图中的位置。

```javascript
locationOfTouchInView(touchIndex: number, view: UIView): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `touchIndex` | `number` | 触摸索引。 |
| `view` | `UIView` | 参考视图。 |

**Return Value:**

- `any`: 点（如 { x, y }）。

## 类成员 (Class members)

当前运行时未额外暴露 `UIGestureRecognizer` 的类成员。

## 相关

- `UITapGestureRecognizer`、`UIPanGestureRecognizer`、`UIPinchGestureRecognizer`、`UILongPressGestureRecognizer`、`UIRotationGestureRecognizer`、`UISwipeGestureRecognizer`
