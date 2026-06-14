---
title: 导出当前笔记本
description: 使用 Database.exportNotebook 导出当前笔记本并给出 HUD 提示。
---

**场景**：用户点击插件按钮后，将当前打开的笔记本导出到指定路径，并显示成功或失败提示。

**步骤**：

1. 获取当前笔记本 ID：`studyController.notebookController.notebookId`。
2. 确定导出目标路径（如 `Application.sharedInstance().documentPath + "/Exports/" + 笔记本标题 + ".mnbk"`）；若目录不存在，用 NSFileManager 创建。
3. 调用 `Database.sharedInstance().exportNotebook(topicid, storePath)`，返回 boolean 表示是否成功。
4. 用 `Application.sharedInstance().showHUD(message, self.window, 2)` 提示用户。

**完整示例**：

```javascript
function exportCurrentNotebook() {
  var studyController = Application.sharedInstance().studyController(self.window);
  if (!studyController) return;
  var topicid = studyController.notebookController.notebookId;
  if (!topicid) return;

  var notebook = Database.sharedInstance().getNotebookById(topicid);
  if (!notebook) return;

  var app = Application.sharedInstance();
  var baseDir = app.documentPath + "/NotebookExports";
  var fileManager = NSFileManager.defaultManager();
  if (!fileManager.fileExistsAtPath(baseDir)) {
    fileManager.createDirectoryAtPathWithIntermediateDirectoriesAttributes(baseDir, true, null);
  }

  var safeTitle = (notebook.title || "未命名").replace(/[/\\:*?"<>|]/g, "_");
  var storePath = baseDir + "/" + safeTitle + "_" + Date.now() + ".mnbk";

  var ok = Database.sharedInstance().exportNotebook(topicid, storePath);
  if (ok) {
    app.showHUD("已导出到：" + storePath, self.window, 3);
  } else {
    app.alert("导出失败");
  }
}
```

可将 `exportCurrentNotebook` 绑定到工具栏按钮（如 `exportNotebook:`），在对应实例方法中调用即可。

**相关**：[Database](/reference/global/database/)、[MbTopic](/reference/marginnote/mb-topic/)、[NSFileManager](/reference/foundation/ns-file-manager/)
