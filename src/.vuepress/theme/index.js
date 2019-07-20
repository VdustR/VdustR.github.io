const path = require('path');

module.exports = {
  extend: '@vuepress/theme-default',
  globalLayout: path.resolve(__dirname, 'GlobalLayout.vue'),
};
