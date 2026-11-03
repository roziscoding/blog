import type { Theme } from 'vitepress'
// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './style.css'

export interface ThemeConfig {
  links: {
    url: string
    title: string
  }[]
}

export default {
  Layout,
} satisfies Theme
