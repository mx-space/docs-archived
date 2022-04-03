import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from '@vue/theme'
// @ts-ignore
import base from '@vue/theme/config'

const Sidebar = [
  { text: '介绍', link: '/introduce/' },
  { text: '部署', link: '/deploy/' },

  // 另外一种写法，不过推荐将items内的东西另外定义一个常量，利于修改
  // { text: '介绍', items: [
  //   { text: '构建', link: '/introduce/build/' },
  // ]
  // },
]


export default defineConfigWithTheme<ThemeConfig>({
  extends: base,
  
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

    nav: [
      { text: '介绍', link: '/introduce/'},
      { text: '部署', link: '/deploy/' },
      { text: '设置', link: '/setting/' },
      { text: '帮助', link: '/help/' },
      { text: '开发', link: '/dev/' },
    ],

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2020-${new Date().getFullYear()} Innei`
    }
  }
})