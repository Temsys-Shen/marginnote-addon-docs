---
title: UICollectionViewController
description: 承载 UICollectionView 的控制器。可通过布局初始化并持有 collectionView。
---

`UICollectionViewController` 继承自 [UIViewController](/reference/uikit/uiview-controller/)，用于管理一个 `UICollectionView` 实例与其布局对象，适合在插件中以“控制器 + view”的方式复用界面逻辑。

## 推荐创建路径

当前插件环境下，更稳定的路径是：

1. 创建`UICollectionViewFlowLayout`并先设置固定参数，如`itemSize`、`sectionInset`、`minimumLineSpacing`。
2. 使用`initWithCollectionViewLayout(layout)`创建`UICollectionViewController`。
3. 通过`controller.collectionView`取得实例，完成`registerClass...`、`dataSource/delegate`绑定与`reloadData()`。

相比之下，直接走`UICollectionView`的`initWithFrame:collectionViewLayout:`路径在当前桥接里不稳定，不建议作为主路径。

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

### 数据源最小实现

建议至少实现以下方法：

- `numberOfSectionsInCollectionView`
- `collectionView:numberOfItemsInSection:`
- `collectionView:cellForItemAtIndexPath:`

`dataSource/delegate`建议使用`JSB.defineClass`导出的实例对象承载，以确保selector映射稳定。

## 类成员 (Class members)

运行时未额外暴露 `UICollectionViewController` 的类成员。

## 相关

- [UIViewController](/reference/uikit/uiview-controller/)
- [UICollectionView](/reference/uikit/uicollection-view/)、[UICollectionViewLayout](/reference/uikit/uicollection-view-layout/)、[UICollectionViewFlowLayout](/reference/uikit/uicollection-view-flow-layout/)
