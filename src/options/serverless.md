# 云函数使用方法

> 在 Kami 3.5.0 以上的版本，该节内容是必须的。

## 前言

Mix Space 的云函数实现依赖于动态的路由处理模块，通过云函数可以编写一些简单的 API。

::: warning
❗ 注意：第三方库的使用是有限制的；第一你需要先安装了这个库；第二是只有受信任的第三方库和某些系统模块可以使用
:::

具体信息可以参阅 [Severless.Readme](https://github.com/mx-space/mx-server/blob/master/src/modules/serverless/serverless.readme.md)

## 自动安装

进入后台，移动到 `其他 · 配置与云函数` ，点击蓝色的  `↓`  按钮  ， 选择 kami ，等待即可。如果失败了，请参考下面的手动安装。

## 手动安装(备用 | 自动安装失败可选)

### 安装库

进入后台，移动到 `其他 · 终端`

如果没有开启，请自行到 设定—系统—终端设定 里面开启终端；出于安全考虑，请使用完关闭终端功能开关。
![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/admin-webshell.png)
进入终端，执行命令

```bash
# 检查npm是否存在

npm -v

# 如果缺失npm 请先使用容器内已存在的管理器安装 npm，例如 apk，yarn。

apk add npm

#yarn global add npm

# 安装必须库
cd ~/.mx-space
npm install @mx-space/extra
```

退出后台的终端(webshell)，并关闭该功能开关(建议)。

### 功能

#### 歌单(歌词)

进入后台，移动到 `其他 · 配置与云函数`

新建一个项

- 名字：`netease`
- 引用：`kami`
- 元类型：`kami`
- 数据类型：`Function`
- 公开： `是`

内容示例如下，请参照自己的情况进行修改

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

注意：
本函数中包含两种登录方式，一种是密码登录，另一种是密码的 `md5` 值登录，对应的选项就是 `password` 和 `md5_password` ；在您将函数复制过去后，需要按照注释内容，自行删除掉你不需要的登录方式，和与之对应的 `CONFIGS` 注释区域的 `const` 定义，如果您不进行修改，则无法使用

举个例子，密码登录
```typescript
import extra from '@mx-space/extra'

async function handler() {
  const { NeteaseMusic, NeteaseCloudMusicApi } = extra

  const client = new NeteaseMusic(phone, password ) //此处md5_password 与 password 任选其一，同时与下面 const 定义的相对应即可
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
同理，md5 登录也是按照这种写法(将文中 `password` 换成 `md5_password` 即可)

#### 追番

新建一个项

- 名字：`bangumi`
- 引用：`kami`
- 元类型：`kami`
- 数据类型：`Function`
- 公开： `是`

示例如下：

```typescript
import extra from '@mx-space/extra'
async function handler() {
  const { BiliClient } = extra
  const bl = await context.getMaster().then((user) => user.socialIds.bilibili)
  const client = new BiliClient(parseInt(bl || uid))
  const bangumi = await client.getFavoriteBangumi(parseInt(len.toString()))
  return bangumi
}
// 如果社交平台 ID 录入中有哔哩哔哩 ID 可不填，留空
const uid = '11111'
const len = 10
```

注意：`uid` 是自己的 哔哩哔哩 UID，`len` 是允许获取自己看过的番的最大个数，实际展示个数受限于实际的追番数。

#### 背景音乐

新建一个项

- 名字：`song`

- 引用：`kami`

- 元类型：`kami`

- 数据类型：`Function`

- 公开： `是`

示例如下：

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

注意：背景音乐的歌单依赖于 Kami v3 那节中设置的网易云歌曲 ID；若没有设置，则使用默认的。

#### 歌词获取

新建一个项

- 名字：`lyrics`

- 引用：`kami`

- 元类型：`kami`

- 数据类型：`Function`

- 公开： `是`

示例如下：

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
该歌必须要有歌词，不然不显示歌词

到这里，Kami 默认功能需要的云函数已经配置完毕。

## 测试

以 `server.test.cn` 为例

### netease 函数

打开浏览器，访问 https://server.test.cn/api/v2/serverless/kami/netease

状态码 返回 200 ，且有正常数据出现。

示例如下：

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/api-return.png)

### song 函数

访问 https://server.test.cn/api/v2/serverless/kami/song?id=95438221

状态码 返回 200 ，且返回该歌曲的数据

### bangumi 函数

访问 https://server.test.cn/api/v2/serverless/kami/bangumi

状态码 返回 200，且返回你自己的追番数据

### lyrics 函数

歌曲播放时，左侧有歌词滚动即为正常(该歌必须要有歌词)

## 结束

如果测试都没问题，可以愉快的升级 Kami 3.5.0 以上的版本了，而且据作者介绍，可以通过这个自己 DIY 一些功能，期待各位大佬的 PR。
