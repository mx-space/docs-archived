# Mix Space Core 部署

::: tip
推荐使用 Docker Compose 部署整个环境。[请点这里](/deploy/)
:::

## 视频教程

<iframe src="//player.bilibili.com/player.html?aid=897657356&amp;cid=753224871&amp;page=1" scrolling="no" allowfullscreen="true" style="width: 100%; height: 35em; height: 60vmin"> </iframe>


## 域名解析

国内服务器请完成备案后再进行。

本文档示例域名：

`Mix Space Core` : `server.test.cn`

`kami` : `www.test.cn`

## 准备环境

### 系统

::: warning
❗ 注意：文档未考虑对 Windows 的支持工作，Windows 的使用者请自行处理兼容性问题；

Linux 内核版本 > 4.18，建议使用 5.X 版本的内核；内存 > 1 GiB ！
:::

例如 Ubuntu、Debian 最新版等等，不建议使用 CentOS（终究是要停更的）。

**推荐使用较高版本的 Linux 内核。如果你是腾讯轻量服务器用户，你可以选择 docker（Ubuntu20.04）的应用镜像。**

### 安装面板

安装[宝塔面板](https://www.bt.cn/bbs/thread-19376-1-1.html)，在宝塔面板—软件商店，安装 `pm2管理器` ，`Nginx`。

Node 版本选择 Node 16.X ，稳定版本是 Node 16.15.x

Debian / Ubuntu ，RedHat 系同理（自行参考）。

```bash
sudo apt update && sudo apt install git curl vim wget git-lfs -y
```

安装相关软件

```bash
# 安装相关软件
sudo su
npm install -g pnpm pm2
# 如果安装比较慢，可以使用以下命令切换镜像源
npm config set registry http://mirrors.cloud.tencent.com/npm/
```

### 新建网站并配置 SSL

在宝塔面板上新建以上网站，部署好 SSL 证书并开启强制 HTTPS

::: danger
🧨 警告：前端要求强制 HTTPS，未配置 SSL 将无法正常访问。
:::

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

wget https://github.com/docker/compose/releases/download/v2.6.0/docker-compose-linux-x86_64

#(备用) wget https://download.fastgit.org/docker/compose/releases/download/v2.6.0/docker-compose-linux-x86_64

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



## 安装 Core

### 准备

为了方便管理建议将 `docker-compose.yml` 放到 `mx-space/server` 下

```bash
cd

mkdir -p mx-space/server

cd mx-space/server

wget https://fastly.jsdelivr.net/gh/mx-space/core@master/docker-compose.yml

wget https://fastly.jsdelivr.net/gh/mx-space/core@master/.env.example -O .env
```

用宝塔或者 `vim` 编辑这个 `.env` 文件，文件示例如下

```
# THIS ENV FILE EXAMPLE ONLY FOR DOCKER COMPOSE
# SEE https://docs.docker.com/compose/environment-variables/#the-env-file
JWT_SECRET=7294c34e0b28ad28          #此处填写一个长度不小于16个字符，不大于32个字符的字符串，示例如：hash 的 md5 值
ALLOWED_ORIGINS=test.cn,www.test.cn  #此处填写被允许的域名，通常是kami的域名，如果允许多个域名访问，用英文逗号,分隔
```

### 生成容器

```bash
# 拉取最新镜像

sudo docker compose pull

# 启动容器

sudo docker compose up -d
```

## 反向代理

### Mix Space Core

进入宝塔面板—网站，设置后端网站（server.test.cn)

我们点击左侧的 `配置文件`（网站设置）

在 `access_log` 字段上面，添加如下配置:

```nginx
#PROXY-START/
location /socket.io {
    proxy_http_version 1.1;
    proxy_buffering off;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_pass http://127.0.0.1:2333/socket.io;
}


location /
{
    proxy_pass http://127.0.0.1:2333/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;

    add_header X-Cache $upstream_cache_status;

    #Set Nginx Cache


    set $static_fileJsNv8TWb 0;
    if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
    {
    	set $static_fileJsNv8TWb 1;
    	expires 12h;
        }
    if ( $static_fileJsNv8TWb = 0 )
    {
    add_header Cache-Control no-cache;
    }
}

#PROXY-END/
```

保存即可。

然后那么局部配置文件示例如下：

```nginx
#PROXY-START/
location /socket.io {
    proxy_http_version 1.1;
    proxy_buffering off;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_pass http://127.0.0.1:2333/socket.io;
}


location /
{
    proxy_pass http://127.0.0.1:2333/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;

    add_header X-Cache $upstream_cache_status;

    #Set Nginx Cache


    set $static_fileJsNv8TWb 0;
    if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
    {
    	set $static_fileJsNv8TWb 1;
    	expires 12h;
        }
    if ( $static_fileJsNv8TWb = 0 )
    {
    add_header Cache-Control no-cache;
    }
}

#PROXY-END/
    access_log  /www/wwwlogs/server.test.cn.log;
    error_log  /www/wwwlogs/server.test.cn.log;
}
```

## 初始化

访问 `https://server.test.cn/proxy/qaqdmin` 来进行初始化，否则前端将会出现异常报错。

