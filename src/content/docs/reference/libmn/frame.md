---
title: Frame
description: LibMN中的Frame对象API文档。
---

`Frame`是用于统一管理视图布局的工具对象，提供视图frame的读写、定位和尺寸调整等功能。

## 类成员(Class members)

### 属性

无。

### 方法

#### `gen`

##### 类型

```ts
static gen(x: number,y: number,width: number,height: number): CGRect
```

##### 说明

根据x、y、width、height生成标准CGRect。该方法只做结构组装，不校正非法尺寸。

##### 参数

| 参数名   | 类型     | 必填 | 说明                               |
|:---------|:---------|:-----|:-----------------------------------|
| `x`      | `number` | 是   | 目标x坐标。 |
| `y`      | `number` | 是   | 目标y坐标。 |
| `width`  | `number` | 是   | 目标宽度。 |
| `height` | `number` | 是   | 目标高度。 |

##### 返回值

- 类型:`CGRect`
- 语义:返回可直接赋给`view.frame`的`CGRect`对象。
#### `set`

##### 类型

```ts
static set(view: UIView,x: number,y: number,width: number,height: number): void
```

##### 说明

一次性设置view的frame四个分量。传入数值会直接覆盖原位置和大小。

##### 参数

| 参数名   | 类型     | 必填 | 说明                               |
|:---------|:---------|:-----|:-----------------------------------|
| `view` | `UIView` | 是   | 目标视图对象。       |
| `x`      | `number` | 是   | 目标x坐标。 |
| `y`      | `number` | 是   | 目标y坐标。 |
| `width`  | `number` | 是   | 目标宽度。 |
| `height` | `number` | 是   | 目标高度。 |

##### 返回值

- 类型:`void`
- 语义:frame更新完成后立即返回，不提供更新结果回调。
#### `sameFrame`

##### 类型

```ts
static sameFrame(frame1: CGRect,frame2: CGRect): boolean
```

##### 说明

比较两个CGRect是否表示同一位置和尺寸。任一分量不同都会返回false。

##### 参数

| 参数名   | 类型     | 必填 | 说明                         |
|:---------|:---------|:-----|:-----------------------------|
| `frame1` | `CGRect` | 是   | 待比较的第一个frame。 |
| `frame2` | `CGRect` | 是   | 待比较的第二个frame。 |

##### 返回值

- 类型:`boolean`
- 语义:四个分量都一致时返回`true`，否则返回`false`。
#### `setX`

##### 类型

```ts
static setX(view: UIView,x: number): void
```

##### 说明

仅更新view的x坐标。宽高和y坐标保持原值。

##### 参数

| 参数名 | 类型     | 必填 | 说明                               |
|:-------|:---------|:-----|:-----------------------------------|
| `view` | `UIView` | 是   | 目标视图对象。       |
| `x`    | `number` | 是   | 目标x坐标。 |

##### 返回值

- 类型:`void`
- 语义:仅更新x坐标后立即返回，不影响其余frame分量。
#### `setY`

##### 类型

```ts
static setY(view: UIView,y: number): void
```

##### 说明

仅更新view的y坐标。宽高和x坐标保持原值。

##### 参数

| 参数名 | 类型     | 必填 | 说明                               |
|:-------|:---------|:-----|:-----------------------------------|
| `view` | `UIView` | 是   | 目标视图对象。       |
| `y`    | `number` | 是   | 目标y坐标。 |

##### 返回值

- 类型:`void`
- 语义:仅更新y坐标后立即返回，不影响其余frame分量。
#### `setLoc`

##### 类型

```ts
static setLoc(view: UIView,x: number,y: number): void
```

##### 说明

同时更新view的x和y坐标。宽高保持原值。

##### 参数

| 参数名 | 类型     | 必填 | 说明                               |
|:-------|:---------|:-----|:-----------------------------------|
| `view` | `UIView` | 是   | 目标视图对象。       |
| `x`    | `number` | 是   | 目标x坐标。 |
| `y`    | `number` | 是   | 目标y坐标。 |

##### 返回值

- 类型:`void`
- 语义:更新x和y坐标后立即返回，宽高保持不变。
#### `setSize`

##### 类型

```ts
static setSize(view: UIView,width: number,height: number): void
```

##### 说明

同时更新view的width和height。位置坐标保持原值。

##### 参数

| 参数名   | 类型     | 必填 | 说明                               |
|:---------|:---------|:-----|:-----------------------------------|
| `view` | `UIView` | 是   | 目标视图对象。       |
| `width`  | `number` | 是   | 目标宽度。 |
| `height` | `number` | 是   | 目标高度。 |

##### 返回值

- 类型:`void`
- 语义:更新宽高后立即返回，位置坐标保持不变。
#### `setWidth`

##### 类型

```ts
static setWidth(view: UIView,width: number): void
```

##### 说明

仅更新view的width。x、y和height保持原值。

##### 参数

| 参数名  | 类型     | 必填 | 说明                               |
|:--------|:---------|:-----|:-----------------------------------|
| `view` | `UIView` | 是   | 目标视图对象。       |
| `width` | `number` | 是   | 目标宽度。 |

##### 返回值

- 类型:`void`
- 语义:仅更新宽度后立即返回，不影响其余frame分量。
#### `setHeight`

##### 类型

```ts
static setHeight(view: UIView,height: number): void
```

##### 说明

仅更新view的height。x、y和width保持原值。

##### 参数

| 参数名   | 类型     | 必填 | 说明                               |
|:---------|:---------|:-----|:-----------------------------------|
| `view` | `UIView` | 是   | 目标视图对象。       |
| `height` | `number` | 是   | 目标高度。 |

##### 返回值

- 类型:`void`
- 语义:仅更新高度后立即返回，不影响其余frame分量。
#### `moveX`

##### 类型

```ts
static moveX(view: UIView,xDiff: number): void
```

##### 说明

按xDiff在当前基础上平移view。正值向右移动，负值向左移动。

##### 参数

| 参数名  | 类型     | 必填 | 说明                         |
|:--------|:---------|:-----|:-----------------------------|
| `view` | `UIView` | 是   | 目标视图对象。 |
| `xDiff` | `number` | 是   | x方向增量。 |

##### 返回值

- 类型:`void`
- 语义:按给定增量完成x方向平移后立即返回。
#### `moveY`

##### 类型

```ts
static moveY(view: UIView,yDiff: number): void
```

##### 说明

按yDiff在当前基础上平移view。正值向下移动，负值向上移动。

##### 参数

| 参数名  | 类型     | 必填 | 说明                         |
|:--------|:---------|:-----|:-----------------------------|
| `view` | `UIView` | 是   | 目标视图对象。 |
| `yDiff` | `number` | 是   | y方向增量。 |

##### 返回值

- 类型:`void`
- 语义:按给定增量完成y方向平移后立即返回。

## 实例成员(Instance members)

无实例成员。
