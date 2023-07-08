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

export const deploySideBar = [
  { text: '前言', link: '/deploy/' },
  { text: '[自动] Docker 部署', link: '/deploy/docker' },
  { text: '[自动] 预设脚本 部署', link: '/deploy/docker' },
  { text: '[手动] 部署 Core', link: '/deploy/core' },
  { text: '[特殊] Windows 部署', link: '/deploy/windows' },
  { text: '[进阶] 自定义部署配置', link: '/deploy/configure' },
]

export const frontendsBar = [
  { text: '@mx-space/kami', link: '/frontends/kami' },
  { text: '@mx-space/mx-yun-theme', link: '/frontends/mx-yun' },
  { text: '@Innei/Shiro', link: '/frontends/shiro' },
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
  { text: '部署', items: deploySideBar },
  { text: '设置', items: optionsBar },
  { text: '帮助', items: helpBar },
  { text: '开发', items: devBar },
  { text: '团队', link: '/team' },
]

export default navBar
