---
title: UITextPosition
description: 文本位置对象（运行时暴露）。常作为 UITextRange 的端点，并附带若干文本上下文字段。
---

`UITextPosition` 表示文本中的一个位置点。插件运行时中它与 `UITextRange`、`UITextInputMode` 一起出现，用于描述选区、标记文本等概念。

## 实例成员 (Instance members)

当前运行时为 `UITextPosition` 暴露了一组与“文本范围/输入上下文”相关的字段（语义与用途高度依赖具体实现）。常见用法是把它作为只读数据从运行时取回并传递给其他 API。

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

当前运行时未额外暴露 `UITextPosition` 的类成员。

## 相关

- [UITextRange](/reference/uikit/uitext-range/)
- [UITextInputMode](/reference/uikit/uitext-input-mode/)
- [UIView](/reference/uikit/uiview/)
- [NSArray](/reference/foundation/ns-array/)、[NSDictionary](/reference/foundation/ns-dictionary/)
