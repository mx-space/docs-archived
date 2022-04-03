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

A：请详细参阅文档，Kami v3 设置部分。



Q：GitHub 链接，QQ 链接等如何修改？

A：同上，同时，请善用文档的搜索功能。



Q：后台地址是什么？

A：`https://server.test.cn/qaqdmin`  //注意此处仍为文档示例

## 构建类

Q：安装依赖的时候，返回404错误，怎么办？

A：请使用 nrm 换一个镜像源。例如

```bash
nrm use yarn
```

nrm 可以通过 npm 安装，例如

```bash
npm install -g nrm 
```



## 设置类

Q：网站名字老是在变化，怎么办？（此处 BUG 已经修复）

A：可以尝试点击仪表盘的清空缓存按钮。



## 重启类

Q：我的服务器重启后，网站进去不了？怎么办？

A：请到 server / kami 的文件夹重新拉起后端/前端，以下两个命令任选其一。

```bash
yarn prod:pm2  
# pm2 start
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

如果 Kami 有大版本更新，请重新拉取仓库，不然可能会出现奇奇怪怪的错误。

如果 server 是 Docker 部署的，走一遍

```bash
docker compose pull && docker compose up -d
```



## 后台问题

Q：通过 /qaqdmin  进不去后台

A：可能是jsd（CDN）抽风了，可以 /proxy/qaqdmin 可以使用纯本地资源。



## 计划任务报错

### 备份 DB 并上传 COS

该处报错对于常规部署可能是缺少unzip 、mongo-tools，等等。

对于 Docker 部署的来说，可能是 docker 容器内没有安装 rsync ，请使用以下命令安装

进入 Webshell

```bash
apk add rsync
```



## 等待添加

帮助手册仍然不完善 ing.....

## 写在后面

文档可以进行举一反三，请务必仔细看完 Docs 来了解 Mix-space 的运行逻辑；笔者水平有限，欢迎各位大佬投稿。
