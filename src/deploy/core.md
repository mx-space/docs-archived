# 部署 Core

一般情况下，我们推荐使用 Docker 进行部署，步骤非常简单。

## Docker 部署

```bash
# 新建文件夹
cd && mkdir -p mx-space/core && cd $_

# 拉取docker-compose.yml 文件
wget https://fastly.jsdelivr.net/gh/mx-space/core@master/docker-compose.yml

# 拉取 Core 配置文件
wget https://fastly.jsdelivr.net/gh/mx-space/core@master/.env.example -O .env
```

我们编辑 .env 文件，它看起来应该是这个样子的：

```txt
# THIS ENV FILE EXAMPLE ONLY FOR DOCKER COMPOSE
# SEE https://docs.docker.com/compose/environment-variables/#the-env-file
JWT_SECRET=7294c34e0b28ad28          #此处填写一个长度不小于 16 个字符，不大于 32 个字符的字符串
ALLOWED_ORIGINS=test.cn,www.test.cn  #此处填写被允许的域名，通常是 kami 的域名，如果允许多个域名访问，用英文逗号，分隔

#（可选）加密密钥，具体内容可参考 https://mx-space.js.org/feature/security.html
# 若开启加密，则需注意密钥长度必须为 64 位，不然会在初始化时报错
# 注意这是不可逆的，务必保存自己的秘钥。所以并不是非常推荐使用，除非你真的需要加密。
ENCRYPT_KEY=593f62860255feb0a914534a43814b9809cc7534da7f5485cd2e3d3c8609acab
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

## 从源码进行部署

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

如果你想这样部署 Core 并对外提供服务，请移动到 `/src/app.config.ts` 文件。

其中，按照 17-26 行一样，类比，追加你的域名。

例如，我想要添加 `server.example.com` ，那么仅仅这样追加一行即可。

```js
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
        'server.example.com', // 追加的新域名 // [!code ++]
      ],

  // allowedReferer: 'innei.ren',
}
```

构建 & 启动

```bash
pnpm bundle
```

使用 pm2 托管 Core，我们还需要修改一下脚本，移动到 `ecosystem.config.js`

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
      script: 'index.js', // [!code --]
      script: 'out/index.js', // [!code ++]
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

## 视频

很高兴，我们的文档贡献者提供了视频教程；建议配合本文档进行操作：

<iframe src="https://api.paugram.com/bili?bv=BV14N4y137ZW&style=gray" style="height: 176px; width: 100%"></iframe>
