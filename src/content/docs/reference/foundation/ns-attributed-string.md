---
title: NSAttributedString
description: 富文本字符串（只读）。
---

`NSAttributedString` 表示带属性（字体、颜色、段落样式等）的只读富文本。你可能会在 UI 文本渲染、富文本评论/编辑等场景中遇到它。

## 实例成员 (Instance members)

### `string`

纯文本内容。

```javascript
string(): string
```

**Return Value:**

- `string`: 纯文本字符串。

### `length`

字符长度。

```javascript
length(): number
```

**Return Value:**

- `number`: 长度。

### `attributesAtIndexEffectiveRange`

指定位置的属性字典与有效范围。

```javascript
attributesAtIndexEffectiveRange(location: number, range: any): NSDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `location` | `number` | 索引。 |
| `range` | `any` | 输出参数，接收有效范围。 |

**Return Value:**

- `NSDictionary`: 该位置的属性字典。

### `attributeAtIndexEffectiveRange`

指定位置的某属性值与有效范围。

```javascript
attributeAtIndexEffectiveRange(attrName: string, location: number, range: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attrName` | `string` | 属性名。 |
| `location` | `number` | 索引。 |
| `range` | `any` | 输出参数，接收有效范围。 |

**Return Value:**

- `any`: 该位置的该属性值。

### `attributesAtIndexLongestEffectiveRangeInRange`

指定位置的属性与最长有效范围（在限定范围内）。

```javascript
attributesAtIndexLongestEffectiveRangeInRange(location: number, range: any, rangeLimit: any): NSDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `location` | `number` | 索引。 |
| `range` | `any` | 输出参数，接收有效范围。 |
| `rangeLimit` | `any` | 限定范围。 |

**Return Value:**

- `NSDictionary`: 属性字典。

### `attributeAtIndexLongestEffectiveRangeInRange`

指定位置的某属性与最长有效范围（在限定范围内）。

```javascript
attributeAtIndexLongestEffectiveRangeInRange(attrName: string, location: number, range: any, rangeLimit: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attrName` | `string` | 属性名。 |
| `location` | `number` | 索引。 |
| `range` | `any` | 输出参数，接收有效范围。 |
| `rangeLimit` | `any` | 限定范围。 |

**Return Value:**

- `any`: 属性值。

### `attributedSubstringFromRange`

取子富文本。

```javascript
attributedSubstringFromRange(range: any): NSAttributedString
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围（如 { location, length }）。 |

**Return Value:**

- `NSAttributedString`: 子富文本。

### `isEqualToAttributedString`

是否与另一富文本相等。

```javascript
isEqualToAttributedString(other: NSAttributedString): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSAttributedString` | 另一富文本。 |

**Return Value:**

- `boolean`: 是否相等。

### `enumerateAttributesInRangeOptionsUsingBlock`

在范围内枚举属性。

```javascript
enumerateAttributesInRangeOptionsUsingBlock(enumerationRange: any, opts: number, block: (attrs: NSDictionary, range: any, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `enumerationRange` | `any` | 枚举范围。 |
| `opts` | `number` | 枚举选项。 |
| `block` | `(attrs, range, stop) => void` | 每段调用的回调。 |

**Return Value:**

- 无。

### `enumerateAttributeInRangeOptionsUsingBlock`

在范围内枚举某属性。

```javascript
enumerateAttributeInRangeOptionsUsingBlock(attrName: string, enumerationRange: any, opts: number, block: (value: any, range: any, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attrName` | `string` | 属性名。 |
| `enumerationRange` | `any` | 枚举范围。 |
| `opts` | `number` | 枚举选项。 |
| `block` | `(value, range, stop) => void` | 每段调用的回调。 |

**Return Value:**

- 无。

### `size`

绘制尺寸（若在运行环境中可用）。

```javascript
size(): any
```

**Return Value:**

- `any`: 尺寸（如 { width, height }）。

### `drawAtPoint`

在点绘制（若在运行环境中可用）。

```javascript
drawAtPoint(point: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `point` | `any` | 绘制点（如 { x, y }）。 |

**Return Value:**

- 无。

### `drawInRect`

在矩形内绘制（若在运行环境中可用）。

```javascript
drawInRect(rect: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rect` | `any` | 绘制矩形。 |

**Return Value:**

- 无。

### `drawWithRectOptionsContext`

在矩形内按选项与上下文绘制（若在运行环境中可用）。

```javascript
drawWithRectOptionsContext(rect: any, options: number, context: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rect` | `any` | 绘制矩形。 |
| `options` | `number` | 绘制选项。 |
| `context` | `any` | 图形上下文。 |

**Return Value:**

- 无。

### `boundingRectWithSizeOptionsContext`

在给定尺寸与选项下计算边界矩形（若在运行环境中可用）。

```javascript
boundingRectWithSizeOptionsContext(size: any, options: number, context: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `size` | `any` | 约束尺寸。 |
| `options` | `number` | 计算选项。 |
| `context` | `any` | 图形上下文。 |

**Return Value:**

- `any`: 边界矩形。

### `drawWithRectOptionsAttributesContext`

在矩形内按选项、属性与上下文绘制（若在运行环境中可用）。

```javascript
drawWithRectOptionsAttributesContext(rect: any, options: number, attributes: NSDictionary, context: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rect` | `any` | 绘制矩形。 |
| `options` | `number` | 绘制选项。 |
| `attributes` | `NSDictionary` | 默认属性。 |
| `context` | `any` | 图形上下文。 |

**Return Value:**

- 无。

### `boundingRectWithSizeOptionsAttributesContext`

在给定尺寸、选项与属性下计算边界矩形（若在运行环境中可用）。

```javascript
boundingRectWithSizeOptionsAttributesContext(size: any, options: number, attributes: NSDictionary, context: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `size` | `any` | 约束尺寸。 |
| `options` | `number` | 计算选项。 |
| `attributes` | `NSDictionary` | 默认属性。 |
| `context` | `any` | 图形上下文。 |

**Return Value:**

- `any`: 边界矩形。

### `dataFromRangeDocumentAttributesError`

导出为数据（若在运行环境中可用）。

```javascript
dataFromRangeDocumentAttributesError(range: any, dict: NSDictionary, error: any): NSData
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |
| `dict` | `NSDictionary` | 文档属性。 |
| `error` | `any` | 输出参数，接收错误。 |

**Return Value:**

- `NSData`: 导出数据。

### `fileWrapperFromRangeDocumentAttributesError`

导出为文件包装器（若在运行环境中可用）。

```javascript
fileWrapperFromRangeDocumentAttributesError(range: any, dict: NSDictionary, error: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |
| `dict` | `NSDictionary` | 文档属性。 |
| `error` | `any` | 输出参数，接收错误。 |

**Return Value:**

- `any`: 文件包装器。

## 类成员 (Class members)

### `attributedStringWithAttachment`

从附件创建富文本（部分环境可用）。

```javascript
static attributedStringWithAttachment(attachment: any): NSAttributedString
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attachment` | `any` | 附件对象。 |

**Return Value:**

- `NSAttributedString`: 新富文本实例。
