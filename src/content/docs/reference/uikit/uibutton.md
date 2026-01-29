---
title: UIButton
description: 按钮控件，需通过 addTargetActionForControlEvents 绑定点击（selector 名须带冒号）。
---

按钮控件。使用 `UIButton.buttonWithType(0)` 或 `new UIButton(frame)` 创建。点击需在 **JSB.defineClass 的实例方法** 中定义 selector（如 `toggleSample:`），方法名**必须以冒号结尾**，并通过 `addTargetActionForControlEvents(self, 'toggleSample:', 1<<6)` 绑定（1<<6 为 TouchUpInside）。

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `buttonWithType(buttonType)` | buttonType: number（0 为 System） | UIButton | 创建按钮。 |

## 实例成员 (Instance members)

| 方法/属性 | 说明 |
|-----------|------|
| `setTitleForState(title, state)` | 设置标题（state 0 为 Normal）。 |
| `setTitleColorForState(color, state)` | 设置标题颜色。 |
| `setImageForState(image, state)` | 设置图片。 |
| `setBackgroundImageForState(image, state)` | 设置背景图。 |
| `addTargetActionForControlEvents(target, action, event)` | target 通常为 self，action 为 'methodName:'，event 1<<6 为点击。 |

## 相关

- [UIColor](/reference/uikit/uicolor/)、[self](/reference/global/self/)
- [教程：原生 UI](/guides/native-ui/)、[工具栏与命令](/guides/toolbar-and-commands/)
