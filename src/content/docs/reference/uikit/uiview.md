---
title: UIView
description: 所有 UI 控件的基类，管理 frame、子视图与图层。
---

所有 UI 控件的基类。通过 `new UIView(frame)` 或 `initWithFrame(frame)` 创建，frame 为 `{ x, y, width, height }`。可将插件面板添加到 `StudyController.view`。

## 实例成员 (Instance members)

### 属性（常用）

| 属性 | 类型 | 说明 |
|------|------|------|
| `frame` | CGRect | 位置与大小。 |
| `bounds` | CGRect | 内部坐标系。 |
| `backgroundColor` | UIColor | 背景色。 |
| `hidden` | boolean | 是否隐藏。 |
| `layer` | CALayer | 图层，可设置 cornerRadius、borderWidth、borderColor 等。 |
| `subviews` | NSArray | 子视图数组。 |
| `superview` | UIView | 父视图。 |
| `window` | UIWindow | 所在窗口。 |
| `tag` | number | 标签。 |
| `alpha` | number | 透明度。 |
| `autoresizingMask` | number | 自动调整掩码（如 1<<0 右边缘）。 |

### 方法（常用）

| 方法 | 说明 |
|------|------|
| `addSubview(view)` | 添加子视图。 |
| `removeFromSuperview()` | 从父视图移除。 |
| `insertSubviewBelowSubview(view, sibling)` | 插入到某子视图下方。 |
| `insertSubviewAboveSubview(view, sibling)` | 插入到某子视图上方。 |
| `viewWithTag(tag)` | 按 tag 查找子视图。 |

## 相关

- [UIViewController](/reference/uikit/uiview-controller/)、[UIColor](/reference/uikit/uicolor/)
- [教程：原生 UI](/guides/native-ui/)
