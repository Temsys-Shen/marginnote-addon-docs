---
title: self
description: 在 JSExtension 实例方法内指向当前插件实例的上下文。
---

在 `JSB.defineClass` 定义的**实例方法**内部，`self` 指向该类的当前实例，用于访问定义的类实例属性。

## 说明

- 仅在**实例方法**中有效（如 `sceneWillConnect`、`notebookWillOpen`、`queryAddonCommandStatus`、`toggleSample:` 等）；在**类方法**（如 `addonDidConnect`）中无 `self`。
- 工具栏按钮的 selector 若指向实例方法（如 `toggleSample:`），在该方法内可用 `self` 访问插件实例和 `self.window`。

## 相关

- [JSExtension](/reference/marginnote/jsextension/) — 插件生命周期
- [Application](/reference/global/application/) — 常用 `studyController(self.window)`
