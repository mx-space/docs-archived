import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from '@vue/theme'
// @ts-ignore
import baseConfig from '@vue/theme/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  
  lang: 'zh-CN',
  title: 'Mix Space',
  srcDir: 'src',
  scrollOffset: 'header',

  themeConfig: {


    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2020-${new Date().getFullYear()} Innei`
    }
  }
})