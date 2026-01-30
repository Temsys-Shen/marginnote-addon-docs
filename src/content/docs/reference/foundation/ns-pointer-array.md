---
title: NSPointerArray
description: 指针数组（可配置强/弱引用语义）。
---

`NSPointerArray` 是“指针数组”容器，允许存放对象指针或空洞，并支持强/弱语义（例如 `weakObjectsPointerArray()`）。在插件里通常把它当成“特殊数组”来用。

## 类成员 (Class members)

### `strongObjectsPointerArray`

创建强引用指针数组。

```javascript
static strongObjectsPointerArray(): NSPointerArray
```

**Return Value:**

- `NSPointerArray`: 新实例。

### `weakObjectsPointerArray`

创建弱引用指针数组。

```javascript
static weakObjectsPointerArray(): NSPointerArray
```

**Return Value:**

- `NSPointerArray`: 新实例。

## 实例成员 (Instance members)

### `count`

元素个数。

```javascript
count(): number
```

**Return Value:**

- `number`: 个数。

### `setCount`

设置元素个数。

```javascript
setCount(count: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `count` | `number` | 新个数。 |

**Return Value:**

- 无。

### `pointerAtIndex`

取指定索引的指针。

```javascript
pointerAtIndex(index: number): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 索引。 |

**Return Value:**

- `any`: 指针或 null。

### `addPointer`

在末尾添加指针。

```javascript
addPointer(pointer: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `pointer` | `any` | 要添加的指针。 |

**Return Value:**

- 无。

### `removePointerAtIndex`

移除指定索引的指针。

```javascript
removePointerAtIndex(index: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 索引。 |

**Return Value:**

- 无。

### `insertPointerAtIndex`

在指定索引插入指针。

```javascript
insertPointerAtIndex(item: any, index: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `item` | `any` | 指针。 |
| `index` | `number` | 索引。 |

**Return Value:**

- 无。

### `replacePointerAtIndexWithPointer`

替换指定索引的指针。

```javascript
replacePointerAtIndexWithPointer(index: number, item: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 索引。 |
| `item` | `any` | 新指针。 |

**Return Value:**

- 无。

### `compact`

移除空洞，压缩数组。

```javascript
compact(): void
```

**Return Value:**

- 无。

### `allObjects`

所有非空指针组成的数组。

```javascript
allObjects(): NSArray
```

**Return Value:**

- `NSArray`: 对象数组。

### `pointerFunctions`

指针函数配置。

```javascript
pointerFunctions(): any
```

**Return Value:**

- `any`: 指针函数对象。
