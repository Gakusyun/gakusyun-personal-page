---
title: 我的Zed配置(on Windows)
published: 2025-10-23
description: "准备更新下一版恢复工作环境白皮书，基于Windows 11 25H2版本"
tags: ["编程", "dotfiles"]
category: "技术"
draft: false
lang: "cn"
---

```json
// Zed settings
//
// For information on how to configure Zed, see the Zed
// documentation: https://zed.dev/docs/configuring-zed
//
// To see all of Zed's default settings without changing your
// custom settings, run `zed: open default settings` from the
// command palette (cmd-shift-p / ctrl-shift-p)
{
  "base_keymap": "VSCode",
  "autosave": "on_focus_change",
  "auto_indent_on_paste": true,
  "soft_wrap": "editor_width",
  "minimap": {
    "show": "auto"
  },
  "ui_font_size": 16,
  "buffer_font_size": 15,
  "theme": {
    "mode": "system",
    "light": "One Light",
    "dark": "One Dark"
  },
  "file_types": {
    // 文件类型指定
    "JSONC": ["json"]
  },

  // 代码补全
  "show_completions_on_input": true, // 输入时显示补全
  "ui_font_family": "MiSans",
  "auto_update": true, // 自动更新
  // 编辑器字体
  "buffer_font_family": "Maple Mono NF CN", // 编辑器字体，推荐 JetBrains Mono，需要手动安装 https://www.jetbrains.com/lp/mono/
  "buffer_font_features": {
    "calt": true // 禁用连体 如 != 不会变成 =/= 等
  },
  // 主题
  "vim_mode": false, // 是否启用vim模式
  "auto_install_extensions": {
    "fleet-themes": true,
    "material-icon-theme": true,
    "one-dark-darkened": true
  },
  "restore_on_startup": "last_session",
  "tabs": {
    "file_icons": true,
    "git_status": true,
    "show_diagnostics": "errors"
  },
  "git": {
    "git_gutter": "tracked_files", // 文件左边显示 git gutter，修改黄色，新增绿色，删除红色等
    "inline_blame": {
      // 在聚焦行显示 git blame
      "enabled": false, // 是否显示
      "delay_ms": 2000, // 延迟显示
      "show_commit_summary": true // 显示摘要
    }
  },
  "preview_tabs": {
    "enabled": true, // 文件预览，双击正式打开
    "enable_preview_from_file_finder": true, // 代码查找器中打开
    "enable_preview_from_code_navigation": true // 代码导航时打开
  },
  "telemetry": {
    // 遥测
    "diagnostics": false, // 诊断
    "metrics": false // 指标
  },
  "terminal": {
    "font_family": "Maple Mono NF CN",
    "env": {
      // 设置终端的环境变量
      "key": "value",
      "EDITOR": "zed --wait"
    },
    "shell": "system" // 使用系统默认的shell，通常是 /etc/passwd 文件
  },
  "project_panel": {
    "dock": "left", // 文件目录位置
    "git_status": true, // git 状态
    "indent_size": 23, // 缩进尺寸，像素为单位
    "indent_guides": {
      // 缩进线
      "show": "always"
    },
    "scrollbar": {
      "show": "auto" // 滚动条，
    }
  },
  "outline_panel": {
    // 大纲面板
    "button": true // 是否显示按钮
  },
  "collaboration_panel": {
    // 协作面板
    "button": false
  },
  "git_panel": {
    "button": true,
    "dock": "left"
  },
  "unnecessary_code_fade": 0.7, // 淡化未使用的代码
  "current_line_highlight": "all", // 当前行高亮
  "lsp_highlight_debounce": 75, // LSP 提示防抖延迟，ms
  "lsp": {
    "tinymist": {
      "settings": {
        "exportPdf": "onSave",
        "outputPath": "$root/$name"
      }
    }
  }
}
```
