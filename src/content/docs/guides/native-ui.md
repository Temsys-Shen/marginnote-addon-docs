---
title: 原生 UI
description: 使用 UIView、UILabel、UIButton、UIAlertView 等构建简单界面。
---

插件可以使用 MarginNote 暴露的 UIKit 接口创建原生界面，例如浮窗、按钮、标签和弹窗。将视图添加到 `Application.sharedInstance().studyController(self.window).view` 即可显示在主学习界面上。

## 创建并添加一个视图

```javascript
var frame = { x: 0, y: 0, width: 100, height: 50 };
var myView = new UIView(frame);
myView.backgroundColor = UIColor.colorWithHexString("#FF0000"); // 红色，若支持 hex

Application.sharedInstance().studyController(self.window).view.addSubview(myView);
```

若没有 `colorWithHexString`，可用 `UIColor.colorWithRedGreenBlueAlpha(1, 0, 0, 1)`。

## 添加标签（UILabel）

```javascript
var label = new UILabel();
label.frame = { x: 10, y: 10, width: 80, height: 30 };
label.text = "Hello!";
label.textColor = UIColor.whiteColor();
myView.addSubview(label);
```

## 添加按钮并响应点击

按钮的点击必须通过 **addTargetActionForControlEvents** 绑定到 **JSB.defineClass 的实例方法**，且该方法名**必须以冒号结尾**（如 `myButtonTapped:`）。

```javascript
var btn = UIButton.buttonWithType(0);
btn.frame = { x: 10, y: 60, width: 80, height: 40 };
btn.setTitleForState("Click Me", 0);
btn.addTargetActionForControlEvents(self, "myButtonTapped:", 1 << 6); // 1<<6 = TouchUpInside
myView.addSubview(btn);

// 在实例方法中定义：
// myButtonTapped: function (sender) {
//   Application.sharedInstance().alert("Button was tapped!");
// }
```

## 弹窗（UIAlertView）

带回调的确认框可这样写：

```javascript
UIAlertView.showWithTitleMessageStyleCancelButtonTitleOtherButtonTitlesTapBlock(
  "确认",
  "是否执行该操作？",
  0,
  "取消",
  ["确定"],
  function (alert, buttonIndex) {
    if (buttonIndex === 0) {
      JSB.log("用户点击了确定");
    } else {
      JSB.log("用户取消");
    }
  }
);
```

`buttonIndex` 为 0 表示第一个「其他」按钮，-1 表示取消。

## 布局与圆角

- 通过设置 `view.frame` 控制位置和大小；在 `controllerWillLayoutSubviews` 中根据 `studyController.view.bounds` 重新计算 frame，可适配窗口变化。
- 使用 `view.layer.cornerRadius`、`view.layer.borderWidth`、`view.layer.borderColor` 设置圆角与边框。

## 相关

- [UIView](/reference/uikit/uiview/)、[UIButton](/reference/uikit/uibutton/)、[UIAlertView](/reference/uikit/uialertview/)、[UIColor](/reference/uikit/uicolor/)
- [工具栏与命令](/guides/toolbar-and-commands/) — 将面板与工具栏按钮联动
