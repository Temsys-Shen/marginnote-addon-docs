---
title: UIScrollView
description: 可滚动/缩放容器（常作为列表/脑图等视图的基础）。
---

`UIScrollView` 提供滚动与缩放能力。插件环境里你会在很多“可滚动视图”类型上见到它的属性与方法。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `contentOffset` | `any` | 内容偏移。 |
| `contentSize` | `any` | 内容尺寸。 |
| `contentInset` | `any` | 内容内边距。 |
| `scrollIndicatorInsets` | `any` | 滚动条内边距。 |
| `showsVerticalScrollIndicator` | `boolean` | 是否显示垂直滚动条。 |
| `showsHorizontalScrollIndicator` | `boolean` | 是否显示水平滚动条。 |
| `scrollEnabled` | `boolean` | 是否允许滚动。 |
| `pagingEnabled` | `boolean` | 是否分页滚动。 |
| `bounces` | `boolean` | 是否回弹。 |
| `alwaysBounceVertical` | `boolean` | 是否始终垂直回弹。 |
| `alwaysBounceHorizontal` | `boolean` | 是否始终水平回弹。 |
| `bouncesZoom` | `boolean` | 缩放是否回弹。 |
| `zoomScale` | `number` | 当前缩放比例。 |
| `minimumZoomScale` | `number` | 最小缩放。 |
| `maximumZoomScale` | `number` | 最大缩放。 |
| `decelerating` | `boolean` | 是否正在减速。 |
| `dragging` | `boolean` | 是否正在拖拽。 |
| `tracking` | `boolean` | 是否正在跟踪。 |
| `zooming` | `boolean` | 是否正在缩放。 |
| `zoomBouncing` | `boolean` | 是否正在缩放回弹。 |
| `decelerationRate` | `number` | 减速率。 |
| `directionalLockEnabled` | `boolean` | 是否方向锁定。 |
| `scrollsToTop` | `boolean` | 是否点击状态栏滚到顶部。 |
| `indicatorStyle` | `number` | 滚动条样式。 |
| `delaysContentTouches` | `boolean` | 是否延迟内容触摸。 |
| `canCancelContentTouches` | `boolean` | 是否可取消内容触摸。 |
| `delegate` | `any` | 委托。 |
| `panGestureRecognizer` | `UIPanGestureRecognizer` | 拖拽手势。 |
| `pinchGestureRecognizer` | `UIPinchGestureRecognizer` | 捏合手势。 |

### `setContentOffsetAnimated`

设置内容偏移（可选动画）。

```javascript
setContentOffsetAnimated(contentOffset: any, animated: boolean): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `contentOffset` | `any` | 目标偏移（如 { x, y }）。 |
| `animated` | `boolean` | 是否动画。 |

**Return Value:**

- 无。

### `scrollRectToVisibleAnimated`

滚动使矩形可见。

```javascript
scrollRectToVisibleAnimated(rect: any, animated: boolean): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rect` | `any` | 目标矩形。 |
| `animated` | `boolean` | 是否动画。 |

**Return Value:**

- 无。

### `flashScrollIndicators`

短暂显示滚动条。

```javascript
flashScrollIndicators(): void
```

**Return Value:**

- 无。

### `setZoomScaleAnimated`

设置缩放比例（可选动画）。

```javascript
setZoomScaleAnimated(scale: number, animated: boolean): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `scale` | `number` | 目标缩放。 |
| `animated` | `boolean` | 是否动画。 |

**Return Value:**

- 无。

### `zoomToRectAnimated`

缩放到指定矩形。

```javascript
zoomToRectAnimated(rect: any, animated: boolean): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rect` | `any` | 目标矩形。 |
| `animated` | `boolean` | 是否动画。 |

**Return Value:**

- 无。

## 类成员 (Class members)

当前运行时未额外暴露 `UIScrollView` 的类成员。
