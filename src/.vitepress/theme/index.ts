import { VPTheme } from "@vue/theme";
import { App, h } from "vue";

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {})
  },
  enhanceApp({ app }: { app: App }){}
})