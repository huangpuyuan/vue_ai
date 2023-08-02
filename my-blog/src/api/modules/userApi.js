import instance from '../axios-instance.js';

// 注册用户
export async function registerUser(userData) {
  try {
    const response = await instance.post('/api/user/register', userData);
    return response;
  } catch (error) {
    throw error;
  }
}

// 用户登录
export async function loginUser(userData) {
  try {
    const response = await instance.post('/api/user/login', userData);
    return response;
  } catch (error) {
    throw error;
  }
}

// 获取用户个人资料
export async function getUserProfile() {
  try {
    const response = await instance.get('/api/user/profile');
    return response;
  } catch (error) {
    throw error;
  }
}

// 更新用户个人资料
export async function updateUserProfile(userData) {
  try {
    const response = await instance.put('/api/user/profile', userData);
    return response;
  } catch (error) {
    throw error;
  }
}

// 导出userApi对象
const userApi = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
};

export default userApi;
