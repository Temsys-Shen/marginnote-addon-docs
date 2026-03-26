---
title: UICollectionViewFlowLayout
description: UICollectionView的流式布局。常用于固定网格参数配置。
---

`UICollectionViewFlowLayout`是`UICollectionViewLayout`的常用子类，用于按行列流式排布cell。插件场景优先使用固定`itemSize/sectionInset/minimumLineSpacing`方案。

## 使用规范

- 更稳定的创建路径是：先创建`UICollectionViewFlowLayout`，再用`UICollectionViewController.initWithCollectionViewLayout(layout)`拿到`collectionView`。
- `initWithFrame:collectionViewLayout:`在当前桥接里不稳定，不建议作为主路径。
- 动态尺寸回调例如`sizeForItemAtIndexPath`在JS桥接里风险较高，后置。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `itemSize` | [`CGSize`](/reference/value-sturct/#cgsize) | 单个item尺寸。 |
| `sectionInset` | [`UIEdgeInsets`](/reference/value-sturct/#uiedgeinsets) | section内边距。 |
| `minimumLineSpacing` | number | 最小行间距。 |
| `minimumInteritemSpacing` | number | 最小item间距。 |
| `headerReferenceSize` | [`CGSize`](/reference/value-sturct/#cgsize) | 头部参考尺寸。 |
| `footerReferenceSize` | [`CGSize`](/reference/value-sturct/#cgsize) | 尾部参考尺寸。 |
| `invalidateFlowLayoutAttributes` | boolean | 只读。布局属性是否失效。 |
| `invalidateFlowLayoutDelegateMetrics` | boolean | 只读。delegate度量是否失效。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `invalidateLayout()` | — | void | 标记布局失效并触发重算。 |
| `prepareLayout()` | — | void | 布局准备阶段。 |
| `layoutAttributesForElementsInRect(rect)` | rect: [`CGRect`](/reference/value-sturct/#cgrect) | NSArray | 返回区域内元素布局属性。 |
| `collectionViewContentSize()` | — | [`CGSize`](/reference/value-sturct/#cgsize) | 返回内容尺寸。 |

## 类成员 (Class members)

| 成员 | 返回值 | 说明 |
| --- | --- | --- |
| `layoutAttributesClass()` | Class | 返回布局属性类。 |
| `invalidationContextClass()` | Class | 返回失效上下文类。 |

## 问题排查

- 创建成功但不显示时，优先检查`frame/bounds`是否为0、`itemSize`是否为0、是否已挂到可见view层级。
- `registerClass...`缺失或`reuseId`不一致会导致`dequeue`失败。

## 相关

- [UICollectionView](/reference/uikit/uicollection-view/)
- [UICollectionViewController](/reference/uikit/uicollection-view-controller/)
- [UICollectionViewLayout](/reference/uikit/uicollection-view-layout/)
