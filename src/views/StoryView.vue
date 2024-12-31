<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <v-img :src="img" alt="A glowing green portal" max-width="512px" />
        <FeedbackBar />
      </v-col>
      <v-col cols="12" sm="8">
        <StoryRenderer />
      </v-col>
      <v-col cols="auto" sm="7">
        <StoryChoiceGroup />
      </v-col>
      <v-col cols="auto">
        <TagTray :tags="taglist" :selected="tags.selection" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import img from '@/assets/stories/gallery/001.png'

import FeedbackBar from '@/components/FeedbackBar.vue'
import TagTray from '@/components/tags/TagTrayCard.vue';

import StoryChoiceGroup from '@/components/story/StoryChoiceGroup.vue'
import StoryRenderer from '@/components/story/StoryRenderer.vue';

import { useStoryStore } from '@/stores/story';
import { useTagStore } from '@/stores/tags'
import Tag from '@/objects/Tag.ts';

const tags = useTagStore()
const story = useStoryStore()

const taglist = computed(() => [...tags.tags, ...story.tags] as Tag[]);

onMounted(() => {

  tags.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle')
  tags.addLabel('green portal', 'green', 'mdi-orbit')
  tags.addLabel('flamethrower', 'red', 'mdi-fire')
  tags.addLabel('jetpack', 'warning', 'mdi-rocket-launch')
  tags.addLabel('dude with a mohawk', 'text', 'mdi-account-circle-outline')

})
</script>
