module.exports = [
  // 注册用户
  {
    url: '/api/users/register',
    method: 'post',
    response: () => {
      return {
        "status": "success",
      }
    }
  },

  // 用户登录
  {
    url: '/api/users/login',
    method: 'post',
    response: () => {
      return {
        "status": "success",
        "data": {
          token: 'xxxxx'
        }
      }
    }
  },

  // 获取用户信息
  {
    url: '/api/users/me',
    method: 'get',
    response: () => {
      return {
        "status": "success",
        "data": {
          username: 'zhangsan',
          nickname: '张三',
        }
      }
    }
  }
]