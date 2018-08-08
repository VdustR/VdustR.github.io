const path = require('path')

module.exports = {
  configureWebpack: {
    output: {
      filename: '[name]-[hash].js'
    },
    resolve: {
      alias: {
        Src: path.resolve(__dirname, 'src')
      }
    }
  }
}
