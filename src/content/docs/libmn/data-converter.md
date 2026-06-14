---
title: DataConverter
description: LibMN中的DataConverter对象API文档。
---

`DataConverter`是用于数据转换的工具对象，提供编码、压缩、二进制转换、格式桥接和文件类型识别等功能。

## 类成员(Class members)

### 属性

| 字段名 | 类型 | 说明 |
|:-------|:---|:-----|
| `errorLog` | `Array<{ source: string; time: string; error: string|{ message: string; detail?: string }; info?: string }>` | 错误日志缓存，记录压缩、解码、文件识别等失败信息。 |

### 方法

#### `addErrorLog`

##### 类型

```ts
static addErrorLog(error: string|{ message: string; detail?: string },source?: string,info?: string): void
```

##### 说明

当某个转换方法捕获到异常时，用这个方法统一记录错误并提示用户。与直接`console.log`不同，它会同时写入`errorLog`并通过`MNUtil.copyJSON`把日志复制到剪贴板，方便直接上报。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `error` | `string\|{ message: string; detail?: string }` | 是 | 错误信息或错误对象。 |
| `source` | `string` | 否 | 错误来源标识，默认`DataConverter`。 |
| `info` | `string` | 否 | 附加上下文信息。 |

##### 返回值

- 类型:`void`
- 语义:方法执行后不返回值。
#### `customBtoa`

##### 类型

```ts
static customBtoa(str: string): string
```

##### 说明

使用内置字符表把字符串编码为Base64。该实现不依赖运行环境atob和btoa，适合JSCore兼容场景。

##### 参数

| 参数名 | 类型     | 必填 | 说明       |
|:-------|:---------|:-----|:-----------|
| `str`  | `string` | 是   | 待编码的原始字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回Base64编码结果。

#### `utf8_to_b64`

##### 类型

```ts
static utf8_to_b64(str: string): string
```

##### 说明

先按UTF-8处理文本再输出Base64结果。输入含中文等多字节字符时可避免直接编码导致乱码。

##### 参数

| 参数名 | 类型     | 必填 | 说明       |
|:-------|:---------|:-----|:-----------|
| `str`  | `string` | 是   | 待编码的原始字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回按UTF-8处理后的Base64编码结果。

#### `compressAndEncode`

##### 类型

```ts
static compressAndEncode(jsonObj: object,type?: 'pako'|'lz-string'): string|undefined
```

##### 说明

把对象序列化后压缩并编码为Base64字符串。压缩或编码失败时返回undefined并记录错误日志。

##### 参数

| 参数名    | 类型     | 必填          | 说明         |
|:----------|:---------|:--------------|:-------------|
| `jsonObj` | `object` | 是            | 待压缩并编码的数据对象。 |
| `type`    | `'pako'\|'lz-string'` | 否           | 压缩算法类型，默认`pako`。 |

##### 返回值

- 类型:`string|undefined`
- 语义:成功返回`string`，失败返回`undefined`。

#### `decodeAndDecompress`

##### 类型

```ts
static decodeAndDecompress(base64: string,type?: 'pako'|'lz-string'): string|undefined
```

##### 说明

把压缩Base64文本解码并还原为原始字符串。输入格式不合法或算法不匹配时返回undefined并记录错误日志。

##### 参数

| 参数名   | 类型     | 必填          | 说明         |
|:---------|:---------|:--------------|:-------------|
| `base64` | `string` | 是            | 待解码的压缩Base64文本。 |
| `type`   | `'pako'\|'lz-string'` | 否           | 解压算法类型，需与编码阶段一致。 |

##### 返回值

- 类型:`string|undefined`
- 语义:成功返回`string`，失败返回`undefined`。

#### `atob`

##### 类型

```ts
static atob(base64Str: string): string
```

##### 说明

Base64解码为字符串。

##### 参数

| 参数名      | 类型     | 必填 | 说明         |
|:------------|:---------|:-----|:-------------|
| `base64Str` | `string` | 是   | Base64文本。 |

##### 返回值

- 类型:`string`
- 语义:返回Base64解码后的字符串。

#### `btoa`

##### 类型

```ts
static btoa(input: string|Uint8Array): string
```

##### 说明

字符串或Uint8Array转Base64编码。

##### 参数

| 参数名  | 类型     | 必填         | 说明 |
|:--------|:---------|:-------------|:-----|
| `input` | `string\|Uint8Array` | 是   | 要编码的字符串或Uint8Array。 |

##### 返回值

- 类型:`string`
- 语义:返回Base64编码后的字符串。

#### `rgbaToHex`

##### 类型

```ts
static rgbaToHex(rgba: { r: number; g: number; b: number; a: number },includeAlpha?: boolean,toUpperCase?: boolean): string
```

##### 说明

- 把`{ r, g, b, a }`颜色对象转换成十六进制字符串，适合在UI配置里直接使用。

- 和`rgbaArrayToHexArray`的区别是这里只处理单个颜色对象。
##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `rgba` | `{ r: number; g: number; b: number; a: number }` | 是 | RGBA颜色对象，包含r、g、b、a四个通道。 |
| `includeAlpha` | `boolean` | 否 | 是否在结果中包含alpha通道。 |
| `toUpperCase` | `boolean` | 否 | 是否把十六进制字母输出为大写。 |

