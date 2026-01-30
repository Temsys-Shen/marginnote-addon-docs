---
title: NSMutableSet
description: 可变无序集合（可增删的去重容器）。
---

`NSMutableSet` 是可变集合，适合在运行时构造或更新一个“去重集合”。

## 类成员 (Class members)

### `setWithCapacity`

预分配容量创建。

```javascript
static setWithCapacity(numItems: number): NSMutableSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `numItems` | `number` | 初始容量。 |

**Return Value:**

- `NSMutableSet`: 新集合。

## 实例成员 (Instance members)

### `addObject`

添加对象。

```javascript
addObject(object: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 要添加的对象。 |

**Return Value:**

- 无。

### `removeObject`

移除对象。

```javascript
removeObject(object: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 要移除的对象。 |

**Return Value:**

- 无。

### `removeAllObjects`

清空集合。

```javascript
removeAllObjects(): void
```

**Return Value:**

- 无。

### `addObjectsFromArray`

将数组中的元素加入集合。

```javascript
addObjectsFromArray(array: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `array` | `NSArray` | 源数组。 |

**Return Value:**

- 无。

### `setSet`

用另一集合整体替换内容。

```javascript
setSet(otherSet: NSSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherSet` | `NSSet` | 源集合。 |

**Return Value:**

- 无。

### `unionSet`

与另一集合取并集（结果写回自身）。

```javascript
unionSet(otherSet: NSSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherSet` | `NSSet` | 另一集合。 |

**Return Value:**

- 无。

### `intersectSet`

与另一集合取交集（结果写回自身）。

```javascript
intersectSet(otherSet: NSSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherSet` | `NSSet` | 另一集合。 |

**Return Value:**

- 无。

### `minusSet`

与另一集合取差集（结果写回自身）。

```javascript
minusSet(otherSet: NSSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherSet` | `NSSet` | 另一集合。 |

**Return Value:**

- 无。

### `filterUsingPredicate`

按谓词原地过滤。

```javascript
filterUsingPredicate(predicate: NSPredicate): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `predicate` | `NSPredicate` | 谓词。 |

**Return Value:**

- 无。

## 相关

- [NSSet](/reference/foundation/ns-set/)
- [NSPredicate](/reference/foundation/ns-predicate/)
