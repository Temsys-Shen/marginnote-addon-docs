---
title: Headers
description: LibMN中的Headers对象API文档。
---

`Headers`是HTTP头容器，实现了追加、覆盖、读取和可迭代遍历能力，键名统一按小写存储。

## 构造函数

```ts
new Headers(init?: Headers|Array<[string,string]>|Record<string,string>)
```

构造一个新的Headers实例。

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `init` | `Headers\|Array<[string,string]>\|Record<string,string>` | 否 | 初始头集合。 |

## 类成员(Class members)

无类成员。

## 实例成员(Instance members)

### 属性

无。

### 方法

#### `append`

##### 类型

```ts
append(name: string,value: string|number|boolean): void
```

##### 说明

向同名头追加值，不会覆盖旧值，结果使用逗号拼接。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `name` | `string` | 是 | 头名称。 |
| `value` | `string\|number\|boolean` | 是 | 头值，会被转换为字符串。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `delete`

##### 类型

```ts
delete(name: string): void
```

##### 说明

删除指定头。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `name` | `string` | 是 | 头名称。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `get`

##### 类型

```ts
get(name: string): string|null
```

##### 说明

读取指定头值，不存在时返回`null`。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `name` | `string` | 是 | 头名称。 |

##### 返回值

- 类型:`string|null`
- 语义:返回对应头值或`null`。

#### `has`

##### 类型

```ts
has(name: string): boolean
```

##### 说明

判断是否存在指定头。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `name` | `string` | 是 | 头名称。 |

##### 返回值

- 类型:`boolean`
- 语义:存在时返回`true`。

#### `set`

##### 类型

```ts
set(name: string,value: string|number|boolean): void
```

##### 说明

设置指定头，若已存在则覆盖旧值。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `name` | `string` | 是 | 头名称。 |
| `value` | `string\|number\|boolean` | 是 | 头值，会被转换为字符串。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `forEach`

##### 类型

```ts
forEach(callback: (value: string,key: string,parent: Headers) => void,thisArg?: any): void
```

##### 说明

遍历全部头键值对，遍历顺序与内部`Map`一致。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `callback` | `(value: string,key: string,parent: Headers) => void` | 是 | 遍历回调。 |
| `thisArg` | `any` | 否 | 回调执行时的`this`上下文。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `keys`

##### 类型

```ts
keys(): IterableIterator<string>
```

##### 说明

返回头名迭代器。

##### 参数

无。

##### 返回值

- 类型:`IterableIterator<string>`
- 语义:可迭代的头名集合。

#### `values`

##### 类型

```ts
values(): IterableIterator<string>
```

##### 说明

返回头值迭代器。

##### 参数

无。

##### 返回值

- 类型:`IterableIterator<string>`
- 语义:可迭代的头值集合。

#### `entries`

##### 类型

```ts
entries(): IterableIterator<[string,string]>
```

##### 说明

返回头键值对迭代器。

##### 参数

无。

##### 返回值

- 类型:`IterableIterator<[string,string]>`
- 语义:可迭代的头键值对集合。
