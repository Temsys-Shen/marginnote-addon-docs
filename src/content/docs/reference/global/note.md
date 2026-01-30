---
title: Note
description: 全局注入的笔记工厂对象，用于创建新笔记（MbBookNote）。
---

`Note` 是 MarginNote 运行时注入到 JavaScript 环境中的**全局对象**之一，用于创建新笔记。

需要特别注意：创建笔记的方法**不在** `MbBookNote` 类上，而是在全局 `Note` 对象上（这是由 MarginNote 的 JSExport 导出方式决定的）。

## 实例成员 (Instance members)

`Note` 是全局对象，通常不以实例形式使用。

## 类成员 (Class members)

### 方法

### `createWithTitleNotebookDocument`

在指定笔记本与文档下创建一条新笔记。

```javascript
createWithTitleNotebookDocument(title: string, notebook: MbTopic, doc: MbBook): MbBookNote
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | 笔记标题。 |
| `notebook` | `MbTopic` | 所属笔记本（Topic）。 |
| `doc` | `MbBook` | 来源文档（Book）。 |

**Return Value:**

- `MbBookNote`: 创建成功的新笔记对象。

### 示例

```javascript
var db = Database.sharedInstance();
var notebook = db.getNotebookById("NOTEBOOK_ID");
var doc = db.getDocumentById("DOC_MD5");

if (notebook && doc) {
  var topicid = notebook.topicId || notebook.topicid; // 兼容不同 getter 命名
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

## 相关

- [Database](/reference/global/database/) — 获取 notebook/doc
- [MbTopic](/reference/marginnote/mb-topic/)、[MbBook](/reference/marginnote/mb-book/)
- [MbBookNote](/reference/marginnote/mb-book-note/) — 创建结果类型
- [UndoManager](/reference/utility/undo-manager/)