##### 返回值

- 类型:`string`
- 语义:返回十六进制颜色字符串，默认包含`#`前缀。

#### `rgbaArrayToHexArray`

##### 类型

```ts
static rgbaArrayToHexArray(rgbaArray: Array<{ r: number; g: number; b: number; a: number }>,includeAlpha?: boolean,toUpperCase?: boolean): string[]
```

##### 说明

- 批量把RGBA数组转换成十六进制颜色数组，常用于一次生成主题色板。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:---|:---|:---|:---|
| `rgbaArray` | `Array<{ r: number; g: number; b: number; a: number }>` | 是 | 待转换的RGBA颜色对象数组。 |
| `includeAlpha` | `boolean` | 否 | 是否在结果中包含alpha通道。 |
| `toUpperCase` | `boolean` | 否 | 是否把十六进制字母输出为大写。 |

##### 返回值

- 类型:`string[]`
- 语义:返回与输入顺序一致的十六进制颜色字符串数组。

#### `hexToRgb`

##### 类型

```ts
static hexToRgb(hex: string): [number,number,number]
```

##### 说明

- 把`#RRGGBB`颜色字符串还原为`[r,g,b]`数组。

- 和`parseHexColor`相比，它不处理透明度，只读前三个颜色通道。
##### 参数

| 参数名 | 类型     | 必填 | 说明       |
|:-------|:---------|:-----|:-----------|
| `hex`  | `string` | 是   | 十六进制颜色字符串，可含`#`前缀。 |

##### 返回值

- 类型:`[number,number,number]`
- 语义:返回`[r,g,b]`数组，每项范围为0到255。

#### `pngToJpg`

##### 类型

```ts
static pngToJpg(pngData: NSData,quality?: number): NSData
```

##### 说明

- 把PNG格式的`NSData`转换为JPEG二进制数据。

- 相比`compressImageToJpg`，这个方法只接收PNG数据，不做输入类型分派。
##### 参数

| 参数名    | 类型     | 必填 | 说明                 |
|:----------|:---------|:-----|:---------------------|
| `pngData` | `NSData` | 是   | 待转换的PNG二进制数据。 |
| `quality` | `number` | 否   | 压缩质量，建议0到1。 |

##### 返回值

- 类型:`NSData`
- 语义:返回JPEG格式的`NSData`二进制数据。

#### `compressImageToJpg`

##### 类型

```ts
static compressImageToJpg(imageData: string|NSData|UIImage,quality?: number): NSData|undefined
```

##### 说明

- 把字符串Base64、`NSData`或`UIImage`统一压缩成JPEG数据。

- 当你无法确定上游图片类型时优先用它，而不是直接调用`pngToJpg`。
##### 参数

| 参数名      | 类型     | 必填   | 说明                 |
|:------------|:---------|:-------|:---------------------|
| `imageData` | `string\|NSData\|UIImage` | 是    | 图片数据。 |
| `quality`   | `number` | 否     | 压缩质量，建议0到1。 |

##### 返回值

- 类型:`NSData\|undefined`
- 语义:成功返回`NSData`，失败返回`undefined`。

#### `imageFromBase64`

##### 类型

```ts
static imageFromBase64(base64: string,type?: 'png'|'jpg'|'jpeg'|'pdf'): UIImage
```

##### 说明

- 把Base64字符串转换为`UIImage`。

- 如果你只需要二进制，不要走这个方法，改用`dataFromBase64`更直接。
##### 参数

| 参数名   | 类型     | 必填  | 说明         |
|:---------|:---------|:------|:-------------|
| `base64` | `string` | 是    | Base64文本。 |
| `type`   | `'png'\|'jpg'\|'jpeg'\|'pdf'` | 否    | 图片类型，默认为png。 |

##### 返回值

- 类型:`UIImage`
- 语义:返回可直接渲染的`UIImage`对象。

#### `dataFromBase64`

##### 类型

```ts
static dataFromBase64(base64: string,type?: 'pdf'|'png'|'jpg'|'jpeg'): NSData
```

##### 说明

- 把Base64文本或DataURL转换为`NSData`。

- 它会根据`type`补齐不同MIME前缀，适合统一处理pdf、png、jpeg。
##### 参数

| 参数名   | 类型     | 必填  | 说明         |
|:---------|:---------|:------|:-------------|
| `base64` | `string` | 是    | Base64文本。 |
| `type`   | `'pdf'\|'png'\|'jpg'\|'jpeg'` | 否    | 数据类型，默认为pdf。 |

##### 返回值

- 类型:`NSData`
- 语义:返回解码后的`NSData`二进制数据。

#### `genFrame`

##### 类型

```ts
static genFrame(x: number,y: number,width: number,height: number): { x: number; y: number; width: number; height: number }
```

##### 说明

- 生成`{x,y,width,height}`结构体供原生接口调用。

##### 参数

| 参数名   | 类型     | 必填 | 说明       |
|:---------|:---------|:-----|:-----------|
| `x`      | `number` | 是   | 矩形左上角x坐标。 |
| `y`      | `number` | 是   | 矩形左上角y坐标。 |
| `width`  | `number` | 是   | 矩形宽度。 |
| `height` | `number` | 是   | 矩形高度。 |

