<template>
  <div class="project-pages">
    <div class="banner">
      <a-carousel>
        <div class="banner-item">
          <div class="title">
            <h3>发表</h3>
            <div class="desc">介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</div>
          </div>
        </div>
      </a-carousel>
    </div>
    <div class="project-detail">
      <div class="menu-bar">
        <a-menu v-model:selectedKeys="currentYear" mode="horizontal" :items="years" />
      </div>
      <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
        <template #renderItem="{ item }">
          <a-list-item key="item.title">
            <a-list-item-meta :description="item.description">
              <template #title>
                <a :href="item.href">{{ item.title }}</a>
              </template>
            </a-list-item-meta>
            {{ item.content }}
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script setup>
import { StarOutlined, LikeOutlined, MessageOutlined, RightOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '',
    title: `Publictions title ${i}`,
    // avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      '2024-04-01 13:00  Writter',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const pagination = {
  onChange: page => {
    console.log(page);
  },
  pageSize: 10,
};

const years = []
const currentYear = ref([`year-2024`]);
for (let i = 0; i < 6; i++) {
  years.push({
    key: `year-${2024-i}`,
    label: `${2024 - i}`,
    title: `${2024 - i}`,
  })
}

</script>

<script>
export default {
  name: "Publications"
}
</script>

<style lang="less" scoped>
.project-pages {
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
  .project-detail {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0 40px 0;
    .menu-bar {
      margin-bottom: 20px;
    }
  }
}
  

</style>