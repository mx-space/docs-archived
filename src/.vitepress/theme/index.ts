import { VPTheme } from "@vue/theme";
import { App, h } from "vue";
// @ts-ignore
import Banner from './components/Banner.vue'
// @ts-ignore
import Home from './components/Home.vue'

import './styles/code.css'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      banner: () => h(Banner)
    })
  },
  enhanceApp({ app }: { app: App }){
    app.provide('DocsHome', Home)
  }
})