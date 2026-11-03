<script setup lang="ts">
import { Content, useData } from 'vitepress'
import { formatDate } from '../format'

const { page } = useData()
</script>

<template>
  <header>
    <nav>
      <a href="/">Home</a>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h1 class="page-title">
          {{ page.title }}
        </h1>

        <p class="page-meta">
          {{ page.frontmatter.location }}, <time :datetime="page.frontmatter.date">{{ formatDate(page.frontmatter.date, 'long') }}</time>
        </p>
      </header>

      <div class="content">
        <Content />
      </div>
    </article>
  </main>

  <footer>
    <nav>
      <a href="/">Home</a>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  padding-top: 20px;
}

nav > a {
  text-decoration: underline;
}

nav > a::before {
  content: '<\00a0';
  display: inline-block;
}

.page-meta {
  font-style: italic;
}

/* Markdown output from <Content /> doesn't carry this component's scope id, hence :deep */
.content :deep(blockquote) {
  margin: 1em 0;
  padding-left: 1em;
  border-left: 3px solid #fff;
}

.content :deep(pre.shiki) {
  background-color: #000;
  border: 1px solid #222;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
}

/* VitePress shows the language label and copy button through the default theme */
.content :deep([class*='language-'] > .lang),
.content :deep([class*='language-'] > button.copy) {
  display: none;
}
</style>
