---
title: RuntimeWebViewHost
description: 面向WebView的轻量封装，处理本地文件加载与脚本执行。
---

`RuntimeWebViewHost`是面向WebView的轻量封装对象，处理本地文件加载与脚本执行，简化WebView操作的重复代码。

## 构造函数

```ts
new RuntimeWebViewHost(options?: { view?: UIView; webview?: UIWebView })
```

构造一个新的RuntimeWebViewHost实例。

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `options` | `{ view?: UIView; webview?: UIWebView }` | 否 | 宿主视图与WebView引用。最关键的是`webview`。 |

## 类成员(Class members)

无类成员。

## 实例成员(Instance members)

### 属性

无。

### 方法

#### `loadFile`

##### 类型

```ts
loadFile(path: string): void
```

##### 说明

- 当你要让WebView加载插件目录里的本地文件，例如`index.html`，使用这个方法。
- 与直接调用原生`loadFileURL...`相比，这里会先通过`Runtime.assets.resolve`解析相对路径，并统一可读目录权限。
##### 参数

| 参数名 | 类型     | 必填 | 说明                                                 |
|:-------|:---------|:-----|:-----------------------------------------------------|
| `path` | `string` | 是   | 相对插件资源根目录的文件路径，如`pages/index.html`。 |

##### 返回值

- 类型:`void`
- 语义:无返回值。

#### `runJavaScript`

##### 类型

```ts
runJavaScript(script: string): void
```

##### 说明

- 当你需要从宿主层主动驱动WebView执行一段JS代码时，使用这个方法。
- 与`loadFile`不同，它不负责页面切换，只负责在当前页面上下文里执行脚本。
##### 参数

| 参数名   | 类型     | 必填 | 说明                           |
|:---------|:---------|:-----|:-------------------------------|
| `script` | `string` | 是   | 要执行的JavaScript源码字符串。 |

##### 返回值

- 类型:`void`
- 语义:方法本身不返回脚本结果。

