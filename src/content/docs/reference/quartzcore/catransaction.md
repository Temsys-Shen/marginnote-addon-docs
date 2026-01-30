---
title: CATransaction
description: Core Animation 事务。支持 begin/commit、设置动画时长/时间函数/是否禁用 actions，以及 completionBlock。
---

`CATransaction` 用于把多个图层属性变更包装成一次事务，并统一控制该事务的动画参数（时长、时间函数、是否禁用隐式动画等）。

## 实例成员 (Instance members)

当前运行时未暴露 `CATransaction` 的实例成员；通常直接使用其类成员 API。

## 类成员 (Class members)

### 事务控制

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `begin()` | — | void | 开始事务。 |
| `commit()` | — | void | 提交事务。 |
| `flush()` | — | void | 立即提交/刷新（取决于运行时实现）。 |
| `lock()` / `unlock()` | — | void | 事务锁（一般不常用）。 |

### 动画参数

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `animationDuration()` | — | number | 获取当前事务动画时长。 |
| `setAnimationDuration(dur)` | dur: number | void | 设置动画时长。 |
| `animationTimingFunction()` | — | CAMediaTimingFunction \| null | 获取时间函数。 |
| `setAnimationTimingFunction(function)` | function: CAMediaTimingFunction | void | 设置时间函数。 |
| `disableActions()` | — | boolean | 获取是否禁用隐式动画（actions）。 |
| `setDisableActions(flag)` | flag: boolean | void | 设置是否禁用隐式动画。 |

### completion 与自定义键值

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `completionBlock()` | — | (() => void) \| null | 获取 completionBlock。 |
| `setCompletionBlock(block)` | block: (() => void) \| null | void | 设置 completionBlock。 |
| `valueForKey(key)` | key: string | any | 读取事务上下文的自定义值。 |
| `setValueForKey(anObject, key)` | anObject: any, key: string | void | 设置事务上下文的自定义值。 |

## 相关

- [CALayer](/reference/quartzcore/calayer/)
- [CAMediaTimingFunction](/reference/quartzcore/camedia-timing-function/)
