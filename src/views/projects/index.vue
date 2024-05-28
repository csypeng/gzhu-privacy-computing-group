<template>
  <div class="project-pages">
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
    <div class="project-detail">
      <div class="menu-bar">
        <a-menu v-model:selectedKeys="currentCategory" mode="horizontal" :items="category" />
      </div>
      <a-list item-layout="vertical" size="large" :pagination="null" :data-source="projectList">
        <template #renderItem="{ item, index }">
          <a-list-item :key="index">
            <template #extra>
              <a-image
                :width="250"
                :height="140"
                :src="item.imageUrl"
              />
            </template>
            <a-list-item-meta :description="item.subtitle">
              <template #title>
                <router-link :to="{name: 'ProjectDetail', params: { projectName: item.name }}" style="font-size: 18px;">{{item.title}} </router-link>
              </template>
            </a-list-item-meta>
            <div>
              <div> {{ item.description }} </div>
              <div class="tag-row">
                <a-tag v-for="tag in item.tags" :color="tag.type">
                  <a v-if="tag.name==='PDF'" :href="tag.url" download>{{tag.name}}</a>
                  <a v-else-if="tag.url" :href="tag.url" target="_blank">{{tag.name}}</a>
                  <span v-else>{{tag.name}}</span>
                </a-tag>
              </div>
            </div>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script setup>
import { StarOutlined, LikeOutlined, MessageOutlined, RightOutlined } from '@ant-design/icons-vue';
import { pageBanner, projectList, projectCategory } from './data.js'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentCategory = ref(['all'])

const query = route.query?.category || 'all'
currentCategory.value = [query]
console.log(query, currentCategory)

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const category = [
  {key: 'all', label: 'All', title: 'All'},
]
Object.keys(projectCategory).forEach(elem => {
  category.push({
    key: elem,
    label: projectCategory[elem],
    title: projectCategory[elem]
  })
})
console.log(category)
</script>

<script>
export default {
  name: "Projects"
}
</script>

<style lang="less" scoped>
.project-pages {
  .banner {
    width: 100%;
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
  .project-detail {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 20px 40px 20px;
    .tag-row {
      margin-top: 16px;
    }
    .menu-bar {
      margin-bottom: 20px;
    }
  }
}
  

</style>