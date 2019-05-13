# VuePress

## `last-updated` with Local Time

Tested modules:

- `vuepress@1.0.0-alpha.47`
- `date-fns@2.0.0-alpha.27`

Pass timestamp instead of formatted time string in `.vuepress/config.js`:

```diff
  module.exports = {
    plugins: {
      '@vuepress/last-updated': {
+       transformer: timestamp => timestamp || new Date(),
      },
    },
  };
```

Modify your theme(for example. If you have your own extend, skip it):

```js
// .vuepress/config
module.exports = {
  extend: '@vuepress/theme-default',
};
```

Find `this.$page.lastUpdated` and format it.

For example, if you extend `@vuepress/theme-default`, you could clone the [`Page.vue`](https://github.com/vuejs/vuepress/blob/3b14375/packages/%40vuepress/theme-default/components/Page.vue) to `.vuepress/theme/components/Page.vue` and modify it:

```diff
+ import format from 'date-fns/format';
    computed: {
      lastUpdated() {
-       return this.$page.lastUpdated
+       return (
+         this.$page.lastUpdated &&
+         format(this.$page.lastUpdated, 'yyyy/MM/dd HH:mm:ss')
+       );
      },
```
