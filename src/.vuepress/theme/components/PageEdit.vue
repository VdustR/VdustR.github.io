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
