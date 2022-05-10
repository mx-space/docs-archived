---
title: 常见问题
---

# 常见问题

> 我会把经常出现的问题整理到这里，方便查阅，笔者水平有限，欢迎各位大佬投稿。

## 域名解析问题

Q：我输入文档中示例的域名为啥不能用？

A：文档中示例域名为 `server.test.cn`， `www.test.cn`，请换成你自己的域名，如果不知道怎么设置三级域名，请问百度。

## 信息类

Q：我的备案信息怎么修改？

A：请详细参阅文档，[Kami v3 设置部分](/options/)。

Q：GitHub 链接，QQ 链接等如何修改？

A：同上，同时，请善用文档的搜索功能。

Q：后台地址是什么？

A：`https://server.test.cn/qaqdmin`  OR `https://sever.test.cn/proxy/qaqdmin`

## 构建类

Q：安装依赖的时候，返回 404 错误，怎么办？

A：请使用 `nrm` 换一个镜像源。例如

```bash
nrm use yarn
```

`nrm` 可以通过 `npm` 安装，例如

```bash
npm install -g nrm
```

## 设置类

NULL

## 重启类

Q：我的服务器重启后，网站进去不了？怎么办？

A：请到 server / kami 的文件夹重新拉起后端/前端，以下两个命令任选其一。

```bash
pm2 start
# npm run prod:pm2
```

如果是 Docker 部署的，走一遍

```bash
docker compose pull && docker compose up -d
```

## 升级类

Q：如何升级 server(后端) / kami(前端)？

A：如果你对 kami 的内容没有进行魔改，我们可以强制同步（不适用于大版本更新）

```bash
git pull origin master
pnpm i
pnpm build
npm run prod:pm2
```

如果 `Kami` 有大版本更新，请重新拉取仓库，不然可能会出现奇奇怪怪的错误。

如果 `server` 是 `Docker` 部署的，走一遍

```bash
docker compose pull && docker compose up -d
```

Q：Mx-server（后端）升级后评论丢失

A：非常不建议非渐进式升级（例如从 `v3.24.3` → `v3.26.6`），这种升级方式可能会出现奇奇怪怪的 `BUG` ，`Mix-space` 的开发工作仍处于相当活跃的状态，建议跟进最新版本。

Q：跟进新版本有什么好处

A：最好的支持状态，因为撰写文档的笔者一般都积极跟进最新版本，最新的特性支持，还有对以往 `BUG` 的修复。

## 后台问题

Q：通过 `/qaqdmin` 进不去后台

A：可能是 jsd（CDN）抽风了，可以 `/proxy/qaqdmin` 可以使用纯本地资源。

## 等待添加

帮助手册仍然不完善 ing.....

## 写在后面

文档可以进行举一反三，请务必仔细看完 Docs 来了解 Mix Space 的运行逻辑；笔者水平有限，欢迎各位大佬投稿。
