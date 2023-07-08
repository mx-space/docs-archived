
### 部署 Kami

Kami 是 Mix Space 的默认前端，不过如果你想尝试其他风格的话，可以去 [mx-web-yun](https://github.com/mx-space/mx-web-yun) 看看。

#### 拉取源文件

```bash
cd && cd mx-space
git clone https://github.com/mx-space/kami.git --depth 1

# 如果克隆缓慢，可以使用下面的镜像地址
git clone https://ghproxy.com/https://github.com/mx-space/kami.git --depth 1
```

#### 切换到最新的 tag

```bash
cd kami && git fetch --tags && git checkout $(git rev-list --tags --max-count=1)
```

#### 拉取图片文件

```bash
git lfs fetch --all

git lfs pull
```

注意：如果无法正常拉取，可以到 GitHub 上手动下载文件并放到相应目录。

#### 配置文件

复制 .env.example 为 .env

```bash
cp .env.example .env
```

编辑 .env 文件，它看起来应该是这个样子的

```txt
# API 地址
NEXT_PUBLIC_API_URL=https://server.test.cn/api/v2
# GATEWAY 地址
NEXT_PUBLIC_GATEWAY_URL=https://server.test.cn
#前端使用的配置项名字
NEXT_PUBLIC_SNIPPET_NAME=kami
# 如果使用 CDN, 修改产物前缀；一般留空
ASSETPREFIX=
```

#### 构建

这里选用 pnpm 作为包管理器。

```bash
# 安装必需的模块
pnpm i
# 构建
pnpm build
```

#### 启动前端

```bash
pnpm prod:pm2
# 可选
pm2 start
```

我们可以查看前端是否正常运行：

```bash
curl http://127.0.0.1:2323
```

如果有返回数据，则认为正常。
