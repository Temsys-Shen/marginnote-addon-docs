---
title: Document
description: 全局别名对象。语义上等同于MbBook。
---

`Document`是插件环境的全局导出别名，语义上等同于[MbBook](/reference/marginnote/mb-book/)。

## 关系说明

- `Document`与`MbBook`是同一文档对象在全局入口层的别名语义，不是两套模型。
- 主键语义为`docMd5`。
- 对象生命周期由宿主数据层管理，不把投影字段当强一致缓存长期持有。

## 用法

完整属性与方法请直接参考[MbBook](/reference/marginnote/mb-book/)。

## 相关

- [MbBook](/reference/marginnote/mb-book/)
- [Database](/reference/global/database/)
