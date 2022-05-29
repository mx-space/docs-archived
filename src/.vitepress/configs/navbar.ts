/*
 * @FilePath: /docs-next/src/.vitepress/configs/navbar.ts
 * @author: Wibus
 * @Date: 2022-04-03 20:14:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-12 18:01:54
 * Coding With IU
 */

export const introduceBar = [
  { text: '介绍', link: '/introduce/' },
  { text: '预览', link: '/introduce/#现有功能-部分' },
  { text: '目录', link: '/introduce/#目录' },
]

export const experimentBar = [
  { text: '文本宏', link: '/feature/text-macors' },
  { text: '云函数', link: '/feature/serverless-functions' },
]

export const optionsBar = [
  { text: 'Kami v3', link: '/options/' },
  { text: '后台设置', link: '/options/adsetting' },
  { text: '云函数', link: '/options/serverless' },
]

export const deployServerBar = [
  { text: 'Core 部署', link: '/deploy/core/core' },
]

export const deployKamiBar = [
  { text: 'Kami 部署', link: '/deploy/kami/' },
]

export const deployYunBar = [
  { text: 'Yun 部署(WIP)', link: '/deploy/yun/' },
]

export const deploySideBar = [
  { text: 'Docker 一键部署', link: '/deploy/' },
  { text: '部署 Core', link: '/deploy/core/core' },
  { text: '部署 Kami', link: '/deploy/kami/' },
  { text: '部署 Yun (WIP)', link: '/deploy/yun/' },
]

export const deployBar = [
  { text: 'Global', items: [
    { text: '一键部署全站', link: '/deploy/' },
  ]},
  { text: 'Server', items: deployServerBar },
  { text: 'Kami', items: deployKamiBar },
  { text: 'Yun', items: deployYunBar },
] 

export const helpBar = [
  { text: '构建类', link: '/help/#构建类' },
  { text: '设置类', link: '/help/#设置类' },
  { text: '重启类', link: '/help/#重启类' },
  { text: '升级类', link: '/help/#升级类' },
]

export const devBar = [
  { text: '前端', link: '/dev/frontend' },
  { text: '服务端', link: '/dev/server' },
]

const navBar = [
  { text: '介绍', items: introduceBar },
  { text: '部署', items: deployBar },
  { text: '设置', items: optionsBar },
  { text: '帮助', items: helpBar },
  { text: '开发', items: devBar },
]

export default navBar
