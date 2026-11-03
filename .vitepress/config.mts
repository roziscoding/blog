import type { ThemeConfig } from './theme/index'
import { defineConfigWithTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  lang: 'pt-BR',
  title: 'roz.',
  description: ' ',
  srcDir: 'pages',
  cleanUrls: true,
  markdown: {
    theme: 'vitesse-black',
  },
  themeConfig: {
    links: [
      { title: 'github', url: 'https://github.com/roziscoding' },
      { title: 'instagram', url: 'https://instagram.com/roziscoding' },
    ],
  },
})
