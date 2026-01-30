---
title: NSIndexSet
description: 索引集合（用于表示一组整数索引，支持范围与枚举）。
---

`NSIndexSet` 表示一组整数索引的集合，常用于批量索引操作（例如取出数组的多个位置、枚举索引范围等）。

## 类成员 (Class members)

### `indexSet`

返回空索引集。

```javascript
static indexSet(): NSIndexSet
```

**Return Value:**

- `NSIndexSet`: 空索引集。

### `indexSetWithIndex`

从单个索引创建。

```javascript
static indexSetWithIndex(value: number): NSIndexSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 索引值。 |

**Return Value:**

- `NSIndexSet`: 新索引集。

### `indexSetWithIndexesInRange`

从范围创建。

```javascript
static indexSetWithIndexesInRange(range: any): NSIndexSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围（如 { location, length }）。 |

**Return Value:**

- `NSIndexSet`: 新索引集。

## 实例成员 (Instance members)

### `count`

索引个数。

```javascript
count(): number
```

**Return Value:**

- `number`: 索引个数。

### `firstIndex`

最小索引。

```javascript
firstIndex(): number
```

**Return Value:**

- `number`: 最小索引，空集为 NSNotFound。

### `lastIndex`

最大索引。

```javascript
lastIndex(): number
```

**Return Value:**

- `number`: 最大索引，空集为 NSNotFound。

### `containsIndex`

是否包含某索引。

