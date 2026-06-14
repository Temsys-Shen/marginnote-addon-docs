---
title: Menu
description: LibMN中的Menu对象使用文档。
---

`Menu`是用于创建和管理弹出菜单的对象，在指定视图（如按钮或卡片）附近显示操作选项，构建和展示自定义菜单。

## 构造函数

```ts
new Menu(sender: UIView|MNButton,delegate: object,width?: number,preferredPosition?: number)
```

构造一个新的Menu实例。

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `sender` | `UIView\|MNButton` | 是 | 触发视图。 |
| `delegate` | `object` | 是 | 代理对象。 |
| `width` | `number` | 否 | 菜单宽度。 |
| `preferredPosition` | `number` | 否 | 期望弹出方向。 |

## 类成员(Class members)

### 属性

| 成员 | 类型 | 说明 |
| :--- | :--- | :--- |
| `popover` | `UIPopoverController\|undefined` | 当前全局菜单弹层实例。 |

### 方法

| 成员 | 类型 | 说明 |
| :--- | :--- | :--- |
| `item` | `static item(title: string,selector: string,params?: string,checked?: boolean): {title:string;selector:string;param:string;checked:boolean}` | 创建菜单项对象。 |
| `dismissCurrentMenu` | `static dismissCurrentMenu(animate?: boolean): void` | 关闭当前全局菜单。 |

## 实例成员(Instance members)

### 属性

| 成员 | 类型 | 说明 |
| :--- | :--- | :--- |
| `preferredPosition` | `number` | 期望弹出方向。`0`左侧，`1/3`下方，`2`上方，`4`右侧。 |
| `titles` | `string[]` | 标题数组占位字段。通常用`menuItems`维护真实菜单内容。 |
| `menuItems` | `Array<{title:string;object?:object;selector:string;param?:string;checked?:boolean}>` | 菜单项数组。 |
| `rowHeight` | `number` | 每一行菜单项高度。 |
| `fontSize` | `number` | 菜单字号。 |

### 方法

| 成员 | 类型 | 说明 |
| :--- | :--- | :--- |
| `constructor` | `constructor(sender: UIView,delegate: object,width?: number,preferredPosition?: number)` | 用触发视图和代理初始化菜单。 |
| `addMenuItem` | `addMenuItem(title: string\|{key:string;prefix?:string;suffix?:string},selector: string,params?: string,checked?: boolean): void` | 追加一个菜单项。 |
| `addItem` | `addItem(title: string\|{key:string;prefix?:string;suffix?:string},selector: string,params?: string,checked?: boolean): void` | `addMenuItem`别名。 |
| `addMenuItems` | `addMenuItems(items: object[]): void` | 批量追加菜单项。 |
| `addItems` | `addItems(items: object[]): void` | `addMenuItems`别名。 |
| `insertMenuItem` | `insertMenuItem(index: number,title: string,selector: string,params?: string,checked?: boolean): void` | 在指定位置插入一个菜单项。 |
| `insertMenuItems` | `insertMenuItems(index: number,items: object[]): void` | 在指定位置批量插入菜单项。 |
| `show` | `show(autoWidth?: boolean,animate?: boolean): void` | 显示菜单。 |
| `dismiss` | `dismiss(): void` | 关闭当前实例菜单并清空全局`popover`引用。 |

## 快速示例

```ts
const menu = Menu.new(button, self, 220, 2)

menu.menuItems = [
  Menu.item('复制链接', 'onCopyLink:'),
  Menu.item('删除卡片', 'onDeleteNote:', '', true)
]

menu.rowHeight = 38
menu.fontSize = 15
menu.show(true, true)
```
