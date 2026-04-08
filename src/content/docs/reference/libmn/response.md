---
title: Response
description: LibMN中的Response对象API文档。
---

`Response`用于封装`MNConnection.fetchDev`系列方法的响应结果，提供状态字段、头管理和正文解析方法。

## 构造函数

```ts
new Response(data?: NSData|null,init?: {
  status?: number
  statusText?: string
  headers?: Headers|Array<[string,string]>|Record<string,string>
  type?: string
  url?: string
  redirected?: boolean
  error?: string
})
```

构造一个新的Response实例。

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `data` | `NSData\|null` | 否 | 响应体数据。传`null`表示空响应体。 |
| `init` | `object` | 否 | 响应元信息配置。 |

## 类成员(Class members)

### 属性

无。

### 方法

#### `redirect`

##### 类型

```ts
static redirect(url: string,status?: number): Response
```

##### 说明

创建一个重定向响应对象，仅允许301、302、303、307、308状态码。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `url` | `string` | 是 | 重定向目标地址。 |
| `status` | `number` | 否 | 重定向状态码，默认302。 |

##### 返回值

- 类型:`Response`
- 语义:返回新的重定向响应对象。

#### `error`

##### 类型

```ts
static error(): Response
```

##### 说明

创建一个错误响应对象，状态码固定为0，`type`固定为`error`。

##### 参数

无。

##### 返回值

- 类型:`Response`
- 语义:返回错误响应对象。

#### `new`

##### 类型

```ts
static new(res: NSHTTPURLResponse,data: NSData,err: NSError,url?: string): Response
```

##### 说明

把原生网络回调参数封装为`Response`对象。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `res` | `NSHTTPURLResponse` | 是 | 原生响应对象。 |
| `data` | `NSData` | 是 | 原始响应体。 |
| `err` | `NSError` | 是 | 原生错误对象。 |
| `url` | `string` | 否 | 请求URL。 |

##### 返回值

- 类型:`Response`
- 语义:返回封装后的响应对象。

## 实例成员(Instance members)

### 属性

#### `hasJSONResult`

##### 类型

```ts
get hasJSONResult(): boolean
```

##### 说明

判断当前响应体是否可解析为非空JSON对象。

##### 返回值

- 类型:`boolean`
- 语义:可解析且非空时返回`true`。

### 方法

#### `copy`

##### 类型

```ts
copy(): void
```

##### 说明

把`asJSONObject()`结果复制到剪贴板，便于调试查看。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `asJSONObject`

##### 类型

```ts
asJSONObject(): {
  status: number
  statusText: string
  statusCodeDescription: string
  headers: Headers
  type: string
  url: string
  error?: string
  text?: string|Promise<string>
  json?: any
  bodySize?: number
}|undefined
```

##### 说明

将当前响应转为便于展示和记录的结构化对象。

##### 参数

无。

##### 返回值

- 类型:`object|undefined`
- 语义:成功时返回结构化对象，异常时返回`undefined`。

#### `_parseBody`

##### 类型

```ts
_parseBody(body: Uint8Array|string|FormData|null): Uint8Array|null
```

##### 说明

将不同输入体归一化为`Uint8Array`。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `body` | `Uint8Array\|string\|FormData\|null` | 是 | 待转换的输入体。 |

##### 返回值

- 类型:`Uint8Array|null`
- 语义:可解析时返回字节数组，否则返回`null`。

#### `_setBodyUsed`

##### 类型

```ts
_setBodyUsed(): void
```

##### 说明

内部标记方法。当前实现中该方法提前返回，不会真正改变`_bodyUsed`。

##### 参数

无。

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `arrayBuffer`

##### 类型

```ts
arrayBuffer(): Promise<ArrayBuffer>
```

##### 说明

将响应体转换为`ArrayBuffer`。

##### 参数

无。

##### 返回值

- 类型:`Promise<ArrayBuffer>`
- 语义:返回异步数组缓冲区结果。

#### `blob`

##### 类型

```ts
blob(): Promise<Blob>
```

##### 说明

将响应体转换为`Blob`，并携带`content-type`头中的MIME类型。

##### 参数

无。

##### 返回值

- 类型:`Promise<Blob>`
- 语义:返回异步Blob结果。

#### `json`

##### 类型

```ts
json(): any
```

##### 说明

将响应体解析为JSON对象。解析失败时返回`SyntaxError`对象。

##### 参数

无。

##### 返回值

- 类型:`any`
- 语义:通常为JSON对象，失败时为错误对象。

#### `text`

##### 类型

```ts
text(): string|Promise<string>
```

##### 说明

将响应体转换为字符串。无响应体时返回空字符串Promise。

##### 参数

无。

##### 返回值

- 类型:`string|Promise<string>`
- 语义:返回文本结果或其Promise。

#### `formData`

##### 类型

```ts
formData(): Promise<FormData>
```

##### 说明

把`application/x-www-form-urlencoded`形式文本解析为`FormData`。

##### 参数

无。

##### 返回值

- 类型:`Promise<FormData>`
- 语义:返回异步FormData结果。

#### `clone`

##### 类型

```ts
clone(): Response
```

##### 说明

克隆当前响应对象。若响应体已被消费会抛出`TypeError`。

##### 参数

无。

##### 返回值

- 类型:`Response`
- 语义:返回克隆后的新响应对象。