```javascript
containsIndex(value: number): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 索引。 |

**Return Value:**

- `boolean`: 是否包含。

### `containsIndexesInRange`

是否包含整个范围。

```javascript
containsIndexesInRange(range: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |

**Return Value:**

- `boolean`: 是否包含。

### `containsIndexes`

是否包含另一索引集的所有索引。

```javascript
containsIndexes(indexSet: NSIndexSet): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `indexSet` | `NSIndexSet` | 另一索引集。 |

**Return Value:**

- `boolean`: 是否包含。

### `intersectsIndexesInRange`

是否与范围有交集。

```javascript
intersectsIndexesInRange(range: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |

**Return Value:**

- `boolean`: 是否有交集。

### `countOfIndexesInRange`

范围内包含的索引个数。

```javascript
countOfIndexesInRange(range: any): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |

**Return Value:**

- `number`: 个数。

### `isEqualToIndexSet`

是否与另一索引集相等。

```javascript
isEqualToIndexSet(indexSet: NSIndexSet): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `indexSet` | `NSIndexSet` | 另一索引集。 |

**Return Value:**

- `boolean`: 是否相等。

### `indexGreaterThanIndex`

大于给定索引的最小索引。

```javascript
indexGreaterThanIndex(value: number): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 给定索引。 |

**Return Value:**

- `number`: 索引，无则为 NSNotFound。

### `indexLessThanIndex`

小于给定索引的最大索引。

```javascript
indexLessThanIndex(value: number): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 给定索引。 |

**Return Value:**

- `number`: 索引，无则为 NSNotFound。

### `indexGreaterThanOrEqualToIndex`

大于等于给定索引的最小索引。

```javascript
indexGreaterThanOrEqualToIndex(value: number): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 给定索引。 |

**Return Value:**

- `number`: 索引，无则为 NSNotFound。

### `indexLessThanOrEqualToIndex`

小于等于给定索引的最大索引。

```javascript
indexLessThanOrEqualToIndex(value: number): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 给定索引。 |

**Return Value:**

- `number`: 索引，无则为 NSNotFound。

### `getIndexesMaxCountInIndexRange`

将范围内索引写入缓冲区。

```javascript
getIndexesMaxCountInIndexRange(indexBuffer: any, bufferSize: number, range: any): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `indexBuffer` | `any` | 目标缓冲区。 |
| `bufferSize` | `number` | 缓冲区大小。 |
| `range` | `any` | 范围。 |

**Return Value:**

- `number`: 写入的索引个数。

### `enumerateIndexesUsingBlock`

用 block 遍历每个索引。

```javascript
enumerateIndexesUsingBlock(block: (idx: number, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `block` | `(idx, stop) => void` | 每索引调用的回调。 |

**Return Value:**

- 无。

### `enumerateIndexesWithOptionsUsingBlock`

带选项的索引遍历。

```javascript
enumerateIndexesWithOptionsUsingBlock(opts: number, block: (idx: number, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `opts` | `number` | 枚举选项。 |
| `block` | `(idx, stop) => void` | 回调。 |

**Return Value:**

- 无。

### `enumerateIndexesInRangeOptionsUsingBlock`

在范围内按选项遍历索引。

```javascript
enumerateIndexesInRangeOptionsUsingBlock(range: any, opts: number, block: (idx: number, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |
| `opts` | `number` | 枚举选项。 |
| `block` | `(idx, stop) => void` | 回调。 |

**Return Value:**

- 无。

### `enumerateRangesUsingBlock`

用 block 遍历每个连续范围。

```javascript
enumerateRangesUsingBlock(block: (range: any, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `block` | `(range, stop) => void` | 每范围调用的回调。 |

**Return Value:**

- 无。

### `enumerateRangesWithOptionsUsingBlock`

带选项的范围遍历。

```javascript
enumerateRangesWithOptionsUsingBlock(opts: number, block: (range: any, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `opts` | `number` | 枚举选项。 |
| `block` | `(range, stop) => void` | 回调。 |

**Return Value:**

- 无。

### `enumerateRangesInRangeOptionsUsingBlock`

在指定范围内按选项遍历范围。

```javascript
enumerateRangesInRangeOptionsUsingBlock(range: any, opts: number, block: (range: any, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 限定范围。 |
| `opts` | `number` | 枚举选项。 |
| `block` | `(range, stop) => void` | 回调。 |

**Return Value:**

- 无。

### `indexPassingTest`

第一个通过测试的索引。

```javascript
indexPassingTest(predicate: (idx: number, stop: any) => boolean): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `predicate` | `(idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `number`: 索引，无则为 NSNotFound。

### `indexWithOptionsPassingTest`

带选项的第一个通过测试的索引。

```javascript
indexWithOptionsPassingTest(opts: number, predicate: (idx: number, stop: any) => boolean): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `opts` | `number` | 枚举选项。 |
| `predicate` | `(idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `number`: 索引，无则为 NSNotFound。

### `indexInRangeOptionsPassingTest`

在范围内按选项查找第一个通过测试的索引。

```javascript
indexInRangeOptionsPassingTest(range: any, opts: number, predicate: (idx: number, stop: any) => boolean): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |
| `opts` | `number` | 枚举选项。 |
| `predicate` | `(idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `number`: 索引，无则为 NSNotFound。

### `indexesPassingTest`

通过测试的索引组成的新索引集。

```javascript
indexesPassingTest(predicate: (idx: number, stop: any) => boolean): NSIndexSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `predicate` | `(idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `NSIndexSet`: 新索引集。

### `indexesWithOptionsPassingTest`

带选项的筛选索引集。

```javascript
indexesWithOptionsPassingTest(opts: number, predicate: (idx: number, stop: any) => boolean): NSIndexSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `opts` | `number` | 枚举选项。 |
| `predicate` | `(idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `NSIndexSet`: 新索引集。

### `indexesInRangeOptionsPassingTest`

在范围内按选项筛选索引集。

```javascript
indexesInRangeOptionsPassingTest(range: any, opts: number, predicate: (idx: number, stop: any) => boolean): NSIndexSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |
| `opts` | `number` | 枚举选项。 |
| `predicate` | `(idx, stop) => boolean` | 测试函数。 |

**Return Value:**

- `NSIndexSet`: 新索引集。

## 相关

- `NSMutableIndexSet` — 可变索引集
- [NSArray](/reference/foundation/ns-array/)（`objectsAtIndexes` 等）
