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

读取文件为 NSData 后，若需转为 JS 可用的形式：

- **若文件为 JSON**：用 `NSJSONSerialization.JSONObjectWithDataOptions(data, 0)` 解析为对象/数组；解析前可用 `data.length() === 0` 判断是否为空。
- **若需纯文本字符串**：若运行时导出了 `NSString`，可用 `NSString.alloc().initWithDataEncoding(data, 4)`（4 为 UTF-8）再取字符串；若无 NSString，可先尝试上述 JSON 解析。

示例：从文件读取 JSON 并解析

```javascript
var data = NSData.dataWithContentsOfFile(filePath);
if (data && data.length() > 0) {
  var obj = NSJSONSerialization.JSONObjectWithDataOptions(data, 0);
  if (NSJSONSerialization.isValidJSONObject(obj)) {
    // obj 为 JS 对象，可直接使用
  }
}
```

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
- [网络请求](/guides/network-requests/) —— 网络响应 NSData 的 JSON 解析同理
