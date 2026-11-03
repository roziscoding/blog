<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './layouts/Home.vue'
import Page from './layouts/Page.vue'

const { page } = useData()
</script>

<template>
  <Home v-if="page.relativePath === 'index.md' || page.isNotFound" />
  <Page v-else />
</template>
