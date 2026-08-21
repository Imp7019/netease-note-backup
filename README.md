# 网易云音乐动态备份（油猴脚本）

一个仅面向网页版网易云音乐的 Tampermonkey 脚本，用于备份自己的动态、图片和分享歌曲，并生成便于本地阅读的 HTML 回忆册。

> 仅在你已登录的浏览器中处理你有权访问的动态内容；不使用网易云官方 API。

## 作者与来源

- 原作者：[@sansan0](https://github.com/sansan0)
- 原始项目：[sansan0/netease-note-backup](https://github.com/sansan0/netease-note-backup)
- 当前维护仓库：[Imp7019/netease-note-backup](https://github.com/Imp7019/netease-note-backup)

本仓库保留并致谢原项目的基础实现，当前维护重点为油猴脚本及其导出体验优化。

## 使用方式

### 1. 安装油猴扩展

- Chrome：[Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Edge：[Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### 2. 安装脚本

点击 [安装脚本](https://raw.githubusercontent.com/Imp7019/netease-note-backup/master/netease-note-backup.user.js)，在 Tampermonkey 的安装页面确认安装。

### 3. 打开动态页并导出

1. 登录网页版网易云音乐。
2. 访问 `https://music.163.com/#/user/event?id=你的用户ID`。
3. 使用左上角面板的“自动滚动加载”获取更多动态；需要停止时再次点击该按钮。
4. 设置导出范围、图片大小与是否嵌入 Base64 图片，点击“导出HTML”。

登录后，脚本可以备份当前账号有权限访问的私密动态。

## 功能

- 提取动态正文、发布时间、分享歌曲、歌手链接和图片。
- 自动滚动加载历史动态，可随时停止。
- 逐条动态读取“查看原图”，尽量保留图片原始比例与高分辨率链接。
- 支持图片灯箱查看；可选 Base64 内嵌，生成可离线阅读的单文件 HTML。
- 导出页提供账号头像与昵称、按年份/月份筛选、全文搜索，以及按年份分组的右侧时间轴。
- 支持选择部分动态导出与复制纯文本。

## 相比原仓库的优化

本仓库当前维护重点是油猴脚本，近期主要改动包括：

- 将朴素的列表导出页升级为响应式“动态回忆册”卡片布局。
- 增加右侧时间轴，并按年份折叠、按月份定位动态。
- 增加年份与月份组合筛选，以及正文、歌曲名、歌手名全文搜索。
- 增强原图读取流程：以单条动态的 `li.itm` 和 `showpic` 面板为边界，避免不同动态之间串用图片查看器。
- 优化图片查看器关闭与处理等待，减少导出后残留的原图窗口。
- 放大并强化动态时间标签，补充账号信息卡，提升长档案阅读体验。

## 图片选项

- **Base64 图片**：HTML 完全离线，但文件可能很大，导出耗时也更长。
- **原始链接**：HTML 文件更小、更快，但查看图片时需要网络。

## 说明

- 网易云页面结构变动可能影响脚本，请通过 Issues 提供页面截图与控制台报错信息。
- 导出前应先让目标动态加载完成；自动滚动会在一段时间没有发现新内容后自动停止。

## 许可证

[GPL-3.0](LICENSE)
