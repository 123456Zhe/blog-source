# Hexo 在线编辑配置指南

## 🎉 已完成配置

✅ CMS 入口文件: `source/admin/index.html`
✅ CMS 配置文件: `source/admin/config.yml`
✅ 上传目录: `source/images/uploads/`
✅ 文件已推送到 GitHub

---

## 🔐 步骤一：创建 GitHub OAuth 应用

Decap CMS 需要通过 GitHub OAuth 来认证用户身份。

### 1. 访问 GitHub 开发者设置
打开: https://github.com/settings/developers

### 2. 点击 "New OAuth App"
填写以下信息：
- **Application name**: `ZheZhe Blog CMS`
- **Homepage URL**: `https://blog.zhezhe.online`
- **Application description**: `Hexo 博客在线编辑`
- **Authorization callback URL**: `https://api.netlify.com/auth/done`

### 3. 保存 Client ID 和 Client Secret
创建后会显示：
- `Client ID`: 类似 `Iv1.xxxxxxxxxxxxxxx`
- `Client Secret`: 点击 Generate 生成

**保存好这两个值，下一步需要用到！**

---

## 🚀 步骤二：配置认证服务（二选一）

### 方案 A：使用 Netlify 托管（推荐，免费）

1. 访问 https://app.netlify.com
2. 用 GitHub 账号登录
3. 点击 "Add new site" → "Import an existing project"
4. 选择你的 `blog` 仓库
5. 部署设置：
   - Build command: `hexo generate`
   - Publish directory: `public`
6. 部署完成后，进入 Site settings → Identity → Enable Identity
7. 进入 Services → Git Gateway → Enable Git Gateway
8. 添加环境变量：
   - `GITHUB_CLIENT_ID`: 你的 Client ID
   - `GITHUB_CLIENT_SECRET`: 你的 Client Secret

### 方案 B：使用 Vercel + 自建认证（更自由）

如果不想用 Netlify，可以使用这个开源项目自建认证：
https://github.com/vencax/netlify-cms-github-oauth-provider

部署到 Vercel 后修改 `config.yml` 中的 `base_url` 为你的 Vercel 地址。

---

## 📝 步骤三：访问在线编辑器

配置完成后，访问：
```
https://blog.zhezhe.online/admin/
```

点击 "Login with GitHub" 即可开始编辑！

---

## ✏️ 使用说明

### 创建新文章
1. 点击左侧 "文章" → "New 文章"
2. 填写标题、分类、标签
3. 在编辑器中撰写内容（支持 Markdown）
4. 点击右上角 "Publish" 保存
5. 自动触发 GitHub Actions 部署

### 编辑现有文章
1. 点击左侧 "文章"
2. 找到要编辑的文章
3. 修改后保存即可

### 上传图片
1. 在编辑器中点击图片按钮
2. 选择本地图片上传
3. 图片会自动保存到 `source/images/uploads/`

---

## 🔄 工作流程

```
在线编辑 → 保存到 GitHub → 触发 Actions → 自动部署
     ↑_______________________________________________↓
                    (部署完成后可查看)
```

---

## 💡 备选方案

如果你不想配置 OAuth，还有更简单的方法：

### 方案 1：Prose.io（最简单）
直接访问 https://prose.io
授权 GitHub 账号后，即可在线编辑所有仓库中的 Markdown 文件。

### 方案 2：GitHub 自带编辑器
1. 打开你的博客仓库
2. 进入 `source/_posts/` 目录
3. 按 `.` 键或点击 "Edit this file"
4. 使用 github.dev 在线编辑

### 方案 3：GitHub Codespaces
1. 在仓库页面点击 "Code" → "Codespaces" → "Create codespace"
2. 获得完整的 VS Code 云端开发环境
3. 可以运行 `hexo new post "标题"` 等命令

---

## ⚠️ 注意事项

1. **浏览器兼容性**: Decap CMS 支持 Chrome、Firefox、Safari、Edge
2. **网络要求**: 需要能访问 GitHub 和 Netlify
3. **并发编辑**: 避免多人同时编辑同一篇文章
4. **备份**: 重要文章建议先在本地备份

---

## 🔧 故障排除

### 登录失败
- 检查 OAuth App 的 callback URL 是否正确
- 确认仓库是公开的（或你有权限访问）

### 无法保存
- 检查是否有写入权限
- 查看 GitHub Actions 是否正常运行

### 图片上传失败
- 确认 `source/images/uploads/` 目录存在
- 检查文件大小限制（GitHub 限制 100MB）

---

## 📚 参考链接

- [Decap CMS 文档](https://decapcms.org/docs/)
- [Hexo 文档](https://hexo.io/zh-cn/docs/)
- [Butterfly 主题文档](https://butterfly.js.org/)
