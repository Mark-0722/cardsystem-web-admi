<template>
  <div class="points">
    <h2>积分中心</h2>
    <p>当前积分：{{ points }}</p>
    <button @click="loadPoints">刷新积分</button>

    <ul>
      <li v-for="log in logs" :key="log.id">
        {{ log.reason }}：{{ log.changeValue }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { post } from '../utils/request'

const points = ref(0)
const logs = ref([])

async function loadPoints() {
  // 演示用假数据
  // 实际应调用：post('/points/info', { userId: 1 })
  points.value = 120
  logs.value = [
    { id: 1, reason: '每日打卡', changeValue: '+5' },
    { id: 2, reason: '漏签扣分', changeValue: '-10' },
    { id: 3, reason: '兑换商品', changeValue: '-30' }
  ]
}

onMounted(() => {
  loadPoints()
})
</script>

<style scoped>
.points {
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
}
li {
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}
</style>