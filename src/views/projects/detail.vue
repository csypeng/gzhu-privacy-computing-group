<template>
  <div class="project-detail">
    <h1 style="margin-bottom: 30px">xxxx 项目</h1>
    <div class="project-introduction">
      <markdown-renderer :source="md"></markdown-renderer>
    </div>

    <h2 style="margin: 30px 0 20px 0">相关研究成果</h2>
    <div class="publication-list">
      <a-table
        :dataSource="publications"
        :columns="columns"
        :showHeader="false"
        row-class-name="publication-row"
        :pagination="null"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'category'">
            <a-tag :color="CATEGORY[record.category]">{{record.category}}</a-tag>
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
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
const md = `
##### 五级标题

###### 六级标题

这是一段普通文字：

予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？若夫霪雨霏霏，连月不开，阴风怒号，浊浪排空；日星隐曜，山岳潜形；商旅不行，樯倾楫摧；薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。至若春和景明，波澜不惊，上下天光，一碧万顷；沙鸥翔集，锦鳞游泳；岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。

这是**加粗**，*斜体*，~~删除线~~，[链接](https://blog.imalan.cn)。

这是块引用与嵌套块引用：

> 安得广厦千万间，大庇天下寒士俱欢颜！风雨不动安如山。
> > 呜呼！何时眼前突兀见此屋，吾庐独破受冻死亦足！

这是无序列表：

* 苹果
    * 红将军
    * 元帅
* 香蕉
* 梨

这是有序列表：

1. 打开冰箱
    1. 右手放在冰箱门拉手上
    2. 左手扶住冰箱主体
    3. 右手向后用力
2. 把大象放进冰箱
3. 关上冰箱

`
const columns = [
  {
    title: '',
    dataIndex: 'category',
    key: 'category',
    width: '120px'
  },
  {
    title: '',
    key: 'content',
  }
]

const pagination = {
  onChange: page => {
    console.log(page);
  },
  pageSize: 10,
};
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

}
.publication-list {
    
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