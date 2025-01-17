<template>
  <v-item-group selected-class="rounded-s-lg border-s-lg bg-surface border-opacity-100" v-model="selection"
    @update:model-value="updateSelection">
    <v-row dense>
      <v-col cols="12" density="compact" v-for="(choice, index) in story.choices" :key="index">
        <storyChoice :text="choice.text" :icon="choice.icon" :color="choice.color" />
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import storyChoice from '@/components/story/StoryChoice.vue'
import useStoryStore from '@/stores/story';
import Tag from '@/objects/nu/Tag'
const story = useStoryStore()
const selection = ref<number>();

const updateSelection = (value: number) => {
  const choice = story.choices[value]
  story.tagMap.clearTags()
  if (selection.value === undefined) return
  story.choices[selection.value].tags.forEach((tag) => {
    story.tagMap.addTag(new Tag(`${tag}`, choice.color, choice.icon))
  })
}
</script>
