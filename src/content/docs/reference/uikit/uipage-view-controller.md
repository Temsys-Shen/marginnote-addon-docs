---
title: UIPageViewController
description: 分页容器控制器。支持设置数据源/代理、转场样式与切换页面并获得完成回调。
---

`UIPageViewController` 继承自 [UIViewController](/reference/uikit/uiview-controller/)，用于构建左右翻页/卷轴式分页容器。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `doubleSided` | boolean | 是否双面显示。 |
| `navigationOrientation` | number | 只读。导航方向。 |
| `spineLocation` | number | 只读。书脊位置。 |
| `transitionStyle` | number | 只读。转场样式。 |
| `gestureRecognizers` | NSArray | 只读。内置手势识别器列表。 |
| `viewControllers` | NSArray | 只读。当前页面控制器列表。 |
| `delegate` | id | 代理对象。 |
| `dataSource` | id | 数据源对象。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `initWithTransitionStyleNavigationOrientationOptions(style, navigationOrientation, options)` | style: number, navigationOrientation: number, options: NSDictionary \| null | id | 初始化并指定转场/方向/选项。 |
| `setViewControllersDirectionAnimatedCompletion(viewControllers, direction, animated, completion)` | viewControllers: NSArray, direction: number, animated: boolean, completion: (finished: boolean) => void | void | 切换当前页控制器列表，并在完成后回调。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UIPageViewController` 的类成员。

## 相关

- [UIViewController](/reference/uikit/uiview-controller/)
- [NSArray](/reference/foundation/ns-array/)、[NSDictionary](/reference/foundation/ns-dictionary/)
