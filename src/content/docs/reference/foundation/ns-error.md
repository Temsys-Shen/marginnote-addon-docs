---
title: NSError
description: 错误对象，包含 domain/code/userInfo 与本地化描述信息。
---

`NSError` 用于表示错误信息。网络请求（如 `NSURLConnection`）或文件 API 可能通过 `NSError **` 返回错误对象（JS 侧通常作为回调参数或返回值的一部分出现）。

## 类成员 (Class members)

### `errorWithDomain`

创建错误实例。

```javascript
static errorWithDomain(domain: string, code: number, userInfo: NSDictionary): NSError
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `domain` | `string` | 错误域。 |
| `code` | `number` | 错误码。 |
| `userInfo` | `NSDictionary` | 附加信息字典。 |

**Return Value:**

- `NSError`: 新错误实例。

## 实例成员 (Instance members)

### 属性（只读）

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| `domain` | `string` | 错误域。 |
| `code` | `number` | 错误码。 |
| `userInfo` | `NSDictionary` | 附加信息。 |
| `localizedDescription` | `string` | 本地化描述。 |
| `localizedFailureReason` | `string` | 失败原因描述。 |
| `localizedRecoverySuggestion` | `string` | 恢复建议。 |
| `localizedRecoveryOptions` | `NSArray` | 恢复选项。 |
| `helpAnchor` | `string` | 帮助锚点。 |

### `initWithDomain`

初始化错误实例（通常由工厂方法创建，较少直接调用）。

```javascript
initWithDomain(domain: string, code: number, userInfo: NSDictionary): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `domain` | `string` | 错误域。 |
| `code` | `number` | 错误码。 |
| `userInfo` | `NSDictionary` | 附加信息。 |

**Return Value:**

- 无。

### `recoveryAttempter`

恢复尝试对象。

```javascript
recoveryAttempter(): any
```

**Return Value:**

- `any`: 恢复尝试对象或 undefined。
