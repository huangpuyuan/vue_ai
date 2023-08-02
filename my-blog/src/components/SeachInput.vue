<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

// 获取路由实例
const router = useRouter();

// 获取当前路由对象
const currentRoute = router.currentRoute;

// 从URL中获取query参数keyword，并实时监听
const keyword = ref(currentRoute.value.query.keyword || '');

// 监听URL query参数的变化，并实时更新keyword的值
watchEffect(() => {
  keyword.value = currentRoute.value.query.keyword || '';
});


// 处理搜索
const handleSearch = () => {
// 构建query参数对象
    const query = { ...currentRoute.value.query, keyword: keyword.value };
    // 跳转到当前路径并附带query参数
    router.push({ path: currentRoute.value.path, query });
};

//构建清空搜索关键词的函数
const handleClear = () => {
    keyword.value = '';
    router.push({ path: currentRoute.value.path, query: {
        ...currentRoute.value.query,
        keyword: null
    } });
};

</script>

<template>
    <div class="search-input">
        <el-input
        v-model="keyword"
        placeholder="请输入搜索关键词"
        clearable
        @keyup.enter="handleSearch"
        @clear="handleClear"
        />
    </div>  
</template>

<style>
/* 可根据需要添加样式 */
.search-input{
    width: 300px;
    height: 40px;
}
</style>
  