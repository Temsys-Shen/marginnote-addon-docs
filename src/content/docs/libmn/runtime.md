---
title: Runtime
description: LibMN运行时总入口，负责生命周期注册、路由分发与资源路径能力挂载。
---

`Runtime`是运行时总入口，负责生命周期注册、路由分发与资源路径能力挂载。

## 类成员(Class members)

### 属性

| 字段名 | 类型 | 说明 |
|:-------|:-----|:-----|
| `lifecycleHandlers` | `Array<Record<string, (...args: any[]) => any>>` | 保存所有已注册的生命周期处理器对象。 |
| `routeHandlers` | `Record<string, (...args: any[]) => any>` | 保存路由名到处理函数的映射。 |
| `initialized` | `boolean` | 标记Runtime是否已完成初始化。 |
| `assets` | `typeof RuntimeAssets` | 暴露路径解析工具`RuntimeAssets`。 |

### 方法

#### `init`

##### 类型

```ts
static init(context: string): typeof Runtime
```

##### 说明

- 作用:在插件启动时写入扩展目录，并同步初始化`Runtime.assets`。
##### 参数

| 参数名    | 类型     | 必填 | 说明                                           |
|:----------|:---------|:-----|:-----------------------------------------------|
| `context` | `string` | 是   | 插件主目录路径，`addon.js`里由`mainPath`传入。 |

##### 返回值

- 类型:`typeof Runtime`
- 语义:返回`Runtime`自身，便于链式调用。

#### `ensureInitialized`

##### 类型

```ts
static ensureInitialized(): void
```

##### 说明

- 作用:在关键流程开始前显式检查Runtime初始化状态。
##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:通过检查时无返回值，未通过直接抛出`Error`。

#### `registerLifecycle`

##### 类型

```ts
static registerLifecycle(handler: Record<string, (...args: any[]) => any>): Record<string, (...args: any[]) => any>
```

##### 说明

- 作用:注册一个生命周期处理器对象。
##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `handler` | `Record<string, (...args: any[]) => any>` | 是 | 处理器对象，键名对应生命周期名，如`sceneWillConnect`。 |

##### 返回值

- 类型:`T`
- 语义:返回原始`handler`，可用于保存引用或测试断言。

#### `emitLifecycle`

##### 类型

```ts
static emitLifecycle(name: string, ...args: any[]): any[]
```

##### 说明

- 作用:按生命周期名批量触发所有已注册处理器。
##### 参数

| 参数名 | 类型        | 必填 | 说明                     |
|:-------|:------------|:-----|:-------------------------|
| `name` | `string`    | 是   | 生命周期名。             |
| `args` | `any[]` | 否   | 透传给处理器方法的参数。 |

##### 返回值

- 类型:`any[]`
- 语义:返回每个处理器的返回值数组。未实现该生命周期的处理器会对应`undefined`。

#### `registerRoute`

##### 类型

```ts
static registerRoute(name: string, handler: (...args: any[]) => any): (...args: any[]) => any
```

##### 说明

- 作用:注册路由处理函数。
##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `name` | `string` | 是 | 路由名，会成为`routeHandlers[name]`的键。 |
| `handler` | `(...args: any[]) => any` | 是 | 对应路由执行函数。 |

##### 返回值

- 类型:`T`
- 语义:返回注册进去的处理函数本身。

#### `handleRoute`

##### 类型

```ts
static handleRoute(name: string, ...args: any[]): any
```

##### 说明

- 作用:执行已注册路由。
##### 参数

| 参数名 | 类型        | 必填 | 说明                       |
|:-------|:------------|:-----|:---------------------------|
| `name` | `string`    | 是   | 要执行的路由名。           |
| `args` | `any[]` | 否   | 透传给路由处理函数的参数。 |

##### 返回值

- 类型:`any`
- 语义:返回对应路由处理函数的返回值。

#### `createWebViewHost`

##### 类型

```ts
static createWebViewHost(options?: { view?: UIView; webview?: UIWebView }): RuntimeWebViewHost
```

##### 说明

- 作用:创建`RuntimeWebViewHost`实例，统一管理WebView文件加载与脚本执行。
##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `options` | `{ view?: UIView; webview?: UIWebView }` | 否 | 视图与WebView容器，默认空对象。 |

##### 返回值

- 类型:`RuntimeWebViewHost`
- 语义:返回可调用`loadFile`和`runJavaScript`的Host实例。

## 实例成员(Instance members)

无实例成员。
