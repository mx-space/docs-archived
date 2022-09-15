---
title: 部署 Mix Space
---

# 开始

:::tip 
在看完介绍后你一定很想尝试部署 Mix Space !
那本节内容带你完成部署，请有耐心的一点点看完
:::

## 示例和准备

国内服务器部署请完成备案后再进行

后端示例域名 ：server.test.cn

前端示例域名 ：www.test.cn

操作系统 :  建议 Ubuntu 20.04 / Debian 11 及以上版本，或其他 Linux 发行版本

如果你想在 Windows 部署，请看这里 [Windows 安装 Mix Space](/deploy/windows.md)

Linux 内核版本 :  大于 4.18 ，建议 5.x 

内存建议 : 大于 1 Gib


:::danger
使用小于 4.18 版本的 Linux 内核将无法正常部署 Mix Space
:::

***

<br>

# 环境安装

## 安装软件包

Debian / Ubuntu

```bash
# apt update && apt install git curl vim wget git-lfs -y
```
CentOS

```bash
# yum check-update && yum install git curl vim wget git-lfs -y
```

## 安装 Docker

SSH 连接到服务器，使用一键脚本，可以迅速安装 Docker 和 Docker Compose

```bash
$ curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
:::warning 
该过程可能比较慢，请不要断开 SSH 连接；该脚本仅支持 Debian，Ubuntu，CentOS，其他系统请自行安装
:::

## 安装 nvm

nvm 用于管理 Node.js 

打开终端，使用一键脚本，可以迅速安装 nvm

```bash
$ bash -c "$(curl -fsSL https://gitee.com/RubyKids/nvm-cn/raw/master/install.sh)"
```
重启终端即可生效

安装 Node.js 最新的 LTS 版本

```bash
$ nvm install --lts
```

安装需要的模块

```bash
$ npm i -g yarn zx pnpm
```

***

# 部署系统

Mix Space 目前支持以下安装方法

[**使用预设脚本部署**](#使用预设脚本部署) ： 安装方便，但是前端可以修改的地方非常有限

[**手动部署**](#手动部署) ： 安装略微麻烦，前端可以修改任意地方更细分，更新频率最快

## 使用预设脚本部署

克隆仓库

```bash
$ cd && mkdir mx-space && cd mx-space
$ git clone https://github.com/mx-space/docker --depth=1

如果克隆缓慢，可以使用以下镜像地址
$ git clone https://hub.0z.gs/mx-space/docker.git --depth 1
```

### 整个环境

所部署的环境：Kami + Core + Caddy2

在此之前，你需要将域名解析完毕

使用一键脚本

```bash
$ cd docker
$ npm i
$ zx ./build.mjs
```

实例输入：

```bash
你的域名为：（需要提前绑定）: innei.ren
你的邮箱为: (若该步留空，则不部署 Caddy 服务): tukon@gmail.com
是否部署 Caddy 2.0？ (y/n): y
```

待流程执行完毕，进入 `https://server.test.cn/proxy/qaqdmin` ，进行初始化

### 仅部署服务和主站前端

所部署的环境：Kami + Core

你不需要 IP 指向。但是需要手动处理服务器反代

使用一键脚本

```bash
$ cd docker
$ npm i
$ zx ./build.mjs
```

实例输入：

```bash
你的域名为：（需要提前绑定）: innei.ren
你的邮箱为: (此步留空，则不部署 Caddy 服务):
```

待流程执行完毕，进入 `http://127.0.0.1:2333/proxy/qaqdmin`

## 手动部署

手动部署，是使用最多更新速度最快的部署方式，如果后续需要魔改前端，推荐使用手动部署

### 视频

很高兴，我们的文档贡献者提供了视频教程；建议配合本文档进行操作

<iframe src="https://api.paugram.com/bili?av=897657356&style=gray" style="height: 176px; width: 100%"></iframe>

***

### 部署 Core

一般情况下，我们推荐使用 Docker 进行部署，接下来将带你使用 Docker 部署 Core，步骤非常简单

***
#### Docker 部署

```bash
新建文件夹
$ cd && mkdir -p mx-space/core && cd $_

拉取docker-compose.yml 文件
$ wget https://fastly.jsdelivr.net/gh/mx-space/core@master/docker-compose.yml

拉取 Core 配置文件
$ wget https://fastly.jsdelivr.net/gh/mx-space/core@master/.env.example -O .env
```
我们编辑 .env 文件，它看起来应该是这个样子的