##### 返回值

- 类型:`{ x: number; y: number; width: number; height: number }`
- 语义:返回`{ x, y, width, height }`矩形对象。

#### `parseWinRect`

##### 类型

```ts
static parseWinRect(winRect: string): { x: number; y: number; width: number; height: number }
```

##### 说明

- 把原生窗口矩形字符串解析成标准frame对象。

- 它会把字符串中的花括号和空格清理后再转数值。
##### 参数

| 参数名    | 类型     | 必填 | 说明       |
|:----------|:---------|:-----|:-----------|
| `winRect` | `string` | 是   | 原生窗口矩形字符串，常见格式为`{{x,y},{w,h}}`。 |

##### 返回值

- 类型:`{ x: number; y: number; width: number; height: number }`
- 语义:返回解析后的`{ x, y, width, height }`对象。

#### `convertDate`

##### 类型

```ts
static convertDate(date: string|number|Date|null|undefined): Date|null
```

##### 说明

- 把字符串、时间戳或Date对象统一转成`Date`。

- 转换失败返回`null`，便于调用方显式判断异常数据。
##### 参数

| 参数名 | 类型     | 必填   | 说明 |
|:-------|:---------|:-------|:-----|
| `date` | `string\|number\|Date\|null\|undefined` | 是   | 要转换的日期值。 |

##### 返回值

- 类型:`Date|null`
- 语义:成功返回`Date`对象，无法解析时返回`null`。

#### `convertNsAttrsToFsStats`

##### 类型

```ts
static convertNsAttrsToFsStats(nsAttrs: Record<string,object|string|number|Date>): {
  dev: number
  ino: number
  mode: number
  nlink: number
  uid: number
  gid: number
  rdev: number
  size: number
  blksize: number
  blocks: number
  atimeMs: number
  mtimeMs: number
  ctimeMs: number
  birthtimeMs: number
  atime: Date
  mtime: Date
  ctime: Date
  birthtime: Date
  _nsFileType?: string
  _nsFileOwnerAccountName?: string
  _nsFileGroupOwnerAccountName?: string
  _nsFileProtectionKey?: string
  _nsFileExtendedAttributes?: object
  isFile: boolean
  isDirectory: boolean
  isSymbolicLink: boolean
  isFIFO: boolean
  isSocket: boolean
  isBlockDevice: boolean
  isCharacterDevice: boolean
}
```

##### 说明

- 把`NSFileManager`属性对象映射为接近Node.js`fs.Stats`的结构。

##### 参数

| 参数名    | 类型                     | 必填 | 说明       |
|:----------|:-------------------------|:-----|:-----------|
| `nsAttrs` | `Record<string,object\|string\|number\|Date>` | 是   | NS文件属性对象。 |

##### 返回值

- 类型:`{ dev: number; ino: number; mode: number; nlink: number; uid: number; gid: number; rdev: number; size: number; blksize: number; blocks: number; atimeMs: number; mtimeMs: number; ctimeMs: number; birthtimeMs: number; atime: Date; mtime: Date; ctime: Date; birthtime: Date; _nsFileType?: string; _nsFileOwnerAccountName?: string; _nsFileGroupOwnerAccountName?: string; _nsFileProtectionKey?: string; _nsFileExtendedAttributes?: object; isFile: boolean; isDirectory: boolean; isSymbolicLink: boolean; isFIFO: boolean; isSocket: boolean; isBlockDevice: boolean; isCharacterDevice: boolean }`
- 语义:返回接近Node.js`fs.Stats`格式的文件属性对象。

#### `getFileAttributes`

##### 类型

```ts
static getFileAttributes(path: string): {
  dev: number
  ino: number
  mode: number
  nlink: number
  uid: number
  gid: number
  rdev: number
  size: number
  blksize: number
  blocks: number
  atimeMs: number
  mtimeMs: number
  ctimeMs: number
  birthtimeMs: number
  atime: Date
  mtime: Date
  ctime: Date
  birthtime: Date
  isFile: boolean
  isDirectory: boolean
  isSymbolicLink: boolean
  isFIFO: boolean
  isSocket: boolean
  isBlockDevice: boolean
  isCharacterDevice: boolean
  path: string
}
```

##### 说明

- 读取文件属性并返回带`path`字段的stats对象。

- 相比直接访问`NSFileManager`，这里已经统一了时间与权限字段格式。
##### 参数

| 参数名 | 类型     | 必填 | 说明             |
|:-------|:---------|:-----|:-----------------|
| `path` | `string` | 是   | 文件路径字符串。 |

##### 返回值

- 类型:`{ dev: number; ino: number; mode: number; nlink: number; uid: number; gid: number; rdev: number; size: number; blksize: number; blocks: number; atimeMs: number; mtimeMs: number; ctimeMs: number; birthtimeMs: number; atime: Date; mtime: Date; ctime: Date; birthtime: Date; isFile: boolean; isDirectory: boolean; isSymbolicLink: boolean; isFIFO: boolean; isSocket: boolean; isBlockDevice: boolean; isCharacterDevice: boolean; path: string }`
- 语义:返回带`path`字段的文件属性对象。

