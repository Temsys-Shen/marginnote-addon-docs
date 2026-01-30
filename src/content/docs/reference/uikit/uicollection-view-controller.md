---
title: UICollectionViewController
description: 承载 UICollectionView 的控制器。可通过布局初始化并持有 collectionView。
---

`UICollectionViewController` 继承自 [UIViewController](/reference/uikit/uiview-controller/)，用于管理一个 `UICollectionView` 实例与其布局对象，适合在插件中以“控制器 + view”的方式复用界面逻辑。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `clearsSelectionOnViewWillAppear` | boolean | 视图将显示时是否清除选中状态。 |
| `collectionViewLayout` | UICollectionViewLayout | 只读。当前布局对象。 |
| `useLayoutToLayoutNavigationTransitions` | boolean | 是否使用“布局到布局”的导航转场。 |
| `collectionView` | UICollectionView | 受控的 collectionView 实例。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `initWithCollectionViewLayout(layout)` | layout: UICollectionViewLayout | id | 以指定布局初始化。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UICollectionViewController` 的类成员。

## 相关

- [UIViewController](/reference/uikit/uiview-controller/)
- [UICollectionView](/reference/uikit/uicollection-view/)、[UICollectionViewLayout](/reference/uikit/uicollection-view-layout/)
