module.exports = [
  // 注册用户
  {
    url: '/api/user/register',
    method: 'post',
    response: () => {
      return {
        "status": "success",
      }
    }
  },

  // 用户登录
  {
    url: '/api/user/login',
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
    url: '/api/user/me',
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