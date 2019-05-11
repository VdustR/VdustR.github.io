<template>
  <SWUpdatePopup>
    <div
      v-if="enabled"
      slot-scope="{ enabled, reload, message, buttonText }"
      class="my-sw-update-popup"
    >
      {{ message }}<br />
      <button @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue';

export default {
  components: { SWUpdatePopup },
};
</script>

<style>
.my-sw-update-popup {
  position: fixed;
  right: 1em;
  bottom: 1em;
  padding: 1em;
  border: 1px solid #122d42;
  border-radius: 3px;
  background: #011627;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  text-align: center;
  z-index: 2;
  color: #ffffff;
}

.my-sw-update-popup > button {
  margin-top: 0.5em;
  padding: 0.25em 2em;
  border-color: #122d42;
  background: #7e57c2cc;
  color: #ffffffcc;
  cursor: pointer;
}

.my-sw-update-popup-enter-active,
.my-sw-update-popup-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.my-sw-update-popup-enter,
.my-sw-update-popup-leave-to {
  opacity: 0;
  transform: translate(0, 50%) scale(0.5);
}
</style>
