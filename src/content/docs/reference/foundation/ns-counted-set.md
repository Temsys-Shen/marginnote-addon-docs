---
title: NSCountedSet
description: 计数集合（记录每个对象出现次数）。
---

`NSCountedSet` 是“带计数”的集合：相同对象可以被多次加入，并可以查询某个对象出现的次数。

## 实例成员 (Instance members)

### `countForObject`

返回某对象在集合中的出现次数。

```javascript
countForObject(object: any): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 要查询的对象。 |

**Return Value:**

- `number`: 出现次数。

### `objectEnumerator`

元素枚举器。

```javascript
objectEnumerator(): NSEnumerator
```

**Return Value:**

- `NSEnumerator`: 枚举器（每个元素只出现一次）。

### `addObject`

将对象加入集合（计数加一）。

```javascript
addObject(object: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 要加入的对象。 |

**Return Value:**

- 无。

### `removeObject`

将对象从集合中移除一次（计数减一，为 0 时移除）。

```javascript
removeObject(object: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | 要移除的对象。 |

**Return Value:**

- 无。

## 类成员 (Class members)

当前运行时未额外暴露 `NSCountedSet` 的类成员。
