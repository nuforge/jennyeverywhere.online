<script setup lang="ts">
import { ref, computed } from 'vue'
import img from '@/assets/stories/gallery/001.png'
import story from '@/assets/stories/story.json'
import Tag from '@/objects/nu/NuTag'
import NuTag from '@/components/nu/NuTag.vue'

const raw = ref<string>(story.content.reduce((acc, curr) => acc + curr + `\n\n`, ''))

import StoryChoiceGroup from '@/components/story/StoryChoiceGroup.vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

//import MarkdownManager from '@/objects/MarkdownManager';
//const markdowninator = new MarkdownManager()
const tagMap = ref([])

const selection = ref([''])

tagMap.value.push(new Tag('Jenny Everywhere', 'primary', 'mdi-account-circle'))
tagMap.value.push(new Tag('green portal', 'green', 'mdi-orbit'))
tagMap.value.push(new Tag('flamethrower', 'red', 'mdi-fire'))
tagMap.value.push(new Tag('jetpack', 'warning', 'mdi-rocket-launch'))
tagMap.value.push(new Tag('dude with a mohawk', 'text', 'mdi-account-circle-outline'))

const selected = computed(() => {
  return tagMap.value.filter((tag) => {
    return Array.isArray(selection.value) && selection.value.includes(tag.label) ? tag : false;
  });
});

</script>


<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="8" sm="12">
        <MarkdownRenderer :text="raw" id="md_container" :tags="selected" />
        <v-chip-group v-model="selection" column multiple>
          <NuTag v-for="tag in tagMap" :key="tag.label" :tag="tag" :value="tag.label" />
        </v-chip-group>
      </v-col>
      <v-col cols="auto" md="4" sm="12">
        <v-img :src="img" alt="A glowing green portal" max-width="256px" />
      </v-col>
      <v-col cols="6" md="12">
        <StoryChoiceGroup />
      </v-col>
    </v-row>
  </v-container>
</template>
