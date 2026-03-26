---
title: NSUbiquitousKeyValueStore
description: iCloud键值存储对象。用于跨设备同步少量配置数据。
---

`NSUbiquitousKeyValueStore`用于iCloud键值同步。适合存放小体积配置，不适合大数据或强一致事务。

## 类成员 (Class members)

### `defaultStore`

获取默认iCloud键值存储实例。

```javascript
static defaultStore(): NSUbiquitousKeyValueStore
```

## 实例成员 (Instance members)

### 读取

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `objectForKey(key)` | key: string | any | 读取任意对象。 |
| `stringForKey(key)` | key: string | string \| null | 读取字符串。 |
| `arrayForKey(key)` | key: string | NSArray \| null | 读取数组。 |
| `dictionaryForKey(key)` | key: string | NSDictionary \| null | 读取字典。 |
| `dataForKey(key)` | key: string | NSData \| null | 读取二进制数据。 |
| `longLongForKey(key)` | key: string | number | 读取long long。 |
| `doubleForKey(key)` | key: string | number | 读取double。 |
| `boolForKey(key)` | key: string | boolean | 读取布尔值。 |

### 写入

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setObjectForKey(value, key)` | value: any, key: string | void | 写入对象。 |
| `setStringForKey(value, key)` | value: string, key: string | void | 写入字符串。 |
| `setArrayForKey(value, key)` | value: NSArray, key: string | void | 写入数组。 |
| `setDictionaryForKey(value, key)` | value: NSDictionary, key: string | void | 写入字典。 |
| `setDataForKey(value, key)` | value: NSData, key: string | void | 写入二进制数据。 |
| `setLongLongForKey(value, key)` | value: number, key: string | void | 写入long long。 |
| `setDoubleForKey(value, key)` | value: number, key: string | void | 写入double。 |
| `setBoolForKey(value, key)` | value: boolean, key: string | void | 写入布尔值。 |

### 其他

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `removeObjectForKey(key)` | key: string | void | 删除键。 |
| `dictionaryRepresentation()` | — | NSDictionary | 获取当前键值快照。 |
| `synchronize()` | — | boolean | 触发同步。 |

## 运行时建议

- 缺失key时，读取通常返回`nil/0/false`。
- `synchronize()`不保证强一致即时成功，受iCloud账号、网络和系统同步时机影响。

## 相关

- [NSUserDefaults](/reference/foundation/ns-user-defaults/)
