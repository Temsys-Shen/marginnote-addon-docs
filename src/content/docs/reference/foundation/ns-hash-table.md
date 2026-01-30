---
title: NSHashTable
description: 哈希表式集合容器（可配置弱引用/指针语义）。
---

`NSHashTable` 类似 `NSSet`，但支持自定义指针语义（例如弱引用集合）。在插件中遇到它时，常用操作与集合类似。

## 类成员 (Class members)

### `hashTableWithOptions`

按选项创建哈希表。

```javascript
static hashTableWithOptions(options: number): NSHashTable
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `options` | `number` | 选项（如弱引用等）。 |

**Return Value:**

- `NSHashTable`: 新实例。

### `weakObjectsHashTable`

弱引用对象哈希表。

```javascript
static weakObjectsHashTable(): NSHashTable
```

**Return Value:**

- `NSHashTable`: 新实例。

## 实例成员 (Instance members)

### `count`

元素个数。

```javascript
count(): number
```

**Return Value:**

- `number`: 个数。

### `member`

按相等性查找成员。

```javascript
member(object: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 待查找对象。 |

**Return Value:**

- `any`: 集合中与之相等的对象或 undefined。

### `anyObject`

任取一个元素。

```javascript
anyObject(): any
```

**Return Value:**

- `any`: 任一元素或 undefined。

### `containsObject`

是否包含某元素。

```javascript
containsObject(anObject: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 待查找元素。 |

**Return Value:**

- `boolean`: 是否包含。

### `allObjects`

所有元素组成的数组。

```javascript
allObjects(): NSArray
```

**Return Value:**

- `NSArray`: 元素数组。

### `setRepresentation`

转为 NSSet 表示。

```javascript
setRepresentation(): NSSet
```

**Return Value:**

- `NSSet`: 集合表示。

### `pointerFunctions`

指针函数配置。

```javascript
pointerFunctions(): any
```

**Return Value:**

- `any`: 指针函数对象。

### `objectEnumerator`

元素枚举器。

```javascript
objectEnumerator(): NSEnumerator
```

**Return Value:**

- `NSEnumerator`: 枚举器。

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

清空哈希表。

```javascript
removeAllObjects(): void
```

**Return Value:**

- 无。

### `intersectsHashTable`

是否与另一哈希表有交集。

```javascript
intersectsHashTable(other: NSHashTable): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSHashTable` | 另一哈希表。 |

**Return Value:**

- `boolean`: 是否有交集。

### `isEqualToHashTable`

是否与另一哈希表相等。

```javascript
isEqualToHashTable(other: NSHashTable): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSHashTable` | 另一哈希表。 |

**Return Value:**

- `boolean`: 是否相等。

### `isSubsetOfHashTable`

是否为另一哈希表的子集。

```javascript
isSubsetOfHashTable(other: NSHashTable): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSHashTable` | 另一哈希表。 |

**Return Value:**

- `boolean`: 是否为子集。

### `intersectHashTable`

与另一哈希表取交集（结果写回自身）。

```javascript
intersectHashTable(other: NSHashTable): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSHashTable` | 另一哈希表。 |

**Return Value:**

- 无。

### `unionHashTable`

与另一哈希表取并集（结果写回自身）。

```javascript
unionHashTable(other: NSHashTable): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSHashTable` | 另一哈希表。 |

**Return Value:**

- 无。

### `minusHashTable`

与另一哈希表取差集（结果写回自身）。

```javascript
minusHashTable(other: NSHashTable): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSHashTable` | 另一哈希表。 |

**Return Value:**

- 无。
