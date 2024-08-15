## 项目介绍
基于hugo和PaperMod主题，一键式快速部署简约好看的博客网站

## 功能支持
- [x] 使用PaperMod主题
- [x] 更换字体：正文使用 LXGW WenKai Lite 字体，代码块英文使用 JetBrains Mono 字体
- [x] 文章toc放侧边栏
- [x] 支持umima进行浏览量统计
- [x] 添加waline评论系统
- [x] 优化路径seo
- [x] 图片优化，添加

## 快速开始

### 使用Vercel部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fluolin1024%2Fhugo-blog-starter&env=HUGO_VERSION&envDescription=HUGO_VERSION%E9%9C%80%E8%A6%81%E8%AE%BE%E7%BD%AE%E4%B8%BA0.92.1)



通过vercel创建对应的githb仓库后，需要在vercel的项目中配置对应的参数：HUGO_VERSION=0.92.1

### 使用github action部署

- 修改.github/workflows/gh-pages.yml文件，将external_repository修改为自己的用户名和仓库名
- 创建ACTIONS_DEPLOY_KEY，将私钥添加到仓库的secrets中


## 案例
[luolin.online](https://www.luolin.online/)

[hugo-vercel-starter](https://hugo-vercel-starter.vercel.app/)

## 主题切换

当前starter默认支持2个主题：
- [DoIt(切换至doit分支即可）](https://github.com/HEIGE-PCloud/DoIt?tab=readme-ov-file) (本项目doit分支，可在vercel部署后用本地分支为doit分支对master进行覆盖)
- [PaperMod(直接在config.toml中配置即可)](https://github.com/adityatelange/hugo-PaperMod) (本项目master分支)

## 最后
如果你也在使用当前博客模板，请添加issue通知我添加到案例中
如果你对当前模板有优化建议，可发起pr