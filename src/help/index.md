---
title: 常见问题
---

# 升级

因为前端分手动部署和 Docker 部署，请按照文档中部署方式选择对应的更新方法。

:::danger
前端更新目前仅针对手动部署更新，请 pr
:::

## 前端升级

### 强制同步

:::tip
该方法适合于对 Kami 源代码没有做改动的懒人用户
:::

直接在 `mx-space/kami` 文件夹下执行 `git pull origin master`

```bash

$ cd ~/mx-space/kami

$ git pull origin master
```

安装依赖、构建、启动前端

```bash
$ pnpm i

$ pnpm build

$ pm2 start

假如我确定修改项万无一失 

$ pnpm i && pnpm build && pm2 start
```

### 魔改升级

将 `mx-space/kami` 文件夹改为任意名字，这里修改为 `kami.d`

然后拉取 kami 前端仓库，更新到稳定版本

```bash

$ cd ~/mx-space

$ git clone https://github.com/mx-space/kami.git --depth=1

$ cd kami && git fetch --tags && git checkout $(git rev-list --tags --max-count=1)
```

然后将更新前之前配置时修改过的文件，如在 `mx-space/kami.d`

中的 `.env` 和 `public` 文件夹复制到 `mx-space/kami`

假设这里还修改了友链的页面文件这里也一一进行替换

> 如果友链页源码有更新，又将更新前的文件替换上去可能导致构建错误。

替换完成；安装依赖、构建、启动前端

```bash
$ pnpm i

$ pnpm build

$ pm2 start

# 万无一失: pnpm i && pnpm build && pm2 start
```

## 后端升级

进入 server 文件夹执行

```bash

$ cd ~/mx-space/server

# docker compose pull && docker compose up -d
```

# 备份与回滚

在 Mix-space 中内有备份功能，并且每日默认自动备份，数据无价请定期手动下载备份包

## 备份

在后端中 其他-备份 中点击立即备份，即备份到绝对目录: 

`~/mx-space/server/data/mx-space/backup/20xx-xx-xx_xx:xx:xx/backup-20xx-xx-xx_xx:xx:xx.zip`

如果你没修改的话，详见后端面板 设定-系统-备份


## 回滚

:::tip
Linux 和 MacOS 可直接上传备份包，并且无需修改包名一致即可回滚，以下操作仅针对使用 Windows 用户访问后端的情况
:::

在后端中 其他-备份 中点击立即备份，将之前在电脑里的 `backup.zip` 上传到刚刚生成的备份目录里进行重命名替换


:::tip
例: 假如刚刚生成的备份是 backup-2022-09-01_23:33:33.zip 将想进行回滚的备份包 backup-2022-01-14_05:14:19.zip 修改为刚刚生成的备份一样的名字

```bash
# mv ~/mx-space/server/data/mx-space/backup/2022-01-14_05:14:19/backup-2022-01-14_05:14:19.zip backup-2022-09-01_23:33:33.zip
```
:::

:::danger
该操作涉及修改数据库，请多备份几个工作日的 backup，数据无价请谨慎操作！

一般情况下回滚只会导致 analyze 数据页丢失 IP & PV 的数据
:::

替换完成会提示 数据库有变动，将在 x 秒后重载页面

重载先检查文章评论等有没有丢失

## 常见问题

:::tip
这里是读者出现的常见问题
:::

//TODO : help rewrite

这块内容将会把最近收集到的 issue 整合起来
