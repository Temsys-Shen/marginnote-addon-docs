---
title: UITextRange
description: 文本范围对象（运行时暴露）。常用于描述选区/标记范围，并附带若干输入上下文字段。
---

`UITextRange` 表示一段文本范围。插件运行时中它通常作为 `UITextInputMode`/`UITextPosition` 暴露字段的类型出现，用于描述选区或标记文本范围。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `primaryLanguage` | string \| null | 只读。主要语言。 |
| `markedTextRange` | UITextRange \| null | 只读。标记文本范围。 |
| `selectedTextRange` | UITextRange \| null | 当前选区（可读写）。 |
| `markedTextStyle` | NSDictionary \| null | 标记文本样式。 |
| `beginningOfDocument` | UITextPosition \| null | 只读。文档起点。 |
| `endOfDocument` | UITextPosition \| null | 只读。文档终点。 |
| `start` | UITextPosition \| null | 只读。范围起点。 |
| `end` | UITextPosition \| null | 只读。范围终点。 |
| `text` | string \| null | 只读。文本内容（若运行时提供）。 |
| `rect` | { x: number, y: number, width: number, height: number } | 只读。相关区域。 |
| `tokenizer` | id | 只读。分词器对象。 |
| `textInputView` | UIView \| null | 只读。输入视图。 |
| `empty` | boolean | 只读。是否为空。 |
| `isVertical` | boolean | 只读。是否垂直布局。 |
| `containsStart` | boolean | 只读。是否包含起点。 |
| `containsEnd` | boolean | 只读。是否包含终点。 |
| `alternativeInterpretations` | NSArray | 只读。备选解释列表。 |
| `inputDelegate` | id | 输入代理对象。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UITextRange` 的类成员。

## 相关

- [UITextPosition](/reference/uikit/uitext-position/)
- [UITextInputMode](/reference/uikit/uitext-input-mode/)
- [UIView](/reference/uikit/uiview/)
- [NSArray](/reference/foundation/ns-array/)、[NSDictionary](/reference/foundation/ns-dictionary/)