#### `isNSNull`

##### 类型

```ts
static isNSNull(obj: object): boolean
```

##### 说明

- 判断对象是否是原生`NSNull.new()`实例。

- 它用于区分“原生空值对象”和普通`null/undefined`。
##### 参数

| 参数名 | 类型      | 必填 | 说明         |
|:-------|:----------|:-----|:-------------|
| `obj`  | `object` | 是   | 待判断对象。 |

##### 返回值

- 类型:`boolean`
- 语义:是`NSNull`实例返回`true`，否则返回`false`。

#### `getValidJSON`

##### 类型

```ts
static getValidJSON(jsonString: string|object,debug?: boolean): object
```

##### 说明

- 把JSON字符串修复并解析为对象，解析失败返回空对象。

- 相比直接`JSON.parse`，它会尝试`jsonrepair`和补括号修复。
##### 参数

| 参数名       | 类型      | 必填     | 说明           |
|:-------------|:----------|:---------|:---------------|
| `jsonString` | `string\|object` | 是             | 待解析的JSON文本或对象。 |
| `debug`      | `boolean` | 否       | 是否在修复失败时输出调试日志。 |

##### 返回值

- 类型:`object`
- 语义:返回解析后的对象，解析失败时返回空对象。

#### `parseHexColor`

##### 类型

```ts
static parseHexColor(hex: string): { color: string; opacity: number }
```

##### 说明

- 解析`#RRGGBB`或`#RRGGBBAA`并返回颜色与透明度。

- 与`hexToRgb`不同，它会保留alpha并转成`opacity`。
##### 参数

| 参数名 | 类型     | 必填 | 说明       |
|:-------|:---------|:-----|:-----------|
| `hex`  | `string` | 是   | 十六进制颜色字符串，支持`#RRGGBB`与`#RRGGBBAA`。 |

##### 返回值

- 类型:`{ color: string; opacity: number }`
- 语义:返回颜色与透明度对象，其中`opacity`范围为0到1。

#### `hexColorAlpha`

##### 类型

```ts
static hexColorAlpha(hex: string,alpha?: number): UIColor
```

##### 说明

- 把十六进制颜色与透明度组合成`UIColor`对象。

- 当你已有颜色字符串且只想改透明度时，用它比`hexColor`更直接。
##### 参数

| 参数名  | 类型     | 必填 | 说明               |
|:--------|:---------|:-----|:-------------------|
| `hex`   | `string` | 是   | 十六进制颜色字符串。         |
| `alpha` | `number` | 否   | 透明度，建议0到1。 |

##### 返回值

- 类型:`UIColor`
- 语义:返回应用透明度后的`UIColor`对象。

#### `hexColor`

##### 类型

```ts
static hexColor(hex: string): UIColor
```

##### 说明

- 把支持alpha的十六进制字符串转换成`UIColor`。

##### 参数

| 参数名 | 类型     | 必填 | 说明       |
|:-------|:---------|:-----|:-----------|
| `hex`  | `string` | 是   | 十六进制颜色字符串。 |

##### 返回值

- 类型:`UIColor`
- 语义:返回解析后的`UIColor`对象。

#### `genNSURL`

##### 类型

```ts
static genNSURL(url: string): NSURL
```

##### 说明

- 当原生接口要求`NSURL`而你只有字符串时使用它。
##### 参数

| 参数名 | 类型     | 必填 | 说明        |
|:-------|:---------|:-----|:------------|
| `url`  | `string` | 是   | 要转换的目标URL字符串。 |

##### 返回值

- 类型:`NSURL`
- 语义:返回可供原生接口直接使用的`NSURL`对象。

#### `string2data`

##### 类型

```ts
static string2data(string: string): NSData
```

##### 说明

- 按UTF-8编码把字符串转成`NSData`。

- 与`dataToString`互为逆向转换。
##### 参数

| 参数名   | 类型     | 必填 | 说明       |
|:---------|:---------|:-----|:-----------|
| `string` | `string` | 是   | 待编码为UTF-8的字符串。 |

##### 返回值

- 类型:`NSData`
- 语义:返回UTF-8编码后的`NSData`数据。

#### `dataToString`

##### 类型

```ts
static dataToString(data: NSData|string): string
```

##### 说明

- 把`NSData`转换成字符串；输入已是字符串时原样返回。

- 这个方法适合处理“可能是字符串也可能是NSData”的混合输入。
##### 参数

| 参数名 | 类型     | 必填     | 说明 |
|:-------|:---------|:---------|:-----|
| `data` | `NSData\|string` | 是   | 待转换的`NSData`或已是字符串的输入。 |

##### 返回值

- 类型:`string`
- 语义:返回UTF-8字符串，输入本身是字符串时原样返回。

#### `stringify`

##### 类型

```ts
static stringify(object: object): string
```

##### 说明

- 把对象序列化成带两空格缩进的JSON文本。

- 它用于调试输出，比原生`JSON.stringify`默认格式更易读。
##### 参数

| 参数名   | 类型      | 必填 | 说明         |
|:---------|:----------|:-----|:-------------|
| `object` | `object` | 是   | 待序列化对象。 |

##### 返回值

