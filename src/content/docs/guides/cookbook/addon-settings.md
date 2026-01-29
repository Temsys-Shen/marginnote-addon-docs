---
title: 插件设置页
description: 使用 NSUserDefaults 与简单 UI（UISwitch/UITextField）实现插件设置页。
---

**场景**：在插件面板或单独设置页中提供一个开关或输入框，保存用户选择，并在下次启动或打开笔记本时读取（例如「是否显示面板」「API Key」等）。

**步骤**：

1. 使用 **NSUserDefaults** 存储键值（如 `my_addon_show_panel`、`my_addon_api_key`）。
2. 在 UI 中提供 UISwitch 或 UITextField；开关变化或确认时调用 `setBoolForKey` / `setObjectForKey`。
3. 在需要读取的地方（如 `notebookWillOpen` 延迟后、或工具栏按钮逻辑）用 `boolForKey` / `objectForKey` 读取。

**示例：一个开关「是否在打开笔记本时自动显示面板」**

```javascript
// 读取
var showPanel = NSUserDefaults.standardUserDefaults().boolForKey("my_addon_show_panel");
// 默认 true，仅当从未设置时为 undefined，可做默认值处理
if (showPanel === undefined) showPanel = true;

// 在设置 UI 中，用户切换 UISwitch 时：
switchAction: function (sender) {
  NSUserDefaults.standardUserDefaults().setBoolForKey(sender.on, "my_addon_show_panel");
}
```

在 `notebookWillOpen` 中延迟 0.2 秒后根据 `showPanel` 决定是否 `studyController.view.addSubview(self.panelView)`（参见 [生命周期与窗口](/guides/lifecycle-and-window/)）。

**示例：一个文本输入（如 API Key）**

```javascript
// 读取
var apiKey = NSUserDefaults.standardUserDefaults().objectForKey("my_addon_api_key");
if (apiKey) textField.text = apiKey;

// 用户点击「保存」时：
var newKey = textField.text;
NSUserDefaults.standardUserDefaults().setObjectForKey(newKey, "my_addon_api_key");
Application.sharedInstance().showHUD("已保存", self.window, 2);
```

**完整流程简述**：

1. 用 JSB.defineClass 定义设置页的 ViewController（或直接在插件实例上创建视图），包含 UISwitch、UITextField、保存按钮等。
2. 在 viewDidLoad 或显示时从 NSUserDefaults 读取并填充控件。
3. 在 UISwitch 的 action 或保存按钮的 action 中写回 NSUserDefaults。
4. 插件主逻辑（如是否显示面板）在需要时从 NSUserDefaults 读取。

**相关**：[存储与文件](/guides/storage-and-files/)、[NSUserDefaults](/reference/foundation/ns-user-defaults/)、[原生 UI](/guides/native-ui/)
