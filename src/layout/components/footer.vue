<template>
  <div class="footer">
    <div class="title">
      <span>广州大学</span>
      <span>隐私计算组 | </span>
      <a href="https://beian.miit.gov.cn/" target="_blank" style="color: rgba(255, 255, 255, 0.65)">粤ICP备2024280233号-1</a>
    </div>
    <div class="others">Copyright © 2024. All rights reserved. </div>
  </div>
</template>

<script setup></script>
<script>
export default {
    name: 'PageFooter'
}
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>