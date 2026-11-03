import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  vue: true,
  // Code blocks in Markdown are linted as virtual files like `post.md/0.ts`
  ignores: ['**/*.md/**'],
})
