---
title: 将选区追加为评论
description: 读取当前文档选区文本，追加到当前焦点笔记的评论中。
---

**场景**：用户在 PDF 中选中一段文字后点击插件按钮，将这段文字作为一条文本评论追加到当前在脑图中选中的笔记上。

**步骤**：

1. 获取 StudyController、当前文档控制器与焦点笔记。
2. 读取 `currentDocumentController.selectionText` 和 `notebookController.focusNote`。
3. 若两者均存在且选区非空，在 UndoManager.undoGrouping 中调用 `focusNote.appendTextComment(selectionText)`。
4. 调用 `Application.refreshAfterDBChanged(topicid)` 并 showHUD 提示。

**完整示例**：

```javascript
function appendSelectionAsComment() {
  var studyController = Application.sharedInstance().studyController(self.window);
  if (!studyController) return;

  var docController = studyController.readerController.currentDocumentController;
  var focusNote = studyController.notebookController.focusNote;
  var text = docController ? docController.selectionText : null;

  if (!focusNote) {
    Application.sharedInstance().alert("请先在脑图中选中一条笔记");
    return;
  }
  if (!text || text.length === 0) {
    Application.sharedInstance().alert("请在文档中选中一段文字");
    return;
  }

  var topicid = focusNote.notebookId;
  UndoManager.sharedInstance().undoGrouping("追加选区为评论", topicid, function () {
    focusNote.appendTextComment(text);
  });
  Application.sharedInstance().refreshAfterDBChanged(topicid);
  Application.sharedInstance().showHUD("已追加为评论", self.window, 2);
}
```

可将该函数绑定到工具栏按钮的 selector（如 `appendSelectionAsComment:`），在实例方法中调用 `appendSelectionAsComment()`。

**相关**：[脑图与选区](/guides/mindmap-and-selection/)、[MbBookNote.appendTextComment](/reference/marginnote/mb-book-note/)、[UndoManager](/reference/utility/undo-manager/)
