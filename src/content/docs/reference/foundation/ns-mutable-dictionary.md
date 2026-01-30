---
title: NSMutableDictionary
description: 可变键值集合（可增删改的字典/映射）。
---

`NSMutableDictionary` 是可变字典类型，用于构造与更新键值对集合。

## 类成员 (Class members)

### `dictionary`

返回空可变字典。

```javascript
static dictionary(): NSMutableDictionary
```

**Return Value:**

- `NSMutableDictionary`: 空字典实例。

### `dictionaryWithCapacity`

预分配容量创建。

```javascript
static dictionaryWithCapacity(numItems: number): NSMutableDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `numItems` | `number` | 初始容量。 |

**Return Value:**

- `NSMutableDictionary`: 新字典。

### `dictionaryWithDictionary`

从已有字典创建。

```javascript
static dictionaryWithDictionary(dict: NSDictionary): NSMutableDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dict` | `NSDictionary` | 源字典。 |

**Return Value:**

- `NSMutableDictionary`: 新字典。

### `dictionaryWithObjectForKey`

从单键值对创建。

```javascript
static dictionaryWithObjectForKey(object: any, key: any): NSMutableDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 值。 |
| `key` | `any` | 键。 |

**Return Value:**

- `NSMutableDictionary`: 新字典。

### `dictionaryWithObjectsForKeys`

从键数组与值数组创建。

```javascript
static dictionaryWithObjectsForKeys(objects: NSArray, keys: NSArray): NSMutableDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `objects` | `NSArray` | 值数组。 |
| `keys` | `NSArray` | 键数组。 |

**Return Value:**

- `NSMutableDictionary`: 新字典。

### `dictionaryWithObjectsKeys`

从可变参数键值对创建。

```javascript
static dictionaryWithObjectsKeys(firstObject: any, firstKey: any, ...args: any[]): NSMutableDictionary
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `firstObject` | `any` | 第一个值。 |
| `firstKey` | `any` | 第一个键。 |
| `...args` | `any[]` | 其余键值交替。 |

**Return Value:**

- `NSMutableDictionary`: 新字典。

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

- `any`: 解析得到的可变字典或 null。

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

- `any`: 解析得到的可变字典或 null。

## 实例成员 (Instance members)

### `setObjectForKey`

设置键值对。

```javascript
setObjectForKey(anObject: any, aKey: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anObject` | `any` | 值。 |
| `aKey` | `any` | 键。 |

**Return Value:**

- 无。

### `setObjectForKeyedSubscript`

下标形式设置键值对。

```javascript
setObjectForKeyedSubscript(obj: any, key: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `obj` | `any` | 值。 |
| `key` | `any` | 键。 |

**Return Value:**

- 无。

### `removeObjectForKey`

移除指定键的条目。

```javascript
removeObjectForKey(aKey: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aKey` | `any` | 键。 |

**Return Value:**

- 无。

### `removeAllObjects`

清空字典。

```javascript
removeAllObjects(): void
```

**Return Value:**

- 无。

### `addEntriesFromDictionary`

将另一字典所有条目合并进来。

```javascript
addEntriesFromDictionary(otherDictionary: NSDictionary): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherDictionary` | `NSDictionary` | 源字典。 |

**Return Value:**

- 无。

### `setDictionary`

用另一字典替换全部内容。

```javascript
setDictionary(otherDictionary: NSDictionary): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherDictionary` | `NSDictionary` | 源字典。 |

**Return Value:**

- 无。

### `removeObjectsForKeys`

移除给定键数组中的键对应条目。

```javascript
removeObjectsForKeys(keyArray: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `keyArray` | `NSArray` | 要移除的键数组。 |

**Return Value:**

- 无。

### 访问与枚举（同 NSDictionary）

`objectForKey(key)`、`allKeys()`、`allValues()`、`enumerateKeysAndObjectsUsingBlock(block)` 等用法与 [NSDictionary](/reference/foundation/ns-dictionary/) 一致。

## 相关

- [NSDictionary](/reference/foundation/ns-dictionary/)
