<template>
  <v-item-group selected-class="rounded-s-lg border-s-lg bg-surface border-opacity-100" v-model="selection"
    @update:model-value="updateSelection">
    <v-row dense>
      <v-col cols="12" density="compact" v-for="(choice, index) in story.choices" :key="index">
        <storyChoice :text="choice.text" :icon="choice.icon" :color="choice.color" />
      </v-col>
    </v-row>
  </v-item-group>
  <tag-group :tags="story.tags" noLabel noValue v-model="tags.selection" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import storyChoice from '@/components/story/StoryChoice.vue'
import { useStoryStore } from '@/stores/story';
import { useTagStore } from '@/stores/tags';
import Tag from '@/objects/Tag'
import TagGroup from '@/components/tags/TagGroup.vue';
const story = useStoryStore()
const selection = ref<number>();
const tags = useTagStore()

const updateSelection = (value: number) => {
  const choice = story.choices[value]
  const tag = new Tag(`choice:${choice.tags}`, choice.color, choice.icon)
  console.log(`choice:${choice.tags}`, choice.color, choice.icon)
  console.log('tag:', tag)
  story.tagMap.addTag(tag)
}
</script>
