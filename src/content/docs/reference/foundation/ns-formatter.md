---
title: NSFormatter
description: 格式化基类（对象↔字符串转换）。
---

`NSFormatter` 是格式化器基类，用于把对象转换成字符串、或从字符串解析回对象。

在插件环境里更常用的是其具体子类（例如 `NSDateFormatter`、`NSNumberFormatter`）。

## 实例成员 (Instance members)

### `stringForObjectValue`

将对象格式化为字符串。

```javascript
stringForObjectValue(obj: any): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `obj` | `any` | 要格式化的对象。 |

**Return Value:**

- `string`: 格式化后的字符串。

### `editingStringForObjectValue`

用于编辑的字符串表示。

```javascript
editingStringForObjectValue(obj: any): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `obj` | `any` | 对象。 |

**Return Value:**

- `string`: 编辑用字符串。

### `attributedStringForObjectValueWithDefaultAttributes`

格式化为富文本。

```javascript
attributedStringForObjectValueWithDefaultAttributes(obj: any, attrs: NSDictionary): NSAttributedString
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `obj` | `any` | 对象。 |
| `attrs` | `NSDictionary` | 默认属性。 |

**Return Value:**

- `NSAttributedString`: 富文本。

### `getObjectValueForStringErrorDescription`

从字符串解析对象。

```javascript
getObjectValueForStringErrorDescription(obj: any, string: string, error: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `obj` | `any` | 输出参数，接收解析结果。 |
| `string` | `string` | 源字符串。 |
| `error` | `any` | 输出参数，接收错误信息。 |

**Return Value:**

- `boolean`: 是否解析成功。

### `isPartialStringValidNewEditingStringErrorDescription`

增量校验（较少用）。

```javascript
isPartialStringValidNewEditingStringErrorDescription(partialString: string, newString: string, error: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `partialString` | `string` | 当前部分字符串。 |
| `newString` | `string` | 新编辑字符串。 |
| `error` | `any` | 输出参数，错误信息。 |

**Return Value:**

- `boolean`: 是否有效。

### `isPartialStringValidProposedSelectedRangeOriginalStringOriginalSelectedRangeErrorDescription`

增量校验（长签名，较少用）。

```javascript
isPartialStringValidProposedSelectedRangeOriginalStringOriginalSelectedRangeErrorDescription(partialStringPtr: any, proposedSelRangePtr: any, origString: string, origSelRange: any, error: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `partialStringPtr` | `any` | 部分字符串指针。 |
| `proposedSelRangePtr` | `any` | 提议选区指针。 |
| `origString` | `string` | 原始字符串。 |
| `origSelRange` | `any` | 原始选区。 |
| `error` | `any` | 错误输出。 |

**Return Value:**

- `boolean`: 是否有效。

## 类成员 (Class members)

当前运行时未额外暴露 `NSFormatter` 的类成员。
