<template>
  <router-link
    v-if="!isExternal(link)"
    class="nav-link"
    :to="link"
    :exact="exact"
    >{{ item.text }}</router-link
  >
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    <template v-if="iconMap[item.text]">
      <img class="myIcon" :alt="item.text" :src="iconMap[item.text]" />
    </template>
    <div class="myLabel">
      {{ item.text }}
      <OutboundLink />
    </div>
  </a>
</template>

<script>
import {
  isExternal,
  isMailto,
  isTel,
  ensureExt,
} from '@vuepress/theme-default/util';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      iconMap: {
        CodePen: require('simple-icons/icons/codepen.svg'),
        Facebook: require('simple-icons/icons/facebook.svg'),
        GitHub: require('simple-icons/icons/github.svg'),
      },
    };
  },

  computed: {
    link() {
      return ensureExt(this.item.link);
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          rootLink => rootLink === this.link
        );
      }
      return this.link === '/';
    },
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
  },
};
</script>

<style lang="scss" scoped>
.myIcon {
  height: 1em;
  transform: scale(1.5);
  margin: 0 0.5em;
  filter: invert(100%);
}

.myLabel {
  margin-left: 8px;

  @media (min-width: 720px) {
    display: none;
  }
}

.nav-link {
  display: inline-flex;
  align-items: center;
}
</style>
