<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <img src="@/assets/stories/gallery/001.png" alt="A glowing green portal" />
        <feedbackBar />
      </v-col>
      <v-col cols="12" md="8">
        <div class="story-base  text-decoration-none " v-html="storyHTML"></div>
      </v-col>
    </v-row>

    <v-row class="">
      <v-col cols="auto" md="8">
        <v-item-group selected-class="rounded-te-xl  border-b-sm bg-surface border-opacity-100" v-model="selection">
          <storyChoice v-for="(button, index) in buttons" :key="index" :text="button.text" :icon="button.icon"
            :color="button.color" />
        </v-item-group>
      </v-col>
      <v-col cols="6" md="4">
        <v-chip-group column v-model="tagList.selection" multiple @update:modelValue="linkText">
          <v-tag v-for="(tag, index) in tagList.tags" :key="index" :text="tag.text" :icon="tag.icon" :color="tag.color"
            class="text-red" :value="tag.count?.toString()" tooltip>
          </v-tag>
        </v-chip-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">

        <v-divider></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import markdownit from 'markdown-it'
import feedbackBar from '@/components/feedbackBar.vue'
import storyChoice from '@/components/storyChoice.vue'

import { useTagStore } from '@/stores/tags'
import type { Tag } from '@/stores/tags'

const tagList = ref(useTagStore());

const md = markdownit({
  html: true,
  linkify: true,
})

const selection = ref([])
const story = ref('')
const storyHTML = ref('')


interface Button {
  text: string
  icon: string
  color: string
  terms: string[]
  tags?: Tag[]
}


const buttons = ref<Button[]>([
  { text: `Slam the window shut and pretend this isn't happening?`, icon: '$primary', color: 'primary', terms: ['window', 'dude with a mohawk', 'flamethrower'] },
  { text: `Grab a pillow, because clearly you're still dreaming?`, icon: '$secondary', color: 'secondary', terms: ['pillow', 'jetpack', 'scarf', 'pajamas'] },
  { text: `Ask Jenny why there's a portal in the middle of the road?`, icon: '$tertiary', color: 'tertiary', terms: ['jenny everywhere', 'portal', 'road'] },
  { text: `Shift to another reality?`, icon: '$quaternary', color: 'quaternary', terms: ['jenny everywhere', 'shift', 'power'] },
])

const fetchStory = async () => {

  await fetch("/src/assets/stories/markdown/story.md")
    .then((result) => result.text())
    .then((text) => {
      story.value = text
      storyHTML.value = md.render(text)
    })
    .catch((e) => console.error(e));
}

function linkText() {

  // Create a RegExp if pattern is a string
  //const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern;

  let temp = story.value;
  tagList.value.selection.forEach((tag) => {

    const pattern = tagList.value.tags[tag].text

    // Escape special regex characters if pattern is a literal string
    const escapedPattern = typeof pattern === 'string'
      ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      : pattern; // If already a RegExp, use it as is

    const regex = typeof tagList.value.tags[tag].text === 'string' ? new RegExp(escapedPattern, 'g') : tagList.value.tags[tag].text;

    temp = temp.replace(regex, (match) => `<span class="text-no-wrap" ><i class="text-no-wrap mdi ${tagList.value.tags[tag].icon} text-${tagList.value.tags[tag].color}"></i> [${match}](${match.toLowerCase().replace(/\s/g, '-')})</span>`);
  });
  // Replace matches with <b> tags
  storyHTML.value = md.render(temp)
}

console.log('Hello world!')
onMounted(async () => {
  await fetchStory()
    .then(() => {
      linkText()
    })
})

</script>


<style>
.story-base a {
  color: var(--v-primary);
  text-decoration-line: none;
  font-weight: bold;
}
</style>
