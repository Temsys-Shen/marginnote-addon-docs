---
title: 批量修改笔记标题
description: 遍历当前笔记本下的笔记，按规则修改 noteTitle，并用 undoGrouping 包裹。
---

**场景**：在当前笔记本中，对所有根笔记或其子笔记按规则批量修改标题（例如加前缀、替换关键词）。

**步骤**：

1. 获取当前笔记本 ID（如从 `studyController.notebookController.notebookId`）。
2. 用 `Database.getNotebookById(topicId)` 取笔记本，得到 `notebook.notes`（根笔记数组）。
3. 递归或遍历所有笔记，按你的规则修改 `note.noteTitle`。
4. 将所有修改放在 **UndoManager.undoGrouping(actionName, topicid, block)** 的 block 中执行。
5. 执行后调用 `Application.sharedInstance().refreshAfterDBChanged(topicid)`。

**完整示例**：给当前笔记本下所有根笔记的标题加前缀 `"[已读] "`。

```javascript
function batchRenameAddPrefix() {
  var studyController = Application.sharedInstance().studyController(self.window);
  if (!studyController) return;
  var topicid = studyController.notebookController.notebookId;
  if (!topicid) return;

  var notebook = Database.sharedInstance().getNotebookById(topicid);
  if (!notebook || !notebook.notes || notebook.notes.length === 0) {
    Application.sharedInstance().alert("当前笔记本没有笔记");
    return;
  }

  var prefix = "[已读] ";
  UndoManager.sharedInstance().undoGrouping("批量加前缀", topicid, function () {
    function processNotes(notes) {
      for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        if (note.noteTitle && note.noteTitle.indexOf(prefix) !== 0) {
          note.noteTitle = prefix + note.noteTitle;
        }
        if (note.childNotes && note.childNotes.length > 0) {
          processNotes(note.childNotes);
        }
      }
    }
    processNotes(notebook.notes);
  });
  Application.sharedInstance().refreshAfterDBChanged(topicid);
  Application.sharedInstance().showHUD("已批量加前缀", self.window, 2);
}
```

可将 `batchRenameAddPrefix` 绑定到工具栏按钮的 selector（如 `batchRename:`），在 `batchRename:` 中调用 `batchRenameAddPrefix()`。

**相关**：[笔记与数据库](/guides/notes-and-database/)、[MbBookNote](/reference/marginnote/mb-book-note/)、[UndoManager](/reference/utility/undo-manager/)
