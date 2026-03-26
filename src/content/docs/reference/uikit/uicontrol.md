---
title: UIControl
description: 控件基类（target/action 事件机制）。
---

`UIControl` 是交互控件基类（`UIButton`、`UISwitch`、`UISlider` 等都继承它）。提供 target/action 的事件机制与状态（enabled/selected/highlighted 等）。

## 实例成员 (Instance members)

`UIControl` 的核心是事件绑定与派发。标准调用入口是 `addTargetActionForControlEvents(...)`、`removeTargetActionForControlEvents(...)` 与 `sendActionsForControlEvents(...)`。

## 类成员 (Class members)

当前接口未额外暴露 `UIControl` 的类成员。

## 提示

- 常用方法集中在 `addTargetActionForControlEvents(...)`、`removeTargetActionForControlEvents(...)` 与 `sendActionsForControlEvents(...)`。
