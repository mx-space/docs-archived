# 使用 1Panel 部署

## 前言

[1Panle](https://1panel.cn) 是一个现代化、开源的 Linux 服务器运维管理面板。

在本篇章是从网站部署到 1Panel 的过程，步骤和宝塔只有细微区别，可以简单完成平替宝塔面板。

## 前提

- 已完成 Mix Space 的部署并且运行正常。
- 域名已经解析到对应的服务器，国内用户请备案。

## 1Panel

首先使用安装 1Panel，这里 Ubuntu 和 Debian 的操作略有不同。

```bash
# Ubuntu
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh

# Debian
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
```

在完成初始化后，面板 - 应用商店 - Web 服务器 中安装 `OpenResty`。

因为使用 Docker 容器，免去了编译过程，非常快速的就完成了 Web 服务器的搭建。

## 反向代理后端

再到网站中创建网站，网站类型选择 `反向代理` ，这里的主域名就是你的后端地址。

创建网站，填入主域名处，例如 server.test.cn

代理地址填写 `http://127.0.0.1:2333` 确认后返回到网站列表，点击创建好的网站的配置。

这里将事先准备好的 TLS/SSL 证书放入 HTTPS 的选项中，这里就选择手动导入证书，当然你后续也可以绑定一个新的密钥证书地址在配置文件中。

填写完成后点击保存，提示更新成功即可进入配置反向代理阶段。

在网站配置栏找到 `配置文件` 这里就是 OpenResty 的 Nginx 配置文件了

配置文件在中找到 location / { proxy_pass http://127.0.0.1:2333/ } 这三行完全替换以下配置：

```nginx
    location /socket.io {
        proxy_buffering off; 
        proxy_pass http://127.0.0.1:2333/socket.io; 
    }
    location / {
        proxy_pass http://127.0.0.1:2333/; 
        proxy_set_header REMOTE-HOST $remote_addr; 
        add_header X-Cache $upstream_cache_status; 
        #Set Nginx Cache
        set $static_fileJsNv8TWb 0; 
        if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" ) {
            set $static_fileJsNv8TWb 1; 
            expires 12h; 
        }
        if ( $static_fileJsNv8TWb = 0 ) {
            add_header Cache-Control no-cache; 
        }
    }
```

保存并重载无报错提示即可。

## 反向代理前端

按照上诉步骤创建如 www.test.cn 的反向代理网站

代理地址填写 `http://127.0.0.1:2323` 确认后返回到网站列表，点击创建好的网站的配置。

- 如你使用泛域名证书这里的 TLS/SSL 证书是可以完全复用的，点击 SSL 选项 `选择已有证书` 导入即可。

- 如没有泛域名证书这里还是手动添加你的证书密钥以及证书。

填写完成后点击保存，提示更新成功即可进入配置反向代理。

在配置文件中找到 location / { proxy_pass http://127.0.0.1:2323/ } 这三行完全替换以下配置：

```ngnix
location ~* \/(feed|sitemap|atom.xml)
    {
        proxy_pass http://127.0.0.1:2333/$1;
        proxy_set_header REMOTE-HOST $remote_addr;
        add_header X-Cache $upstream_cache_status;
        add_header Cache-Control max-age=60;
    } 
    
    location /
    {
        proxy_pass http://127.0.0.1:2323;
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
```

保存并重载无报错提示即可。

## 继续

本章基于 1Panel 的教程就完成了，请继续 [进行后台设置](https://mx-space.js.org/use/#%E5%90%8E%E5%8F%B0%E8%AE%BE%E7%BD%AE) ~~
