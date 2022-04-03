import{_ as s,c as a,o as n,a as l}from"./app.1fe422cb.js";const g='{"title":"\u670D\u52A1\u7AEF","description":"","frontmatter":{"title":"\u670D\u52A1\u7AEF"},"headers":[{"level":2,"title":"\u9879\u76EE\u7ED3\u6784","slug":"\u9879\u76EE\u7ED3\u6784"},{"level":2,"title":"\u5E94\u7528\u7ED3\u6784","slug":"\u5E94\u7528\u7ED3\u6784"},{"level":2,"title":"\u5F00\u53D1","slug":"\u5F00\u53D1"},{"level":3,"title":"API\u63A5\u53E3","slug":"api\u63A5\u53E3"},{"level":3,"title":"\u56FE\u5F62\u5316\u67E5\u8BE2","slug":"\u56FE\u5F62\u5316\u67E5\u8BE2"},{"level":2,"title":"Reference","slug":"reference"}],"relativePath":"dev/server.md"}',e={},p=l(`<h1 id="mserver-next-v3" tabindex="-1">MServer Next (v3) <a class="header-anchor" href="#mserver-next-v3" aria-hidden="true">#</a></h1><blockquote><p><strong>\u9002\u7528\u4E8E Mix Space \u7684 RESTful API &amp; GraphQL \u670D\u52A1\u7AEF\u5E94\u7528\uFF1B\u57FA\u4E8E <a href="https://github.com/nestjs/nest" target="_blank" rel="noopener noreferrer"><code>nestjs</code></a> (nodejs)\uFF0C\u9700\u5B89\u88C5 <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><code>mongoDB</code></a> \u548C <a href="https://redis.io/" target="_blank" rel="noopener noreferrer"><code>Redis</code></a> \u65B9\u53EF\u5B8C\u6574\u8FD0\u884C\u3002</strong></p></blockquote><blockquote><p>v3 \u8FD8\u662F\u4F7F\u7528 <a href="https://github.com/nestjs/nest" target="_blank" rel="noopener noreferrer"><code>nestjs</code></a> \u8FDB\u884C\u91CD\u6784\uFF0C\u4E4B\u524D\u7684\u7248\u672C\u5728 <a href="https://github.com/mx-space/server" target="_blank" rel="noopener noreferrer">\u6B64\u4ED3\u5E93</a>\u3002</p></blockquote><p>\u914D\u5408\u76F8\u5173\u9879\u76EE\u4E00\u8D77\u4F7F\u7528:</p><ul><li><strong>SSR Blog</strong>: <ul><li><a href="https://github.com/mx-space/kami" target="_blank" rel="noopener noreferrer">Kami</a> powered by NextJS (\u4E00\u4E2A\u8D70\u53EF\u7231\u98CE\u8DEF\u7EBF\u7684\u4E2A\u4EBA\u7A7A\u95F4)</li><li>\u672A\u6765\u4F1A\u53D8\u591A\u5417</li></ul></li><li><strong>Admin</strong>: <a href="https://github.com/mx-space/admin-next" target="_blank" rel="noopener noreferrer">Admin</a></li><li>\u672A\u6765\u53EF\u671F</li></ul><p>\u63A5\u53E3\u6587\u6863\u901A\u8FC7\u5F00\u53D1\u73AF\u5883 Swagger \u67E5\u9605\uFF0C\u63A5\u53E3\u5927\u6982\u6709 120+ \u4E2A</p><h2 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1">\u9879\u76EE\u7ED3\u6784 <a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language-"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#dbd7ca;">.</span></span>
<span class="line"><span style="color:#dbd7ca;">\u251C\u2500\u2500 app.config.ts                 # \u4E3B\u7A0B\u5E8F\u914D\u7F6E\uFF0C\u6570\u636E\u5E93\u3001\u7A0B\u5E8F\u3001\u7B2C\u4E09\u65B9\uFF0C\u4E00\u5207\u53EF\u914D\u7F6E\u9879</span></span>
<span class="line"><span style="color:#dbd7ca;">\u251C\u2500\u2500 app.controller.ts             # \u4E3B\u7A0B\u5E8F\u6839\u63A7\u5236\u5668</span></span>
<span class="line"><span style="color:#dbd7ca;">\u251C\u2500\u2500 app.module.ts                 # \u4E3B\u7A0B\u5E8F\u6839\u6A21\u5757\uFF0C\u8D1F\u8D23\u5404\u4E1A\u52A1\u6A21\u5757\u7684\u805A\u5408</span></span>
<span class="line"><span style="color:#dbd7ca;">\u251C\u2500\u2500 app.resolver.ts               # \u4E3B\u7A0B\u5E8F\u6839 GraphQL Resolver</span></span>
<span class="line"><span style="color:#dbd7ca;">\u251C\u2500\u2500 common                        # \u5B58\u653E\u4E2D\u95F4\u4EF6</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 adapt                     # Fastify \u9002\u914D\u5668\u7684\u914D\u7F6E</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 decorator                 # \u4E1A\u52A1\u88C5\u9970\u5668</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 exceptions                # \u81EA\u5B9A\u4E49\u5F02\u5E38</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 filters                   # \u5F02\u5E38\u5904\u7406\u5668</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 guard                     # \u5B88\u536B\u4E0E\u9274\u6743</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 interceptors              # \u62E6\u622A\u5668, \u6570\u636E\u8FC7\u6EE4\u4E0E\u54CD\u5E94\u683C\u5F0F\u5316\u5904\u7406</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 middlewares               # \u4F20\u7EDF\u610F\u4E49\u4E0A\u7684\u4E2D\u95F4\u4EF6</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u2514\u2500\u2500 pipes                     # \u7BA1\u9053</span></span>
<span class="line"><span style="color:#dbd7ca;">\u251C\u2500\u2500 constants                     # \u5E38\u91CF</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 article.constant.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 cache.constant.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 meta.constant.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 path.constant.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u2514\u2500\u2500 system.constant.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u251C\u2500\u2500 main.ts                       # \u5F15\u5165\u914D\u7F6E\uFF0C\u542F\u52A8\u4E3B\u7A0B\u5E8F\uFF0C\u5F15\u5165\u5404\u79CD\u5168\u5C40\u670D\u52A1</span></span>
<span class="line"><span style="color:#dbd7ca;">\u251C\u2500\u2500 modules                       # \u4E1A\u52A1\u903B\u8F91\u6A21\u5757</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 aggregate</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 analyze</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 auth</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 backup</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 category</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 comment</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 configs</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 feed</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 health</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 init</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 link</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 markdown</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 note</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 option</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 page</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 pageproxy</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 post</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 project</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 recently</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 say</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 search</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 sitemap</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 tool</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u2514\u2500\u2500 user</span></span>
<span class="line"><span style="color:#dbd7ca;">\u251C\u2500\u2500 processors                      # \u6838\u5FC3\u8F85\u52A9\u6A21\u5757</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 cache                       # Redis \u7F13\u5B58\u76F8\u5173</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 database                    # Mongo \u6570\u636E\u5E93\u76F8\u5173</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 gateway                     # Socket.IO \u76F8\u5173</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 helper                      # \u8F85\u52A9\u7C7B</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u2514\u2500\u2500 logger                      # \u81EA\u5B9A\u4E49 Logger</span></span>
<span class="line"><span style="color:#dbd7ca;">\u251C\u2500\u2500 shared                          # \u901A\u7528\u6A21\u578B</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 dto                         # \u6570\u636E\u9A8C\u8BC1\u6A21\u578B</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 interface                   # \u63A5\u53E3</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u2514\u2500\u2500 model                       # \u57FA\u672C\u6570\u636E\u6A21\u578B</span></span>
<span class="line"><span style="color:#dbd7ca;">\u251C\u2500\u2500 utils                           # \u5DE5\u5177\u7C7B</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 crud.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 dayjs.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 global.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 index.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 ip.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 nest.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 pic.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 query.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 redis.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 system.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 time.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u251C\u2500\u2500 transfrom.util.ts</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2502   \u2514\u2500\u2500 validator</span></span>
<span class="line"><span style="color:#dbd7ca;">\u2514\u2500\u2500 zx.global.ts</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393a34;">.</span></span>
<span class="line"><span style="color:#393a34;">\u251C\u2500\u2500 app.config.ts                 # \u4E3B\u7A0B\u5E8F\u914D\u7F6E\uFF0C\u6570\u636E\u5E93\u3001\u7A0B\u5E8F\u3001\u7B2C\u4E09\u65B9\uFF0C\u4E00\u5207\u53EF\u914D\u7F6E\u9879</span></span>
<span class="line"><span style="color:#393a34;">\u251C\u2500\u2500 app.controller.ts             # \u4E3B\u7A0B\u5E8F\u6839\u63A7\u5236\u5668</span></span>
<span class="line"><span style="color:#393a34;">\u251C\u2500\u2500 app.module.ts                 # \u4E3B\u7A0B\u5E8F\u6839\u6A21\u5757\uFF0C\u8D1F\u8D23\u5404\u4E1A\u52A1\u6A21\u5757\u7684\u805A\u5408</span></span>
<span class="line"><span style="color:#393a34;">\u251C\u2500\u2500 app.resolver.ts               # \u4E3B\u7A0B\u5E8F\u6839 GraphQL Resolver</span></span>
<span class="line"><span style="color:#393a34;">\u251C\u2500\u2500 common                        # \u5B58\u653E\u4E2D\u95F4\u4EF6</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 adapt                     # Fastify \u9002\u914D\u5668\u7684\u914D\u7F6E</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 decorator                 # \u4E1A\u52A1\u88C5\u9970\u5668</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 exceptions                # \u81EA\u5B9A\u4E49\u5F02\u5E38</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 filters                   # \u5F02\u5E38\u5904\u7406\u5668</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 guard                     # \u5B88\u536B\u4E0E\u9274\u6743</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 interceptors              # \u62E6\u622A\u5668, \u6570\u636E\u8FC7\u6EE4\u4E0E\u54CD\u5E94\u683C\u5F0F\u5316\u5904\u7406</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 middlewares               # \u4F20\u7EDF\u610F\u4E49\u4E0A\u7684\u4E2D\u95F4\u4EF6</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u2514\u2500\u2500 pipes                     # \u7BA1\u9053</span></span>
<span class="line"><span style="color:#393a34;">\u251C\u2500\u2500 constants                     # \u5E38\u91CF</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 article.constant.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 cache.constant.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 meta.constant.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 path.constant.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u2514\u2500\u2500 system.constant.ts</span></span>
<span class="line"><span style="color:#393a34;">\u251C\u2500\u2500 main.ts                       # \u5F15\u5165\u914D\u7F6E\uFF0C\u542F\u52A8\u4E3B\u7A0B\u5E8F\uFF0C\u5F15\u5165\u5404\u79CD\u5168\u5C40\u670D\u52A1</span></span>
<span class="line"><span style="color:#393a34;">\u251C\u2500\u2500 modules                       # \u4E1A\u52A1\u903B\u8F91\u6A21\u5757</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 aggregate</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 analyze</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 auth</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 backup</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 category</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 comment</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 configs</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 feed</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 health</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 init</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 link</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 markdown</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 note</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 option</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 page</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 pageproxy</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 post</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 project</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 recently</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 say</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 search</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 sitemap</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 tool</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u2514\u2500\u2500 user</span></span>
<span class="line"><span style="color:#393a34;">\u251C\u2500\u2500 processors                      # \u6838\u5FC3\u8F85\u52A9\u6A21\u5757</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 cache                       # Redis \u7F13\u5B58\u76F8\u5173</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 database                    # Mongo \u6570\u636E\u5E93\u76F8\u5173</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 gateway                     # Socket.IO \u76F8\u5173</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 helper                      # \u8F85\u52A9\u7C7B</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u2514\u2500\u2500 logger                      # \u81EA\u5B9A\u4E49 Logger</span></span>
<span class="line"><span style="color:#393a34;">\u251C\u2500\u2500 shared                          # \u901A\u7528\u6A21\u578B</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 dto                         # \u6570\u636E\u9A8C\u8BC1\u6A21\u578B</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 interface                   # \u63A5\u53E3</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u2514\u2500\u2500 model                       # \u57FA\u672C\u6570\u636E\u6A21\u578B</span></span>
<span class="line"><span style="color:#393a34;">\u251C\u2500\u2500 utils                           # \u5DE5\u5177\u7C7B</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 crud.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 dayjs.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 global.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 index.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 ip.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 nest.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 pic.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 query.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 redis.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 system.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 time.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u251C\u2500\u2500 transfrom.util.ts</span></span>
<span class="line"><span style="color:#393a34;">\u2502   \u2514\u2500\u2500 validator</span></span>
<span class="line"><span style="color:#393a34;">\u2514\u2500\u2500 zx.global.ts</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="\u5E94\u7528\u7ED3\u6784" tabindex="-1">\u5E94\u7528\u7ED3\u6784 <a class="header-anchor" href="#\u5E94\u7528\u7ED3\u6784" aria-hidden="true">#</a></h2><ul><li><p>\u8BF7\u6C42\u5904\u7406\u6D41\u7A0B</p><ol><li>request\uFF1A\u6536\u5230\u8BF7\u6C42</li><li>middleware\uFF1A\u4E2D\u95F4\u4EF6\u8FC7\u6EE4\u722C\u866B PHP \u8089\u9E21\u626B\u63CF\u8DEF\u5F84\uFF0C\u8BB0\u5F55\u8BBF\u95EE\u5386\u53F2</li><li>guard\uFF1A\u5B88\u536B\u8FC7\u6EE4\uFF08\u9274\u6743\uFF09\u548C\u89D2\u8272\u9644\u52A0</li><li>interceptor:before\uFF1A\u53EA\u7528\u4E8E DEBUG \u8BF7\u6C42\u8BA1\u65F6</li><li>pipe\uFF1A\u6821\u9A8C\u8BF7\u6C42\u6570\u636E\uFF0C\u8FC7\u6EE4\u672A\u77E5\u6570\u636E\uFF0C\u975E\u6CD5\u7C7B\u578B\u629B\u9519 422</li><li>controller &amp; resolver\uFF1A\u4E1A\u52A1\u63A7\u5236\u5668</li><li>service\uFF1A\u4E1A\u52A1\u670D\u52A1</li><li>interceptor:after\uFF1A\u6570\u636E\u6D41\u62E6\u622A\u5668\uFF08\u683C\u5F0F\u5316\u6570\u636E\uFF09\u3001\u8BF7\u6C42\u7F13\u5B58</li><li>filter\uFF1A\u6355\u83B7\u4EE5\u4E0A\u6240\u6709\u6D41\u7A0B\u4E2D\u51FA\u73B0\u7684\u5F02\u5E38\uFF0C\u5982\u679C\u4EFB\u4F55\u4E00\u4E2A\u73AF\u8282\u629B\u51FA\u5F02\u5E38\uFF0C\u5219\u8FD4\u56DE\u9519\u8BEF</li></ol></li><li><p>\u62E6\u622A\u5668\u6D41\u5411</p></li></ul><div class="language-"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#dbd7ca;">ResponseInterceptor -&gt; JSONSerializeInterceptor -&gt; CountingInterceptor -&gt; HttpCacheInterceptor</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393a34;">ResponseInterceptor -&gt; JSONSerializeInterceptor -&gt; CountingInterceptor -&gt; HttpCacheInterceptor</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><ul><li><p><a href="https://github.com/mx-space/server-next/tree/master/src/modules" target="_blank" rel="noopener noreferrer">\u4E1A\u52A1\u903B\u8F91\u6A21\u5757</a></p><ol><li>[Aggregate] \u805A\u5408</li><li>[Analyze] \u6570\u636E\u7EDF\u8BA1</li><li>[Auth] \u8BA4\u8BC1</li><li>[Backup] \u5907\u4EFD</li><li>[Category] \u5206\u7C7B</li><li>[Commnet] \u8BC4\u8BBA</li><li>[Configs] \u8BFB\u53D6\u914D\u7F6E\u9879</li><li>[Feed] RSS</li><li>[Health] \u5E94\u7528\u5065\u5EB7\u68C0\u67E5\u4E0E\u65E5\u5FD7\u76F8\u5173</li><li>[Init] \u521D\u59CB\u5316\u76F8\u5173</li><li>[Link] \u53CB\u94FE</li><li>[Markdown] Markdown \u89E3\u6790\u5BFC\u5165\u5BFC\u51FA\u89E3\u6790\u76F8\u5173</li><li>[Note] \u65E5\u8BB0</li><li>[Option] \u8BBE\u7F6E</li><li>[Page] \u72EC\u7ACB\u9875\u9762</li><li>[PageProxy] \u53CD\u4EE3\u7BA1\u7406\u9875</li><li>[Post] \u535A\u6587</li><li>[Project] \u9879\u76EE</li><li>[Recently] \u6700\u8FD1</li><li>[Say] \u8BF4\u8BF4</li><li>[Search] \u641C\u7D22</li><li>[Sitemap] \u7AD9\u70B9\u5730\u56FE</li><li>[Tool] \u5DE5\u5177\u63A5\u53E3</li><li>[User] \u7528\u6237</li></ol></li><li><p><a href="https://github.com/mx-space/server-next/tree/master/src/processors" target="_blank" rel="noopener noreferrer">\u6838\u5FC3\u8F85\u52A9\u6A21\u5757 processors</a></p><ol><li>[cache] Redis \u7F13\u5B58\u76F8\u5173</li><li>[database] \u6570\u636E\u5E93\u76F8\u5173</li><li>[gateway] <a href="http://Socket.IO" target="_blank" rel="noopener noreferrer">Socket.IO</a> \u76F8\u5173 <ul><li>\u7528\u6237\u7AEF</li><li>\u7BA1\u7406\u7AEF</li><li>\u5B9E\u65F6\u901A\u77E5</li></ul></li><li>[helper] \u8F85\u52A9\u7C7B</li><li>[CountingService] \u63D0\u4F9B\u66F4\u65B0\u9605\u8BFB\u8BA1\u6570</li><li>[CronService] \u7EF4\u62A4\u7BA1\u7406\u8BA1\u5212\u4EFB\u52A1 <ul><li>\u81EA\u52A8\u5907\u4EFD</li><li>\u63A8\u9001\u767E\u5EA6\u641C\u7D22</li><li>\u6E05\u9664\u7F13\u5B58</li><li>etc.</li></ul></li><li>[EmailService] \u9001\u4FE1\u670D\u52A1</li><li>[HttpService] \u8BF7\u6C42\u6A21\u5757</li><li>[ImageService] \u56FE\u7247\u5904\u7406</li><li>[TqService] \u4EFB\u52A1\u961F\u5217</li><li>[UploadService] \u4E0A\u4F20\u670D\u52A1</li><li>[AssetService] \u83B7\u53D6\u672C\u5730\u8D44\u6E90\u670D\u52A1</li></ol></li></ul><h2 id="\u5F00\u53D1" tabindex="-1">\u5F00\u53D1 <a class="header-anchor" href="#\u5F00\u53D1" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u597D <code>redis</code> \u3001<code>mongodb</code></p><p>\u514B\u9686\u4ED3\u5E93</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">git clone https://github.com/mx-space/server-next.git --depth 1 server</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">git clone https://github.com/mx-space/server-next.git --depth 1 server</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u6362\u5230\u7A33\u5B9A\u5206\u652F</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> server </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> git fetch --tags </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> git checkout </span><span style="color:#C98A7D;">$(git rev-list --tags --max-count=1)</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> ..</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> server </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> git fetch --tags </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> git checkout </span><span style="color:#B56959;">$(git rev-list --tags --max-count=1)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">cd</span><span style="color:#393A34;"> ..</span></span>
<span class="line"></span></code></pre></div><p>\u6784\u5EFA\uFF0C\u542F\u52A8server</p><div class="language-"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#dbd7ca;">pnpm i</span></span>
<span class="line"><span style="color:#dbd7ca;">pnpm start</span></span>
<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393a34;">pnpm i</span></span>
<span class="line"><span style="color:#393a34;">pnpm start</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3 id="api\u63A5\u53E3" tabindex="-1">API\u63A5\u53E3 <a class="header-anchor" href="#api\u63A5\u53E3" aria-hidden="true">#</a></h3><p>\u6D4F\u89C8\u5668\u8BBF\u95EE <a href="http://127.0.0.1/api-docs" target="_blank" rel="noopener noreferrer">http://127.0.0.1/api-docs</a> \u53EF\u4EE5\u770B\u5230 Server \u63D0\u4F9B\u7684 API \u63A5\u53E3\u3002</p><p>\u4F60\u8FD8\u53EF\u4EE5\u5BF9\u6BCF\u4E00\u4E2A\u63A5\u53E3\u8FDB\u884C\u6D4B\u8BD5\u3002</p><h3 id="\u56FE\u5F62\u5316\u67E5\u8BE2" tabindex="-1">\u56FE\u5F62\u5316\u67E5\u8BE2 <a class="header-anchor" href="#\u56FE\u5F62\u5316\u67E5\u8BE2" aria-hidden="true">#</a></h3><p><a href="http://127.0.0.1/graphql" target="_blank" rel="noopener noreferrer">http://127.0.0.1/graphql</a></p><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u53C2\u8003\u4E86 <a href="https://github.com/surmon-china/nodepress" target="_blank" rel="noopener noreferrer">nodepress</a></p>`,27),o=[p];function c(t,r,i,d,y,h){return n(),a("div",null,o)}var u=s(e,[["render",c]]);export{g as __pageData,u as default};
