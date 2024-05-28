<template>
  <div class="project-detail">
    <h1 style="margin-bottom: 20px">{{currentProject.title}}</h1>
    <h2 class="project-title">项目简介</h2>
    <div class="project-introduction">
      <markdown-renderer :source="md"></markdown-renderer>
    </div>

    <h1 class="project-title">相关研究成果</h1>
    <div class="publication-list">
      <a-table
        :dataSource="relatedPublications"
        :columns="columns"
        :showHeader="false"
        row-class-name="publication-row"
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'abbr'">
            <a-tag :color="CATEGORY[record.abbr]">{{record.abbr}}</a-tag>
          </template>
          <template v-else-if="column.key === 'content'">
            <div class="title">{{record.title}}</div>
            <div class="writer">{{record.writer}}</div>
            <em class="subtitle">{{record.subtitle}}</em>
            <div class="tags" v-if="record.tags && record.tags.length">
              <a-tag v-for="tag in record.tags" :color="tag.type">
                <a v-if="tag.name==='PDF'" :href="tag.url" download>{{tag.name}}</a>
                <a v-else-if="tag.url" :href="tag.url" target="_blank">{{tag.name}}</a>
                <span v-else>{{tag.name}}</span>
              </a-tag>
            </div>
          </template>
        </template>
      </a-table>
    </div>

  </div>
</template>
<script setup>
import { publications, CATEGORY } from '@/views/publications/data.js'
import { projectList } from '@/views/projects/data.js'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue' 

const route = useRoute()
const { projectName } = route.params
const currentProject = projectList.find((elem) => elem.name === projectName)
 
const md = ref('')
let relatedPublications = []
currentProject.labels.forEach((label) => {
  const res = publications.filter((elem) => elem.labels.includes(label))
  relatedPublications = [...relatedPublications, ...res]
})

import(`./md/${currentProject.md}.md`).then(res => {
  fetch(res.default)
    .then(response => response.text())
    .then(text => {
      md.value = text
    })
})


const columns = [
  {
    title: '',
    dataIndex: 'abbr',
    key: 'abbr',
    width: '120px'
  },
  {
    title: '',
    key: 'content',
  }
]
</script>
<script>
export default {
  name: 'ProjectDetailPage'
}
</script>
<style lang="less" scoped>
.project-detail {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0 40px 0;
  .project-title {
    margin-bottom: 0; 
    padding: 12px; 
    background: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-bottom: 0;
  }
}
.project-introduction {
  border: 1px solid #e5e5e5;
  padding: 12px;
  margin-bottom: 20px;
}
.publication-list {
  border: 1px solid #e5e5e5;
    
  :deep(.title) {
    font-size: 18px;
  }
  :deep(.subtitle) {
    font-size: 16px;
  }
  :deep(.writer) {
    font-size: 16px;
  }
  :deep(.tags) {
    margin-top: 10px;
    margin-bottom: 6px;
  }
  :deep(.publication-row) {
    .ant-table-cell:first-child {
      vertical-align: top;
      .ant-tag {
        margin-top: 6px;
      }
    }
  }
}
</style>