---
title: NSNumberFormatter
description: 数字格式化与解析（本地化/千分位/货币等）。
---

`NSNumberFormatter` 用于把 `NSNumber` 与字符串互相转换，并控制本地化与显示格式（小数位、千分位、货币符号等）。

> 本类型导出方法/属性较多，下面按“核心用法优先”列出常用项；遇到更细的配置项，直接在站内搜索成员名即可。

## 类成员 (Class members)

### `localizedStringFromNumberNumberStyle`

按样式生成本地化字符串。

```javascript
static localizedStringFromNumberNumberStyle(num: NSNumber, nstyle: number): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `num` | `NSNumber` | 数值。 |
| `nstyle` | `number` | 样式（如 decimal、currency）。 |

**Return Value:**

- `string`: 本地化字符串。

### `defaultFormatterBehavior`

默认格式化行为。

```javascript
static defaultFormatterBehavior(): number
```

**Return Value:**

- `number`: 行为值。

### `setDefaultFormatterBehavior`

设置默认格式化行为。

```javascript
static setDefaultFormatterBehavior(behavior: number): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `behavior` | `number` | 行为值。 |

**Return Value:**

- 无。

## 实例成员 (Instance members)

### `stringFromNumber`

将数值格式化为字符串。

```javascript
stringFromNumber(number: NSNumber): string
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `number` | `NSNumber` | 数值。 |

**Return Value:**

- `string`: 格式化后的字符串。

### `numberFromString`

从字符串解析数值。

```javascript
numberFromString(string: string): NSNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `string` | `string` | 数字字符串。 |

**Return Value:**

- `NSNumber`: 解析得到的数值。

### `getObjectValueForStringRangeError`

从字符串解析对象（带范围与错误输出）。

```javascript
getObjectValueForStringRangeError(obj: any, string: string, rangep: any, error: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `obj` | `any` | 输出参数，接收解析结果。 |
| `string` | `string` | 源字符串。 |
| `rangep` | `any` | 输出参数，接收解析到的范围。 |
| `error` | `any` | 输出参数，接收错误。 |

**Return Value:**

- `boolean`: 是否解析成功。

### 常用配置（属性/方法）

| 方法/属性 | 说明 |
| :--- | :--- |
| `numberStyle()` / `setNumberStyle(style)` | 数字样式。 |
| `locale()` / `setLocale(locale)` | 区域。 |
| `allowsFloats()` / `setAllowsFloats(flag)` | 是否允许浮点。 |
| `generatesDecimalNumbers()` / `setGeneratesDecimalNumbers(b)` | 是否生成 NSDecimalNumber。 |
| `decimalSeparator()` | 小数分隔符。 |
| `groupingSeparator()` | 千分位分隔符。 |
| `usesGroupingSeparator()` / `setUsesGroupingSeparator(b)` | 是否使用千分位。 |
| `minimumFractionDigits()` / `setMinimumFractionDigits(number)` | 最少小数位。 |
| `maximumFractionDigits()` / `setMaximumFractionDigits(number)` | 最多小数位。 |
| `minimumIntegerDigits()` / `setMinimumIntegerDigits(number)` | 最少整数位。 |
| `maximumIntegerDigits()` / `setMaximumIntegerDigits(number)` | 最多整数位。 |
| `positivePrefix()` / `setPositivePrefix(string)` | 正数前缀。 |
| `positiveSuffix()` / `setPositiveSuffix(string)` | 正数后缀。 |
| `negativePrefix()` / `setNegativePrefix(string)` | 负数前缀。 |
| `negativeSuffix()` / `setNegativeSuffix(string)` | 负数后缀。 |

### 进阶

本类型还导出了大量与舍入、科学计数、货币、百分比、解析容错、符号显示相关的 getter/setter（例如 roundingMode、currencyCode、percentSymbol、lenient、usesSignificantDigits 等）。可通过站内搜索成员名定位。

## 相关

- [NSNumber](/reference/foundation/ns-number/)
- [NSDecimalNumber](/reference/foundation/ns-decimal-number/)
