# Mix Space Documentation [ARCHIVED]

<pre align="center">
⚠️ This repository is archived. The content is not maintained anymore.
⚠️ 此存储库已归档。不再维护内容。
</pre>

<div align="center">

  [🖱️ Click here to go to the latest Documentaion](https://github.com/mx-space/docs)
  
</div>

## Contributing 贡献

这个站点使用的是 [VitePress](https://github.com/vuejs/vitepress)，并基于 [@vue/theme](https://github.com/vuejs/vue-theme)。站点内容使用 Markdown 编写，文件都在 `src` 文件夹中。如果只有一些简单的修改，你可以直接在 GitHub 网页端进行修改并新建一个 Pull Request.

在本地开发中，[pnpm](https://pnpm.io/) 被选用为项目的包管理器，你需要使用 pnpm 安装依赖：

```bash
pnpm i
pnpm run docs:dev
pnpm run docs:build
pnpm run docs:serve
```

**请注意！请务必在修改后使用 `docs:build` 和 `docs:serve` 查看构建产物是否正常输出！**

## Working on the content 修改文字

- 关于支持的 Markdown 扩展和在 Markdown 内部使用 Vue 语法的能力，请参阅 VitePress 文档
- 有关编写和维护文档内容的规则和建议，请参阅编写指南。

## Guide 编写指南

<u>**新增一个章节**</u>：

1. 克隆此项目
2. 在 `src` 文件夹中，新增一个文件夹，请语义化命名，假设为 `test`
3. 编写内容，具体可以借鉴其他文档文件夹
4. 创建 Pull Request. 其余事情只需要交给我们来做就好了

**<u>编写内容的时候需要注意的事情</u>**：

1. 中文与英文之间请保留一个空格，如`测试 test 测试`

## References 参考

[@vuejs/docs](https://github.com/vuejs/docs)

[@vueuse/vueuse](https://github.com/vueuse/vueuse)

[@vuejs/vitepress](https://github.com/vuejs/vitepress)
