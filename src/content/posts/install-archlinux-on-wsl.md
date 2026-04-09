---
title: 在 Windows 上用 WSL 安装 Arch Linux
published: 2026-04-08
description: "Windows 是我最爱的 Linux 发行版"
tags: ["wsl", "linux", "archlinux"]
category: "技术"
draft: false
lang: "cn"
---

# 前言

## 关于 WSL
> Windows Subsystem for Linux (WSL) lets developers run a GNU/Linux environment -- including most command-line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dual-boot setup.

适用于 Windows 的 Linux 子系统（WSL）允许开发者直接在 Windows 上运行完整的 GNU/Linux 环境，包括大多数命令行工具、实用程序和应用程序，无需修改代码，也无需承受传统虚拟机或双系统带来的性能开销。

## 关于 Arch Linux
> Arch Linux is an independently developed, x86-64 general-purpose GNU/Linux distribution that strives to provide the latest stable versions of most software by following a rolling release model.

Arch Linux 是一款独立开发的 x86‑64 通用 GNU/Linux 发行版，采用滚动更新（Rolling Release）模式，致力于为用户提供最新且稳定的软件版本，高度可定制，适合喜欢动手配置的用户。

---

# 安装步骤

## 1. 安装 WSL
在 Windows Terminal（或终端模拟器什么你喜欢的）中以**管理员身份**运行：
```bash
wsl --install
```
该命令会自动启用所需组件并安装默认的 Linux 发行版。若仅需安装 WSL 内核而不安装默认发行版，可使用 `wsl --install --no-distribution`。


## 2. 安装 Arch Linux
Arch Linux 官方提供了专为 WSL 优化的镜像，可通过国内镜像站加速下载：

| 镜像源 | 下载链接 |
|--------|----------|
| 校园网联合镜像站 | [archlinux.wsl](https://mirrors.cernet.edu.cn/archlinux/wsl/latest/archlinux.wsl) |
| 华中科技大学 | [archlinux.wsl](https://mirrors.hust.edu.cn/archlinux/wsl/latest/archlinux.wsl) |
| 中国科学技术大学 | [archlinux.wsl](https://mirrors.ustc.edu.cn/archlinux/wsl/latest/archlinux.wsl) |

下载完成后，**双击 `.wsl` 文件**即可自动导入并启动 Arch Linux 实例。

---

# 基础配置

## 1. 设置 root 密码
首次启动后默认以 root 身份登录，**请第一时间设置密码**：
```bash
passwd
```

## 2. 配置 pacman 镜像源
编辑 `/etc/pacman.d/mirrorlist` 可手动替换镜像，但考虑到 Arch 默认未安装文本编辑器，推荐使用以下命令一键替换：
```bash
echo 'Server = https://mirrors.cernet.edu.cn/archlinux/$repo/os/$arch' | tee /etc/pacman.d/mirrorlist
```
然后更新软件包缓存：
```bash
pacman -Syy
```
> ⚠️ `-Syy` 会强制刷新缓存，日常使用 `pacman -Sy` 即可，避免频繁使用 `-Syy` 增加镜像站压力。

安装常用编辑器方便后续操作：
```bash
pacman -S vim
```

## 3. 添加 Arch Linux CN 源（可选但推荐）
[Arch Linux CN](https://www.archlinuxcn.org/) 社区源提供了大量实用软件（如微信、QQ、AUR 助手等）。

编辑 `/etc/pacman.conf`，在文件末尾添加：
```ini
[archlinuxcn]
Server = https://mirrors.cernet.edu.cn/archlinuxcn/$arch
```
然后导入密钥环并更新：
```bash
pacman -Sy archlinuxcn-keyring
pacman -Su
```

## 4. 配置系统语言
编辑 `/etc/locale.gen`，取消以下两行的注释：
```
en_US.UTF-8 UTF-8
zh_CN.UTF-8 UTF-8
```
生成语言环境：
```bash
locale-gen
```
编辑 `/etc/locale.conf` 设置默认语言：
```bash
LANG=en_US.UTF-8
```
> 💡 建议默认使用 `en_US.UTF-8` 避免部分终端程序乱码，用户级可按需切换为中文。

## 5. 创建普通用户
安装基础工具：
```bash
pacman -S sudo wget fish
```
创建用户 `Gakusyun`，加入 `wheel` 组（sudo 权限组），并设置 fish 为默认 shell：
```bash
useradd -m -G wheel -s "$(command -v fish)" Gakusyun
passwd Gakusyun
```

配置 sudo 权限：
```bash
EDITOR=vim visudo
```
找到并取消注释该行：
```
%wheel ALL=(ALL) ALL
```

## 6. 设置 WSL 默认用户
编辑 `/etc/wsl.conf`：
```ini
[user]
default=Gakusyun
```
在 Windows 终端中重启 WSL 使配置生效：
```bash
wsl --shutdown
wsl
```
现在将以 `Gakusyun` 用户自动登录。

### 用户级语言配置（可选）
编辑 `~/.config/fish/config.fish`，添加：
```bash
export LANG=zh_CN.UTF-8
```
> 🐟 若使用 fish shell，也可用 `set -gx LANG zh_CN.UTF-8` 语法。

---

# 启用 AUR 支持

Arch User Repository (AUR) 是 Arch 社区维护的软件仓库，包含大量官方源未收录的软件。

## 1. 配置 Go 代理
```bash
export GOPROXY=https://goproxy.cn,direct
```
## 2. 安装构建依赖
```bash
sudo pacman -S --needed git base-devel
```
## 3. 安装 yay（AUR 助手）
```bash
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```
> ✅ `makepkg -si` 会自动解决依赖并安装，过程中按提示确认即可。

安装完成后，即可使用 `yay -S 包名` 像 pacman 一样安装 AUR 软件。

---

# 结语

至此，你已在 Windows 上成功搭建了一个轻量高效的 Arch Linux 开发环境 🎉



