---
title: NSUUID
description: UUID 对象（生成与字符串化）。
---

`NSUUID` 表示一个 UUID。常用于生成唯一标识，或把已有 UUID 字节/字符串传递到系统 API 中。

## 类成员 (Class members)

### `UUID`

生成新的 UUID。

```javascript
static UUID(): NSUUID
```

**Return Value:**

- `NSUUID`: 新 UUID 实例。

## 实例成员 (Instance members)

### `UUIDString`

返回形如 `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX` 的字符串。

```javascript
UUIDString(): string
```

**Return Value:**

- `string`: UUID 字符串。

### `getUUIDBytes`

取出 16 字节 UUID 数据（高级用法）。

```javascript
getUUIDBytes(uuid: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `uuid` | `any` | 目标缓冲区（16 字节）。 |

**Return Value:**

- 无。
