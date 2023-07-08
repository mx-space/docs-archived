# 更多自定义配置

:::tip
以下内容是可选的，如果你不需要，可以跳过；在正常情况，你不需要这些内容。
:::

## 对 Redis 配置

如果你需要使用来自 (远端 / 非容器) 的 Redis 服务，你可以通过使用 `argv` 来动态传入对应的配置项。

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
      script: 'out/index.js, // [!code --]
      script: 'out/index.js --redis_host=远端地址 --redis_password=redis?passwd', // [!code ++]
      autorestart: true,
      exec_mode: 'cluster',
```

当你修改完成，你需要重启服务：

```bash
pnpm prod:pm2
```

## 对 MongoDB 配置

如果你需要使用来自 (远端 / 非容器) 的 MongoDB 服务，你可以通过使用 `argv` 来动态传入对应的配置项。

支持传入如下值：

- `collection_name` 数据库集合名字
- `db_host` MongoDB 服务地址，域名、IP 都可以
- `db_port` MongoDB 服务端口
- `db_user` MongoDB 服务用户名
- `db_password` MongoDB 服务密码

::: warning
如果你需要使用密码登录，你不仅仅需要传入 password，还需要传入 user，建议你对数据库集合划分好用户权限
:::

### 对于 Docker 部署

编辑 `docker-compose.yml` 文件，变更 `command` 这项内容，添加你需要传入的值，以传入 `db_host` `db_user` 和 `db_password` 为例，如下所示：

```yaml
version: '3.8'

services:
  app:
    container_name: mx-server
    image: innei/mx-server:latest
    command: node index.js --redis_host=redis --db_host=远端地址 --db_user=mongodb-test --db_password=db?passwd --allowed_origins=${ALLOWED_ORIGINS} --jwt_secret=${JWT_SECRET} --color // [!code ++]
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
      script: 'out/index.js --db_host=远端地址 --db_user=mongodb-test --db_password=db?passwd', // [!code ++]
      autorestart: true,
      exec_mode: 'cluster',
```


当你修改完成，你需要重启服务：

```bash
pnpm prod:pm2
```
