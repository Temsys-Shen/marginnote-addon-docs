---
title: UICollectionViewLayout
description: UICollectionView 的布局基类。负责提供元素布局属性、内容尺寸与滚动目标位置等。
---

`UICollectionViewLayout` 用于为 [UICollectionView](/reference/uikit/uicollection-view/) 计算布局信息。插件运行时暴露了一组用于布局生命周期、注册 decoration view、查询布局属性与计算内容尺寸/目标偏移的成员。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `invalidateEverything` | boolean | 只读。表示一次失效是否影响所有布局。 |
| `invalidateDataSourceCounts` | boolean | 只读。表示数据源计数是否需要重新计算。 |
| `indexPathAfterUpdate` | NSIndexPath | 只读。更新后的 indexPath（用于动画/过渡场景）。 |
| `indexPathBeforeUpdate` | NSIndexPath | 只读。更新前的 indexPath（用于动画/过渡场景）。 |
| `collectionView` | UICollectionView | 只读。当前所属的 collectionView。 |
| `representedElementKind` | string | 只读。元素 kind 标识。 |
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

> 注意：以上属性中一部分在系统 UIKit 的语义上更常见于“布局属性对象”。这里以**插件运行时实际暴露**为准进行记录；如果你只在运行时把它当作数据结构读写，也完全可行。

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `invalidateLayout()` | — | void | 标记布局失效，触发重新计算。 |
| `registerClassForDecorationViewOfKind(viewClass, decorationViewKind)` | viewClass: id, decorationViewKind: string | void | 注册 decoration view 类型。 |
| `prepareLayout()` | — | void | 布局准备阶段回调。 |
| `layoutAttributesForElementsInRect(rect)` | rect: { x: number, y: number, width: number, height: number } | NSArray | 返回 rect 内元素的布局属性数组。 |
| `layoutAttributesForItemAtIndexPath(indexPath)` | indexPath: NSIndexPath | UICollectionViewLayoutAttributes \| null | 返回指定 item 的布局属性。 |
| `layoutAttributesForSupplementaryViewOfKindAtIndexPath(kind, indexPath)` | kind: string, indexPath: NSIndexPath | UICollectionViewLayoutAttributes \| null | 返回指定 supplementary view 的布局属性。 |
| `layoutAttributesForDecorationViewOfKindAtIndexPath(decorationViewKind, indexPath)` | decorationViewKind: string, indexPath: NSIndexPath | UICollectionViewLayoutAttributes \| null | 返回指定 decoration view 的布局属性。 |
| `shouldInvalidateLayoutForBoundsChange(newBounds)` | newBounds: { x: number, y: number, width: number, height: number } | boolean | bounds 变化时是否需要失效布局。 |
| `targetContentOffsetForProposedContentOffsetWithScrollingVelocity(proposedContentOffset, velocity)` | proposedContentOffset: { x: number, y: number }, velocity: { x: number, y: number } | { x: number, y: number } | 根据目标偏移与滚动速度修正最终停靠位置。 |
| `targetContentOffsetForProposedContentOffset(proposedContentOffset)` | proposedContentOffset: { x: number, y: number } | { x: number, y: number } | 根据目标偏移修正最终停靠位置。 |
| `collectionViewContentSize()` | — | { width: number, height: number } | 返回内容尺寸。 |

## 类成员 (Class members)

| 成员 | 返回值 | 说明 |
| --- | --- | --- |
| `layoutAttributesClass()` | Class | 返回布局属性类。 |
| `invalidationContextClass()` | Class | 返回失效上下文类。 |

## 相关

- [UICollectionView](/reference/uikit/uicollection-view/)
- [UICollectionViewLayoutAttributes](/reference/uikit/uicollection-view-layout-attributes/)
- [NSIndexPath](/reference/foundation/ns-index-path/)、[NSArray](/reference/foundation/ns-array/)
