---
title: NSJSONSerialization
description: JSON 与 Foundation 对象之间的序列化与反序列化。
---

用于在 JSON 数据（NSData）与 JavaScript 对象/数组之间转换。

## 实例成员 (Instance members)

当前运行时未额外暴露 `NSJSONSerialization` 的实例成员；通常直接使用其类成员完成序列化/反序列化。

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `isValidJSONObject(obj)` | obj: any | boolean | 检查对象是否可被序列化为 JSON。 |
| `dataWithJSONObjectOptionsError(obj, options, error)` | obj, options: number, error | NSData | 将对象/数组序列化为 NSData。 |
| `JSONObjectWithDataOptionsError(data, options, error)` | data: NSData, options: number, error | any | 将 NSData 解析为对象/数组。 |

options 通常传 0。error 可为 null；若解析/序列化失败，可通过 error 获取错误信息。

## 相关

- [NSData](/reference/foundation/ns-data/)