- 类型:`string`
- 语义:返回带两空格缩进的JSON字符串。

#### `xorEncryptDecrypt`

##### 类型

```ts
static xorEncryptDecrypt(input: string,key: string): string|undefined
```

##### 说明

- 使用异或算法对字符串做可逆加密或解密。

- 同一`key`重复调用两次可还原原文。
##### 参数

| 参数名  | 类型     | 必填 | 说明       |
|:--------|:---------|:-----|:-----------|
| `input` | `string` | 是   | 待加密或解密的原始文本。 |
| `key`   | `string` | 是   | 异或运算使用的密钥字符串。 |

##### 返回值

- 类型:`string|undefined`
- 语义:成功返回`string`，失败返回`undefined`。

#### `md5FromBase64`

##### 类型

```ts
static md5FromBase64(base64Str: string): string
```

##### 说明

- 对Base64表示的原始字节计算MD5摘要。

- 如果你手里是`NSData`，可先`base64Encoding()`再调用它。
##### 参数

| 参数名      | 类型     | 必填 | 说明         |
|:------------|:---------|:-----|:-------------|
| `base64Str` | `string` | 是   | Base64文本。 |

##### 返回值

- 类型:`string`
- 语义:返回32位小写MD5摘要字符串。

#### `sha256FromBase64`

##### 类型

```ts
static sha256FromBase64(base64Str: string): string
```

##### 说明

- 对Base64字节数据计算SHA-256哈希。

- 与`md5FromBase64`相比，SHA-256抗碰撞能力更强。
##### 参数

| 参数名      | 类型     | 必填 | 说明         |
|:------------|:---------|:-----|:-------------|
| `base64Str` | `string` | 是   | Base64文本。 |

##### 返回值

- 类型:`string`
- 语义:返回64位十六进制SHA-256摘要字符串。

#### `MD5`

##### 类型

```ts
static MD5(data: NSData|string): string|undefined
```

##### 说明

- 计算字符串或`NSData`的MD5。

- 字符串走`CryptoJS.MD5`，`NSData`会先转Base64再计算。
##### 参数

| 参数名 | 类型     | 必填     | 说明 |
|:-------|:---------|:---------|:-----|
| `data` | `NSData\|string` | 是   | 待计算摘要的字符串或`NSData`。 |

##### 返回值

- 类型:`string|undefined`
- 语义:成功返回`string`，失败返回`undefined`。

#### `parseMNImageURL`

##### 类型

```ts
static parseMNImageURL(MNImageURL: string): { hash: string; type: 'png'|'jpeg'; ext: 'png'|'jpg' }|undefined
```

##### 说明

- 解析`marginnote4app://markdownimg/...`图片地址，提取hash和类型。

- 解析成功会顺带更新`MNUtil.imageTypeCache`。
##### 参数

| 参数名       | 类型     | 必填 | 说明        |
|:-------------|:---------|:-----|:------------|
| `MNImageURL` | `string` | 是   | MarginNote图片协议URL字符串。 |

##### 返回值

- 类型:`{ hash: string; type: 'png'|'jpeg'; ext: 'png'|'jpg' }|undefined`
- 语义:成功返回`{ hash: string; type: 'png'|'jpeg'; ext: 'png'|'jpg' }`，失败返回`undefined`。

#### `getMNImageURL`

##### 类型

```ts
static getMNImageURL(hash: string,type?: 'png'|'jpeg'|'jpg'): string
```

##### 说明

- 根据媒体hash组装MarginNote图片协议URL。

- 若缓存里已有类型，会优先使用缓存类型而不是入参`type`。
##### 参数

| 参数名 | 类型     | 必填   | 说明       |
|:-------|:---------|:-------|:-----------|
| `hash` | `string` | 是     | 图片媒体hash字符串。 |
| `type` | `'png'\|'jpeg'\|'jpg'` | 否   | 图片类型，默认为png。 |

##### 返回值

- 类型:`string`
- 语义:返回`marginnote4app://markdownimg/...`格式的图片URL。

#### `getImageDataFromMNImageURL`

##### 类型

```ts
static getImageDataFromMNImageURL(MNImageURL: string): NSData
```

##### 说明

- 从MarginNote图片协议URL读取对应媒体二进制。

- 它依赖`parseMNImageURL`提取hash，再调用`MNUtil.getMediaByHash`。
##### 参数

| 参数名       | 类型     | 必填 | 说明        |
|:-------------|:---------|:-----|:------------|
| `MNImageURL` | `string` | 是   | MarginNote图片协议URL字符串。 |

##### 返回值

- 类型:`NSData`
- 语义:返回该图片对应的`NSData`二进制数据。

#### `getImageFromMNImageURL`

##### 类型

```ts
static getImageFromMNImageURL(MNImageURL: string): UIImage
```

##### 说明

- 把MarginNote图片协议URL直接转换为`UIImage`。

- 相比`getImageDataFromMNImageURL`，这个方法一步返回可显示图片对象。
##### 参数

| 参数名       | 类型     | 必填 | 说明        |
|:-------------|:---------|:-----|:------------|
| `MNImageURL` | `string` | 是   | MarginNote图片协议URL字符串。 |

##### 返回值

