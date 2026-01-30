---
title: UINavigationController
description: 导航控制器。管理 ViewController 栈，并控制导航栏/工具栏显示与 push/pop。
---

`UINavigationController` 继承自 [UIViewController](/reference/uikit/uiview-controller/)，用于管理一个 ViewController 栈，并提供 push/pop 与导航栏/工具栏控制。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `visibleViewController` | UIViewController | 只读。当前可见控制器。 |
| `topViewController` | UIViewController | 只读。栈顶控制器。 |
| `viewControllers` | NSArray | 控制器栈。 |
| `navigationBar` | UINavigationBar | 只读。导航栏。 |
| `toolbar` | UIToolbar | 只读。工具栏。 |
| `navigationBarHidden` | boolean | 是否隐藏导航栏。 |
| `toolbarHidden` | boolean | 是否隐藏工具栏。 |
| `interactivePopGestureRecognizer` | UIGestureRecognizer | 只读。交互式返回手势。 |
| `delegate` | id | 代理对象。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `initWithRootViewController(rootViewController)` | rootViewController: UIViewController | id | 以根控制器初始化。 |
| `pushViewControllerAnimated(viewController, animated)` | viewController: UIViewController, animated: boolean | void | push。 |
| `popViewControllerAnimated(animated)` | animated: boolean | UIViewController \| null | pop 栈顶。 |
| `popToViewControllerAnimated(viewController, animated)` | viewController: UIViewController, animated: boolean | NSArray | pop 到指定控制器。 |
| `popToRootViewControllerAnimated(animated)` | animated: boolean | NSArray | pop 到根控制器。 |
| `setViewControllersAnimated(viewControllers, animated)` | viewControllers: NSArray, animated: boolean | void | 设置控制器栈（可动画）。 |
| `setNavigationBarHiddenAnimated(hidden, animated)` | hidden: boolean, animated: boolean | void | 设置导航栏隐藏（可动画）。 |
| `setToolbarHiddenAnimated(hidden, animated)` | hidden: boolean, animated: boolean | void | 设置工具栏隐藏（可动画）。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UINavigationController` 的类成员。

## 相关

- [UIViewController](/reference/uikit/uiview-controller/)
- [UINavigationBar](/reference/uikit/uinavigation-bar/) 、[UIToolbar](/reference/uikit/uitoolbar/)
- [UIGestureRecognizer](/reference/uikit/uigesture-recognizer/)
- [NSArray](/reference/foundation/ns-array/)
