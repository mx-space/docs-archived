/*
 * @FilePath: /docs/src/.vitepress/configs/navbar.ts
 * @author: Wibus
 * @Date: 2022-04-03 20:14:54
 * @LastEditors: timochan
 * @LastEditTime: 2023-04-06 23:42:00
 * Coding With IU
 */

export const introduceBar = [{ text: '介绍', link: '/guide/' }]

export const experimentBar = [
  { text: '文本宏', link: '/feature/text-macors' },
  { text: '云函数', link: '/feature/serverless-functions' },
  { text: '信息安全与加密', link: '/feature/security' },
  { text: '区块链', link: '/feature/xlog'},
]

export const optionsBar = [
  { text: '使用', link: '/use/' },
  { text: '反向代理', link: '/use/#反向代理' },
  { text: '后台设置', link: '/use/#后台设置' },
  { text: '主题设置', link: '/use/#kami-设置' },
  { text: '歌单', link: '/use/#歌单 - 听歌 - 追番' },
  { text: '详细配置', link: '/use/kami-setting.md' },
]

export const deployServerBar = [
  { text: 'Core 部署', link: '/deploy/index.md#部署-core' },
]

export const deployKamiBar = [
  { text: 'Kami 部署', link: '/deploy/index.md#部署-kami' },
]

export const deploySideBar = [
  { text: '预设脚本部署', link: '/deploy/index.md#部署系统' },
  { text: '部署 Core', link: '/deploy/index.md#手动部署' },
  { text: '部署 Kami', link: '/deploy/index.md#部署-kami' },
  { text: 'Windows 部署', link: '/deploy/windows.md' },
]

export const deployBar = [
  { text: 'Global', items: [{ text: '一键部署全站', link: '/deploy/' }] },
  { text: 'Core', items: deployServerBar },
  { text: 'Kami', items: deployKamiBar },
]

export const helpBar = [
  { text: '升级', link: '/help/#升级' },
  { text: '重启', link: '/help/#重启' },
  { text: '备份', link: '/help/#备份与回滚' },
  { text: '常见问题', link: '/help/#常见问题' },
]

export const devBar = [
  { text: '前端', link: '/dev/frontend' },
  { text: '服务端', link: '/dev/server' },
]

export const changelogBar = [{ text: '文档变更日志', link: '/changelog/' }]

const navBar = [
  { text: '介绍', items: introduceBar },
  { text: '部署', items: deployBar },
  { text: '设置', items: optionsBar },
  { text: '帮助', items: helpBar },
  { text: '开发', items: devBar },
]

export default navBar
