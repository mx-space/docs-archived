# Docker 部署

>  使用 Docker Compose 可以很容易的部署整个环境。

::: warning
❗ 注意：文档未考虑对 Windows 的支持工作，Windows 的使用者请自行处理兼容性问题；
        

​      Linux 内核版本 > 4.18，建议使用 5.X 版本的内核；内存 > 1 GiB ！
:::

其他安装方法：[从零开始·Core 部署](/deploy/core/core.md)，如果遇到自己不能解决的问题，参阅文档无果后，请提 [issue](https://github.com/mx-space/docs/issues)！

## 准备


### 安装 docker

```bash
sudo curl -fsSL https://get.docker.com | bash -s docker
# 如果安装比较慢，推荐使用以下命令
sudo curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
# 或者使用国内 daocloud 一键安装命令
sudo curl -SSL https://get.daocloud.io/docker | sh
```

### 安装 docker-compose

```bash
# 下载 docker-compose
wget https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-linux-x86_64
#(备用) wget https://download.fastgit.org/docker/compose/releases/download/v2.5.0/docker-compose-linux-x86_64
# 新建文件夹（非必须），可能需要
sudo mkdir -p /usr/local/lib/docker/cli-plugins/
# 复制到指定位置
sudo cp ./docker-compose-linux-x86_64  /usr/local/lib/docker/cli-plugins/docker-compose
# 赋予执行权限
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
```

检查是否安装完成

```bash
docker compose version
```

正常输出版本号即可。

### 安装 Node.js 和 zx

```bash
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
# 如果无法访问 Github raw 的话就执行下面这条命令
# curl -L https://github.do/https://raw.githubusercontent.com/tj/n/master/bin/n -o n
export N_PREFIX=$HOME/.n
export PATH=$N_PREFIX/bin:$PATH
# export N_NODE_MIRROR=https://npmmirror.com/mirrors/node  #如果官方源下载慢的话可以执行这条换国内源
bash n lts
export N_PRESERVE_NPM=1
npm i -g npm@latest
npm i -g yarn zx pnpm n
```

## 克隆仓库

```bash
git clone https://github.com/mx-space/docker --depth=1
```

## 部署整个环境

所部署的环境：kami + mx-server + caddy2

在此之前，你需要把域名指向当前服务器 IP。

```bash
cd docker
npm install
zx ./build.mjs
```

实例输入：

```
你的域名为：（需要提前绑定）: innei.ren
你的邮箱为: (若该步留空，则不部署 Caddy 服务): tukon@gmail.com
是否部署 Caddy 2.0？ (y/n): y
```

待流程执行完毕，进入 `https://你的域名/proxy/qaqdmin`  

建议：

移动到页面，新建两个页面 第一个路由为 `message`  ，第二个路由为 `about` ，标题任意。

## 仅部署服务和主站前端

所部署的环境：kami + mx-server

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

待流程执行完毕，进入 `http://127.0.0.1:2333/proxy/qaqdmin`。

## 仅部署服务

```bash
wget https://fastly.jsdelivr.net/gh/mx-space/mx-server@master/docker-compose.yml
docker compose up -d
```

待流程执行完毕，进入 `http://127.0.0.1:2333/proxy/qaqdmin`。
