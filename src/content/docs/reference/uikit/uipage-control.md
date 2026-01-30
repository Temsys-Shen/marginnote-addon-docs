---
title: UIPageControl
description: 页码指示控件。支持设置页数、当前页、单页隐藏与自定义指示器颜色。
---

`UIPageControl` 是页码指示控件，继承自 [UIControl](/reference/uikit/uicontrol/)。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `numberOfPages` | number | 总页数。 |
| `currentPage` | number | 当前页索引（从 0 开始）。 |
| `defersCurrentPageDisplay` | boolean | 是否延迟显示当前页更新。 |
| `hidesForSinglePage` | boolean | 单页时是否隐藏。 |
| `pageIndicatorTintColor` | UIColor \| null | 非当前页指示器颜色。 |
| `currentPageIndicatorTintColor` | UIColor \| null | 当前页指示器颜色。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `updateCurrentPageDisplay()` | — | void | 立即更新当前页显示。 |
| `sizeForNumberOfPages(pageCount)` | pageCount: number | { width: number, height: number } | 计算指定页数下的推荐尺寸。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UIPageControl` 的类成员。

## 相关

- [UIControl](/reference/uikit/uicontrol/)
- [UIColor](/reference/uikit/uicolor/)
