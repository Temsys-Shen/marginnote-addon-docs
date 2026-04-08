---
title: LibMN Internal Exposed
description: LibMN中可见但不建议业务长期依赖的内部成员说明。
---

本页记录`Internal`级成员。这些成员主要用于启动胶水层和生命周期桥接，能用但不承诺稳定兼容。

## RuntimeAddon

`RuntimeAddon`由`addon.js`中的`JSB.defineClass`创建，核心职责是把MarginNote生命周期事件转发给`Runtime.emitLifecycle(...)`。

### 实例生命周期入口

- `sceneWillConnect(): Promise<void>`场景连接时触发，内部会注册广播监听并转发生命周期事件。
- `sceneDidDisconnect(): void`场景断开时触发。
- `notebookWillOpen(notebookId: string): void`笔记本打开前触发。
- `notebookWillClose(notebookId: string): void`笔记本关闭前触发。
- `documentDidOpen(documentController: DocumentController): void`文档打开后触发。
- `documentWillClose(documentController: DocumentController): void`文档关闭前触发。
- `controllerWillLayoutSubviews(controller: UIViewController): void`控制器布局前触发。
- `onAddonBroadcast(notification: { userInfo: { message: string }; window: UIWindow; name: string }): Promise<object|void>`接收广播并按路由分发。命中路由处理器时返回对应处理结果，其他场景返回`void`。
- `queryAddonCommandStatus(): object|boolean|void`查询工具栏命令状态。返回值来自生命周期回调链中首个真值结果。

### 类生命周期入口

- `addonDidConnect(): void`插件连接完成时触发。
- `addonWillDisconnect(): void`插件断连前触发。
- `applicationWillEnterForeground(): void`应用进入前台时触发。
- `applicationDidEnterBackground(): void`应用进入后台时触发。

## 其他Internal成员

| 名称 | 来源 | 角色定位 | 实务建议 |
|:---|:---|:---|:---|
| `__mnRuntimeModules` | `main.js` | 模块幂等加载标记表 | 仅启动逻辑使用，不在业务层读写。 |
| `setTimeout` | `mnutils.js` | JSCore环境下的兼容定时器注入 | 仅作兼容手段，复杂定时任务优先用更可控方案。 |
| `clearTimeout` | `mnutils.js` | 对应的兼容清理函数 | 与上同，不用于复杂调度。 |
| `atob` | `mnutils.js` | Base64解码兼容入口 | 二进制处理优先走DataConverter能力。 |
| `getRuntimeAddon` | `addon.js` | 返回当前`self`上下文的内部函数 | 不作为公共API暴露，不建议业务层调用。 |
| `RuntimeAddon` | `addon.js` | 生命周期桥接主类 | 作为系统入口存在，不作为业务对象直接实例化。 |

## 使用边界建议

- 业务代码优先依赖`Runtime`、`MNUtil`、`MNNote`等稳定入口。
- 如必须触达Internal成员，建议固定AddonLib版本并在升级后逐项回归。
- Internal成员变更时不保证向后兼容。
