---
title: 如何优雅地安装 UV
published: 2026-01-12
description: "如题"
tags: ["编程", "开发", "Python", "UV"]
category: "技术"
draft: false
lang: "cn"
---


```shell
export UV_PYTHON_INSTALL_MIRROR="https://mirrors.nju.edu.cn/github-release/astral-sh/python-build-standalone"
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