<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <img src="@/assets/stories/gallery/001.png" alt="A glowing green portal" />
        <feedbackBar />
      </v-col>
      <v-col cols="12" md="8">
        <div class="story-base  text-decoration-none " v-html="story.renderMd()"></div>
      </v-col>
    </v-row>

    <v-row class="">
      <v-col cols="auto" md="8">
        <v-item-group selected-class="rounded-te-xl  border-b-sm bg-surface border-opacity-100" v-model="selection"
          @update:model-value="updateTags">
          <storyChoice v-for="(button, index) in buttons" :key="index" :text="button.text" :icon="button.icon"
            :color="button.color" />
        </v-item-group>
      </v-col>
      <v-col cols="6" md="4">
        <v-chip-group column v-model="tagList.selection" multiple @update:modelValue="story.linkText">
          <v-tag v-for="(tag, index) in tagList.tags" :key="index" :text="tag.text" :icon="tag.icon" :color="tag.color"
            class="text-red" tooltip>
          </v-tag>
        </v-chip-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import feedbackBar from '@/components/feedbackBar.vue'
import storyChoice from '@/components/storyChoice.vue'

import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'

const tagList = ref(useTagStore());
const story = ref(useStoryStore());

const selection = ref<number[]>([]);

interface Button {
  text: string
  icon: string
  color: string
  terms: string[]
}


const buttons = ref([
  { text: `Slam the window shut and pretend this isn't happening?`, icon: '$primary', color: 'primary', terms: ['window', 'dude with a mohawk', 'flamethrower'] },
  { text: `Grab a pillow, because clearly you're still dreaming?`, icon: '$secondary', color: 'secondary', terms: ['pillow', 'jetpack', 'scarf', 'pajamas'] },
  { text: `Ask Jenny why there's a portal in the middle of the road?`, icon: '$tertiary', color: 'tertiary', terms: ['jenny everywhere', 'portal', 'road'] },
  { text: `Shift to another reality?`, icon: '$quaternary', color: 'quaternary', terms: ['jenny everywhere', 'shift', 'power'] },
])

function updateTags() {
  console.log(selection.value, selection)
  const index = selection.value
  console.log(selection.value, index, buttons.value[index])
  const button = buttons.value[index]

  button.terms.forEach(term => {
    term = term.toLowerCase()
    const color = button.color
    const icon = button.icon
    tagList.value.addTag(term, icon, color)
  })
}

onMounted(async () => {
  console.log('Hello world!')
  await story.value.fetchStory()
})

</script>


<style>
.story-base a {
  color: var(--v-primary);
  text-decoration-line: none;
  font-weight: bold;
}
</style>
