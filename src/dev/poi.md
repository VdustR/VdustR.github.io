# Poi <Badge text="12.7.2" />

Delightful web development.

<https://poi.js.org/>

## Integrating with Unused Webpack Plugin

A webpack plugin to find unused modules/source files.

<https://github.com/MatthieuLemoine/unused-webpack-plugin>

You can use it simply with webpack chain:

```js
// poi.config.js
module.exports = {
  // ...

  chainWebpack: config => {
    // ...

    // add Unused Webpack Plugin
    config.plugin('unused').use(UnusedWebpackPlugin, [
      {
        directories: [path.join(__dirname, 'src')],
        root: __dirname,
      },
    ]);
  },
};
```

### Issue

Because there is a [PrintStatusPlugin](https://github.com/egoist/poi/blob/a89ecd0/core/poi/lib/webpack/PrintStatusPlugin.js) to clear console and it make the result of Unused Webpack Plugin disappeared.

You can inspect with this command:

```sh
yarn dev --inspect-webpack
```

You can find this in your webpack configuration:

```js
/* config.plugin('print-status') */
new PrintStatusPlugin(
  {
    printFileStats: false,
    printSucessMessage: true,
    clearConsole: undefined
  }
),
```

It could be disabled with webpack chain:

```js
// poi.config.js
module.exports = {
  // ...

  chainWebpack: config => {
    // ...

    // disable clearConsole
    config
      .plugin('print-status')
      .tap(([opts, ...args]) => [{ ...opts, clearConsole: false }, ...args]);
  },
};
```
