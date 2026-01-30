---
title: UIScreen
description: 屏幕信息入口（主屏/外接屏），包含 bounds/scale/mode 等。
---

`UIScreen` 表示一个屏幕（主屏或外接屏）。在插件中常用于获取屏幕尺寸、缩放比例、可用显示模式等。

## 类成员 (Class members)

### `mainScreen`

主屏幕。

```javascript
static mainScreen(): UIScreen
```

**Return Value:**

- `UIScreen`: 主屏实例。

### `screens`

所有屏幕数组。

```javascript
static screens(): NSArray
```

**Return Value:**

- `NSArray`: 屏幕数组。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `bounds` | `any` | 只读。屏幕边界。 |
| `applicationFrame` | `any` | 只读。应用可用区域。 |
| `availableModes` | `NSArray` | 只读。可用显示模式。 |
| `scale` | `number` | 只读。像素比。 |
| `brightness` | `number` | 可读写。亮度。 |
| `currentMode` | `any` | 可读写。当前显示模式。 |

### `snapshotViewAfterScreenUpdates`

截取屏幕视图。

```javascript
snapshotViewAfterScreenUpdates(afterUpdates: boolean): UIView
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `afterUpdates` | `boolean` | 是否在更新完成后截取。 |

**Return Value:**

- `UIView`: 快照视图。
