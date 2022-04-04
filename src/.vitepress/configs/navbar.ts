/*
 * @FilePath: /docs-next/src/.vitepress/configs/navbar.ts
 * @author: Wibus
 * @Date: 2022-04-03 20:14:54
 * @LastEditors: Wibus
 * @LastEditTime: 2022-04-03 21:02:25
 * Coding With IU
 */

export const introduceBar = [
  { text: '介绍', link: '/introduce/' },
  { text: '现有功能', link: '/introduce/#现有功能' },
  { text: '目录', link: '/introduce/#目录' },
]

export const optionsBar = [
  { text: 'Kami v3', link: '/options/' },
  { text: '后台设置', link: '/options/adsetting' },
  { text: '云函数', link: '/options/serverless' },
]

export const deployBar = [
  { text: 'Docker 一键部署', link: '/deploy/docker' },
  { text: '宝塔环境', link: '/deploy/bt-panel' },
  { text: '腾讯轻量应用服务器', link: '/deploy/tencent' },
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
  { text: '部署', items: [{ text: 'TYPES', items: deployBar }] },
  { text: '设置', items: optionsBar },
  { text: '帮助', items: helpBar },
  { text: '开发', items: devBar },
]

export default navBar
