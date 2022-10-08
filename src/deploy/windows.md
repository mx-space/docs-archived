---
title: Windows 安装
---

# Windows 安装 Mix Space

:::warning
本节内容是文档贡献者单方面的支持，文中提到的问题不会被修复，不推荐使用 Windows 部署 Mix Space
:::



## 安装 Core

:::tip
如果你的不是基于虚拟化的服务器（即可以进行虚拟化），还是非常推荐使用 [Docker Desktop For Windows](https://www.docker.com/products/docker-desktop/) 去部署 Core；如果你是基于虚拟化的服务器上（即不支持再次虚拟化），那仅能使用源码进行部署，这种存在安装方式比较繁琐，且存在将来也不会修复的 BUG
:::
Mix Space 的 Core 需要 MongoDB ，Node.js 以及 Redis ，如果你有 Scoop 管理器，可以很方便的安装

```powershell
scoop install mongodb redis nodejs-lts
```
如果你没有 Scoop 作为包管理器，接下来带你手动下载安装，并处理环境变量问题(可选)

### 安装 MongoDB

官方链接如下 [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

下载最新版本的 `msi` 安装包 ，安装，一路下一步即可。

启动 MongoDB 的方式也很简单，直接双击 MongoDB 安装目录下的 `mongod.exe` 即可；不过一般情况下 MongoDB 默认会作为服务启动。

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/windows-mongodb.png)

### 安装 Redis

Redis 对 Windows 的原生支持停留在了 3.x 版本，不过有人实现了部分 POSIX 接口标准，以此来复刻实现 Windows 版本的 Redis。

[https://github.com/tporadowski/redis/releases](https://github.com/tporadowski/redis/releases)

下载 `msi` 安装包，一路下一步即可

启动的 Redis 的方式也很简单，直接双击 Redis 安装目录下的 `redis-server.exe` 即可

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/windows-redis-server.png)

当然如果你觉得这样启动麻烦，你可以创建快捷方式，或者将两者的执行目录添加到 Windows 环境变量

### 安装 Node.js

我们可以在官网上下载 Node.js 安装包，链接如下 [https://nodejs.org/en/](https://nodejs.org/en/) ，下载 16.x 版本，一路下一步即可。当你安装完成后，请自行把 Node.js 的执行目录添加到 Windows 环境变量，如果你不会，请自行搜索

当你添加完成后，我们需要安装 pm2 pnpm yarn

```powershell
npm i -g pm2 pnpm yarn
```


### 安装 msvc 编译环境

msvc 编译环境，目前获取的渠道只有使用 VS 安装 C++ 的桌面开发环境才能获得

所以，我们去 VS 官网下载 VS 的构建工具，链接如下 [https://visualstudio.microsoft.com/zh-hans/downloads/](https://visualstudio.microsoft.com/zh-hans/downloads/)

我们仅需安装以下功能组件即可

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/vs-install-msvc.png)

### 拉取仓库


首先，你得自行安装 git

在你喜欢的地方打开 powershell / cmd / other terminal

```powershell
git clone https://github.com/mx-space/core.git --depth 1
```

或者下载 [`core` 的稳定发行包](https://github.com/mx-space/core/releases)  `Source code (zip)` ，解压到你喜欢的地方

### 安装依赖

```powershell
pnpm i
```

修改允许的域名

移动到 /src/app.config.ts 文件

13-30 行的内容如下

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

### 构建 & 启动

构建

```powershell
pnpm build
```
使用 pm2 托管 Core ，我们还需要修改一下脚本，移动到 `ecosystem.config.js`

它看起来是如下内容

```js
const { cpus } = require('os')
const { execSync } = require('child_process')
const nodePath = execSync(`npm root --quiet -g`, { encoding: 'utf-8' }).split(
  '\n',
)[0]

const cpuLen = cpus().length
module.exports = {
  apps: [
    {
      name: 'mx-server',
      script: 'index.js',
      autorestart: true,
      exec_mode: 'cluster',
      watch: false,
      instances: cpuLen,
      max_memory_restart: '200M',
      args: '--color',
      env: {
        NODE_ENV: 'production',
        NODE_PATH: nodePath,
      },
    },
  ],
}
```

将 12 行的 `index.js` 修改为 `dist/src/main.js` ，即把 `ecosystem.dev.config.js` 的内容复制过去

看起如下

```js
const { cpus } = require('os')
const { execSync } = require('child_process')
const nodePath = execSync(`npm root --quiet -g`, { encoding: 'utf-8' }).split(
  '\n',
)[0]

const cpuLen = cpus().length
module.exports = {
  apps: [
    {
      name: 'mx-server',
      script: 'dist/src/main.js',
      autorestart: true,
      exec_mode: 'cluster',
      watch: false,
      instances: cpuLen,
      max_memory_restart: '200M',
      args: '--color',
      env: {
        NODE_ENV: 'production',
        NODE_PATH: nodePath,
      },
    },
  ],
}
```

使用 pm2 托管

```powershell
pnpm prod:pm2

# 或者

pm2 start
```
## 安装 kami

### 拉取仓库

在你喜欢的地方打开 powershell / cmd / other terminal

```powershell
git clone https://github.com/mx-space/kami.git --depth 1
```
或者下载 [`kami` 的稳定发行包](https://github.com/mx-space/kami/releases)  `Source code (zip)` ，解压到你喜欢的地方

### 安装依赖

由于使用 `pnpm` 会存在目录链接，符号链接等，极易出现权限问题，导致构建失败，故这里采用 `yarn` 作为依赖管理器

```powershell
yarn 
```

### 配置

将 `.env.example` 复制并重命名为 `.env` ，编辑内容如下

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


### 构建

```powershell
yarn build
```

### 启动 kami

在 Kami 的目录下，打开 powershell / cmd / other terminal

```powershell
npx next start -p 2323
```
该终端窗口不能关闭，否则前端将会关闭，你可以把它最小化

## 存在的问题

- Core：
  - 备份功能失效
  - 评论模板编辑功能失效
  - 终端功能可能失效
  - 任务功能无法查看，但是可能运行正常
