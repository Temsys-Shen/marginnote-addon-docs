---
title: AgentTools
description: 全局工具对象。用于注册、获取、列举与执行工具。
---

`AgentTools`是全局对象，不是原生类。用于在运行时注册工具并统一调用。

## 实例成员 (Instance members)

`AgentTools`是全局对象，通常不以实例化方式使用。

## 类成员 (Class members)

### 方法

### `register`

注册工具对象。

```javascript
register(tool: object): void
```

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

## 运行时建议

- `register`时缺少名称会被忽略，同名注册可能覆盖。
- `run`找不到工具时会抛错；工具对象没有`run`实现时常见返回`null`。
- 目前会内建工具`mn.search`，执行前可先`list/get`检查。

## 相关

- [SearchManager](/reference/global/search-manager/)
