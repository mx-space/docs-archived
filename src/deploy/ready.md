
## 前置

- 前置要求：
  - 后端示例域名：`server.test.cn`
  - 前端示例域名：`www.test.cn`
  - 操作系统：建议**最新的 Ubuntu / Debian** ，或其他 **Linux 内核版本不小于 `4.19`** 的发行版本；如果你想在 **Windows 部署**，请看这里 [Windows 安装 Mix Space](/deploy/windows.md)
  - Linux 内核版本：**不小于 4.19，建议 5.x**
  - 内存建议：**大于 1 GiB**
- 内存要求说明：
  - 构建需要的内存：**大于 1 GiB**
  - 运行需要的内存：**不小于 768 MiB**

:::danger
使用小于 `4.19` 版本的 Linux 内核将无法正常部署 Kami
:::

---

# 环境准备

## 检查 Linux 内核版本

打开终端，输入以下命令：

```bash
uname -r
```

应该返回如下内容：

```bash
➜  ~ uname -r
6.0.2-2-MANJARO
```

可以看到，我的内核版本是 6.0，大于 4.19，所以可以正常部署 Kami。

再次强调，**Linux 内核版本不小于 4.19** 才能构建 Kami，如果你的 Linux 内核版本不满足，或许你可以考虑一下最新版本的 Ubuntu / Debian？

## 安装软件包

Debian / Ubuntu

```bash
apt update && apt install git curl vim wget git-lfs -y
```

CentOS

```bash
yum check-update && yum install git curl vim wget git-lfs -y
```

## 安装 Docker

SSH 连接到服务器，使用 Docker 安装脚本，可以便捷地安装 Docker 和 Docker Compose：

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

:::warning
该过程可能比较慢（受限于你的服务器配置和网络），请不要断开 SSH 连接；该脚本仅支持 Debian，Ubuntu，CentOS，其他系统请自行安装。该方式安装的 Docker 版本为最新版；如果你有可用的镜像源，请自行配置。
:::

## 安装 fnm (可选)

[fnm](https://github.com/Schniz/fnm) 可以用于管理 Node.js。

打开终端，使用一键脚本，可以便捷地安装 fnm：

```bash
curl -fsSL https://fnm.vercel.app/install | bash
```

如果使用 HomeBrew：

```sh
brew install fnm
```

重启终端即可生效

安装 Node.js LTS 版本：

```bash
fnm install --lts
```

安装需要的模块：

```bash
npm i -g pnpm pm2
```

---