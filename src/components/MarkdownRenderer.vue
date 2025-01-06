<template>
  <div id="markdown-renderer" class="markdown-body" @click.right.exact.prevent="onRightClick" @click="onClick">
    <!-- Use the renderContent method to parse and render as Vue components -->
    <div v-show="text" v-html="markdowninator.textToMarkdown(text, props.tags)"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import Tag from '@/objects/NuTag'
import MarkdownManager from '@/objects/MarkdownManager';
const markdowninator = new MarkdownManager()


const emit = defineEmits(['click', 'ctrl-click', 'right-click', 'click-tag', 'click-body', 'click-icon', 'click-anchor', 'click-paragraph', 'create-tag'])

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  tags: {
    type: Array as () => Tag[],
    default: () => [new Tag('defaultName')],
  }
})


function onClick(event: MouseEvent) {
  //console.log('onClick')
  //router.push('/tags/ ')
  //getTagFromEvent(event)
  emit('click', event)
}

function onRightClick(event: MouseEvent) {
  //console.log('onRightClick', event)
  const tag = markdowninator.getTagFromEvent(event)
  emit('right-click', event, tag)
}


// MARK DOWN




</script>

<style scoped>
:deep a,
:deep i {

  color: #FFFFFF;
  cursor: pointer;
}
</style>
