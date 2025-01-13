<script setup lang="ts">
import { ref, computed } from 'vue'
import img from '@/assets/stories/gallery/001.png'
import story from '@/assets/stories/story.json'
import Label from '@/objects/nu/Label'
import Tag from '@/objects/nu/Tag'
import NuTag from '@/components/nu/v1/NuTag.vue'


const raw = ref<string>(story.content.reduce((acc, curr) => acc + curr + `\n\n`, ''))

import StoryChoiceGroup from '@/components/story/StoryChoiceGroup.vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

//import MarkdownManager from '@/objects/MarkdownManager';
//const markdowninator = new MarkdownManager()
const tagMap = ref<Label[]>([])

const selection = ref<Tag[]>([])

tagMap.value.push(new Label('Jenny Everywhere').setColor('primary').setIcon('mdi-account-circle'))
tagMap.value.push(new Label('green portal', 'green', 'mdi-orbit'))
tagMap.value.push(new Label('flamethrower', 'red', 'mdi-fire'))
tagMap.value.push(new Label('jetpack', 'warning', 'mdi-rocket-launch'))
tagMap.value.push(new Label('dude with a mohawk', 'text', 'mdi-account-circle-outline'))

const selected = computed(() => {
  return tagMap.value.filter((tag) => {
    return Array.isArray(selection.value) && selection.value.includes(tag) ? tag : false;
  });
});

</script>


<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="8" sm="12">
        <MarkdownRenderer :text="raw" id="md_container" :tags="selected" />
        <v-chip-group v-model="selection" column multiple>
          <NuTag v-for="tag in tagMap" :key="tag.label" :tag="tag.tag as Tag" :value="tag.label" />
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
