---
title: NSSimpleCString
description: 内部字符串类型（可当作 NSString 使用）。
---

`NSSimpleCString` 是一种内部字符串类型。在插件环境中你通常**不需要关心它本身**：它按“字符串”语义工作，可当作 `NSString`/JS 字符串的等价载体来使用。

## 实例成员 (Instance members)

`NSSimpleCString` 可当作普通字符串使用，不需要调用其上的专属成员。

## 类成员 (Class members)

当前运行时未额外暴露 `NSSimpleCString` 的类成员。

## 说明

- **没有额外可调用成员**：它不额外暴露独有方法/属性。
- **使用建议**：把它当作普通字符串传递/拼接/比较即可。

