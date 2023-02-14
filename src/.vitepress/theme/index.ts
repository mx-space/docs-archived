// import './styles/code.css'
import { createHead } from '@vueuse/head'
// @ts-ignore
import Banner from './components/Banner.vue'
import DefaultTheme from 'vitepress/theme'
import { App, h, watch } from 'vue'
import './styles/code.css'
import './styles/vars.css'
import { useRouter } from 'vitepress'

export default {
  ...DefaultTheme,
  Layout: () => {
    const router = useRouter()

    watch(
      () => router.route.data.relativePath,
      (path) => {
        if (import.meta.env.DEV) {
          return
        }
        ;(window as any).umami.trackView(path)
        ;(window as any).umami.trackEvent(router.route.data.title, 'view')
      },
      { immediate: true }
    )
    //@ts-ignore
    return h(DefaultTheme.Layout, null, {
      // 'home-hero-before': () => h(Banner)
    })
  },
  enhanceHead({ app }: { app: App }) {
    const heads = createHead()
    app.use(heads)
  }
}