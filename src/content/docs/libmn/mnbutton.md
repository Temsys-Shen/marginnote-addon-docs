---
title: MNButton
description: LibMN中的MNButton对象API文档。
---

`MNButton`是封装UIButton的对象，提供按钮创建、样式设置、事件绑定和手势注册等功能，构建和管理按钮组件。

## 构造函数

```ts
new MNButton(config?: {})
```

构造一个新的MNButton实例。

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `config` | `{}` | 否 | 配置对象。 |

## 类成员(Class members)

### 属性

| 字段名 | 类型 | 说明 |
|:-------|:-----|:-----|
| `highlightColor` | `UIColor` | 高亮颜色。 |
| `builtInProperty` | `string[]` | 内置属性。 |

### 方法
#### `hexColorAlpha`

##### 类型

```ts
static hexColorAlpha(hex: string, alpha: number): UIColor
```

##### 说明

根据十六进制颜色和透明度创建UIColor。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `hex` | `string` | 是 | 十六进制颜色字符串。 |
| `alpha` | `number` | 是 | 透明度值。 |

##### 返回值

- 类型:`UIColor`
- 语义:返回创建的UIColor对象。
#### `hexColor`

##### 类型

```ts
static hexColor(hex: string): UIColor
```

##### 说明

根据十六进制颜色创建UIColor。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `hex` | `string` | 是 | 十六进制颜色字符串。 |

##### 返回值

- 类型:`UIColor`
- 语义:返回创建的UIColor对象。
#### `setColor`

##### 类型

```ts
static setColor(button: UIButton, hexColor: string, alpha?: number): void
```

##### 说明

设置按钮颜色。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `button` | `UIButton` | 是 | 按钮对象。 |
| `hexColor` | `string` | 是 | 十六进制颜色字符串。 |
| `alpha` | `number` | 否 | 透明度值。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。
#### `setTitle`

##### 类型

```ts
static setTitle(button: UIButton, title: string, font?: number, bold?: boolean): void
```

##### 说明

设置按钮标题。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `button` | `UIButton` | 是 | 按钮对象。 |
| `title` | `string` | 是 | 标题文本。 |
| `font` | `number` | 否 | 字体大小。 |
| `bold` | `boolean` | 否 | 是否粗体。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。
#### `setImage`

##### 类型

```ts
static setImage(button: UIButton, path: string|NSData): void
```

##### 说明

设置按钮图像。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `button` | `UIButton` | 是 | 按钮对象。 |
| `path` | `string\|NSData` | 是 | 图像路径或NSData对象。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。
#### `setOpacity`

##### 类型

```ts
static setOpacity(button: UIButton, opacity: number): void
```

##### 说明

设置按钮透明度。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `button` | `UIButton` | 是 | 按钮对象。 |
| `opacity` | `number` | 是 | 透明度值。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。
#### `setRadius`

##### 类型

```ts
static setRadius(button: UIButton, radius?: number): void
```

##### 说明

设置按钮圆角半径。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `button` | `UIButton` | 是 | 按钮对象。 |
| `radius` | `number` | 否 | 圆角半径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。
#### `setConfig`

##### 类型

```ts
static setConfig(button: UIButton, config: { color: string, alpha: number, opacity: number, radius: number }): void
```

##### 说明

设置按钮配置。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `button` | `UIButton` | 是 | 按钮对象。 |
| `config` | `{ color: string, alpha: number, opacity: number, radius: number }` | 是 | 配置对象。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。
#### `addClickAction`

##### 类型

```ts
static addClickAction(button: UIButton, target: object, selector: string): void
```

##### 说明

添加点击动作。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `button` | `UIButton` | 是 | 按钮对象。 |
| `target` | `object` | 是 | 目标对象。 |
| `selector` | `string` | 是 | 选择器方法名。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。
#### `addPanGesture`

##### 类型

```ts
static addPanGesture(button: UIButton, target: object, selector: string): void
```

##### 说明

添加平移手势。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `button` | `UIButton` | 是 | 按钮对象。 |
| `target` | `object` | 是 | 目标对象。 |
| `selector` | `string` | 是 | 选择器方法名。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。
#### `addLongPressGesture`

##### 类型

```ts
static addLongPressGesture(button: UIButton, target: object, selector: string): void
```

##### 说明

添加长按手势。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `button` | `UIButton` | 是 | 按钮对象。 |
| `target` | `object` | 是 | 目标对象。 |
| `selector` | `string` | 是 | 选择器方法名。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。
#### `addSwipeGesture`

