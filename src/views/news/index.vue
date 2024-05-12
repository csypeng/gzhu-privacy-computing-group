<template>
<div class="news-page">
  <div class="banner">
    <a-carousel>
      <div class="banner-item">
        <div class="title">
          <h3>动态</h3>
          <div class="desc">介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</div>
        </div>
      </div>
    </a-carousel>
  </div>
  <div class="news-detail">
    <a-row :gutter="16" v-for="index in 5" :key="index" style="margin-bottom: 16px;">
      <a-col :span="8">
        <a-card hoverable class="news-card">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <span>查看</span>
          </template>
          <a-card-meta title="Card title" description="This is the description">
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable class="news-card">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <span>查看</span>
          </template>
          <a-card-meta title="Card title" description="This is the description">
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable class="news-card">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <span>查看</span>
          </template>
          <a-card-meta title="Card title" description="This is the description">
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>

  </div>
</div>
</template>
<script>
export default {
  name: "News"
}
</script>
<style lang="less" scoped>
.news-page {
  .banner {
    width: 100%;
    :deep(.banner-item) {
      text-align: left;
      display: flex !important;
      align-items: center;
      justify-content: center;
      height: 240px;
      .title {
        max-width: 1200px;
        width: 100%;
        .desc {
          max-width: 280px;
          color: rgba(255,255,255, 0.5);
        }
        h3 {
        font-size: 28px;
        }
      }
    }
    :deep(.slick-slide) {
      text-align: center;
      height: 240px;
      // line-height: 160px;
      background: #001529;
      overflow: hidden;
    }
    :deep(.slick-slide h3) {
      color: #fff;
    }
  }
  .news-detail {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    .news-card {
      :deep(.ant-card-actions) {
        background: #f5f5f5;
      }
    }
  }
}
</style>