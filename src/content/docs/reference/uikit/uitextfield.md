---
title: UITextField
description: 单行文本输入框。
---

单行文本输入。通过 `new UITextField(frame)` 创建。可设置 `placeholder`、`text`、`delegate`（需实现如 textFieldShouldReturn）等。

## 属性（常用）

| 属性 | 类型 | 说明 |
|------|------|------|
| `text` | string | 当前文本。 |
| `placeholder` | string | 占位符。 |
| `frame` | CGRect | 位置与大小。 |
| `borderStyle` | number | 边框样式（如 2）。 |
| `delegate` | id | 委托，可实现 textFieldShouldReturn 等。 |

## 方法

| 方法 | 说明 |
|------|------|
| `resignFirstResponder()` | 收起键盘。 |

## 相关

- [UIView](/reference/uikit/uiview/)
