---
title: 简单制作一个 Linux to go 系统硬盘
date: 2025-06-07 20:55:51
tags:
- Linux
- 教程
categories: Linux
---


## 0x00 前言
Linux 是一个开源的操作系统，它的设计目标是提供一个稳定、安全、高效的操作系统，适用于各种硬件平台。Linux 可以运行在各种硬件平台上，包括个人电脑、服务器、嵌入式设备等。

你是否有在不同的设备上编写代码的需要，但是不想重新配环境，又不想用对资源占用较高的 Windows 系统？那么你需要一个 Linux to go！

本文将介绍如何制作一个 Linux to go 系统硬盘，让你在任何设备上都可以轻松地编写代码。

## 0x01 物品准备

* 一个 U 盘（用于制作启动盘，建议 16G）
* 一个 USB 3.0 移动硬盘（用于安装系统，建议固态硬盘或固态 U 盘，128G 及以上）
* 一台能用的电脑

## 0x02 制作启动盘

#### 1.选择系统

我使用的是 Zorin OS 17.3。

这款系统基于 Ubuntu 22.04，拥有 Ubuntu 的生态，而且运行速度很快的同时拥有漂亮的类 Windows 桌面，是一个很适合 Linux 新手的系统。

#### 2.下载系统镜像

进入 [Zorin OS 官网下载页面](https://zorin.com/os/download/)，找到 Zorin OS 17.3 Core，点击下方 download 按钮。
![](https://s21.ax1x.com/2025/06/07/pVi2zOe.png)
之后耐心等待下载完成。

#### 3.刻录镜像文件到启动盘

可以根据这篇[教程](https://blog.csdn.net/qq_29752857/article/details/135215762)。

## 0x03 安装系统
~~请原谅我的拍屏。~~

插入启动盘，重启，~~狂按功能键~~使用刚才## 0x00 前言
Linux 是一个开源的操作系统，它的设计目标是提供一个稳定、安全、高效的操作系统，适用于各种硬件平台。Linux 可以运行在各种硬件平台上，包括个人电脑、服务器、嵌入式设备等。

你是否有在不同的设备上编写代码的需要，但是不想重新配环境，又不想用对资源占用较高的 Windows 系统？那么你需要一个 Linux to go！

本文将介绍如何制作一个 Linux to go 系统硬盘，让你在任何设备上都可以轻松地编写代码。

## 0x01 物品准备

* 一个U盘（用于制作启动盘，建议16G）
* 一个 USB 3.0 移动硬盘（用于安装系统，建议固态硬盘或固态 U 盘，128G及以上）
* 一台能用的电脑

## 0x02 制作启动盘

#### 1.选择系统

我使用的是 Zorin OS 17.3。

这款系统基于 Ubuntu 22.04，拥有 Ubuntu 的生态，而且运行速度很快的同时拥有漂亮的类 Windows 桌面，是一个很适合 Linux 新手的系统。

#### 2.下载系统镜像

进入 [Zorin OS 官网下载页面](https://zorin.com/os/download/)，找到 Zorin OS 17.3 Core，点击下方 download 按钮。
![](https://s21.ax1x.com/2025/06/07/pVi2zOe.png)
之后耐心等待下载完成。

#### 3.刻录镜像文件到启动盘

可以根据这篇[教程](https://blog.csdn.net/qq_29752857/article/details/135215762)。

## 0x03 安装系统
~~请原谅我的拍屏。~~

插入启动盘，重启，~~狂按功能键~~使用刚才的 U 盘启动。

等待启动完毕，在弹出窗口左侧找到并选择中文，然后点击安装 Zorin OS。
![](https://s21.ax1x.com/2025/06/07/pVi2OW6.jpg)

然后键盘布局左边选中文，右边选第二个。
![](https://s21.ax1x.com/2025/06/07/pViR9wd.jpg)

然后连接无线网（可选）。
![](https://s21.ax1x.com/2025/06/07/pViRpeH.jpg)

然后按照图片选。
![](https://s21.ax1x.com/2025/06/07/pVi2xyD.jpg)

之后在安装类型界面选择擦除整个磁盘安装。
![](https://s21.ax1x.com/2025/06/07/pVifJZ4.jpg)

再选择准备好的移动硬盘，继续安装。
![](https://s21.ax1x.com/2025/06/07/pViRCTA.jpg)

之后设置账户。
![pViTjp9.jpg](https://s21.ax1x.com/2025/06/07/pViTjp9.jpg)

耐心等待安装完成，然后点击现在重启。
![](https://s21.ax1x.com/2025/06/07/pViTvlR.jpg)

出现图中小字后，拔掉启动 U 盘，按回车。
![](https://s21.ax1x.com/2025/06/07/pViTOfJ.jpg)

重启后，就可以进入 Zorin OS 桌面了！
![](https://s21.ax1x.com/2025/06/07/pVi2vQO.jpg)

**end。**7/pVi2OW6.jpg)

然后键盘布局左边选中文，右边选第二个。
![](https://s21.ax1x.com/2025/06/07/pViR9wd.jpg)

然后连接无线网（可选）。
![](https://s21.ax1x.com/2025/06/07/pViRpeH.jpg)

然后按照图片选。
![](https://s21.ax1x.com/2025/06/07/pVi2xyD.jpg)

之后在安装类型界面选择擦除整个磁盘安装。
![](https://s21.ax1x.com/2025/06/07/pVifJZ4.jpg)

再选择准备好的移动硬盘，继续安装。
![](https://s21.ax1x.com/2025/06/07/pViRCTA.jpg)

之后设置账户。
![](https://s21.ax1x.com/2025/06/07/pViTjp9.jpg)

耐心等待安装完成，然后点击现在重启。
![](https://s21.ax1x.com/2025/06/07/pViTvlR.jpg)

出现图中小字后，拔掉启动 U 盘，按回车。
![](https://s21.ax1x.com/2025/06/07/pViTOfJ.jpg)

重启后，就可以进入 Zorin OS 桌面了！
![](https://s21.ax1x.com/2025/06/07/pVi2vQO.jpg)

**end。**