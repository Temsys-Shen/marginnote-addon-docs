---
title: UIViewController
description: 视图控制器基类，管理 view 与生命周期。
---

视图控制器基类。可用 `JSB.defineClass('MyVC : UIViewController', { viewDidLoad: function() { ... } })` 定义子类。`view` 为其管理的根视图。

## 实例成员 (Instance members)

### 属性（常用）

| 属性 | 类型 | 说明 |
|------|------|------|
| `view` | UIView | 控制器管理的视图。 |
| `title` | string | 标题。 |
| `navigationItem` | UINavigationItem | 导航栏项。 |
| `navigationController` | UINavigationController | 所在导航控制器。 |

### 生命周期方法

| 方法 | 说明 |
|------|------|
| `viewDidLoad()` | 视图加载完成后调用，常在此做 UI 初始化。 |
| `viewWillAppear(animated)` | 视图即将显示。 |
| `viewDidAppear(animated)` | 视图已显示。 |
| `viewWillDisappear(animated)` | 视图即将消失。 |
| `viewDidDisappear(animated)` | 视图已消失。 |

## 相关

- [UIView](/reference/uikit/uiview/)
- [教程：原生 UI](/guides/native-ui/)
