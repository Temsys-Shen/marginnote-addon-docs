---
title: 笔记与数据库
description: 通过 Database 获取与修改笔记，并正确使用 Undo 与刷新。
---

插件的核心能力之一是对笔记与笔记本进行读写。通过 `Database.sharedInstance()` 获取数据库单例；**修改笔记或笔记本数据时，应使用 UndoManager 的 `undoGrouping` 包裹**，以支持撤销并在执行后刷新界面。

## 获取数据库与笔记

```javascript
var db = Database.sharedInstance();
var note = db.getNoteById("某个笔记 ID");
var notebook = db.getNotebookById("某个笔记本 ID");
var doc = db.getDocumentById("某个文档 MD5");
```

- `getNoteById(noteId)`：返回 `MbBookNote` 或 undefined。
- `getNotebookById(topicId)`：返回 `MbTopic` 或 undefined。
- `getDocumentById(docMd5)`：返回 `MbBook` 或 undefined。

获取列表：

```javascript
var allNotebooks = db.allNotebooks();
var allDocuments = db.allDocuments();
```

## 修改笔记与 Undo

修改笔记属性后，应放在 **UndoManager 的 undoGrouping** 中执行。常用属性：`noteTitle`（笔记标题）、`excerptText`（摘录/高亮文本）、`colorIndex`（颜色索引），并传入**当前笔记本 ID**（可从 `note.notebookId` 取）。这样用户可撤销，且界面会正确刷新。

```javascript
var noteId = "要修改的笔记 ID";
var note = Database.sharedInstance().getNoteById(noteId);
if (note) {
  var topicid = note.notebookId;
  UndoManager.sharedInstance().undoGrouping(
    "修改笔记标题",
    topicid,
    function () {
      note.noteTitle = "新标题";  // 或修改 excerptText、colorIndex 等
    }
  );
  Application.sharedInstance().refreshAfterDBChanged(topicid);
}
```

## 创建新笔记

使用全局 `Note` 对象创建新笔记：`Note.createWithTitleNotebookDocument(title, notebook, doc)`（`notebook` 为 `MbTopic`，`doc` 为 `MbBook`）。创建后同样建议放在 undoGrouping 中并刷新。

```javascript
var db = Database.sharedInstance();
var notebook = db.getNotebookById("某个笔记本 ID");
var doc = db.getDocumentById("某个文档 MD5");

if (notebook && doc) {
  var topicid = notebook.topicId || notebook.topicid;
  UndoManager.sharedInstance().undoGrouping(
    "创建笔记",
    topicid,
    function () {
      var note = Note.createWithTitleNotebookDocument("新笔记", notebook, doc);
      // note 为 MbBookNote
    }
  );
  Application.sharedInstance().refreshAfterDBChanged(topicid);
}
```

## 删除笔记

- `Database.sharedInstance().deleteBookNote(noteId)`：只删除该条笔记，不删子节点。
- `Database.sharedInstance().deleteBookNoteTree(noteId)`：删除该笔记及其所有后代。

删除后也应调用 `Application.sharedInstance().refreshAfterDBChanged(topicid)` 刷新对应笔记本界面。

## 示例：根据 noteId 修改标题并刷新

```javascript
var noteId = "A_VALID_NOTE_ID";
var note = Database.sharedInstance().getNoteById(noteId);
if (note) {
  var topicid = note.notebookId;
  UndoManager.sharedInstance().undoGrouping(
    "修改标题",
    topicid,
    function () {
      note.noteTitle = "由插件修改后的标题";
    }
  );
  Application.sharedInstance().refreshAfterDBChanged(topicid);
}
```

## 相关

- [Database](/reference/global/database/)、[MbBookNote](/reference/marginnote/mb-book-note/)、[UndoManager](/reference/utility/undo-manager/)
- [Cookbook：批量修改笔记标题](/guides/cookbook/batch-rename-notes/)
