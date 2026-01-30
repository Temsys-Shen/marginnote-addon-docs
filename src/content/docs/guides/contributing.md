---
title: 贡献指南
description: 文档贡献流程与格式规范（API 参考、教程、Markdown 约定等）。
---

本仓库是 MarginNote 插件开发文档，欢迎修正错漏、补充示例、新增 API 说明等。贡献前请先开 Issue 讨论较大改动，小修正（如 typo、单页补充）可直接提 Pull Request。

## 贡献流程

1. **Fork** 本仓库到你的 GitHub 账号。
2. **创建分支**：从默认分支（如 `main`）拉取新分支，建议命名 `docs/xxx` 或 `fix/typo-xxx`。
3. **修改**：在本地或 GitHub 网页编辑器中修改文档。
4. **提交并推送**：提交到你的 Fork，推送到 GitHub。
5. **发起 Pull Request**：在本仓库创建 PR，目标分支为默认分支（如 `main`）。

**PR 描述建议包含**：修改类型（纠错 / 新增教程 / 新增或修订 API 页）、涉及文件或路径、简要说明。

## 文档结构约定

- **目录**：`src/content/docs/` 下分为：
  - `guides/`：教程与 Cookbook 配方；
  - `reference/`：API 参考，按 `global`、`marginnote`、`foundation`、`uikit`、`quartzcore`、`utility` 等子目录组织。
- **新增页面**：参考同类型现有页面。若为 API 参考，需符合下述「API 参考格式」；若为教程或 Cookbook，需符合「教程与指南格式」。
- **侧栏**：若新增的是 `reference/` 下且位于已配置 `autogenerate` 的目录（如 Foundation、UIKit），侧栏会自动出现；若为 `guides/` 新页或新目录，需在 `astro.config.mjs` 的 `sidebar` 中手动添加对应 `slug`。

## API 参考文档格式规范

与本站已统一的风格一致，所有 API 参考页需遵守以下格式。

### Frontmatter

必须包含：

- `title`：页面标题（如 `Application`）。
- `description`：简短一句，用于列表与 SEO。

### 方法（方法单列）

- 每个方法一个三级标题：`### \`methodName\``。
- 可选：标题下方一行简短说明。
- **签名代码块**：使用 ` ```javascript `，内容为方法签名，例如 `static sharedInstance(): Application` 或 `count(): number`，然后 ` ``` `。
- **Parameters**（若有参数）：
  - 标题：`**Parameters:**`
  - 表头：`| Name | Type | Description |`
  - 每行一个参数，使用表格行。
- **Return Value**：
  - 标题：`**Return Value:**`
  - 使用列表（如 `- 类型: 说明`）或表格给出返回值类型与简短说明。

### 属性

使用表格，表头：`| 属性 | 类型 | 说明 |`。只读/可写可在说明列注明。

### 类成员与实例成员

- 二级标题：`## 类成员 (Class members)`、`## 实例成员 (Instance members)`。
- 可按需用三级标题分组（如「创建」「查询」），再在其下按上述方法/属性格式书写。

### 相关链接

页面末尾可使用 `## 相关` 列出与本页相关的其他 API 或教程链接（Markdown 链接，如 `[Application](/reference/global/application/)`）。

参考示例：[Application](/reference/global/application/)。

## 教程与指南页格式规范

- **Frontmatter**：必须包含 `title`、`description`。
- **正文**：用二级标题 `##` 划分大节，三级标题 `###` 划分小节；步骤用有序列表，说明用无序列表或段落。
- **代码**：使用围栏代码块并标明语言（如 `javascript`、`json`）；若为配置文件片段，注明文件名（如「在插件根目录创建 `mnaddon.json`」）。
- **链接**：站内链接使用以 `/` 开头的路径，如 `/guides/getting-started/`、`/reference/global/application/`。

参考示例：[快速开始](/guides/getting-started/)。

## 通用 Markdown 与书写约定

- **语言**：文档正文与说明统一使用**简体中文**；API 名称、代码、技术术语保留英文。
- **标点**：中文句子使用中文标点；英文或代码片段内使用英文标点。
- **专有名词**：MarginNote、API、JavaScript 等大小写保持一致；首次出现可加简短解释。
- **链接**：避免裸 URL，使用 `[描述](url)` 或 `[描述](/path/)`；API 交叉引用建议用「相关」小节或正文内链接到对应 reference 页。
- **代码块**：标注语言、保持缩进一致；长示例可省略无关部分并用注释说明。

若对某条规范有疑问或建议，欢迎在 Issue 中提出。
