---
title: 恢复工作环境 on Windows (2025)
published: 2025-10-24
description: "1024 程序员日快乐！"
tags: ["windows", "Linux"]
category: "技术"
draft: false
lang: "cn"
---
> Microsoft 我真的太谢谢你啦！又给我的系统里面塞💩！垃圾 Edge，游戏助手占用内存，还无法卸载。为了逃离垃圾 Edge，我无所不用其极！可是，还是在一次重启之后，给我的电脑上又装上了 Edge！果然就是边缘公司生产的边缘浏览器！！！早该倒闭了，应该和不愿适配鸿蒙的某国内大厂坐一桌。游戏上的合作真是臭味相投！我不禁要问，巨硬自己真的用这个巨硬系统吗！！！
> 总有一天，我要逃离 Windows，投入 GNU/Linux、MacOS 或者信创国产 Linux 操作系统的怀抱😭。
# Intro

上一版的“恢复工作环境”方案已显著滞后于时代发展。本版本旨在从〇开始，恢复一个可用于实际生产的计算机环境。

长久以来，我一直期望编写一份指南，以指导自己在计算机重新安装系统后能够迅速恢复工作环境。因为在完成系统安装之后，我常常会遗忘后续需要执行的操作；时隔一段时间后，才发觉诸多必要的软件或设置并未完成。因此，我于 2024 年编写了第一本《恢复工作环境白皮书》。然而，随着时代的变迁，当时所采用的许多方法已无法适应现阶段的需求。此次全新编写，是结合我过去一年的实际经验与观察，打造出全新的“恢复工作环境”方案。

# 镜像选择

