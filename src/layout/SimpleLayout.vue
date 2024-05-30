<template>
  <a-layout class="layout-wrapper">
    <a-layout-header class="header-wrapper">
      <page-header />
    </a-layout-header>
    <a-layout-content class="content-wrapper">
      <div class="header-ghost"></div>
      <div class="inner-wrapper">
        <router-view class="content" />
      </div>
    </a-layout-content>
    <a-layout-footer class="footer-wrapper">
      <page-footer />
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import PageHeader from './components/header.vue'
import PageFooter from './components/footer.vue'
</script>

<style lang="less" scoped>
.layout-wrapper {
  background: #fff;
}
.header-wrapper {
  z-index: 99;
  width: 100%;
  vertical-align: baseline;
  padding: 5px 0;
  position: fixed;
  background: #001529;
  color: #fff;
  height: 60px;
}
.content-wrapper {
  position: relative;
  // height: 2000px;
  padding-bottom: 40px;
  .header-ghost {
    height: 60px;
    width: 100%;
  }
  .inner-wrapper {
    min-height: calc(100vh - 164px);
  }
}
.footer-wrapper {
  background: #001529;
  color: rgba(255, 255, 255, 0.65);
}
</style>
