---
title: UIControl
description: 控件基类（target/action 事件机制）。
---

`UIControl` 是交互控件基类（`UIButton`、`UISwitch`、`UISlider` 等都继承它）。提供 target/action 的事件机制与状态（enabled/selected/highlighted 等）。

## 实例成员 (Instance members)

`UIControl` 的核心是事件绑定与派发：你通常会在控件实例上调用 `addTargetAction...` / `removeTargetAction...` / `sendActionsForControlEvents...` 等成员（具体名称以运行时实际暴露为准，可站内搜索定位）。

## 类成员 (Class members)

当前运行时未额外暴露 `UIControl` 的类成员。

## 提示

- 常用方法集中在 `addTargetAction(...)` / `removeTargetAction(...)` / `sendActionsForControlEvents(...)` 等。
- 具体成员建议用站内搜索成员名。

