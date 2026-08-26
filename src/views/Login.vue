<template>
  <div class="login">
    <h2>管理后台登录</h2>
    <input v-model="username" placeholder="用户名" />
    <input v-model="password" type="password" placeholder="密码" />
    <button @click="login">登录8888999</button>
    <p class="tip">（演示用，实际接后端 /auth/login）</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../utils/request'

const username = ref('')
const password = ref('')
const router = useRouter()

function login() {
  // 演示：直接跳积分中心
  // 实际应调用：post('/auth/login', { username, password })
  router.push('/points')
}
</script>

<style scoped>
.login {
  width: 320px;
  margin: 120px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
}
input {
  width: 100%;
  margin-bottom: 12px;
  padding: 8px;
}
button {
  width: 100%;
  padding: 8px;
  background: #4a6cf7;
  color: #fff;
  border: none;
  border-radius: 4px;
}
.tip {
  font-size: 12px;
  color: #888;
  margin-top: 12px;
}
</style>