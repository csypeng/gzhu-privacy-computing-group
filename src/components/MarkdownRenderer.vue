<template>
  <div v-html="markdown.render(data.source)" />
</template>

<script setup>
import MarkdownIt from "markdown-it";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTasklists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";
import { reactive, computed, watch } from 'vue';

const props = defineProps({
  source: { type: String, default: '' }
})
const markdown = new MarkdownIt()
  .use(MarkdownItAbbr)
  .use(MarkdownItAnchor)
  .use(MarkdownItFootnote)
  .use(MarkdownItHighlightjs)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(MarkdownItTasklists)
  .use(MarkdownItTOC);

const data = reactive({
  source: props.source
})

watch(() => props.source, (newVal, oldVal) => {
  console.log(newVal, oldVal)
  data.source = newVal
})



</script>
<script>
export default {
  name: 'MarkdownRenderer',
}
</script>

