---
title: UITableViewController
description: 承载 UITableView 的控制器。支持按 style 初始化并持有 tableView。
---

`UITableViewController` 继承自 [UIViewController](/reference/uikit/uiview-controller/)，用于管理一个 `UITableView`。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `clearsSelectionOnViewWillAppear` | boolean | 视图将出现时是否清除选中。 |
| `tableView` | UITableView | 承载的 tableView。 |

### 方法

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `initWithStyle(style)` | style: number | id | 按表格样式初始化。 |

## 类成员 (Class members)

当前运行时未额外暴露 `UITableViewController` 的类成员。

## 相关

- [UIViewController](/reference/uikit/uiview-controller/)
- [UITableView](/reference/uikit/uitable-view/)
