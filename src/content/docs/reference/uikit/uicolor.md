---
title: UIColor
description: 颜色对象，用于视图背景、文本等。
---

颜色对象。部分环境提供 `colorWithHexString(hex)`（如 "#FF0000"）；否则使用 RGB/灰度 API。

## 类方法（常用）

| 方法 | 参数 | 说明 |
|------|------|------|
| `colorWithRedGreenBlueAlpha(red, green, blue, alpha)` | 0–1 | RGBA。 |
| `colorWithWhiteAlpha(white, alpha)` | white, alpha 0–1 | 灰度。 |
| `colorWithHexString(hex)` | 如 "#FF0000" | 十六进制（若支持）。 |
| `blackColor()` / `whiteColor()` / `grayColor()` / `redColor()` / `greenColor()` / `blueColor()` / `clearColor()` | — | 预设颜色。 |

## 相关

- [UIView](/reference/uikit/uiview/)、[UILabel](/reference/uikit/uilabel/)
