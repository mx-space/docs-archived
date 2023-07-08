# Docker / 预设脚本部署

:::tip 如何选择 Docker / 预设脚本？

Docker 部署是最快的方式，但是前端可以修改的地方非常有限。预设脚本适合有一定 Linux 基础的人，但不需要魔改前端的人。

:::

## 一键 Docker 部署

```bash
bash <(curl -s https://fastly.jsdelivr.net/gh/mx-space/docker@master/install.sh)>
```

## 使用预设脚本部署

克隆仓库。

```bash
cd && mkdir mx-space && cd mx-space
git clone https://github.com/mx-space/docker --depth=1

# 如果克隆缓慢，可以使用以下镜像地址
git clone https://ghproxy.com/https://github.com/mx-space/docker.git --depth 1
```

### 整个环境

所部署的环境：Kami + Core + Caddy2。

在此之前，你需要将域名解析完毕。

使用一键脚本：

```bash
cd docker
bash install.sh
```

实例输入：

```bash
你的域名为：（需要提前绑定）: innei.ren
你的邮箱为: (若该步留空，则不部署 Caddy 服务): tukon@gmail.com
是否部署 Caddy 2.0？ (y/n): y
```

待流程执行完毕，进入 `https://server.test.cn/proxy/qaqdmin` ，进行初始化。

### 仅部署服务和主站前端

所部署的环境：Kami + Core。

你不需要 IP 指向。但是需要手动处理服务器反代。

使用一键脚本：

```bash
cd docker
bash ./build.sh
```

实例输入：

```bash
你的域名为：（需要提前绑定）: innei.ren
你的邮箱为: (此步留空，则不部署 Caddy 服务):
```

待流程执行完毕，进入 `http://127.0.0.1:2333/proxy/qaqdmin`。
