<template>
<div class="news-page">
  <div class="banner">
    <a-carousel class="carousel">
      <div class="banner-item">
        <div class="title">
          <h3>{{pageBanner.title}}</h3>
          <div class="desc">{{pageBanner.desc}}</div>
        </div>
      </div>
    </a-carousel>
  </div>
  <div class="news-detail">
    <div class="news-item" v-for="news in newsList">
      <div class="time-line">
        <a-space>
          <div class="time">{{news.time}}</div>
          <a-tag
            v-for="tag in news.category"
            :color="NewsCategory[tag]?.color || ''"
            :bordered="false"
          >
            {{NewsCategory[tag]?.title}}
          </a-tag>
        </a-space>
      </div>
      <div class="wrapper">
        <div class="title-line">
          <a-space>
            <span class="title">{{news.title}}</span>
          </a-space>
        </div>
        <div class="content" v-if="news.content">
          <markdown-renderer :source="news.content" />
        </div>
        <div class="tag-row" v-show="news.url">
          <a :href="news.url" target="_blank"> 了解更多</a>
        </div>

      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { pageBanner, newsList, NewsCategory } from './data.js'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
</script>
<script>
export default {
  name: "News"
}
</script>
<style lang="less" scoped>
.news-page {
  .carousel {
    max-width: 1200px;
    margin: 0 auto;
  }
  .banner {
    width: 100%;
    background: #000616;
    padding: 0 20px;
    :deep(.banner-item) {
      text-align: left;
      display: flex !important;
      align-items: center;
      justify-content: center;
      height: 240px;
      background-image: url('@/assets/images/banner1.jpeg');
      background-size: cover;
      .title {
        max-width: 1200px;
        width: 100%;
        padding: 0 20px;
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
    padding: 50px 40px 0 40px;
    .news-card {
      :deep(.ant-card-actions) {
        background: #f5f5f5;
      }
    }
  }
  .news-item {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    padding: 10px 20px;
    .time-line {
      .time {
        width: 110px;
      }
      width: 180px;
      font-size: 15px;
      line-height:24px;
    }
    .wrapper {
      flex: 1;
      margin-left: 10px;
      .title-line {
        line-height: 24px;
        .title {
          font-weight: 600;
          font-size: 18px;
        }
      }
      .content {
        margin-top: 10px;
        color: rgba(0,0,0,0.6);
        font-size: 16px;
        line-height: 22px;
      }
      .tag-row {
        margin-top: 16px;
      }
    }
  }
  .news-item + .news-item {
    margin-top: 20px;
  }
}
</style>