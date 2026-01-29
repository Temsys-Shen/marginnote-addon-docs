---
title: NSNotificationCenter
description: 通知中心，用于插件内部或与系统的事件通信。
---

用于发送与接收应用内通知。通过 `NSNotificationCenter.defaultCenter()` 获取默认中心。

## 获取实例

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `static defaultCenter()` | NSNotificationCenter | 获取默认通知中心。 |

## 方法

| 方法 | 参数 | 说明 |
|------|------|------|
| `addObserverSelectorName(observer, aSelector, aName)` | observer: id, aSelector: string（方法名）, aName: string | 添加观察者（JS 中 _addObserver）。 |
| `postNotificationNameObject( aName, anObject)` | aName: string, anObject: id | 发送通知。 |
| `postNotificationNameObjectUserInfo(aName, anObject, aUserInfo)` | aName, anObject, aUserInfo: NSDictionary | 发送带 userInfo 的通知。 |
| `removeObserver(observer)` | observer: id | 移除观察者。 |
| `removeObserverName(observer, aName)` | observer, aName | 移除指定名称的观察（_removeObserverName）。 |

## 相关

- 用于插件内部多模块或与 MarginNote 事件联动。
