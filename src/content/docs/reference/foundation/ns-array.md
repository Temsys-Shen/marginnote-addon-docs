---
title: NSArray
description: 不可变有序集合（数组）。
---

`NSArray` 是不可变的有序集合类型。在插件环境中，它的语义与系统同名类型一致；你主要会在各种 API 返回值（例如节点列表、搜索结果、comments 等）中遇到它。

## 类成员 (Class members)

### `array`

返回空数组。

```javascript
static array(): NSArray
```

**Return Value:**

- `NSArray`: 空数组实例。

### `arrayWithObject`

从单个元素创建数组。

```javascript
static arrayWithObject(anObject: any): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 唯一元素。 |

**Return Value:**

- `NSArray`: 包含该元素的数组。

### `arrayWithObjectsCount`

从 C 数组与长度创建。

```javascript
static arrayWithObjectsCount(objects: any, cnt: number): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `objects` | `any` | 元素序列。 |
| `cnt` | `number` | 元素个数。 |

**Return Value:**

- `NSArray`: 新数组。

### `arrayWithObjects`

从可变参数创建数组。

```javascript
static arrayWithObjects(firstObj: any, ...args: any[]): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `firstObj` | `any` | 第一个元素。 |
| `...args` | `any[]` | 其余元素。 |

**Return Value:**

- `NSArray`: 新数组。

### `arrayWithArray`

从已有数组拷贝创建。

```javascript
static arrayWithArray(array: NSArray): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `array` | `NSArray` | 源数组。 |

**Return Value:**

- `NSArray`: 新数组。

### `arrayWithContentsOfFile`

从 plist 文件路径创建。

```javascript
static arrayWithContentsOfFile(path: string): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 文件路径。 |

**Return Value:**

- `any`: 解析得到的数组或 null。

### `arrayWithContentsOfURL`

从 URL 创建。

```javascript
static arrayWithContentsOfURL(url: NSURL): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 资源 URL。 |

**Return Value:**

- `any`: 解析得到的数组或 null。

## 实例成员 (Instance members)

### `count`

元素个数。

```javascript
count(): number
```

**Return Value:**

- `number`: 数组长度。

### `objectAtIndex`

按下标取元素。

```javascript
objectAtIndex(index: number): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | 索引。 |

**Return Value:**

- `any`: 该位置元素。

### `objectAtIndexedSubscript`

下标访问（同 `objectAtIndex`）。

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
containsObject(anObject: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 待查找元素。 |

**Return Value:**

- `boolean`: 是否包含。

### `indexOfObject`

查找元素首次出现的下标。

```javascript
indexOfObject(anObject: any): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 待查找元素。 |

**Return Value:**

- `number`: 下标，未找到为 NSNotFound。

### `indexOfObjectInRange`

在范围内查找元素下标。

```javascript
indexOfObjectInRange(anObject: any, range: any): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 待查找元素。 |
| `range` | `any` | 范围（如 { location, length }）。 |

**Return Value:**

- `number`: 下标，未找到为 NSNotFound。

### `indexOfObjectIdenticalTo`

按引用相等查找下标。

```javascript
indexOfObjectIdenticalTo(anObject: any): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 待查找对象。 |

**Return Value:**

- `number`: 下标，未找到为 NSNotFound。

### `indexOfObjectIdenticalToInRange`

在范围内按引用相等查找。

```javascript
indexOfObjectIdenticalToInRange(anObject: any, range: any): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 待查找对象。 |
| `range` | `any` | 范围。 |

**Return Value:**

- `number`: 下标，未找到为 NSNotFound。

### `isEqualToArray`

是否与另一数组内容相等。

```javascript
isEqualToArray(otherArray: NSArray): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherArray` | `NSArray` | 另一数组。 |

**Return Value:**

- `boolean`: 是否相等。

### `firstObjectCommonWithArray`

与另一数组的任一公共元素。

```javascript
firstObjectCommonWithArray(otherArray: NSArray): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherArray` | `NSArray` | 另一数组。 |

**Return Value:**

- `any`: 首个公共元素或 undefined。

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

- `NSArray`: 对应元素组成的数组。

### `subarrayWithRange`

取子数组。

```javascript
subarrayWithRange(range: any): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `any` | 范围（如 { location, length }）。 |

