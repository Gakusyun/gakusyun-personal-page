---
title: MyArchWSL
published: 2025-08-03
description: "在 WSL 中安装 archlinux 并配置。"
tags: ["Linux"]
category: "技术"
draft: false
lang: "cn"
---

```bash
wsl --install archlinux
```

## 配置 locale

设置 en_US.UTF-8

```bash
sed -i -e "s/^#zh_CN.UTF-8 UTF-8/zh_CN.UTF-8 UTF-8/" /etc/locale.gen
sed -i -e "s/^#en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/" /etc/locale.gen
locale-gen
echo 'LANG=en_US.UTF-8' > /etc/locale.conf
locale
```

```bash
mv /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
echo "Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/\$repo/os/\$arch" >> /etc/pacman.d/mirrorlist
pacman -Syyu
```

```bash
pacman -S --needed vim sudo wget curl zsh git go
```

```bash
# 启用 systemd
echo -e "[boot]\nsystemd=true" >> /etc/wsl.conf
```

```bash
# 配置 sudo
EDITOR=vim visudo
```

> %wheel ALL=(ALL:ALL) ALL

或者

```bash
sed -i 's/^# %wheel ALL=(ALL:ALL) ALL/%wheel ALL=(ALL:ALL) ALL/' /etc/sudoers
```

```bash
# 设置root用户密码
passwd
# 新增用户 Gakusyun 并加入 wheel用户组
useradd Gakusyun -m -G wheel -s /bin/zsh
# 设置用户密码
passwd Gakusyun

# 设置 ws 为默认用户
echo -e "[user]\ndefault = Gakusyun" >> /etc/wsl.conf
```

或者

```bash
# 设置root用户密码
echo "root:141421" | chpasswd
# 新增用户 Gakusyun 并加入 wheel用户组
useradd Gakusyun -m -G wheel -s /bin/zsh
# 设置用户密码
echo "Gakusyun:141421" | chpasswd

# 设置 ws 为默认用户
echo -e "[user]\ndefault = Gakusyun" >> /etc/wsl.conf
```

```zsh
git clone https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git
cd ohmyzsh/tools
REMOTE=https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git sh install.sh
```

```bash
git clone --depth=1 https://gitcode.com/gh_mirrors/po/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
git clone https://gitcode.com/gh_mirrors/zs/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://gitcode.com/gh_mirrors/zs/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

.zshrc 编辑：

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

```shell
plugins=(
     # other plugins...
     git
     zsh-autosuggestions
     zsh-syntax-highlighting
     z
)
```

goproxy

```bash
echo "export GO111MODULE=on" >> ~/.zshrc
echo "export GOPROXY=https://goproxy.cn" >> ~/.zshrc
source ~/.zshrc
```

安装 AUR，中国大陆环境请先允许上方代理命令

```bash
sudo pacman -S --needed base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

```bash
echo 'LANG=zh_CN.UTF-8' >> ~/.zshrc
```
