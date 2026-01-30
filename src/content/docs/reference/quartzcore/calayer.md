---
title: CALayer
description: Core Animation 图层。提供几何/内容/阴影/圆角/边框等属性，并支持子图层管理、坐标转换与动画添加。
---

`CALayer` 是 Core Animation 的核心图层类型。它在插件运行时中通常作为 `UIView.layer` 的类型出现，也可以独立创建并组合为图层树。

## 实例成员 (Instance members)

### 几何与层级

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `visibleRect` | { x: number, y: number, width: number, height: number } | 只读。可见区域。 |
| `bounds` | { x: number, y: number, width: number, height: number } | bounds。 |
| `frame` | { x: number, y: number, width: number, height: number } | frame。 |
| `position` | { x: number, y: number } | position。 |
| `zPosition` | number | zPosition。 |
| `anchorPoint` | { x: number, y: number } | anchorPoint。 |
| `anchorPointZ` | number | anchorPointZ。 |
| `hidden` | boolean | 是否隐藏。 |
| `doubleSided` | boolean | 是否双面渲染。 |
| `geometryFlipped` | boolean | 是否几何翻转。 |
| `superlayer` | CALayer \| null | 只读。父图层。 |
| `sublayers` | NSArray | 子图层数组。 |
| `mask` | CALayer \| null | 蒙版图层。 |
| `masksToBounds` | boolean | 是否裁剪子内容。 |

### 内容与渲染

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `contents` | any | 内容对象。 |
| `contentsRect` | { x: number, y: number, width: number, height: number } | contentsRect。 |
| `contentsScale` | number | contentsScale。 |
| `contentsCenter` | { x: number, y: number, width: number, height: number } | contentsCenter。 |
| `minificationFilterBias` | number | 缩小过滤偏置。 |
| `opaque` | boolean | 是否不透明。 |
| `allowsEdgeAntialiasing` | boolean | 是否允许边缘抗锯齿。 |
| `backgroundColor` | UIColor \| null | 背景色。 |
| `cornerRadius` | number | 圆角半径。 |
| `borderWidth` | number | 边框宽度。 |
| `borderColor` | UIColor \| null | 边框色。 |
| `opacity` | number | 不透明度（0~1）。 |
| `compositingFilter` | any | 合成滤镜。 |
| `filters` | NSArray | 滤镜数组。 |
| `backgroundFilters` | NSArray | 背景滤镜数组。 |
| `shouldRasterize` | boolean | 是否栅格化。 |
| `rasterizationScale` | number | 栅格化 scale。 |
| `shadowColor` | UIColor \| null | 阴影颜色。 |
| `shadowOpacity` | number | 阴影不透明度。 |
| `shadowOffset` | { width: number, height: number } | 阴影偏移。 |
| `shadowRadius` | number | 阴影模糊半径。 |

### 滚动与显示/布局

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `scrollPoint(p)` | p: { x: number, y: number } | void | 滚动到点。 |
| `scrollRectToVisible(r)` | r: { x: number, y: number, width: number, height: number } | void | 滚动使矩形可见。 |
| `display()` | — | void | 触发显示。 |
| `setNeedsDisplay()` | — | void | 标记需要重绘。 |
| `setNeedsDisplayInRect(r)` | r: { x: number, y: number, width: number, height: number } | void | 标记某区域需要重绘。 |
| `needsDisplay()` | — | boolean | 是否需要重绘。 |
| `displayIfNeeded()` | — | void | 若需要则显示。 |
| `setNeedsLayout()` | — | void | 标记需要布局。 |
| `needsLayout()` | — | boolean | 是否需要布局。 |
| `layoutIfNeeded()` | — | void | 若需要则布局。 |
| `layoutSublayers()` | — | void | 布局子图层。 |
| `preferredFrameSize()` | — | { width: number, height: number } | 推荐 frame size。 |
| `drawInContext(ctx)` | ctx: any | void | 在上下文绘制。 |
| `renderInContext(ctx)` | ctx: any | void | 渲染到上下文。 |

### 图层树管理

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `removeFromSuperlayer()` | — | void | 从父图层移除。 |
| `addSublayer(layer)` | layer: CALayer | void | 添加子图层。 |
| `insertSublayerAtIndex(layer, idx)` | layer: CALayer, idx: number | void | 插入子图层到指定索引。 |
| `insertSublayerBelow(layer, sibling)` | layer: CALayer, sibling: CALayer | void | 插入到某 sibling 下方。 |
| `insertSublayerAbove(layer, sibling)` | layer: CALayer, sibling: CALayer | void | 插入到某 sibling 上方。 |
| `replaceSublayerWith(layer, layer2)` | layer: CALayer, layer2: CALayer | void | 替换子图层。 |

### 坐标/时间转换与命中测试

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `convertPointFromLayer(p, l)` | p: { x: number, y: number }, l: CALayer | { x: number, y: number } | 从某图层坐标系转换点。 |
| `convertPointToLayer(p, l)` | p: { x: number, y: number }, l: CALayer | { x: number, y: number } | 转换点到某图层坐标系。 |
| `convertRectFromLayer(r, l)` | r: { x: number, y: number, width: number, height: number }, l: CALayer | { x: number, y: number, width: number, height: number } | 从某图层坐标系转换矩形。 |
| `convertRectToLayer(r, l)` | r: { x: number, y: number, width: number, height: number }, l: CALayer | { x: number, y: number, width: number, height: number } | 转换矩形到某图层坐标系。 |
| `convertTimeFromLayer(t, l)` | t: number, l: CALayer | number | 从某图层转换时间。 |
| `convertTimeToLayer(t, l)` | t: number, l: CALayer | number | 转换时间到某图层。 |
| `hitTest(p)` | p: { x: number, y: number } | CALayer \| null | 命中测试。 |
| `containsPoint(p)` | p: { x: number, y: number } | boolean | 点是否在图层内。 |

### 动画

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `addAnimationForKey(anim, key)` | anim: CAAnimation, key: string \| null | void | 添加动画。 |
| `removeAllAnimations()` | — | void | 移除全部动画。 |
| `removeAnimationForKey(key)` | key: string | void | 按 key 移除动画。 |
| `animationKeys()` | — | NSArray | 当前动画 key 列表。 |
| `animationForKey(key)` | key: string | CAAnimation \| null | 获取某 key 的动画。 |
| `actionForKey(event)` | event: string | any | 查询某事件的 action。 |

### 其他

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `init()` | — | CALayer | 初始化。 |
| `presentationLayer()` | — | any | 返回 presentation layer（若存在）。 |
| `modelLayer()` | — | any | 返回 model layer（若存在）。 |
| `shouldArchiveValueForKey(key)` | key: string | boolean | 是否归档某 key。 |
| `affineTransform()` | — | object | 获取仿射变换。 |
| `setAffineTransform(m)` | m: object | void | 设置仿射变换。 |
| `contentsAreFlipped()` | — | boolean | 内容是否翻转。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `layer()` | — | CALayer | 创建图层。 |
| `defaultValueForKey(key)` | key: string | any | 默认值。 |
| `needsDisplayForKey(key)` | key: string | boolean | 某 key 变化是否需要重绘。 |
| `defaultActionForKey(event)` | event: string | any | 某事件的默认 action。 |

## 相关

- [CAAnimation](/reference/quartzcore/caanimation/)
- [CATransaction](/reference/quartzcore/catransaction/)
- [UIView](/reference/uikit/uiview/)（`UIView.layer`）
- [NSArray](/reference/foundation/ns-array/)
