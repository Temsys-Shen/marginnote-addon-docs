---
title: NSMutableIndexSet
description: 可变索引集合（可增删范围/索引）。
---

`NSMutableIndexSet` 是可变的索引集合，用于增删索引或索引范围、执行整体位移等操作。

## 实例成员 (Instance members)

### `addIndex`

添加单个索引。

```javascript
addIndex(value: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 索引。 |

**Return Value:**

- 无。

### `removeIndex`

移除单个索引。

```javascript
removeIndex(value: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 索引。 |

**Return Value:**

- 无。

### `addIndexes`

添加另一索引集中的所有索引。

```javascript
addIndexes(indexSet: NSIndexSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `indexSet` | `NSIndexSet` | 要添加的索引集。 |

**Return Value:**

- 无。

### `removeIndexes`

移除另一索引集中的所有索引。

```javascript
removeIndexes(indexSet: NSIndexSet): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `indexSet` | `NSIndexSet` | 要移除的索引集。 |

**Return Value:**

- 无。

### `addIndexesInRange`

添加范围内的所有索引。

```javascript
addIndexesInRange(range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围（如 { location, length }）。 |

**Return Value:**

- 无。

### `removeIndexesInRange`

移除范围内的所有索引。

```javascript
removeIndexesInRange(range: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围。 |

**Return Value:**

- 无。

### `removeAllIndexes`

清空索引集。

```javascript
removeAllIndexes(): void
```

**Return Value:**

- 无。

### `shiftIndexesStartingAtIndexBy`

从某索引起整体位移（用于插入/删除后调整索引）。

```javascript
shiftIndexesStartingAtIndexBy(index: number, delta: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 起始索引。 |
| `delta` | `number` | 位移量（正数向后移）。 |

**Return Value:**

- 无。

## 类成员 (Class members)

当前运行时未额外暴露 `NSMutableIndexSet` 的类成员。

## 相关

- [NSIndexSet](/reference/foundation/ns-index-set/)
