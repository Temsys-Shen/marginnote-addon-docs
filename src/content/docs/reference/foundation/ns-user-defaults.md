---
title: NSUserDefaults
description: 持久化存储少量键值配置，用于插件设置。
---

用于持久化存储少量用户/插件配置。通过 `NSUserDefaults.standardUserDefaults()` 获取标准实例。适合保存开关、计数、字符串等简单类型。

## 获取实例

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `static standardUserDefaults()` | `NSUserDefaults` | 获取标准用户默认设置实例。 |

## 写入

| 方法 | 说明 |
|------|------|
| `setObjectForKey(value, key)` | 存储任意对象（key 为 string）。 |
| `setIntegerForKey(value, key)` | 存储整数。 |
| `setFloatForKey(value, key)` | 存储浮点数。 |
| `setDoubleForKey(value, key)` | 存储双精度。 |
| `setBoolForKey(value, key)` | 存储布尔值。 |
| `setURLForKey(url, key)` | 存储 NSURL。 |

## 读取

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `objectForKey(key)` | any | 读取任意对象。 |
| `stringForKey(key)` | string | 读取字符串。 |
| `arrayForKey(key)` | NSArray | 读取数组。 |
| `dictionaryForKey(key)` | NSDictionary | 读取字典。 |
| `dataForKey(key)` | NSData | 读取数据。 |
| `stringArrayForKey(key)` | NSArray | 读取字符串数组。 |
| `integerForKey(key)` | number | 读取整数。 |
| `floatForKey(key)` | number | 读取浮点。 |
| `doubleForKey(key)` | number | 读取双精度。 |
| `boolForKey(key)` | boolean | 读取布尔值。 |
| `URLForKey(key)` | NSURL | 读取 URL。 |

## 其他

| 方法 | 说明 |
|------|------|
| `removeObjectForKey(key)` | 移除指定键。 |
| `synchronize()` | 强制立即写入磁盘，返回是否成功。 |
| `registerDefaults(registrationDictionary)` | 注册默认值（未设置时使用）。 |

## 相关

- [教程：存储与文件](/guides/storage-and-files/)、[Cookbook：插件设置页](/guides/cookbook/addon-settings/)
