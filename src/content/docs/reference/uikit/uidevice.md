---
title: UIDevice
description: 设备信息入口（单例），读取系统版本、设备型号、标识符等。
---

`UIDevice` 提供设备与系统信息读取能力。在插件里常用于判断系统版本、设备类型（iPad/mac 等场景需结合 `Application.osType` 等）。

## 类成员 (Class members)

### `currentDevice`

当前设备单例。

```javascript
static currentDevice(): UIDevice
```

**Return Value:**

- `UIDevice`: 设备实例。

## 实例成员 (Instance members)

### 属性（只读）

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `name` | `string` | 设备名称。 |
| `model` | `string` | 型号。 |
| `localizedModel` | `string` | 本地化型号。 |
| `systemName` | `string` | 系统名。 |
| `systemVersion` | `string` | 系统版本。 |
| `identifierForVendor` | `any` | 厂商标识。 |
| `userInterfaceIdiom` | `number` | 界面风格（手机/平板等）。 |
| `orientation` | `number` | 设备方向。 |
| `batteryLevel` | `number` | 电量（0~1）。 |
| `proximityState` | `number` | 接近传感器状态。 |
| `multitaskingSupported` | `boolean` | 是否支持多任务。 |
| `generatesDeviceOrientationNotifications` | `boolean` | 是否正在生成方向通知。 |
| `enableInputClicksWhenVisible` | `boolean` | 可见时是否允许输入点击。 |

### 属性（可读写）

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `proximityMonitoringEnabled` | `boolean` | 是否开启接近监测。 |
| `batteryMonitoringEnabled` | `boolean` | 是否开启电量监测。 |

### `beginGeneratingDeviceOrientationNotifications`

开始生成设备方向通知。

```javascript
beginGeneratingDeviceOrientationNotifications(): void
```

**Return Value:**

- 无。

### `endGeneratingDeviceOrientationNotifications`

停止生成设备方向通知。

```javascript
endGeneratingDeviceOrientationNotifications(): void
```

**Return Value:**

- 无。

### `playInputClick`

播放输入点击音效。

```javascript
playInputClick(): void
```

**Return Value:**

- 无。