```text
# THIS ENV FILE EXAMPLE ONLY FOR DOCKER COMPOSE
# SEE https://docs.docker.com/compose/environment-variables/#the-env-file
JWT_SECRET=7294c34e0b28ad28          #此处填写一个长度不小于16个字符，不大于32个字符的字符串
ALLOWED_ORIGINS=test.cn,www.test.cn  #此处填写被允许的域名，通常是kami的域名，如果允许多个域名访问，用英文逗号,分隔
```
如此，就可以了，接下来我们启动后端

```bash
# docker compose up -d
```
我们可以查看后端是否正常运行

```bash
$ curl  http://127.0.0.1:2333/api/v2
```
返回如下内容，认为正常

```bash
➜  ~ curl  http://127.0.0.1:2333/api/v2
{"name":"@mx-space/core","author":"Innei <https://innei.ren>","version":"3.36.4","homepage":"https://github.com/mx-space/core#readme","issues":"https://github.com/mx-space/core/issues"}
```

***

#### 从源码进行部署

:::tip
如果你是为了使用，而不是开发，建议使用 [Docker 部署](/deploy/index.md#docker-部署) ，当然，如果你有比较好的功能，欢迎 PR
:::

拉取源代码

```bash
$ git clone https://github.com/mx-space/core.git --depth 1
```

安装依赖

```bash
$ pnpm i
```

本地开发

```bash
$ pnpm dev
```

如果你想这样部署 Core 并对外提供服务 ，请移动到 `/src/app.config.ts` 文件

它 13-30 行的内容如下，看起来似乎是这样的

```ts
export const CROSS_DOMAIN = {
  allowedOrigins: argv.allowed_origins
    ? argv.allowed_origins?.split?.(',')
    : [
        'innei.ren',
        '*.innei.ren',
        'shizuri.net',
        '*.shizuri.net',
        'localhost:*',
        '127.0.0.1',
        'mbp.cc',
        'local.innei.test',
        '22333322.xyz',
        '*.dev',
      ],

  // allowedReferer: 'innei.ren',
}
```
其中，按照 17-26 行一样，按照格式，追加你的域名

例如，我想要添加 `server.example.com` ，那么仅仅这样追加一行即可。

```ts
export const CROSS_DOMAIN = {
  allowedOrigins: argv.allowed_origins
    ? argv.allowed_origins?.split?.(',')
    : [
        'innei.ren',
        '*.innei.ren',
        'shizuri.net',
        '*.shizuri.net',
        'localhost:*',
        '127.0.0.1',
        'mbp.cc',
        'local.innei.test',
        '22333322.xyz',
        '*.dev',
        'server.example.com', //追加的新域名
      ],

  // allowedReferer: 'innei.ren',
}
```
构建 & 启动

```bash
$ pnpm build
```
我们可以使用 pm2 托管

```bash
$ pm2 start

或者

$ pnpm prod:pm2
```
***



### 部署 Kami

Kami 是 Mix Space 的默认前端，不过如果你想尝试其他风格的话，可以去 [mx-web-yun](https://github.com/mx-space/mx-web-yun) 看看。


#### 拉取源文件

```bash
$ cd && cd mx-space
$ git clone https://github.com/mx-space/kami.git --depth 1

如果克隆缓慢，可以使用下面的镜像地址
$ git clone https://hub.0z.gs/mx-space/kami.git --depth 1
```

#### 切换到最新的 tag

```bash
$ cd kami && git fetch --tags && git checkout $(git rev-list --tags --max-count=1)
```
#### 拉取图片文件

```bash
$ git lfs fetch --all

$ git lfs pull
```

注意：如果无法正常拉取，可以到 GitHub 上手动下载文件并放到相应目录。

#### 配置文件

复制 .env.example 为 .env

```bash
$ cp .env.example .env
```

编辑 .env 文件，它看起来应该是这个样子的

```text
# API 地址
NEXT_PUBLIC_API_URL=https://server.test.cn/api/v2
# GATEWAY 地址
NEXT_PUBLIC_GATEWAY_URL=https://server.test.cn
#前端使用的配置项名字
NEXT_PUBLIC_SNIPPET_NAME=kami
# 如果使用 CDN, 修改产物前缀；一般留空
ASSETPREFIX=
```

#### 构建

这里选用 pnpm 作为包管理器

```bash
安装必需的模块
$ pnpm i
构建
$ pnpm build
```

#### 启动前端

```bash
$ pnpm prod:pm2
可选
$ pm2 start
```

我们可以查看前端是否正常运行

```bash
$ curl http://127.0.0.1:2323
```

如果有返回数据，则认为正常

## 下一步

[开始使用~](/use/index.md)
