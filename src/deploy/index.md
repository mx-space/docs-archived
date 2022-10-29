---
title: 部署 Mix Space
---

# 开始

:::tip
在看完介绍后你一定很想尝试部署 Mix Space!

那本节内容带你完成部署，请有耐心的一点点看完。
:::

## 前置

- 前置要求：
  - 后端示例域名：`server.test.cn`
  - 前端示例域名：`www.test.cn`
  - 操作系统：建议**最新的 Ubuntu / Debian** ，或其他 **Linux 内核版本不小于 `4.19`** 的发行版本；如果你想在 **Windows 部署**，请看这里 [Windows 安装 Mix Space](/deploy/windows.md)
  - Linux 内核版本：**不小于 4.19 ，建议 5.x**
  - 内存建议：**大于 1 GiB**
- 内存要求说明：
  - 构建需要的内存：**大于 1 GiB**
  - 运行需要的内存：**不小于 768 MiB**

:::danger
使用小于 `4.19` 版本的 Linux 内核将无法正常部署 Kami
:::

---

# 环境准备

## 检查 Linux 内核版本

打开终端，输入以下命令：

```bash
uname -r
```

应该返回如下内容：

```bash
➜  ~ uname -r
6.0.2-2-MANJARO
```

可以看到，我的内核版本是 6.0 ，大于 4.19 ，所以可以正常部署 Kami。

再次强调，**Linux 内核版本不小于 4.19** 才能构建 Kami，如果你的 Linux 内核版本不满足，或许你可以考虑一下最新版本的 Ubuntu / Debian？

## 安装软件包

Debian / Ubuntu

```bash
apt update && apt install git curl vim wget git-lfs -y
```

CentOS

```bash
yum check-update && yum install git curl vim wget git-lfs -y
```

## 安装 Docker

SSH 连接到服务器，使用一键脚本，可以便捷地安装 Docker 和 Docker Compose：

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

:::warning
该过程可能比较慢（受限于你的服务器配置和网络），请不要断开 SSH 连接；该脚本仅支持 Debian，Ubuntu，CentOS，其他系统请自行安装。
:::

## 安装 nvm (可选)

nvm 可以用于管理 Node.js。

打开终端，使用一键脚本，可以便捷地安装 nvm：

```bash
bash -c "$(curl -fsSL https://gitee.com/RubyKids/nvm-cn/raw/master/install.sh)"
```

重启终端即可生效

安装 Node.js 最新的 LTS 版本：

```bash
nvm install --lts
```

安装需要的模块：

```bash
npm i -g pnpm pm2
```

---

# 部署系统

Mix Space 目前支持以下安装方法：

