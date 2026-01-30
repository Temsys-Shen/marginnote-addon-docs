---
title: UICollectionView
description: 网格/瀑布流式列表视图。支持注册与复用 cell、批量更新、查询布局属性与可见项。
---

`UICollectionView` 是用于展示大量条目的滚动视图，继承自 [UIScrollView](/reference/uikit/uiscrollview/)。在插件运行时通常配合 `dataSource` 与 `collectionViewLayout` 使用，通过“注册 → 复用”机制创建 cell，并在需要时对 section/item 做增删改或批量更新。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `item` | number | 只读。运行时暴露的整数属性（常见于布局/交互状态字段）。 |
| `backgroundView` | UIView | 背景视图。 |
| `allowsMultipleSelection` | boolean | 是否允许多选。 |
| `allowsSelection` | boolean | 是否允许选中。 |
| `dataSource` | id | 数据源对象（由插件自定义对象承担）。 |
| `collectionViewLayout` | UICollectionViewLayout | 当前布局对象。 |

### 复用与注册

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `registerClassForCellWithReuseIdentifier(cellClass, identifier)` | cellClass: id, identifier: string | void | 注册 cell 类型与复用标识符。 |
| `registerClassForSupplementaryViewOfKindWithReuseIdentifier(viewClass, elementKind, identifier)` | viewClass: id, elementKind: string, identifier: string | void | 注册 supplementary view。 |
| `dequeueReusableCellWithReuseIdentifierForIndexPath(identifier, indexPath)` | identifier: string, indexPath: NSIndexPath | id | 取出复用 cell。 |
| `dequeueReusableSupplementaryViewOfKindWithReuseIdentifierForIndexPath(elementKind, identifier, indexPath)` | elementKind: string, identifier: string, indexPath: NSIndexPath | id | 取出复用 supplementary view。 |

### 选择与可见项

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `indexPathsForSelectedItems()` | — | NSArray | 当前选中项的 indexPath 列表。 |
| `deselectItemAtIndexPathAnimated(indexPath, animated)` | indexPath: NSIndexPath, animated: boolean | void | 取消选中。 |
| `visibleCells()` | — | NSArray | 当前可见的 cell 列表。 |
| `indexPathsForVisibleItems()` | — | NSArray | 当前可见项的 indexPath 列表。 |

### 数据刷新与布局切换

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `reloadData()` | — | void | 重新加载数据。 |
| `setCollectionViewLayoutAnimated(layout, animated)` | layout: UICollectionViewLayout, animated: boolean | void | 切换布局（可动画）。 |
| `setCollectionViewLayoutAnimatedCompletion(layout, animated, completion)` | layout: UICollectionViewLayout, animated: boolean, completion: (finished: boolean) => void | void | 切换布局并在完成后回调。 |
| `finishInteractiveTransition()` | — | void | 结束交互式转场。 |
| `cancelInteractiveTransition()` | — | void | 取消交互式转场。 |

### 查询

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `numberOfSections()` | — | number | section 数量。 |
| `numberOfItemsInSection(section)` | section: number | number | 指定 section 的 item 数量。 |
| `layoutAttributesForItemAtIndexPath(indexPath)` | indexPath: NSIndexPath | UICollectionViewLayoutAttributes | 获取指定 item 的布局属性。 |
| `layoutAttributesForSupplementaryElementOfKindAtIndexPath(kind, indexPath)` | kind: string, indexPath: NSIndexPath | UICollectionViewLayoutAttributes | 获取 supplementary element 的布局属性。 |
| `indexPathForItemAtPoint(point)` | point: { x: number, y: number } | NSIndexPath \| null | 根据点坐标反查 item 的 indexPath。 |
| `indexPathForCell(cell)` | cell: UICollectionViewCell | NSIndexPath \| null | 根据 cell 反查 indexPath。 |
| `cellForItemAtIndexPath(indexPath)` | indexPath: NSIndexPath | UICollectionViewCell \| null | 返回当前已创建并可见的 cell（不可见则可能为 null）。 |

### 增删改与批量更新

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `insertSections(sections)` | sections: NSIndexSet | void | 插入 section。 |
| `deleteSections(sections)` | sections: NSIndexSet | void | 删除 section。 |
| `reloadSections(sections)` | sections: NSIndexSet | void | 刷新 section。 |
| `moveSectionToSection(section, newSection)` | section: number, newSection: number | void | 移动 section。 |
| `insertItemsAtIndexPaths(indexPaths)` | indexPaths: NSArray | void | 插入 item。 |
| `deleteItemsAtIndexPaths(indexPaths)` | indexPaths: NSArray | void | 删除 item。 |
| `reloadItemsAtIndexPaths(indexPaths)` | indexPaths: NSArray | void | 刷新 item。 |
| `moveItemAtIndexPathToIndexPath(indexPath, newIndexPath)` | indexPath: NSIndexPath, newIndexPath: NSIndexPath | void | 移动 item。 |
| `performBatchUpdatesCompletion(updates, completion)` | updates: () => void, completion: (finished: boolean) => void | void | 在一次批量更新中执行多项增删改，并在完成后回调。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UICollectionView` 的类成员。

## 相关

- [UIScrollView](/reference/uikit/uiscrollview/)、[UIView](/reference/uikit/uiview/)
- [UICollectionViewLayout](/reference/uikit/uicollection-view-layout/)、[UICollectionViewLayoutAttributes](/reference/uikit/uicollection-view-layout-attributes/)
- [NSIndexPath](/reference/foundation/ns-index-path/)、[NSIndexSet](/reference/foundation/ns-index-set/)、[NSArray](/reference/foundation/ns-array/)
