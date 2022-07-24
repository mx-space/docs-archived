---
title: 介绍
---

# 项目介绍

> 本章将会为您展示 Mix-Space 的功能与特性，并介绍来自开源社区的贡献者，希望你能看完。 :)

## 目录

| 模块     | 描述                | 地址                                                     |
| -------- |-------------------| -------------------------------------------------------- |
| 部署     | 整个项目的部署方法 & 视频    | [起飞](/deploy/)                                   |
| 设置     | 项目各部分设置的介绍        | [起飞](/options/)                                        |
| 常见问题 | 部署及使用中未提到的问题，收录于此 | [起飞](/help/)                                           |
| 开发     | 介绍项目的开发，请求处理流程等   | [起飞](/dev/)                                            |
| 旧版文档 | 旧的文档              | [走你](https://github.com/mx-space/docs-legacy/tree/master/old) |

## 前后端分离

没错， Mix-Space 采用的是前后端分离的形式，那什么是前后端分离呢？

前后端分离，顾名思义，前后端将会遵循某种规范，后端的接口不变，请求方式不变，即前后端数据交换遵循的某种规范。

这对前端开发将会带来极大的方便，不需要与后端在接口问题上扯皮，同时也方便了为 Mix-Space 开发前端的人，这点我稍后再讲。

## 现有功能 (部分)

- 仪表盘

  可以总览各类数据，一言和今日诗句来自第三方服务。![仪表盘](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/V0BRMI.png)

- 文章

  可以发布，修改，删除，标记文章，还可以对你自己喜欢的文章进行置顶！![文章](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/Vd1kAW.png) 

- 日记

  可以发布，修改，删除，标记日记，同时为了方便回忆，兼备定位功能（需要配合高德地图 API）。![日记](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/mAwG4T.png)

- 编辑器

  现支持`monaco` ， `codemirror`  ， `plain` 三种编辑器。![编辑页](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/ROaydk.png)

- 评论

  评论有三种类型，没读过的、读过的、被判断为垃圾评论被过滤的。在 `Kami` 主站，登陆后可以对评论进行置顶！ ![评论管理](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/oNhuO0.png)

- 说说

  说说可以用来记录一句话，或者直接保存发布一条[一言](https://hitokoto.cn/)。![说说编辑](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/gMs43j.png)

- 友链

  在这里可以直接管理友链，新增的未审核的友链会通知到主人，主人通过之后也会邮件通知到对方。![友情链接](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/server-links.png)

- 数据大盘

  您可以看到今日访问的`PV` 、`UA` ，及近期访问相对频繁的`URL` 。![数据大盘](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/2ke5KU.png)

- 备份

  在这里可以管理备份，包括下载和直接回滚，或者上传数据文件进行恢复。（需要 mongodb-tools）![备份](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/cTOSl.png)

- Markdown 导入导出

  该功能可以将所有文章导出为 Markdown YAML 兼容的格式，或者导入 Markdown YAML 兼容的文件。（Hexo 兼容的 Markdown）![导出页](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/server-md.png)

- 搜索功能，基于 Algolia Search，在前端可通过 `Command(Ctrl)` +`K` 或者 `/` 唤出搜索框

- PTY

  ![](https://user-images.githubusercontent.com/41265413/153223043-b211b0b8-977d-474e-8b51-80f77624dd75.jpg)

- [云函数](https://github.com/mx-space/mx-server/blob/master/src/modules/serverless/serverless.readme.md)
  
  云函数可以自己写一些好玩的小东西，Kami 的歌单 、追番，背景音乐依赖于云函数。
  
- [公共面板](https://mx.shizuri.net) 该项功能需要允许跨域

  该功能不需要你自己单独部署后台了！

## 鸣谢

本版文档由以下贡献者编写（按照贡献者名字首字母顺序进行排序）：

- [623337308](https://blog.cqsjyz.com)
- [Elmge](https://github.com/Elmge)
- [喵二](https://www.miaoer.xyz)
- [Sayyiku](https://github.com/Sayyiku)
- [Timochan](https://www.timochan.cn)
- [Wibus](https://github.com/wibus-wee)
- [wuhang2003](https://github.com/wuhang2003)
- [zsbai](https://github.com/zsbai)

当然，整个项目的开发者是 [innei](https://innei.ren) 。

感谢社区提出的问题及解决方案、帮助笔者简化许多步骤，也欢迎更多人能够参与到我们的开源社区中[帮助我们优化项目](https://github.com/mx-space)。

## 打赏本项目

- 微信二维码

<div align="center">
<img src="https://cdn.jsdelivr.net/gh/Innei/img-bed@master/20191211132347.png" style="width:40%;" />
</div>
