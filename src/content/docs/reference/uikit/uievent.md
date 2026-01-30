---
title: UIEvent
description: 触摸/系统事件对象。可查询事件类型、时间戳与 touches 集合。
---

`UIEvent` 表示一次输入事件（常见为触摸事件），通常在 `UIResponder` 的触摸回调或 `UIGestureRecognizer` 相关流程中出现。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `type` | number | 只读。事件类型。 |
| `subtype` | number | 只读。事件子类型。 |
| `timestamp` | number | 只读。事件时间戳（秒）。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `allTouches()` | — | NSSet | 返回事件包含的全部触摸对象集合。 |
| `touchesForWindow(window)` | window: UIWindow | NSSet | 返回特定 window 下的触摸集合。 |
| `touchesForView(view)` | view: UIView | NSSet | 返回特定 view 下的触摸集合。 |
| `touchesForGestureRecognizer(gesture)` | gesture: UIGestureRecognizer | NSSet | 返回特定手势识别器相关的触摸集合。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UIEvent` 的类成员。

## 相关

- [UIResponder](/reference/uikit/uiresponder/)（触摸回调）
- [UIGestureRecognizer](/reference/uikit/uigesture-recognizer/)
- [UIView](/reference/uikit/uiview/)（view 参数）
- [NSSet](/reference/foundation/ns-set/)
