---
title: RuntimeAssets
description: Runtime的资源路径解析器，用于把相对路径转换为插件目录绝对路径。
---

`RuntimeAssets`负责把插件内部资源路径解析为可访问路径，通常通过`Runtime.assets`调用。

## 类成员(Class members)

### 属性

无。

### 方法

#### `init`

##### 类型

```ts
static init(extensionPath: string): void
```

##### 说明

初始化资源根目录。`Runtime.init`内部会调用该方法。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `extensionPath` | `string` | 是 | 插件根目录绝对路径。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `resolve`

##### 类型

```ts
static resolve(path?: string): string
```

##### 说明

将相对路径拼接到插件根目录。未传`path`时返回插件根目录本身。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `path` | `string` | 否 | 相对资源路径。 |

##### 返回值

- 类型:`string`
- 语义:返回可访问的绝对路径字符串。

## 实例成员(Instance members)

无实例成员。