为保障信息安全，本文不建议选用第三方精简的系统镜像，此类镜像可能会被植入大量广告，甚至暗藏病毒。本文建议于[微软官网](https://www.microsoft.com/zh-cn/software-download/windows11)下载镜像，或借助 [I tell you](https://next.itellyou.cn/) 下载站下载纯净的官方镜像。

> 本文选取 Windows 11 25H2 家庭版，原因在于笔记本出厂时已预装正版 Windows 系统。本文不提倡任何盗版激活方式，仅通过合法授权渠道进行操作。本文所选用的软件大多为免费或开源工具，以确保使用的合规性。
# 标准系统安装
1. 将下载的 iso 文件烧录至启动盘。也可使用 [Ventoy](https://www.ventoy.net/cn/)，Ventoy 是一款支持多镜像启动的开源工具，能够将多个 ISO 文件写入同一个 U 盘。
2. 下载一个 Chrome 安装程序放到 U 盘中，以备不时之需。
3. 安装镜像。

系统进入 OOBE 界面后，按下 `Shift + F10` 亦或是 `Shift + Fn + F10` 打开命令提示符，并运行如下命令以跳过联网。
```shell
OOBE\BYPASSNRO
```
等待电脑重启后，选择“我没有 Internet 连接”，然后输入用户名。若连接网络，系统将强制要求登录微软账户，并且微软会将用户名设置为微软邮箱的前5位，无法进行自定义，因此建议选择无 Internet 连接。密码可按需设置。

这时，就可以插上网线，Windows 会自动更新并下载驱动，保证系统运行在最佳状态。如果使用无线网连接，也可暂时不连接网络，等待系统启动后，再连接网络。

进入系统后，由于默认的 Windows 11 十分臃肿，所以我使用 [Win11Debloat](https://github.com/Raphire/Win11Debloat) 对系统进行精简。这里我选择自定义，然后删除除 Microsoft Store 以外的所有软件。若误删可以使用 Microsoft Store 重新下载。
# 系统安装 with Tiny 11 Builder

然而，由于原版镜像过于庞大，本文将运用 [Tiny 11 Builder](https://github.com/ntdevlabs/tiny11builder) 工具制作精简版镜像，在保留核心功能的基础上移除冗余组件。

1. 下载原版镜像。
2. 双击原版镜像，使镜像挂载，并记录下驱动器盘符。
3. 运用 Tiny 11 Builder 工具精简镜像。本文建议使用 `tiny11maker.ps1`，而非 `tiny11coremaker.ps1`，因为后者精简程度过高，不适用于日常使用。
4. 依据脚本引导输入挂载的驱动器盘符，脚本将自动运行。
5. 将生成的 tiny.iso 文件烧录至启动盘。也可使用 [Ventoy](https://www.ventoy.net/cn/)，Ventoy 是一款支持多镜像启动的开源工具，能够将多个 ISO 文件写入同一个 U 盘。
6. 下载一个 Chrome 安装程序放到 U 盘中，因为此镜像会精简臃肿的边缘浏览器。
7. 安装镜像。

安装过程依照引导完成即可，无需进行额外操作。安装完成后，系统将进入 OOBE 界面，此时请勿联网，此镜像会自动添加无网络选项，无需运行脚本。选择“我没有 Internet 连接”，然后输入用户名。若连接网络，系统将强制要求登录微软账户，并且微软会将用户名设置为微软邮箱的前5位，无法进行自定义，因此建议选择无 Internet 连接。密码可按需设置。

进入系统后，连接网络，进入 Windows 更新界面进行手动更新，以获取最新的 Windows更新补丁并修复已知漏洞，确保系统的安全与稳定。同时，Windows 更新会自动下载常见驱动程序，减少手动安装驱动的繁琐流程。不过，需要注意的是，并非所有驱动都能通过 Windows 更新获取，且获取到的驱动也可能并非最新版本，因此建议前往笔记本制造商的官方网站下载适配当前型号的驱动程序包。

本文不建议关闭 Windows 更新，关闭 Windows 更新后，系统可能存在未修复的安全风险，易遭受恶意软件攻击，且无法获取功能改进和性能优化。

笔记本会在连接网络后自动激活 Windows，然后即可进行更多的 Windows 自定义，比如桌面图标的显示、开始菜单的固定项优先等。

# 好软推荐

此处罗列了一些关键软件，它们属于通用设置，适用于所有用户。

1. [Chrome 浏览器](https://www.google.cn/chrome/index.html)，在卸载微软边缘浏览器后，它是最佳之选。尽管在内存占用方面稍显庞大，但关闭后可完全退出，不占用内存，不像某款边缘浏览器会在后台持续驻留。
2. [Nana-Zip](https://github.com/M2Team/NanaZip)，这是一款基于 [7-Zip](https://www.7-zip.org/) 的文件压缩工具，针对 Windows 11 系统进行了深度适配，界面简洁，操作流畅，略胜 7-Zip 一筹。
3. [火绒安全](https://www.huorong.cn/)，作为轻量级防护软件，能有效拦截弹窗和恶意程序，对系统资源占用极低，适合追求纯净使用体验的用户。不过其病毒防御能力较弱，适合对系统已知无害行为不过多干预的用户。新手建议使用 360 极速版，其杀毒能力相较于火绒安全较强。
4. [WPS Office](https://www.wps.cn/)，是办公套件的首选，无第三方广告，兼容性强，支持多端同步，文档协作方便快捷。建议优先选择 X64 版。
5. [Everything](https://www.voidtools.com/)，是一款本地文件搜索工具，响应速度极快，支持正则表达式和通配符，搜索效率远超系统自带的搜索功能。
6. [QQ](https://im.qq.com/pcqq/index.shtml)，作为国民级即时通讯工具，支持文件传输、音视频通话以及多端同步，是办公和社交场景中不可或缺的工具。
7. [微信](https://pc.weixin.qq.com/)。
8. [微信输入法](https://z.weixin.qq.com/)，其剪贴板支持多端同步。与微软拼音相比，微信输入法支持双拼小鹤方案，词库更优且更智能，输入习惯可在云端同步，在隐私模式下不会上传任何数据。
9. [UU 远程](https://uuyc.163.com/)，由知名大厂出品，目前免费使用。不足之处在于仅支持 Windows 10 及以上系统。
10. [Motrix](https://motrix.app/)，是一款开源免费的下载工具，支持多线程加速下载。值得注意的是，此软件已有两年未更新，不过当前版本能满足基本需求。
11. [Mpv.net](https://github.com/mpvnet-player/mpv.net)，是 Mpv 的轻量级图形前端，界面简洁，支持硬件加速，播放流畅，可作为 PotPlayer 的升级替代软件。
12. [Obsidian](https://obsidian.md/)，是一个开源的笔记管理软件，支持 Markdown 格式，具有丰富的插件支持，可扩展性高，可定制性强。
13. [DirectX 修复工具](https://blog.csdn.net/VBcom/article/details/6962388)，一键修复 DirectX 运行环境，保障软件正常运行。
## 界面美化
1. [TranslucentTB](https://apps.microsoft.com/detail/9PF4KZ2VN4W9)，可以自定义Windows任务栏。
# 开发软件

## 环境
1. [Git](https://git-scm.com/)：[USTC 镜像](https://mirrors.ustc.edu.cn/github-release/git-for-windows/git/LatestRelease/)，万物之源。
2. Java: [JDK](https://learn.microsoft.com/zh-cn/java/openjdk/download)、[Maven](https://maven.apache.org/)。亦可选择镜像站[清华大学开源软件镜像站中的Maven
](https://mirrors.tuna.tsinghua.edu.cn/apache/maven/)
3. [Typst](https://typst.app/)，[USTC 镜像](https://mirrors.ustc.edu.cn/github-release/typst/typst/LatestRelease/)，是一个开源的排版系统，可实时查看渲染结果，比 [LaTeX](https://www.latex-project.org/) 更加友好。
4. [UV](https://astral.sh/uv)，现代化的 Python 包管理工具。
5. [Node.js](https://nodejs.org)，[USTC 镜像](https://mirrors.ustc.edu.cn/node/)，JavaScript 运行时。
6. [Go](https://go.dev/)或者 [Go 中国官网](https://golang.google.cn/)。

## 软件

1. [Zed](https://zed.dev/)，使用 Rust 编写的编辑器，内存占用优于 VSCode，目前不支持中文
2. [VSCode](https://code.visualstudio.com/)，宇宙最强\[1\]编辑器
3. [JetBrains](https://www.jetbrains.com/)，使用学生版或社区版。
4. [Claude Code](https://www.claude.com/product/claude-code)，由于该公司反华立场，笔者使用第三方 Api，不使用 Anthropic 服务，并积极寻求替代。
5. [iflow Cli](https://iflow.cn/)，Claude Code 替代，免费。
# 字体

1. [MiSans](https://hyperos.mi.com/font/)，还不错的等线字体。
2. [Source Han Serif](https://github.com/adobe-fonts/source-han-serif)，多字重，开源免费，比 Windows 内置的宋体好看。也可使用镜像站，[清华源中的Source Han Serif](https://mirrors.tuna.tsinghua.edu.cn/adobe-fonts/source-han-serif/)。
3. [Maple Mono](https://font.subf.dev/en/)，有中文支持的等宽字体。

# 软件、配置
## 允许 PowerShell 运行脚本
只对当前用户有效
```shell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
## Nodejs 切换淘宝镜像
```shell
npm config set registry https://registry.npmmirror.com
```
## UV
### Windows
```shell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
### Linux or MacOS
```shell
curl -LsSf https://astral.sh/uv/install.sh | sh
```
## Go
国内镜像
```shell
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```
## Claude Code
### 安装Claude Code
#### PowerShell
```shell
irm https://claude.ai/install.ps1 | iex
```
#### MacOS or Linux
```shell
curl -fsSL https://claude.ai/install.sh | bash
```
#### Homebrew
```shell
brew install --cask claude-code
```
#### Node.js
```shell
npm install -g @anthropic-ai/claude-code
```
### 使用GLM Api
#### 自动化脚本
> 会自动检测是否安装 node，如果使用原生安装，建议不要使用
```shell
curl -O "https://cdn.bigmodel.cn/install/claude_code_env.sh" && bash ./claude_code_env.sh
```
#### 手动配置
##### MacOS or Linux
```json
# 编辑或新增 Claude Code 配置文件 `~/.claude/settings.json`
# 新增或修改里面的 env 字段
# 注意替换里面的 `your_zhipu_api_key` 为您上一步获取到的 API Key
{
    "env": {
        "ANTHROPIC_AUTH_TOKEN": "your_zhipu_api_key",
        "ANTHROPIC_BASE_URL": "https://open.bigmodel.cn/api/anthropic",
        "API_TIMEOUT_MS": "3000000",
        "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": 1
    }
}
```
#### Windows CMD
```shell
# 在 Cmd 中运行以下命令
# 注意替换里面的 `your_zhipu_api_key` 为您上一步获取到的 API Key
setx ANTHROPIC_AUTH_TOKEN your_zhipu_api_key
setx ANTHROPIC_BASE_URL https://open.bigmodel.cn/api/anthropic
setx CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC 1
```
#### PowerShell
```shell
# 在 PowerShell 中运行以下命令
# 注意替换里面的 `your_zhipu_api_key` 为您上一步获取到的 API Key
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_AUTH_TOKEN', 'your_zhipu_api_key', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', 'https://open.bigmodel.cn/api/anthropic', 'User')
[System.Environment]::SetEnvironmentVariable('CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC', '1', 'User')
```
### MCP
Chrome Devtools MCP 让 Ai 可以轻松操控 Chrome 进行前端的调试
```shell
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest
```
## SSH
创建 SSH 密钥对
```shell
ssh-keygen -t ed25519 -C "这里随便填"
```
## Git
```shell
git config --global user.name 'Gakusyun'
git config --global user.email 'i@gkux.cn'
```

# WSL 设置
```bash
sudo apt install apt-transport-https ca-certificates
```

```bash
REMOTE=https://mirrors.hust.edu.cn/git/ohmyzsh.git sh -c "$(curl -fsSL https://mirrors.hust.edu.cn/ohmyzsh.git/install.sh)"
```


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

# 附录
## 常用链接
[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/)

[中国科学技术大学开源软件镜像站](http://mirrors.ustc.edu.cn/)
## 注释
\[1\] 宇宙最强是编辑器目标。