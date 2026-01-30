---
title: NSUserDefaults
description: 持久化存储少量键值配置，用于插件设置。
---

用于持久化存储少量用户/插件配置。通过 `NSUserDefaults.standardUserDefaults()` 获取标准实例。适合保存开关、计数、字符串等简单类型。

## 类成员 (Class members)

### `standardUserDefaults`

获取标准用户默认设置实例。

```javascript
static standardUserDefaults(): NSUserDefaults
```

**Return Value:**

- `NSUserDefaults`: 单例对象。

## 实例成员 (Instance members)

### 写入

### `setObjectForKey`

存储任意对象（通常为字符串、数字、数组、字典等可序列化类型）。

```javascript
setObjectForKey(value: any, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `any` | 要存储的值。 |
| `key` | `string` | 键名。 |

### `setIntegerForKey`

存储整数。

```javascript
setIntegerForKey(value: number, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 整数值。 |
| `key` | `string` | 键名。 |

### `setFloatForKey`

存储浮点数。

```javascript
setFloatForKey(value: number, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 浮点数值。 |
| `key` | `string` | 键名。 |

### `setDoubleForKey`

存储双精度浮点数。

```javascript
setDoubleForKey(value: number, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 双精度数值。 |
| `key` | `string` | 键名。 |

### `setBoolForKey`

存储布尔值。

```javascript
setBoolForKey(value: boolean, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `boolean` | 布尔值。 |
| `key` | `string` | 键名。 |

### `setURLForKey`

存储 URL。

```javascript
setURLForKey(url: NSURL, key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | URL 对象。 |
| `key` | `string` | 键名。 |

### 读取

### `objectForKey`

读取任意对象。

```javascript
objectForKey(key: string): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键名。 |

**Return Value:**

- `any`: 存储的对象（若不存在则返回 undefined/null）。

### `stringForKey`

读取字符串。

```javascript
stringForKey(key: string): string | null
```

**Return Value:**

- `string | null`: 字符串值。

### `arrayForKey`

读取数组。

```javascript
arrayForKey(key: string): NSArray | null
```

**Return Value:**

- `NSArray | null`: 数组对象。

### `dictionaryForKey`

读取字典。

```javascript
dictionaryForKey(key: string): NSDictionary | null
```

**Return Value:**

- `NSDictionary | null`: 字典对象。

### `dataForKey`

读取二进制数据。

```javascript
dataForKey(key: string): NSData | null
```

**Return Value:**

- `NSData | null`: 数据对象。

### `stringArrayForKey`

读取字符串数组。

```javascript
stringArrayForKey(key: string): string[] | null
```

**Return Value:**

- `string[] | null`: 字符串数组。

### `integerForKey`

读取整数。

```javascript
integerForKey(key: string): number
```

**Return Value:**

- `number`: 整数值（若不存在通常返回 0）。

### `floatForKey`

读取浮点数。

```javascript
floatForKey(key: string): number
```

**Return Value:**

- `number`: 浮点数值。

### `doubleForKey`

读取双精度浮点数。

```javascript
doubleForKey(key: string): number
```

**Return Value:**

- `number`: 双精度数值。

### `boolForKey`

读取布尔值。

```javascript
boolForKey(key: string): boolean
```

**Return Value:**

- `boolean`: 布尔值（若不存在通常返回 false）。

### `URLForKey`

读取 URL。

```javascript
URLForKey(key: string): NSURL | null
```

**Return Value:**

- `NSURL | null`: URL 对象。

### 其他

### `removeObjectForKey`

移除指定键的值。

```javascript
removeObjectForKey(key: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | 键名。 |

### `synchronize`

强制立即写入磁盘。

```javascript
synchronize(): boolean
```

**Return Value:**

- `boolean`: 是否写入成功。

**Note:** 系统通常会自动保存，仅在需要立即持久化时调用。

### `registerDefaults`

注册默认值（在未设置值时生效）。

```javascript
registerDefaults(registrationDictionary: NSDictionary): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `registrationDictionary` | `NSDictionary` | 包含默认键值对的字典。 |

## 相关

- [教程：存储与文件](/guides/storage-and-files/)、[Cookbook：插件设置页](/guides/cookbook/addon-settings/)
