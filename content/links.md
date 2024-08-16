---
title: "Links"
layout: "links"
url: "/links/"
summary: links
---
<style>
.friend-links {
  display: flex;
  justify-content: space-between; /* 让元素均匀分布在一排 */
  flex-wrap: wrap; /* 允许元素换行 */
}

.friend-link {
  display: inline-block;
  margin: 5%;
  text-align: center;
  text-decoration: none;
  color: var(--content);
  max-width: 15%;
}

.friend-link img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.friend-link .name {
  margin-top: 5px;
}
</style>

<div class="friend-links">
  <a class="friend-link" href="https://www.luolin.online/" target="_blank">
    <img src="https://www.luolin.online/signal.png" alt="友链图标">
    <div class="name">luolin的博客</div>
  </a>
  <!-- 添加更多友链元素 -->
</div>


