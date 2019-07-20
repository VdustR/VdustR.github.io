<template>
  <component :is="layout" />
</template>

<script>
import 'taipei-sans-tc';

export default {
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout;
        }
        return 'Layout';
      }
      return 'NotFound';
    },
  },
};
</script>
