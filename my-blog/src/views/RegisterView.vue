<script setup>
import { reactive, ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { useRouter } from 'vue-router';
import { usePageTitle } from "../hooks/usePageTitle.js";

usePageTitle('注册');

const router = useRouter();

const formData = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  nickname: '',
});

const registerForm = ref();

const formRules = {
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { pattern: /^[A-Za-z0-9_]+$/, message: '用户名只能包含字母、数字和下划线', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 5, max: 20, message: '密码长度在5-20个字符之间', trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== formData.password) {
          callback(new Error('两次输入的密码不一致'));
        } else {
          callback();
        }
      },
      trigger: 'blur',
    },
  ],
};

const submitForm = (formEl) => {
   formEl.validate((valid) => {
    if (valid) {
      // 表单验证通过，可以提交注册逻辑
      console.log('注册表单数据：', formData);
      console.log('注册成功');
      router.push('/login');
    } else {
      // 表单验证不通过，不进行注册
      console.log('表单验证失败');
    }
  });
};
</script>

<template>
    <div class="register-page">
      <div class="register-form">
        <h2>注册新用户</h2>
        <el-form :model="formData" :rules="formRules" ref="registerForm" label-width="100px">
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
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input
              v-model="formData.confirmPassword"
              placeholder="请确认密码"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="昵称" prop="nickname">
            <el-input v-model="formData.nickname" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(registerForm)">注册</el-button>
          </el-form-item>
        </el-form>
        <p>&nbsp;&nbsp;已有账号？<router-link to="/login">去登录</router-link></p>
      </div>
    </div>
</template>
    
<style>
.register-page {
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
}

.register-form {
width: 400px;
padding: 20px;
border: 1px solid #ccc;
border-radius: 5px;
}

.register-form h2 {
margin-bottom: 20px;
}

.register-form p {
margin-top: 20px;
}

.register-form p a {
color: #409eff;
}
</style>
  