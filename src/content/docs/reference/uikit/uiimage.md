---
title: UIImage
description: 图片对象。支持按名称/文件/数据创建，绘制到点或矩形，生成可拉伸图与导出 jpeg/png 数据。
---

`UIImage` 表示一张图片，常用于 UI 组件（如 `UIImageView`）的显示，或在绘制上下文中绘制到指定位置/区域。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `scale` | number | 只读。缩放比例。 |
| `size` | { width: number, height: number } | 只读。图片尺寸（点）。 |
| `imageOrientation` | number | 只读。图片方向。 |
| `leftCapWidth` | number | 只读。可拉伸图左边距。 |
| `topCapHeight` | number | 只读。可拉伸图上边距。 |
| `CGImage` | id | 只读。底层 CGImage。 |

### 绘制

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `drawAtPoint(point)` | point: { x: number, y: number } | void | 在指定点绘制。 |
| `drawAtPointBlendModeAlpha(point, blendMode, alpha)` | point: { x: number, y: number }, blendMode: number, alpha: number | void | 按混合模式与透明度绘制。 |
| `drawInRect(rect)` | rect: { x: number, y: number, width: number, height: number } | void | 绘制到指定矩形。 |
| `drawInRectBlendModeAlpha(rect, blendMode, alpha)` | rect: { x: number, y: number, width: number, height: number }, blendMode: number, alpha: number | void | 按混合模式与透明度绘制到矩形。 |
| `drawAsPatternInRect(rect)` | rect: { x: number, y: number, width: number, height: number } | void | 以平铺模式绘制到矩形。 |

### 变体与导出

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `CGImage()` | — | id | 返回底层 CGImage。 |
| `resizableImageWithCapInsets(capInsets)` | capInsets: object | UIImage | 生成可拉伸图片。 |
| `imageWithAlignmentRectInsets(alignmentInsets)` | alignmentInsets: object | UIImage | 返回带 alignmentRectInsets 的图片变体。 |
| `stretchableImageWithLeftCapWidthTopCapHeight(leftCapWidth, topCapHeight)` | leftCapWidth: number, topCapHeight: number | UIImage | 生成可拉伸图片（旧式 cap 参数）。 |
| `jpegData(compressionQuality)` | compressionQuality: number | NSData | 导出 JPEG 数据（0~1）。 |
| `pngData()` | — | NSData | 导出 PNG 数据。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `imageNamed(name)` | name: string | UIImage \| null | 从资源名加载图片。 |
| `imageWithContentsOfFile(path)` | path: string | UIImage \| null | 从文件路径加载图片。 |
| `imageWithData(data)` | data: NSData | UIImage \| null | 从二进制数据创建图片。 |
| `imageWithDataScale(data, scale)` | data: NSData, scale: number | UIImage \| null | 从数据创建并指定 scale。 |
| `imageWithCGImage(cgImage)` | cgImage: id | UIImage \| null | 从 CGImage 创建图片。 |
| `imageWithCGImageScaleOrientation(cgImage, scale, orientation)` | cgImage: id, scale: number, orientation: number | UIImage \| null | 从 CGImage 创建并指定 scale 与方向。 |

## 相关

- [NSData](/reference/foundation/ns-data/)
- [UIImageView](/reference/uikit/uiimage-view/)
