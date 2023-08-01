<script setup>
import { ref,onMounted } from "vue";
import { getBlogList } from "../api/modules/blogApi.js";

  //获取博客列表
  const blogList = ref([]);
  onMounted(async () => {
    const res = await getBlogList();
    console.log('res',res);
    blogList.value = res.data;
  });


</script>

<template>
  <main>
      <h1> Home </h1> 
  </main>
</template>
