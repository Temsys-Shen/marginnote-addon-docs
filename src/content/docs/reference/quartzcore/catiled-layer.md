---
title: CATiledLayer
description: 平铺渲染图层。支持 tileSize、levelsOfDetail/levelsOfDetailBias，并提供 fadeDuration。
---

`CATiledLayer` 继承自 [CALayer](/reference/quartzcore/calayer/)，用于以瓦片（tile）方式渲染大尺寸内容，常用于大图或需要分块绘制的场景。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `tileSize` | { width: number, height: number } | tile 大小。 |
| `levelsOfDetail` | number | 细节级别数。 |
| `levelsOfDetailBias` | number | 细节级别偏置。 |

## 类成员 (Class members)

| 方法 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| `fadeDuration()` | — | number | 淡入淡出时长。 |

## 相关

- [CALayer](/reference/quartzcore/calayer/)
