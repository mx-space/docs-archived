# Kami 配置项参数

要使用以下配置，请先按照 [Kami 配置](./index.md#kami-配置) 建立配置文件片段。

## 配置项

### name

- Type: `string`
- Default: `kami`

主题配置的名称。

### site.theme_color

- Type: `string | ThemeColor`

控制主色调。

例子：

```yaml
theme_color:
  light: '#ffc107'
  dark: '#ffc107'
  light_hover: '#ffc10780'
  dark_hover: '#ffc10780'
```

```ts
interface ThemeColor {
  light: string
  dark: string
  lightHover?: string
  darkHover?: string
}
```

### site.favicon

- Type: `string`
- Default: `/favicon.svg`

Favorite 的路径。

### site.logo_svg

- Type: `string`
- Default: `null`

开屏中间的图标和头部左侧图标，填写为 HTML SVG 标签。

例如：

```html
<svg
  height="200px"
  viewbox="0 0 200 200"
  version="1.1"
  shape-rendering="geometricPrecision"
>
  <g stroke="none" strokewidth="1" fill="none" fillrule="evenodd">
    <g id="forest" fill="currentColor" fillrule="nonzero">
      <path
        d="M116.799219,176.953125 C112.484375,176.953125 108.986719,180.450781 108.986719,184.765625 L108.986719,192.1875 C108.986719,196.502344 112.484375,200 116.799219,200 C121.114062,200 124.611719,196.502344 124.611719,192.1875 L124.611719,184.765625 C124.611719,180.450781 121.114063,176.953125 116.799219,176.953125 Z"
        id="Path"
      ></path>
      <path
        d="M121.456641,150.248047 C121.298828,150.158203 108.089453,142.472656 101.778125,128.767188 C106.058594,127.733594 109.462109,126.055078 112.442578,124.584766 C115.008203,123.319531 116.671094,120.749609 116.787109,117.891406 C116.903125,115.033203 115.441797,112.336328 112.986719,110.867578 C108.091406,107.937891 96.6117187,99.3179688 91.234375,88.9808594 C94.3324219,88.1222656 97.3414062,86.940625 100.255469,85.734375 C102.819922,84.6730469 104.628906,82.3304688 105.007422,79.5808594 C105.385938,76.83125 104.276953,74.0875 102.094531,72.3722656 C82.3632812,56.8691406 70.0417969,20.1820313 69.9210937,19.8171875 C68.8640625,16.6136719 65.8710938,14.4558594 62.5019531,14.4558594 C62.4839844,14.4558594 62.465625,14.4558594 62.4472656,14.4558594 C59.05625,14.4792969 56.0664063,16.690625 55.0484375,19.925 C54.934375,20.2878906 43.3839844,56.3890625 22.3355469,71.8246094 C20.075,73.4824219 18.8757813,76.2242188 19.1933594,79.0097656 C19.5109375,81.7949219 21.2964844,84.196875 23.8722656,85.303125 C26.1265625,86.2714844 29.5851563,87.7554688 34.3464844,89.0640625 C29.0214844,98.8472656 17.2527344,107.819922 12.2683594,110.952734 C9.7640625,112.517969 8.35625,115.360938 8.63007813,118.301563 C8.90390625,121.242188 10.8117188,123.776953 13.5617188,124.852734 C13.9058594,124.9875 14.2785156,125.1375 14.6828125,125.3 C16.8089844,126.154297 19.7445313,127.332031 23.6902344,128.501953 C17.2066406,141.350391 3.68632813,150.395703 3.53671875,150.494141 C1.09140625,152.094922 -0.25625,154.926563 0.044140625,157.833594 C0.34453125,160.740625 2.2421875,163.237109 4.96328125,164.303906 C5.76640625,164.61875 23.6132813,171.474609 55.471875,172.521875 L55.471875,192.1875 C55.471875,196.502344 58.9695313,200 63.284375,200 C67.5992187,200 71.096875,196.502344 71.096875,192.1875 L71.096875,172.544531 C103.353125,171.572656 119.956641,164.517578 120.696484,164.196094 C123.407422,163.016797 125.221094,160.408984 125.382422,157.457031 C125.542578,154.504688 124.023438,151.714844 121.456641,150.248047 Z M63.6742188,157.03125 C46.6414063,157.03125 33.3425781,155.194922 24.325,153.367578 C29.7734375,147.926953 35.75625,140.533203 39.3648438,131.730859 C44.5152344,132.389453 50.4929688,132.8125 57.4242188,132.8125 C61.7390625,132.8125 65.2367188,129.314844 65.2367188,125 C65.2367188,120.685156 61.7390625,117.1875 57.4242188,117.1875 C46.7472656,117.1875 38.8265625,116.116406 32.8878906,114.769531 C33.4640625,114.256641 34.0460937,113.726953 34.63125,113.180859 C42.2988281,106.020703 47.5574219,98.8085938 50.3394531,91.6605469 C51.3,91.7195313 52.2839844,91.7652344 53.2945313,91.7941406 C57.6179688,91.9210938 61.2035156,88.5207031 61.3269531,84.2082031 C61.45,79.8949219 58.0535156,76.2988281 53.740625,76.1757813 C49.2144531,76.0464844 45.3546875,75.5386719 42.0863281,74.8628906 C51.1160156,64.9648438 57.9273437,52.8929688 62.5585937,43.0527344 C67.1378906,52.8117188 73.746875,64.7949219 82.1886719,74.6710938 C81.9644531,74.6675781 81.74375,74.6566406 81.5277344,74.6382813 C79.1414062,74.4355469 76.7910156,75.3363281 75.1546875,77.0871094 C73.5183594,78.8375 72.7753906,81.2421875 73.1398437,83.6105469 C75.0921875,96.3007813 83.7679687,106.876563 91.5785156,114.065234 C89.2605469,114.0125 87.06875,114.98125 85.5433594,116.714844 C83.9519531,118.523438 83.2839844,120.964844 83.7328125,123.33125 C86.2589844,136.650391 93.8433594,146.823047 100.754297,153.641797 C92.2726562,155.367188 79.8890625,157.03125 63.6742188,157.03125 Z"
        id="Shape"
      ></path>
      <path
        d="M199.920703,162.187891 C199.623438,160.078516 198.473047,158.178125 196.74375,156.933203 C196.677734,156.885547 190.046094,152.078516 183.367188,144.459375 C178.680469,139.112891 175.16875,133.808203 172.869141,128.615234 C177.176953,127.299219 180.334766,125.896484 182.855078,124.776563 C183.779688,124.365625 184.578125,124.011328 185.239063,123.752344 C187.985938,122.677344 189.889453,120.144141 190.166016,117.207422 C190.442578,114.270703 189.037891,111.426172 186.539844,109.857031 C180.508203,106.06875 165.928516,94.9003906 160.170313,82.8882813 C165.975,81.6109375 170.135938,80.0996094 173.450781,78.6757813 C176.026953,77.5691406 177.8125,75.1675781 178.130078,72.3824219 C178.447656,69.596875 177.248438,66.8550781 174.987891,65.1972656 C150.69375,47.3816406 137.426172,5.89023438 137.296484,5.47773438 C136.282422,2.23945312 133.294141,0.02578125 129.900781,0 C129.880469,0 129.860938,0 129.840625,0 C126.471875,0 123.479297,2.1609375 122.422266,5.36484375 C122.345703,5.59726563 114.594141,28.8386719 101.137891,48.2902344 C98.6832031,51.8386719 99.5699219,56.7050781 103.118359,59.1597656 C106.666016,61.6144531 111.532813,60.7277344 113.987891,57.1796875 C120.606641,47.6113281 125.908984,37.3730469 129.771094,28.9074219 C135.158203,40.7210938 143.499219,55.9507812 154.835547,68.0292969 C148.182031,69.3046875 138.466406,70.365625 124.221094,70.365625 C119.90625,70.365625 116.408594,73.8632812 116.408594,78.178125 C116.408594,82.4929687 119.90625,85.990625 124.221094,85.990625 C131.989844,85.990625 138.586719,85.7003906 144.237891,85.2101562 C147.194141,93.6328125 153.265625,102.16875 162.363672,110.664453 C163.722266,111.933203 165.067578,113.123437 166.365234,114.225781 C160.423047,115.830469 152.078516,117.127344 139.455469,117.127344 C135.140625,117.127344 131.642969,120.625 131.642969,124.939844 C131.642969,129.254687 135.140625,132.752344 139.455469,132.752344 C146.397656,132.752344 152.275391,132.379297 157.298828,131.778516 C160.196094,139.490625 164.986719,147.194531 171.617578,154.758984 C173.749219,157.191406 175.869141,159.373437 177.836328,161.269531 C171.480469,162.880469 160.966797,164.453125 144.142969,164.453125 C139.828125,164.453125 136.330469,167.950781 136.330469,172.265625 L136.330469,192.1875 C136.330469,196.502344 139.828125,200 144.142969,200 C148.457813,200 151.955469,196.502344 151.955469,192.1875 L151.955469,179.966016 C166.112109,179.546484 177.524219,177.948828 185.952344,175.201562 C193.906641,172.608203 197.119922,169.648438 198.327734,168.114453 C199.645703,166.441016 200.217969,164.297266 199.920703,162.187891 Z"
        id="Path"
      ></path>
    </g>
  </g>
</svg>
```

### site.figure

- Type: `Array<string>`
- Default: `null`

随机图片，用于首页文章的头图，和 SEO Twitter Card 中的图片。

### site.background.src

- Type: `Record<'light' | 'dark', string>`
- Default: `light: /assets/background.png`, `dark: /assets/background-night.png`

背景图片，分为暗色模式下的背景图和亮色模式，暗色模式背景图暂缺时，取亮色模式的背景，反之亦然。

### site.background.position

- Type: `string`
- Default: `top center fixed`

背景的定位，CSS background 属性。

### site.header.menu

- Type: `Menu[]`
- Default:

```ts
;[
  {
    title: '源',
    path: '/',
    type: 'Home',
    icon: 'faDotCircle',
    subMenu: [],
  },
  {
    title: '文',
    path: '/posts',
    type: 'Post',
    subMenu: [],
    icon: 'faGlasses',
  },
  {
    title: '记',
    type: 'Note',
    path: '/notes',
    icon: 'faFeatherAlt',
  },
  {
    title: '言',
    path: '/says',
    icon: 'faComments',
  },
  {
    title: '览',
    icon: 'faHistory',
    path: '/timeline',
    subMenu: [
      {
        title: '生活',
        icon: 'faFeatherAlt',
        path: '/timeline?type=note',
      },
      {
        title: '博文',
        icon: 'faBookOpen',
        path: '/timeline?type=post',
      },
      {
        title: '回忆',
        icon: 'faCircle',
        path: '/timeline?memory=1',
      },
    ],
  },
  {
    title: '友',
    icon: 'faUserFriends',
    path: '/friends',
  },
  {
    title: '诉',
    icon: 'faComment',
    path: '/recently',
  },
  {
    title: '余',
    icon: 'faCircleNotch',
    path: '/favorite/music',
    subMenu: [
      {
        title: '听歌',
        icon: 'faMusic',
        type: 'Music',
        path: '/favorite/music',
      },
      {
        title: '项目',
        icon: 'faFlask',
        path: '/favorite/project',
      },
    ],
  },
  {
    title: '',
    icon: 'faSubway',
    path: 'https://travellings.link',
  },
]
```

```ts
interface Menu {
  title: string
  path: string
  type?: string
  icon: string
  subMenu?: Menu[]
}
```

顶部菜单。

### site.header.social

- Type: `Social[]`
- Default: `[]`

```ts
interface Social {
  url: string
  title: string
  icon: string
  color: string
}
```

社交账号。展示于首页。

如果你想使用 QQ 跳转链接，你可能还需要到 [QQ 推广](https://shang.qq.com/)；在推广工具 - 个人 QQ 通讯组件中 2 代码里复制 如 `https://wpa.qq.com/msgrd?v=3&uin=QQ号&site=qq&menu=yes` 的链接并将其填到 `url` 里

顶部菜单和社交方式那一栏的图标可在 <https://fontawesome.com/v5/search> 或者 <https://fa5.dashgame.com> 中获取（仅限 free 版本）。网站默认复制内容一般类似于 `far fa-图标名` 这样。举个例子，如果需要加入 Telegram 社交链接，搜索后的图标名为 `paper-plane` ，则需要在 `icon` 那一栏填入 `fa fa-paper-plane` 以此类推。

![](https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/telegram-icon-fapaperplane.png)

### site.footer.background.src

底部背景图。

配置同上背景图。

### site.footer.background.position

底部背景图。

配置同上背景图。

### site.footer.home_page

- Type: `string`
- Default: `/`

底部作者名称链接跳转的页面。默认为此站点。

### site.footer.motto.content

- Type: `string`
- Default: `Stay hungry. Stay foolish.`

座右铭。显示于页面底部。

### site.footer.motto.author

- Type: `string`
- Default: `Steve Jobs`

座右铭作者。同上

### site.footer.icp.enable

- Type: `boolean`
- Default: `false`

是否显示备案。

### site.footer.icp.label

- Type: `string`
- Default: `萌备 20201212 号`

备案信息。

### site.footer.icp.link

- Type: `string`
- Default: `https://icp.gov.moe/`

跳转备案链接。

### site.footer.navigation

- Type: `Navigation[]`
- Default:

```ts
;[
  {
    name: '关于',
    path: '/about',
  },
  {
    name: '留言',
    path: '/message',
  },
  {
    name: '友链',
    path: '/friends',
  },
  {
    name: 'RSS 订阅',
    path: '/feed',
    newtab: true,
  },
  {
    name: '站点地图',
    path: '/sitemap',
    newtab: true,
  },
  {
    name: '开往',
    path: 'https://travellings.link/',
    newtab: true,
  },
]
```

```typescript
interface Navigation {
  newtab?: boolean
  name: string
  path: string
}
```

底部快速链接。

### site.custom.script

- Type: `string`
- Default: `''`

自定义 JS 脚本。

### site.custom.style

- Type: `string`
- Default: `''`

自定义 CSS 样式。

### site.custom.js

### site.custom.css

- Type: `string[]`
- Default: `[]`

自定义外部 JS 和 CSS 资源。只需要填写地址，不需要完整的 tag。

### page.home

- Type: `HomePage`
- Default:

```yaml
page:
  home:
    sections:
      - post
      - note
      - friend
      - more
    title_mapping:
      post: ''
      note: ''
      friend: ''
      more: ''
    more:
      - name: 留言
        desc: 你的话对我很重要
        path: '/message'
        cover: https://cdn.innei.ren/anime/107594318_p0.jpg
      - name: 赞助
        desc: 饿饿，饭饭
        path: '/sponsor'
        cover: https://cdn.innei.ren/anime/95468130.jpg
      - name: 点赞
        type: 'like'
        cover: https://cdn.innei.ren/anime/79494520.png
      - name: 订阅
        type: 'subscribe'
        cover: https://cdn.innei.ren/anime/107559891_p0.jpg
```

控制首页 `日记` `文章` `友链` `更多` 模块的顺序和标题文案。

`sections` 可以控制模块的顺序，和是否展示该模块。

`title_mapping` 控制模块的标题文案。

`more` 控制底部更多的链接。

类型：

```ts
export type HomePageSectionName = 'post' | 'note' | 'friend' | 'more'

export interface HomePage {
  sections: HomePageSectionName[]
  titleMapping: {
    [key in HomePageSectionName]?: string
  }
  more: IHomePageMoreSection[]
}

export interface IHomePageMoreSection {
  desc: string
  type?: 'like' | 'subscribe'
  cover?: string
  newtab?: boolean
  name: string
  path: string
}
```

### function.player.id

- Type: `number[]`
- Default: `[563534789, 1447327083]`

播放器设置，网易云歌曲 ID。设置默认播放器播放列表。

### function.analyze.enable

- Type: `boolean`
- Default: `false`

开启 Analyze。

### function.analyze.ga

- Type: `string`
- Default: ``

Google Analyze ID.

### function.analyze.baidu

- Type: `string`
- Default: ``

### function.analyze.umami

- id : `string`
- url: `string`
- jsname: `string`

example(yaml)

```yaml
analyze:
  enable: true
  #启用 umami
  umami:
    id: 9ea59d68-f36b-4679xxxxxx
    url: https://analyze.xxxxx
    jsname: umami
```

id 和 url 分别对应 Umami 给你的 id 和 Umami 的 url，jsname 对应你在 Umami 中设置 `TRACKER_SCRIPT_NAME` 这个变量的值（没有设的话则默认为 `umami`），如果想知道怎么部署 Umami，可以看 [这个教程](https://www.timochan.cn/posts/jc/deploy_umami_for_analyze)

::: tip
如果你有用 CloudFlare Worker 反代 Umami 的统计脚本的话，别忘了更改 url 和 jsname 为你在 CloudFlare 设置的值
:::

### function.donate.enable

- Type: `boolean`
- Default: `false`

开启捐赠。

### function.donate.link

- Type: `string`
- Default: `false`

捐赠跳转地址。

### function.ban_devtool.enable

- Type: `string`
- Default: `false`

开启 [devtools-detector](https://github.com/AEPKILL/devtools-detector)。

### function.comment.disable

- Type: `boolean`
- Default: `false`

全站禁用评论模块，禁止评论和所有评论不透出（敏感时期专用）。

### function.notification

- Type: `Record<string, Notification>`

入站通知。配置此项可以在打开站点后，显示一条站内通知。

```json
"notification": {
    "welcome": {
       "title": "标题",
       "message": "消息",
       "icon": "https://example.com/example.png",
       "to-link": "//example.com"
    }
}
```

或者：

```yaml
notification:
  welcome:
    title: 标题
    message: 消息
    icon: https://example.com/example.png
    to-link: //example.com
```

类型：

```ts
interface Notification {
  title?: string
  message: string
  toLink?: string
  icon?: string
}
```