- 类型:`UIImage`
- 语义:返回可直接显示的`UIImage`对象。

#### `getImageDataFromURL`

##### 类型

```ts
static getImageDataFromURL(url: string): NSData|undefined
```

##### 说明

- 统一处理MarginNote协议URL、DataURL和普通HTTP URL并返回图片数据。

- 当上游URL来源不固定时，优先使用这个入口。
##### 参数

| 参数名 | 类型     | 必填 | 说明        |
|:-------|:---------|:-----|:------------|
| `url`  | `string` | 是   | 图片来源URL，可为MarginNote协议、DataURL或HTTP URL。 |

##### 返回值

- 类型:`NSData\|undefined`
- 语义:成功返回`NSData`，失败返回`undefined`。

#### `imageToBase64URL`

##### 类型

```ts
static imageToBase64URL(imageData: NSData,type?: 'png'|'jpg'|'jpeg'): string
```

##### 说明

- 把`NSData`编码为DataURL字符串。

- 当前实现固定返回`data:image/png;base64,`前缀，即使`type`传入jpg。
##### 参数

| 参数名      | 类型     | 必填  | 说明         |
|:------------|:---------|:------|:-------------|
| `imageData` | `NSData` | 是    | 待处理的二进制数据对象。 |
| `type`      | `'png'\|'jpg'\|'jpeg'` | 否    | 图片类型，默认为png。 |

##### 返回值

- 类型:`string`
- 语义:返回`data:image/png;base64,...`格式字符串。

#### `imageFromWebURLSync`

##### 类型

```ts
static imageFromWebURLSync(url: string): UIImage
```

##### 说明

- 同步下载网络图片并构造`UIImage`。

- 需要立即得到图片对象时可用，但会阻塞当前线程。
##### 参数

| 参数名 | 类型     | 必填 | 说明        |
|:-------|:---------|:-----|:------------|
| `url`  | `string` | 是   | 要下载的网络图片URL。 |

##### 返回值

- 类型:`UIImage`
- 语义:返回下载并解码后的`UIImage`对象。

#### `imageDataFromWebURLSync`

##### 类型

```ts
static imageDataFromWebURLSync(url: string,type?: 'png'|'jpg'|'jpeg',compressionQuality?: number): NSData
```

##### 说明

- 同步下载网络图片并按指定格式导出数据。

- 当你只需要二进制上传或写文件，这个方法比`imageFromWebURLSync`更省一步转换。
##### 参数

| 参数名               | 类型     | 必填  | 说明                 |
|:---------------------|:---------|:------|:---------------------|
| `url`                | `string` | 是    | 要下载的网络图片URL。          |
| `type`               | `'png'\|'jpg'\|'jpeg'` | 否    | 图片类型，默认为png。 |
| `compressionQuality` | `number` | 否    | 输出压缩质量，范围0到1。 |

##### 返回值

- 类型:`NSData`
- 语义:返回按指定格式导出的图片`NSData`数据。

#### `NSValue2String`

##### 类型

```ts
static NSValue2String(v: NSValue): string
```

##### 说明

- 把`NSValue`转换为JavaScript可读字符串。

- 这是后续解析CGSize和CGRect的基础步骤。
##### 参数

| 参数名 | 类型      | 必填 | 说明         |
|:-------|:----------|:-----|:-------------|
| `v`    | `NSValue` | 是   | 待解析的原生NSValue对象。 |

##### 返回值

- 类型:`string`
- 语义:返回可读的几何字符串，常见格式为`{x,y}`或`{w,h}`。

#### `NSValue2CGSize`

##### 类型

```ts
static NSValue2CGSize(v: NSValue): { width: number; height: number }
```

##### 说明

- 把`NSValue`解析为`{ width, height }`。

- 与`NSValue2CGRect`相比，它只处理尺寸不处理坐标。
##### 参数

| 参数名 | 类型      | 必填 | 说明         |
|:-------|:----------|:-----|:-------------|
| `v`    | `NSValue` | 是   | 待解析的原生NSValue对象。 |

##### 返回值

- 类型:`{ width: number; height: number }`
- 语义:返回`{ width, height }`尺寸对象。

#### `NSValue2CGRect`

##### 类型

```ts
static NSValue2CGRect(v: NSValue): { x: number; y: number; height: number; width: number }
```

##### 说明

- 把`NSValue`解析为`{ x, y, height, width }`对象。

- 适合把原生几何值喂给纯JS布局逻辑。
##### 参数

| 参数名 | 类型      | 必填 | 说明         |
|:-------|:----------|:-----|:-------------|
| `v`    | `NSValue` | 是   | 待解析的原生NSValue对象。 |

##### 返回值

- 类型:`{ x: number; y: number; height: number; width: number }`
- 语义:返回`{ x, y, height, width }`矩形对象。

#### `CGRectString2CGRect`

##### 类型

```ts
static CGRectString2CGRect(str: string): { x: number; y: number; height: number; width: number }
```

##### 说明

- 把CGRect字符串解析成对象结构。

- 当你已经拿到字符串形态而不是NSValue时用它。
##### 参数

