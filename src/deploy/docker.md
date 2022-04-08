# 一键式部署

使用 Docker Compose 可以很容易的部署整个环境。

## 准备

开始之前，你需要安装好 Docker 和 Docker Compose，没安装的可参考[此处教程](https://mx-docs.iucky.cn/deploy/bt-panel.html#%E5%AE%89%E8%A3%85-docker)。你还需要安装好 NodeJS 和 zx。

## 安装 zx

```bash
npm install -g zx 
```

然后克隆仓库。

```bash
git clone https://github.com/mx-space/docker --depth=1
```

## 部署整个环境

整个环境：kami + mx-server + caddy2

在此之前，你需要把域名指向当前服务器 IP。

```bash
cd docker
npm install
zx ./build.mjs
```

实例输入：

```
你的域名为：（需要提前绑定）: innei.ren
你的邮箱为: (此步留空，则不部署 Caddy 服务): tukon@gmail.com
是否部署 Caddy 2.0？ (y/n): y
```

待流程执行完毕，进入 `https://你的域名/proxy/qaqdmin`

## 仅部署服务和主站前端

部署的环境：kami + mx-server

你不需要 IP 指向。但是需要手动处理服务器反代。

```bash
cd docker
npm install
zx ./build.mjs
```

实例输入：

```
你的域名为：（需要提前绑定）: innei.ren
你的邮箱为: (此步留空，则不部署 Caddy 服务):
```

待流程执行完毕，进入 127.0.0.1:2333/proxy/qaqdmin。

## 仅部署服务

```bash
wget https://cdn.jsdelivr.net/gh/mx-space/mx-server@master/docker-compose.yml
docker compose up -d
```

待流程执行完毕，进入 127.0.0.1:2333/proxy/qaqdmin。
