---
title: NSDateFormatter
description: 日期格式化与解析。
---

`NSDateFormatter` 用于在 `NSDate` 与字符串之间转换。常见于日志输出、持久化、与外部系统交互。

## 类成员 (Class members)

### 创建

通过 `new()` 或 `alloc().init()` 创建（视环境可用方式）。

```javascript
// 示例
var formatter = new NSDateFormatter();
// 或
var formatter = NSDateFormatter.alloc().init();
```

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `dateFormat` | `string` | 日期格式字符串（如 "yyyy-MM-dd"）。 |
| `locale` | `NSLocale` | 区域。 |
| `timeZone` | `NSTimeZone` | 时区。 |

### `stringFromDate`

将日期格式化为字符串。

```javascript
stringFromDate(date: NSDate): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `date` | `NSDate` | 要格式化的日期。 |

**Return Value:**

- `string`: 格式化后的字符串。

### `dateFromString`

从字符串解析日期。

```javascript
dateFromString(string: string): NSDate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `string` | `string` | 日期字符串。 |

**Return Value:**

- `NSDate`: 解析得到的日期。

## 相关

- [NSDate](/reference/foundation/ns-date/)
- [NSLocale](/reference/foundation/ns-locale/)、[NSTimeZone](/reference/foundation/ns-time-zone/)
