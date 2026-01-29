---
title: UISwitch
description: 开关控件。
---

开关控件。通过 `new UISwitch()` 或 `new UISwitch(frame)` 创建。用 `addTargetActionForControlEvents(self, 'switchAction:', 1<<12)` 监听值变化（1<<12 为 ValueChanged）。

## 实例成员 (Instance members)

### 属性（常用）

| 属性 | 类型 | 说明 |
|------|------|------|
| `on` | boolean | 是否开启。 |

## 相关

- [UIControl](/reference/uikit/uibutton/)（同属 Control，绑定方式类似）
