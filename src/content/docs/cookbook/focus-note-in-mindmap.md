---
title: 在脑图中高亮指定笔记
description: 使用 focusNoteInMindMapById 在脑图中滚动并高亮到指定笔记。
---

**场景**：已知一条笔记的 `noteId`，希望脑图视图滚动并高亮到该节点，方便用户定位。

**步骤**：

1. 获取当前窗口的 StudyController：`Application.sharedInstance().studyController(self.window)`。
2. 调用 `studyController.focusNoteInMindMapById(noteId)`。

**完整示例**：从当前焦点笔记获取 noteId，再在脑图中高亮（可用于「重新定位到当前笔记」）：

```javascript
function focusCurrentNoteInMindMap() {
  var studyController = Application.sharedInstance().studyController(self.window);
  if (!studyController) return;
  var focusNote = studyController.notebookController.focusNote;
  if (!focusNote) {
    Application.sharedInstance().alert("请先选中一条笔记");
    return;
  }
  studyController.focusNoteInMindMapById(focusNote.noteId);
}
```

若 noteId 来自其他来源（如列表选择、搜索结果的某条笔记），直接传入该 noteId 即可：

```javascript
studyController.focusNoteInMindMapById(someNoteId);
```

**相关**：[StudyController](/reference/marginnote/study-controller/)、[脑图与选区](/guides/mindmap-and-selection/)
