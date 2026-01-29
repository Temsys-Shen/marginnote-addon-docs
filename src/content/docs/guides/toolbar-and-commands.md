---
title: 工具栏与命令
description: 在 MarginNote 工具栏显示插件按钮并响应点击。
---

通过实现 `queryAddonCommandStatus()` 并在返回值中提供图标、target、selector 和 checked 状态，可以在 MarginNote 工具栏上显示一个插件按钮；用户点击时，会调用你指定的实例方法（如 `toggleSample:`）。

## 返回格式

MarginNote 会调用插件的 `queryAddonCommandStatus()`。若希望显示工具栏按钮，必须返回一个对象，包含：

| 字段 | 类型 | 说明 |
|------|------|------|
| `image` | string | 图标文件名（相对于插件包根目录，如 `'sample.png'`）。 |
| `object` | object | 接收点击的对象，通常为 `self`（插件实例）。 |
| `selector` | string | 点击时调用的方法名，**必须以冒号结尾**（如 `'toggleSample:'`）。 |
| `checked` | boolean | 是否显示为「选中」状态（如面板是否已显示）。 |

若不希望显示按钮，可返回 `null`。

## 在实例方法中实现点击

selector 对应的方法必须是 **JSB.defineClass 的实例方法**，且方法名带冒号（例如 `toggleSample:`）。这样在方法内可以使用 `self` 访问插件实例和 `self.window`。

示例：切换一个浮窗的显示/隐藏，并记住状态到 NSUserDefaults，最后刷新工具栏状态：

```javascript
queryAddonCommandStatus: function () {
  return {
    image: "sample.png",
    object: self,
    selector: "toggleSample:",
    checked: self.sampleController.view.window ? true : false,
  };
},
toggleSample: function (sender) {
  if (self.sampleController.view.window) {
    self.sampleController.view.removeFromSuperview();
    NSUserDefaults.standardUserDefaults().setObjectForKey(false, "my_addon_panel_on");
  } else {
    Application.sharedInstance().studyController(self.window).view.addSubview(self.sampleController.view);
    self.layoutViewController();
    NSUserDefaults.standardUserDefaults().setObjectForKey(true, "my_addon_panel_on");
  }
  Application.sharedInstance().studyController(self.window).refreshAddonCommands();
},
```

## 刷新工具栏图标状态

修改了「是否显示面板」等状态后，应调用当前窗口的 `studyController.refreshAddonCommands()`，这样工具栏图标的 checked 状态会更新。

## 完整流程简述

1. 在 `sceneWillConnect` 中创建你的 viewController 或视图，并定义 `layoutViewController`（在 `controllerWillLayoutSubviews` 中调用）。
2. 在 `notebookWillOpen` 里用 NSTimer 延迟 0.2 秒后，若 NSUserDefaults 中为「显示面板」，则 `studyController.view.addSubview(...)` 并 `refreshAddonCommands()`。
3. 实现 `queryAddonCommandStatus` 返回 `image / object / selector / checked`。
4. 实现 `toggleSample:`（或你命名的 selector）切换面板显示并刷新。

## 相关

- [JSExtension](/reference/marginnote/jsextension/) — queryAddonCommandStatus
- [StudyController](/reference/marginnote/study-controller/) — refreshAddonCommands
- [原生 UI](/guides/native-ui/) — 创建面板视图
