import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'MarginNote 插件开发文档',
  },
  links: [
    { text: '首页', url: '/', active: 'url' },
    {
      text: '教程',
      url: '/guides/getting-started/',
      active: 'nested-url',
    },
    {
      text: 'Cookbook',
      url: '/cookbook/batch-rename-notes/',
      active: 'nested-url',
    },
    {
      text: 'API 参考',
      url: '/reference/global/jsb/',
      active: 'nested-url',
    },
    { text: 'LibMN', url: '/libmn/', active: 'nested-url' },
    {
      text: '贡献指南',
      url: '/contributing/',
      active: 'nested-url',
    },
  ],
}
