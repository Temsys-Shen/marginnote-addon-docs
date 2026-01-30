---
title: NSSet
description: 不可变无序集合（集合/去重容器）。
---

`NSSet` 是不可变集合，适合表示“去重后的元素集合”。在插件环境中，你会在很多 API 里见到它（例如返回一组对象、或用于 membership 判断）。

## 类成员 (Class members)

### `set`

返回空集合。

```javascript
static set(): NSSet
```

**Return Value:**

- `NSSet`: 空集合实例。

### `setWithObject`

从单个元素创建集合。

```javascript
static setWithObject(object: any): NSSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 唯一元素。 |

**Return Value:**

- `NSSet`: 新集合。

### `setWithObjectsCount`

从 C 数组与长度创建。

```javascript
static setWithObjectsCount(objects: any, cnt: number): NSSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `objects` | `any` | 元素序列。 |
| `cnt` | `number` | 元素个数。 |

**Return Value:**

- `NSSet`: 新集合。

### `setWithObjects`

从可变参数创建集合。

```javascript
static setWithObjects(firstObj: any, ...args: any[]): NSSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `firstObj` | `any` | 第一个元素。 |
| `...args` | `any[]` | 其余元素。 |

**Return Value:**

- `NSSet`: 新集合。

### `setWithSet`

从已有集合拷贝创建。

```javascript
static setWithSet(set: NSSet): NSSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `set` | `NSSet` | 源集合。 |

**Return Value:**

- `NSSet`: 新集合。

### `setWithArray`

从数组创建集合（去重）。

```javascript
static setWithArray(array: NSArray): NSSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `array` | `NSArray` | 源数组。 |

**Return Value:**

- `NSSet`: 新集合。

## 实例成员 (Instance members)

### `count`

元素个数。

```javascript
count(): number
```

**Return Value:**

- `number`: 集合大小。

### `member`

按相等性查找成员（返回相等对象或 undefined）。

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

### `filteredSetUsingPredicate`

按谓词过滤得到新集合。

```javascript
filteredSetUsingPredicate(predicate: NSPredicate): NSSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `predicate` | `NSPredicate` | 谓词。 |

**Return Value:**

- `NSSet`: 过滤后的新集合。

### `isEqualToSet`

是否与另一集合内容相等。

```javascript
isEqualToSet(otherSet: NSSet): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherSet` | `NSSet` | 另一集合。 |

**Return Value:**

- `boolean`: 是否相等。

### `intersectsSet`

是否与另一集合有交集。

```javascript
intersectsSet(otherSet: NSSet): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherSet` | `NSSet` | 另一集合。 |

**Return Value:**

- `boolean`: 是否有交集。

### `isSubsetOfSet`

是否为另一集合的子集。

```javascript
isSubsetOfSet(otherSet: NSSet): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherSet` | `NSSet` | 另一集合。 |

**Return Value:**

- `boolean`: 是否为子集。

### `setByAddingObject`

添加一个元素得到新集合。

```javascript
setByAddingObject(anObject: any): NSSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 要添加的元素。 |

**Return Value:**

- `NSSet`: 新集合。

### `setByAddingObjectsFromSet`

与另一集合的并集。

```javascript
setByAddingObjectsFromSet(other: NSSet): NSSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSSet` | 另一集合。 |

**Return Value:**

- `NSSet`: 新集合。

### `setByAddingObjectsFromArray`

与数组的并集。

```javascript
setByAddingObjectsFromArray(other: NSArray): NSSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `NSArray` | 数组。 |

**Return Value:**

- `NSSet`: 新集合。

### `objectEnumerator`

元素枚举器。

```javascript
objectEnumerator(): NSEnumerator
```

**Return Value:**

- `NSEnumerator`: 枚举器。

### `enumerateObjectsUsingBlock`

用 block 遍历元素。

```javascript
enumerateObjectsUsingBlock(block: (obj: any, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `block` | `(obj, stop) => void` | 每元素调用的回调。 |

**Return Value:**

- 无。

### `enumerateObjectsWithOptionsUsingBlock`

带选项的遍历。

```javascript
enumerateObjectsWithOptionsUsingBlock(opts: number, block: (obj: any, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `opts` | `number` | 枚举选项。 |
| `block` | `(obj, stop) => void` | 回调。 |

**Return Value:**

- 无。

### `objectsPassingTest`

通过测试的元素组成的新集合。

```javascript
objectsPassingTest(predicate: (obj: any, stop: any) => boolean): NSSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `predicate` | `(obj, stop) => boolean` | 测试函数。 |

**Return Value:**

- `NSSet`: 新集合。

### `objectsWithOptionsPassingTest`

带选项的过滤。

```javascript
objectsWithOptionsPassingTest(opts: number, predicate: (obj: any, stop: any) => boolean): NSSet
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `opts` | `number` | 枚举选项。 |
| `predicate` | `(obj, stop) => boolean` | 测试函数。 |

**Return Value:**

- `NSSet`: 新集合。

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

KVC 设值（可变集合上常用）。

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

### `makeObjectsPerformSelector`

对每个元素调用 selector。

```javascript
makeObjectsPerformSelector(aSelector: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aSelector` | `any` | 要调用的 selector。 |

**Return Value:**

- 无。

### `makeObjectsPerformSelectorWithObject`

对每个元素调用带参 selector。

```javascript
makeObjectsPerformSelectorWithObject(aSelector: any, argument: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aSelector` | `any` | 要调用的 selector。 |
| `argument` | `any` | 参数。 |

**Return Value:**

- 无。

### `description`

返回集合的字符串描述。

```javascript
description(): string
```

**Return Value:**

- `string`: 描述字符串。

### `descriptionWithLocale`

按 locale 返回描述。

```javascript
descriptionWithLocale(locale: any): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `locale` | `any` | locale。 |

**Return Value:**

- `string`: 描述字符串。

## 相关

- `NSMutableSet` — 可变集合
- [NSArray](/reference/foundation/ns-array/)
- [NSEnumerator](/reference/foundation/ns-enumerator/)