[**一键 Docker 部署**](#一键-docker-部署)：最快的方式。

[**使用预设脚本部署**](#使用预设脚本部署)：安装方便，但是前端可以修改的地方非常有限。

[**手动部署**](#手动部署)：安装略微麻烦，前端可以修改任意地方更细分，更新频率最快。

## 一键 Docker 部署

```bash
bash <(curl -s https://fastly.jsdelivr.net/gh/mx-space/docker@master/install.sh)>
```

## 使用预设脚本部署

克隆仓库。

```bash
cd && mkdir mx-space && cd mx-space
git clone https://github.com/mx-space/docker --depth=1

# 如果克隆缓慢，可以使用以下镜像地址
git clone https://github.1qi777.com/mx-space/docker.git --depth 1
```

### 整个环境

所部署的环境：Kami + Core + Caddy2。

在此之前，你需要将域名解析完毕。

使用一键脚本：

```bash
cd docker
bash install.sh
```

实例输入：

```bash
你的域名为：（需要提前绑定）: innei.ren
你的邮箱为: (若该步留空，则不部署 Caddy 服务): tukon@gmail.com
是否部署 Caddy 2.0？ (y/n): y
```

待流程执行完毕，进入 `https://server.test.cn/proxy/qaqdmin` ，进行初始化。

### 仅部署服务和主站前端

所部署的环境：Kami + Core。

你不需要 IP 指向。但是需要手动处理服务器反代。

使用一键脚本：

```bash
cd docker
bash ./build.sh
```

实例输入：

```bash
你的域名为：（需要提前绑定）: innei.ren
你的邮箱为: (此步留空，则不部署 Caddy 服务):
```

待流程执行完毕，进入 `http://127.0.0.1:2333/proxy/qaqdmin`。

## 手动部署

手动部署，是使用最多的部署方式，如果后续需要魔改前端，推荐使用手动部署。

### 视频

很高兴，我们的文档贡献者提供了视频教程；建议配合本文档进行操作：

<iframe src="https://api.paugram.com/bili?bv=BV14N4y137ZW&style=gray" style="height: 176px; width: 100%"></iframe>

---

### 部署 Core

一般情况下，我们推荐使用 Docker 进行部署，步骤非常简单。

---

#### Docker 部署

```bash
# 新建文件夹
cd && mkdir -p mx-space/core && cd $_

# 拉取docker-compose.yml 文件
wget https://fastly.jsdelivr.net/gh/mx-space/core@master/docker-compose.yml

# 拉取 Core 配置文件
wget https://fastly.jsdelivr.net/gh/mx-space/core@master/.env.example -O .env
```

我们编辑 .env 文件，它看起来应该是这个样子的：

```text
# THIS ENV FILE EXAMPLE ONLY FOR DOCKER COMPOSE
# SEE https://docs.docker.com/compose/environment-variables/#the-env-file
JWT_SECRET=7294c34e0b28ad28          #此处填写一个长度不小于16个字符，不大于32个字符的字符串
ALLOWED_ORIGINS=test.cn,www.test.cn  #此处填写被允许的域名，通常是kami的域名，如果允许多个域名访问，用英文逗号,分隔
```

如此，就可以了，接下来我们启动后端：

```bash
docker compose up -d
```

我们可以查看后端是否正常运行：

```bash
curl  http://127.0.0.1:2333/api/v2
```

返回如下内容，认为正常：

```bash
➜  ~ curl  http://127.0.0.1:2333/api/v2
{"name":"@mx-space/core","author":"Innei <https://innei.ren>","version":"3.36.4","homepage":"https://github.com/mx-space/core#readme","issues":"https://github.com/mx-space/core/issues"}
```

---

#### 从源码进行部署

:::tip
如果你不对 Core 进行修改，建议使用 [Docker 部署](/deploy/index.md#docker-部署) ，当然，您如果有一些有意思的想法，欢迎提 issue。
:::

拉取源代码：

```bash
git clone https://github.com/mx-space/core.git --depth 1
```

安装依赖：

```bash
pnpm i
```

本地开发：

```bash
pnpm dev
```

如果你想这样部署 Core 并对外提供服务 ，请移动到 `/src/app.config.ts` 文件。

它 13-30 行的内容如下，看起来似乎是这样的：

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

其中，按照 17-26 行一样，按照格式，追加你的域名。

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
pnpm bundle
```

使用 pm2 托管 Core ，我们还需要修改一下脚本，移动到 `ecosystem.config.js`

它看起来是如下内容：

```js
const { cpus } = require('os')
const { execSync } = require('child_process')
const nodePath = execSync(`npm root --quiet -g`, { encoding: 'utf-8' }).split(
  '\n'
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

将 12 行的 `index.js` 修改为 `out/index.js`。

看起来如下：

```js
const { cpus } = require('os')
const { execSync } = require('child_process')
const nodePath = execSync(`npm root --quiet -g`, { encoding: 'utf-8' }).split(
  '\n'
)[0]

const cpuLen = cpus().length
module.exports = {
  apps: [
    {
      name: 'mx-server',
      script: 'out/index.js',
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

使用 PM2 托管：

```bash
pm2 start

# 或者

pnpm prod:pm2
```

---

### 部署 Kami

Kami 是 Mix Space 的默认前端，不过如果你想尝试其他风格的话，可以去 [mx-web-yun](https://github.com/mx-space/mx-web-yun) 看看。

#### 拉取源文件

```bash
cd && cd mx-space
git clone https://github.com/mx-space/kami.git --depth 1

# 如果克隆缓慢，可以使用下面的镜像地址
git clone https://github.1qi777.com/mx-space/kami.git --depth 1
```

#### 切换到最新的 tag

```bash
cd kami && git fetch --tags && git checkout $(git rev-list --tags --max-count=1)
```

#### 拉取图片文件

```bash
git lfs fetch --all

git lfs pull
```

注意：如果无法正常拉取，可以到 GitHub 上手动下载文件并放到相应目录。

#### 配置文件

复制 .env.example 为 .env

```bash
cp .env.example .env
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

这里选用 pnpm 作为包管理器。

```bash
# 安装必需的模块
pnpm i
# 构建
pnpm build
```

#### 启动前端

```bash
pnpm prod:pm2
# 可选
pm2 start
```

我们可以查看前端是否正常运行：

```bash
curl http://127.0.0.1:2323
```

如果有返回数据，则认为正常。

## 下一步

[开始使用~](/use/index.md)

## 可能需要(可选)

:::tip
以下内容是可选的，如果你不需要，可以跳过；在正常情况，你不需要这些内容。
:::

## 后台单独部署

在正常情况下，你不需要单独部署后台，因为后台已经被打包到了后端中。

如果你有以下需求：

- 想使用其他域名作为后台地址
- 想使用其他端口作为后台地址

那么你可以选择单独部署后台，或者你可以参考 [后台反向代理配置](/use/index.md#后台自定义反向代理)。

### 拉取源文件

```bash
cd mx-space

git clone https://github.com/mx-space/mx-admin.git --depth 1
```

### 修改配置文件

移动到 `.env.production` 文件，去掉 `VITE_` 前缀的注释符号，然后修改为你的配置。

例如：

```text
VITE_APP_BASE_API=https://server.test.cn/api/v2
VITE_APP_WEB_URL=https://www.test.cn
VITE_APP_GATEWAY=https://server.test.cn
# # VITE_APP_PUBLIC_URL=https://fastly.jsdelivr.net/gh/mx-space/admin-next@gh-pages/
```

其他可以定义的配置在文件 `/src/configs.ts` 中。

### 构建

::: warning
构建 mx-admin 需要的内存至少为 2 Gib ，如果你服务器内存不足，你可以在本地构建成功后，将产物上传到服务器。

在 Windows 系统上，mx-admin 无法正常构建，你可以使用 WSL2 或者 Linux 系统。
:::

```bash
pnpm i

pnpm build
```

### 部署产物

构建生成的产物在 dist 目录下，你可以直接把它们移动到你准备好的后台网站的根目录下。

假设你准备的后台网站域名是 `admin.test.cn`，

网站根目录为 `/var/www/admin.test.cn/`，

那么，你把 dist 目录下的所有文件移动到 `/var/www/admin.test.cn/` 目录下即可。

### 修改后端配置

编辑 Core 的 `.env` 文件，修改 `ALLOWED_ORIGINS` ，添加你的后台域名。

示例域名为 `admin.test.cn` 。

例如：

```text
# THIS ENV FILE EXAMPLE ONLY FOR DOCKER COMPOSE
# SEE https://docs.docker.com/compose/environment-variables/#the-env-file
JWT_SECRET=7294c34e0b28ad28          #此处填写一个长度不小于16个字符，不大于32个字符的字符串
ALLOWED_ORIGINS=test.cn,www.test.cn,admin.test.cn
```

然后重新启动 Core 即可：

```bash
docker compose up -d
```

## 对 Redis 配置

如果你需要使用来自(远端 / 非容器)的 Redis 服务，你可以通过使用 `argv` 来动态传入对应的配置项。

支持传入如下值：

- `redis_host` Redis 服务地址，域名、IP 都可以
- `redis_port` Redis 服务端口
- `redis_password` Redis 服务密码

在默认情况下，我们认为这样已经足够了。

### 对于 Docker 部署

编辑 `docker-compose.yml` 文件，变更 `command` 这项内容，添加你需要传入的值，以传入 `redis_host` 和 `redis_password` 为例，如下所示：

```yaml
version: '3.8'

services:
  app:
    container_name: mx-server
    image: innei/mx-server:latest
    command: node index.js --redis_host=远端地址 --db_host=mongo --redis_password=redis?passwd --allowed_origins=${ALLOWED_ORIGINS} --jwt_secret=${JWT_SECRET} --color
```

然后重新创建容器即可生效：

```bash
docker compose up -d
```

### 对于源码部署

针对这种部署方式，我们可以修改 `ecosystem.config.js` 在 12 行，也就是 `script` 这一项，添加你需要传入的值，如下所示：

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
      script: 'out/index.js --redis_host=远端地址 --redis_password=redis?passwd',
      autorestart: true,
      exec_mode: 'cluster',
```

当然，我们也可以修改源码，修改对应的配置项，这样就可以不用传入了。

移动到 `/src/app.config.ts` 文件，在 47 行左右，修改对应的配置项：

```ts
export const REDIS = {
  host: argv.redis_host || '远端',
  port: argv.redis_port || 6379,
  password: argv.redis_password || 'redis?passwd',
  ttl: null,
  httpCacheTTL: 5,
  max: 5,
  disableApiCache:
    (isDev || argv.disable_cache) && !process.env['ENABLE_CACHE_DEBUG'],
}
```

当你修改完成，你需要重新构建，并重启服务：

```bash
pnpm bundle

pnpm prod:pm2
```

## 对 MongoDB 配置

如果你需要使用来自(远端 / 非容器)的 MongoDB 服务，你可以通过使用 `argv` 来动态传入对应的配置项。

支持传入如下值：

- `collection_name` 数据库集合名字
- `db_host` MongoDB 服务地址，域名、IP 都可以
- `db_port` MongoDB 服务端口
- `db_user` MongoDB 服务用户名
- `db_password` MongoDB 服务密码

::: warning
如果你需要使用密码登录，你不仅仅需要传入 password ，还需要传入 user，建议你对数据库集合划分好用户权限
:::

### 对于 Docker 部署

编辑 `docker-compose.yml` 文件，变更 `command` 这项内容，添加你需要传入的值，以传入 `db_host` `db_user` 和 `db_password` 为例，如下所示：

```yaml
version: '3.8'

services:
  app:
    container_name: mx-server
    image: innei/mx-server:latest
    command: node index.js --redis_host=redis --db_host=远端地址 --db_user=mongodb-test --db_password=db?passwd --allowed_origins=${ALLOWED_ORIGINS} --jwt_secret=${JWT_SECRET} --color
```

然后我们重启创建容器即可：

```
docker compose up -d
```

### 对于源码部署

和 Redis 一样，我们可以修改 `ecosystem.config.js` 在 12 行，也就是 `script` 这一项，添加你需要传入的值，如下所示：

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
      script: 'out/index.js --db_host=远端地址 --db_user=mongodb-test --db_password=db?passwd',
      autorestart: true,
      exec_mode: 'cluster',
```

当然，我们也可以修改源码，修改对应的配置项，这样就可以不用传入了。

移动到 `/src/app.config.ts` 文件，在 32 行左右，修改对应的配置项：

```ts
export const MONGO_DB = {
  dbName: argv.collection_name || (DEMO_MODE ? 'mx-space_demo' : 'mx-space'),
  host: argv.db_host || '远端',
  port: argv.db_port || 27017,
  user: argv.db_user || 'mongodb-test',
  password: argv.db_password || 'db?passwd',
  get uri() {
    let userPassword =
      this.user && this.password ? this.user + ':' + this.password + '@' : ''
    return `mongodb://${userPassword}${this.host}:${this.port}/${
      isTest ? 'mx-space_unitest' : this.dbName
    }`
  },
}
```

当你修改完成，你需要重新构建，并重启服务：

```bash
pnpm bundle

pnpm prod:pm2
```
