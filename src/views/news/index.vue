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
      <div class="time">{{news.time}}</div>
      <div class="wrapper">
        <div class="title">{{news.title}}</div>
        <div class="content" v-if="news.content">
          <markdown-renderer :source="news.content" />
        </div>
        <div class="tag-row">
          <a-tag v-for="tag in news.tags" :color="tag.type">
            <a v-if="tag.name==='PDF'" :href="tag.url" download>{{tag.name}}</a>
            <a v-else-if="tag.url" :href="tag.url">{{tag.name}}</a>
            <span v-else>{{tag.name}}</span>
          </a-tag>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { pageBanner, newsList } from './data.js'
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
  .news-item {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    .time {
      width: 120px;
    }
    .wrapper {
      flex: 1;
      margin-left: 10px;
      .title {
        font-weight: 600;
      }
      .content {
        margin-top: 10px;
      }
      .tag-row {
        margin-top: 10px;
      }
    }
  }
  .news-item + .news-item {
    margin-top: 20px;
  }
}
</style>