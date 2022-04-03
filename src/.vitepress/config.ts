// @ts-ignore
import base from '@vue/theme/config'
import navBar from './configs/navbar';
import highlight from "./plugins/highlight";

const themeConfig = async() => {
  const config = await base()
  // @ts-ignore
  config.markdown.highlight = await highlight()
  return config
}

/**
 * @type {import('vitepress').UserConfig}
 */
// export default defineConfigWithTheme<ThemeConfig>({
const config = {
  extends: themeConfig,
  
  title: 'Mix Space',
  description: 'An alternative personal space.',
  lang: 'zh-CN',
  // srcDir: 'src',
  scrollOffset: 'header',

  themeConfig: {
    

    editLink: {
      repo: 'mx-space/kami',
      text: 'Edit this page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mx-space' },
    ],

    nav: navBar,

    footer: {
      license: {
        text: 'AGPLv3 License',
        link: 'https://github.com/mx-space/mx-server/blob/master/LICENSE'
      },
      copyright: `Copyright © 2020-${new Date().getFullYear()} Innei`
    }
  },
  vue: {
    reactivityTransform: true
  }
}
// })

export default config