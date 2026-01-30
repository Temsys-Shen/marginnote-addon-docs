---
title: CAAnimation
description: Core Animation 动画基类。可创建动画并查询默认值；支持决定某 key 是否参与归档。
---

`CAAnimation` 是 Core Animation 动画体系的基类，常作为 `CALayer.addAnimationForKey(anim, key)` 的参数使用。

## 实例成员 (Instance members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `shouldArchiveValueForKey(key)` | key: string | boolean | 返回某个 key 的值是否需要被归档。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `animation()` | — | CAAnimation | 创建一个动画对象。 |
| `defaultValueForKey(key)` | key: string | any | 返回某 key 的默认值。 |

## 相关

- [CALayer](/reference/quartzcore/calayer/)
