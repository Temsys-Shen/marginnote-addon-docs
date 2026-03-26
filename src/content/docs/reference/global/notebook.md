---
title: Notebook
description: 全局别名对象。语义上等同于MbTopic。
---

`Notebook`是插件环境的全局导出别名，语义上等同于[MbTopic](/reference/marginnote/mb-topic/)。

## 关系说明

- `Notebook`与`MbTopic`是同一类主题对象在全局入口层的别名语义，不是两套模型。
- 主键语义为`topicId/topicid`。
- 对象生命周期由宿主数据层管理，不把`documents/notes`当强一致缓存长期持有。

## 用法

完整属性与方法请直接参考[MbTopic](/reference/marginnote/mb-topic/)。

## 相关

- [MbTopic](/reference/marginnote/mb-topic/)
- [Database](/reference/global/database/)
