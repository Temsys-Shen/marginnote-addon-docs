---
title: self
description: 在 JSExtension 实例方法内指向当前插件实例的上下文。
---

在 `JSB.defineClass` 定义的**实例方法**内部，`self` 指向该插件类的当前实例。用于访问插件自身的 `window` 以及你在实例上挂载的属性（如自定义的 viewController、layout 函数等）。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `window` | `UIWindow` | 当前插件所在窗口。常与 `Application.sharedInstance().studyController(self.window)` 配合获取学习控制器。 |

## 类成员 (Class members)

`self` 是实例上下文变量，不以类成员形式存在。

## 说明

- 仅在**实例方法**中有效（如 `sceneWillConnect`、`notebookWillOpen`、`queryAddonCommandStatus`、`toggleSample:` 等）；在**类方法**（如 `addonDidConnect`）中无 `self`。
- 工具栏按钮的 selector 若指向实例方法（如 `toggleSample:`），在该方法内可用 `self` 访问插件实例和 `self.window`。

## 相关

- [JSExtension](/reference/marginnote/jsextension/) — 插件生命周期
- [Application](/reference/global/application/) — 常用 `studyController(self.window)`
