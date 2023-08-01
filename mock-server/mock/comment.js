const Mock = require('mockjs')
const Random = Mock.Random

module.exports = [
  // 获取评论列表
  {
    url: '/api/blogs/:blogId/comments',
    method: 'get',
    response: () => {
      return {
        "status": "success",
        "data": [
          {
            "id": 1,
            "content": "很有启发性的博客文章！谢谢作者分享。",
            "createdAt": "2023-06-15T10:30:00Z",
            "authorUsername": "techguru123",
            "authorNickname": "技术大师"
          },
          {
            "id": 2,
            "content": "我在实践中遇到了一些问题，这篇博客帮助了我解决它们。",
            "createdAt": "2023-06-16T15:45:00Z",
            "authorUsername": "zhangsan",
            "authorNickname": "张三"
          },
          {
            "id": 3,
            "content": "作者写得很清晰易懂，帮助我理解了一些复杂的概念。",
            "createdAt": "2023-06-17T09:20:00Z",
            "authorUsername": "codegeek",
            "authorNickname": "代码极客"
          },
          {
            "id": 4,
            "content": "这篇博客对我的项目开发非常有帮助。谢谢作者！",
            "createdAt": "2023-06-18T14:10:00Z",
            "authorUsername": "devpro",
            "authorNickname": "开发专家"
          },
          {
            "id": 5,
            "content": "非常棒的博客！我学到了很多新的知识。",
            "createdAt": "2023-06-19T11:55:00Z",
            "authorUsername": "techlearner",
            "authorNickname": "技术学习者"
          }
        ]
      }
    }
  },

  // 创建评论
  {
    url: '/api/blogs/:blogId/comments',
    method: 'post',
    response: () => {
      return {
        "status": "success",
      }
    }
  },

  // 删除评论
  {
    url: '/api/comments/:commentId',
    method: 'delete',
    response: () => {
      return {
        "status": "success",
      }
    }
  }
]