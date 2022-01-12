/** @type {import('@docusaurus/preset-classic').ThemeConfig["footer"]["links"]} */
const links = [
  {
    title: 'Links',
    items: [
      {
        label: 'Blog',
        href: '//vdustr.github.io/blog/',
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
        href: '//vdustr.github.io/pocket',
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
  tagline: '𝓕𝓪𝓷𝓬𝔂 𝓭𝓮𝓼𝓲𝓰𝓷. 𝚂𝚒𝚖𝚙𝚕𝚎 𝚕𝚒𝚏𝚎.',
  url: 'https://vdustr.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'VdustR', // Usually your GitHub org/user name.
  projectName: 'vdustr.github.io', // Usually your repo name.
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'ViPro Land',
        logo: {
          alt: 'ViPro Land',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Docs',
            href: '/docs',
          },
          ...navbarItems,
        ],
      },
      footer: {
        style: 'dark',
        links,
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
