---
title: NSMutableAttributedString
description: 可变富文本字符串（可改内容/属性）。
---

`NSMutableAttributedString` 是可变的富文本字符串，可用于拼接、替换文本以及增删属性。

## 实例成员 (Instance members)

### `replaceCharactersInRangeWithString`

在范围内用字符串替换文本。

```javascript
replaceCharactersInRangeWithString(range: any, str: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围（如 { location, length }）。 |
| `str` | `string` | 替换字符串。 |

**Return Value:**

- 无。

### `replaceCharactersInRangeWithAttributedString`

在范围内用富文本替换。

```javascript
replaceCharactersInRangeWithAttributedString(range: any, attrString: NSAttributedString): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |
| `attrString` | `NSAttributedString` | 替换富文本。 |

**Return Value:**

- 无。

### `insertAttributedStringAtIndex`

在指定位置插入富文本。

```javascript
insertAttributedStringAtIndex(attrString: NSAttributedString, loc: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attrString` | `NSAttributedString` | 要插入的富文本。 |
| `loc` | `number` | 插入位置索引。 |

**Return Value:**

- 无。

### `appendAttributedString`

在末尾追加富文本。

```javascript
appendAttributedString(attrString: NSAttributedString): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attrString` | `NSAttributedString` | 要追加的富文本。 |

**Return Value:**

- 无。

### `deleteCharactersInRange`

删除范围内字符。

```javascript
deleteCharactersInRange(range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 要删除的范围。 |

**Return Value:**

- 无。

### `setAttributedString`

用富文本整体替换内容。

```javascript
setAttributedString(attrString: NSAttributedString): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attrString` | `NSAttributedString` | 新内容富文本。 |

**Return Value:**

- 无。

### `setAttributesRange`

在范围内设置属性字典。

```javascript
setAttributesRange(attrs: NSDictionary, range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attrs` | `NSDictionary` | 属性字典。 |
| `range` | `any` | 范围。 |

**Return Value:**

- 无。

### `addAttributeValueRange`

在范围内添加单属性。

```javascript
addAttributeValueRange(name: string, value: any, range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 属性名。 |
| `value` | `any` | 属性值。 |
| `range` | `any` | 范围。 |

**Return Value:**

- 无。

### `addAttributesRange`

在范围内添加多属性。

```javascript
addAttributesRange(attrs: NSDictionary, range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attrs` | `NSDictionary` | 属性字典。 |
| `range` | `any` | 范围。 |

**Return Value:**

- 无。

### `removeAttributeRange`

在范围内移除某属性。

```javascript
removeAttributeRange(name: string, range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 属性名。 |
| `range` | `any` | 范围。 |

**Return Value:**

- 无。

### `fixAttributesInRange`

在范围内修复/规范化属性（若在运行环境中可用）。

```javascript
fixAttributesInRange(range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |

**Return Value:**

- 无。

### `beginEditing`

开始编辑批处理。

```javascript
beginEditing(): void
```

**Return Value:**

- 无。

### `endEditing`

结束编辑批处理。

```javascript
endEditing(): void
```

**Return Value:**

- 无。

### `mutableString`

底层可变字符串（可直接修改文本）。

```javascript
mutableString(): NSMutableString
```

**Return Value:**

- `NSMutableString`: 底层可变字符串。

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

### `readFromFileURLOptionsDocumentAttributesError`

从文件 URL 读取（若在运行环境中可用）。

```javascript
readFromFileURLOptionsDocumentAttributesError(url: NSURL, opts: NSDictionary, dict: any, error: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 文件 URL。 |
| `opts` | `NSDictionary` | 读取选项。 |
| `dict` | `any` | 输出参数，接收文档属性。 |
| `error` | `any` | 输出参数，接收错误。 |

**Return Value:**

- `boolean`: 是否读取成功。

### `readFromDataOptionsDocumentAttributesError`

从 NSData 读取（若在运行环境中可用）。

```javascript
readFromDataOptionsDocumentAttributesError(data: NSData, opts: NSDictionary, dict: any, error: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `NSData` | 源数据。 |
| `opts` | `NSDictionary` | 读取选项。 |
| `dict` | `any` | 输出参数，接收文档属性。 |
| `error` | `any` | 输出参数，接收错误。 |

**Return Value:**

- `boolean`: 是否读取成功。

## 类成员 (Class members)

当前运行时未额外暴露 `NSMutableAttributedString` 的类成员。
