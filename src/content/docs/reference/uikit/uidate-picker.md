---
title: UIDatePicker
description: 日期/时间选择控件。支持时区/语言环境、最小/最大日期与倒计时模式。
---

`UIDatePicker` 是用于选择日期/时间或倒计时的控件，继承自 [UIControl](/reference/uikit/uicontrol/)。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `locale` | NSLocale | 语言/地区设置。 |
| `datePickerMode` | number | 模式（日期、时间、日期时间、倒计时等）。 |
| `timeZone` | NSTimeZone | 时区。 |
| `countDownDuration` | number | 倒计时持续时长（秒）。 |
| `minuteInterval` | number | 分钟步进。 |
| `date` | NSDate | 当前选中日期。 |
| `minimumDate` | NSDate \| null | 最小可选日期。 |
| `maximumDate` | NSDate \| null | 最大可选日期。 |
| `calendar` | id | 日历对象。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setDateAnimated(date, animated)` | date: NSDate, animated: boolean | void | 设置日期（可动画）。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UIDatePicker` 的类成员。

## 相关

- [UIControl](/reference/uikit/uicontrol/)
- [NSDate](/reference/foundation/ns-date/)、[NSTimeZone](/reference/foundation/ns-time-zone/)、[NSLocale](/reference/foundation/ns-locale/)
