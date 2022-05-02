<template>
  <div ref="md" class="root">Loading markdown from url {{ src }}...</div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { nextTick, onMounted, ref } from 'vue'
import { usePrism } from '../hooks/use-prism'
// @ts-ignore
import checkbox from 'markdown-it-checkbox'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
})

const md = ref<HTMLElement>()
const { highlightAll } = usePrism()

onMounted(async () => {
  const render = MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  }).use(checkbox, {
    divWrap: true,
    divClass: 'cb',
    idPrefix: 'cbx_',
  })

  fetch(props.src)
    .then((res) => res.text())
    .then((text) => {
      if (md.value) {
        md.value.innerHTML = render.render(text)
        nextTick(() => {
          highlightAll()
        })
      }
    })
})
</script>

<style scoped lang="postcss">
.root {
  & :deep(pre) {
    @apply overflow-auto my-4 relative;
  }
  & :deep(h1) {
    margin: 4rem 0 1.8rem;
    border-top: 1px solid var(--vt-c-divider-light);
    padding-top: 1.8rem;
    font-size: 24px;
    letter-spacing: -0.02em;
  }

  & :deep(h1:first-child) {
    margin-top: 0;
    padding-top: 0;
  }

  & :deep(h1),
  & :deep(h2),
  & :deep(h3) {
    border-top: 0;
    margin-top: 0;
  }

  & :deep([type='checkbox']) {
    @apply mr-2;
    @apply pointer-events-none cursor-not-allowed;
  }
}
</style>
