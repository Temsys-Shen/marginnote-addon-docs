---
title: NSProxy
description: 代理基类（消息转发基础设施）。
---

`NSProxy` 是 Objective‑C 世界里的代理基类。在插件环境中，你一般不会直接创建它，但可能会在调试/反射/桥接场景里遇到它的基础方法。

## 类成员 (Class members)

### `alloc`

分配实例。

```javascript
static alloc(): NSProxy
```

**Return Value:**

- `NSProxy`: 新实例。

### `allocWithZone`

在指定 zone 分配。

```javascript
static allocWithZone(zone: any): NSProxy
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `zone` | `any` | 内存 zone。 |

**Return Value:**

- `NSProxy`: 新实例。

### `class`

类对象。

```javascript
static class(): any
```

**Return Value:**

- `any`: 类对象。

## 实例成员 (Instance members)

### `respondsToSelector`

是否响应某 selector。

```javascript
respondsToSelector(aSelector: any): boolean
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `aSelector` | `any` | selector。 |

**Return Value:**

- `boolean`: 是否响应。

### `methodSignatureForSelector`

某 selector 的方法签名。

```javascript
methodSignatureForSelector(sel: any): any
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sel` | `any` | selector。 |

**Return Value:**

- `any`: 方法签名。

### `forwardInvocation`

转发调用。

```javascript
forwardInvocation(invocation: any): void
```

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `invocation` | `any` | 调用对象。 |

**Return Value:**

- 无。

### `dealloc`

析构（通常不直接调用）。

```javascript
dealloc(): void
```

**Return Value:**

- 无。

### `finalize`

终结（通常不直接调用）。

```javascript
finalize(): void
```

**Return Value:**

- 无。

### `description`

对象描述。

```javascript
description(): string
```

**Return Value:**

- `string`: 描述字符串。

### `debugDescription`

调试描述。

```javascript
debugDescription(): string
```

**Return Value:**

- `string`: 调试描述字符串。

### `allowsWeakReference`

是否允许弱引用。

```javascript
allowsWeakReference(): boolean
```

**Return Value:**

- `boolean`: 是否允许。

### `retainWeakReference`

保留弱引用。

```javascript
retainWeakReference(): boolean
```

**Return Value:**

- `boolean`: 是否成功保留。
