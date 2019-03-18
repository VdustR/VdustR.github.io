module.exports = {
  title: `ViPro's Note`,
  description: 'Fancy design. Simple life.',
  dest: 'dist',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'CodePen', link: 'https://codepen.io/VdustR' },
      { text: 'Facebook', link: 'https://www.facebook.com/VdustR' },
      { text: 'GitHub', link: 'https://github.com/VdustR' },
      { text: 'GMail', link: 'mailto:VdustR@gmail.com' },
    ],
    sidebar: [
      {
        title: '好用工具',
        children: [
          'tools/fish',
          'tools/hyper',
          'tools/vscode',
          'tools/screenshot',
        ],
      },
    ],
  },
  plugins: {
    '@vuepress/back-to-top': {},
    '@vuepress/medium-zoom': {},
    '@vuepress/nprogress': {},
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
    },
  },
  markdown: {
    lineNumbers: true,
  },
  evergreen: true,
};