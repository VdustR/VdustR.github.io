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
  themeConfig: {
    navbar: {
      title: 'ViPro Land',
      logo: {
        alt: 'ViPro Land',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Note',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://fb.me/VdustR',
          label: 'Facebook',
          position: 'right',
        },
        {
          href: 'https://github.com/VdustR',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Note',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://fb.me/VdustR',
            },
            {
              label: 'Discord',
              href: 'https://ganhuaking.tw',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/VdustR',
            },
          ],
        },
      ],
      copyright: `Copyright © 2017-${new Date().getFullYear()} ViPro Land, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
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
};
