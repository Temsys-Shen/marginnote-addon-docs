---
title: 隐藏的边界（The Black Box）
description: 只作为属性返回、但没有 JSExport 接口文件的对象与风险边界。
---

本节记录一些在 API 中可能“能拿到对象实例”，但由于**没有对应的 `JSB*.h`（JSExport）接口文件**，因此你无法在 JS 中安全地调用其独有方法的“黑盒对象”。

典型表现：某个对象作为属性被返回，但你在文档/头文件清单里找不到它的 JSB 接口定义。

## 例子

- `NSLayoutManager`：常见于 `UITextView` 相关属性，但未见 `JSBNSLayoutManager.h`。
- `NSTextContainer`：同上。
- `UIFontDescriptor`：在头文件中被注释掉或未导出。

## 建议

- **不要**依赖 KVC/KVO 等高危手段“硬调用”黑盒对象。
- 如果必须实现相关功能：优先寻找已导出对象提供的替代 API（例如通过 `UITextView`/`NSAttributedString` 侧可用方法绕开）。