##### 类型

```ts
static addSwipeGesture(button: UIButton, target: object, selector: string): void
```

##### 说明

添加滑动手势。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `button` | `UIButton` | 是 | 按钮对象。 |
| `target` | `object` | 是 | 目标对象。 |
| `selector` | `string` | 是 | 选择器方法名。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

## 实例成员(Instance members)

### 属性

| 字段名 | 类型 | 说明 |
|:-------|:-----|:-----|
| `superview` | `UIView` | 父视图。 |
| `frame` | `CGRect` | 框架。 |
| `bounds` | `CGRect` | 边界。 |
| `center` | `CGPoint` | 中心点。 |
| `window` | `UIWindow\|undefined` | 窗口。 |
| `gestureRecognizers` | `NSArray<UIGestureRecognizer>\|UIGestureRecognizer[]\|undefined` | 手势识别器。 |
| `borderColor` | `CGColor` | 边框颜色。 |
| `borderWidth` | `number` | 边框宽度。 |
| `backgroundColor` | `UIColor` | 背景颜色。 |
| `color` | `UIColor\|string` | 颜色。 |
| `colorString` | `string` | 颜色字符串。 |
| `hidden` | `boolean` | 是否隐藏。 |
| `autoresizingMask` | `number` | 自动调整掩码。 |
| `opacity` | `number` | 透明度。 |
| `radius` | `number` | 圆角半径。 |
| `cornerRadius` | `number` | 圆角半径。 |
| `currentTitle` | `string` | 当前标题。 |
| `title` | `string` | 标题。 |
| `currentTitleColor` | `UIColor` | 当前标题颜色。 |
| `currentTitleColorString` | `string` | 当前标题颜色字符串。 |
| `titleColor` | `UIColor` | 标题颜色。 |
| `titleColorString` | `string` | 标题颜色字符串。 |
| `currentImage` | `UIImage` | 当前图像。 |
| `subviews` | `NSArray<UIView>\|UIView[]` | 子视图。 |
| `font` | `UIFont` | 字体。 |
| `masksToBounds` | `boolean` | 是否裁剪到边界。 |

### 方法

#### `setFrame`

##### 类型

```ts
setFrame(x: number, y: number, width: number, height: number): void
```

##### 说明

设置按钮的位置和尺寸。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `x` | `number` | 是 | x坐标。 |
| `y` | `number` | 是 | y坐标。 |
| `width` | `number` | 是 | 宽度。 |
| `height` | `number` | 是 | 高度。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `setColor`

##### 类型

```ts
setColor(hexColor: string, alpha?: number): void
```

##### 说明

设置按钮颜色。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `hexColor` | `string` | 是 | 十六进制颜色字符串。 |
| `alpha` | `number` | 否 | 透明度值。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `setImageForState`

##### 类型

```ts
setImageForState(image: UIImage, state?: number): void
```

##### 说明

为指定状态设置按钮图像。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `image` | `UIImage` | 是 | 图像对象。 |
| `state` | `number` | 否 | 按钮状态。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `setImage`

##### 类型

```ts
setImage(image: UIImage, state?: number): void
```

##### 说明

设置按钮图像。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `image` | `UIImage` | 是 | 图像对象。 |
| `state` | `number` | 否 | 按钮状态。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `setTitleColorForState`

##### 类型

```ts
setTitleColorForState(color: UIColor, state?: number): void
```

##### 说明

为指定状态设置标题颜色。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `color` | `UIColor` | 是 | 颜色对象。 |
| `state` | `number` | 否 | 按钮状态。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `setTitleColor`

##### 类型

```ts
setTitleColor(color: UIColor, state?: number): void
```

##### 说明

设置标题颜色。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `color` | `UIColor` | 是 | 颜色对象。 |
| `state` | `number` | 否 | 按钮状态。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `setTitleForState`

##### 类型

```ts
setTitleForState(title: string, state?: number): void
```

##### 说明

为指定状态设置标题。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `title` | `string` | 是 | 标题文本。 |
| `state` | `number` | 否 | 按钮状态。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `setTitle`

##### 类型

```ts
setTitle(title: string, state?: number): void
```

##### 说明

设置按钮标题。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `title` | `string` | 是 | 标题文本。 |
| `state` | `number` | 否 | 按钮状态。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `addSubview`

##### 类型

```ts
addSubview(view: UIView): void
```

##### 说明

添加子视图。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `view` | `UIView` | 是 | 子视图对象。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `removeFromSuperview`

##### 类型

