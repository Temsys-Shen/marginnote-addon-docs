---
title: 脑图与选区
description: 获取当前脑图、焦点笔记与文档选区，并高亮指定笔记。
---

通过 StudyController 可以访问当前窗口的脑图、焦点笔记和文档选区；还可以在脑图或文档中高亮指定笔记。

## 获取学习控制器与脑图

在已打开笔记本的窗口内（例如在工具栏按钮的回调或 `notebookWillOpen` 延迟后）：

```javascript
var studyController = Application.sharedInstance().studyController(self.window);
if (!studyController) return;

var notebookController = studyController.notebookController;
var mindmapView = notebookController.mindmapView;
var focusNote = notebookController.focusNote; // 当前脑图中聚焦的笔记
```

## 获取文档与选区

当前显示的文档控制器与用户在 PDF 中的选区文本：

```javascript
var readerController = studyController.readerController;
var docController = readerController.currentDocumentController;
var document = docController.document;           // MbBook
var selectionText = docController.selectionText; // 用户选中的文本
```

若用户未选中任何内容，`selectionText` 可能为 undefined 或空字符串。

## 在脑图中高亮指定笔记

若你已知某条笔记的 `noteId`，希望脑图滚动并高亮到该节点：

```javascript
studyController.focusNoteInMindMapById(noteId);
```

## 在文档中高亮指定笔记

若希望文档视图滚动并高亮到某条笔记对应的摘录位置：

```javascript
studyController.focusNoteInDocumentById(noteId);
```

## 示例：将当前选区追加为评论

当用户先在 PDF 中选中一段文字，再点击插件按钮时，可将选区文本追加到当前焦点笔记的评论中：

```javascript
var studyController = Application.sharedInstance().studyController(self.window);
if (!studyController) return;
var docController = studyController.readerController.currentDocumentController;
var focusNote = studyController.notebookController.focusNote;
var text = docController.selectionText;

if (focusNote && text && text.length > 0) {
  var topicid = focusNote.notebookId;
  UndoManager.sharedInstance().undoGrouping("追加选区为评论", topicid, function () {
    focusNote.appendTextComment(text);
  });
  Application.sharedInstance().refreshAfterDBChanged(topicid);
  Application.sharedInstance().showHUD("已追加为评论", self.window, 2);
} else {
  Application.sharedInstance().alert("请先选中一条笔记并在文档中选中文字");
}
```

## 相关

- [StudyController](/reference/marginnote/study-controller/)、[NotebookController](/reference/marginnote/notebook-controller/)、[DocumentController](/reference/marginnote/document-controller/)
- [Cookbook：将选区追加为评论](/guides/cookbook/append-selection-as-comment/)、[在脑图中高亮指定笔记](/guides/cookbook/focus-note-in-mindmap/)
