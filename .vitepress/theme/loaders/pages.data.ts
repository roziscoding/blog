import type { ContentData } from 'vitepress'
import { createContentLoader } from 'vitepress'

interface AppContentData extends ContentData {
  frontmatter: {
    archived?: boolean
    date: string
    title: string
    description?: string
    location?: string
  }
}

export declare const data: AppContentData[]

export default createContentLoader<AppContentData[]>('**/**.md')
