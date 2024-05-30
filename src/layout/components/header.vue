<template>
  <div class="header">
    <div class="title">
      <img src="@/assets/logo2.png" style="height: 32px; margin-top: -8px"/>
      <span style="margin-left: 8px; font-size: 18px; font-weight: bold; line-height: 40px;">隐私计算学术组</span>
    </div>
    <div class="normal-mode">
      <a-menu
        v-model:selectedKeys="menuState.selectedKeys"
        mode="horizontal"
        theme="dark"
        @click="navTo"
        :items="NAVIGATION"
      />
    </div>
    <div class="narrow-mode">
      <a-dropdown>
        <BarsOutlined class="menu-btn"/>
        <template #overlay>
           <a-menu
              theme="dark"
              @click="navTo"
              :items="NAVIGATION"
            />
        </template>
      </a-dropdown>
    </div>    
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import router from '@/router'
import { MailOutlined, BarsOutlined, HomeOutlined, UserOutlined, AppstoreOutlined, FlagOutlined , ProfileOutlined} from '@ant-design/icons-vue'
import { h, reactive } from 'vue'
const route = useRoute()
const menuState = reactive({
  selectedKeys: [route.name]
})
const navTo = ({ key, keyPath, item }) => {
  router.push({name: key})
}
const NAVIGATION = [
  { key: 'Homepage', title: '首页', label: '首页', icon: () => h(HomeOutlined), router: { name: 'Homepage' } },
  // { key: 'News', title: '动态', label: '动态', icon: () => h(MailOutlined), router: { name: 'News' } },
  { key: 'People', title: '成员', label: '成员', icon: () => h(UserOutlined), router: { name: 'People' } },
  { key: 'Projects', title: '项目', label: '项目', icon: () => h(AppstoreOutlined), router: { name: 'Projects' } },
  { key: 'Publications', title: '研究成果', label: '研究成果', icon: () => h(FlagOutlined), router: { name: ' Publications' } },
  { key: 'Demo', title: '原型系统', label: '原型系统', icon: () => h(ProfileOutlined), router: { name: 'Demo' } },
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
  // padding: 0 10px;
  .ant-menu-horizontal {
    border-bottom: none;
  }
  :deep(.ant-menu-item) {
    border-radius: 8px;
  }
  .menu-btn {
    color: #fff;
    font-size: 20px;
    padding: 16px;
  }
}
@media screen and (max-width: 719px) {
  .narrow-mode {
    visibility: visible;
    margin-right: 10px;
    position: relative;
  }
  .normal-mode {
    visibility: hidden;
    position: absolute;
  }
}
@media screen and (min-width: 720px) and (max-width: 12000px) {
  .narrow-mode {
    visibility: hidden;
    position: absolute;
  }
  .normal-mode {
    visibility: visible;
    position: relative;
  }
}
</style>
