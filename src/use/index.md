# 初次使用说明

## 前提

- 已完成 Mix Space 的部署并且运行正常。
- 域名已经解析到对应的服务器，国内用户请备案。

## 反向代理

使用 [预设脚本部署整个环境](https://mx-space.js.org/deploy/index.html#%E6%95%B4%E4%B8%AA%E7%8E%AF%E5%A2%83) 的用户，请跳过反向代理这一节。

通常情况下，使用 Caddy 2 或者 Nginx 都可以很好的完成反向代理，本节内容以 Nginx 举例。
如果你想使用 Caddy 2 完成反向代理，这里有 [配置文件示例](https://github.com/mx-space/docker/blob/master/Caddyfile.example)，当然，你想单个域名部署前后端，这里也有[配置文件示例](https://github.com/mx-space/docker/blob/master/configs/nginx.conf)。

### 安装 Nginx

考虑到读者可能不了解相关技术，我们推荐使用宝塔面板安装 Nginx。

- 安装 [宝塔面板](https://www.bt.cn/new/download.html)

- 在宝塔面板 — 软件商店，安装 Nginx

### 反向代理后端

新建网站，例如 `server.test.cn` 并安装好 SSL 证书。

我们点击左侧的 配置文件（网站设置），在 error_log 这行下面，添加如下配置：

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

或者也可以像视频一样在 网站设置 - 反向代理 处添加一个目标 URL 为 `http://127.0.0.1:2333` 的反代后再直接用上面的内容覆盖原来的反代配置文件。

然后那么局部配置文件示例如下：

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

新建网站，例如 `www.test.cn` 并安装好 SSL 证书。

我们点击左侧的 配置文件（网站设置），在 error_log 这行下面，添加如下配置：

:::warning
在 Kami v3.15.1 版本及以上，移除了该项的转发，建议直接把请求打到 api 上。

请不要随意更改示例的顺序，匹配的优先级不一样；如果你熟悉的话，请随意。
:::

```nginx
# See: https://github.com/mx-space/docker/blob/master/configs/nginx.conf

# This is a example for nginx configure if you host mx-space manually
location ~* \.(gif|png|jpg|css|js|woff|woff2)$ {
  proxy_pass http://127.0.0.1:2323;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header REMOTE-HOST $remote_addr;
  expires 30d;
}
location ~* \/(feed|sitemap|atom.xml) {
  proxy_pass http://127.0.0.1:2333/$1;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header REMOTE-HOST $remote_addr;

  add_header X-Cache $upstream_cache_status;

  add_header Cache-Control max-age=60;
}


location / {
  proxy_pass http://127.0.0.1:2323;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header REMOTE-HOST $remote_addr;

  add_header X-Cache $upstream_cache_status;

  add_header Cache-Control no-cache;
  proxy_intercept_errors on;
}



```

保存即可。
或者也可以像视频一样在 网站设置 - 反向代理 处添加一个目标 URL 为 `http://127.0.0.1:2323` 的反代后再直接用上面的内容覆盖原来的反代配置文件。

那么局部配置文件示例如下：

```nginx
    access_log  /www/wwwlogs/www.test.cn.log;
    error_log  /www/wwwlogs/www.test.cn.log;
#PROXY-START/
location ~* \.(gif|png|jpg|css|js|woff|woff2)$ {
  proxy_pass http://127.0.0.1:2323;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header REMOTE-HOST $remote_addr;
  expires 30d;
}
location ~* \/(feed|sitemap|atom.xml) {
  proxy_pass http://127.0.0.1:2333/$1;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header REMOTE-HOST $remote_addr;

  add_header X-Cache $upstream_cache_status;

  add_header Cache-Control max-age=60;
}


location / {
  proxy_pass http://127.0.0.1:2323;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header REMOTE-HOST $remote_addr;

  add_header X-Cache $upstream_cache_status;

  add_header Cache-Control no-cache;
  proxy_intercept_errors on;
}
#PROXY-END/
```

## 后台设置

访问 https://server.test.cn/proxy/qaqdmin 进入后台，进行初始化。

第一次访问可能遇到填写 API 的情况，在默认的的情况下，填写示例如下：

- API 地址：https://server.test.cn/api/v2
- GATEWAY 地址：https://server.test.cn

记得勾选持久化。
:::tip
建议：新建两个页面，第一个路由是 `message` ，第二个是 `about` ，标题，内容任意。
:::

## 用户设定

这个应该比较简单，就不再赘述了。但是要注意的是头像的 URL 不要带入其他的参数，否则可能会导致包括但不限于 `feed` 输出异常。

## 系统设定

### 网站设置

- 前端地址：即你之前前端反向代理的站点，例如 https://www.test.cn
- API 地址：即你之前后端反向代理的站点加上 api/v2，例如 https://server.test.cn/api/v2
- 后台地址：即你现在后台的地址，例如 https://server.test.cn/proxy/qaqdmin
- Gateway 地址：即后端地址，例如 https://server.test.cn

### 后台附加设置

高德查询 API key

这个需要在 [高德开放平台](https://lbs.amap.com/) 上注册并创建应用，大致是这样：

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/G7De6D.png)

### 邮件通知设置

- 发件邮箱 host : 发送邮件的 smtp 域名，例如：smtp.example.com

- 发件邮箱端口：仅能为 465

- 发件邮箱地址：这是你自己的发信邮箱，例如 no-reply@example.com

- 发件邮箱密码：与邮箱对应的密码

:::warning
注意：该邮箱是给访客评论回复发的通知邮箱，也是给主人发送通知邮件的邮箱，请不要和主人的邮箱搞混！
:::

### 备份

该功能提供数据库的备份，使用 mongodump 完成这个操作，请确保已安装 mongodb-tools。

同时可以填写腾讯 COS 信息，同时会把备份上传到 COS。

备份是一个计划任务，将会在每天凌晨自动进行。你可以在 其他 - 任务 中看到这个任务：

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/AfN20h.png)

### 百度推送

该功能提供自动上传站点信息到百度，众所周知百度的收录能力过于糟糕。

你需要先去 [百度站长](https://ziyuan.baidu.com/linksubmit/index) 完成注册，认证你的域名，然后填写 Token。

该功能也是一个 计划任务，一次配置每天推送，无需关心。同样可以在 其他 - 任务 中看到这个任务。
![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/zEgXj5.png)

:::warning
注意：请先确保 系统 - 网站设置 - 前端地址 填写正确！
:::

### 邮件推送 (小铃铛)

在系统 - 特征开关设定，打开邮件推送开关；你可以在其他 - 订阅中看到所有的订阅者。

### Algolia Search

Algolia Search 是一个第三方搜索服务。让前端具有搜索功能，该项服务需要在后台填入 Algolia API 才能正常使用。到 [Algolia 官网](https://www.algolia.com/) 注册并新建应用，然后查看用户自己的 [API Key](https://www.algolia.com/account/api-keys/) ，后端具备自动推送功能，建议在后台填入 Admin API Key，保存即可。

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/algolia.png)

## Kami 配置

配置项用于自定义部分文案和 UI 视觉。

进入后台，移动到 其他 · 配置与云函数，新建一个项：

- 名字：kami
- 引用：theme
- 数据类型：YAML / JSON
- 公开：是

参照以下内容，复制到右边的框中，并根据自己的情况进行修改。以下是 YAML 格式的示例，可以根据示例修改。

:::warning
里面有大量的 jsd 链接，请自行做好处理
:::

### 配置示例

```yaml
name: kami

site:
  favicon: https://fastly.jsdelivr.net/gh/mx-space/kami@master/public/favicon.svg
  # 开屏图和 logo svg 标签，注意 XSS
  logo_svg: <svg height="200px" viewbox="0 0 200 200" version="1.1" shape-rendering="geometricPrecision"><g stroke="none" strokewidth="1" fill="none" fillrule="evenodd"><g id="forest" fill="currentColor" fillrule="nonzero"><path d="M116.799219,176.953125 C112.484375,176.953125 108.986719,180.450781 108.986719,184.765625 L108.986719,192.1875 C108.986719,196.502344 112.484375,200 116.799219,200 C121.114062,200 124.611719,196.502344 124.611719,192.1875 L124.611719,184.765625 C124.611719,180.450781 121.114063,176.953125 116.799219,176.953125 Z" id="Path"></path><path d="M121.456641,150.248047 C121.298828,150.158203 108.089453,142.472656 101.778125,128.767188 C106.058594,127.733594 109.462109,126.055078 112.442578,124.584766 C115.008203,123.319531 116.671094,120.749609 116.787109,117.891406 C116.903125,115.033203 115.441797,112.336328 112.986719,110.
```

:::tip
如果想要更详细的参数，请查看[Kami 配置参数](/use/kami-setting.md)。
:::

## 歌单/听歌/追番

目前来看，只有 Kami 具备这个功能，这个功能依赖于云函数模块。

### 自动安装

进入后台，移动到 其他 - 配置与云函数，点击蓝色的 ↓ 按钮，选择 kami，等待即可。如果失败了，请参考下面的手动安装。

### 手动安装

---

#### 安装模块

进入后台，移动到 其他 - 终端。

如果没有开启，请自行到 设定—系统—终端设定 里面开启终端；出于安全考虑，请使用完关闭终端功能开关。

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/admin-webshell.png)

进入终端，执行命令：

```bash
# 检查npm是否存在

npm -v

# 如果缺失 npm 请先使用容器内已存在的管理器安装 npm，例如 apk，yarn。

yarn global add npm

# 假设你的 npm 是正常的，我们安装必需模块

cd ~/.mx-space
npm install @mx-space/extra
```

#### 功能

---

##### 歌单

进入后台，移动到 其他 · 配置与云函数，新建一个项：

- 名字：netease
- 引用：kami
- 元类型：kami
- 数据类型：Function
- 请求方式：GET
- 公开：是

```ts
import extra from '@mx-space/extra'

async function handler() {
  const { NeteaseMusic, NeteaseCloudMusicApi } = extra

  const client = new NeteaseMusic(phone, password / md5_password) //此处md5_password 与 password 任选其一，同时与 Secret 定义的相对应即可
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
```

在 Core v3.39.1 以后，添加函数页面新增 Secret 配置项，建议将对应的参数直接填至 Secret。

注意：本函数中包含两种登录方式，一种是密码登录，另一种是密码的 **md5** 值登录，对应的选项就是 **password** 和 **md5_password** ；在您将函数复制过去后，需要按照注释内容，自行删除掉你不需要的登录方式，如果您不进行修改，则无法使用。

举个例子，使用账号和密码登录：

```ts
import extra from '@mx-space/extra'

async function handler() {
  const { NeteaseMusic, NeteaseCloudMusicApi } = extra

  const client = new NeteaseMusic(phone, password) //此处使用 password，同时与旁边 secret 定义的相对应即可
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
```

同时需要在旁边的 Secret 添加 `phone` 和 `password` 两个变量及对应的值。

同理，md5 登录也是按照这种写法 (将 password 换成 md5_password 即可)。

##### 追番

新建一个项：

- 名字：bangumi
- 引用：kami
- 元类型：kami
- 数据类型：Function
- 请求方式：GET
- 公开：是

```ts
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

新建一个项：

- 名字：song
- 引用：kami
- 元类型：kami
- 数据类型：Function
- 请求方式：GET
- 公开：是

```ts
type Song = {
  author: string
  /**
   * 封面 url
   */
  pic: string
  title: string
  
  url: string
}

async function handler(ctx, require) {
  const { NeteaseCloudMusicApi } = await require('@mx-space/extra')
  const { song_url, song_detail } = NeteaseCloudMusicApi
  const id = ctx.req.query.id
  if (!id) {
    return { message: 'id must be not empty stringnumber' }
  }
  const [data, data2] = await Promise.all([
    song_url({
      id: +id,
    }),
    song_detail({
      ids: id,
    })
  ])
  const song = data2.body.songs[0]
  const songDetail: Song = {
    title: song.name,
    author: song.ar?.map(a => a.name).join(' & '),
    pic: song.al?.picUrl,
    url: data.body.data?.[0]?.url
  }
  return [songDetail]
}
```

注意：背景音乐的歌单依赖于 [Kami 设置](#kami-设置) 中设置的网易云歌曲 ID；若没有设置，则使用默认的。

##### 歌词

新建一个项：

- 名字：lyrics
- 引用：kami
- 元类型：kami
- 数据类型：Function
- 请求方式：GET
- 公开：是

```ts
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

## 后台自定义反向代理

如果你不喜欢默认的 `/qaqdmin` , `/proxy/qaqdmin` 这样的路径，可以自定义反向代理路径。

以 Nginx 举例，假设你想要的路径是 `/admin` , 那么你需要在 Core 的 Nginx 反向代理配置文件中添加如下内容：

```nginx
location /admin // 这里路径可以自定义
{
  proxy_pass http://127.0.0.1:2333/qaqdmin;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header REMOTE-HOST $remote_addr;

  add_header X-Cache $upstream_cache_status;

  add_header Cache-Control no-cache;
  proxy_intercept_errors on;
}
```

如果你不喜欢默认的 `/proxy/qaqdmin` , 同理。

```nginx
location /admin  // 这里的路径可以自定义
{
  proxy_pass http://127.0.0.1:2333/proxy/qaqdmin;
  proxy_ignore_headers Set-Cookie Cache-Control expires;
  add_header Cache-Control no-store;
  expires 12h;
}
location /proxy/ {
  proxy_pass http://127.0.0.1:2333/proxy/;

  add_header X-Cache $upstream_cache_status;
  #Set Nginx Cache

  add_header Cache-Control max-age=36000000;
}
```

仅仅这样修改 Core 的 Nginx 配置文件即可。

综上，你也可以使用其他域名来访问后台，只要你配置好对应的反向代理即可。

## PS

你可能需要的 [Kami 扩展语法](https://github.com/mx-space/kami#markdown-%E6%89%A9%E5%B1%95%E8%AF%AD%E6%B3%95)。
