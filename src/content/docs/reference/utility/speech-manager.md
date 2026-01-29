---
title: SpeechManager
description: 语音朗读，朗读笔记或指定文本。
---

用于 TTS 朗读。通过 `SpeechManager.sharedInstance()` 获取单例。

## 获取实例

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `static sharedInstance()` | SpeechManager | 获取单例。 |

## 方法

| 方法 | 参数 | 说明 |
|------|------|------|
| `startSpeechNotes(notes)` | notes: NSArray（MbBookNote 等） | 开始朗读笔记列表。 |
| `stopSpeech()` | — | 停止。 |
| `pauseSpeech()` | — | 暂停。 |
| `continueSpeech()` | — | 继续。 |
| `prevSpeech()` / `nextSpeech()` | — | 上/下一句。 |
| `canPrev` / `canNext` | — | 是否可上/下一句。 |
| `playText(text)` | text: string | 朗读指定文本。 |
| `playText(text, languageTxt)` | text, languageTxt: string | 指定语言朗读。 |

## 属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `speaking` | boolean | 是否正在朗读。 |
| `paused` | boolean | 是否暂停。 |
| `sceneWindow` | UIWindow | 场景窗口。 |
| `languageCode` | string | 语言代码。 |
