import instance from '../axios-instance.js';

// 创建新博客
export async function createBlog(data) {
    return instance.post('/api/blogs', data);
}
  
// 更新博客
export async function updateBlog(blogId, data) {
    return instance.put(`/api/blogs/${blogId}`, data);
}
  
// 删除博客
export async function deleteBlog(blogId) {
    return instance.delete(`/api/blogs/${blogId}`);
}
// 获取博客列表
export async function getBlogList() {
  return instance.get('/api/blogs');
}

// 获取博客详情
export async function getBlogDetails(blogId) {
  return instance.get(`/api/blogs/${blogId}`);
}

// 点赞博客
export async function likeBlog(blogId) {
  return instance.post(`/api/blogs/${blogId}/like`);
}

//取消点赞博客
export async function unlikeBlog(blogId) {
    return instance.delete(`/api/blogs/${blogId}/like`);   
}

// 收藏博客
export async function favoriteBlog(blogId) {
  return instance.post(`/api/blogs/${blogId}/favorite`);
}

// 取消收藏博客
export async function unfavoriteBlog(blogId) {
    return instance.delete(`/api/blogs/${blogId}/favorite`);
}

// 搜索博客
export async function searchBlog(keyword) {
  return instance.get('/api/blogs/search', { params: { keyword } });
}

// 导出 blogApi 对象
const blogApi = {
  getBlogList,
  getBlogDetails,
  likeBlog,
  favoriteBlog,
  searchBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};

export default blogApi;
