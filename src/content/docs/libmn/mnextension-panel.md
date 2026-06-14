---
title: MNExtensionPanel
description: LibMN中的MNExtensionPanel对象API文档。
---

`MNExtensionPanel`用于管理扩展面板及其子视图，提供面板显隐和窗口级切换能力。

## 类成员(Class members)

### 属性

#### `subviews`

#### 类型

```ts
static subviews: Record<string,UIView>
```

#### 说明

维护已注册子视图的名称到视图对象映射。

#### 返回值

- 类型:`Record<string,UIView>`
- 语义:按名称索引当前已注册的面板子视图。

#### `currentWindow`

#### 类型

```ts
static get currentWindow(): UIWindow
```

#### 说明

返回当前焦点窗口。

#### 返回值

- 类型:`UIWindow`
- 语义:当前活动窗口对象。

#### `subviewNames`

#### 类型

```ts
static get subviewNames(): string[]
```

#### 说明

返回当前已注册子视图名称列表。

#### 返回值

- 类型:`string[]`
- 语义:子视图名称数组。

#### `app`

#### 类型

```ts
static get app(): ApplicationInstance
```

#### 说明

返回`Application.sharedInstance()`单例并缓存。

#### 返回值

- 类型:`ApplicationInstance`
- 语义:应用单例对象。

#### `studyController`

#### 类型

```ts
static get studyController(): StudyController
```

#### 说明

获取当前窗口对应的`StudyController`。

#### 返回值

- 类型:`StudyController`
- 语义:学习控制器对象。

#### `controller`

#### 类型

```ts
static get controller(): { view: UIView }
```

#### 说明

返回扩展面板控制器对象。

#### 返回值

- 类型:`{ view: UIView }`
- 语义:包含`view`字段的控制器对象。

#### `view`

#### 类型

```ts
static get view(): UIView
```

#### 说明

返回扩展面板根视图。

#### 返回值

- 类型:`UIView`
- 语义:扩展面板视图。

#### `frame`

#### 类型

```ts
static get frame(): CGRect
```

#### 说明

返回扩展面板视图的frame。

#### 返回值

- 类型:`CGRect`
- 语义:面板当前几何信息。

#### `width`

#### 类型

```ts
static get width(): number
```

#### 说明

返回扩展面板视图宽度。

#### 返回值

- 类型:`number`
- 语义:当前宽度值。

#### `height`

#### 类型

```ts
static get height(): number
```

#### 说明

返回扩展面板视图高度。

#### 返回值

- 类型:`number`
- 语义:当前高度值。

#### `on`

#### 类型

```ts
static get on(): boolean
```

#### 说明

判断扩展面板是否处于可见状态。

#### 返回值

- 类型:`boolean`
- 语义:面板可见时返回`true`。

### 方法

#### `hideExtentionPanel`

#### 类型

```ts
static hideExtentionPanel(window: UIWindow): void
```

#### 说明

关闭指定窗口的扩展面板。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `window` | `UIWindow` | 是 | 目标窗口。 |

#### 返回值

- 类型:`void`
- 语义:无返回值。

#### `toggle`

#### 类型

```ts
static toggle(): void
```

#### 说明

切换当前窗口扩展面板显示状态。

#### 参数

无。

#### 返回值

- 类型:`void`
- 语义:无返回值。

#### `show`

#### 类型

```ts
static show(name?: string): void
```

#### 说明

显示扩展面板，并可选只显示指定名称子视图。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `name` | `string` | 否 | 目标子视图名称。 |

#### 返回值

- 类型:`void`
- 语义:无返回值。

#### `subview`

#### 类型

```ts
static subview(name: string): UIView|undefined
```

#### 说明

按名称读取已注册子视图。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `name` | `string` | 是 | 子视图名称。 |

#### 返回值

- 类型:`UIView|undefined`
- 语义:命中时返回视图对象，未命中返回`undefined`。

#### `addSubview`

#### 类型

```ts
static addSubview(name: string,view: UIView): void
```

#### 说明

注册并添加子视图，同时隐藏同级其他子视图。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `name` | `string` | 是 | 子视图名称。 |
| `view` | `UIView` | 是 | 子视图对象。 |

#### 返回值

- 类型:`void`
- 语义:无返回值。

#### `removeSubview`

#### 类型

```ts
static removeSubview(name: string): void
```

#### 说明

按名称移除并注销子视图。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `name` | `string` | 是 | 子视图名称。 |

#### 返回值

- 类型:`void`
- 语义:无返回值。

## 实例成员(Instance members)

无实例成员。