| 参数名 | 类型     | 必填 | 说明       |
|:-------|:---------|:-----|:-----------|
| `str`  | `string` | 是   | CGRect字符串，常见格式为`{{x,y},{w,h}}`。 |

##### 返回值

- 类型:`{ x: number; y: number; height: number; width: number }`
- 语义:返回解析后的`{ x, y, height, width }`对象。

#### `stringFromCharCode`

##### 类型

```ts
static stringFromCharCode(char: number|string): string
```

##### 说明

- 把数字或数字字符串转换成单字符。

- 适用于处理协议里以码点存储的字符。
##### 参数

| 参数名 | 类型     | 必填     | 说明 |
|:-------|:---------|:---------|:-----|
| `char` | `number\|string` | 是   | 要转换的字符或字符码。 |

##### 返回值

- 类型:`string`
- 语义:返回输入码点对应的单字符字符串。

#### `fileTypeFromBase64URL`

##### 类型

```ts
static fileTypeFromBase64URL(content: string): string|undefined
```

##### 说明

- 根据DataURL前缀快速判断文件类型。

- 前缀是`octet-stream`时会退回字节头判断。
##### 参数

| 参数名    | 类型     | 必填 | 说明       |
|:----------|:---------|:-----|:-----------|
| `content` | `string` | 是   | DataURL完整字符串。 |

##### 返回值

- 类型:`string|undefined`
- 语义:成功返回`string`，失败返回`undefined`。

#### `hexHeaderFromData`

##### 类型

```ts
static hexHeaderFromData(data: NSData): string|undefined
```

##### 说明

- 读取二进制前16字节并输出十六进制文件头。

##### 参数

| 参数名 | 类型     | 必填 | 说明         |
|:-------|:---------|:-----|:-------------|
| `data` | `NSData` | 是   | 待处理的二进制数据对象。 |

##### 返回值

- 类型:`string|undefined`
- 语义:成功返回`string`，失败返回`undefined`。

#### `getFileTypeFromBase64`

##### 类型

```ts
static getFileTypeFromBase64(base64: string): string
```

##### 说明

- 把Base64先转数据再按文件头识别类型。

- 当MIME前缀缺失时，这是比字符串猜测更可靠的路径。
##### 参数

| 参数名   | 类型     | 必填 | 说明         |
|:---------|:---------|:-----|:-------------|
| `base64` | `string` | 是   | Base64文本。 |

##### 返回值

- 类型:`string`
- 语义:返回根据文件头识别出的文件类型扩展名。

#### `getFileTypeFromhexHeader`

##### 类型

```ts
static getFileTypeFromhexHeader(hexHeader: string): string
```

##### 说明

- 按文件头前缀匹配常见格式，如jpg、png、pdf、zip。

- 它按前缀长度从长到短匹配，降低误判。
##### 参数

| 参数名      | 类型     | 必填 | 说明       |
|:------------|:---------|:-----|:-----------|
| `hexHeader` | `string` | 是   | 十六进制文件头字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回匹配到的文件类型扩展名。

#### `getFileTypeFromData`

##### 类型

```ts
static getFileTypeFromData(data: NSData): string
```

##### 说明

- 直接从`NSData`识别文件类型。

##### 参数

| 参数名 | 类型     | 必填 | 说明         |
|:-------|:---------|:-----|:-------------|
| `data` | `NSData` | 是   | 待处理的二进制数据对象。 |

##### 返回值

- 类型:`string`
- 语义:返回从二进制头部识别出的文件类型扩展名。

#### `getFileType`

##### 类型

```ts
static getFileType(data: NSData|string): string
```

##### 说明

- 统一入口：同时支持`NSData`和字符串两类输入。

- 字符串输入会先判断是否DataURL，再决定走哪条识别路径。
##### 参数

| 参数名 | 类型     | 必填     | 说明 |
|:-------|:---------|:---------|:-----|
| `data` | `NSData\|string` | 是   | 待识别的数据，可传`NSData`或字符串。 |

##### 返回值

- 类型:`string`
- 语义:返回自动判定后的文件类型扩展名。

#### `base64ToUint8Array`

##### 类型

```ts
static base64ToUint8Array(base64Str: string): Uint8Array
```

##### 说明

- 把Base64文本解码为`Uint8Array`，并自动清理前缀和空白字符。

- 在插件返回值含换行时，这个方法比原生`atob`更稳定。
##### 参数

| 参数名      | 类型     | 必填 | 说明         |
|:------------|:---------|:-----|:-------------|
| `base64Str` | `string` | 是   | Base64文本。 |

##### 返回值

- 类型:`Uint8Array`
- 语义:返回Base64解码后的Uint8Array。

#### `NSDataToUint8Array`

##### 类型

```ts
static NSDataToUint8Array(data: NSData): Uint8Array
```

##### 说明

- 把`NSData`转换成`Uint8Array`。

- 处理流程与`base64ToUint8Array`一致，只是输入源改为`NSData`。
##### 参数

| 参数名 | 类型     | 必填 | 说明         |
|:-------|:---------|:-----|:-------------|
| `data` | `NSData` | 是   | 待处理的二进制数据对象。 |

##### 返回值

- 类型:`Uint8Array`
- 语义:返回与输入`NSData`等价的`Uint8Array`数据。

#### `uint8ArrayToBase64`

