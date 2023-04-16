import{h as a,j as e,k as s,q as t,C as l,p,I as o,Y as i}from"./chunks/framework.b948d756.js";const n={class:"badge"},c=a({__name:"badge",props:{text:{type:String,required:!0}},setup:a=>(l,p)=>(e(),s("span",n,t(a.text),1))}),r=i('<h1 id="文本宏替换" tabindex="-1">文本宏替换 <a class="header-anchor" href="#文本宏替换" aria-label="Permalink to &quot;文本宏替换&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这是一个实验性特征，可能会造成系统的不稳定。</p><p>经过测试，使用大量文本宏会造成请求文章的接口变慢。</p></div><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>使用使功能需要先在后台中开启，设置 - 系统 - 文本设定 - 文本宏替换。</p></div>',4),d=i('<p>Environment: Server/NodeJS</p><p>文本宏是一个以 <code>[[ ]]</code> 包裹的语法，例如 <code>[[ $created ]]</code> 是一个合法的语法。在文章中可以插入文本宏，和 Markdown 一样，但是这个语法不是用 Markdown 解析和渲染，而是直接会在服务端进行替换。因此可以通过这个特征在文章中插入一些来自服务端的数据，也可以执行一些函数。</p><p>例如说一篇文章的标题为「实例标题」，他的正文内容为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">一个句子。[[ $title ]]</span></span></code></pre></div><p>将会输出：</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">一个句子。实例标题</span></span></code></pre></div><p>又比如说：</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;p align=&quot;right&quot;&gt;更新于 [[ #dayjs($modified).format(&#39;YY-MM&#39;) ]]&lt;/p&gt;</span></span></code></pre></div><p>将会输出：</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;p align=&quot;right&quot;&gt;更新于 22-04&lt;/p&gt;</span></span></code></pre></div><p>这是一个动态的数据，<code>dayjs</code> 函数由服务端提供。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>所有的函数方法均在服务端执行，请注意内存的泄露造成系统的不稳定。</p></div><h2 id="语法格式" tabindex="-1">语法格式 <a class="header-anchor" href="#语法格式" aria-label="Permalink to &quot;语法格式&quot;">​</a></h2><p>以 <code>[[ </code> 开头，<code> ]]</code> 结尾，注意一个空格是必须的。</p><h3 id="访问变量" tabindex="-1">访问变量 <a class="header-anchor" href="#访问变量" aria-label="Permalink to &quot;访问变量&quot;">​</a></h3><p>访问变量使用 <code>$</code> 前缀。</p><p>目前可以访问的变量有：当前记录的所有字段（数据库记录值）。</p><p><code>title</code> <code>created</code> <code>slug</code> <code>nid</code> <code>_id</code> ..</p><p>如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[[ $created ]]</span></span></code></pre></div><h3 id="使用函数" tabindex="-1">使用函数 <a class="header-anchor" href="#使用函数" aria-label="Permalink to &quot;使用函数&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>使用函数可能会造成系统不稳定。</p><p>函数的执行和 Serverless 的执行保持一致。</p></div><p>执行函数使用 <code>#</code> 前缀。</p><p>你可以使用任意 JS 代码去执行一个函数，也可以是一个 JS 语句。</p><p>如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[[ #$title.slice(0, 5) ]]</span></span></code></pre></div><p>使用内置方法。</p><p>如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[[ #dayjs($created).format(&#39;YYYY&#39;) ]]</span></span></code></pre></div><p>内置方法目前有：</p><ul><li><p><a href="https://day.js.org/zh-CN/" target="_blank" rel="noreferrer">dayjs</a></p></li><li><p>formatNow(time: Date | string): string, 相对时间</p></li><li><p>center(text: string): string, 居中</p></li><li><p>right(text: string): string, 居右</p></li><li><p>opacity(text: string, opacity: number): string, 透明文本</p></li><li><p>blur(text: string, blur: number): string, 高斯模糊化文字</p></li><li><p>color(text: string, color: string): string, 给文字上色</p></li><li><p>size(text: string): string, 给文字上色</p></li></ul>',31),g=JSON.parse('{"title":"文本宏替换","description":"","frontmatter":{},"headers":[],"relativePath":"feature/text-macors.md"}'),u=Object.assign({name:"feature/text-macors.md"},{setup:a=>(a,t)=>(e(),s("div",null,[r,l("p",null,[p("Required: "),o(c,{text:"mx-server >=3.26.0"})]),d]))});export{g as __pageData,u as default};
