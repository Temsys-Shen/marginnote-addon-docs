---
title: NSPredicate
description: 谓词（用于过滤/测试对象，常与集合筛选配合）。
---

`NSPredicate` 用于描述一个过滤/判断条件。你会在很多“过滤/筛选”API 中遇到它（例如 `filteredSetUsingPredicate`、`filterUsingPredicate`、`filteredOrderedSetUsingPredicate` 等）。

## 类成员 (Class members)

### `predicateWithFormat`

从格式字符串创建谓词。

```javascript
static predicateWithFormat(predicateFormat: string): NSPredicate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `predicateFormat` | `string` | 谓词格式（如 "age > 18"）。 |

**Return Value:**

- `NSPredicate`: 新谓词实例。

### `predicateWithFormatArgumentArray`

从格式与参数数组创建。

```javascript
static predicateWithFormatArgumentArray(predicateFormat: string, arguments: NSArray): NSPredicate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `predicateFormat` | `string` | 谓词格式。 |
| `arguments` | `NSArray` | 参数数组。 |

**Return Value:**

- `NSPredicate`: 新谓词实例。

### `predicateWithFormatArguments`

从格式与可变参数创建。

```javascript
static predicateWithFormatArguments(predicateFormat: string, argList: any): NSPredicate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `predicateFormat` | `string` | 谓词格式。 |
| `argList` | `any` | 参数列表。 |

**Return Value:**

- `NSPredicate`: 新谓词实例。

### `predicateFromMetadataQueryString`

从元数据查询字符串创建。

```javascript
static predicateFromMetadataQueryString(queryString: string): NSPredicate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `queryString` | `string` | 查询字符串。 |

**Return Value:**

- `NSPredicate`: 新谓词实例。

### `predicateWithValue`

创建恒真/恒假谓词。

```javascript
static predicateWithValue(value: boolean): NSPredicate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `boolean` | true 为恒真，false 为恒假。 |

**Return Value:**

- `NSPredicate`: 新谓词实例。

### `predicateWithBlock`

从 block 创建谓词。

```javascript
static predicateWithBlock(block: (object: any, bindings: any) => boolean): NSPredicate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `block` | `(object, bindings) => boolean` | 对每个对象调用的判断块。 |

**Return Value:**

- `NSPredicate`: 新谓词实例。

## 实例成员 (Instance members)

### `predicateFormat`

谓词格式字符串。

```javascript
predicateFormat(): string
```

**Return Value:**

- `string`: 格式字符串。

### `predicateWithSubstitutionVariables`

用变量绑定生成新谓词。

```javascript
predicateWithSubstitutionVariables(variables: NSDictionary): NSPredicate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `variables` | `NSDictionary` | 变量名到值的映射。 |

**Return Value:**

- `NSPredicate`: 新谓词实例。

### `evaluateWithObject`

对对象求值。

```javascript
evaluateWithObject(object: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 要测试的对象。 |

**Return Value:**

- `boolean`: 是否满足谓词。

### `evaluateWithObjectSubstitutionVariables`

对对象与变量绑定求值。

```javascript
evaluateWithObjectSubstitutionVariables(object: any, bindings: NSDictionary): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 要测试的对象。 |
| `bindings` | `NSDictionary` | 变量绑定。 |

**Return Value:**

- `boolean`: 是否满足谓词。

### `allowEvaluation`

允许求值（安全相关，较少直接调用）。

```javascript
allowEvaluation(): void
```

**Return Value:**

- 无。
