---
title: UIAlertView
description: 弹窗提醒与确认框，带回调。
---

用于显示警告框和确认框。推荐使用带 TapBlock 的类方法，在回调中根据 buttonIndex 处理（0 为第一个 other 按钮，-1 为取消）。

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `showWithTitleMessageStyleCancelButtonTitleOtherButtonTitlesTapBlock(title, message, style, cancelButtonTitle, otherButtonTitles, tapBlock)` | title, message: string；style: number（0 默认）；cancelButtonTitle: string；otherButtonTitles: string[]；tapBlock: (alert, buttonIndex) => void | instancetype | 显示弹窗，点击后回调；buttonIndex 为 0,1,... 对应 other 按钮，-1 为取消。 |
| `makeWithTitleMessageDelegateCancelButtonTitleOtherButtonTitles(title, message, delegate, cancelButtonTitle, otherButtonTitles)` | title, message, delegate（可为 null）, cancelButtonTitle, otherButtonTitles: array | id | 创建实例，需再调用 show()。 |

## 实例成员 (Instance members)

| 方法 | 说明 |
|------|------|
| `show()` | 显示弹窗。 |
| `dismissWithClickedButtonIndexAnimated(buttonIndex, animated)` | 关闭。 |
| `textFieldAtIndex(textFieldIndex)` | 若 style 为带输入框，可获取 UITextField。 |

## 相关

- [教程：原生 UI](/guides/native-ui/)
