const title = 'ViPro Land';
const notesUrl = '/docs/bin/7z';

/** @type import('@docusaurus/types').DocusaurusConfig */
module.exports = {
  title: 'ViPro Land',
  tagline: "It's me ViPro",
  url: 'https://vdustr.dev',
  baseUrl: '/',
  trailingSlash: true,
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
        items:
          /** @type {import('@docusaurus/preset-classic').ThemeConfig["navbar"]["items"]} */
          [
            {
              label: 'Links',
              href: '/links',
            },
            {
              label: 'Projects',
              href: '/projects',
            },
            {
              label: 'Notes',
              href: notesUrl,
            },
          ],
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links:
          /** @type {import('@docusaurus/preset-classic').ThemeConfig["footer"]["links"]} */
          [
            {
              title: 'Links',
              items: [
                {
                  label: 'About Me',
                  href: '/',
                },
                {
                  label: 'Notes',
                  href: notesUrl,
                },
                {
                  label: 'Blog',
                  href: '//vdustr.dev/blog/',
                },
                {
                  label: 'Github',
                  href: '//gh.vdustr.dev',
                },
                {
                  label: '...more',
                  href: '/links',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Discord',
                  href: '//ganhuaking.tw',
                },
                {
                  label: 'Facebook',
                  href: '//fb.vdustr.dev',
                },
                {
                  label: 'Twitter',
                  href: '//t.vdustr.dev',
                },
              ],
            },
          ],
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
        gtag: {
          trackingID: 'G-K9RL25J2B9',
          anonymizeIP: true,
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
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    },
  ],
};
