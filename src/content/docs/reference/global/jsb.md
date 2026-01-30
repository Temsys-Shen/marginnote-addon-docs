---
title: JSB
description: JavaScript 桥接核心，连接 JavaScript 与原生 Objective-C 的入口对象。
---

JSB（JavaScript Bridge）是桥接 JavaScript 与原生 Objective-C 的核心对象，所有插件的入口与类定义都通过它完成。

## 方法

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `defineClass(declaration, instanceMethods, classMethods)` | 见下 | 类构造器 | 定义一个可在 Objective-C 中使用的类，**所有插件的入口**。 |
| `newAddon(mainPath)` | `mainPath` (string)：插件包根目录路径 | 必须返回由 `defineClass` 创建的类（构造器） | **插件入口函数**。MarginNote 加载插件时调用，你必须实现并返回插件类（不是实例；MarginNote 会自行实例化）。 |
| `log(format, ...args)` | `format` (string)：支持 `%@`、`%d` 等 Objective-C 格式；`...args`：对应参数 | void | 向 MarginNote 控制台输出日志，类似 `console.log`。 |
| `require(name)` | `name` (string)：插件包内 JS 文件路径/名 | void | 加载插件包内其他 JS 文件。无模块作用域，所有文件共享全局作用域；推荐使用 Webpack 等打包。 |

### defineClass 参数说明

- **第一个参数 `declaration`** (string)：类声明，例如 `'MyAddon : JSExtension'`。
- **第二个参数：Instance members（实例成员）** (object)：实例方法与属性的集合。在此对象中定义的方法/属性在**实例**上调用（如 `sceneWillConnect`、`notebookWillOpen`、`queryAddonCommandStatus`、工具栏 selector 回调如 `toggleSample:` 等）；在这些方法内可使用 `self` 访问当前插件实例。
- **第三个参数：Class members（类成员）** (object，可选)：类方法与属性的集合。在此对象中定义的方法在**类**上调用（如 `addonDidConnect`、`addonWillDisconnect`）；类方法内没有 `self`。

## 说明

- 插件主类必须通过 `JSB.defineClass('MyAddon : JSExtension', instanceMembers, classMembers)` 定义，并在全局实现 `JSB.newAddon = function(mainPath) { return MyAddon; }`（或等价形式）。
- 参见 [JSExtension](/reference/marginnote/jsextension/) 了解生命周期方法，[快速开始](/guides/getting-started/) 了解完整示例。
