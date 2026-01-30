---
title: UIFont
description: 字体对象。提供系统字体/粗体/斜体、按名称创建，以及枚举字体家族与字体名。
---

`UIFont` 表示字体。插件运行时主要使用其**类成员**创建字体（系统字体、指定名称字体、按文本风格获取偏好字体），并可在需要时基于已有字体生成新字号的字体对象。

## 实例成员 (Instance members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `fontWithSize(fontSize)` | fontSize: number | UIFont | 以相同字体族/风格生成指定字号的新字体。 |

## 类成员 (Class members)

### 常用字号

| 成员 | 返回值 | 说明 |
| --- | --- | --- |
| `labelFontSize()` | number | label 默认字号。 |
| `buttonFontSize()` | number | button 默认字号。 |
| `smallSystemFontSize()` | number | 小号系统字体字号。 |
| `systemFontSize()` | number | 系统默认字号。 |

### 创建与查询

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `preferredFontForTextStyle(style)` | style: string | UIFont | 按文本风格获取偏好字体。 |
| `fontWithNameSize(fontName, fontSize)` | fontName: string, fontSize: number | UIFont \| null | 以名称创建字体。 |
| `familyNames()` | — | NSArray | 返回所有字体家族名。 |
| `fontNamesForFamilyName(familyName)` | familyName: string | NSArray | 返回指定家族下的字体名列表。 |
| `systemFontOfSize(fontSize)` | fontSize: number | UIFont | 系统字体。 |
| `boldSystemFontOfSize(fontSize)` | fontSize: number | UIFont | 粗体系统字体。 |
| `italicSystemFontOfSize(fontSize)` | fontSize: number | UIFont | 斜体系统字体。 |

## 相关

- [NSArray](/reference/foundation/ns-array/)
