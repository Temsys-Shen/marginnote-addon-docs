---
title: UIKeyCommand
description: 键盘快捷键命令对象。可指定 input、修饰键并绑定到响应方法。
---

`UIKeyCommand` 用于描述一个键盘快捷键（例如 `⌘K`），常用于在响应者链中注册快捷键命令。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `input` | string | 只读。按键输入（例如 `"K"`）。 |
| `modifierFlags` | number | 只读。修饰键标记（例如 command/option/shift 等）。 |
| `undoManager` | NSUndoManager | 只读。关联的撤销管理器。 |
| `keyCommands` | NSArray | 只读。当前对象暴露的快捷键命令列表（通常在响应者上查询）。 |
| `inputView` | UIView | 只读。输入视图。 |
| `inputAccessoryView` | UIView | 只读。输入附件视图。 |
| `textInputContextIdentifier` | string | 只读。输入上下文标识。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `keyCommandWithInputModifierFlagsAction(input, modifierFlags, action)` | input: string, modifierFlags: number, action: string | UIKeyCommand | 创建一个快捷键命令。`action` 通常传入要触发的实例方法名字符串（例如 `"onHotkey:"`）。 |

## 相关

- [UIResponder](/reference/uikit/uiresponder/)
- [NSArray](/reference/foundation/ns-array/)
