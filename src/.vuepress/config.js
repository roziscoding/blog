module.exports = {
  title: 'Blog do Roz',
  description: 'Tecnologia e algo mais',
  locales: {
    '/': {
      lang: 'pt-BR',
    },
  },
  theme: 'meteorlxy',
  themeConfig: {
    lang: 'pt-BR',
    personalInfo: {
      nickname: 'Roz',
      description: 'Desenvolvedor brasileiro. Amo trabalho em equipe e estar envolvido com comunidades.',
      email: 'roz@rjmunhoz.me',
      location: 'João Pessoa, Paraíba',
      avatar: 'https://gravatar.com/avatar/ef1e9399f1786de6adcbd51f29e967d6?s=800&d=robohash&r=g',
      sns: {
        github: {
          account: 'roziscoding',
          link: 'https://roz.ninja/github',
        },
        twitter: {
          account: 'roziscoding',
          link: 'https://roz.ninja/twitter',
        },
        instagram: {
          account: 'roziscoding',
          link: 'https://roz.ninja/instagram',
        },
        linkedin: {
          account: 'roziscoding',
          link: 'https://roz.ninja/linkedin',
        },
      },
    },
    header: {
      background: {
        url: '',
        useGeo: false,
      },
      showTitle: true,
    },
    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: 'Copyright 2023-present <a href="https://github.com/roziscoding" target="_blank">roziscoding</a> | GPL-3.0 License',
    },
    infoCard: {
      headerBackground: {
        url: '',
        useGeo: false,
      },
    },
    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
    ],
    smoothScroll: true,
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },
    comments: {
      owner: 'roziscoding',
      repo: 'blog',
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    pagination: {
      perPage: 5,
    },
    defaultPages: {
      home: true,
      posts: true
    },
  },
}