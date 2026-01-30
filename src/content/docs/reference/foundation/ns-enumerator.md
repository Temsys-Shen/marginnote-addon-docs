---
title: NSEnumerator
description: 枚举器（用于顺序遍历集合）。
---

`NSEnumerator` 用于遍历集合（例如 `NSArray.objectEnumerator()`、`NSDictionary.keyEnumerator()` 等返回它）。

## 实例成员 (Instance members)

### `nextObject`

取下一个元素。

```javascript
nextObject(): any
```

**Return Value:**

- `any`: 下一个元素，无则 undefined。

### `allObjects`

剩余元素组成的数组。

```javascript
allObjects(): NSArray
```

**Return Value:**

- `NSArray`: 剩余元素数组。

## 类成员 (Class members)

当前运行时未额外暴露 `NSEnumerator` 的类成员。
