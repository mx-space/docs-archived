/*
 * @FilePath: /docs-next/src/.vitepress/configs/navbar.ts
 * @author: Wibus
 * @Date: 2022-04-03 20:14:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-12 18:01:54
 * Coding With IU
 */

export const introduceBar = [
  { text: '介绍', link: '/guide/' },
]

export const experimentBar = [
  { text: '文本宏', link: '/feature/text-macors' },
  { text: '云函数', link: '/feature/serverless-functions' },
]

export const optionsBar = [
  { text: '使用', link: '/use/' },
  { text: '后台设置', link: '/use/#后台设置' },
  { text: '歌单', link: '/use/#歌单听歌追番' },
]

export const deployServerBar = [
  { text: 'Core 部署', link: '/deploy/index.md#部署-core' },
]

export const deployKamiBar = [
  { text: 'Kami 部署', link: '/deploy/index.md#部署-kami' },
]

export const deployYunBar = [
  { text: 'Yun 部署(WIP)', link: '/deploy/' },
]

export const deploySideBar = [
  { text: 'Docker 一键部署', link: '/deploy/index.md#部署系统' },
  { text: '部署 Core', link: '/deploy/index.md#手动部署' },
  { text: '部署 Kami', link: '/deploy/index.md#部署-kami' },
  { text: '部署 Yun (WIP)', link: '/deploy/' },
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
  { text: '构建', link: '/help/#构建' },
  { text: '设置', link: '/help/#设置' },
  { text: '重启', link: '/help/#重启' },
  { text: '升级', link: '/help/#升级' },
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
