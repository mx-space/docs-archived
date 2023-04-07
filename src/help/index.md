---
title: 常见问题
---

# 升级

根据部署方式的不同，对应的升级步骤也有不同，分为手动部署和预设脚本部署两个部分说明。

:::danger
前端更新目前仅针对手动部署更新。
:::

:::tip
完成更新后建议在[变更日志](/changelog/)处查询新版本需要更改的配置，以保证各项功能都可以正常使用。
:::

## 手动部署

### 前端（Kami）未魔改

:::tip
该方法适合于对 Kami 源代码没有做改动的用户。
:::

直接在 `kami` 文件夹下执行 `git pull origin master`：

```bash
cd ~/mx-space/kami
git pull origin master
```

安装依赖、构建、启动前端：

```bash
pnpm i
pnpm build
pm2 start
```

:::warning
你应该理解的是，即便是你没有对 Kami 进行任何魔改，仍有可能出现代码不能自动合并的问题，对于这种情况，建议参考下面的已魔改部分完成升级。
:::

### 前端已魔改

:::tip
此方法适用于对前端魔改后的升级，我们认为你修改了 'kami/src' 里面的源代码，这样的话，容易出现合并冲突，建议手动替换。
:::

将 `kami` 文件夹改为任意名字，例如修改为 `kami.d`，然后拉取 kami 前端仓库，更新到稳定版本：

```bash
cd ~/mx-space
git clone https://github.com/mx-space/kami.git --depth=1
cd kami && git fetch --tags && git checkout $(git rev-list --tags --max-count=1)
```

然后将更新前之前配置时修改过的文件，如在 `kami.d` 中的 `.env` 和 `public` 文件夹复制到 `kami`，将你的修改的部分依次修改替换完成。

安装依赖、构建、启动前端：

```bash
pnpm i
pnpm build
pm2 start
```

### 后端（Core）升级

进入 core 文件夹执行：

```bash
cd ~/mx-space/core
docker compose pull && docker compose up -d
```

## 预设脚本部署

对于预设脚本部署方式，仓库已提供对应的升级脚本，直接过一遍：

```bash
cd ~/docker
bash ./update.sh
```

即可完成升级。

# 重启

重启时 Kami 前端可能不会跟随系统自启：

```bash
cd ~/mx-space/kami && pm2 start
```

# 备份与回滚

在 Mix Space 中内有备份功能，并且每日默认自动备份，数据无价请定期手动下载备份包。

## 备份

在后端中 其他 - 备份 中点击立即备份，即备份到绝对目录：

`~/mx-space/server/data/mx-space/backup/20xx-xx-xx_xx:xx:xx/backup-20xx-xx-xx_xx:xx:xx.zip`

如果你没修改的话，详见后端面板 设定 - 系统 - 备份。

## 回滚

:::tip
Linux 和 macOS 可直接上传备份包，并且无需修改包名一致即可回滚，以下操作仅针对使用 Windows 用户访问后端的情况。
:::

在后端中 其他 - 备份 中点击立即备份，将之前在电脑里的 `backup.zip` 上传到刚刚生成的备份目录里进行重命名替换。

:::tip
例：假如刚刚生成的备份是 backup-2022-09-01_23:33:33.zip 将想进行回滚的备份包 backup-2022-01-14_05:14:19.zip 修改为刚刚生成的备份一样的名字：

```bash
mv ~/mx-space/server/data/mx-space/backup/2022-01-14_05:14:19/backup-2022-01-14_05:14:19.zip backup-2022-09-01_23:33:33.zip
```

:::

:::danger
⚠️ 该操作涉及修改数据库，请多备份几个工作日的 backup，数据无价请谨慎操作！

一般情况下回滚只会导致 analyze 数据页丢失 IP & PV 的数据。
:::

替换完成会提示“数据库有变动，将在 x 秒后重载页面”，重载先检查文章评论等有没有丢失。

## 常见问题

:::tip
这里是读者出现的常见问题。
:::

<!-- TODO : help rewrite -->

这块内容将会把最近收集到的 issues 整合起来。
