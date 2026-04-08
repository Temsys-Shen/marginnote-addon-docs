---
title: LibMN
description: 基于AddonLib源码整理的LibMN完整API导航与阅读路线。
---
LibMN是一个面向MarginNote插件开发的运行时基础库，由林立飞的MNUtils裁剪而来，未来会合并至Marginnote本体中。

合并后本文档会更新如下面这段话，也许...

> LibMN已于Marginnote4的v4.x.x合并至本体，

## 阅读路线

如果你第一次接触LibMN，建议按这个顺序看:

1. [Runtime](/reference/libmn/runtime/)与[RuntimeAssets](/reference/libmn/runtime-assets/)，先建立“插件生命周期+路由分发”的主线认知。
2. [MNUtil](/reference/libmn/mnutil/)，看通用能力入口，特别是窗口、文件、URL、网络与弹窗相关能力。
3. [MNNote](/reference/libmn/mnnote/)、[MNNotebook](/reference/libmn/mnnotebook/)、[MNDocument](/reference/libmn/mndocument/)，建立数据模型与写入路径。
4. [MNWebview](/reference/libmn/mnwebview/)、[MNButton](/reference/libmn/mnbutton/)、[Menu](/reference/libmn/menu/)，处理交互层构建。
5. [LibMN Internal Exposed](/reference/libmn/internal-exposed/)与[LibMN Vendor Globals](/reference/libmn/vendor-globals/)，理解内部成员和第三方依赖边界。

## 类别索引

### 运行时与入口

- [Runtime](/reference/libmn/runtime/)
- [RuntimeAssets](/reference/libmn/runtime-assets/)
- [RuntimeWebViewHost](/reference/libmn/runtime-web-view-host/)

### 数据模型封装

- [MNNote](/reference/libmn/mnnote/)
- [MNComment](/reference/libmn/mncomment/)
- [MNNotebook](/reference/libmn/mnnotebook/)
- [MNDocument](/reference/libmn/mndocument/)

### 通用能力与工具

- [MNUtil](/reference/libmn/mnutil/)
- [DataConverter](/reference/libmn/data-converter/)
- [Locale](/reference/libmn/locale/)
- [Headers](/reference/libmn/headers/)
- [Response](/reference/libmn/response/)
- [Mustache](/reference/libmn/mustache/)

### UI与交互封装

- [MNWebview](/reference/libmn/mnwebview/)
- [MNButton](/reference/libmn/mnbutton/)
- [MNExtensionPanel](/reference/libmn/mnextension-panel/)
- [Menu](/reference/libmn/menu/)
- [Frame](/reference/libmn/frame/)

### 通信与辅助

- [MNConnection](/reference/libmn/mnconnection/)

### 边界与依赖

- [LibMN Internal Exposed](/reference/libmn/internal-exposed/)
- [LibMN Vendor Globals](/reference/libmn/vendor-globals/)
