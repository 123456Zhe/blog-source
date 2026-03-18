---
title: 教你使用 MCP 增强你的 AI
date: 2025-05-23 22:53:55
tags:
- AI
- MCP
- 教程
categories: AI
---


## 前言

你是否想过，让 AI 像一个人一样搜索网页和文件，下载网上的文献，甚至自动管理你的 Github 项目？而 MCP 就可以实现这一切。

## 一、什么是 MCP？
MCP 是 Anthropic 在 2024 年推出的 **AI 通用接口协议**（全称 Model Context Protocol），就像 USB 接口让所有设备齐心协力一样，它让 LLM 能直接调用电脑或互联网里的文件、网页或数据库。当 LLM 需要完成特定任务时，可以像"即插即用"般调用这些模块，实时获得精准的上下文支持，从而实现能力的弹性扩展。这种架构打破了传统 AI 模型的封闭性，让大语言模型像搭载了多功能扩展坞的超级工作站，随时都能获取最合适的专业工具。（流程演示见[这里](https://www.cnblogs.com/BNTang/p/18815937)）。

如图所示：
![](https://pic4.zhimg.com/v2-3a242914e1f4958e631dd158e043b7c3_1440w.jpg)

## 二、MCP 可以干什么？（MCP 的好处）
**举个例子**：

假设你需要让 AI 完成以下操作：


1. 打开浏览器搜索「算法竞赛题库」；
2. 下载最新目录并保存到桌面；
3. 用软件生成报告。

**传统方式**：需要手动复制搜索结果、给操作步骤截图、上传文件……步骤繁琐且容易中断。 


**MCP 方式**：只需对 AI 说「请帮我生成算法竞赛题库的报告」，MCP 协议就会自动处理所有工具调用。

**对比表**


| 特性                | 传统方式               | MCP 方式               |
|---------------------|-----------------------|-----------------------|
| 数据访问速度        | 每次都要上传/下载     | 实时挂载              |
| 多步任务处理        | 需人工分段           | 自动向多个工具传球|
| 敏感信息泄露风险    | 数据需上传云端       | 本地加密存储          |
| 工具加装复杂度      | 需重新开发集成代码   | 拖拽式配置            |


## 三、如何快速上手 MCP？

这里以 vscode cline 为例，其他的大差不差。
### 1.安装插件

打开 vscode，点击插件市场，搜索 cline 并安装。

![](https://s21.ax1x.com/2025/04/30/pEHcbu9.png)

### 2.配置基础 AI

这里以硅基流动 API 为例。

点击 cline 插件图标，点击 Use your own API key；

![](https://s21.ax1x.com/2025/04/30/pEHco3F.png)

然后：
* 在 API Provider 一栏选 OpenAI Compatible；  
* 在 Base URL 一栏填 `https://api.siliconflow.cn/v1`；  
* 在 API Key 一栏填自己的硅基流动 API；
* 在 Model ID 一栏填自己想用的大模型 ID，比如 `deepseek-ai/DeepSeek-R1`。

然后点击 Lets go！就配置完成了。

![](https://s21.ax1x.com/2025/04/30/pEHc7jJ.png)

### 3.获取 MCP 服务器

为了方便，这里使用在线 MCP 服务器。

打开[MCP 市场](https://mcpmarket.cn)，选择一个 MCP 服务器（带有“直连”标签的可以直接使用）。

跳转到详细界面，点击“安装”，点击“生成”，把生成的 URL 复制。

![](https://s21.ax1x.com/2025/04/30/pEHcqBR.png)

回到 vscode，进入 cline，点击右上方左数第二个图标（MCP Servers）。

![](https://s21.ax1x.com/2025/04/30/pEHcTc4.png)

进入后，点击 Remote Servers，Server Name 随便取，Server URL 填刚刚复制的 URL，然后点击 Add Server。

![](https://s21.ax1x.com/2025/04/30/pEHcXAx.png)

稍等一下，成功后点击 Done 退出。

然后就可以愉快地使用 MCP 了。

![](https://s21.ax1x.com/2025/04/30/pEHcLH1.png)

## 四、MCP 服务器推荐

- [Time](https://mcpmarket.cn/server/67f39bfdb66f446c3d8ef609) 可以获取和转换时间和时区。
- [Fetch](https://mcpmarket.cn/server/67f13b99b66f446c3d8bed92) 可以获取网页内容并将其转换为 Markdown 格式。
- [Amap 高德地图](https://mcpmarket.cn/server/67ff4974764487b6b9e11c21) 可以搜索地点，获取地点经纬度坐标，导航线路，等等（注意：导航线路功能可能有幻觉，不建议使用）。
- Github 可以自动管理你的 Github 仓库
- ...

更多 MCP 服务器可以进入[MCP 市场](https://mcpmarket.cn)或者自己部署。
