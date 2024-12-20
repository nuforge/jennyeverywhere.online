<template>
  <v-chip-group column v-model="tags.selection" multiple @update:modelValue="story.setHTML(tags.linkText(story.story))">
    <v-tag v-for="(tag, index) in tags.tags" :key="index" :text="tag.text" :icon="tag.icon" :color="tag.color"
      class="text-red" tooltip>
    </v-tag>
  </v-chip-group>

</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'

const tags = ref(useTagStore());
const story = ref(useStoryStore());

tags.value.addTag('Jenny Everywhere', 'mdi-account-circle', 'primary')
tags.value.addTag('portal', 'mdi-orbit', 'green')
tags.value.addTag('jetpack', 'mdi-rocket-launch', 'warning')
tags.value.addTag('flamethrower', 'mdi-fire', 'error')
tags.value.addTag('dude with a mohawk', 'mdi-face-man', 'orange')

story.value.fetchStory()


</script>
