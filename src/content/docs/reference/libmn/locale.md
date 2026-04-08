---
title: Locale
description: LibMN中的Locale对象API文档。
---

`Locale`用于加载中英文文案配置并提供本地化读取、模板渲染和HUD展示能力。

## 类成员(Class members)

### 属性

#### `preferredLanguages`

#### 类型

```ts
static get preferredLanguages(): string[]
```

#### 说明

返回系统偏好语言列表。

#### 返回值

- 类型:`string[]`
- 语义:按系统优先级排序的语言标识数组。

### 方法

#### `init`

#### 类型

```ts
static init(mainPath: string): void
```

#### 说明

初始化本地化配置与语言状态。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `mainPath` | `string` | 是 | 插件根目录路径。 |

#### 返回值

- 类型:`void`
- 语义:无返回值。

#### `copy`

#### 类型

```ts
static copy(message: string): void
```

#### 说明

把文本写入系统剪贴板。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `message` | `string` | 是 | 待复制文本。 |

#### 返回值

- 类型:`void`
- 语义:无返回值。

#### `addZHConfig`

#### 类型

```ts
static addZHConfig(config: Record<string,string>): void
```

#### 说明

合并中文文案配置。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `config` | `Record<string,string>` | 是 | 键值形式的中文文案配置。 |

#### 返回值

- 类型:`void`
- 语义:无返回值。

#### `addENConfig`

#### 类型

```ts
static addENConfig(config: Record<string,string>): void
```

#### 说明

合并英文文案配置。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `config` | `Record<string,string>` | 是 | 键值形式的英文文案配置。 |

#### 返回值

- 类型:`void`
- 语义:无返回值。

#### `isfileExists`

#### 类型

```ts
static isfileExists(path: string): boolean
```

#### 说明

判断路径对应文件是否存在。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `path` | `string` | 是 | 文件路径。 |

#### 返回值

- 类型:`boolean`
- 语义:存在时返回`true`。

#### `readJSON`

#### 类型

```ts
static readJSON(path: string): object|undefined
```

#### 说明

读取JSON文件并返回对象。返回值结构在当前源码未暴露稳定结构，需按调用场景使用。
#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `path` | `string` | 是 | JSON文件路径。 |

#### 返回值

- 类型:`object|undefined`
- 语义:文件不存在或无效时返回`undefined`。

#### `getZHNameForKey`

#### 类型

```ts
static getZHNameForKey(key: string): string
```

#### 说明

按键名读取中文文案。
#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `key` | `string` | 是 | 文案键名。 |

#### 返回值

- 类型:`string`
- 语义:命中时返回中文文案，未命中回退到英文或键名本身。

#### `getENNameForKey`

#### 类型

```ts
static getENNameForKey(key: string): string
```

#### 说明

按键名读取英文文案。
#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `key` | `string` | 是 | 文案键名。 |

#### 返回值

- 类型:`string`
- 语义:命中时返回英文文案，未命中返回键名。

#### `getLocalNameForKey`

#### 类型

```ts
static getLocalNameForKey(key: string): string
```

#### 说明

按当前语言读取文案。
#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `key` | `string` | 是 | 文案键名。 |

#### 返回值

- 类型:`string`
- 语义:返回当前语言对应文案。

#### `at`

#### 类型

```ts
static at(key: string): string
```

#### 说明

`getLocalNameForKey`的别名方法。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `key` | `string` | 是 | 文案键名。 |

#### 返回值

- 类型:`string`
- 语义:返回当前语言对应文案。

#### `render`

#### 类型

```ts
static render(template: string,additionalConfig?: Record<string,string>): string
```

#### 说明

按当前语言配置渲染Mustache模板。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `template` | `string` | 是 | 模板字符串。 |
| `additionalConfig` | `Record<string,string>` | 否 | 额外渲染变量。 |

#### 返回值

- 类型:`string`
- 语义:返回渲染后的字符串。

#### `showHUD`

#### 类型

```ts
static showHUD(message: string,additionalConfig?: Record<string,string>): void
```

#### 说明

渲染本地化消息后调用`MNUtil.showHUD`展示提示。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `message` | `string` | 是 | 文案模板或普通文本。 |
| `additionalConfig` | `Record<string,string>` | 否 | 额外渲染变量。 |

#### 返回值

- 类型:`void`
- 语义:无返回值。

## 实例成员(Instance members)

无实例成员。
