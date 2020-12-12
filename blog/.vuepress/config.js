module.exports = {
  title: 'Roz Is Coding', // Title for the site. This will be displayed in the navbar.
  theme: '@vuepress/theme-blog',
  dest: 'public',
  themeConfig: {
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://roz.ninja/github?ref=blog',
        },
        {
          type: 'linkedin',
          link: 'https://roz.ninja/linkedin?ref=blog',
        },
        {
          type: 'twitter',
          link: 'https://roz.ninja/twitter?ref=blog',
        },
      ],
    },
    comment: {
      service: 'vssue',
      owner: 'roziscoding',
      repo: 'blog',
      clientId: '95dd788d52190db920bd',
      clientSecret: '3f392c443e74114e88adc03736a5d03ff598b5ed',
    },
    smoothScroll: true,
  },
};
