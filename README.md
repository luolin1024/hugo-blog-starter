## hugo-vercel-starter

## 背景
本项目主要用于快速创建一个通过Vercel部署的Hugo静态博客
## 开始
在vercel中部署你的Hugo项目

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fluolin-cn%2Fhugo-vercel-starter&env=HUGO_VERSION&envDescription=HUGO_VERSION%E9%9C%80%E8%A6%81%E8%AE%BE%E7%BD%AE%E4%B8%BA0.92.1)

通过vercel创建对应的githb仓库后，需要在vercel的项目中配置对应的参数：HUGO_VERSION=0.92.1

## 案例

[hugo-vercel-starter](https://hugo-vercel-starter.vercel.app/)

[luolin.online](https://luolin.online/)

## 主题
当前starter默认支持2个主题：
- [DoIt(直接在config.toml中配置即可）](https://github.com/HEIGE-PCloud/DoIt?tab=readme-ov-file) (本项目doit分支，可在vercel部署后用本地分支为doit分支对master进行覆盖)
- [PaperMod(直接在config.toml中配置即可)](https://github.com/adityatelange/hugo-PaperMod) (本项目master分支和papermod分支)
