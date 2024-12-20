<template>
  <v-chip-group column v-model="tagList.selection" multiple @update:modelValue="story.linkText">
    <v-tag v-for="(tag, index) in tagList.tags" :key="index" :text="tag.text" :icon="tag.icon" :color="tag.color"
      class="text-red" tooltip>
    </v-tag>
  </v-chip-group>

</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'

const story = ref(useStoryStore());
const tagList = ref(useTagStore());



onMounted(async () => {
  console.log('Hello world!')
  tagList.value.addTag('name:Jenny Everywhere', 'mdi-account-circle', 'primary')
  tagList.value.addTag('portal', 'mdi-orbit', 'green')
  tagList.value.addTag('jetpack', 'mdi-rocket-launch', 'warning')
  tagList.value.addTag('flamethrower', 'mdi-fire', 'error')
  tagList.value.addTag('dude with a mohawk', 'mdi-face-man', 'orange')
  await story.value.fetchStory()
})

</script>
