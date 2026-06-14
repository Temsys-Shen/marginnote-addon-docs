---
title: Mustache
description: 对mustache.js的轻量包装，统一模板渲染与语法解析入口。
---

`Mustache`是对mustache.js的轻量包装，提供统一的模板渲染与语法解析功能。

## 类成员(Class members)

### 属性

无。

### 方法

#### `render`

#### 类型

```ts
static render(template: string,config: object): string
```

#### 说明

- 当你有一段Mustache模板字符串，并且已经准备好渲染数据时，直接调用`render`生成最终文本。
- 与`parse`不同，`render`会产出可展示字符串，适合生成Markdown、HTML片段或提示文本。
#### 参数

| 参数名     | 类型                     | 必填 | 说明                 |
|:-----------|:-------------------------|:-----|:---------------------|
| `template` | `string`                 | 是   | Mustache模板文本。   |
| `config`   | `object` | 是   | 模板渲染上下文对象。 |

#### 返回值

- 类型:`string`
- 语义:渲染后的完整字符串。

#### `parse`

#### 类型

```ts
static parse(template: string): Array<{type:string,value:string,start:number,end:number}>
```

#### 说明

- 当你要在渲染前先检查模板语法，或需要缓存模板token时，使用`parse`。
- 与`render`相比，`parse`不输出最终文本，而是输出词法结果，便于调试复杂模板。
#### 参数

| 参数名     | 类型     | 必填 | 说明                   |
|:-----------|:---------|:-----|:-----------------------|
| `template` | `string` | 是   | 待解析的Mustache模板。 |

#### 返回值

- 类型:`Array<{type:string,value:string,start:number,end:number}>`
- 语义:模板解析后的token数组。

## 实例成员(Instance members)

无实例成员。
