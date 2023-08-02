// 引入 axios
import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://localhost:3000', // 设置基本的 API 地址
  timeout: 10000, // 设置请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 可在此处设置请求头等
    // 例如，添加身份认证的 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 可在此处对响应数据进行处理

    // response.data的数据结构是{status,data,message}
    // 根据status是否是'success'进行成功的判断
    const resData = response.data || {};

    if(resData.status == 'success'){
      return resData.data;
    }else{
      //如果不成功 提示报错
      return Promise.reject(resData.message);
    }
  },
  (error) => {
    // 统一处理错误
    if (error.response) {
      // 根据错误状态码进行不同的处理
      // 例如，401 表示未授权，可以跳转到登录页
      // if (error.response.status === 401) {
      //   window.location.href = '/login';
      // }
    }
    return Promise.reject(error);
  }
);

// 封装 GET 请求
export function get(url, params = {}) {
  return instance.get(url, { params });
}

// 封装 POST 请求
export function post(url, data = {}) {
  return instance.post(url, data);
}

// 封装 PUT 请求
export function put(url, data = {}) {
  return instance.put(url, data);
}

// 封装 DELETE 请求
export function del(url, params = {}) {
  return instance.delete(url, { params });
}

// 在其他文件中使用封装的请求示例
// import { get, post, put, del } from './api.js';
// get('/api/blogs').then((response) => {
//   // 处理返回的数据
// }).catch((error) => {
//   // 处理请求错误
// });
// post('/api/blogs', { title: 'New Blog', content: 'This is a new blog.' }).then((response) => {
//   // 处理返回的数据
// }).catch((error) => {
//   // 处理请求错误
// });


// 导出封装后的 axios 实例
export default instance;