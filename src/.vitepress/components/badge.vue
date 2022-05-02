<template>
  <span class="badge">{{ text }}</span>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<style lang="postcss">
.badge {
  @apply bg-blue-200 dark:bg-blue-800 dark:text-white px-2 py-1 rounded-xl;
}
</style>
