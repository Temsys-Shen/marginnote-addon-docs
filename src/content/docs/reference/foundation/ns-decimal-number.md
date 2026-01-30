---
title: NSDecimalNumber
description: 十进制高精度数值（适合货币/精确计算）。
---

`NSDecimalNumber` 提供十进制高精度计算（避免浮点误差），适合货币、精确比例计算等。

## 类成员 (Class members)

### `decimalNumberWithString`

从字符串创建。

```javascript
static decimalNumberWithString(numberValue: string): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `numberValue` | `string` | 数字字符串。 |

**Return Value:**

- `NSDecimalNumber`: 新实例。

### `decimalNumberWithStringLocale`

从字符串与 locale 创建。

```javascript
static decimalNumberWithStringLocale(numberValue: string, locale: any): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `numberValue` | `string` | 数字字符串。 |
| `locale` | `any` | locale。 |

**Return Value:**

- `NSDecimalNumber`: 新实例。

### `decimalNumberWithMantissaExponentIsNegative`

从尾数与指数创建。

```javascript
static decimalNumberWithMantissaExponentIsNegative(mantissa: number, exponent: number, flag: boolean): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mantissa` | `number` | 尾数。 |
| `exponent` | `number` | 指数。 |
| `flag` | `boolean` | 是否负数。 |

**Return Value:**

- `NSDecimalNumber`: 新实例。

### `zero`

零。

```javascript
static zero(): NSDecimalNumber
```

**Return Value:**

- `NSDecimalNumber`: 零。

### `one`

一。

```javascript
static one(): NSDecimalNumber
```

**Return Value:**

- `NSDecimalNumber`: 一。

### `minimumDecimalNumber`

最小可表示值。

```javascript
static minimumDecimalNumber(): NSDecimalNumber
```

**Return Value:**

- `NSDecimalNumber`: 最小值。

### `maximumDecimalNumber`

最大可表示值。

```javascript
static maximumDecimalNumber(): NSDecimalNumber
```

**Return Value:**

- `NSDecimalNumber`: 最大值。

### `notANumber`

非数字。

```javascript
static notANumber(): NSDecimalNumber
```

**Return Value:**

- `NSDecimalNumber`: NaN。

### `defaultBehavior`

默认舍入/异常行为。

```javascript
static defaultBehavior(): any
```

**Return Value:**

- `any`: 默认行为对象。

### `setDefaultBehavior`

设置默认行为。

```javascript
static setDefaultBehavior(behavior: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `behavior` | `any` | 行为对象。 |

**Return Value:**

- 无。

## 实例成员 (Instance members)

### `decimalNumberByAdding`

加。

```javascript
decimalNumberByAdding(decimalNumber: NSDecimalNumber): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `decimalNumber` | `NSDecimalNumber` | 加数。 |

**Return Value:**

- `NSDecimalNumber`: 和。

### `decimalNumberByAddingWithBehavior`

按指定行为加。

```javascript
decimalNumberByAddingWithBehavior(decimalNumber: NSDecimalNumber, behavior: any): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `decimalNumber` | `NSDecimalNumber` | 加数。 |
| `behavior` | `any` | 舍入/异常行为。 |

**Return Value:**

- `NSDecimalNumber`: 和。

### `decimalNumberBySubtracting`

减。

```javascript
decimalNumberBySubtracting(decimalNumber: NSDecimalNumber): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `decimalNumber` | `NSDecimalNumber` | 减数。 |

**Return Value:**

- `NSDecimalNumber`: 差。

### `decimalNumberBySubtractingWithBehavior`

按指定行为减。

```javascript
decimalNumberBySubtractingWithBehavior(decimalNumber: NSDecimalNumber, behavior: any): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `decimalNumber` | `NSDecimalNumber` | 减数。 |
| `behavior` | `any` | 行为。 |

**Return Value:**

- `NSDecimalNumber`: 差。

### `decimalNumberByMultiplyingBy`

乘。

```javascript
decimalNumberByMultiplyingBy(decimalNumber: NSDecimalNumber): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `decimalNumber` | `NSDecimalNumber` | 乘数。 |

**Return Value:**

- `NSDecimalNumber`: 积。

### `decimalNumberByMultiplyingByWithBehavior`

按指定行为乘。

```javascript
decimalNumberByMultiplyingByWithBehavior(decimalNumber: NSDecimalNumber, behavior: any): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `decimalNumber` | `NSDecimalNumber` | 乘数。 |
| `behavior` | `any` | 行为。 |

**Return Value:**

- `NSDecimalNumber`: 积。

### `decimalNumberByDividingBy`

除。

```javascript
decimalNumberByDividingBy(decimalNumber: NSDecimalNumber): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `decimalNumber` | `NSDecimalNumber` | 除数。 |

**Return Value:**

- `NSDecimalNumber`: 商。

### `decimalNumberByDividingByWithBehavior`

按指定行为除。

```javascript
decimalNumberByDividingByWithBehavior(decimalNumber: NSDecimalNumber, behavior: any): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `decimalNumber` | `NSDecimalNumber` | 除数。 |
| `behavior` | `any` | 行为。 |

**Return Value:**

- `NSDecimalNumber`: 商。

### `decimalNumberByRaisingToPower`

幂。

```javascript
decimalNumberByRaisingToPower(power: number): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `power` | `number` | 指数。 |

**Return Value:**

- `NSDecimalNumber`: 结果。

### `decimalNumberByRaisingToPowerWithBehavior`

按指定行为求幂。

```javascript
decimalNumberByRaisingToPowerWithBehavior(power: number, behavior: any): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `power` | `number` | 指数。 |
| `behavior` | `any` | 行为。 |

**Return Value:**

- `NSDecimalNumber`: 结果。

### `decimalNumberByMultiplyingByPowerOf10`

乘以 10 的幂。

```javascript
decimalNumberByMultiplyingByPowerOf10(power: number): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `power` | `number` | 指数。 |

**Return Value:**

- `NSDecimalNumber`: 结果。

### `decimalNumberByMultiplyingByPowerOf10WithBehavior`

按指定行为乘以 10 的幂。

```javascript
decimalNumberByMultiplyingByPowerOf10WithBehavior(power: number, behavior: any): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `power` | `number` | 指数。 |
| `behavior` | `any` | 行为。 |

**Return Value:**

- `NSDecimalNumber`: 结果。

### `decimalNumberByRoundingAccordingToBehavior`

按指定行为舍入。

```javascript
decimalNumberByRoundingAccordingToBehavior(behavior: any): NSDecimalNumber
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `behavior` | `any` | 行为。 |

**Return Value:**

- `NSDecimalNumber`: 舍入结果。

### `compare`

与另一 NSDecimalNumber 比较。

```javascript
compare(decimalNumber: NSDecimalNumber): number
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `decimalNumber` | `NSDecimalNumber` | 另一数值。 |

**Return Value:**

- `number`: 比较结果。

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

### `isEqualToNumber`

是否与另一 NSNumber 数值相等。

```javascript
isEqualToNumber(number: NSNumber): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `number` | `NSNumber` | 另一数值对象。 |

**Return Value:**

- `boolean`: 是否相等。
