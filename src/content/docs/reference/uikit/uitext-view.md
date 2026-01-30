---
title: UITextView
description: 多行文本视图。支持 text/attributedText、typingAttributes、selectedRange 与滚动到范围可见。
---

`UITextView` 继承自 [UIScrollView](/reference/uikit/uiscrollview/)，用于展示与编辑多行文本。插件运行时暴露了常用的文本属性与少量方法。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `text` | string | 文本内容。 |
| `attributedText` | NSAttributedString \| null | 富文本内容。 |
| `textColor` | UIColor \| null | 文本颜色。 |
| `font` | UIFont \| null | 字体。 |
| `textAlignment` | number | 对齐方式。 |
| `editable` | boolean | 是否可编辑。 |
| `selectable` | boolean | 是否可选中。 |
| `allowsEditingTextAttributes` | boolean | 是否允许编辑文字属性。 |
| `dataDetectorTypes` | number | 数据检测类型。 |
| `typingAttributes` | NSDictionary \| null | 输入时使用的属性。 |
| `selectedRange` | object | 当前选区范围。 |
| `textContainerInset` | object | 文本容器内边距。 |
| `layoutManager` | id | 只读。布局管理器。 |
| `textStorage` | NSTextStorage | 只读。文本存储。 |
| `textContainer` | id | 只读。文本容器。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `scrollRangeToVisible(range)` | range: object | void | 滚动使指定文本范围可见。 |
| `initWithFrameTextContainer(frame, textContainer)` | frame: { x: number, y: number, width: number, height: number }, textContainer: id \| null | UITextView | 以 frame 与 textContainer 初始化。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UITextView` 的类成员。

## 相关

- [UIScrollView](/reference/uikit/uiscrollview/)
- [NSTextStorage](/reference/uikit/ns-text-storage/)
- [UIFont](/reference/uikit/uifont/)、[UIColor](/reference/uikit/uicolor/)
- [NSDictionary](/reference/foundation/ns-dictionary/)、[NSAttributedString](/reference/foundation/ns-attributed-string/)
