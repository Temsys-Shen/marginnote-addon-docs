---
title: UISwitch
description: 开关控件。
---

开关控件。通过 `new UISwitch(frame)` 创建（必须传入 frame 参数）。用 `addTargetActionForControlEvents(self, 'switchAction:', 1<<12)` 监听值变化（1<<12 为 ValueChanged）。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `on` | boolean | 是否开启。 |

## 类成员 (Class members)

当前接口未额外暴露 `UISwitch` 的类成员。

## 相关

- [UIControl](/reference/uikit/uicontrol/)（同属 Control，绑定方式类似）
