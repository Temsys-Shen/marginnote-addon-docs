---
title: NSDictionary
description: 不可变键值集合（字典/映射）。
---

`NSDictionary` 是不可变的键值集合类型。常见于 API 返回 `NSDictionary`（例如 options、headerFields、配置对象等）。

## 类成员 (Class members)

### `dictionary`

返回空字典。

```javascript
static dictionary(): NSDictionary
```

**Return Value:**

- `NSDictionary`: 空字典实例。

### `dictionaryWithObjectForKey`

从单键值对创建字典。

```javascript
static dictionaryWithObjectForKey(object: any, key: any): NSDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 值。 |
| `key` | `any` | 键（需支持 NSCopying）。 |

**Return Value:**

- `NSDictionary`: 新字典。

### `dictionaryWithDictionary`

从已有字典拷贝创建。

```javascript
static dictionaryWithDictionary(dict: NSDictionary): NSDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dict` | `NSDictionary` | 源字典。 |

**Return Value:**

- `NSDictionary`: 新字典。

### `dictionaryWithObjectsForKeys`

从键数组与值数组创建。

```javascript
static dictionaryWithObjectsForKeys(objects: NSArray, keys: NSArray): NSDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `objects` | `NSArray` | 值数组。 |
| `keys` | `NSArray` | 键数组。 |

**Return Value:**

- `NSDictionary`: 新字典。

### `dictionaryWithObjectsKeys`

从可变参数键值对创建（firstObject, firstKey, ...）。

```javascript
static dictionaryWithObjectsKeys(firstObject: any, firstKey: any, ...args: any[]): NSDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `firstObject` | `any` | 第一个值。 |
| `firstKey` | `any` | 第一个键。 |
| `...args` | `any[]` | 其余键值交替。 |

**Return Value:**

- `NSDictionary`: 新字典。

### `dictionaryWithContentsOfFile`

从 plist 文件路径创建。

```javascript
static dictionaryWithContentsOfFile(path: string): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | 文件路径。 |

**Return Value:**

- `any`: 解析得到的字典或 null。

### `dictionaryWithContentsOfURL`

从 URL 创建。

```javascript
static dictionaryWithContentsOfURL(url: NSURL): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 资源 URL。 |

**Return Value:**

- `any`: 解析得到的字典或 null。

## 实例成员 (Instance members)

### `count`

键值对个数。

```javascript
count(): number
```

**Return Value:**

- `number`: 字典大小。

### `allKeys`

所有键组成的数组。

```javascript
allKeys(): NSArray
```

**Return Value:**

- `NSArray`: 键数组。

### `allValues`

所有值组成的数组。

```javascript
allValues(): NSArray
```

**Return Value:**

- `NSArray`: 值数组。

### `objectForKey`

按键取值。

```javascript
objectForKey(key: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `any` | 键。 |

**Return Value:**

- `any`: 对应值或 undefined。

### `objectForKeyedSubscript`

下标访问（同 `objectForKey`）。

```javascript
objectForKeyedSubscript(key: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `any` | 键。 |

**Return Value:**

- `any`: 对应值或 undefined。

### `keysSortedByValueUsingSelector`

按键对应值的排序结果返回键数组。

```javascript
keysSortedByValueUsingSelector(comparator: any): NSArray
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `comparator` | `any` | 比较方法。 |

**Return Value:**

- `NSArray`: 排序后的键数组。

### `isEqualToDictionary`

是否与另一字典内容相等。

```javascript
isEqualToDictionary(otherDictionary: NSDictionary): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherDictionary` | `NSDictionary` | 另一字典。 |

**Return Value:**

- `boolean`: 是否相等。

### `description`

返回字典的字符串描述。

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

### `keyEnumerator`

键的枚举器。

```javascript
keyEnumerator(): NSEnumerator
```

**Return Value:**

- `NSEnumerator`: 键枚举器。

### `objectEnumerator`

值的枚举器。

```javascript
objectEnumerator(): NSEnumerator
```

**Return Value:**

- `NSEnumerator`: 值枚举器。

### `enumerateKeysAndObjectsUsingBlock`

用 block 遍历键值对。

```javascript
enumerateKeysAndObjectsUsingBlock(block: (key: any, obj: any, stop: any) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `block` | `(key, obj, stop) => void` | 每对调用的回调。 |

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

- `NSMutableDictionary` — 可变字典
- [NSArray](/reference/foundation/ns-array/)
