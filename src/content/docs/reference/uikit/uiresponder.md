---
title: UIResponder
description: 响应链基类（事件/第一响应者）。
---

`UIResponder` 是 iOS 响应链体系的基类，`UIView`/`UIViewController`/`UIApplication` 等都从它继承。用于处理事件、成为/放弃第一响应者等。

## 实例成员 (Instance members)

`UIResponder` 在插件运行时环境中可用的成员较多，且多数会由子类（如 `UIView`、`UIViewController`）以更直观的方式间接使用。若你需要定位某个事件/响应相关成员，建议直接用站内搜索成员名。

## 类成员 (Class members)

当前运行时未额外暴露 `UIResponder` 的类成员。

## 提示

- 事件分发相关成员较多（touch/press/motion/remoteControl 等）。
- 在插件里你通常通过 `UIView`/`UIViewController` 间接使用它。

