---
title: NSJSONSerialization
description: JSON 与 Foundation 对象之间的序列化与反序列化。
---

用于在 JSON 数据（NSData）与 JavaScript 对象/数组之间转换。

## 实例成员 (Instance members)

运行时未额外暴露 `NSJSONSerialization` 的实例成员；通常直接使用其类成员完成序列化/反序列化。

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `isValidJSONObject(obj)` | obj: any | boolean | 检查对象是否可被序列化为 JSON。 |
| `dataWithJSONObjectOptions(obj, options)` | obj, options: number | NSData | 将对象/数组序列化为 NSData。 |
| `JSONObjectWithDataOptions(data, options)` | data: NSData, options: number | any | 将 NSData 解析为对象/数组。 |

`options`通常传`0`。最新导出接口不包含`error`参数。

### 已确认行为

- `JSONObjectWithDataOptions(data, 0)`解析非法JSON时返回`undefined`，不抛桥接层错误。
- `dataWithJSONObjectOptions(obj, 0)`在传入包含函数成员的对象时，运行时仍会返回`NSData`。
- `isValidJSONObject(obj)`对包含函数成员的对象在运行时返回`true`。

建议：不要只依赖`isValidJSONObject`判断可序列化性，序列化后仍应检查返回值并记录日志。

## 相关

- [NSData](/reference/foundation/ns-data/)
