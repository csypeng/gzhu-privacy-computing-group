<template>
<div class="homepage">
  <div class="banner">
    <a-carousel :autoplay="pageBanner.autoPlay" class="carousel">
      <div class="banner-item">
        <div class="title" v-for="(banner, index) in pageBanner.data" :key="index">
          <h3>{{ banner.title }}</h3>
          <div class="desc" v-if="banner.desc">{{ banner.desc }}</div>
        </div>
      </div>
    </a-carousel>
  </div>
  <div class="content">
    <div class="introduction">
      <div class="inner">
        <div class="title">{{groupIntroduction.title}}</div>
        <div style="font-size: 16px;">
          <markdown-renderer :source="groupIntroduction.content" />
        </div>
      </div>
    </div>
    <div class="news">x
      <div class="title">
        <span>最近动态</span>
      </div>
      <div class="card-container">
        <a-timeline mode="alternate">
          <a-timeline-item
            v-for="(news, index) in newsList.slice(0, 5)" :key="index"
          > 
            {{news.time}} <br/>
            {{news.title}} <br/>
          </a-timeline-item>
        
        </a-timeline>
        
      </div>
      <div class="btn-row">
        <a-button type="primary" ghost="">
          <router-link :to="{name: 'News'}">了解更多</router-link>
        </a-button>
      </div>
    </div>
    <div class="spotlight">
      <div class="title">
        <span>研究焦点</span>
      </div>
      <div class="card-container">
        <a-row :gutter="16">
          <a-col :span="6" v-for="(item, index) in researchSpotlight" :key="index">
            <div class="spotlight-card">
              <div class="card-title">
                <div class="card-icon"></div>
                <span>{{item.title}}</span>
              </div>
              <ul>
                <li v-for="(desc, index) in item.content">{{desc}}</li>
              </ul>
              <a-button type="link">了解更多</a-button>
            </div>
          </a-col>
        </a-row>
      </div>

    </div>
  </div>
</div>

</template>

<script setup>
import { CloudOutlined, DeploymentUnitOutlined } from '@ant-design/icons-vue'
import { pageBanner, groupIntroduction, researchSpotlight } from './data.js'
import { newsList } from '@/views/news/data.js'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
</script>
<script>
export default {

}
</script>

<style lang="less" scoped>
.homepage {
  .carousel {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
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
  .content {
    width: 100%;
    .title {
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 40px;
    }
    .introduction {
      width: 100%;
      background: #f5f5f5;
      // height: 300px;
      padding: 50px 0;
      .inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
      .title, .desc {
        max-width: 1200px;
        padding: 0 20px;
        margin: 0 auto;
      }
      .title {
        margin-bottom: 40px;
      }
    }
    .news{
      padding-top: 50px;
      .title, .card-container {
        max-width: 1200px;
        padding: 0 20px;
        margin: 0 auto;
      }
      .title {
        margin-bottom: 40px;
        // display: flex;
        // justify-content: space-between;
      }
      .card-container {
        .news-card {
          background: #f4f4f4;
        }
      }
      .btn-row {
        text-align: center;
        margin-top: 40px;
        .ant-btn-primary {
          // background: #73eedc;
          width: 120px;
        }
      }
    }
    .spotlight {
      padding-top: 50px;
      .title, .card-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
      .card-container {
        text-align: center;
        ul {
          height: 76px;
          overflow: hidden;
        }
        .ant-row {
          .ant-col {
            &:first-child .card-icon {
              background-image: url('@/assets/images/safty.svg');
            }
            &:nth-child(2) .card-icon {
              background-image: url('@/assets/images/privacy.svg');
            }
            &:nth-child(3) .card-icon {
              background-image: url('@/assets/images/reliable.svg');
            }
            &:nth-child(4) .card-icon {
              background-image: url('@/assets/images/ai.svg');
            }
          }
        }
      }
      .title {
        margin-bottom: 40px;
      }
      .spotlight-card {
        height: 280px;
        background: #f4f4f4;
        border-radius: 8px;
        .card-title {
          display: flex;
          flex-flow: column;
          align-items: center;
          font-size: 24px;
          padding: 20px;
          font-weight: bold;
          .card-icon {
            width: 50px;
            height: 50px;
            margin: 0 auto;
            // background-image: url('@/assets/images/safty.svg');
            background-size: contain;
            margin-bottom: 30px;
          }
          .anticon {
            font-size: 40px;
            margin-bottom: 30px;
          }
        }
        ul {
          line-height: 22px;
          color: rgba(0, 0, 0, 0.45);
          list-style-type: none;
          text-align: center;
          padding: 0;
        }
      }
      .btn-row {
        text-align: center;
        margin-top: 40px;
        .ant-btn-primary {
          // background: #73eedc;
          width: 120px;
        }
      }
    }
  }
}

</style>

