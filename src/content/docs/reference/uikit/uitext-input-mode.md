---
title: UITextInputMode
description: 文本输入模式/上下文对象。仅在插件环境导出该类型时可用。
---

`UITextInputMode` 在系统 UIKit 中用于描述当前键盘输入模式（例如输入法语言）。在插件环境它还暴露了一组与文本选择/标记相关的字段（会用于内部实现或统一接口映射）。

## 接口状态

`UITextInputMode`未注册到JSContext，无法进行直接调用、判断类型等操作、类似`Mb`开头的几个类。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `primaryLanguage` | string \| null | 只读。主要语言标识（例如 `"en-US"`）。 |
| `markedTextRange` | UITextRange \| null | 只读。标记文本范围。 |
| `selectedTextRange` | UITextRange \| null | 当前选中文本范围（可读写）。 |
| `markedTextStyle` | NSDictionary \| null | 标记文本样式。 |
| `beginningOfDocument` | UITextPosition \| null | 只读。文档起点。 |
| `endOfDocument` | UITextPosition \| null | 只读。文档终点。 |
| `start` | UITextPosition \| null | 只读。范围起点。 |
| `end` | UITextPosition \| null | 只读。范围终点。 |
| `text` | string \| null | 只读。文本内容（环境提供）。 |
| `rect` | { x: number, y: number, width: number, height: number } | 只读。相关区域。 |
| `tokenizer` | id | 只读。分词器对象。 |
| `textInputView` | UIView \| null | 只读。输入视图。 |
| `writingDirection` | number | 只读。书写方向。 |
| `selectionAffinity` | number | 选择亲和方向。 |
| `empty` | boolean | 只读。是否为空。 |
| `isVertical` | boolean | 只读。是否垂直布局。 |
| `containsStart` | boolean | 只读。是否包含起点。 |
| `containsEnd` | boolean | 只读。是否包含终点。 |
| `alternativeInterpretations` | NSArray | 只读。备选解释列表。 |
| `inputDelegate` | id | 输入代理对象。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `currentInputMode()` | — | UITextInputMode \| null | 返回当前输入模式。 |
| `activeInputModes()` | — | NSArray | 返回活跃输入模式列表。 |

## 相关

- [UITextPosition](/reference/uikit/uitext-position/)
- [UITextRange](/reference/uikit/uitext-range/)
- [UIView](/reference/uikit/uiview/)
- [NSArray](/reference/foundation/ns-array/)、[NSDictionary](/reference/foundation/ns-dictionary/)
