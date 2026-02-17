---
title: NSMutableArray
description: 可变有序集合（可增删改的数组）。
---

`NSMutableArray` 是可变数组类型，用于在原数组基础上增删元素、排序等。

## 类成员 (Class members)

### `arrayWithCapacity`

预分配容量创建。

```javascript
static arrayWithCapacity(numItems: number): NSMutableArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `numItems` | `number` | 初始容量。 |

**Return Value:**

- `NSMutableArray`: 新数组。

> 注：除 `arrayWithCapacity(...)` 外，其它常见工厂方法在最新头文件导出清单中未暴露；请以本页底部的「头文件 API 清单」为准。

## 实例成员 (Instance members)

### `addObject`

在末尾添加元素。

```javascript
addObject(anObject: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 要添加的元素。 |

**Return Value:**

- 无。

### `addObjectsFromArray`

在末尾追加另一数组所有元素。

```javascript
addObjectsFromArray(otherArray: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherArray` | `NSArray` | 要追加的数组。 |

**Return Value:**

- 无。

### `insertObjectAtIndex`

在指定下标插入元素。

```javascript
insertObjectAtIndex(anObject: any, index: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 要插入的元素。 |
| `index` | `number` | 下标。 |

**Return Value:**

- 无。

### `removeLastObject`

移除最后一个元素。

```javascript
removeLastObject(): void
```

**Return Value:**

- 无。

### `removeObject`

移除所有与给定对象相等的元素。

```javascript
removeObject(anObject: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 要移除的对象。 |

**Return Value:**

- 无。

### `removeObjectAtIndex`

移除指定下标的元素。

```javascript
removeObjectAtIndex(index: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 下标。 |

**Return Value:**

- 无。

### `removeObjectIdenticalTo`

移除所有与给定对象引用相等的元素。

```javascript
removeObjectIdenticalTo(anObject: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 要移除的对象。 |

**Return Value:**

- 无。

### `removeObjectInRange`

在范围内移除与给定对象相等的元素。

```javascript
removeObjectInRange(anObject: any, range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 要移除的对象。 |
| `range` | `any` | 范围。 |

**Return Value:**

- 无。

### `removeObjectIdenticalToInRange`

在范围内移除与给定对象引用相等的元素。

```javascript
removeObjectIdenticalToInRange(anObject: any, range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 要移除的对象。 |
| `range` | `any` | 范围。 |

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

### `removeObjectsInArray`

移除与另一数组中元素相等的所有元素。

```javascript
removeObjectsInArray(otherArray: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherArray` | `NSArray` | 要移除的元素所在数组。 |

**Return Value:**

- 无。

### `removeAllObjects`

清空数组。

```javascript
removeAllObjects(): void
```

**Return Value:**

- 无。

### `replaceObjectAtIndexWithObject`

替换指定下标的元素。

```javascript
replaceObjectAtIndexWithObject(index: number, anObject: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 下标。 |
| `anObject` | `any` | 新元素。 |

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

### `replaceObjectsInRangeWithObjectsFromArray`

用另一数组替换范围内元素。

```javascript
replaceObjectsInRangeWithObjectsFromArray(range: any, otherArray: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |
| `otherArray` | `NSArray` | 源数组。 |

**Return Value:**

- 无。

### `replaceObjectsInRangeWithObjectsFromArrayRange`

用另一数组的指定范围替换当前范围。

```javascript
replaceObjectsInRangeWithObjectsFromArrayRange(range: any, otherArray: NSArray, otherRange: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 当前范围。 |
| `otherArray` | `NSArray` | 源数组。 |
| `otherRange` | `any` | 源范围。 |

**Return Value:**

- 无。

### `setArray`

用另一数组替换全部内容。

```javascript
setArray(otherArray: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherArray` | `NSArray` | 源数组。 |

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

### `sortUsingDescriptors`

按排序描述符原地排序。

```javascript
sortUsingDescriptors(sortDescriptors: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sortDescriptors` | `NSArray` | 排序描述符数组。 |

**Return Value:**

- 无。

### `sortUsingSelector`

按 selector 比较原地排序。

```javascript
sortUsingSelector(comparator: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `comparator` | `any` | 比较方法。 |

**Return Value:**

- 无。

### `sortUsingFunctionContext`

用 C 函数与 context 原地排序。

```javascript
sortUsingFunctionContext(comparator: any, context: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `comparator` | `any` | 比较函数。 |
| `context` | `any` | 上下文。 |

**Return Value:**

- 无。

### `sortUsingComparator`

按 comparator 块原地排序。

```javascript
sortUsingComparator(cmptr: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `cmptr` | `any` | 比较块。 |

**Return Value:**

- 无。

### `sortWithOptionsUsingComparator`

带选项的 comparator 排序。

```javascript
sortWithOptionsUsingComparator(opts: number, cmptr: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `opts` | `number` | 排序选项。 |
| `cmptr` | `any` | 比较块。 |

**Return Value:**

- 无。

### 访问与查询（同 NSArray）

`count()`、`objectAtIndex(index)`、`objectAtIndexedSubscript(idx)`、`firstObject()`、`lastObject()`、`containsObject(anObject)`、`indexOfObject(anObject)`、`subarrayWithRange(range)` 等用法与 [NSArray](/reference/foundation/ns-array/) 一致。

## 相关

- [NSArray](/reference/foundation/ns-array/)
- `NSIndexSet`、`NSSortDescriptor`（如可用）
