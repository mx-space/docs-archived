# 初次使用说明

## 前提

 - 已完成 Mix-Space 的部署
 - 域名已经解析到对应的服务器，国内用户请备案

## 反向代理

使用[预设脚本部署整个环境](https://mx-space.js.org/deploy/index.html)的用户，请跳过反向代理这一节

通常情况下，使用 Caddy2 或者 Nginx 都可以很好的完成反向代理

本节内容以 Nginx 举例

如果你想单个域名部署前后端，[配置文件示例](https://github.com/mx-space/docker/blob/master/configs/nginx.conf)

### 安装 Nginx

考虑到读者水平，这里建议使用宝塔面板安装 Nginx

 - 安装[宝塔面板](https://www.bt.cn/new/download.html)

 - 在宝塔面板 — 软件商店，安装 Nginx

### 反向代理后端

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
### 反向代理前端

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

## 后台设置

进入后台

访问 https://server.test.cn/proxy/qaqdmin

进行初始化

第一次访问可能遇到填写 API 的情况

后端的 API 地址 ： https://server.test.cn/api/v2 (server.test.cn 请换成你自己的，下同)
网关的地址 : https://server.test.cn
### 用户设定

这个应该比较简单，就不再赘述了。但是要注意的是头像的 URL 不要带入其他的参数，否则可能会导致包括但不限于 feed 输出异常。


### 系统设定

#### 网站设置

 - 前端地址：即你之前前端反向代理的站点，例如 https://www.test.cn
 - API 地址：即你之前后端反向代理的站点加上api/v2，例如 https://server.test.cn/api/v2
 - 后台地址：即你现在后台的地址，例如 https://server.test.cn/proxy/qaqdmin
 - Gateway 地址：即后端地址，例如 https://server.test.cn

#### 后台附加设置

高德查询 API key

这个需要在 高德开放平台 上注册并创建应用，大致是这样

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/G7De6D.png)

#### 邮件通知设置

 - 发件邮箱 host : 发送邮件的 smtp 域名，例如：smtp.mxhichina.com

 - 发件邮箱端口：仅能为 465

 - 发件邮箱地址：这是你自己的发信邮箱，例如 no-reply@innei.ren

 - 发件邮箱密码：与邮箱对应的密码

:::warning
注意：该邮箱是给访客评论回复发的通知邮箱，也是给主人发送通知邮件的邮箱，请不要和主人的邮箱搞混！
:::

#### 备份

该功能提供数据库的备份，使用 mongodump 完成这个操作，请确保已安装 mongodb-tools。

同时可以填写腾讯 COS 信息，同时会把备份上传到 COS。

备份是一个计划任务，将会在每天凌晨自动进行。你可以在 其他 - 任务 中看到这个任务。

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/AfN20h.png)

#### 百度推送

该功能提供自动上传站点信息到百度，众所周知百度的收录能力过于糟糕。

你需要先去 [百度站长](https://ziyuan.baidu.com/linksubmit/index) 完成注册，认证你的域名，然后填写 Token。

该功能也是一个 计划任务，一次配置每天推送，无需关心。同样可以在 其他 - 任务 中看到这个任务。
![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/zEgXj5.png)

:::warning
注意 ：请先确保 系统 - 网站设置 - 前端地址 填写正确
:::

#### Algolia Search

Algolia Search 是一个第三方搜索服务。让前端具有搜索功能，该项服务需要在后台填入 Algolia API 才能正常使用。到 [Algolia 官网](https://www.algolia.com/) 注册并新建应用，然后查看用户自己的 [API Key](https://www.algolia.com/account/api-keys/) ，后端具备自动推送功能，建议在后台填入 Admin API Key ，保存即可。

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/algolia.png)

## Kami 设置

配置项用于自定义部分文案和 UI 视觉。

进入后台，移动到 其他 · 配置与云函数

新建一个项:

名字：kami
引用：theme
数据类型：YAML / JSON
公开： 是
参照以下内容，复制到右边的框中，并根据自己的情况进行修改。以下是 YAML 格式的示例，可以根据示例修改。

:::warning
里面有大量的 jsd 链接，请自行做好处理，如果想要更详细的参数，请查看[Kami 配置参数]()
:::
### 配置示例

```YAML
name: kami

site:
  favicon: https://fastly.jsdelivr.net/gh/mx-space/kami@master/public/favicon.svg
  # 开屏图和logo svg 标签, 注意 XSS
  logo_svg: <svg height="200px" viewbox="0 0 200 200" version="1.1" shape-rendering="geometricPrecision"><g stroke="none" strokewidth="1" fill="none" fillrule="evenodd"><g id="forest" fill="currentColor" fillrule="nonzero"><path d="M116.799219,176.953125 C112.484375,176.953125 108.986719,180.450781 108.986719,184.765625 L108.986719,192.1875 C108.986719,196.502344 112.484375,200 116.799219,200 C121.114062,200 124.611719,196.502344 124.611719,192.1875 L124.611719,184.765625 C124.611719,180.450781 121.114063,176.953125 116.799219,176.953125 Z" id="Path"></path><path d="M121.456641,150.248047 C121.298828,150.158203 108.089453,142.472656 101.778125,128.767188 C106.058594,127.733594 109.462109,126.055078 112.442578,124.584766 C115.008203,123.319531 116.671094,120.749609 116.787109,117.891406 C116.903125,115.033203 115.441797,112.336328 112.986719,110.867578 C108.091406,107.937891 96.6117187,99.3179688 91.234375,88.9808594 C94.3324219,88.1222656 97.3414062,86.940625 100.255469,85.734375 C102.819922,84.6730469 104.628906,82.3304688 105.007422,79.5808594 C105.385938,76.83125 104.276953,74.0875 102.094531,72.3722656 C82.3632812,56.8691406 70.0417969,20.1820313 69.9210937,19.8171875 C68.8640625,16.6136719 65.8710938,14.4558594 62.5019531,14.4558594 C62.4839844,14.4558594 62.465625,14.4558594 62.4472656,14.4558594 C59.05625,14.4792969 56.0664063,16.690625 55.0484375,19.925 C54.934375,20.2878906 43.3839844,56.3890625 22.3355469,71.8246094 C20.075,73.4824219 18.8757813,76.2242188 19.1933594,79.0097656 C19.5109375,81.7949219 21.2964844,84.196875 23.8722656,85.303125 C26.1265625,86.2714844 29.5851563,87.7554688 34.3464844,89.0640625 C29.0214844,98.8472656 17.2527344,107.819922 12.2683594,110.952734 C9.7640625,112.517969 8.35625,115.360938 8.63007813,118.301563 C8.90390625,121.242188 10.8117188,123.776953 13.5617188,124.852734 C13.9058594,124.9875 14.2785156,125.1375 14.6828125,125.3 C16.8089844,126.154297 19.7445313,127.332031 23.6902344,128.501953 C17.2066406,141.350391 3.68632813,150.395703 3.53671875,150.494141 C1.09140625,152.094922 -0.25625,154.926563 0.044140625,157.833594 C0.34453125,160.740625 2.2421875,163.237109 4.96328125,164.303906 C5.76640625,164.61875 23.6132813,171.474609 55.471875,172.521875 L55.471875,192.1875 C55.471875,196.502344 58.9695313,200 63.284375,200 C67.5992187,200 71.096875,196.502344 71.096875,192.1875 L71.096875,172.544531 C103.353125,171.572656 119.956641,164.517578 120.696484,164.196094 C123.407422,163.016797 125.221094,160.408984 125.382422,157.457031 C125.542578,154.504688 124.023438,151.714844 121.456641,150.248047 Z M63.6742188,157.03125 C46.6414063,157.03125 33.3425781,155.194922 24.325,153.367578 C29.7734375,147.926953 35.75625,140.533203 39.3648438,131.730859 C44.5152344,132.389453 50.4929688,132.8125 57.4242188,132.8125 C61.7390625,132.8125 65.2367188,129.314844 65.2367188,125 C65.2367188,120.685156 61.7390625,117.1875 57.4242188,117.1875 C46.7472656,117.1875 38.8265625,116.116406 32.8878906,114.769531 C33.4640625,114.256641 34.0460937,113.726953 34.63125,113.180859 C42.2988281,106.020703 47.5574219,98.8085938 50.3394531,91.6605469 C51.3,91.7195313 52.2839844,91.7652344 53.2945313,91.7941406 C57.6179688,91.9210938 61.2035156,88.5207031 61.3269531,84.2082031 C61.45,79.8949219 58.0535156,76.2988281 53.740625,76.1757813 C49.2144531,76.0464844 45.3546875,75.5386719 42.0863281,74.8628906 C51.1160156,64.9648438 57.9273437,52.8929688 62.5585937,43.0527344 C67.1378906,52.8117188 73.746875,64.7949219 82.1886719,74.6710938 C81.9644531,74.6675781 81.74375,74.6566406 81.5277344,74.6382813 C79.1414062,74.4355469 76.7910156,75.3363281 75.1546875,77.0871094 C73.5183594,78.8375 72.7753906,81.2421875 73.1398437,83.6105469 C75.0921875,96.3007813 83.7679687,106.876563 91.5785156,114.065234 C89.2605469,114.0125 87.06875,114.98125 85.5433594,116.714844 C83.9519531,118.523438 83.2839844,120.964844 83.7328125,123.33125 C86.2589844,136.650391 93.8433594,146.823047 100.754297,153.641797 C92.2726562,155.367188 79.8890625,157.03125 63.6742188,157.03125 Z" id="Shape"></path><path d="M199.920703,162.187891 C199.623438,160.078516 198.473047,158.178125 196.74375,156.933203 C196.677734,156.885547 190.046094,152.078516 183.367188,144.459375 C178.680469,139.112891 175.16875,133.808203 172.869141,128.615234 C177.176953,127.299219 180.334766,125.896484 182.855078,124.776563 C183.779688,124.365625 184.578125,124.011328 185.239063,123.752344 C187.985938,122.677344 189.889453,120.144141 190.166016,117.207422 C190.442578,114.270703 189.037891,111.426172 186.539844,109.857031 C180.508203,106.06875 165.928516,94.9003906 160.170313,82.8882813 C165.975,81.6109375 170.135938,80.0996094 173.450781,78.6757813 C176.026953,77.5691406 177.8125,75.1675781 178.130078,72.3824219 C178.447656,69.596875 177.248438,66.8550781 174.987891,65.1972656 C150.69375,47.3816406 137.426172,5.89023438 137.296484,5.47773438 C136.282422,2.23945312 133.294141,0.02578125 129.900781,0 C129.880469,0 129.860938,0 129.840625,0 C126.471875,0 123.479297,2.1609375 122.422266,5.36484375 C122.345703,5.59726563 114.594141,28.8386719 101.137891,48.2902344 C98.6832031,51.8386719 99.5699219,56.7050781 103.118359,59.1597656 C106.666016,61.6144531 111.532813,60.7277344 113.987891,57.1796875 C120.606641,47.6113281 125.908984,37.3730469 129.771094,28.9074219 C135.158203,40.7210938 143.499219,55.9507812 154.835547,68.0292969 C148.182031,69.3046875 138.466406,70.365625 124.221094,70.365625 C119.90625,70.365625 116.408594,73.8632812 116.408594,78.178125 C116.408594,82.4929687 119.90625,85.990625 124.221094,85.990625 C131.989844,85.990625 138.586719,85.7003906 144.237891,85.2101562 C147.194141,93.6328125 153.265625,102.16875 162.363672,110.664453 C163.722266,111.933203 165.067578,113.123437 166.365234,114.225781 C160.423047,115.830469 152.078516,117.127344 139.455469,117.127344 C135.140625,117.127344 131.642969,120.625 131.642969,124.939844 C131.642969,129.254687 135.140625,132.752344 139.455469,132.752344 C146.397656,132.752344 152.275391,132.379297 157.298828,131.778516 C160.196094,139.490625 164.986719,147.194531 171.617578,154.758984 C173.749219,157.191406 175.869141,159.373437 177.836328,161.269531 C171.480469,162.880469 160.966797,164.453125 144.142969,164.453125 C139.828125,164.453125 136.330469,167.950781 136.330469,172.265625 L136.330469,192.1875 C136.330469,196.502344 139.828125,200 144.142969,200 C148.457813,200 151.955469,196.502344 151.955469,192.1875 L151.955469,179.966016 C166.112109,179.546484 177.524219,177.948828 185.952344,175.201562 C193.906641,172.608203 197.119922,169.648438 198.327734,168.114453 C199.645703,166.441016 200.217969,164.297266 199.920703,162.187891 Z" id="Path"></path></g></g></svg>
  # 随机图片
  figure:
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/qsNmnC2zHB5FW41.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/GwJzq4SYtClRcZh.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/6nOYcygRGXvpsFd.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/Qr2ykmsEFpJn4BC.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/KiOuTlCzge7JHh3.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/sM2XCJTW8BdUe5i.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/18KQYP9fNGbrzJu.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/rdjZo6Sg2JReyiA.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/X2MVRDe1tyJil3O.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/EDoKvz5p7BXZ46U.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/EGk4qUvcXDygV2z.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/5QdwFC82gT3XPSZ.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/KPyTCARHBzpxJ46.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/7TOEIPwGrZB1qFb.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/Ihj5QAZgVMqr9fJ.jpg
    - https://fastly.jsdelivr.net/gh/Innei/fancy@master/2021/KZ6jv8C92Vpwcih.jpg
  # 背景图
  background:
    src:
      light: https://fastly.jsdelivr.net/gh/mx-space/docs-images@master/assets/background.png
      dark: https://fastly.jsdelivr.net/gh/mx-space/docs-images@master/assets/background-night.png
    position: top center fixed
  # 定义网站顶栏
  header:
    menu:
      - title: 源
        path: /
        type: Home
        icon: faDotCircle
        subMenu: []
      - title: 文
        path: /posts
        type: Post
        subMenu: []
        icon: faGlasses
      - title: 记
        type: Note
        path: /notes
        icon: faFeatherAlt
      - title: 言
        path: /says
        icon: faComments
      - title: 览
        icon: faHistory
        path: /timeline
        subMenu:
          - title: 生活
            icon: faFeatherAlt
            path: /timeline?type=note
          - title: 博文
            icon: faBookOpen
            path: /timeline?type=post
          - title: 回忆
            icon: faCircle
            path: /timeline?memory=1
      - title: 友
        icon: faUserFriends
        path: /friends
      - title: 诉
        icon: faComment
        path: /recently
      - title: 余
        icon: faCircleNotch
        path: /favorite/music
        subMenu:
          - title: 听歌
            icon: faMusic
            type: Music
            path: /favorite/music
      - title: ""
        icon: faSubway
        path: "https://travellings.link"
  # 定义头像下的社交ID
  social:
    - url: "https://github.com/Innei"
      title: GitHub
      icon: faGithub
      color: var(--black)
    - url: "https://jq.qq.com/?_wv=1027&k=5t9N0mw"
      title: QQ
      icon: faQq
      color: "#12b7f5"
    - url: "https://twitter.com/__oQuery"
      title: twitter
      icon: faTwitter
      color: "#02A4ED"
  # 定义网站底部
  footer:
    background:
      src:
        dark: |-
        light: https://fastly.jsdelivr.net/gh/mx-space/docs-images@master/assets/footer.png
      position: top/cover
    home_page: https://innei.ren
    motto:
      content: Stay hungry. Stay foolish.
      author: Steve Jobs
    icp:
      enable: false
      label: "浙ICP备 20028356 号"
      link: http://beian.miit.gov.cn/
    # 自定义底部文字以及链接
    navigation:
      - name: 关于
        path: "/about"
      - name: 留言
        path: "/message"
      - name: 友链
        path: "/friends"
      - name: RSS 订阅
        path: "/feed"
        newtab: true
      - name: 站点地图
        path: "/sitemap"
        newtab: true
      - name: 开往
        path: https://travellings.link/
        newtab: true
  # 自定义脚本、样式和JS（支持外链引入，不需要script标签）
  custom:
    script: |-
      console.log('Hello')
    style: |-
      .foo {
        color: red
      }
    js:
      - https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js
    css:
      - https://fastly.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css
# 定义功能，例如歌单，追番
function:
  player:
    # 默认播放列表
    # 只支持网易云
    id:
      - 563534789
      - 1447327083
      - 1450252250
  # 分析，Google OR Baidu OR umami
  analyze:
    enable: false
    ga: ""
    baidu: ""
  # 打赏
  donate:
    enable: false
    link: https://afdian.net/@Innei
  # 是否禁用调试工具（访客）
  ban_devtool:
    enable: false
```

## 歌单/听歌/追番

目前来看，只有 Kami 具备这个功能，这个功能依赖于云函数模块

### 自动安装

进入后台，移动到 其他 - 配置与云函数 ，点击蓝色的 ↓ 按钮 ， 选择 kami ，等待即可。如果失败了，请参考下面的手动安装。

### 手动安装

#### 安装库

进入后台，移动到 其他 - 终端

如果没有开启，请自行到 设定—系统—终端设定 里面开启终端；出于安全考虑，请使用完关闭终端功能开关。

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/admin-webshell.png)

进入终端，执行命令

```bash
检查npm是否存在

# npm -v

如果缺失npm 请先使用容器内已存在的管理器安装 npm，例如 apk，yarn。

# yarn global add npm

安装库

# cd ~/.mx-space
# npm install @mx-space/extra
```
#### 功能

##### 歌单

进入后台，移动到 其他 · 配置与云函数

新建一个项

- 名字：netease
- 引用：kami
- 元类型：kami
- 数据类型：Function
- 请求方式：GET
- 公开： 是
```typescript
import extra from '@mx-space/extra'

async function handler() {
  const { NeteaseMusic, NeteaseCloudMusicApi } = extra

  const client = new NeteaseMusic(phone, password / md5_password ) //此处md5_password 与 password 任选其一，同时与下面 const 定义的相对应即可
  await client.Login()

  const uid = await client.getAccount()

  const weekdata = await client.getWeekData()
  const alldata = await client.getAllData()
  const playlist = await client.getFavorite()

  const detail = await NeteaseCloudMusicApi.user_detail({
    uid,
  }).then((res) => (res.body.code === 200 ? res.body.profile : null))

  const responsePayload = {
    playlist,
    weekdata,
    alldata,
    detail,
  }

  return responsePayload
}
/// CONFIGS ///
const phone = '15922****'  //网易云登录手机号
const password = 'wddw***s' // 登录密码 password 与 md5_password 任选其一
const md5_password = '0800fc577294c34e0b28ad2839435945'   //登录密码的md5值(@mx-space/extra ^0.5.7 版本及以上 支持该选项)
/// CONFIGS END ///
```
注意： 本函数中包含两种登录方式，一种是密码登录，另一种是密码的 **md5** 值登录，对应的选项就是 **password** 和 **md5_password** ；在您将函数复制过去后，需要按照注释内容，自行删除掉你不需要的登录方式，和与之对应的 **CONFIGS** 注释区域的 **const** 定义，如果您不进行修改，则无法使用

举个例子，密码登录

```typescript
import extra from '@mx-space/extra'

async function handler() {
  const { NeteaseMusic, NeteaseCloudMusicApi } = extra

  const client = new NeteaseMusic(phone, password ) //此处使用 password ，同时与下面 const 定义的相对应即可
  await client.Login()

  const uid = await client.getAccount()

  const weekdata = await client.getWeekData()
  const alldata = await client.getAllData()
  const playlist = await client.getFavorite()

  const detail = await NeteaseCloudMusicApi.user_detail({
    uid,
  }).then((res) => (res.body.code === 200 ? res.body.profile : null))

  const responsePayload = {
    playlist,
    weekdata,
    alldata,
    detail,
  }

  return responsePayload
}
/// CONFIGS ///
const phone = '15922****'  //网易云登录手机号
const password = 'wddw***s' // 登录密码 password 
/// CONFIGS END ///

```
同理，md5 登录也是按照这种写法(将文中 password 换成 md5_password 即可)

##### 追番

新建一个项

- 名字：bangumi
- 引用：kami
- 元类型：kami
- 数据类型：Function
- 请求方式：GET
- 公开： 是

```typescript
import extra from '@mx-space/extra'
async function handler() {
  const { BiliClient } = extra
  const bl = await context.getMaster().then((user) => user.socialIds.bilibili)
  const client = new BiliClient(parseInt(bl || uid))
  const bangumi = await client.getFavoriteBangumi(parseInt(len.toString()))
  return bangumi
}
/// CONFIGS  ///
// 如果社交平台 ID 录入中有哔哩哔哩 ID 可不填，留空
const uid = '11111'
const len = 10
/// CONFIGS END ///
```
注意：uid 是自己的 哔哩哔哩 UID，len 是允许获取自己看过的番的最大个数，实际展示个数受限于实际的追番数。

##### 背景音乐

新建一个项

- 名字：song
- 引用：kami
- 元类型：kami
- 数据类型：Function
- 请求方式：GET
- 公开： 是

```typescript
import { NeteaseCloudMusicApi } from '@mx-space/extra'

async function handler() {
  const { song_url } = NeteaseCloudMusicApi
  const id = context.req.query.id
  if (!id) {
    return { message: 'id must be not empty stringnumber' }
  }
  const data = await song_url({
    id: +id,
  })

  return data.body.data
}
```

注意：背景音乐的歌单依赖于[Kami 设置](#kami-设置)中设置的网易云歌曲 ID；若没有设置，则使用默认的。

##### 歌词

新建一个项

- 名字：lyrics
- 引用：kami
- 元类型：kami
- 数据类型：Function
- 请求方式：GET
- 公开： 是

```typescript
import extra from '@mx-space/extra'

const cacheKey = 'netease-lyrics'
async function handler() {
  const { NeteaseCloudMusicApi } = extra
  const {
    req: { query },

    storage: { cache },
  } = context

  if (!query.id) {
    context.throws(400, 'id is required')
  }

  const { get, set } = cache
  const fromCache = await get(cacheKey + ':' + query.id)
  if (fromCache) {
    return fromCache
  }

  const { lyric } = NeteaseCloudMusicApi
  const result =
    (
      await lyric({
        id: query.id,
      })
    ).body?.lrc?.lyric || ''
  result && (await set(`${cacheKey}:${query.id}`, result))
  return result
}
```
到这里，Kami 默认功能需要的云函数已经配置完毕。