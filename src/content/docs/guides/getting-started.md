---
title: 快速开始
description: 从零运行你的第一个 MarginNote 插件（Hello World）。
---

本教程将带你创建一个最简插件：在插件窗口连接时显示一条 "Hello World" 的 HUD 提示，并了解 `mnaddon.json` 与入口函数。

## 前提

- 已安装 MarginNote 3（建议 3.6.11 及以上）。
- 了解如何将插件包放入 MarginNote 的 addon 目录并在应用中启用插件。

## 第一步：插件包结构

创建一个文件夹作为插件包，至少包含：

- `main.js`：入口脚本，MarginNote 会加载并执行它。
- `mnaddon.json`：插件元数据，MarginNote 据此识别插件。

## 第二步：mnaddon.json

在插件包根目录创建 `mnaddon.json`，内容示例：

```json
{
  "addonid": "marginnote.extension.samplehelloworld",
  "author": "你的名字",
  "title": "Hello World",
  "version": "1.0",
  "marginnote_version_min": "3.6.11",
  "cert_key": ""
}
```

- `addonid`：唯一 ID，建议用反向域名。
- `title`：在 MarginNote 中显示的插件名称。
- `marginnote_version_min`：最低支持的 MarginNote 版本。

## 第三步：实现 main.js 入口

MarginNote 加载插件时会调用全局函数 `JSB.newAddon(mainPath)`，你必须实现它并返回由 `JSB.defineClass` 创建的**类**（注意是类，不是实例；MarginNote 会自行实例化）。

在 `main.js` 中写入：

```javascript
JSB.newAddon = function (mainPath) {
  var newAddonClass = JSB.defineClass(
    "SampleHelloWorld : JSExtension",
    {
      sceneWillConnect: function () {
        Application.sharedInstance().showHUD("Hello World", self.window, 2);
      },
      sceneDidDisconnect: function () {},
      sceneWillResignActive: function () {},
      sceneDidBecomeActive: function () {},
      notebookWillOpen: function (notebookid) {},
      notebookWillClose: function (notebookid) {},
      documentDidOpen: function (docmd5) {},
      documentWillClose: function (docmd5) {},
    },
    {
      addonDidConnect: function () {},
      addonWillDisconnect: function () {},
      applicationWillEnterForeground: function () {},
      applicationDidEnterBackground: function () {},
      applicationDidReceiveLocalNotification: function (notify) {},
    }
  );
  return newAddonClass;
};
```

说明：

- `JSB.defineClass('类名 : JSExtension', 实例成员, 类成员)` 定义插件类；类名可自取，但必须继承 `JSExtension`。
- `sceneWillConnect` 在插件窗口即将连接时调用，这里用 `Application.sharedInstance().showHUD(message, view, duration)` 在 `self.window` 上显示 2 秒 HUD。
- `mainPath` 是插件包根目录路径，可用于加载包内资源。

## 第四步：安装与验证

1. 将包含 `main.js` 和 `mnaddon.json` 的文件夹放入 MarginNote 的 addon 目录。
2. 在 MarginNote 中启用该插件。
3. 打开或切换到一个窗口，使插件窗口连接；应看到 "Hello World" 的 HUD。

## 下一步

- 了解各生命周期方法的调用时机：[生命周期与窗口](/guides/lifecycle-and-window/)。
- 查阅 [JSB](/reference/global/jsb/)、[Application](/reference/global/application/)、[JSExtension](/reference/marginnote/jsextension/) 的完整 API。
