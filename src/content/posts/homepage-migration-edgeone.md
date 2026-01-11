---
title: 个人主页成功迁移到EdgeOne Page
published: 2025-10-20
description: "如题"
tags: ["编程", "建站", "edgeone"]
category: "技术"
draft: false
lang: "cn"
---

> 最新访问链接：[https://www.gxj62.cn](https://www.gxj62.cn)

> 旧访问链接：[https://gxj62.cn](https://gxj62.cn)已经做了 301 重定向，在彻底停用前，也会继续支持旧域名。

# Intro

起因是我的一个设想，在部署完此站后，原先个人主页就不再需要承担个人博客作用，因此，我就想创建一个新的个人主页，只展示我的一些信息，然后使用这个博客来记录一些技术文章。

# 迁移

新版个人主页站点使用 Vue Router，目前虽然只有一个页面，但也为后续提供了拓展的可能性。

# 问题

我原先想用旧域名 gxj62.cn，但是由于我有邮箱服务，MX 记录已经存在，与 EdgeOne 需要使用的 CNAME 记录相冲突，因此，我改为使用www.gxj62.cn作为我的新个人主页域名。

# 配置

旧域名指向我原先的服务器，并用 Caddy 配置了 301 重定向，将www.gxj62.cn指向EdgeOne Page，并配置了 CNAME 记录。

```txt
gxj62.cn{
    redir https://www.gxj62.cn{uri} 301
}
```

注意：在将来，服务器过期后，将不会配置 301 重定向，届时只能使用www.gxj62.cn访问。
