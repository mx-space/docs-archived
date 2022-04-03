<script setup>

let open = $ref(true)

/**
 * Call this if the banner is dismissible
 */
function dismiss() {
  open = false
  document.documentElement.classList.add('banner-dismissed')
  localStorage.setItem(`vue-docs-banner-${__VUE_BANNER_ID__}`, 'true')
}
</script>

<template>
  <div class="banner" v-if="open">
    Mix Space Documentation is ready!
    <a
      href="https://github.com/mx-space"
      target="_blank"
      >Learn more</a
    >
  </div>
</template>

<style>
html:not(.banner-dismissed) {
  --vt-banner-height: 24px;
}
</style>

<style scoped>
.banner {
  position: fixed;
  z-index: var(--vp-z-index-banner);
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  height: var(--vt-banner-height);
  line-height: var(--vt-banner-height);
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background-color: var(--vt-c-green);
}

.banner-dismissed .banner {
  display: none;
}

a {
  text-decoration: underline;
}
</style>