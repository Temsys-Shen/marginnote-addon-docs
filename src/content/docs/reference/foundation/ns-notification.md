---
title: NSNotification
description: 通知对象（name/object/userInfo）。
---

`NSNotification` 表示一条通知（name、object、userInfo）。常见于 `NSNotificationCenter` 的 post/回调参数。

## 类成员 (Class members)

### `notificationWithNameObject`

创建无 userInfo 的通知。

```javascript
static notificationWithNameObject(aName: string, anObject: any): NSNotification
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aName` | `string` | 通知名。 |
| `anObject` | `any` | 关联对象。 |

**Return Value:**

- `NSNotification`: 新通知实例。

### `notificationWithNameObjectUserInfo`

创建带 userInfo 的通知。

```javascript
static notificationWithNameObjectUserInfo(aName: string, anObject: any, aUserInfo: NSDictionary): NSNotification
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aName` | `string` | 通知名。 |
| `anObject` | `any` | 关联对象。 |
| `aUserInfo` | `NSDictionary` | 附加信息。 |

**Return Value:**

- `NSNotification`: 新通知实例。

## 实例成员 (Instance members)

### `initWithNameObjectUserInfo`

初始化通知实例。

```javascript
initWithNameObjectUserInfo(name: string, object: any, userInfo: NSDictionary): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | 通知名。 |
| `object` | `any` | 关联对象。 |
| `userInfo` | `NSDictionary` | 附加信息。 |

**Return Value:**

- 无。

## 相关

- [NSNotificationCenter](/reference/foundation/ns-notification-center/)
