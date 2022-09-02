---
title: 部署 Mix-Space
---

:::tip 
本节内容带你部署 Mix-Space，请有耐心的一点点看完；国内服务器请完成备案后再进行
:::

### 准备

操作系统: 建议 Ubuntu 20.04 / Debian 11 及以上版本，或其他 Linux 发行版本

Linux 内核版本: 大于 4.18 ，建议 5.x 

:::danger
使用小于 4.18 版本的 Linux 内核将无法正常部署 Mix-Space
:::
## 环境安装

### 安装软件包

Debian / Ubuntu

```bash
# apt update && apt install git curl vim wget git-lfs -y
```
CentOS

```bash
# yum check-update && yum git curl vim wget git-lfs
```
### 安装 Docker

SSH 连接到服务器，使用一键脚本，可以迅速安装 Docker 和 Docker Compose

```bash
$ curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
:::warning 
该过程可能比较慢，请不要断开 SSH 连接；该脚本仅支持 Debian 、Ubuntu，CentOS，其他系统请自行安装
:::

### 安装 nvm

nvm 用于管理 Node.js 

打开终端，使用一键脚本，可以迅速安装 nvm

```bash
$ bash -c "$(curl -fsSL https://gitee.com/RubyKids/nvm-cn/raw/master/install.sh)"
```
重启终端即可生效

安装 Node.js 16

```bash
$ nvm install 16
```
安装需要的模块
```bash
$ npm i -g yarn zx pnpm
```
## 部署系统

### 使用预设脚本部署

克隆仓库

```bash
$ cd && mkdir mx-space && cd mx-space
$ git clone https://github.com/mx-space/docker --depth=1
```
#### 整个环境

所部署的环境：Kami + Core + Caddy2

在此之前，你需要将域名解析完毕

使用一键脚本

```bash
$ cd docker
$ npm i
$ zx ./build.mjs
```
实例输入：
```bash
你的域名为：（需要提前绑定）: innei.ren
你的邮箱为: (若该步留空，则不部署 Caddy 服务): tukon@gmail.com
是否部署 Caddy 2.0？ (y/n): y
```
待流程执行完毕，进入 https://你的域名/proxy/qaqdmin，进行初始化

##### 仅部署服务和主站前端

所部署的环境：Kami + Core

你不需要 IP 指向。但是需要手动处理服务器反代

使用一键脚本
```bash
$ cd docker
$ npm i
$ zx ./build.mjs
```
实例输入：
```bash
你的域名为：（需要提前绑定）: innei.ren
你的邮箱为: (此步留空，则不部署 Caddy 服务):
```
待流程执行完毕，进入 http://127.0.0.1:2333/proxy/qaqdmin

### 手动部署

#### 部署 Core

//TODO docs: rewrite core install

//TODO docs: rewirte kami install 