**Return Value:**

- `NSArray`: 子数组。

### `arrayByAddingObject`

在末尾添加一个元素得到新数组。

```javascript
arrayByAddingObject(anObject: any): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 要添加的元素。 |

**Return Value:**

- `NSArray`: 新数组。

### `arrayByAddingObjectsFromArray`

拼接另一数组得到新数组。

```javascript
arrayByAddingObjectsFromArray(otherArray: NSArray): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherArray` | `NSArray` | 要拼接的数组。 |

**Return Value:**

- `NSArray`: 新数组。

### `sortedArrayUsingDescriptors`

按排序描述符排序得到新数组。

```javascript
sortedArrayUsingDescriptors(sortDescriptors: NSArray): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sortDescriptors` | `NSArray` | 排序描述符数组。 |

**Return Value:**

- `NSArray`: 排序后的新数组。

### `sortedArrayUsingSelector`

按 selector 比较排序得到新数组。

```javascript
sortedArrayUsingSelector(comparator: any): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `comparator` | `any` | 比较方法。 |

**Return Value:**

- `NSArray`: 排序后的新数组。

### `sortedArrayUsingFunctionContext`

用 C 函数与 context 排序得到新数组。

```javascript
sortedArrayUsingFunctionContext(comparator: any, context: any): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `comparator` | `any` | 比较函数。 |
| `context` | `any` | 上下文。 |

**Return Value:**

- `NSArray`: 排序后的新数组。

### `sortedArrayUsingFunctionContextHint`

带 hint 的排序得到新数组。

```javascript
sortedArrayUsingFunctionContextHint(comparator: any, context: any, hint: any): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `comparator` | `any` | 比较函数。 |
| `context` | `any` | 上下文。 |
| `hint` | `any` | 排序 hint。 |

**Return Value:**

- `NSArray`: 排序后的新数组。

### `sortedArrayHint`

用于高效重排的 hint 数据。

```javascript
sortedArrayHint(): NSData
```

**Return Value:**

- `NSData`: 排序 hint。

### `objectEnumerator`

正向枚举器。

```javascript
objectEnumerator(): NSEnumerator
```

**Return Value:**

- `NSEnumerator`: 正向枚举器。

### `reverseObjectEnumerator`

反向枚举器。

```javascript
reverseObjectEnumerator(): NSEnumerator
```

**Return Value:**

- `NSEnumerator`: 反向枚举器。

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

### `componentsJoinedByString`

用分隔符拼接为字符串。

```javascript
componentsJoinedByString(separator: string): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `separator` | `string` | 分隔符。 |

**Return Value:**

- `string`: 拼接结果。

### `description`

返回数组的字符串描述。

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

### `descriptionWithLocaleIndent`

按 locale 与缩进返回描述。

```javascript
descriptionWithLocaleIndent(locale: any, level: number): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `locale` | `any` | locale。 |
| `level` | `number` | 缩进层级。 |

**Return Value:**

- `string`: 描述字符串。

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

### `writeToFileAtomically`

写入 plist 文件。

```javascript
writeToFileAtomically(path: string, useAuxiliaryFile: boolean): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 文件路径。 |
| `useAuxiliaryFile` | `boolean` | 是否先写临时再替换。 |

**Return Value:**

- `boolean`: 是否成功。

### `writeToURLAtomically`

写入 URL。

```javascript
writeToURLAtomically(url: NSURL, atomically: boolean): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 目标 URL。 |
| `atomically` | `boolean` | 是否原子写入。 |

**Return Value:**

- `boolean`: 是否成功。

## 相关

- `NSMutableArray` — 可变数组
- [NSEnumerator](/reference/foundation/ns-enumerator/)、[NSIndexSet](/reference/foundation/ns-index-set/)
