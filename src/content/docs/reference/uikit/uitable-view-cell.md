---
title: UITableViewCell
description: 表格单元格。提供 contentView、textLabel/detailTextLabel/imageView，并支持选中/高亮/编辑状态切换。
---

`UITableViewCell` 继承自 [UIView](/reference/uikit/uiview/)，用于在 [UITableView](/reference/uikit/uitable-view/) 中展示一行内容。插件运行时暴露了常用的 label/imageView 以及与表格关联的辅助字段。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `contentView` | UIView | 只读。内容容器。 |
| `textLabel` | UILabel | 只读。主标题 label。 |
| `detailTextLabel` | UILabel | 只读。副标题 label。 |
| `imageView` | UIImageView | 只读。左侧图片视图。 |
| `backgroundView` | UIView \| null | 背景视图。 |
| `selectedBackgroundView` | UIView \| null | 选中态背景视图。 |
| `accessoryView` | UIView \| null | 自定义 accessory view。 |
| `accessoryType` | number | accessory 类型。 |
| `editingAccessoryType` | number | 编辑态 accessory 类型。 |
| `selectionStyle` | number | 选中样式。 |
| `indentationLevel` | number | 缩进级别。 |
| `indentationWidth` | number | 缩进宽度。 |
| `selected` | boolean | 是否选中。 |
| `highlighted` | boolean | 是否高亮。 |
| `editing` | boolean | 是否编辑态（运行时注释为未完全实现）。 |
| `showingDeleteConfirmation` | boolean | 只读。是否显示删除确认（运行时注释为未完全实现）。 |
| `reuseIdentifier` | string | 只读。复用标识符。 |
| `tintColor` | UIColor \| null | tintColor。 |
| `showsReorderControl` | boolean | 是否显示重排控制（运行时注释为默认值相关）。 |
| `multiSelView` | UIImageView | 只读。多选视图。 |
| `indexPath` | NSIndexPath \| null | 运行时附带的 indexPath（便于回调定位）。 |
| `tableView` | UITableView \| null | 运行时附带的 tableView 引用。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `prepareForReuse()` | — | void | 复用前清理状态。 |
| `setSelectedAnimated(selected, animated)` | selected: boolean, animated: boolean | void | 设置选中（可动画）。 |
| `setHighlightedAnimated(highlighted, animated)` | highlighted: boolean, animated: boolean | void | 设置高亮（可动画）。 |
| `setEditingAnimated(editing, animated)` | editing: boolean, animated: boolean | void | 设置编辑态（可动画）。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `makeWithStyleReuseIdentifier(style, reuseIdentifier)` | style: number, reuseIdentifier: string | UITableViewCell | 创建 cell（常用于不走注册/复用时的手动创建）。 |

## 相关

- [UITableView](/reference/uikit/uitable-view/)
- [UILabel](/reference/uikit/uilabel/)
- [UIImageView](/reference/uikit/uiimage-view/)
- [NSIndexPath](/reference/foundation/ns-index-path/)
