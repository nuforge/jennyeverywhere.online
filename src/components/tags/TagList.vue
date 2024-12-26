<template>
  <v-chip-group column v-model="tags.selection" multiple @update:modelValue="highlightTags()">
    <v-tag-item v-for="(tag, index) in tags.tags" :key="index" :value="tag.id" :icon="tag.icon" :label="tag.name"
      :color="tag.color" @click:close="tags.removeTag(tag.id)" :noValue="noValue" :noLabel="styles.labels"
      :noIcon="styles.icons" :closable="styles.closable">
    </v-tag-item>
  </v-chip-group>
</template>

<script setup lang="ts">
import { useStyleStore } from '@/stores/styles'
import { useStoryStore } from '@/stores/story'
import { useTagStore } from '@/stores/tags';
const tags = useTagStore()
const story = useStoryStore()

const styles = useStyleStore()

const highlightTags = () => {
  story.HTML = (tags.linkText(story.raw))
}



defineProps({
  noLabel: {
    type: Boolean,
    default: false
  },
  noValue: {
    type: Boolean,
    default: false
  },
  noIcon: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  closer: {
    type: Boolean,
    default: false
  },
})

</script>