```ts
removeFromSuperview(): void
```

##### 说明

从父视图中移除。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `bringSubviewToFront`

##### 类型

```ts
bringSubviewToFront(view: UIView): void
```

##### 说明

将子视图移到最前面。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `view` | `UIView` | 是 | 子视图对象。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `sendSubviewToBack`

##### 类型

```ts
sendSubviewToBack(view: UIView): void
```

##### 说明

将子视图移到最后面。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `view` | `UIView` | 是 | 子视图对象。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `isDescendantOfView`

##### 类型

```ts
isDescendantOfView(view: UIView): boolean
```

##### 说明

判断是否是指定视图的后代。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `view` | `UIView` | 是 | 父视图对象。 |

##### 返回值

- 类型:`boolean`
- 语义:返回是否是后代视图。

#### `isDescendantOfStudyView`

##### 类型

```ts
isDescendantOfStudyView(): boolean
```

##### 说明

判断是否是学习视图的后代。

##### 返回值

- 类型:`boolean`
- 语义:返回是否是学习视图的后代。

#### `isDescendantOfCurrentWindow`

##### 类型

```ts
isDescendantOfCurrentWindow(): boolean
```

##### 说明

判断是否是当前窗口的后代。

##### 返回值

- 类型:`boolean`
- 语义:返回是否是当前窗口的后代。

#### `setNeedsLayout`

##### 类型

```ts
setNeedsLayout(): void
```

##### 说明

标记需要重新布局。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `layoutIfNeeded`

##### 类型

```ts
layoutIfNeeded(): void
```

##### 说明

立即执行布局。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `layoutSubviews`

##### 类型

```ts
layoutSubviews(): void
```

##### 说明

布局子视图。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `setNeedsDisplay`

##### 类型

```ts
setNeedsDisplay(): void
```

##### 说明

标记需要重新显示。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `sizeThatFits`

##### 类型

```ts
sizeThatFits(size: CGSize): CGSize
```

##### 说明

计算适合的尺寸。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `size` | `CGSize` | 是 | 建议尺寸。 |

##### 返回值

- 类型:`CGSize`
- 语义:返回适合的尺寸。

#### `addTargetActionForControlEvents`

##### 类型

```ts
addTargetActionForControlEvents(target: object, action: string, controlEvent: UIControlEvents): void
```

##### 说明

为控制事件添加目标动作。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `target` | `object` | 是 | 目标对象。 |
| `action` | `string` | 是 | 动作方法名。 |
| `controlEvent` | `UIControlEvents` | 是 | 控制事件。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `removeTargetActionForControlEvents`

##### 类型

```ts
removeTargetActionForControlEvents(target: object, action: string, controlEvent: UIControlEvents): void
```

##### 说明

移除控制事件的目标动作。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `target` | `object` | 是 | 目标对象。 |
| `action` | `string` | 是 | 动作方法名。 |
| `controlEvent` | `UIControlEvents` | 是 | 控制事件。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `addClickAction`

##### 类型

```ts
addClickAction(target: object, selector: string): void
```

##### 说明

添加点击动作。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `target` | `object` | 是 | 目标对象。 |
| `selector` | `string` | 是 | 选择器方法名。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `addGestureRecognizer`

##### 类型

```ts
addGestureRecognizer(gestureRecognizer: UIGestureRecognizer): void
```

##### 说明

添加手势识别器。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `gestureRecognizer` | `UIGestureRecognizer` | 是 | 手势识别器对象。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `removeGestureRecognizer`

##### 类型

```ts
removeGestureRecognizer(gestureRecognizer: UIGestureRecognizer): void
```

##### 说明

移除手势识别器。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `gestureRecognizer` | `UIGestureRecognizer` | 是 | 手势识别器对象。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `addPanGesture`

##### 类型

```ts
addPanGesture(target: object, selector: string): void
```

##### 说明

添加平移手势。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `target` | `object` | 是 | 目标对象。 |
| `selector` | `string` | 是 | 选择器方法名。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `addLongPressGesture`

##### 类型

```ts
addLongPressGesture(target: object, selector: string): void
```

##### 说明

添加长按手势。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `target` | `object` | 是 | 目标对象。 |
| `selector` | `string` | 是 | 选择器方法名。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `addSwipeGesture`

##### 类型

```ts
addSwipeGesture(target: object, selector: string): void
```

##### 说明

添加滑动手势。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `target` | `object` | 是 | 目标对象。 |
| `selector` | `string` | 是 | 选择器方法名。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。
