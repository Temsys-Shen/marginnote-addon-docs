---
title: UIColor
description: 颜色对象，用于视图背景、文本等。
---

颜色对象。部分环境提供 `colorWithHexString(hex)`（如 "#FF0000"）；否则使用 RGB/灰度 API。

## 实例成员 (Instance members)

`UIColor` 的实例通常作为“值对象”被传递与使用（例如赋给 `UIView.backgroundColor`、`UILabel.textColor`、`CALayer.borderColor` 等）。如果你需要把颜色转换为可读字符串，可关注运行时是否提供 `stringValue` / `hexStringValue` 等只读属性（站内搜索即可定位）。

## 类成员 (Class members)

| 方法 | 参数 | 说明 |
|------|------|------|
| `colorWithRedGreenBlueAlpha(red, green, blue, alpha)` | 0–1 | RGBA。 |
| `colorWithWhiteAlpha(white, alpha)` | white, alpha 0–1 | 灰度。 |
| `colorWithHexString(hex)` | 如 "#FF0000" | 十六进制（若支持）。 |
| `blackColor()` / `whiteColor()` / `grayColor()` / `redColor()` / `greenColor()` / `blueColor()` / `clearColor()` | — | 预设颜色。 |

## 相关

- [UIView](/reference/uikit/uiview/)、[UILabel](/reference/uikit/uilabel/)
