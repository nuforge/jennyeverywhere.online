<script setup lang="ts">
import { ref, computed } from 'vue'
import img from '@/assets/stories/gallery/001.png'
import story from '@/assets/stories/story.json'
import Tag from '@/objects/nu/Tag'
import TagFactory from '@/objects/nu/TagFactory'

const raw = ref<string>(story.content.reduce((acc, curr) => acc + curr + `\n\n`, ''))

import StoryChoiceGroup from '@/components/story/StoryChoiceGroup.vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

//import MarkdownManager from '@/objects/MarkdownManager';
//const markdowninator = new MarkdownManager()
const tagMap = ref<Tag[]>([])
const selection = ref<Tag[]>([])

tagMap.value.push(TagFactory.create('Jenny Everywhere', { color: 'primary', icon: 'mdi-account-circle' }))
tagMap.value.push(TagFactory.create('green portal', { color: 'green', icon: 'mdi-orbit' }))
tagMap.value.push(TagFactory.create('flamethrower', { color: 'red', icon: 'mdi-fire' }))
tagMap.value.push(TagFactory.create('jetpack', { color: 'warning', icon: 'mdi-rocket-launch' }))
tagMap.value.push(TagFactory.create('dude with a mohawk', { color: 'text', icon: 'mdi-account-circle-outline' }))


const selected = computed<Tag[]>(() => {
  return tagMap.value.filter((tag) => {
    return Array.isArray(selection.value) && selection.value.some((selectedTag) => selectedTag.toString() === tag.name);
  }).map((label) => label as Tag);
});

</script>


<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="8" sm="12">
        <MarkdownRenderer :text="raw" id="md_container" :tags="selected" />
        <v-chip-group v-model="selection" column multiple>
          <NuTag v-for="tag in tagMap" :key="tag.name" :value="tag.name" :tag="(tag as Tag)"
            variant="text" />
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
