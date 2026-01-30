---
title: CAValueFunction
description: 值函数。可按名称创建，并可读取 name。
---

`CAValueFunction` 用于描述某些动画/变换相关的值函数。它通常作为 `CAPropertyAnimation.valueFunction` 或若干动画对象的 `valueFunction` 字段出现。

## 实例成员 (Instance members)

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `name` | string | 只读。函数名。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `functionWithName(name)` | name: string | CAValueFunction | 按名称创建。 |

## 相关

- [CAPropertyAnimation](/reference/quartzcore/caproperty-animation/)
