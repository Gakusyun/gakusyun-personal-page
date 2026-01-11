---
title: 快速恢复 Windows 工作环境
published: 2024-05-01
description: "记录一下如何配置新电脑/系统"
tags: ["windows", "Linux"]
category: "技术"
draft: false
lang: "cn"
---

# 引言

还没写呢

# 步骤

## 更新、安装驱动

直接使用 Windows Update 即可
[小米驱动官网](https://www.mi.com/service/notebook/drivers/A39S)

## 一般设置

- 显示后缀名
- 桌面显示用户文件夹和此电脑
- 隐藏搜索、任务视图、小组件
- ~~状态栏靠左~~已经习惯了 win11~~已经变成 Win11 的形状了~~
- ~~输入法开启模糊拼音~~
- 下载安装微信输入法，打开小鹤双拼

## 安装字体

[github](https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Meslo.zip)
[MiSans](https://web.vip.miui.com/page/info/mio/mio/detail?postId=33935854)
[整合](https://pan.baidu.com/s/1nTn3XUgyV6zRaVnNJBGx3g?pwd=tmyi)

## 卸载自带软件

- Clipchamp
- 资讯
- etc.

## 更新 Windows 自带应用（可以使用 UU 加速器）

[UU 加速器](https://uu.163.com/)
好像不能加速

## 网络优化

~~[v2rayN](https://github.com/2dust/v2rayN)~~

## 下载软件

- [Scoop](https://scoop.sh/)
- [Chrome](http://www.google.cn/chrome/index.html)
- [QQ(NT)](https://im.qq.com/pcqq/index.shtml) 关闭开机自启动
- [Wechat](https://weixin.qq.com/)
- ~~[PeaZip](https://peazip.github.io/)~~换用 7-zip
- ~~[Obsidian](https://obsidian.md/)~~用 scoop 安装
- ~~[Everything](https://www.voidtools.com/zh-cn/)~~用 scoop 安装
- ~~[Mem Reduct](https://github.com/henrypp/memreduct)~~用 scoop 安装
- [Office 2021](https://account.microsoft.com/)
- [Potplayer](http://potplayer.tv/)
- [ToDesk](https://www.todesk.com/download.html)

### Scoop 不好用，已淘汰

```shell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

#### Scoop 国内源

```shell
iwr -useb https://gitee.com/glsnames/scoop-installer/raw/master/bin/install.ps1 | iex
scoop config SCOOP_REPO https://gitee.com/glsnames/scoop-installer
```

```shell
cd ~/scoop/buckets/main/
git remote set-url origin https://gitee.com/scoop-bucket/main.git
scoop bucket add extras https://gitee.com/scoop-bucket/extras.git
以下可选
scoop bucket add dorado https://gitee.com/scoop-bucket/dorado.git
scoop bucket add nerd-fonts https://gitee.com/scoop-bucket/nerd-fonts.git
scoop bucket add versions https://gitee.com/scoop-bucket/versions.git
scoop bucket add java https://gitee.com/scoop-bucket/java.git
scoop bucket add backit https://gitee.com/scoop-bucket/backit.git
```

#### Scoop 中的软件

==VScode 不要用 Scoop==
Nu

```shell
scoop install nu
```

Obsidian

```
scoop install obsidian
```

Git（会自动安装了 7z）

```
scoop install git
```

7-Zip

```
scoop install 7zip
```

OBS Studio

```
scoop install obs-studio
```

Python

```
scoop install python
```

## 登录账号同步

## Gaming Time

- [Minecraft](https://www.microsoft.com/store/productid/9PGW18NPBZV5?ocid=pdpshare)[PCL2](https://afdian.net/p/0164034c016c11ebafcb52540025c377)
- [Steam](https://store.steampowered.com/)
- [Epic](https://store.epicgames.com/zh-CN/)

## Windows 工作环境安装

### [VSCode](https://code.visualstudio.com/)

### [Python](https://www.python.org/)

```shell
scoop install nu
```

加入环境变量 PATH
更新 pip 并更换为华为源

```shell
python -m pip install --upgrade pip
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

可以使用以下命令来升级

```
python -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade pip
```

### OpenJdk

这里选择 Microsoft 编译的 [OpenJdk](https://learn.microsoft.com/zh-cn/java/openjdk/download)
选择合适的版本下载
下载后解压到合适的位置，配置好环境变量

### Go

[Go 官网](https://go.dev)
[Go 中国官网](https://golang.google.cn/)
安装完后，打开终端管理员

```bash
$env:GO111MODULE = "on"
$env:GOPROXY = "https://goproxy.cn"
```

或者

```bash
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```

打开 VSCode，继续安装

## WSL

- 打开或关闭 Windows 功能，勾选适用于 Linux 的 Windows 子系统。
- 在 Microsoft Store 中下载 [Windows Subsystem for Linux](https://www.microsoft.com/store/productid/9P9TQF7MRM4R?ocid=pdpshare)
- 下载安装 [Debian](https://www.microsoft.com/store/productid/9MSVKQC78PK6?ocid=pdpshare) 或 [Deepin](https://cdimage.deepin.com/WSL/deepin.zip)
  [[Deepin WSL 安装手册]]
  Debian 将 apt 源换为镜像源 [清华源](https://mirrors.tuna.tsinghua.edu.cn/help/debian/) [华为源](https://mirrors.huaweicloud.com/home)
  > USTC 不比 THU 强？👍👍👍

以清华源为例：
https 支持：

```shell
sudo apt install apt-transport-https ca-certificates -y
```

备份文件

```shell
sudo mv /etc/apt/sources.list /etc/apt/sources.list.bak
sudo nano /etc/apt/sources.list
```

复制后

```shell
sudo apt-get update
sudo apt-get upgrade
sudo apt update
sudo apt upgrade
```

### WSL 配置

安装一些软件

```shell
sudo apt-get install vim curl wget git zsh -y
```

可选安装：

```shell
sudo apt-get install neofetch -y
```

#### 安装 ohmyzsh

```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

#### omz 美化

[知乎](https://zhuanlan.zhihu.com/p/441676276)

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
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

### WSL 工作环境安装

#### C

```bash
sudo apt install gcc gdb g++ -y
```

#### java

以 Microsoft 编译的 [OpenJdk](https://learn.microsoft.com/zh-cn/java/openjdk/download) 为例

```bash
wget https://aka.ms/download-jdk/microsoft-jdk-11.0.20.1-linux-x64.tar.gz
sudo tar -zxvf microsoft-jdk-11.0.20.1-linux-x64.tar.gz -C /usr/local/
```

```shell
vim ~/.zshrc
```

在 .zshrc 中添加：

```bash
export JAVA_HOME=/usr/local/jdk-11.0.20.1+1
export PATH=$JAVA_HOME/bin:$PATH
```

```bash
source ~/.zshrc
```

测试 java 安装是否成功

```shell
java -version
```

### Some もんだい

#### 1

ps：可能是因为我一直开着梯子的原因，安装 WSL 的时候，一直提示  `wsl: 检测到 localhost 代理配置，但未镜像到 WSL。NAT 模式下的 WSL 不支持 localhost 代理。`
不知道会不会对 WSL 的网络产生影响，保险起见我  [按照](https://github.com/microsoft/WSL/issues/10753)  教程做了一些配置。
WSL 中有一个配置文件用于配置高级设置选项，那就是  [.wslconfig](https://learn.microsoft.com/zh-cn/windows/wsl/wsl-config).这个文件默认是没有的，如果要配置，我们要手动创建。
这个文件在  `C:\Users\<UserName>\.wslconfig`  中。
创建文件后，填入以下内容并保存。

```ini
[experimental]
autoMemoryReclaim=gradual  # gradual  | dropcache | disabled
networkingMode=mirrored
dnsTunneling=true
firewall=true
autoProxy=true
```

再打开 powershell，输入  `wsl --shutdown`，重新打开 WSL，就没有之前的提示了。

#### 2

[wsl 速度慢](https://luyipao.top/2023/04/wsl-network-speed-slow/)
PowerShell 管理员权限运行

```shell
Disable-NetAdapterBinding -Name “vEthernet (WSL)” -ComponentID ms_tcpip6 -IncludeHidden
Disable-NetAdapterLso -Name “vEthernet (WSL)” -IncludeHidden
Get-NetAdapterBinding -IncludeHidden -Name “vEthernet (WSL)”
Get-NetAdapterAdvancedProperty -IncludeHidden -Name “vEthernet (WSL)”
```
