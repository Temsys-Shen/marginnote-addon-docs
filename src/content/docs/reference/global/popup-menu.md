---
title: PopupMenu
description: 轻量弹出菜单视图（全局注入），用于展示一组 PopupMenuItem。
---

`PopupMenu` 是运行时注入的全局类（对应原生 QBPopupMenu）。常用于在指定 rect 附近弹出一组菜单项。

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
|---|---|---|---|
| `currentMenu()` | — | `PopupMenu \| null` | 获取当前显示的菜单（若有）。 |
| `popupMenuWithItems(items)` | items: `NSArray` | `PopupMenu` | 用 items 创建菜单实例。 |

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
|---|---|---|
| `visible` | `boolean` | 是否可见。 |
| `items` | `NSArray` | 菜单项列表。 |
| `arrowDirection` | `number` | 箭头方向（枚举值以运行时为准）。 |
| `targetWinRect` | `CGRect` | 目标窗口 rect（只读）。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
|---|---|---|---|
| `showInViewTargetRectAnimated(view, targetRect, animated)` | view: `UIView`, targetRect: `CGRect`, animated: boolean | — | 在 view 中显示。 |
| `updateWithTargetRect(targetRect)` | targetRect: `CGRect` | — | 更新目标 rect。 |
| `dismissAnimated(animated)` | animated: boolean | — | 关闭菜单。 |

## 相关

- [PopupMenuItem](/reference/global/popup-menu-item/)
- [UIView](/reference/uikit/uiview/)

