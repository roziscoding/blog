module.exports = {
  title: "Blog do Roz",
  description: "Tecnologia e algo mais",
  locales: {
    "/": {
      lang: "pt-BR",
    },
  },
  theme: "meteorlxy",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
      },
    ],
    ...googleAnalytics(),
  ],
  themeConfig: {
    lang: "pt-BR",
    personalInfo: {
      nickname: "Roz",
      description:
        "Desenvolvedor brasileiro. Amo trabalho em equipe e estar envolvido com comunidades.",
      email: "roz@rjmunhoz.me",
      location: "São Paulo, SP",
      avatar:
        "https://gravatar.com/avatar/ef1e9399f1786de6adcbd51f29e967d6?s=800&d=robohash&r=g",
      sns: {
        github: {
          account: "roziscoding",
          link: "https://roz.ninja/github",
        },
        linkedin: {
          account: "roziscoding",
          link: "https://roz.ninja/linkedin",
        },
      },
    },
    header: {
      background: {
        url: "",
        useGeo: false,
      },
      showTitle: true,
    },
    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom:
        'Copyright 2023-present <a href="https://github.com/roziscoding" target="_blank">roziscoding</a> | GPL-3.0 License',
    },
    infoCard: {
      headerBackground: {
        url: "",
        useGeo: false,
      },
    },
    lastUpdated: false,
    nav: [
      { text: "Home", link: "/", exact: true },
      { text: "Posts", link: "/posts/", exact: false },
    ],
    smoothScroll: true,
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },
    comments: {
      owner: "roziscoding",
      repo: "blog",
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    pagination: {
      perPage: 5,
    },
    defaultPages: {
      home: true,
      posts: true,
    },
  },
  plugins: [
    [
      "autometa",
      {
        canonical_base: "https://blog.roz.ninja",
        author: {
          name: "Roz",
          twitter: "roziscoding",
        },
        site: {
          name: "Blog do Roz",
          twitter: "roziscoding",
        },
      },
    ],
  ],
};

function googleAnalytics() {
  return process.env.NODE_ENV === "development"
    ? []
    : [
        [
          "script",
          {
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID}`,
          },
        ],
        [
          "script",
          {},
          `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${process.env.ANALYTICS_ID}",{anonymize_ip:!0}),router.afterEach(function(a){gtag("set","page",router.app.$withBase(a.fullPath)),gtag("send","pageview")});`,
        ],
      ];
}
