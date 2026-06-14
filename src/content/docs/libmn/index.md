---
title: LibMN
description: 基于AddonLib源码整理的LibMN完整API导航与阅读路线。
---
LibMN是一个面向MarginNote插件开发的运行时基础库，由林立飞的MNUtils裁剪而来，未来会合并至Marginnote本体中。

合并后本文档会更新如下面这段话，也许...

> LibMN已于Marginnote4的v4.x.x合并至本体，

## 阅读路线

如果你第一次接触LibMN，建议按这个顺序看:

1. [Runtime](/libmn/runtime/)与[RuntimeAssets](/libmn/runtime-assets/)，先建立“插件生命周期+路由分发”的主线认知。
2. [MNUtil](/libmn/mnutil/)，看通用能力入口，特别是窗口、文件、URL、网络与弹窗相关能力。
3. [MNNote](/libmn/mnnote/)、[MNNotebook](/libmn/mnnotebook/)、[MNDocument](/libmn/mndocument/)，建立数据模型与写入路径。
4. [MNWebview](/libmn/mnwebview/)、[MNButton](/libmn/mnbutton/)、[Menu](/libmn/menu/)，处理交互层构建。
5. [LibMN Internal Exposed](/libmn/internal-exposed/)与[LibMN Vendor Globals](/libmn/vendor-globals/)，理解内部成员和第三方依赖边界。

## 类别索引

### 运行时与入口

- [Runtime](/libmn/runtime/)
- [RuntimeAssets](/libmn/runtime-assets/)
- [RuntimeWebViewHost](/libmn/runtime-web-view-host/)

### 数据模型封装

- [MNNote](/libmn/mnnote/)
- [MNComment](/libmn/mncomment/)
- [MNNotebook](/libmn/mnnotebook/)
- [MNDocument](/libmn/mndocument/)

### 通用能力与工具

- [MNUtil](/libmn/mnutil/)
- [DataConverter](/libmn/data-converter/)
- [Locale](/libmn/locale/)
- [Headers](/libmn/headers/)
- [Response](/libmn/response/)
- [Mustache](/libmn/mustache/)

### UI与交互封装

- [MNWebview](/libmn/mnwebview/)
- [MNButton](/libmn/mnbutton/)
- [MNExtensionPanel](/libmn/mnextension-panel/)
- [Menu](/libmn/menu/)
- [Frame](/libmn/frame/)

### 通信与辅助

- [MNConnection](/libmn/mnconnection/)

### 边界与依赖

- [LibMN Internal Exposed](/libmn/internal-exposed/)
- [LibMN Vendor Globals](/libmn/vendor-globals/)
