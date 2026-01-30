---
title: UIApplication
description: iOS 应用级入口对象（单例），用于打开 URL、管理本地通知等。
---

`UIApplication` 是 iOS 应用级入口对象。在插件环境中常用于打开 URL、判断 URL 是否可打开，以及（旧式）本地通知调度。

## 类成员 (Class members)

### `sharedApplication`

应用单例。

```javascript
static sharedApplication(): UIApplication
```

**Return Value:**

- `UIApplication`: 应用实例。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `applicationState` | `number` | 只读。应用状态。 |
| `scheduledLocalNotifications` | `NSArray` | 只读。已调度的本地通知。 |
| `idleTimerDisabled` | `boolean` | 可读写。是否禁用休眠定时器。 |
| `applicationSupportsShakeToEdit` | `boolean` | 可读写。是否支持摇动编辑。 |
| `networkActivityIndicatorVisible` | `boolean` | 可读写。是否显示网络活动指示。 |

### `openURL`

打开 URL。

```javascript
openURL(url: NSURL): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 要打开的 URL。 |

**Return Value:**

- `boolean`: 是否成功打开。

### `canOpenURL`

是否可打开该 URL。

```javascript
canOpenURL(url: NSURL): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | URL。 |

**Return Value:**

- `boolean`: 是否可打开。

### `openURLOptionsCompletionHandler`

打开 URL（带选项与完成回调）。

```javascript
openURLOptionsCompletionHandler(url: NSURL, options: NSDictionary, completion: (success: boolean) => void): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `NSURL` | 要打开的 URL。 |
| `options` | `NSDictionary` | 选项。 |
| `completion` | `(success: boolean) => void` | 完成回调。 |

**Return Value:**

- 无。

### `cancelLocalNotification`

取消本地通知。

```javascript
cancelLocalNotification(notification: UILocalNotification): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `notification` | `UILocalNotification` | 要取消的通知。 |

**Return Value:**

- 无。

### `scheduleLocalNotification`

调度本地通知。

```javascript
scheduleLocalNotification(notification: UILocalNotification): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `notification` | `UILocalNotification` | 要调度的通知。 |

**Return Value:**

- 无。
