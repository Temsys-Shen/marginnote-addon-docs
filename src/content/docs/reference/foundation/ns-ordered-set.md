---
title: NSOrderedSet
description: 有序且去重的集合（不可变）。
---

`NSOrderedSet` 兼具“有序”和“去重”两种语义，介于 `NSArray` 与 `NSSet` 之间。

## 类成员 (Class members)

### `orderedSet`

返回空有序集。

```javascript
static orderedSet(): NSOrderedSet
```

**Return Value:**

- `NSOrderedSet`: 空有序集。

### `orderedSetWithObject`

从单元素创建。

```javascript
static orderedSetWithObject(object: any): NSOrderedSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 唯一元素。 |

**Return Value:**

- `NSOrderedSet`: 新有序集。

### `orderedSetWithObjectsCount`

从 C 数组与长度创建。

```javascript
static orderedSetWithObjectsCount(objects: any, cnt: number): NSOrderedSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `objects` | `any` | 元素序列。 |
| `cnt` | `number` | 个数。 |

**Return Value:**

- `NSOrderedSet`: 新有序集。

### `orderedSetWithObjects`

从可变参数创建。

```javascript
static orderedSetWithObjects(firstObj: any, ...args: any[]): NSOrderedSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `firstObj` | `any` | 第一个元素。 |
| `...args` | `any[]` | 其余元素。 |

**Return Value:**

- `NSOrderedSet`: 新有序集。

### `orderedSetWithOrderedSet`

从已有有序集拷贝创建。

```javascript
static orderedSetWithOrderedSet(set: NSOrderedSet): NSOrderedSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `set` | `NSOrderedSet` | 源有序集。 |

**Return Value:**

- `NSOrderedSet`: 新有序集。

### `orderedSetWithOrderedSetRangeCopyItems`

从有序集的范围创建（可选拷贝项）。

```javascript
static orderedSetWithOrderedSetRangeCopyItems(set: NSOrderedSet, range: any, flag: boolean): NSOrderedSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `set` | `NSOrderedSet` | 源有序集。 |
| `range` | `any` | 范围。 |
| `flag` | `boolean` | 是否拷贝项。 |

**Return Value:**

- `NSOrderedSet`: 新有序集。

### `orderedSetWithArray`

从数组创建（去重并保持顺序）。

```javascript
static orderedSetWithArray(array: NSArray): NSOrderedSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `array` | `NSArray` | 源数组。 |

**Return Value:**

- `NSOrderedSet`: 新有序集。

### `orderedSetWithArrayRangeCopyItems`

从数组范围创建。

```javascript
static orderedSetWithArrayRangeCopyItems(array: NSArray, range: any, flag: boolean): NSOrderedSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `array` | `NSArray` | 源数组。 |
| `range` | `any` | 范围。 |
| `flag` | `boolean` | 是否拷贝项。 |

**Return Value:**

- `NSOrderedSet`: 新有序集。

### `orderedSetWithSet`

从集合创建（顺序未定义）。

```javascript
static orderedSetWithSet(set: NSSet): NSOrderedSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `set` | `NSSet` | 源集合。 |

**Return Value:**

- `NSOrderedSet`: 新有序集。

### `orderedSetWithSetCopyItems`

从集合创建（可选拷贝项）。

```javascript
static orderedSetWithSetCopyItems(set: NSSet, flag: boolean): NSOrderedSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `set` | `NSSet` | 源集合。 |
| `flag` | `boolean` | 是否拷贝项。 |

**Return Value:**

- `NSOrderedSet`: 新有序集。

## 实例成员 (Instance members)

### `count`

元素个数。

```javascript
count(): number
```

**Return Value:**

- `number`: 个数。

### `objectAtIndex`

按下标取元素。

```javascript
objectAtIndex(idx: number): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `idx` | `number` | 索引。 |

**Return Value:**

- `any`: 该位置元素。

### `objectAtIndexedSubscript`

下标访问。

