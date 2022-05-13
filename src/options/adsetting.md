---
title: 后台设置详解
---

# 后台设置详解

> 本节内容将带你了解后台设置

## 用户设定

这个应该比较简单，就不再赘述了。

## 系统设定

### 网站设置

- 前端地址：即你之前前端反向代理的站点，例如 `https://www.test.cn`
- API 地址：即你之前后端反向代理的站点加上`api/v2`，例如 `https://server.test.cn/api/v2 `
- 后台地址：即你现在后台的地址，例如 `https://server.test.cn/qaqdmin`
- Gateway 地址：即后端地址，例如 `https://server.test.cn`

### SEO 优化

这部分依照能走到这一步的读者的水平，应该没有问题。

### 后台附加设置

这部分依照能走到这一步的读者的水平，应该问题不大。

着重讲一下高德查询 API key。

这个需要在 [高德开放平台](https://lbs.amap.com/) 上注册并创建应用，大致是这样

![](https://raw.githubusercontent.com/mx-space/docs-images/master/images/G7De6D.png)

### 评论设置

这部分依照能走到这一步的读者的水平，应该没有问题。

### 邮件通知设置

发件邮箱 host : 发送邮件的 smtp 域名，例如：`smtp.mxhichina.com`

发件邮箱端口：一般为 `465`

发件邮箱地址：这是你自己的发信邮箱，例如 `no-reply@innei.ren`

发件邮箱密码：与邮箱对应的密码

### 备份

该功能提供数据库的备份，使用 `mongodump` 完成这个操作，请确保已安装 `mongodb-tools`。

同时可以填写腾讯 COS 信息，同时会把备份上传到 COS。

备份是一个 Cron 任务，将会在每天凌晨自动进行。你可以在 其他 - 任务 中看到这个任务。

![](https://raw.githubusercontent.com/mx-space/docs-images/master/images/AfN20h.png)

### 百度推送

该功能提供自动上传站点信息到百度，众所周知百度的收录能力过于糟糕。

你需要先去 [百度站长](https://ziyuan.baidu.com/linksubmit/index) 完成注册，认证你的域名，然后填写 Token。

::: warning
注意 ⚠️：请先确保 系统 - 网站设置 - 前端地址 填写正确
:::

![](https://raw.githubusercontent.com/mx-space/docs-images/master/images/zEgXj5.png)

该功能也是一个 计划任务，一次配置每天推送，无需关心。同样可以在 其他 - 任务 中看到这个任务。

### Algolia Search

Algolia Search 是一个第三方搜索服务。让前端具有搜索功能，该项服务需要在后台填入 Algolia API 才能正常使用。到 [Algolia 官网](https://www.algolia.com/) 注册并新建应用，然后查看用户[自己的 API Key](https://www.algolia.com/account/api-keys/) ，后端具备自动推送功能，建议在后台填入 Admin API Key ，保存即可。
![](https://raw.githubusercontent.com/mx-space/docs-images/master/images/algolia.png)

## 结束

感谢你能看到这里！！
