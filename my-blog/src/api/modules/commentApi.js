import instance from '../axios-instance.js';

// 获取评论列表
export async function getCommentList(blogId) {
  try {
    const response = await instance.get(`/api/blogs/${blogId}/comments`);
    return response;
  } catch (error) {
    throw error;
  }
}

// 发表评论
export async function postComment(blogId, content) {
  try {
    const response = await instance.post(`/api/blogs/${blogId}/comments`, { content });
    return response;
  } catch (error) {
    throw error;
  }
}

// 删除评论
export async function deleteComment(blogId, commentId) {
    try {
      const response = await instance.delete(`/api/blogs/${blogId}/comments/${commentId}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

// 导出 commentApi 对象
const commentApi = {
  getCommentList,
  postComment,
};

export default commentApi;
