const title = 'ViPro Land';

/** @type {import('@docusaurus/preset-classic').ThemeConfig["footer"]["links"]} */
const links = [
  {
    title: 'Links',
    items: [
      {
        label: 'Blog',
        href: '//vdustr.dev/blog/',
      },
      {
        label: 'GitHub',
        href: '//github.com/VdustR',
      },
      {
        label: 'Repositories',
        href: '//github.com/VdustR?tab=repositories&q=archived%3Afalse+fork%3Afalse',
      },
      {
        label: 'Pocket',
        href: '//vdustr.dev/pocket',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        label: 'Facebook',
        href: '//fb.me/vdustr',
      },
      {
        label: 'Discord',
        href: '//ganhuaking.tw',
      },
    ],
  },
];

/** @type {import('@docusaurus/preset-classic').ThemeConfig["navbar"]["items"]} */
const navbarItems = [];

links.forEach(({ items }) => {
  items.forEach(({ label, href }) => {
    navbarItems.push({
      label,
      href,
      position: 'right',
    });
  });
});

/** @type import('@docusaurus/types').DocusaurusConfig */
module.exports = {
  title: 'ViPro Land',
  tagline: "It's me ViPro",
  url: 'https://vdustr.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://vdustr.dev/brand/2022-01/favicon.ico',
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://vdustr.dev/brand/2022-01/ogimage.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title,
        logo: {
          alt: title,
          src: 'https://vdustr.dev/brand/2022-01/logo.svg',
        },
        items: [
          {
            label: 'Docs',
            href: '/docs',
          },
          ...navbarItems,
        ],
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links,
        logo: {
          alt: title,
          src: 'https://vdustr.dev/brand/2022-01/logo.svg',
          height: 32,
          width: 32,
        },
        copyright: `Copyright © 2017-${new Date().getFullYear()} ViPro Land, Inc. Built with Docusaurus.`,
      },
    }),
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['zh'],
      },
    ],
  ],
  stylesheets: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: true,
    },
    {
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,700&display=swap&subset=chinese-traditional',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/victormono@latest/dist/index.min.css',
    },
  ],
};
