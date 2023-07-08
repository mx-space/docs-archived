## 后台单独部署

在正常情况下，你不需要单独部署后台，因为后台已经被打包到了后端中。

如果你有以下需求：

- 想使用其他域名作为后台地址
- 想使用其他端口作为后台地址

那么你可以选择单独部署后台，或者你可以参考 [后台反向代理配置](/use/index.md#后台自定义反向代理)。

### 拉取源文件

```bash
cd mx-space

git clone https://github.com/mx-space/mx-admin.git --depth 1
```

### 修改配置文件

移动到 `.env.production` 文件，去掉 `VITE_` 前缀的注释符号，然后修改为你的配置。

例如：

```txt
VITE_APP_BASE_API=https://server.test.cn/api/v2
VITE_APP_WEB_URL=https://www.test.cn
VITE_APP_GATEWAY=https://server.test.cn
# # VITE_APP_PUBLIC_URL=https://fastly.jsdelivr.net/gh/mx-space/admin-next@gh-pages/
```

其他可以定义的配置在文件 `/src/configs.ts` 中。

### 构建

::: warning
构建 mx-admin 需要的内存至少为 2 Gib，如果你服务器内存不足，你可以在本地构建成功后，将产物上传到服务器。

在 Windows 系统上，mx-admin 无法正常构建，你可以使用 WSL2 或者 Linux 系统。
:::

```bash
pnpm i

pnpm build
```

### 部署产物

构建生成的产物在 dist 目录下，你可以直接把它们移动到你准备好的后台网站的根目录下。

假设你准备的后台网站域名是 `admin.test.cn`，

网站根目录为 `/var/www/admin.test.cn/`，

那么，你把 dist 目录下的所有文件移动到 `/var/www/admin.test.cn/` 目录下即可。

### 修改后端配置

编辑 Core 的 `.env` 文件，修改 `ALLOWED_ORIGINS` ，添加你的后台域名。

示例域名为 `admin.test.cn` 。

例如：

```txt
# THIS ENV FILE EXAMPLE ONLY FOR DOCKER COMPOSE
# SEE https://docs.docker.com/compose/environment-variables/#the-env-file
JWT_SECRET=7294c34e0b28ad28          #此处填写一个长度不小于 16 个字符，不大于 32 个字符的字符串
ALLOWED_ORIGINS=test.cn,www.test.cn,admin.test.cn
```

然后重新启动 Core 即可：

```bash
docker compose up -d
```
