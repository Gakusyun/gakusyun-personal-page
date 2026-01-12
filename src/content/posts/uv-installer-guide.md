---
title: 如何优雅地安装 UV
published: 2026-01-12
description: "如题"
tags: ["编程", "开发", "Python", "UV"]
category: "技术"
draft: false
lang: "cn"
---
自用镜像，禁止别用。

```shell
export UV_INSTALLER_GITHUB_BASE_URL="https://uvm.gxj62.cn/github.com"
export UV_PYTHON_INSTALL_MIRROR="https://uvm.gxj62.cn/github.com/astral-sh/python-build-standalone/releases/download"
export UV_DEFAULT_INDEX="https://mirrors.hust.edu.cn/pypi/web/simple"
```

## Windows
```shell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
## Linux or MacOS
```shell
curl -LsSf https://astral.sh/uv/install.sh | sh
```