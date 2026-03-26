---
title: UICollectionViewCell
description: UICollectionView 的基础单元格类型。主要作为参数/返回值类型出现。
---

`UICollectionViewCell` 是 `UICollectionView` 的单元格类型，默认由 `UICollectionView` 通过复用机制创建并返回。

在当前插件环境中，`UICollectionViewCell` **没有额外暴露专属的可调用成员**（即不提供区别于其父类/通用视图的新增属性或方法）。因此它更多用于：

- 作为 `UICollectionView.cellForItemAtIndexPath(...)` 等方法的返回值类型
- 作为 `indexPathForCell(cell)` 等查询方法的入参类型

## 实例成员 (Instance members)

当前接口未额外暴露 `UICollectionViewCell` 的实例成员。

## 类成员 (Class members)

当前接口未额外暴露 `UICollectionViewCell` 的类成员。

## 相关

- [UICollectionView](/reference/uikit/uicollection-view/)
- [UIView](/reference/uikit/uiview/)
