<template>
<div class="news-page">
  <div class="banner">
    <a-carousel>
      <div class="banner-item">
        <div class="title">
          <h3>{{pageBanner.title}}</h3>
          <div class="desc">{{pageBanner.desc}}</div>
        </div>
      </div>
    </a-carousel>
  </div>
  <div class="news-detail">
    <a-row :gutter="16" v-for="index in 3" :key="index" style="margin-bottom: 16px;">
      <a-col :span="6" v-for="(stuff, index) in stuffList" :key="index">
        <a-card hoverable class="news-card">
          <a-card-meta>
            <template #title>{{stuff.name}}</template>
            <template #description>
              <div style="color: rgba(0, 0, 0, 0.88)">{{stuff.desc}}</div>
              <div>{{stuff.content}}</div>
              <div style="margin-top: 16px; color: #1677ff">
                <MailOutlined />
                {{stuff.email}}
              </div>
              <div v-if="stuff.location">{{stuff.location}}</div>
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>

  </div>
</div>
</template>
<script setup>
import { stuffList, pageBanner } from './data.js'
import { MailOutlined } from '@ant-design/icons-vue'
</script>
<script>
export default {
  name: "People"
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
      // background: #f5f5f5;
      :deep(.ant-card-actions) {
        background: #f5f5f5;
      }
    }
  }
}
</style>