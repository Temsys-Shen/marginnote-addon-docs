---
title: UIImagePickerController
description: 系统媒体选择/拍摄控制器。支持选择来源、媒体类型、拍照与视频录制控制。
---

`UIImagePickerController` 用于从相册/相机选择图片或视频，或直接拍摄。它在插件运行时以控制器形式出现，常配合导航控制器/弹出层展示。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `videoMaximumDuration` | number | 视频最大时长（秒）。 |
| `mediaTypes` | NSArray | 可选媒体类型列表。 |
| `sourceType` | number | 来源类型（相机/相册等）。 |
| `allowsEditing` | boolean | 是否允许编辑。 |
| `allowsImageEditing` | boolean | 是否允许图片编辑（旧字段，部分环境仍存在）。 |
| `cameraOverlayView` | UIView | 相机覆盖层视图。 |
| `cameraViewTransform` | object | 相机预览变换。 |
| `showsCameraControls` | boolean | 是否显示系统相机控件。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `takePicture()` | — | void | 触发拍照。 |
| `startVideoCapture()` | — | boolean | 开始录制视频。 |
| `stopVideoCapture()` | — | void | 停止录制视频。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `isSourceTypeAvailable(sourceType)` | sourceType: number | boolean | 判断某来源是否可用。 |
| `availableMediaTypesForSourceType(sourceType)` | sourceType: number | NSArray | 返回某来源可用的媒体类型列表。 |

## 相关

- [UIView](/reference/uikit/uiview/)
- [NSArray](/reference/foundation/ns-array/)
