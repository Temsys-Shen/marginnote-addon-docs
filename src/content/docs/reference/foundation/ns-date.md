---
title: NSDate
description: 时间点对象。
---

`NSDate` 表示一个时间点。常见于笔记的 `createDate` / `modifiedDate` 等字段，或作为定时/格式化输入。

## 类成员 (Class members)

### `date`

当前时间。

```javascript
static date(): NSDate
```

**Return Value:**

- `NSDate`: 当前时间点。

### `dateWithTimeIntervalSinceNow`

相对当前时间的偏移。

```javascript
static dateWithTimeIntervalSinceNow(secs: number): NSDate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `secs` | `number` | 相对当前的秒数。 |

**Return Value:**

- `NSDate`: 新时间点。

### `dateWithTimeIntervalSince1970`

自 1970-01-01 00:00:00 UTC 的秒数创建。

```javascript
static dateWithTimeIntervalSince1970(secs: number): NSDate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `secs` | `number` | 秒数。 |

**Return Value:**

- `NSDate`: 新时间点。

### `dateWithTimeIntervalSinceReferenceDate`

自参考日期的秒数创建。

```javascript
static dateWithTimeIntervalSinceReferenceDate(secs: number): NSDate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `secs` | `number` | 秒数。 |

**Return Value:**

- `NSDate`: 新时间点。

## 实例成员 (Instance members)

### `timeIntervalSinceNow`

与当前时间的秒数差。

```javascript
timeIntervalSinceNow(): number
```

**Return Value:**

- `number`: 秒数差。

### `timeIntervalSince1970`

自 1970-01-01 00:00:00 UTC 的秒数。

```javascript
timeIntervalSince1970(): number
```

**Return Value:**

- `number`: 秒数。

### `timeIntervalSinceReferenceDate`

自参考日期的秒数。

```javascript
timeIntervalSinceReferenceDate(): number
```

**Return Value:**

- `number`: 秒数。

### `timeIntervalSinceDate`

与另一日期的秒数差。

```javascript
timeIntervalSinceDate(anotherDate: NSDate): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anotherDate` | `NSDate` | 另一日期。 |

**Return Value:**

- `number`: 秒数差。

### `earlierDate`

两者中较早的日期。

```javascript
earlierDate(anotherDate: NSDate): NSDate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anotherDate` | `NSDate` | 另一日期。 |

**Return Value:**

- `NSDate`: 较早的日期。

### `laterDate`

两者中较晚的日期。

```javascript
laterDate(anotherDate: NSDate): NSDate
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `anotherDate` | `NSDate` | 另一日期。 |

**Return Value:**

- `NSDate`: 较晚的日期。

### `compare`

与另一日期比较。

```javascript
compare(otherDate: NSDate): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherDate` | `NSDate` | 另一日期。 |

**Return Value:**

- `number`: 比较结果（小于/等于/大于）。

### `isEqualToDate`

是否与另一日期相等。

```javascript
isEqualToDate(otherDate: NSDate): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `otherDate` | `NSDate` | 另一日期。 |

**Return Value:**

- `boolean`: 是否相等。

### `description`

返回日期的字符串描述。

```javascript
description(): string
```

**Return Value:**

- `string`: 描述字符串。

### `descriptionWithLocale`

按 locale 返回描述。

```javascript
descriptionWithLocale(locale: any): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `locale` | `any` | locale。 |

**Return Value:**

- `string`: 描述字符串。

## 相关

- `NSDateFormatter`、`NSCalendar`（如可用）
