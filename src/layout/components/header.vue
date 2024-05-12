<template>
  <div class="header">
    <div class="title">
      <img src="@/assets/logo2.png" style="height: 32px; margin-top: -8px"/>
      <span style="margin-left: 8px; font-size: 18px; font-weight: bold; line-height: 40px;">隐私计算学术组</span>
    </div>
    <a-menu
      v-model:selectedKeys="menuState.selectedKeys"
      mode="horizontal"
      theme="dark"
      @click="navTo"
      :items="NAVIGATION"
    />    
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import router from '@/router'
import { MailOutlined } from '@ant-design/icons-vue'
import { h, reactive } from 'vue'
const route = useRoute()
const menuState = reactive({
  selectedKeys: [route.name]
})
const navTo = ({ key, keyPath, item }) => {
  router.push({name: key})
}
const NAVIGATION = [
  { key: 'Homepage', title: '首页', label: '首页', icon: () => h(MailOutlined), router: { name: 'Homepage' } },
  { key: 'News', title: '动态', label: '动态', icon: () => h(MailOutlined), router: { name: 'News' } },
  { key: 'People', title: '成员', label: '成员', icon: () => h(MailOutlined), router: { name: 'People' } },
  { key: 'Projects', title: '项目', label: '项目', icon: () => h(MailOutlined), router: { name: 'Projects' } },
  { key: 'Publications', title: '学术报告', label: '发表', icon: () => h(MailOutlined), router: { name: ' Publications' } },
  { key: 'Demo', title: '原型系统', label: '原型系统', icon: () => h(MailOutlined), router: { name: 'Demo' } },
]
</script>
<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="less" scoped>
.title {
  // color: rgba(255, 255, 255, 0.65);
  
}
.header {
  width: 100%;
  max-width: 1200px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  .ant-menu-horizontal {
    border-bottom: none;
  }
  :deep(.ant-menu-item) {
    border-radius: 8px;
  }
}
</style>