##### 类型

```ts
static uint8ArrayToBase64(input: Uint8Array|ArrayBuffer|number[]): string
```

##### 说明

- 把`Uint8Array`、`ArrayBuffer`或数值数组编码成Base64。

- 当你需要替代浏览器`btoa`处理二进制时，优先使用它。
##### 参数

| 参数名  | 类型         | 必填        | 说明         |
|:--------|:-------------|:------------|:-------------|
| `input` | `Uint8Array\|ArrayBuffer\|number\[\]` | 是   | 要编码的Uint8Array、ArrayBuffer或数值数组。 |

##### 返回值

- 类型:`string`
- 语义:返回Base64编码后的字符串。

#### `changePngColor`

##### 类型

```ts
static changePngColor(bytes: Uint8Array,hexColor: string,sourceRgb?: [number,number,number]): string|null
```

##### 说明

- 修改索引色PNG的调色板颜色并返回新的DataURL。

- 它只处理含`PLTE`块的PNG，不支持真彩PNG逐像素替换。
##### 参数

| 参数名      | 类型                     | 必填 | 说明       |
|:------------|:-------------------------|:-----|:-----------|
| `bytes`     | `Uint8Array`             | 是   | 待处理的PNG字节数组。 |
| `hexColor`  | `string`                 | 是   | 目标替换颜色，十六进制字符串。 |
| `sourceRgb` | `[number,number,number]` | 否   | 可选，仅替换指定源RGB颜色。 |

##### 返回值

- 类型:`string|null`
- 语义:成功返回调色后的DataURL字符串，无法处理时返回`null`。

#### `getDotBase64WithColor`

##### 类型

```ts
static getDotBase64WithColor(hexColor: string): string|null
```

##### 说明

- 把内置小圆点模板图替换成目标颜色并返回Base64 DataURL。

- 适合快速生成带主题色的标记点素材。
##### 参数

| 参数名     | 类型     | 必填 | 说明       |
|:-----------|:---------|:-----|:-----------|
| `hexColor` | `string` | 是   | 目标小圆点颜色，十六进制字符串。 |

##### 返回值

- 类型:`string|null`
- 语义:成功返回着色后的DataURL字符串，失败返回`null`。

#### `getDotImageWithColor`

##### 类型

```ts
static getDotImageWithColor(hexColor: string): UIImage|undefined
```

##### 说明

- 基于`getDotBase64WithColor`直接得到`UIImage`。

- 当你最终需要的是可绘制图片对象，而不是字符串时使用它。
##### 参数

| 参数名     | 类型     | 必填 | 说明       |
|:-----------|:---------|:-----|:-----------|
| `hexColor` | `string` | 是   | 目标小圆点颜色，十六进制字符串。 |

##### 返回值

- 类型:`UIImage|undefined`
- 语义:成功返回`UIImage`，失败返回`undefined`。

## 实例成员(Instance members)

无实例成员。

## 覆盖补全

#### `convertImageBase64ToPdfBase64`

##### 类型

```ts
static async convertImageBase64ToPdfBase64(pngBase64: string): Promise<string|undefined>
```

##### 说明

将Base64编码的图片转换为Base64编码的PDF。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `pngBase64` | `string` | 是 | Base64编码的PNG图片。 |

##### 返回值

- 类型:`Promise<string|undefined>`
- 语义:成功返回Base64编码的PDF，失败返回undefined。

#### `convertImageDataToPdfData`

##### 类型

```ts
static async convertImageDataToPdfData(imageData: NSData): Promise<NSData|undefined>
```

##### 说明

将图片数据转换为PDF数据。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `imageData` | `NSData` | 是 | 图片二进制数据。 |

##### 返回值

- 类型:`Promise<NSData|undefined>`
- 语义:成功返回PDF数据，失败返回undefined。

#### `imageFromWebURL`

##### 类型

```ts
static async imageFromWebURL(url: string): Promise<UIImage|undefined>
```

##### 说明

从网络URL下载图片并转换为UIImage。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `url` | `string` | 是 | 图片URL。 |

##### 返回值

- 类型:`Promise<UIImage|undefined>`
- 语义:成功返回UIImage对象，失败返回undefined。

#### `imageDataFromWebURL`

##### 类型

```ts
static async imageDataFromWebURL(url: string): Promise<NSData|undefined>
```

##### 说明

从网络URL下载图片并返回二进制数据。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `url` | `string` | 是 | 图片URL。 |

##### 返回值

- 类型:`Promise<NSData|undefined>`
- 语义:成功返回图片数据，失败返回undefined。

#### `extractPDFPage`

##### 类型

```ts
static async extractPDFPage(path: string,targetPageIndices: number[]): Promise<NSData|undefined>
```

##### 说明

从PDF中提取指定页并返回新的PDF数据。

##### 参数

| 参数名 | 类型 | 必填 | 说明 |
|:-------|:-----|:-----|:-----|
| `path` | `string` | 是 | PDF文件路径。 |
| `targetPageIndices` | `number[]` | 是 | 要提取的页码数组。 |

##### 返回值

- 类型:`Promise<NSData|undefined>`
- 语义:成功返回提取的PDF数据，失败返回undefined。
