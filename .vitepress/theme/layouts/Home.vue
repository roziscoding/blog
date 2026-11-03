<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
import { formatDate } from '../format'
import { data as pageData } from '../loaders/pages.data'

const pages = pageData
  .filter(page => page.frontmatter.title && page.url !== '/index' && !page.frontmatter.archived)
  .sort((a, b) => Date.parse(a.frontmatter.date) - Date.parse(b.frontmatter.date))
const { site, page: currentPage } = useData()

const isNotFound = computed(() => currentPage.value.isNotFound && currentPage.value.relativePath !== 'index.md')
</script>

<template>
  <header>
    <h1>{{ site.title }}</h1>
  </header>

  <main>
    <template v-if="isNotFound">
      <p role="alert">
        404 - not found
      </p>
      <hr>
    </template>

    <section aria-label="Posts">
      <ul class="home-posts">
        <li v-for="page in pages" :key="page.url">
          <a :href="page.url"><time :datetime="page.frontmatter.date">{{ formatDate(page.frontmatter.date) }}</time> - {{ page.frontmatter.title.toLowerCase() }}</a>
        </li>
      </ul>
    </section>
  </main>

  <footer class="home-socials">
    <hr aria-hidden="true">
    <a v-for="link in site.themeConfig.links" :key="link.title" :href="link.url" target="_blank">{{ link.title }}</a>
  </footer>
</template>

<style scoped>
.home-socials > a {
  padding-right: 5px;
  text-decoration: underline;
}

.home-posts > li {
  list-style: decimal-leading-zero;
}
</style>
