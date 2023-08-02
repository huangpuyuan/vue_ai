<script setup>
  import { useRouter } from 'vue-router';
  
  // 获取路由实例
  const router = useRouter();
  
  // 获取当前路由对象
  const currentRoute = router.currentRoute;
  
  // 从URL中获取query参数category，默认为空
  const activeMenu = currentRoute.value.query.category || '';
  
  // 菜单点击处理函数
  const handleMenuClick = (index) => {
    // 构建query参数对象
    const query = { category: index };
  
    // 跳转到首页并附带query参数
    router.push({ path: '/', query });
  };
</script>

<template>
    <el-menu class="meau" :default-active="activeMenu" mode="horizontal" @select="handleMenuClick">
      <el-menu-item index="frontend">前端</el-menu-item>
      <el-menu-item index="java">Java</el-menu-item>
      <el-menu-item index="python">Python</el-menu-item>
      <el-menu-item index="mini-program">小程序</el-menu-item>
    </el-menu>
</template>

<style>
  /* 可根据需要添加样式 */

</style>
  