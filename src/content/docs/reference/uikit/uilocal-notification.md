---
title: UILocalNotification
description: 本地通知对象（旧）。可设置触发时间、提示文案、声音与 userInfo。
---

`UILocalNotification` 表示一条本地通知（旧接口）。在插件运行时它主要作为“数据对象”使用，用于配置通知的触发时间、提示文案与附加信息。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `timeZone` | NSTimeZone \| null | 通知时区。 |
| `userInfo` | NSDictionary \| null | 自定义附加信息。 |
| `alertBody` | string \| null | 提示文案。 |
| `soundName` | string \| null | 声音名称。 |
| `fireDate` | NSDate \| null | 触发时间。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UILocalNotification` 的类成员。

## 相关

- [NSDate](/reference/foundation/ns-date/)
- [NSTimeZone](/reference/foundation/ns-time-zone/)
- [NSDictionary](/reference/foundation/ns-dictionary/)
