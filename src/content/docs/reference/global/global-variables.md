---
title: 全局入口对象（Global Variables）
description: MarginNote 插件运行时直接注入到 JS 环境的全局变量清单与用法入口。
---

本页列出 **MarginNote 插件运行时可直接使用的全局变量名**（你在 JS 里直接输入即可访问）。这些全局名对应的对象通常是 **单例**、**工厂对象**、或 **系统级入口**。

> 说明：本页仅做“可发现性索引”。每个对象的完整属性/方法请进入对应参考页。

## 全局变量清单

| 全局变量名 | 对应原生类/说明 | 核心用途 | 参考 |
| :--- | :--- | :--- | :--- |
| `JSB` | Bridge | 定义类、日志输出、require | [JSB](/reference/global/jsb/) |
| `self` | `JSExtension` 实例 | 当前插件实例（仅实例方法内可用） | [self](/reference/global/self/) |
| `Application` | `JSBApplication` | App 全局单例：路径、HUD、openURL、studyController | [Application](/reference/global/application/) |
| `Database` | `MbModelTool` 单例 | 笔记/笔记本/文档数据库访问 | [Database](/reference/global/database/) |
| `Note` | 笔记工厂（全局） | 创建新笔记：`Note.createWithTitleNotebookDocument(...)` | [Note](/reference/global/note/) |
| `UndoManager` | `JSBUndoManager` 单例 | undoGrouping/撤销重做 | [UndoManager](/reference/utility/undo-manager/) |
| `SpeechManager` | `JSBSpeechManager` 单例 | 语音朗读 | [SpeechManager](/reference/utility/speech-manager/) |
| `ZipArchive` | `JSBZipArchive` | zip 压缩/解压 | [ZipArchive](/reference/utility/zip-archive/) |
| `SQLiteDatabase` | `JSBSQLiteDatabase` | SQLite 连接器 | [SQLiteDatabase](/reference/utility/sqlite-database/) |
| `NSFileManager` | `NSFileManager` 单例 | 文件管理 | [NSFileManager](/reference/foundation/ns-file-manager/)（待补齐：全量接口） |
| `NSUserDefaults` | `NSUserDefaults` 单例 | 偏好设置存储 | [NSUserDefaults](/reference/foundation/ns-user-defaults/) |
| `NSNotificationCenter` | `NSNotificationCenter` 单例 | 通知中心 | [NSNotificationCenter](/reference/foundation/ns-notification-center/) |
| `UIApplication` | `UIApplication` 单例 | iOS 应用级入口（openURL 等） | [UIApplication](/reference/uikit/uiapplication/) |
| `UIPasteboard` | `UIPasteboard` 单例 | 系统剪贴板 | [UIPasteboard](/reference/uikit/uipasteboard/) |
| `UIDevice` | `UIDevice` 单例 | 设备信息 | [UIDevice](/reference/uikit/uidevice/) |
| `UIScreen` | `UIScreen` 单例 | 屏幕信息 | [UIScreen](/reference/uikit/uiscreen/) |

