# 🚀 立即启用在线编辑（最快方案）

## 方案 1：Prose.io（推荐，30秒搞定）

这是最简单的方法，无需任何配置！

1. 打开 https://prose.io
2. 点击 "Authorize on GitHub"
3. 选择你的 `blog` 仓库
4. 进入 `source/_posts/` 文件夹
5. 点击 "New File" 创建文章，或点击现有文章编辑
6. 编辑完成后点击右下角 "Commit" 保存

✅ 完成！保存后会自动触发 GitHub Actions 部署。

---

## 方案 2：GitHub 网页编辑器

1. 打开 https://github.com/123456Zhe/blog
2. 进入 `source/_posts/` 目录
3. 点击 "Add file" → "Create new file"
4. 或者点击现有文件，然后点击编辑按钮（铅笔图标）
5. 使用 Markdown 编辑
6. 点击 "Commit changes" 保存

---

## 方案 3：GitHub.dev（VS Code 网页版）

1. 打开 https://github.com/123456Zhe/blog
2. 按键盘上的 `.` 键（英文句号）
3. 直接进入 VS Code 网页版
4. 可以创建、编辑、删除文件
5. 左侧有文件浏览器，右侧是编辑器
6. 编辑完成后点击左侧源代码管理图标（分支图标）提交

---

## 📱 手机编辑方案

### 使用 GitHub App
1. 下载 GitHub App
2. 登录后找到 blog 仓库
3. 进入 `source/_posts/`
4. 点击文件可以直接编辑（功能较简单）

### 使用 Working Copy（iOS）
1. 安装 Working Copy App
2. 克隆 blog 仓库
3. 使用内置编辑器编辑 Markdown
4. 提交并推送

---

## 🎯 推荐组合

| 场景 | 推荐方案 |
|------|----------|
| 临时修改 | GitHub 网页编辑器 |
| 经常编辑 | Prose.io |
| 复杂编辑 | GitHub.dev |
| 手机编辑 | GitHub App |

---

## ⚡ 快速操作

### 创建新文章模板

复制以下内容，修改标题和日期：

```markdown
---
title: 文章标题
date: 2026-03-21 16:00:00
tags:
  - 标签1
  - 标签2
categories:
  - 分类
---

这里是文章内容...
```

### 保存后的自动流程

1. 你点击保存/提交
2. GitHub Actions 检测到代码变更
3. 自动运行 `hexo generate`
4. 生成的静态文件推送到 `123456Zhe.github.io`
5. 约 1-2 分钟后，https://blog.zhezhe.online 更新

---

## 💡 小技巧

1. **草稿功能**: 创建文章时放在 `source/_drafts/` 目录，不会发布
2. **定时发布**: 设置未来的日期，到时间自动发布
3. **快速预览**: 使用 GitHub.dev 时按 `Ctrl+Shift+V` 预览 Markdown

---

## ✅ 现在就开始

最简单的步骤：
1. 打开 https://prose.io
2. 授权 GitHub
3. 选择 blog → source → _posts
4. 点击 "New File"
5. 开始写作！

Done! 🎉
