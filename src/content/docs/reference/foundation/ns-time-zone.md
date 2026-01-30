---
title: NSTimeZone
description: 时区对象。
---

`NSTimeZone` 表示时区信息，通常与 `NSDateFormatter` 配合使用。

## 类成员 (Class members)

### `systemTimeZone`

系统时区。

```javascript
static systemTimeZone(): NSTimeZone
```

**Return Value:**

- `NSTimeZone`: 系统时区实例。

### `localTimeZone`

本地时区。

```javascript
static localTimeZone(): NSTimeZone
```

**Return Value:**

- `NSTimeZone`: 本地时区实例。

### `timeZoneWithName`

从时区名创建。

```javascript
static timeZoneWithName(name: string): NSTimeZone
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 时区名（如 "Asia/Shanghai"）。 |

**Return Value:**

- `NSTimeZone`: 新时区实例。

## 实例成员 (Instance members)

### `name`

时区名称。

```javascript
name(): string
```

**Return Value:**

- `string`: 时区名。

### `secondsFromGMTForDate`

某日期在该时区相对 GMT 的秒数偏移。

```javascript
secondsFromGMTForDate(date: NSDate): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `date` | `NSDate` | 日期。 |

**Return Value:**

- `number`: 秒数偏移。

## 相关

- [NSDateFormatter](/reference/foundation/ns-date-formatter/)
