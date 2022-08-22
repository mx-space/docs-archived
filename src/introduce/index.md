---
title: 介绍
---

# 项目介绍

> 本章将会为您展示 Mix-Space 的功能与特性，并介绍来自开源社区的贡献者，希望你能看完。 :)


## 特点

Mix-Space 前后端是分离的，意味着你可以将前后端分别单独部署不同的服务器上，当然也可以全部部署在一台服务器上

Mix-Space 的 [Core](https://github.com/mx-space/core) 提供后端服务支持，[Kami](https://github.com/mx-space/kami) 是作者更新最频繁的前端，[Mx-Yun](https://github.com/mx-space/mx-web-yun) 是云游君 Hexo-Yun 的移植版；当然 kami 提供最全的支持，享有 Core 的全部功能，具有良好的动效，各种很可爱的小彩蛋！

也许第一眼你并不会觉得很惊艳，那请把功能介绍看完吧？


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

  评论有三种类型，没读过的、读过的、被判断为垃圾评论被过滤的。在 `Kami` 前端，登陆后可以对评论进行置顶！ ![评论管理](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/oNhuO0.png)


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
  
  kami 的歌单，追番功能就是使用云函数支持噢？如果你具有一点编程能力，你可以很方便地使用云函数扩展你想要的功能；当然，这个支持歌词显示的惹~

  ![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/lyrics.png)

  
- [公共面板](https://mx.shizuri.net) 该项功能需要允许跨域

  该功能不需要你自己单独部署后台了！

当然，这只是部分示例，如果你想了解更多功能，请访问 Demo 

 - [Kami Demo](https://mx-demo.shizuri.net/) 
 - [后台 Demo](https://mx-demo.shizuri.net/proxy/qaqdmin)   demo 后台密码 : `demo`

## 采用 Mix-Space 网站示例

 - [静かな森 - 致虚极，守静笃](https://innei.ren)
 - [TimochanのBlog - Let's start learning](https://www.timochan.cn)
 - [喵二の小博客 - 缘，妙不可言](https://www.miaoer.xyz)
 - [SuemorのBlog - 所谓自由就是可以说二加二等于四的自由](https://www.suemor.com/)

## 开始

看到这里，你可能会觉得非常不错，那么希望你有耐心，开始吧？

[很方便的前后端部署部署](/deploy/index.md)

如果你分别部署前后端，接下来就是了

### 后端单独部署

部署后端(Core)，[Go](/deploy/core/core.md) 

### 前端部署

Kami 前端部署，[Go](/deploy/kami/index.md)

Mx-Yun 前端部署，[Go](/deploy/yun/index.md)

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
