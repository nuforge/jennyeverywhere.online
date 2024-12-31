<template>
  <div id="markdown-renderer" class="markdown-body" @click.right.prevent="manageRightClick">
    <!-- Use the renderContent method to parse and render as Vue components -->
    <div v-if="text" v-html="textToHTML(taggedHTML)"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStoryStore } from '@/stores/story'
import { useTagStore } from '@/stores/tags'
const tags = useTagStore()
const story = useStoryStore()

const taglist = computed(() => {
  // Combine the two sets of tags into one iterable
  return [...tags.tags, ...story.tags];
});

const taggedHTML = computed(() => {
  // Combine the two sets of tags into one iterable
  return story.linkTags([...tags.tags, ...story.tagMap.tags], props.text)
})


const emit = defineEmits(['click', 'ctrl-click', 'right-click'])
const props = defineProps({
  text: {
    type: String,
  },
})

function manageRightClick() {
  emit('right-click')
}

function textToHTML(text: string) {
  const selected = taglist.value.filter(tag => tags.selection.includes(tag.id))
  const md = story.linkTags(selected, text)
  return story.markitdown(md)
}

</script>
