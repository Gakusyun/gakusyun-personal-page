---
title: Opencode 太好用啦!
published: 2026-01-22
description: "Opencode 加上 Oh my Opencode 的 Sisyphus 实在是太好用啦"
tags: ["编程", "dotfiles", "Ai"]
category: "技术"
draft: false
lang: "cn"
---
# 前言

很早之前我就尝试过使用 [Opencode](https://opencode.ai)，但当时功能还不够完善，便转而使用 Claude Code。

然而，Anthropic 公司近期表现出的[反华立场](https://www.bloomberg.com/news/articles/2026-01-20/anthropic-ceo-says-selling-advanced-ai-chips-to-china-is-crazy)，着实令人失望。这让我不再愿意使用 Anthropic 的任何产品，即便是免费的版本。

偶然间看到了[技术爬爬虾](https://space.bilibili.com/316183842)的[视频](https://www.bilibili.com/video/BV1BVrXBUEbR/)，了解到如今的 [Opencode](https://opencode.ai) 已经相当成熟，并且拥有强大的插件体系——[Oh my Opencode](https://github.com/code-yeongyu/oh-my-opencode)。这促使我重新回到了 Opencode 的怀抱。
## 安装 Opencode

### 通过 npm

```shell
npm i -g opencode-ai
```

### 通过 curl

```shell
curl -fsSL https://opencode.ai/install | bash
```

### 通过 bun

```shell
bun add -g opencode-ai
```

### 通过 Homebrew

```shell
brew install anomalyco/tap/opencode
```

### 通过 paru（Arch Linux）

```shell
paru -S opencode
```

## 安装 Oh my Opencode

安装 Opencode 后，直接在对话框中输入以下指令：

```text
Install and configure oh-my-opencode by following the instructions here:
https://raw.githubusercontent.com/code-yeongyu/oh-my-opencode/refs/heads/master/docs/guide/installation.md
```

然后按照指引完成安装即可。
