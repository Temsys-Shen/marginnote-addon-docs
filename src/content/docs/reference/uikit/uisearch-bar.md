---
title: UISearchBar
description: 搜索栏视图。支持占位文本、范围按钮、取消/书签按钮，并可自定义背景与 scope 外观。
---

`UISearchBar`继承自[UIView](/reference/uikit/uiview/)，用于输入搜索文本与可选范围筛选。插件通过`delegate`接收编辑、文本变化、按钮点击与scope切换回调。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `text` | string | 搜索文本。 |
| `placeholder` | string \| null | 占位文本。 |
| `prompt` | string \| null | 提示文案。 |
| `delegate` | id | 代理对象。 |
| `showsCancelButton` | boolean | 是否显示取消按钮。 |
| `showsBookmarkButton` | boolean | 是否显示书签按钮。 |
| `showsSearchResultsButton` | boolean | 是否显示搜索结果按钮。 |
| `searchResultsButtonSelected` | boolean | 搜索结果按钮是否选中。 |
| `selectedScopeButtonIndex` | number | 当前选中的 scope 索引。 |
| `scopeButtonTitles` | NSArray | scope 按钮标题数组。 |
| `showsScopeBar` | boolean | 是否显示 scope 条。 |
| `keyboardType` | number | 键盘类型。 |
| `autocorrectionType` | number | 自动纠错类型。 |
| `autocapitalizationType` | number | 自动大写类型。 |
| `translucent` | boolean | 是否半透明。 |
| `barTintColor` | UIColor \| null | bar 背景色。 |
| `barStyle` | number | bar 样式。 |
| `backgroundImage` | UIImage \| null | 背景图。 |
| `scopeBarBackgroundImage` | UIImage \| null | scope 条背景图。 |
| `searchFieldBackgroundPositionAdjustment` | object | 搜索框背景位置微调。 |
| `searchTextPositionAdjustment` | object | 搜索文字位置微调。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setShowsCancelButtonAnimated(showsCancelButton, animated)` | showsCancelButton: boolean, animated: boolean | void | 设置取消按钮显示（可动画）。 |
| `setSearchFieldBackgroundImageForState(backgroundImage, state)` | backgroundImage: UIImage, state: number | void | 设置搜索框背景图。 |
| `searchFieldBackgroundImageForState(state)` | state: number | UIImage \| null | 获取搜索框背景图。 |
| `setScopeBarButtonBackgroundImageForState(backgroundImage, state)` | backgroundImage: UIImage, state: number | void | 设置 scope 按钮背景图。 |
| `scopeBarButtonBackgroundImageForState(state)` | state: number | UIImage \| null | 获取 scope 按钮背景图。 |
| `setScopeBarButtonDividerImageForLeftSegmentStateRightSegmentState(dividerImage, leftState, rightState)` | dividerImage: UIImage, leftState: number, rightState: number | void | 设置 scope 分割线图。 |
| `scopeBarButtonDividerImageForLeftSegmentStateRightSegmentState(leftState, rightState)` | leftState: number, rightState: number | UIImage \| null | 获取 scope 分割线图。 |
| `setScopeBarButtonTitleTextAttributesForState(attributes, state)` | attributes: NSDictionary, state: number | void | 设置 scope 标题文字属性。 |
| `scopeBarButtonTitleTextAttributesForState(state)` | state: number | NSDictionary \| null | 获取 scope 标题文字属性。 |

### Delegate回调

以下回调可在`JSB.defineClass`实例方法中实现：

| 回调方法名 | 对应selector | 返回值 | 触发时机 |
| --- | --- | --- | --- |
| `searchBarShouldBeginEditing` | `searchBarShouldBeginEditing:` | `BOOL` | 即将进入编辑态时触发。 |
| `searchBarTextDidBeginEditing` | `searchBarTextDidBeginEditing:` | `void` | 已进入编辑态时触发。 |
| `searchBarShouldEndEditing` | `searchBarShouldEndEditing:` | `BOOL` | 即将结束编辑态时触发。 |
| `searchBarTextDidEndEditing` | `searchBarTextDidEndEditing:` | `void` | 已结束编辑态时触发。 |
| `searchBarTextDidChange` | `searchBar:textDidChange:` | `void` | 文本变化后触发。 |
| `searchBarShouldChangeTextInRangeReplacementText` | `searchBar:shouldChangeTextInRange:replacementText:` | `BOOL` | 文本变更前拦截触发。 |
| `searchBarSearchButtonClicked` | `searchBarSearchButtonClicked:` | `void` | 点击Search按钮时触发。 |
| `searchBarCancelButtonClicked` | `searchBarCancelButtonClicked:` | `void` | 点击Cancel按钮时触发。 |
| `searchBarBookmarkButtonClicked` | `searchBarBookmarkButtonClicked:` | `void` | 点击Bookmark按钮时触发。 |
| `searchBarResultsListButtonClicked` | `searchBarResultsListButtonClicked:` | `void` | 点击Results按钮时触发。 |
| `searchBarSelectedScopeButtonIndexDidChange` | `searchBar:selectedScopeButtonIndexDidChange:` | `void` | 切换scope索引时触发。 |

**桥接规则：**

- 方法名必须与selector正确对应。
- `should...`回调必须返回`BOOL`。

## 类成员 (Class members)

当前接口未额外暴露 `UISearchBar` 的类成员。

## 相关

- [UIView](/reference/uikit/uiview/)
- [UIColor](/reference/uikit/uicolor/)、[UIImage](/reference/uikit/uiimage/)
- [NSArray](/reference/foundation/ns-array/)、[NSDictionary](/reference/foundation/ns-dictionary/)
