# 部署 Kami

::: tip
本文默认您已安装 服务端，若未安装请移步至[服务端安装](/deploy/server/server.md)
:::

## 域名解析

国内服务器请完成备案后再进行。

本文档示例域名：

`Mx-Server` : `server.test.cn`

`kami` : `www.test.cn`

## 准备环境

## 系统

::: warning
❗ 注意：文档未考虑对 Windows 的支持工作，Windows 的使用者请自行处理兼容性问题；
        

​      Linux 内核版本 > 4.18，建议使用 5.X 版本的内核；内存 > 1 GiB ！
:::

例如 Ubuntu20.04、Debian 最新版等等，不建议使用 CentOS（终究是要停更的）。

**推荐使用较高版本的 Linux 内核。**

## 拉取源文件

```bash
cd
cd mx-space
git clone https://github.com/mx-space/kami.git
# 网络不好的情况，请使用下面的命令。注：该镜像点同步较慢，且无法拉取 Git LFS 文件。
git clone https://gitee.com/a1435241/kami.git
```

更换分支到最后一个稳定版本

```bash
cd kami && git fetch --tags && git checkout $(git rev-list --tags --max-count=1)
```

拉取图片文件

```bash
git lfs fetch --all
git lfs pull
```

注意：如果无法正常拉取，可以到 GitHub 上手动下载。

执行该命令

```bash
 cp .env.example .env
```

编辑 `.env`，示例如下：

```bash
# API 地址
NEXT_PUBLIC_API_URL=https://server.test.cn/api/v2
# GATEWAY 地址
NEXT_PUBLIC_GATEWAY_URL=https://server.test.cn
#前端使用的配置项名字
NEXT_PUBLIC_SNIPPET_NAME=kami
# 如果使用 CDN, 修改产物前缀
ASSETPREFIX=
```

去掉注释，保存即可。

## 安装依赖

```bash
pnpm i
```

## 构建

```bash
pnpm build
#备用命令
npm run build
```

## pm2 托管（启动）

```bash
npm run prod:pm2
# pm2 start
```

## 反向代理

点击网站—网站，设置前端网站（www.test.cn），

我们点击左侧的 `配置文件`（网站设置）

在 `access_log` 字段上面，添加如下配置:

```nginx
#PROXY-START/

location ^~ /
{
    proxy_pass http://127.0.0.1:2323;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;

    add_header X-Cache $upstream_cache_status;

    #Set Nginx Cache


    set $static_fileSw1Jy3nG 0;
    if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
    {
    	set $static_fileSw1Jy3nG 1;
    	expires 12h;
        }
    if ( $static_fileSw1Jy3nG = 0 )
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

location ^~ /
{
    proxy_pass http://127.0.0.1:2323;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;

    add_header X-Cache $upstream_cache_status;

    #Set Nginx Cache


    set $static_fileSw1Jy3nG 0;
    if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
    {
    	set $static_fileSw1Jy3nG 1;
    	expires 12h;
        }
    if ( $static_fileSw1Jy3nG = 0 )
    {
    add_header Cache-Control no-cache;
    }
}



#PROXY-END/
    access_log  /www/wwwlogs/www.test.cn.log;
    error_log  /www/wwwlogs/www.test.cn.log;
}
```

接下来访问 https://www.test.cn/ ，看看运行是否正常。