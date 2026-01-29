---
title: NSTimer
description: 定时器，延迟执行或周期执行回调。
---

用于延迟执行或重复执行一段代码。JS 侧通过 `scheduledTimerWithTimeInterval(ti, repeats, block)` 创建，block 接收 timer 参数。

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `scheduledTimerWithTimeInterval(ti, repeats, block)` | ti: number（秒）, repeats: boolean, block: (timer) => void | NSTimer | 创建并调度定时器；repeats 为 false 时只执行一次。 |

## 实例成员 (Instance members)

| 方法 | 说明 |
|------|------|
| `invalidate()` | 使定时器失效，停止触发。 |
| `fire()` | 立即触发一次。 |
| `isValid` | 是否仍有效。 |

## 相关

- 常用于在 `notebookWillOpen` 后延迟 0.2 秒再挂载 UI，以确保 studyController 已就绪。
