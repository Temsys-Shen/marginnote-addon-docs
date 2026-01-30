---
title: UITableView
description: 表格视图。支持数据刷新、查询可见项、滚动到行，以及 section/row 的批量增删改与复用注册。
---

`UITableView` 继承自 [UIScrollView](/reference/uikit/uiscrollview/)，用于展示分组或普通的列表。插件运行时通常通过 `dataSource`（以及运行时实现的 delegate）提供内容，并通过“注册 → 复用”机制创建 cell。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `style` | number | 只读。表格样式。 |
| `dataSource` | id | 数据源对象。 |
| `rowHeight` | number | 行高。 |
| `separatorStyle` | number | 分割线样式。 |
| `separatorColor` | UIColor \| null | 分割线颜色。 |
| `tableHeaderView` | UIView \| null | 表头视图。 |
| `tableFooterView` | UIView \| null | 表尾视图。 |
| `backgroundView` | UIView \| null | 背景视图。 |
| `allowsSelection` | boolean | 是否允许选择。 |
| `allowsMultipleSelectionDuringEditing` | boolean | 编辑状态下是否允许多选。 |
| `editing` | boolean | 是否编辑状态。 |
| `sectionHeaderHeight` | number | section 头部高度。 |
| `sectionFooterHeight` | number | section 底部高度。 |

### 刷新与查询

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `reloadData()` | — | void | 刷新全部数据。 |
| `reloadSectionIndexTitles()` | — | void | 刷新 section index 标题。 |
| `numberOfSections()` | — | number | section 数量。 |
| `numberOfRowsInSection(section)` | section: number | number | 指定 section 的行数。 |
| `rectForSection(section)` | section: number | { x: number, y: number, width: number, height: number } | section 区域。 |
| `rectForHeaderInSection(section)` | section: number | { x: number, y: number, width: number, height: number } | section header 区域。 |
| `rectForFooterInSection(section)` | section: number | { x: number, y: number, width: number, height: number } | section footer 区域。 |
| `rectForRowAtIndexPath(indexPath)` | indexPath: NSIndexPath | { x: number, y: number, width: number, height: number } | 行区域。 |
| `indexPathForRowAtPoint(point)` | point: { x: number, y: number } | NSIndexPath \| null | 根据点坐标反查行 indexPath。 |
| `indexPathForCell(cell)` | cell: UITableViewCell | NSIndexPath \| null | 根据 cell 反查 indexPath。 |
| `indexPathsForRowsInRect(rect)` | rect: { x: number, y: number, width: number, height: number } | NSArray | rect 内行的 indexPath 列表。 |
| `cellForRowAtIndexPath(indexPath)` | indexPath: NSIndexPath | UITableViewCell \| null | 返回已创建且可见的 cell（不可见则可能为 null）。 |
| `visibleCells()` | — | NSArray | 可见 cell 列表。 |
| `indexPathsForVisibleRows()` | — | NSArray | 可见行的 indexPath 列表。 |
| `headerViewForSection(section)` | section: number | UIView \| null | 返回 section header view（可见时）。 |
| `footerViewForSection(section)` | section: number | UIView \| null | 返回 section footer view（可见时）。 |

### 滚动

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `scrollToRowAtIndexPathAtScrollPositionAnimated(indexPath, scrollPosition, animated)` | indexPath: NSIndexPath, scrollPosition: number, animated: boolean | void | 滚动到指定行。 |
| `scrollToNearestSelectedRowAtScrollPositionAnimated(scrollPosition, animated)` | scrollPosition: number, animated: boolean | void | 滚动到最近的选中行。 |

### 批量更新

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `beginUpdates()` | — | void | 开始一组批量更新。 |
| `endUpdates()` | — | void | 结束一组批量更新。 |
| `insertSectionsWithRowAnimation(sections, animation)` | sections: NSIndexSet, animation: number | void | 插入 section。 |
| `deleteSectionsWithRowAnimation(sections, animation)` | sections: NSIndexSet, animation: number | void | 删除 section。 |
| `reloadSectionsWithRowAnimation(sections, animation)` | sections: NSIndexSet, animation: number | void | 刷新 section。 |
| `moveSectionToSection(section, newSection)` | section: number, newSection: number | void | 移动 section。 |
| `insertRowsAtIndexPathsWithRowAnimation(indexPaths, animation)` | indexPaths: NSArray, animation: number | void | 插入行。 |
| `deleteRowsAtIndexPathsWithRowAnimation(indexPaths, animation)` | indexPaths: NSArray, animation: number | void | 删除行。 |
| `reloadRowsAtIndexPathsWithRowAnimation(indexPaths, animation)` | indexPaths: NSArray, animation: number | void | 刷新行。 |
| `moveRowAtIndexPathToIndexPath(indexPath, newIndexPath)` | indexPath: NSIndexPath, newIndexPath: NSIndexPath | void | 移动行。 |

### 选择与编辑

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `setEditingAnimated(editing, animated)` | editing: boolean, animated: boolean | void | 设置编辑状态（可动画）。 |
| `indexPathForSelectedRow()` | — | NSIndexPath \| null | 当前选中行（单选场景）。 |
| `indexPathsForSelectedRows()` | — | NSArray | 当前选中行列表（多选场景）。 |
| `selectRowAtIndexPathAnimatedScrollPosition(indexPath, animated, scrollPosition)` | indexPath: NSIndexPath, animated: boolean, scrollPosition: number | void | 选中行并可滚动到可见位置。 |
| `deselectRowAtIndexPathAnimated(indexPath, animated)` | indexPath: NSIndexPath, animated: boolean | void | 取消选中。 |

### 复用与注册

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `dequeueReusableCellWithIdentifier(identifier)` | identifier: string | id | 按 identifier 取出复用 cell。 |
| `dequeueReusableCellWithIdentifierForIndexPath(identifier, indexPath)` | identifier: string, indexPath: NSIndexPath | id | 按 identifier 与 indexPath 取出复用 cell。 |
| `dequeueReusableHeaderFooterViewWithIdentifier(identifier)` | identifier: string | id | 取出复用 header/footer view。 |
| `registerClassForCellReuseIdentifier(cellClass, identifier)` | cellClass: id, identifier: string | void | 注册 cell 类型。 |
| `registerClassForHeaderFooterViewReuseIdentifier(aClass, identifier)` | aClass: id, identifier: string | void | 注册 header/footer view 类型。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UITableView` 的类成员。

## 相关

- [UIScrollView](/reference/uikit/uiscrollview/)
- [UITableViewCell](/reference/uikit/uitable-view-cell/)
- [UIView](/reference/uikit/uiview/)
- [NSIndexPath](/reference/foundation/ns-index-path/)、[NSIndexSet](/reference/foundation/ns-index-set/)、[NSArray](/reference/foundation/ns-array/)
