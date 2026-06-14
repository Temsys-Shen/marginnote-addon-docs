---
title: LibMN Vendor Globals
description: LibMN加载后可用的第三方全局对象与库内真实调用点。
---

LibMN会在启动阶段加载一组第三方库并把全局对象暴露到JSContext。这里的重点不是重复上游全部API，而是告诉你“LibMN当前实际依赖了哪些能力”。

## 第三方全局对象清单

| 全局对象 | 来源模块 | LibMN已使用能力 | 官方文档 |
|:---|:---|:---|:---|
| `CryptoJS` | `vendor/CryptoJS` | `AES.encrypt/decrypt`、`MD5`、`SHA256`、`enc.Base64`、`enc.Utf8`、`lib.WordArray.create` | [CryptoJS](https://github.com/brix/crypto-js) |
| `marked` | `vendor/marked` | `marked.parse`、`marked.lexer` | [Marked](https://marked.js.org/) |
| `mustache` | `vendor/mustache` | `mustache.render`、`mustache.parse` | [mustache.js](https://github.com/janl/mustache.js) |
| `Segmentit` | `vendor/segmentit` | `Segmentit.useDefault`、`Segmentit.Segment` | [Segmentit](https://github.com/linonetwo/segmentit) |
| `jsonrepair` | `vendor/jsonrepair` | `jsonrepair(...)` | [jsonrepair](https://github.com/josdejong/jsonrepair) |
| `pako` | `vendor/pako` | `pako.gzip`、`pako.ungzip` | [pako](https://github.com/nodeca/pako) |
| `LZString` | `vendor/lz-string` | `compressToBase64`、`decompressFromBase64` | [LZString](https://pieroxy.net/blog/pages/lz-string/index.html) |
| `PDFTools` | `vendor/pdf-bridge-core` | `convertImageBase64ToPdfBase64`、`extractPage` | [AddonLib仓库](https://github.com/Temsys-Shen/marginnote-addon-docs) |

## 依赖策略建议

- 你的业务代码若直接调用这些全局对象，等于直接承担第三方升级风险。
- 若LibMN中已有对应封装，优先走`MNUtil`或相关包装类，避免把业务和vendor细节绑死。
- 只有在封装能力不足时再直接访问vendor全局，并在插件内注明版本假设。

## 常见误区

- 误区1:把vendor全局当成LibMN稳定API。
  说明:它们的稳定性由上游库决定，不由LibMN承诺。
- 误区2:忽略二进制和编码边界。
  说明:涉及Base64、压缩、PDF转换时，优先复用`DataConverter`和`MNUtil`现成通路。
- 误区3:只看单次调用成功就上线。
  说明:应在不同文档类型、不同笔记本规模下做回归验证。
