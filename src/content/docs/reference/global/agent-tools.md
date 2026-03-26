---
title: AgentTools
description: 全局工具对象。用于注册、获取、列举与执行工具。
---

**[Deprecated]** `AgentTools`是全局对象，不是原生类。用于注册工具并统一调用。

已被弃用，不建议使用。

## 实例成员 (Instance members)

`AgentTools`是全局对象，默认不以实例化方式使用。

## 类成员 (Class members)

### 方法

### `register`

注册工具对象。

```javascript
register(tool: object): void
```

<details>
<summary>目前内置的mn.search工具的注册源代码</summary>

```javascript
register({
      name: 'mn.search',
      info: {name:'mn.search', kind:'search', scopes:['topic','all','page'], description:'Search notes or pages via SearchManager'},
      run: function(input){
        input = input || {};
        var app2 = null;
        try { app2 = Application.sharedInstance(); } catch (e2) {}
        var mgr2 = app2 && app2.searchManager ? app2.searchManager : null;
        if (!mgr2) { throw new Error('search_manager_unavailable'); }
        var q = normalizeString(input.query, '');
        var scope = normalizeString(input.scope, 'topic').toLowerCase();
        if (scope !== 'topic' && scope !== 'all' && scope !== 'page') { scope = 'topic'; }
        var titleOnly = !!input.titleOnly;
        var beginsWith = !!input.beginsWith;
        var limit = (input.limit != null) ? input.limit : 50;
        var noteOnly = (input.noteOnly != null) ? !!input.noteOnly : false;
        var topicid = normalizeNullable(input.topicid);
        if (scope === 'page') {
          return mgr2.searchPage(q, beginsWith, limit);
        }
        if (input.useFts) {
          return mgr2.searchFts3Text(q, titleOnly, topicid, limit, noteOnly);
        }
        return mgr2.searchText(q, titleOnly, topicid, beginsWith, limit);
      }
});
```
</details>

### `get`

按名称获取工具。

```javascript
get(name: string): object | null
```

### `list`

列出已注册工具。

```javascript
list(): object[]
```

### `run`

执行指定工具。

```javascript
run(name: string, input: any): Promise<any>
```

## 使用规范

- `register`时缺少名称会被忽略，同名注册会覆盖。
- `run`找不到工具时会抛错；工具对象没有`run`实现时常见返回`null`。
- 目前会内建工具`mn.search`，执行前可先`list/get`检查。

## 相关

- [SearchManager](/reference/global/search-manager/)
