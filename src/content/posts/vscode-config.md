---
title: 我的Vscode配置
published: 2025-09-08
description: "准备更新下一版恢复工作环境白皮书，基于Windows 11 25H2版本"
tags: ["编程", "dotfiles"]
category: "技术"
draft: false
lang: "cn"
---

```json
{
  "editor.wordWrap": "on",
  "editor.formatOnPaste": true,
  "editor.fontFamily": "'Maple Mono NF CN', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "terminal.integrated.profiles.windows": {
    "Nushell": {
      "path": "nu"
    }
  },
  "terminal.integrated.defaultProfile.windows": "Nushell",
  "terminal.integrated.fontFamily": "Maple Mono NF CN",
  "terminal.integrated.fontLigatures.enabled": true,
  "chat.disableAIFeatures": true
}
```
