---
title: NSMutableOrderedSet
description: 可变有序去重集合（可插入/删除/替换/集合运算）。
---

`NSMutableOrderedSet` 是可变的有序去重集合。

## 类成员 (Class members)

### `orderedSetWithCapacity`

预分配容量创建。

```javascript
static orderedSetWithCapacity(numItems: number): NSMutableOrderedSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `numItems` | `number` | 初始容量。 |

**Return Value:**

- `NSMutableOrderedSet`: 新有序集。

## 实例成员 (Instance members)

### `addObject`

在末尾添加元素（若已存在则无变化）。

```javascript
addObject(object: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 要添加的元素。 |

**Return Value:**

- 无。

### `addObjectsCount`

从 C 数组与长度添加多个元素。

```javascript
addObjectsCount(objects: any, count: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `objects` | `any` | 元素序列。 |
| `count` | `number` | 个数。 |

**Return Value:**

- 无。

### `addObjectsFromArray`

将数组中的元素加入有序集。

```javascript
addObjectsFromArray(array: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `array` | `NSArray` | 源数组。 |

**Return Value:**

- 无。

### `insertObjectAtIndex`

在指定下标插入元素。

```javascript
insertObjectAtIndex(object: any, idx: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 要插入的元素。 |
| `idx` | `number` | 下标。 |

**Return Value:**

- 无。

### `insertObjectsAtIndexes`

在指定索引集位置插入多个元素。

```javascript
insertObjectsAtIndexes(objects: NSArray, indexes: NSIndexSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `objects` | `NSArray` | 要插入的元素数组。 |
| `indexes` | `NSIndexSet` | 下标集合。 |

**Return Value:**

- 无。

### `removeObjectAtIndex`

移除指定下标的元素。

```javascript
removeObjectAtIndex(idx: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `idx` | `number` | 下标。 |

**Return Value:**

- 无。

### `removeObjectsAtIndexes`

移除索引集中的下标对应元素。

```javascript
removeObjectsAtIndexes(indexes: NSIndexSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `indexes` | `NSIndexSet` | 要移除的下标集合。 |

**Return Value:**

- 无。

### `removeObjectsInRange`

移除范围内元素。

```javascript
removeObjectsInRange(range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |

**Return Value:**

- 无。

### `removeObject`

移除与给定对象相等的元素。

```javascript
removeObject(object: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 要移除的对象。 |

**Return Value:**

- 无。

### `removeObjectsInArray`

移除与数组中元素相等的所有元素。

```javascript
removeObjectsInArray(array: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `array` | `NSArray` | 要移除的元素所在数组。 |

**Return Value:**

- 无。

### `removeAllObjects`

清空有序集。

```javascript
removeAllObjects(): void
```

**Return Value:**

- 无。

### `replaceObjectAtIndexWithObject`

替换指定下标的元素。

```javascript
replaceObjectAtIndexWithObject(idx: number, object: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `idx` | `number` | 下标。 |
| `object` | `any` | 新元素。 |

**Return Value:**

- 无。

### `replaceObjectsInRangeWithObjectsCount`

用 C 数组与长度替换范围内元素。

```javascript
replaceObjectsInRangeWithObjectsCount(range: any, objects: any, count: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |
| `objects` | `any` | 新元素序列。 |
| `count` | `number` | 个数。 |

**Return Value:**

- 无。

### `replaceObjectsAtIndexesWithObjects`

按索引集替换为给定数组中的元素。

```javascript
replaceObjectsAtIndexesWithObjects(indexes: NSIndexSet, objects: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `indexes` | `NSIndexSet` | 下标集合。 |
| `objects` | `NSArray` | 新元素数组。 |

**Return Value:**

- 无。

### `setObjectAtIndex`

在指定下标设置元素。

```javascript
setObjectAtIndex(obj: any, idx: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `obj` | `any` | 新元素。 |
| `idx` | `number` | 下标。 |

**Return Value:**

- 无。

### `setObjectAtIndexedSubscript`

下标形式设置元素。

```javascript
setObjectAtIndexedSubscript(obj: any, idx: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `obj` | `any` | 新元素。 |
| `idx` | `number` | 下标。 |

**Return Value:**

- 无。

### `exchangeObjectAtIndexWithObjectAtIndex`

交换两个下标的元素。

```javascript
exchangeObjectAtIndexWithObjectAtIndex(idx1: number, idx2: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `idx1` | `number` | 下标一。 |
| `idx2` | `number` | 下标二。 |

**Return Value:**

- 无。

### `moveObjectsAtIndexesToIndex`

将索引集对应元素移动到新下标。

```javascript
moveObjectsAtIndexesToIndex(indexes: NSIndexSet, idx: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `indexes` | `NSIndexSet` | 要移动的元素下标集合。 |
| `idx` | `number` | 目标下标。 |

**Return Value:**

- 无。

### `setOrderedSet`

用另一有序集整体替换内容。

```javascript
setOrderedSet(other: NSOrderedSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSOrderedSet` | 源有序集。 |

**Return Value:**

- 无。

### `setSet`

用另一集合整体替换内容。

```javascript
setSet(other: NSSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSSet` | 源集合。 |

**Return Value:**

- 无。

### `unionOrderedSet`

与另一有序集取并集（结果写回自身）。

```javascript
unionOrderedSet(other: NSOrderedSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSOrderedSet` | 另一有序集。 |

**Return Value:**

- 无。

### `intersectOrderedSet`

与另一有序集取交集（结果写回自身）。

```javascript
intersectOrderedSet(other: NSOrderedSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSOrderedSet` | 另一有序集。 |

**Return Value:**

- 无。

### `minusOrderedSet`

与另一有序集取差集（结果写回自身）。

```javascript
minusOrderedSet(other: NSOrderedSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSOrderedSet` | 另一有序集。 |

**Return Value:**

- 无。

### `unionSet`

与另一集合取并集（结果写回自身）。

```javascript
unionSet(other: NSSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSSet` | 另一集合。 |

**Return Value:**

- 无。

### `intersectSet`

与另一集合取交集（结果写回自身）。

```javascript
intersectSet(other: NSSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSSet` | 另一集合。 |

**Return Value:**

- 无。

### `minusSet`

与另一集合取差集（结果写回自身）。

```javascript
minusSet(other: NSSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSSet` | 另一集合。 |

**Return Value:**

- 无。