```javascript
objectAtIndexedSubscript(idx: number): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `idx` | `number` | 索引。 |

**Return Value:**

- `any`: 该位置元素。

### `firstObject`

第一个元素。

```javascript
firstObject(): any
```

**Return Value:**

- `any`: 首元素或 undefined。

### `lastObject`

最后一个元素。

```javascript
lastObject(): any
```

**Return Value:**

- `any`: 末元素或 undefined。

### `containsObject`

是否包含某元素。

```javascript
containsObject(object: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 待查找元素。 |

**Return Value:**

- `boolean`: 是否包含。

### `indexOfObject`

查找元素首次出现的下标。

```javascript
indexOfObject(object: any): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 待查找元素。 |

**Return Value:**

- `number`: 下标，未找到为 NSNotFound。

### `objectsAtIndexes`

按索引集取多个元素。

```javascript
objectsAtIndexes(indexes: NSIndexSet): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `indexes` | `NSIndexSet` | 索引集合。 |

**Return Value:**

- `NSArray`: 对应元素数组。

### `getObjectsRange`

将范围内元素写入 C 数组。

```javascript
getObjectsRange(objects: any, range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `objects` | `any` | 目标数组。 |
| `range` | `any` | 范围。 |

**Return Value:**

- 无。

### `isEqualToOrderedSet`

是否与另一有序集相等。

```javascript
isEqualToOrderedSet(other: NSOrderedSet): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSOrderedSet` | 另一有序集。 |

**Return Value:**

- `boolean`: 是否相等。

### `objectEnumerator`

正向枚举器。

```javascript
objectEnumerator(): NSEnumerator
```

**Return Value:**

- `NSEnumerator`: 枚举器。

### `reverseObjectEnumerator`

反向枚举器。

```javascript
reverseObjectEnumerator(): NSEnumerator
```

**Return Value:**

- `NSEnumerator`: 反向枚举器。

### `array`

转为数组。

```javascript
array(): NSArray
```

**Return Value:**

- `NSArray`: 元素数组。

### `set`

转为集合。

```javascript
set(): NSSet
```

**Return Value:**

- `NSSet`: 元素集合。

### `sortedArrayUsingDescriptors`

按排序描述符排序得到数组。

```javascript
sortedArrayUsingDescriptors(sortDescriptors: NSArray): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sortDescriptors` | `NSArray` | 排序描述符数组。 |

**Return Value:**

- `NSArray`: 排序后的数组。

### `filteredOrderedSetUsingPredicate`

按谓词过滤得到新有序集。

```javascript
filteredOrderedSetUsingPredicate(p: NSPredicate): NSOrderedSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `p` | `NSPredicate` | 谓词。 |

**Return Value:**

- `NSOrderedSet`: 过滤后的新有序集。

### `enumerateObjectsUsingBlock`

用 block 遍历元素。

```javascript
enumerateObjectsUsingBlock(block: (obj: any, idx: number, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `block` | `(obj, idx, stop) => void` | 每元素调用的回调。 |

**Return Value:**

- 无。

### `enumerateObjectsWithOptionsUsingBlock`

带选项的遍历。

```javascript
enumerateObjectsWithOptionsUsingBlock(opts: number, block: (obj: any, idx: number, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `opts` | `number` | 枚举选项。 |
| `block` | `(obj, idx, stop) => void` | 回调。 |

**Return Value:**

- 无。

### `enumerateObjectsAtIndexesOptionsUsingBlock`

在指定索引集上按选项遍历。

```javascript
enumerateObjectsAtIndexesOptionsUsingBlock(s: NSIndexSet, opts: number, block: (obj: any, idx: number, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `s` | `NSIndexSet` | 索引集。 |
| `opts` | `number` | 枚举选项。 |
| `block` | `(obj, idx, stop) => void` | 回调。 |

**Return Value:**

- 无。

### `indexOfObjectPassingTest`

第一个通过测试的元素下标。

```javascript
indexOfObjectPassingTest(predicate: (obj: any, idx: number, stop: any) => boolean): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `predicate` | `(obj, idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `number`: 下标，无则为 NSNotFound。

### `indexOfObjectWithOptionsPassingTest`

带选项的第一个通过测试的下标。

```javascript
indexOfObjectWithOptionsPassingTest(opts: number, predicate: (obj: any, idx: number, stop: any) => boolean): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `opts` | `number` | 枚举选项。 |
| `predicate` | `(obj, idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `number`: 下标，无则为 NSNotFound。

### `indexOfObjectAtIndexesOptionsPassingTest`

在指定索引集上按选项查找第一个通过测试的下标。

```javascript
indexOfObjectAtIndexesOptionsPassingTest(s: NSIndexSet, opts: number, predicate: (obj: any, idx: number, stop: any) => boolean): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `s` | `NSIndexSet` | 索引集。 |
| `opts` | `number` | 枚举选项。 |
| `predicate` | `(obj, idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `number`: 下标，无则为 NSNotFound。

### `indexesOfObjectsPassingTest`

通过测试的下标组成的新索引集。

```javascript
indexesOfObjectsPassingTest(predicate: (obj: any, idx: number, stop: any) => boolean): NSIndexSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `predicate` | `(obj, idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `NSIndexSet`: 新索引集。

### `indexesOfObjectsWithOptionsPassingTest`

带选项的筛选索引集。

```javascript
indexesOfObjectsWithOptionsPassingTest(opts: number, predicate: (obj: any, idx: number, stop: any) => boolean): NSIndexSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `opts` | `number` | 枚举选项。 |
| `predicate` | `(obj, idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `NSIndexSet`: 新索引集。

### `indexesOfObjectsAtIndexesOptionsPassingTest`

在指定索引集上按选项筛选索引集。

```javascript
indexesOfObjectsAtIndexesOptionsPassingTest(s: NSIndexSet, opts: number, predicate: (obj: any, idx: number, stop: any) => boolean): NSIndexSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `s` | `NSIndexSet` | 索引集。 |
| `opts` | `number` | 枚举选项。 |
| `predicate` | `(obj, idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `NSIndexSet`: 新索引集。

### `valueForKey`

KVC 取值。

```javascript
valueForKey(key: string): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键路径。 |

**Return Value:**

- `any`: 值。

### `setValueForKey`

KVC 设值（可变有序集上常用）。

```javascript
setValueForKey(value: any, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `any` | 值。 |
| `key` | `string` | 键路径。 |

**Return Value:**

- 无。

### `addObserverForKeyPathOptionsContext`

添加 KVO 观察。

```javascript
addObserverForKeyPathOptionsContext(observer: any, keyPath: string, options: number, context: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `observer` | `any` | 观察者。 |
| `keyPath` | `string` | 键路径。 |
| `options` | `number` | 观察选项。 |
| `context` | `any` | 上下文。 |

**Return Value:**

- 无。

### `removeObserverForKeyPathContext`

移除 KVO 观察。

```javascript
removeObserverForKeyPathContext(observer: any, keyPath: string, context: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `observer` | `any` | 观察者。 |
| `keyPath` | `string` | 键路径。 |
| `context` | `any` | 上下文。 |

**Return Value:**

- 无。

### `removeObserverForKeyPath`

移除 KVO 观察（无 context）。

```javascript
removeObserverForKeyPath(observer: any, keyPath: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `observer` | `any` | 观察者。 |
| `keyPath` | `string` | 键路径。 |

**Return Value:**

- 无。
