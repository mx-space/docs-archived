# 初次使用说明

# 前提

 - 已完成 Mix-Space 的部署
 - 域名已经解析到对应的服务器，国内用户请备案

# 反向代理

使用[预设脚本部署整个环境](#整个环境)的用户，请跳过反向代理这一节

通常情况下，使用 Caddy2 或者 Nginx 都可以很好的完成反向代理

本节内容以 Nginx 举例

如果你想单个域名部署前后端，[配置文件示例](https://github.com/mx-space/docker/blob/master/configs/nginx.conf)

## 安装 Nginx

考虑到读者水平，这里建议使用宝塔面板安装 Nginx

 - 安装[宝塔面板](https://www.bt.cn/new/download.html)

 - 在宝塔面板 — 软件商店，安装 Nginx

## 反向代理后端

新建网站，例如 server.test.cn 并安装好 SSL 证书

我们点击左侧的 配置文件（网站设置）

在 error_log 这行下面，添加如下配置

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

或者也可以像视频一样在 网站设置-反向代理 处添加一个目标 URL 为 http://127.0.0.1:2333 的反代后再直接用上面的内容覆盖原来的反代配置文件。

然后那么局部配置文件示例如下

```nginx
  access_log  /www/wwwlogs/server.test.cn.log;
    error_log  /www/wwwlogs/server.test.cn.log;
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
## 反向代理前端

新建网站，例如 server.test.cn 并安装好 SSL 证书

我们点击左侧的 配置文件（网站设置）

在 error_log 这行下面，添加如下配置

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
或者也可以像视频一样在 网站设置-反向代理 处添加一个目标 URL 为 http://127.0.0.1:2323 的反代后再直接用上面的内容覆盖原来的反代配置文件。

那么局部配置文件示例如下
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