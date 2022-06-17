import{_ as s,o as a,c as n,a as l}from"./app.89c100db.js";const p='{"title":"云函数使用方法","description":"","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言"},{"level":2,"title":"自动安装","slug":"自动安装"},{"level":2,"title":"手动安装(备用 | 自动安装失败可选)","slug":"手动安装-备用-自动安装失败可选"},{"level":3,"title":"安装库","slug":"安装库"},{"level":3,"title":"功能","slug":"功能"},{"level":2,"title":"测试","slug":"测试"},{"level":3,"title":"netease 函数","slug":"netease-函数"},{"level":3,"title":"song 函数","slug":"song-函数"},{"level":3,"title":"bangumi 函数","slug":"bangumi-函数"},{"level":2,"title":"结束","slug":"结束"}],"relativePath":"options/serverless.md"}',o={},e=[l('<h1 id="云函数使用方法" tabindex="-1">云函数使用方法 <a class="header-anchor" href="#云函数使用方法" aria-hidden="true">#</a></h1><blockquote><p>在 Kami 3.5.0 以上的版本，该节内容是必须的。</p></blockquote><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>Mix Space 的云函数实现依赖于动态的路由处理模块，通过云函数可以编写一些简单的 API。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>❗ 注意：第三方库的使用是有限制的；第一你需要先安装了这个库；第二是只有受信任的第三方库和某些系统模块可以使用</p></div><p>具体信息可以参阅 <a href="https://github.com/mx-space/mx-server/blob/master/src/modules/serverless/serverless.readme.md" target="_blank" rel="noopener noreferrer">Severless.Readme</a></p><h2 id="自动安装" tabindex="-1">自动安装 <a class="header-anchor" href="#自动安装" aria-hidden="true">#</a></h2><p>进入后台，移动到 <code>其他 · 配置与云函数</code> ，点击蓝色的 <code>↓</code> 按钮 ， 选择 kami ，等待即可。如果失败了，请参考下面的手动安装。</p><h2 id="手动安装-备用-自动安装失败可选" tabindex="-1">手动安装(备用 | 自动安装失败可选) <a class="header-anchor" href="#手动安装-备用-自动安装失败可选" aria-hidden="true">#</a></h2><h3 id="安装库" tabindex="-1">安装库 <a class="header-anchor" href="#安装库" aria-hidden="true">#</a></h3><p>进入后台，移动到 <code>其他 · 终端</code></p><p>如果没有开启，请自行到 设定—系统—终端设定 里面开启终端；出于安全考虑，请使用完关闭终端功能开关。 <img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/admin-webshell.png" alt=""> 进入终端，执行命令</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#758575;"># 检查npm是否存在</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">npm -v</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#758575;"># 如果缺失npm 请先使用容器内已存在的管理器安装 npm，例如 apk，yarn。</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">apk add npm</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#758575;">#(可选)  yarn global add npm</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#758575;"># 安装必须库</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">npm install @mx-space/extra</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#A0ADA0;"># 检查npm是否存在</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">npm -v</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A0ADA0;"># 如果缺失npm 请先使用容器内已存在的管理器安装 npm，例如 apk，yarn。</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">apk add npm</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A0ADA0;">#(可选)  yarn global add npm</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A0ADA0;"># 安装必须库</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">npm install @mx-space/extra</span></span>\n<span class="line"></span></code></pre></div><p>退出后台的终端（webshell），并关闭该功能开关（建议）。</p><h3 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-hidden="true">#</a></h3><h4 id="歌单（网易云）" tabindex="-1">歌单（网易云） <a class="header-anchor" href="#歌单（网易云）" aria-hidden="true">#</a></h4><p>进入后台，移动到 <code>其他 · 配置与云函数</code></p><p>新建一个项</p><ul><li>名字：<code>netease</code></li><li>引用：<code>kami</code></li><li>元类型：<code>kami</code></li><li>数据类型：<code>Function</code></li><li>公开： <code>是</code></li></ul><p>内容示例如下，请参照自己的情况进行修改</p><div class="language-typescript"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">extra</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@mx-space/extra&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CB7676;">async</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">handler</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">NeteaseMusic</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">extra</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">client</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">NeteaseMusic</span><span style="color:#858585;">(</span><span style="color:#B8A965;">phone</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">password</span><span style="color:#858585;">)</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#4D9375;">await</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">client</span><span style="color:#858585;">.</span><span style="color:#A1B567;">Login</span><span style="color:#858585;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">weekdata</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">await</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">client</span><span style="color:#858585;">.</span><span style="color:#A1B567;">getWeekData</span><span style="color:#858585;">()</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">alldata</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">await</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">client</span><span style="color:#858585;">.</span><span style="color:#A1B567;">getAllData</span><span style="color:#858585;">()</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">playlist</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">await</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">client</span><span style="color:#858585;">.</span><span style="color:#A1B567;">getFavorite</span><span style="color:#858585;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">responsePayload</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#B8A965;">playlist</span><span style="color:#858585;">,</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#B8A965;">weekdata</span><span style="color:#858585;">,</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#B8A965;">alldata</span><span style="color:#858585;">,</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">responsePayload</span></span>\n<span class="line"><span style="color:#858585;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">phone</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;15922****&#39;</span></span>\n<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">password</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;wddw***s&#39;</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">extra</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@mx-space/extra&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#AB5959;">async</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">handler</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">NeteaseMusic</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">extra</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">client</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">NeteaseMusic</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">phone</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">password</span><span style="color:#8E8F8B;">)</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#1C6B48;">await</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">client</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">Login</span><span style="color:#8E8F8B;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">weekdata</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">await</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">client</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">getWeekData</span><span style="color:#8E8F8B;">()</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">alldata</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">await</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">client</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">getAllData</span><span style="color:#8E8F8B;">()</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">playlist</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">await</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">client</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">getFavorite</span><span style="color:#8E8F8B;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">responsePayload</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#8C862B;">playlist</span><span style="color:#8E8F8B;">,</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#8C862B;">weekdata</span><span style="color:#8E8F8B;">,</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#8C862B;">alldata</span><span style="color:#8E8F8B;">,</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">responsePayload</span></span>\n<span class="line"><span style="color:#8E8F8B;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">phone</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;15922****&#39;</span></span>\n<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">password</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;wddw***s&#39;</span></span>\n<span class="line"></span></code></pre></div><p>注意：示例中的 <code>phone</code> 和 <code>password</code> 需要替换成自己的，其他的复制过去就行。</p><h4 id="追番" tabindex="-1">追番 <a class="header-anchor" href="#追番" aria-hidden="true">#</a></h4><p>新建一个项</p><ul><li>名字：<code>bangumi</code></li><li>引用：<code>kami</code></li><li>元类型：<code>kami</code></li><li>数据类型：<code>Function</code></li><li>公开： <code>是</code></li></ul><p>示例如下：</p><div class="language-typescript"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">extra</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@mx-space/extra&#39;</span></span>\n<span class="line"><span style="color:#CB7676;">async</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">handler</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">BiliClient</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">extra</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">bl</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">await</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">context</span><span style="color:#858585;">.</span><span style="color:#A1B567;">getMaster</span><span style="color:#858585;">().</span><span style="color:#A1B567;">then</span><span style="color:#858585;">((</span><span style="color:#B8A965;">user</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">user</span><span style="color:#858585;">.</span><span style="color:#B8A965;">socialIds</span><span style="color:#858585;">.</span><span style="color:#B8A965;">bilibili</span><span style="color:#858585;">)</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">client</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">BiliClient</span><span style="color:#858585;">(</span><span style="color:#E0A569;">parseInt</span><span style="color:#858585;">(</span><span style="color:#B8A965;">bl</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">||</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">uid</span><span style="color:#858585;">))</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">bangumi</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">await</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">client</span><span style="color:#858585;">.</span><span style="color:#A1B567;">getFavoriteBangumi</span><span style="color:#858585;">(</span><span style="color:#E0A569;">parseInt</span><span style="color:#858585;">(</span><span style="color:#B8A965;">len</span><span style="color:#858585;">.</span><span style="color:#A1B567;">toString</span><span style="color:#858585;">()))</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">bangumi</span></span>\n<span class="line"><span style="color:#858585;">}</span></span>\n<span class="line"><span style="color:#758575;">// 如果社交平台 ID 录入中有哔哩哔哩 ID 可不填，留空</span></span>\n<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">uid</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">11111</span></span>\n<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">len</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">10</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">extra</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@mx-space/extra&#39;</span></span>\n<span class="line"><span style="color:#AB5959;">async</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">handler</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">BiliClient</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">extra</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">bl</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">await</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">context</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">getMaster</span><span style="color:#8E8F8B;">().</span><span style="color:#6C7834;">then</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">user</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">user</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">socialIds</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">bilibili</span><span style="color:#8E8F8B;">)</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">client</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">BiliClient</span><span style="color:#8E8F8B;">(</span><span style="color:#B58451;">parseInt</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">bl</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">||</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">uid</span><span style="color:#8E8F8B;">))</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">bangumi</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">await</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">client</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">getFavoriteBangumi</span><span style="color:#8E8F8B;">(</span><span style="color:#B58451;">parseInt</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">len</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">toString</span><span style="color:#8E8F8B;">()))</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">bangumi</span></span>\n<span class="line"><span style="color:#8E8F8B;">}</span></span>\n<span class="line"><span style="color:#A0ADA0;">// 如果社交平台 ID 录入中有哔哩哔哩 ID 可不填，留空</span></span>\n<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">uid</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">11111</span></span>\n<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">len</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">10</span></span>\n<span class="line"></span></code></pre></div><p>注意：<code>uid</code> 是自己的 哔哩哔哩 UID，<code>len</code> 是允许获取自己看过的番的最大个数，实际展示个数受限于实际的追番数。</p><h4 id="背景音乐" tabindex="-1">背景音乐 <a class="header-anchor" href="#背景音乐" aria-hidden="true">#</a></h4><p>新建一个项</p><ul><li><p>名字：<code>song</code></p></li><li><p>引用：<code>kami</code></p></li><li><p>元类型：<code>kami</code></p></li><li><p>数据类型：<code>Function</code></p></li><li><p>公开： <code>是</code></p></li></ul><p>示例如下：</p><div class="language-typescript"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">NeteaseCloudMusicApi</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@mx-space/extra&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CB7676;">async</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">handler</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">song_url</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">NeteaseCloudMusicApi</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">id</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">context</span><span style="color:#858585;">.</span><span style="color:#B8A965;">req</span><span style="color:#858585;">.</span><span style="color:#B8A965;">query</span><span style="color:#858585;">.</span><span style="color:#B8A965;">id</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#CB7676;">!</span><span style="color:#B8A965;">id</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">message</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;id must be not empty stringnumber&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">data</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">await</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">song_url</span><span style="color:#858585;">({</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">id</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">+</span><span style="color:#B8A965;">id</span><span style="color:#858585;">,</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">data</span><span style="color:#858585;">.</span><span style="color:#B8A965;">body</span><span style="color:#858585;">.</span><span style="color:#B8A965;">data</span></span>\n<span class="line"><span style="color:#858585;">}</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">NeteaseCloudMusicApi</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@mx-space/extra&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#AB5959;">async</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">handler</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">song_url</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">NeteaseCloudMusicApi</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">id</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">context</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">req</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">query</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">id</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">!</span><span style="color:#8C862B;">id</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B58451;">message</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;id must be not empty stringnumber&#39;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">data</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">await</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">song_url</span><span style="color:#8E8F8B;">({</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">id</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">+</span><span style="color:#8C862B;">id</span><span style="color:#8E8F8B;">,</span></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">  </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">data</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">body</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">data</span></span>\n<span class="line"><span style="color:#8E8F8B;">}</span></span>\n<span class="line"></span></code></pre></div><p>注意：背景音乐的歌单依赖于 Kami v3 那节中设置的网易云歌曲 ID；若没有设置，则使用默认的。</p><p>到这里，Kami 默认功能需要的云函数已经配置完毕。</p><h2 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-hidden="true">#</a></h2><p>以 <code>server.test.cn</code> 为例</p><h3 id="netease-函数" tabindex="-1">netease 函数 <a class="header-anchor" href="#netease-函数" aria-hidden="true">#</a></h3><p>打开浏览器，访问 <a href="https://server.test.cn/api/v2/serverless/kami/netease" target="_blank" rel="noopener noreferrer">https://server.test.cn/api/v2/serverless/kami/netease</a></p><p>状态码 返回 200 ，且有正常数据出现。</p><p>示例如下：</p><p><img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/api-return.png" alt=""></p><h3 id="song-函数" tabindex="-1">song 函数 <a class="header-anchor" href="#song-函数" aria-hidden="true">#</a></h3><p>访问 <a href="https://server.test.cn/api/v2/serverless/kami/song?id=95438221" target="_blank" rel="noopener noreferrer">https://server.test.cn/api/v2/serverless/kami/song?id=95438221</a></p><p>状态码 返回 200 ，且返回该歌曲的数据</p><h3 id="bangumi-函数" tabindex="-1">bangumi 函数 <a class="header-anchor" href="#bangumi-函数" aria-hidden="true">#</a></h3><p>访问 <a href="https://server.test.cn/api/v2/serverless/kami/bangumi" target="_blank" rel="noopener noreferrer">https://server.test.cn/api/v2/serverless/kami/bangumi</a></p><p>状态码 返回 200，且返回你自己的追番数据</p><h2 id="结束" tabindex="-1">结束 <a class="header-anchor" href="#结束" aria-hidden="true">#</a></h2><p>如果测试都没问题，可以愉快的升级 Kami 3.5.0 以上的版本了，而且据作者介绍，可以通过这个自己 DIY 一些功能，期待各位大佬的 PR。</p>',50)];var c=s(o,[["render",function(s,l,p,o,c,t){return a(),n("div",null,e)}]]);export{p as __pageData,c as default};