---
title: NSNull
description: 空值对象（用于集合中表示“空”）。
---

`NSNull` 用于在 `NSArray`/`NSDictionary` 等集合中表达“空值”，避免使用 `null/undefined` 导致集合语义不一致。

## 类成员 (Class members)

### `null`

获取单例空值对象。

```javascript
static null(): NSNull
```

**Return Value:**

- `NSNull`: 全局唯一的 NSNull 实例。

## 实例成员 (Instance members)

`NSNull` 的实例通常只作为“占位空值”使用，不需要调用其上的成员。
