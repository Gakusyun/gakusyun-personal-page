---
title: 在 Windows 上用 WSL 安装 archlinux
published: 2026-04-08
description: "Windows 是我最爱的 Linux 发行版。"
tags: ["wsl", "Linux","archlinux"]
category: "技术"
draft: false
lang: "cn"
---
# Intro
## WSL
> Windows Subsystem for Linux (WSL) lets developers run a GNU/Linux environment -- including most command-line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dual-boot setup.

> 适用于 Windows 的 Linux 子系统（WSL）使开发者能够在 Windows 上直接运行完整的 GNU/Linux 环境——涵盖大多数命令行工具、实用程序与应用程序——无需修改，也无需传统虚拟机或双系统所带来的额外开销。
## archlinux
> Arch Linux is an independently developed, x86-64 general-purpose GNU/Linux distribution that strives to provide the latest stable versions of most software by following a rolling release model.

> Arch Linux 是一款独立开发的 x86‑64 通用 GNU/Linux 发行版，采用滚动更新模式，致力于在大多数软件中提供最新且稳定的版本。

# 安装
## WSL
在 Windows Terminal（或者终端模拟器什么你喜欢） 中使用如下命令则可以自动安装 WSL。
```bash
wsl --install
```
## archlinux
在镜像站中可以轻松下载到archlinux，比如[校园网联合镜像站](https://mirrors.cernet.edu.cn/archlinux/wsl/latest/archlinux.wsl)，也可以选择距离你更近的镜像站比如[华中科技大学开源镜像站](https://mirrors.hust.edu.cn/archlinux/wsl/latest/archlinux.wsl)、[中国科学技术大学开源软件镜像](https://mirrors.ustc.edu.cn/archlinux/wsl/latest/archlinux.wsl)等。

下载完后双击就可以安装。

# 配置
to be continue...
