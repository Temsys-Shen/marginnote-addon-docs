---
title: NSIndexPath
description: 索引路径（常用于 Table/Collection 的 section/row/item）。
---

`NSIndexPath` 表示一个由多个索引组成的“路径”。在 UIKit 里最常见的用法是表示表格/集合视图的 `section` 与 `row/item`。

## 类成员 (Class members)

### `indexPathWithIndex`

从单个索引创建路径。

```javascript
static indexPathWithIndex(index: number): NSIndexPath
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 索引。 |

**Return Value:**

- `NSIndexPath`: 新路径。

### `indexPathWithIndexesLength`

从索引数组与长度创建。

```javascript
static indexPathWithIndexesLength(indexes: any, length: number): NSIndexPath
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `indexes` | `any` | 索引序列。 |
| `length` | `number` | 长度。 |

**Return Value:**

- `NSIndexPath`: 新路径。

### `indexPathForRowInSection`

创建 TableView 常用的 row/section 路径。

```javascript
static indexPathForRowInSection(row: number, section: number): NSIndexPath
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `row` | `number` | 行索引。 |
| `section` | `number` | 段索引。 |

**Return Value:**

- `NSIndexPath`: 新路径。

### `indexPathForItemInSection`

创建 CollectionView 常用的 item/section 路径。

```javascript
static indexPathForItemInSection(item: number, section: number): NSIndexPath
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `item` | `number` | 项索引。 |
| `section` | `number` | 段索引。 |

**Return Value:**

- `NSIndexPath`: 新路径。

## 实例成员 (Instance members)

### `length`

路径中索引个数。

```javascript
length(): number
```

**Return Value:**

- `number`: 索引个数。

### `indexAtPosition`

取指定位置的索引。

```javascript
indexAtPosition(position: number): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `position` | `number` | 位置。 |

**Return Value:**

- `number`: 该位置索引。

### `getIndexes`

将索引写入 C 数组。

```javascript
getIndexes(indexes: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `indexes` | `any` | 目标数组。 |

**Return Value:**

- 无。

### `compare`

与另一路径比较。

```javascript
compare(otherObject: NSIndexPath): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherObject` | `NSIndexPath` | 另一路径。 |

**Return Value:**

- `number`: 比较结果。

### `indexPathByAddingIndex`

在末尾追加索引得到新路径。

```javascript
indexPathByAddingIndex(index: number): NSIndexPath
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 要追加的索引。 |

**Return Value:**

- `NSIndexPath`: 新路径。

### `indexPathByRemovingLastIndex`

移除最后一个索引得到新路径。

```javascript
indexPathByRemovingLastIndex(): NSIndexPath
```

**Return Value:**

- `NSIndexPath`: 新路径。

## 相关

- UIKit：`UITableView` / `UICollectionView`（待补齐）
