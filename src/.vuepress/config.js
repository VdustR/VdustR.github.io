const path = require('path');

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
    ],
    sidebar: [
      {
        title: 'About Me',
        path: '/',
      },
      {
        title: 'Bin',
        children: ['/bin/7z', '/bin/pwd'],
      },
      {
        title: 'Dev',
        children: [
          '/dev/common',
          '/dev/javascript',
          '/dev/react',
          '/dev/vuepress',
          '/dev/poi',
        ],
      },
      {
        title: 'Design',
        children: ['/design/color', '/design/font'],
      },
      {
        title: 'Shell',
        children: ['/sh/fish', '/sh/ternary'],
      },
      {
        title: 'Tools',
        children: ['/tools/', '/tools/mac'],
      },
    ],
  },
  plugins: {
    '@vuepress/back-to-top': {},
    '@vuepress/last-updated': {
      transformer: timestamp => timestamp || new Date(),
    },
    '@vuepress/medium-zoom': {},
    '@vuepress/nprogress': {},
    '@vuepress/pwa': {
      popupComponent: 'MySWUpdatePopup',
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
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../'),
      },
    },
  },
  evergreen: true,
};
