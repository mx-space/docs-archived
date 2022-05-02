// @ts-ignore
import base from '@vue/theme/config'
import { resolve } from 'path'
import { UserConfig } from 'vitepress'
import navBar, {
  deployBar,
  devBar,
  helpBar,
  introduceBar,
  optionsBar,
} from './configs/navbar'
import highlight from './plugins/highlight'
import { NavbarFix } from './plugins/navbar'

const themeConfig = async () => {
  const config = await base()
  // @ts-ignore
  config.markdown.highlight = await highlight()
  return config
}

const sidebar = [
  { text: '介绍', items: introduceBar },
  { text: '部署', items: deployBar },
  { text: '设置', items: optionsBar },
  { text: '帮助', items: helpBar },
  { text: '开发', items: devBar },
]

const config: UserConfig = {
  extends: themeConfig,

  title: 'Mix Space',
  description: 'An alternative personal space.',
  lang: 'zh-CN',
  outDir: resolve(__dirname, '../../dist'),

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],

    ['meta', { property: 'og:title', content: 'Mix Space' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://avatars.githubusercontent.com/u/63097751?s=200&v=4',
      },
    ],

    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        crossorigin: 'anonymous',
        href: 'https://fonts.gstatic.com',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap',
      },
    ],
  ],

  scrollOffset: 'header',

  themeConfig: {
    // editLink: {
    //   repo: 'mx-space/docs',
    //   text: '编辑此页',
    // },
    // editLinks: false,

    algolia: {
      apiKey: '17c9be610f7f8fac9911a340c35ef34f',
      indexName: 'docs',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/mx-space' }],

    nav: navBar,
    sidebar: {
      '/introduce/': sidebar,
      '/options/': sidebar,
      '/deploy/': sidebar,
      '/help/': sidebar,
      '/dev/': sidebar,
    },
    footer: {
      license: {
        text: 'AGPLv3 License',
        link: 'https://github.com/mx-space/mx-server/blob/master/LICENSE',
      },
      copyright: `Copyright © 2020-${new Date().getFullYear()} Innei`,
    },
  },
  vue: {
    reactivityTransform: true,
  },
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },

    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity,
    },

    optimizeDeps: {
      exclude: ["@vue/theme"],
    },
    
    json: {
      stringify: true,
    },
    plugins: [NavbarFix()],
  },
}

export default config
