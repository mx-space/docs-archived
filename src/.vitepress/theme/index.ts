import { VPTheme } from '@vue/theme'
import { createHead } from '@vueuse/head'
import { App, h } from 'vue'
// @ts-ignore
import Banner from './components/Banner.vue'
import './styles/code.css'

export default Object.assign({}, VPTheme, {
  Layout: () => {
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
