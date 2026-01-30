---
title: NSLocale
description: 本地化区域信息（语言/地区）。
---

`NSLocale` 表示区域信息，常用于 `NSDateFormatter`、`NSNumberFormatter` 等格式化组件。

## 类成员 (Class members)

### `currentLocale`

当前用户区域。

```javascript
static currentLocale(): NSLocale
```

**Return Value:**

- `NSLocale`: 当前区域实例。

### `systemLocale`

系统区域。

```javascript
static systemLocale(): NSLocale
```

**Return Value:**

- `NSLocale`: 系统区域实例。

### `localeWithLocaleIdentifier`

从区域标识创建。

```javascript
static localeWithLocaleIdentifier(identifier: string): NSLocale
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifier` | `string` | 区域标识（如 "zh_CN"）。 |

**Return Value:**

- `NSLocale`: 新区域实例。

## 实例成员 (Instance members)

### `localeIdentifier`

区域标识字符串。

```javascript
localeIdentifier(): string
```

**Return Value:**

- `string`: 区域标识。

### `objectForKey`

按 key 取区域属性。

```javascript
objectForKey(key: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `any` | 属性 key。 |

**Return Value:**

- `any`: 属性值。
