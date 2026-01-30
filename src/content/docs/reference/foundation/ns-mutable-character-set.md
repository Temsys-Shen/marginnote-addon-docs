---
title: NSMutableCharacterSet
description: 可变字符集合（可增删字符范围/集合运算）。
---

`NSMutableCharacterSet` 是可变的字符集合，可用于动态构造过滤规则或集合运算。

## 实例成员 (Instance members)

### `addCharactersInRange`

添加范围内的字符。

```javascript
addCharactersInRange(aRange: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aRange` | `any` | Unicode 范围（如 { location, length }）。 |

**Return Value:**

- 无。

### `removeCharactersInRange`

移除范围内的字符。

```javascript
removeCharactersInRange(aRange: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aRange` | `any` | Unicode 范围。 |

**Return Value:**

- 无。

### `addCharactersInString`

添加字符串中的字符。

```javascript
addCharactersInString(aString: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aString` | `string` | 字符来源字符串。 |

**Return Value:**

- 无。

### `removeCharactersInString`

移除字符串中的字符。

```javascript
removeCharactersInString(aString: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aString` | `string` | 要移除的字符来源字符串。 |

**Return Value:**

- 无。

### `invert`

取反（原地：当前集合变为“不在原集合中的字符”）。

```javascript
invert(): void
```

**Return Value:**

- 无。

### `formUnionWithCharacterSet`

与另一字符集取并集（结果写回自身）。

```javascript
formUnionWithCharacterSet(otherSet: NSCharacterSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherSet` | `NSCharacterSet` | 另一字符集。 |

**Return Value:**

- 无。

### `formIntersectionWithCharacterSet`

与另一字符集取交集（结果写回自身）。

```javascript
formIntersectionWithCharacterSet(otherSet: NSCharacterSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherSet` | `NSCharacterSet` | 另一字符集。 |

**Return Value:**

- 无。

## 类成员 (Class members)

当前运行时未额外暴露 `NSMutableCharacterSet` 的类成员。
