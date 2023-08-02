<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavMeau from './components/NavMeau.vue';
import SeachInput from './components/SeachInput.vue';
import UserInfo from './components/UserInfo.vue';

</script>

<template>
  <div class="top-navbar">
    <!-- 左侧部分：Logo -->
    <div class="left-section">
      <div class="logo">
        <!-- 这里放置你的 Logo 图片或文字 -->
        <RouterLink to="/"> 
          <h1>TechBlog</h1>
        </RouterLink>
      </div>
      <NavMeau class="nav-meau"/>
      <SeachInput class="search-input"/>
    </div>
      
      <!-- 右侧部分：登录链接 -->
    <div class="right-section">
      <div class="login-link">
        <UserInfo class="user-info"/>
      </div>
    </div>

  </div>

  <div class="main-content">
    <!-- 主体部分居中，宽度为 1000px -->
    <div class="container">
      <!-- 使用 RouterView 来渲染路由组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.top-navbar {
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f0f0f0;
  border-bottom: solid 1px var(--el-menu-border-color);
}
.left-section {
  display: flex;
  align-items: center;
  --el-menu-bg-color:none;
}
.logo {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.logo a {
  text-decoration: none;
}

.login-link a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
}
.nav-meau{
  margin-left: 20px;
}
.main-content {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
}
.container {
  width: 1000px;
  padding: 20px;
}
</style>
