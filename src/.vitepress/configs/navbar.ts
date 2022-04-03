/*
 * @FilePath: /docs-next/src/.vitepress/configs/navbar.ts
 * @author: Wibus
 * @Date: 2022-04-03 20:14:54
 * @LastEditors: Wibus
 * @LastEditTime: 2022-04-03 20:32:19
 * Coding With IU
 */


const optionsNav = [
  { text: 'Kami v3', link: '/options/'},
  { text: '后台设置', link: '/options/adsetting'},
  { text: '云函数', link: '/options/serverless'}
]

const deployNavbar = [
  { text: '宝塔环境', link: '/deploy/'},
  { text: '腾讯轻量应用服务器', link: '/deploy/tencent'}
]

const devNavbar = [
  { text: '前端', link: '/dev/frontend'},
  { text: '服务端', link: '/dev/server'}
]

const navBar = [
  { text: '介绍', link: '/introduce/'},
  { text: '部署', items: [
    { text: 'TYPES', items: deployNavbar},
  ] },
  { text: '设置', items: optionsNav },
  { text: '帮助', link: '/help/' },
  { text: '开发', items: devNavbar },
]



export default navBar