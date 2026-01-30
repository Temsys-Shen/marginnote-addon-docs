---
title: NSMapTable
description: 可配置 key/value 语义的映射表（支持弱引用等）。
---

`NSMapTable` 类似 `NSDictionary`，但可以配置 key/value 的指针语义（例如 weak-to-strong 等）。在插件里你多半用于读写映射关系，而不是追求底层内存语义细节。

## 类成员 (Class members)

### `mapTableWithKeyOptionsValueOptions`

按 key/value 选项创建。

```javascript
static mapTableWithKeyOptionsValueOptions(keyOptions: number, valueOptions: number): NSMapTable
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `keyOptions` | `number` | key 选项。 |
| `valueOptions` | `number` | value 选项。 |

**Return Value:**

- `NSMapTable`: 新实例。

### `strongToStrongObjectsMapTable`

强 key、强 value 的对象映射表。

```javascript
static strongToStrongObjectsMapTable(): NSMapTable
```

**Return Value:**

- `NSMapTable`: 新实例。

### `weakToStrongObjectsMapTable`

弱 key、强 value 的对象映射表。

```javascript
static weakToStrongObjectsMapTable(): NSMapTable
```

**Return Value:**

- `NSMapTable`: 新实例。

### `strongToWeakObjectsMapTable`

强 key、弱 value 的对象映射表。

```javascript
static strongToWeakObjectsMapTable(): NSMapTable
```

**Return Value:**

- `NSMapTable`: 新实例。

### `weakToWeakObjectsMapTable`

弱 key、弱 value 的对象映射表。

```javascript
static weakToWeakObjectsMapTable(): NSMapTable
```

**Return Value:**

- `NSMapTable`: 新实例。

## 实例成员 (Instance members)

### `count`

键值对个数。

```javascript
count(): number
```

**Return Value:**

- `number`: 个数。

### `objectForKey`

按键取值。

```javascript
objectForKey(aKey: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aKey` | `any` | 键。 |

**Return Value:**

- `any`: 值或 undefined。

### `dictionaryRepresentation`

转为 NSDictionary 表示。

```javascript
dictionaryRepresentation(): NSDictionary
```

**Return Value:**

- `NSDictionary`: 字典表示。

### `keyEnumerator`

键枚举器。

```javascript
keyEnumerator(): NSEnumerator
```

**Return Value:**

- `NSEnumerator`: 键枚举器。

### `objectEnumerator`

值枚举器。

```javascript
objectEnumerator(): NSEnumerator
```

**Return Value:**

- `NSEnumerator`: 值枚举器。

### `keyPointerFunctions`

key 指针函数配置。

```javascript
keyPointerFunctions(): any
```

**Return Value:**

- `any`: 指针函数对象。

### `valuePointerFunctions`

value 指针函数配置。

```javascript
valuePointerFunctions(): any
```

**Return Value:**

- `any`: 指针函数对象。

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

### `removeObjectForKey`

移除键对应条目。

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

清空映射表。

```javascript
removeAllObjects(): void
```

**Return Value:**

- 无。
