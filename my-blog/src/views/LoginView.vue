<script setup>
import { usePageTitle } from "../hooks/usePageTitle.js";

import { reactive, ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { useRouter } from 'vue-router';
import { loginUser } from '@/api/modules/userApi.js';

//设置页面标题
usePageTitle('登录');

const router = useRouter();

const loginForm = ref();

const formData = reactive({
  username: '',
  password: '',
});

const formRules = {
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
};

const submitForm = (formEl) => {
  formEl.validate(async (valid) => {
    if (valid) {
      // 表单验证通过，可以进行登录逻辑
      console.log('登录表单数据：', formData);
      const { token } = await loginUser(formData);
      //将token存储到localStorage中
      localStorage.setItem('token',token);
      router.push('/');
    } else {
      // 表单验证不通过，不进行登录
      console.log('表单验证失败');
    }
  });
};
</script>

<template>
  <div class="login-page">
    <h2>用户登录</h2>
    <div class="login-form">
      <el-form :model="formData" :rules="formRules" ref="loginForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="formData.password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(loginForm)">登录</el-button>
        </el-form-item>
        <el-form-item>
          <router-link to="/register">新用户请注册</router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
}

.login-form {
  margin-top: 20px;
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style> 