---
title: 存储与文件
description: 使用 NSUserDefaults 持久化配置，使用 NSFileManager 与 NSData 读写文件。
---

插件需要保存设置或读写文件时，可使用 Foundation 提供的 NSUserDefaults、NSFileManager 和 NSData；路径可基于 `Application.sharedInstance().documentPath` 或 `tempPath`。

## NSUserDefaults：简单键值存储

适合保存开关、数字、字符串等少量配置。

```javascript
var defaults = NSUserDefaults.standardUserDefaults();

// 写入
defaults.setObjectForKey("enabled", "my_addon_setting");
defaults.setIntegerForKey(10, "my_addon_counter");
defaults.setBoolForKey(true, "my_addon_switch");

// 读取
var setting = defaults.objectForKey("my_addon_setting");
var counter = defaults.integerForKey("my_addon_counter");
var on = defaults.boolForKey("my_addon_switch");
```

键名建议加插件前缀，避免与其他插件冲突。

## NSFileManager：目录与文件

获取应用文稿目录并在其下创建插件专用目录：

```javascript
var app = Application.sharedInstance();
var basePath = app.documentPath + "/MyAddonData";
var fileManager = NSFileManager.defaultManager();

if (!fileManager.fileExistsAtPath(basePath)) {
  fileManager.createDirectoryAtPathWithIntermediateDirectoriesAttributes(basePath, true, null);
}
```

写入文本文件（UTF-8 编码 4）：

```javascript
var filePath = basePath + "/config.txt";
var textData = NSData.dataWithStringEncoding("Hello, World!", 4);
textData.writeToFileAtomically(filePath, true);
```

读取文件为 NSData，再转为字符串需在 JS 侧自行处理（若环境暴露了 NSData 转 string 的 API 则可用）。

## 路径说明

- `Application.sharedInstance().documentPath`：文稿目录，适合存放用户数据。
- `Application.sharedInstance().tempPath`：临时目录，系统可能清理。
- 插件包根路径由 `JSB.newAddon(mainPath)` 的 `mainPath` 传入，可用于读取包内资源（如图标）。

## 完整示例：保存与读取一个开关

在插件中提供「是否显示面板」的开关，并持久化：

```javascript
// 读取
var showPanel = NSUserDefaults.standardUserDefaults().boolForKey("my_addon_show_panel");

// 用户点击开关后写入
NSUserDefaults.standardUserDefaults().setBoolForKey(newValue, "my_addon_show_panel");
```

结合 [工具栏与命令](/guides/toolbar-and-commands/) 与 [生命周期与窗口](/guides/lifecycle-and-window/)，在 `notebookWillOpen` 延迟后根据该键决定是否 `addSubview` 面板。

## 相关

- [NSUserDefaults](/reference/foundation/ns-user-defaults/)、[NSFileManager](/reference/foundation/ns-file-manager/)、[NSData](/reference/foundation/ns-data/)
- [Cookbook：插件设置页](/guides/cookbook/addon-settings/)
