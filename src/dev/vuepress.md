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

For example, if you extended `@vuepress/theme-default`, you could create `.vuepress/theme/components/PageEdit.vue`:

```vue
<script>
import format from 'date-fns/format';
import PageEdit from '@vuepress/theme-default/components/PageEdit';

export default {
  ...PageEdit,
  computed: {
    ...PageEdit.computed,
    lastUpdated() {
      return (
        this.$page.lastUpdated &&
        format(this.$page.lastUpdated, 'yyyy/MM/dd HH:mm:ss')
      );
    },
  },
};
</script>
```
