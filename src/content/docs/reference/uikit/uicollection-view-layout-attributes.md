---
title: UICollectionViewLayoutAttributes
description: CollectionView 元素的布局属性对象。包含 frame/center/alpha/transform 等信息，并提供常用工厂方法。
---

`UICollectionViewLayoutAttributes` 用于描述 cell/supplementary/decoration 元素在布局中的几何与显示属性。它常作为 `UICollectionView` 或 `UICollectionViewLayout` 的查询返回值出现。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `invalidateEverything` | boolean | 只读。表示一次失效是否影响所有布局。 |
| `invalidateDataSourceCounts` | boolean | 只读。表示数据源计数是否需要重新计算。 |
| `indexPathAfterUpdate` | NSIndexPath | 只读。更新后的 indexPath。 |
| `indexPathBeforeUpdate` | NSIndexPath | 只读。更新前的 indexPath。 |
| `collectionView` | UICollectionView | 只读。所属 collectionView。 |
| `representedElementKind` | string | 只读。元素 kind。 |
| `indexPath` | NSIndexPath | indexPath。 |
| `frame` | { x: number, y: number, width: number, height: number } | frame。 |
| `bounds` | { x: number, y: number, width: number, height: number } | bounds。 |
| `size` | { width: number, height: number } | size。 |
| `center` | { x: number, y: number } | center。 |
| `transform` | object | 二维仿射变换。 |
| `transform3D` | object | 三维变换。 |
| `alpha` | number | 透明度。 |
| `hidden` | boolean | 是否隐藏。 |
| `zIndex` | number | zIndex。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `layoutAttributesForCellWithIndexPath(indexPath)` | indexPath: NSIndexPath | UICollectionViewLayoutAttributes | 创建 cell 的布局属性。 |
| `layoutAttributesForSupplementaryViewOfKindWithIndexPath(elementKind, indexPath)` | elementKind: string, indexPath: NSIndexPath | UICollectionViewLayoutAttributes | 创建 supplementary view 的布局属性。 |
| `layoutAttributesForDecorationViewOfKindWithIndexPath(decorationViewKind, indexPath)` | decorationViewKind: string, indexPath: NSIndexPath | UICollectionViewLayoutAttributes | 创建 decoration view 的布局属性。 |

## 相关

- [UICollectionView](/reference/uikit/uicollection-view/)
- [UICollectionViewLayout](/reference/uikit/uicollection-view-layout/)
- [NSIndexPath](/reference/foundation/ns-index-path/)
