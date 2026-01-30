---
title: SpeechManager
description: 语音朗读，朗读笔记或指定文本。
---

用于 TTS 朗读。通过 `SpeechManager.sharedInstance()` 获取单例。

## 类成员 (Class members)

### `sharedInstance`

获取单例。

```javascript
static sharedInstance(): SpeechManager
```

**Return Value:**

- `SpeechManager`: 单例对象。

## 实例成员 (Instance members)

### 属性

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `speaking` | `boolean` | 是否正在朗读。 |
| `paused` | `boolean` | 是否暂停。 |
| `sceneWindow` | `UIWindow` | 场景窗口。 |
| `languageCode` | `string` | 语言代码。 |
| `canPrev` | `boolean` | 是否可上一句。 |
| `canNext` | `boolean` | 是否可下一句。 |

### 方法

### `startSpeechNotes`

开始朗读笔记列表。

```javascript
startSpeechNotes(notes: NSArray): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `notes` | `NSArray` | 包含 `MbBookNote` 的数组。 |

### `stopSpeech`

停止朗读。

```javascript
stopSpeech(): void
```

### `pauseSpeech`

暂停朗读。

```javascript
pauseSpeech(): void
```

### `continueSpeech`

继续朗读。

```javascript
continueSpeech(): void
```

### `prevSpeech`

上一句。

```javascript
prevSpeech(): void
```

### `nextSpeech`

下一句。

```javascript
nextSpeech(): void
```

### `playText`

朗读指定文本。

```javascript
playText(text: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | 要朗读的文本。 |

### `playText` (指定语言)

指定语言朗读文本。

```javascript
playText(text: string, languageTxt: string): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | 要朗读的文本。 |
| `languageTxt` | `string` | 语言代码（如 "en-US"）。 |
