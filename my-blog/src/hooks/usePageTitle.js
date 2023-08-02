import { onMounted, watchEffect } from 'vue';

const DEFAULT_TITLE = 'TechBlog';

export function usePageTitle(title) {
  // 设置网页标题的函数
  const setPageTitle = (newTitle) => {
    document.title = newTitle + ' - ' + DEFAULT_TITLE;
  };

  // 初始化时设置网页标题
  onMounted(() => {
    setPageTitle(title);
  });

  // 监听 title 的变化，实时更新网页标题
  watchEffect(() => {
    setPageTitle(title);
  });

  // 返回设置网页标题的函数，以便在组件中调用
  return {
    setPageTitle,
  };
}
