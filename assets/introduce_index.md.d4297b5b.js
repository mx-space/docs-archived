import{_ as e,o as r,c as a,a as t}from"./app.b0118de6.js";const l='{"title":"介绍","description":"","frontmatter":{"title":"介绍"},"headers":[{"level":2,"title":"特点","slug":"特点"},{"level":2,"title":"现有功能 (部分)","slug":"现有功能-部分"},{"level":2,"title":"采用 Mix-Space 网站示例","slug":"采用-mix-space-网站示例"},{"level":2,"title":"开始","slug":"开始"},{"level":3,"title":"后端单独部署","slug":"后端单独部署"},{"level":3,"title":"前端部署","slug":"前端部署"},{"level":2,"title":"鸣谢","slug":"鸣谢"},{"level":2,"title":"打赏本项目","slug":"打赏本项目"}],"relativePath":"introduce/index.md"}',i={},n=[t('<h1 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a></h1><blockquote><p>本章将会为您展示 Mix-Space 的功能与特性，并介绍来自开源社区的贡献者，希望你能看完。 😃</p></blockquote><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-hidden="true">#</a></h2><p>Mix-Space 前后端是分离的，意味着你可以将前后端分别单独部署不同的服务器上，当然也可以全部部署在一台服务器上</p><p>Mix-Space 的 <a href="https://github.com/mx-space/core" target="_blank" rel="noopener noreferrer">Core</a> 提供后端服务支持，<a href="https://github.com/mx-space/kami" target="_blank" rel="noopener noreferrer">Kami</a> 是作者更新最频繁的前端，<a href="https://github.com/mx-space/mx-web-yun" target="_blank" rel="noopener noreferrer">Mx-Yun</a> 是云游君 Hexo-Yun 的移植版；当然 kami 提供最全的支持，享有 Core 的全部功能，具有良好的动效，各种很可爱的小彩蛋！</p><p>也许第一眼你并不会觉得很惊艳，那请把功能介绍看完吧？</p><h2 id="现有功能-部分" tabindex="-1">现有功能 (部分) <a class="header-anchor" href="#现有功能-部分" aria-hidden="true">#</a></h2><ul><li><p>仪表盘</p><p>可以总览各类数据，一言和今日诗句来自第三方服务。<img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/V0BRMI.png" alt=""></p></li><li><p>文章</p><p>可以发布，修改，删除，标记文章，还可以对你自己喜欢的文章进行置顶！<img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/Vd1kAW.png" alt=""></p></li><li><p>日记</p><p>可以发布，修改，删除，标记日记，同时为了方便回忆，兼备定位功能（需要配合高德地图 API）。<img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/mAwG4T.png" alt=""></p></li><li><p>编辑器</p><p>现支持<code>monaco</code> ， <code>codemirror</code> ， <code>plain</code> 三种编辑器。<img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/ROaydk.png" alt=""></p></li><li><p>评论</p><p>评论有三种类型，没读过的、读过的、被判断为垃圾评论被过滤的。在 <code>Kami</code> 前端，登陆后可以对评论进行置顶！ <img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/oNhuO0.png" alt=""></p></li><li><p>说说</p><p>说说可以用来记录一句话，或者直接保存发布一条<a href="https://hitokoto.cn/" target="_blank" rel="noopener noreferrer">一言</a>。<img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/gMs43j.png" alt=""></p></li><li><p>友链</p><p>在这里可以直接管理友链，新增的未审核的友链会通知到主人，主人通过之后也会邮件通知到对方。<img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/server-links.png" alt=""></p></li><li><p>数据大盘</p><p>您可以看到今日访问的<code>PV</code> 、<code>UA</code> ，及近期访问相对频繁的<code>URL</code> 。<img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/2ke5KU.png" alt=""></p></li><li><p>备份</p><p>在这里可以管理备份，包括下载和直接回滚，或者上传数据文件进行恢复。（需要 mongodb-tools）<img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/cTOSl.png" alt=""></p></li><li><p>Markdown 导入导出</p><p>该功能可以将所有文章导出为 Markdown YAML 兼容的格式，或者导入 Markdown YAML 兼容的文件。（Hexo 兼容的 Markdown）<img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/server-md.png" alt=""></p></li><li><p>搜索功能，基于 Algolia Search，在前端可通过 <code>Command(Ctrl)</code> +<code>K</code> 或者 <code>/</code> 唤出搜索框</p></li><li><p>PTY</p><p><img src="https://user-images.githubusercontent.com/41265413/153223043-b211b0b8-977d-474e-8b51-80f77624dd75.jpg" alt=""></p></li><li><p><a href="https://github.com/mx-space/mx-server/blob/master/src/modules/serverless/serverless.readme.md" target="_blank" rel="noopener noreferrer">云函数</a></p><p>kami 的歌单，追番功能就是使用云函数支持噢？如果你具有一点编程能力，你可以很方便地使用云函数扩展你想要的功能</p></li><li><p><a href="https://mx.shizuri.net" target="_blank" rel="noopener noreferrer">公共面板</a> 该项功能需要允许跨域</p><p>该功能不需要你自己单独部署后台了！</p></li></ul><p>当然，这只是部分示例，如果你想了解更多功能，请访问 Demo</p><ul><li><a href="https://mx-demo.shizuri.net/" target="_blank" rel="noopener noreferrer">Kami Demo</a></li><li><a href="https://mx-demo.shizuri.net/proxy/qaqdmin" target="_blank" rel="noopener noreferrer">后台 Demo</a> demo 后台密码 : <code>demo</code></li></ul><h2 id="采用-mix-space-网站示例" tabindex="-1">采用 Mix-Space 网站示例 <a class="header-anchor" href="#采用-mix-space-网站示例" aria-hidden="true">#</a></h2><ul><li><a href="https://innei.ren" target="_blank" rel="noopener noreferrer">静かな森 - 致虚极，守静笃。</a></li><li><a href="https://blog.iucky.cn" target="_blank" rel="noopener noreferrer">秉松博客 - 有秉性且正直的松</a></li><li><a href="https://www.timochan.cn" target="_blank" rel="noopener noreferrer">TimochanのBlog - Let&#39;s start learning!</a></li><li><a href="https://www.miaoer.xyz" target="_blank" rel="noopener noreferrer">喵二の小博客 - 缘，妙不可言</a></li></ul><h2 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-hidden="true">#</a></h2><p>看到这里，你可能会觉得非常不错，那么希望你有耐心，开始吧？</p><p><a href="/deploy/">很方便的前后端部署部署</a></p><p>如果你分别部署前后端，接下来就是了</p><h3 id="后端单独部署" tabindex="-1">后端单独部署 <a class="header-anchor" href="#后端单独部署" aria-hidden="true">#</a></h3><p>部署后端(Core)，<a href="/deploy/core/core.html">Go</a></p><h3 id="前端部署" tabindex="-1">前端部署 <a class="header-anchor" href="#前端部署" aria-hidden="true">#</a></h3><p>Kami 前端部署，<a href="/deploy/kami/">Go</a></p><p>Mx-Yun 前端部署，<a href="/deploy/yun/">Go</a></p><h2 id="鸣谢" tabindex="-1">鸣谢 <a class="header-anchor" href="#鸣谢" aria-hidden="true">#</a></h2><p>本版文档由以下贡献者编写（按照贡献者名字首字母顺序进行排序）：</p><ul><li><a href="https://blog.cqsjyz.com" target="_blank" rel="noopener noreferrer">623337308</a></li><li><a href="https://github.com/Elmge" target="_blank" rel="noopener noreferrer">Elmge</a></li><li><a href="https://www.miaoer.xyz" target="_blank" rel="noopener noreferrer">喵二</a></li><li><a href="https://github.com/Sayyiku" target="_blank" rel="noopener noreferrer">Sayyiku</a></li><li><a href="https://www.timochan.cn" target="_blank" rel="noopener noreferrer">Timochan</a></li><li><a href="https://github.com/wibus-wee" target="_blank" rel="noopener noreferrer">Wibus</a></li><li><a href="https://github.com/wuhang2003" target="_blank" rel="noopener noreferrer">wuhang2003</a></li><li><a href="https://github.com/zsbai" target="_blank" rel="noopener noreferrer">zsbai</a></li></ul><p>当然，整个项目的开发者是 <a href="https://innei.ren" target="_blank" rel="noopener noreferrer">innei</a> 。</p><p>感谢社区提出的问题及解决方案、帮助笔者简化许多步骤，也欢迎更多人能够参与到我们的开源社区中<a href="https://github.com/mx-space" target="_blank" rel="noopener noreferrer">帮助我们优化项目</a>。</p><h2 id="打赏本项目" tabindex="-1">打赏本项目 <a class="header-anchor" href="#打赏本项目" aria-hidden="true">#</a></h2><ul><li>微信二维码</li></ul><div align="center"><img src="https://cdn.jsdelivr.net/gh/Innei/img-bed@master/20191211132347.png" style="width:40%;"></div>',29)];var s=e(i,[["render",function(e,t,l,i,s,o){return r(),a("div",null,n)}]]);export{l as __pageData,s as default};
