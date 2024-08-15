---
title: 通过vercel部署hugo静态博客搭建
creation_date: 2024-03-13 10:51:42 星期三, 晚上
last_update_date: 2024-03-13 11:27:02 星期三, 晚上
tags:
  - 博客搭建
date: 2024-03-13T22:51:42+08:00
lastmod: 2024-08-05T11:06:30+08:00
keywords:
  - 博客搭建
  - vercel
  - hugo
  - 一键部署
---
## 背景
本文编写目的主要是帮助小白快速部署一个简洁好看的私人静态博客，支持他人评论，文章统计等功能，具备被google、baidu等搜索引擎索引等特点。
为什么要自建一个私人博客？
这一点很简单，1、博客掌握在自己手上，大平台也是可以说跑就跑的(狗头)；2、自建一个好看的博客成就感更足，培养自己的动手能力
## 博客选型
为什么不用动态博客，而用静态博客？
动态博客的页面是在用户访问时动态生成的，通常使用服务器端脚本语言（如 PHP、Python、Ruby 等）和数据库来生成页面内容，需要服务器成本

## 快速开始
1. 自身可翻墙(github和vercel使用前提)
2. 创建好github和vercel账号，这一步基本随便建
3. 尽量自己有一个域名，没有的话也没关系，就是国内无法访问而已，也可以考虑通过[cloudflare](https://dash.cloudflare.com/)加速
4. 访问[hugo-vercel-starter](https://github.com/luolin1024/hugo-vercel-starter)，可以快速部署自带doit主题静态博客，注意填写好hugo版本即可部署
	 ![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240725155511.png)

	  ![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240725155640.png)
	![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240725160244.png)
	![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240725160312.png)

5. 最后，访问vercel给出的域名即可，我这里vercel给的域名[hugo博客demo (demo-vercel-blog.vercel.app)](https://demo-vercel-blog.vercel.app/)

## 案例
[hugo博客demo (demo-vercel-blog.vercel.app)](https://demo-vercel-blog.vercel.app/)
## 自定义域名指向该静态博客

前提：自己有一个域名
域名添加到cloudflare管理，并配置dns解析服务器，完成后即可添加对应的域名解析vercel给的xxx.xxx.app域名

![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240725160623.png)

![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240725160803.png)


![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240725160736.png)

上面cloudflare设置完成后在vercel里面添加自己的域名解析对应的app
![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240725160905.png)


## hugo-vercel-starter更换PaperMod

### 背景以及快速更换
个人感觉papermod更换字体后更加的美观，于是更换成了papermod主题，效果如下：


![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240805100413.png)

于是乎，折腾了一下，中间也走了不少弯路，对于使用[luolin1024/hugo-vercel-starter: 用于通过vercel快速搭建一个hugo静态博客 (github.com)](https://github.com/luolin1024/hugo-vercel-starter)的小伙伴来说，需要自己处理的内容：
1. 使用最新的master分支
2. 评论改为自己的waline系统，建议参考下面的`添加评论`
		![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240805104446.png)

2. 浏览统计需要自己搭建，可直接看下面的添加浏览统计
3. 自己修改一下config.yml（博客名、logo啥的）

## PaperMod具体更换内容
### 更换字体

博客改用[落霞孤鹜系列字体](https://lxgw.github.io/)，正文使用 LXGW WenKai Lite 字体，代码块英文使用 JetBrains Mono 字体，中文使用 LXGW WenKai Screen 字体，公式使用 Arial 字体。

1. 打开`themes/PaperMod/layouts/partials/extend_head.html`文件，这个是会插入到 `<head></head>` 中间的内容，添加如下代码：
```html
<!-- 文章字体设置 -->
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jetbrains-mono@1.0.6/css/jetbrains-mono.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-lite-webfont@1.1.0/style.css" />
    <link rel="stylesheet" href="https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.6.0/style.css" />
    <style>
        body {
            font-family: "LXGW WenKai Lite", sans-serif;
            font-family: "LXGW WenKai Screen", sans-serif;
        }
    </style>
</head>
</html>
```
2. 打开`themes/PaperMod/assets/css/extended/blank.css` ，这个是可以自定义样式的地方，添加：
```html
/* ========== 正文字体：落霞孤鹜 ========== */
body {
    font-family: "LXGW WenKai Lite", sans-serif !important;
}

/* ========== 代码字体：JetBrains Mono ========== */
code {
    font-family: "JetBrains Mono", "LXGW WenKai Screen", "LXGW WenKai Lite", sans-serif;
}
```

1. 为了让 MathJax 公式更加美观，需要在`themes/PaperMod/layouts/partials/mathjax.html`文件的`MathJax.Hub.Config`配置中添加：
```
"HTML-CSS": {
    availableFonts: ["Arial", "TeX"],
    preferredFont: "TeX",
    webFont: "TeX"
}
```

​ 示例：$\sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t$

参考：[PaperMod主题优化 | 向着悠远的苍穹 (kdjlyy.github.io)](https://kdjlyy.github.io/posts/site/hugo-papermod-optimization/)
### 文章toc放侧边栏

首先找到目录 layouts/partials/toc.html ，把之前的代码换成如下代码
```
{{- $headers := findRE "<h[1-6].*?>(.|\n])+?</h[1-6]>" .Content -}}
{{- $has_headers := ge (len $headers) 1 -}}
{{- if $has_headers -}}
<aside id="toc-container" class="toc-container wide">
    <div class="toc">
        <details {{if (.Param "TocOpen") }} open{{ end }}>
            <summary accesskey="c" title="(Alt + C)">
                <span class="details">{{- i18n "toc" | default "Table of Contents" }}</span>
            </summary>

            <div class="inner">
                {{- $largest := 6 -}}
                {{- range $headers -}}
                {{- $headerLevel := index (findRE "[1-6]" . 1) 0 -}}
                {{- $headerLevel := len (seq $headerLevel) -}}
                {{- if lt $headerLevel $largest -}}
                {{- $largest = $headerLevel -}}
                {{- end -}}
                {{- end -}}

                {{- $firstHeaderLevel := len (seq (index (findRE "[1-6]" (index $headers 0) 1) 0)) -}}

                {{- $.Scratch.Set "bareul" slice -}}
                <ul>
                    {{- range seq (sub $firstHeaderLevel $largest) -}}
                    <ul>
                        {{- $.Scratch.Add "bareul" (sub (add $largest .) 1) -}}
                        {{- end -}}
                        {{- range $i, $header := $headers -}}
                        {{- $headerLevel := index (findRE "[1-6]" . 1) 0 -}}
                        {{- $headerLevel := len (seq $headerLevel) -}}

                        {{/* get id="xyz" */}}
                        {{- $id := index (findRE "(id=\"(.*?)\")" $header 9) 0 }}

                        {{- /* strip id="" to leave xyz, no way to get regex capturing groups in hugo */ -}}
                        {{- $cleanedID := replace (replace $id "id=\"" "") "\"" "" }}
                        {{- $header := replaceRE "<h[1-6].*?>((.|\n])+?)</h[1-6]>" "$1" $header -}}

                        {{- if ne $i 0 -}}
                        {{- $prevHeaderLevel := index (findRE "[1-6]" (index $headers (sub $i 1)) 1) 0 -}}
                        {{- $prevHeaderLevel := len (seq $prevHeaderLevel) -}}
                        {{- if gt $headerLevel $prevHeaderLevel -}}
                        {{- range seq $prevHeaderLevel (sub $headerLevel 1) -}}
                        <ul>
                            {{/* the first should not be recorded */}}
                            {{- if ne $prevHeaderLevel . -}}
                            {{- $.Scratch.Add "bareul" . -}}
                            {{- end -}}
                            {{- end -}}
                            {{- else -}}
                            </li>
                            {{- if lt $headerLevel $prevHeaderLevel -}}
                            {{- range seq (sub $prevHeaderLevel 1) -1 $headerLevel -}}
                            {{- if in ($.Scratch.Get "bareul") . -}}
                        </ul>
                        {{/* manually do pop item */}}
                        {{- $tmp := $.Scratch.Get "bareul" -}}
                        {{- $.Scratch.Delete "bareul" -}}
                        {{- $.Scratch.Set "bareul" slice}}
                        {{- range seq (sub (len $tmp) 1) -}}
                        {{- $.Scratch.Add "bareul" (index $tmp (sub . 1)) -}}
                        {{- end -}}
                        {{- else -}}
                    </ul>
                    </li>
                    {{- end -}}
                    {{- end -}}
                    {{- end -}}
                    {{- end }}
                    <li>
                        <a href="#{{- $cleanedID -}}" aria-label="{{- $header | plainify -}}">{{- $header | safeHTML -}}</a>
                        {{- else }}
                    <li>
                        <a href="#{{- $cleanedID -}}" aria-label="{{- $header | plainify -}}">{{- $header | safeHTML -}}</a>
                        {{- end -}}
                        {{- end -}}
                        <!-- {{- $firstHeaderLevel := len (seq (index (findRE "[1-6]" (index $headers 0) 1) 0)) -}} -->
                        {{- $firstHeaderLevel := $largest }}
                        {{- $lastHeaderLevel := len (seq (index (findRE "[1-6]" (index $headers (sub (len $headers) 1)) 1) 0)) }}
                    </li>
                    {{- range seq (sub $lastHeaderLevel $firstHeaderLevel) -}}
                    {{- if in ($.Scratch.Get "bareul") (add . $firstHeaderLevel) }}
                </ul>
                {{- else }}
                </ul>
                </li>
                {{- end -}}
                {{- end }}
                </ul>
            </div>
        </details>
    </div>
</aside>
<script>
    let activeElement;
    let elements;
    window.addEventListener('DOMContentLoaded', function (event) {
        checkTocPosition();

        elements = document.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]');
         // Make the first header active
         activeElement = elements[0];
         const id = encodeURI(activeElement.getAttribute('id')).toLowerCase();
         document.querySelector(`.inner ul li a[href="#${id}"]`).classList.add('active');
     }, false);

    window.addEventListener('resize', function(event) {
        checkTocPosition();
    }, false);

    window.addEventListener('scroll', () => {
        // Check if there is an object in the top half of the screen or keep the last item active
        activeElement = Array.from(elements).find((element) => {
            if ((getOffsetTop(element) - window.pageYOffset) > 0 && 
                (getOffsetTop(element) - window.pageYOffset) < window.innerHeight/2) {
                return element;
            }
        }) || activeElement

        elements.forEach(element => {
             const id = encodeURI(element.getAttribute('id')).toLowerCase();
             if (element === activeElement){
                 document.querySelector(`.inner ul li a[href="#${id}"]`).classList.add('active');
             } else {
                 document.querySelector(`.inner ul li a[href="#${id}"]`).classList.remove('active');
             }
         })
     }, false);

    const main = parseInt(getComputedStyle(document.body).getPropertyValue('--article-width'), 10);
    const toc = parseInt(getComputedStyle(document.body).getPropertyValue('--toc-width'), 10);
    const gap = parseInt(getComputedStyle(document.body).getPropertyValue('--gap'), 10);

    function checkTocPosition() {
        const width = document.body.scrollWidth;

        if (width - main - (toc * 2) - (gap * 4) > 0) {
            document.getElementById("toc-container").classList.add("wide");
        } else {
            document.getElementById("toc-container").classList.remove("wide");
        }
    }

    function getOffsetTop(element) {
        if (!element.getClientRects().length) {
            return 0;
        }
        let rect = element.getBoundingClientRect();
        let win = element.ownerDocument.defaultView;
        return rect.top + win.pageYOffset;   
    }
</script>
{{- end }}
```

接下来，找到目录 css/extended/blank.css ，复制如下代码

```
:root {
    --nav-width: 1380px;
    --article-width: 650px;
    --toc-width: 300px;
}

.toc {
    margin: 0 2px 40px 2px;
    border: 1px solid var(--border);
    background: var(--entry);
    border-radius: var(--radius);
    padding: 0.4em;
}

.toc-container.wide {
    position: absolute;
    height: 100%;
    border-right: 1px solid var(--border);
    left: calc((var(--toc-width) + var(--gap)) * -1);
    top: calc(var(--gap) * 2);
    width: var(--toc-width);
}

.wide .toc {
    position: sticky;
    top: var(--gap);
    border: unset;
    background: unset;
    border-radius: unset;
    width: 100%;
    margin: 0 2px 40px 2px;
}

.toc details summary {
    cursor: zoom-in;
    margin-inline-start: 20px;
    padding: 12px 0;
}

.toc details[open] summary {
    font-weight: 500;
}

.toc-container.wide .toc .inner {
    margin: 0;
}

.active {
    font-size: 110%;
    font-weight: 600;
}

.toc ul {
    list-style-type: circle;
}

.toc .inner {
    margin: 0 0 0 20px;
    padding: 0px 15px 15px 20px;
    font-size: 16px;

    /*目录显示高度*/
    max-height: 83vh;
    overflow-y: auto;
}

.toc .inner::-webkit-scrollbar-thumb {  /*滚动条*/
    background: var(--border);
    border: 7px solid var(--theme);
    border-radius: var(--radius);
}

.toc li ul {
    margin-inline-start: calc(var(--gap) * 0.5);
    list-style-type: none;
}

.toc li {
    list-style: none;
    font-size: 0.95rem;
    padding-bottom: 5px;
}

.toc li a:hover {
    color: var(--secondary);
}
```

参考自：[Hugo博客目录放在侧边 | PaperMod主题 | Sulv's Blog (sulvblog.cn)](https://www.sulvblog.cn/posts/blog/hugo_toc_side/)

### 添加浏览统计

busuanzi 插件可以提供站点访问量和文章阅读数的计数服务，但是访问很慢，不建议使用
替换方案：1. 自建umima后台可看流量情况。2. 前台博客界面可使用[不蒜子 - 杜老师说旗下免费统计平台 (dusays.com)](https://bsz.dusays.com/)

#### umima直接部署在vercel上
1. 在vercel新建一个postgres就行
2. 通过umima官方文档的一键部署直接部署，参考[Running on Vercel – Umami](https://umami.is/docs/guides/running-on-vercel)
3. 部署完成后可以得到自己的跟踪链接,需在starter中替换：
	![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240805103427.png)


弃用[Qexo/Qexo: A Quick, Powerful and Pretty Online Manager for Hexo. (github.com)](https://github.com/Qexo/Qexo)，原因：vercel部署失败

弃用[finisky/finicounter: A simple website page views counter for static websites (github.com)](https://github.com/finisky/finicounter) ，原因仅统计pv，未统计uv


### 添加评论
基于 GitHub issues 的评论工具不大建议使用，强制需要人登录，感觉对用户不友好
建议使用`waline`，参考官网文档[Vercel 部署 | Waline](https://waline.js.org/guide/deploy/vercel.html)支持vercel快速部署，完成后找到`/layouts/partials/comments.html`,更换为
```html
{{- /* Comments area start */ -}}
{{- /* to add comments read => https://gohugo.io/content-management/comments/ */ -}}

<link rel="stylesheet" href="https://unpkg.com/@waline/client@v2/dist/waline.css" />

<div id="waline"></div>
<script type="module">
    import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';
    const locale = {
        nick: '昵称',
        nickError: '请填写昵称',
        mail: '邮箱',
        mailError: '请填写正确的邮件地址',
        link: '网址',
        optional: '可选',
        placeholder: '仅填写昵称即可发表回复。\n填写邮箱可收到回复提醒。\n评论区支持 Markdown 语法及预览。\n',
        sofa: '来发评论吧~',
        submit: '提交',
        like: '喜欢',
        cancelLike: '取消喜欢',
        reply: '回复',
        cancelReply: '取消回复',
        comment: '评论',
        refresh: '刷新',
        more: '加载更多...',
        preview: '预览',
        emoji: '表情',
        uploadImage: '上传图片',
        seconds: '秒前',
        minutes: '分钟前',
        hours: '小时前',
        days: '天前',
        now: '刚刚',
        uploading: '正在上传',
        login: '管理',
        logout: '退出',
        admin: '博主',
        sticky: '置顶',
        word: '字',
        wordHint: '评论字数应在 $0 到 $1 字之间！\n当前字数：$2',
        anonymous: '匿名',
        level0: '潜水',
        level1: '冒泡',
        level2: '吐槽',
        level3: '活跃',
        level4: '话痨',
        level5: '传说',
        gif: '表情包',
        gifSearchPlaceholder: '搜索表情包',
        profile: '个人资料',
        approved: '通过',
        waiting: '待审核',
        spam: '垃圾',
        unsticky: '取消置顶',
        oldest: '按倒序',
        latest: '按正序',
        hottest: '按热度',
        reactionTitle: '你认为这篇文章怎么样？',
    };
    init({
        // options
        el: '#waline',
        serverURL: 'https://blogcomments.luolin.online',
        locale,
        emoji: false,     // 表情
        search: false,    // GIF 表情包
        reaction: false,  // 文章反应
        requiredMeta: ['nick'],
        pageSize: 10,
        imageUploader: false,
        copyright: true,
        pageview: true,
        like: false,
    });
</script>

{{- /* Comments area end */ -}}
```
注意，serverURL需要改用自己的url

### Github Action自动部署
PaperMod默认安装完成后通过GitHub Action部署会遇到报错，需要去掉PaperMod主题下的.github文件夹
![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240805102242.png)

![image.png](https://cdn.jsdelivr.net/gh/luolin1024/image@main/img/20240805110504.png)


### 优化SEO
config.yml中配置：

```
permalinks:
	posts: /:year/:month/:title/
```
原因：1、与原始目录/title有区别，可以避免后续修改目录名称导致链接失效；2、仅为title的话也会导致链接失效可以避免不同目录下的title冲突；


### 使用Fancybox实现图片灯箱/放大功能
参考：
[Hugo 使用 Fancybox 实现图片灯箱/放大功能 - atpX](https://atpx.com/blog/hugo-fancybox/)