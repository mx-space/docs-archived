# 前端开发指南

> 为什么要写这一节？
>
> 我希望不再是只有 Kami 一个风格，能有更多主题可供选择。

此系统采用了前后端分离的形式，并没有提供模板渲染的选择，所以前端项目可以使用任何框架和架构设计。但是虽然开发比较自由，但是也存在诸多不便，比如接口调用和数据定义，路由约定上。所以在这一节，具体讲讲如何开发前端项目。

## 路由约定

[Kami](https://github.com/mx-space/kami) 是由 NextJS、React 开发的，作为最最原始的项目，至今（截止 2021.12）已有近两年的历史，经过这些时间的沉淀，我希望前端项目路由的组织上能够遵守这一个约定。

> 路由的约定能很大程度保证网站因更换不同前端主题导致 SEO 异常，死链接等问题。

约定如下：

| Path                     | Descrition                      | Mark     |
| ------------------------ | ------------------------------- | -------- |
| `/`                      | 主页                            | 强制要求 |
| `/posts`                 | 博文列表                        | 强制要求 |
| `/posts/:category/:slug` | 博文详情页                      | 强制要求 |
| `/pages/:slug`           | 独立页面详情页                  | 强制要求 |
| `/notes/:nid`            | 日记详情页                      | 强制要求 |
| `/feed`                  | RSS 订阅                        | 强制要求 |
| `/:category/:slug`       | 302 -> `/posts/:category/:slug` | 建议     |
| `/category/:slug`        | 分类中文章列表页                | 建议     |
| `/notes`                 | 日记列表或者跳转最新日记页      | 建议     |
| `/notes/latest`          | 最新日记详情页                  | 建议     |
| `/friends`               | 友链                            | 建议     |
| `/says`                  | 一言详情页                      | 可选     |
| `/sitemap`               | 站点地图                        | 建议     |
| `/timeline`              | 时间线                          | 可选     |
| `/recently`              | 动态页                          | 可选     |
| `/favorite/:type`        | 附加页                          | 可选     |
| `/projects`              | 项目页                          | 可选     |
| `/projects/:id`          | 项目详情页                      | 可选     |

## 框架上的选择与建议

建议选择附带 SSR 功能的现代化框架：

- React：NextJS, [RakkasJS](https://github.com/rakkasjs/rakkasjs), umi
- Vue: Vite (vite-ssr), NuxtJS

小程序:

- React: Remax, taro
- Vue: uni-app

## 接口调用与 SDK 的使用

考虑到单独编写接口定义和返回类型太麻烦，这里提供一个 SDK 方便开发。

> SDK 仍在 beta 阶段，未来接口可能出现变化。

详见：[api-client](https://github.com/mx-space/core/tree/master/packages/api-client)
