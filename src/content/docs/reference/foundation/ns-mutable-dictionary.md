---
title: NSMutableDictionary
description: 可变键值集合（可增删改的字典/映射）。
---

`NSMutableDictionary` 是可变字典类型，用于构造与更新键值对集合。

## 类成员 (Class members)

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

### `dictionaryWithSharedKeySet`

使用 sharedKeySet 创建字典（用于大量相同 key 的字典以提升性能）。

```javascript
static dictionaryWithSharedKeySet(sharedKeySet: any): NSMutableDictionary
```

### `sharedKeySetForKeys`

为 keys 生成 sharedKeySet。

```javascript
static sharedKeySetForKeys(keys: NSArray): any
```

> 注：`NSMutableDictionary` 的工厂方法在插件运行时的导出范围较小；请以本页底部的「头文件 API 清单」为准。

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
