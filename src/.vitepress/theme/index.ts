import { VPTheme } from '@vue/theme'
import { createHead } from '@vueuse/head'
import { useRouter } from 'vitepress'
import { App, h, watch } from 'vue'
// @ts-ignore
import Banner from './components/Banner.vue'
import './styles/code.css'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    const router = useRouter()

    watch(
      () => router.route.data.relativePath,
      (path) => {
        ;(window as any).umami.trackView(path)
        ;(window as any).umami.trackEvent(router.route.data.title, 'view')
      },
      { immediate: true }
    )
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      banner: () => h(Banner),
    })
  },
  enhanceApp({ app }: { app: App }) {
    const head = createHead()
    app.use(head)
  },
})
