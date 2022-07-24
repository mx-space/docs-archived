# 部署 Kami

::: tip
本文默认您已安装 服务端，若未安装请移步至 [Core 安装](/deploy/core/core.md)，即本节内容从 [Core 安装](/deploy/core/core.md) 继承，所需要的前置内容已经在该节阐明！
:::

## 开始！

## 拉取源文件

```bash
cd

cd mx-space

git clone https://github.com/mx-space/kami.git --depth=1

# 网络不好的情况，请使用下面的命令。

git clone https://hub.fastgit.xyz/mx-space/kami.git --depth=1
```

更换分支到最后一个稳定版本(tag)

```bash
cd kami && git fetch --tags && git checkout $(git rev-list --tags --max-count=1)
```

拉取图片文件

```bash
git lfs fetch --all

git lfs pull
```

注意：如果无法正常拉取，可以到 GitHub 上手动下载文件并放到相应目录。

复制配置文件

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

在 `error_log` 这行下面，添加如下配置:

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

保存即可。或者也可以像视频一样在 网站设置-反向代理 处添加一个目标 URL 为 `http://127.0.0.1:2323` 的反代后再直接用上面的内容覆盖原来的反代配置文件。

然后那么局部配置文件示例如下：

```nginx
    access_log  /www/wwwlogs/www.test.cn.log;
    error_log  /www/wwwlogs/www.test.cn.log;
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

接下来访问 https://www.test.cn/ ，看看运行是否正常，若有不正常请自行参考文档进行解决，或者提 [issue](https://github.com/mx-space/docs/issues)

## PS

在 `Kami` 前端，可以在链接的后面带上 `/login` (例如 https://www.test.cn/login) 或者双击左上角 logo 进行登录，对评论进行操作，例如：置顶，删除，回复....

## 后续

需要的章节 [Kami 设置](/options/)

需要的章节 [云函数配置](/options/serverless.md)
