<template>
  <v-item-group selected-class="rounded-te-xl border-b-sm bg-surface border-opacity-100" v-model="selection"
    @update:model-value="updateSelection">
    <storyChoice v-for="(button, index) in buttons" :key="index" :text="button.text" :icon="button.icon"
      :color="button.color" />
  </v-item-group>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import storyChoice from '@/components/StoryChoice.vue'
import { useTagStore } from '@/stores/tags';
const tags = ref(useTagStore())

interface Button {
  text: string
  icon: string
  color: string
  terms: string[]
}

const selection = ref<number>();

const updateSelection = (value: number) => {
  if (value === undefined) return
  buttons.value[value].terms.forEach(term => {
    tags.value.addLabel(term, buttons.value[value].color, buttons.value[value].icon)
  })
}

const buttons = ref<Button[]>([
  { text: `Slam the window shut and pretend this isn't happening?`, icon: '$primary', color: 'primary', terms: ['location:window', 'dude with a mohawk', 'flamethrower'] },
  { text: `Grab a pillow, because clearly you're still dreaming?`, icon: '$secondary', color: 'secondary', terms: ['pillow', 'jetpack', 'scarf', 'pajamas'] },
  { text: `Ask Jenny why there's a portal in the middle of the road?`, icon: '$tertiary', color: 'tertiary', terms: ['jenny everywhere', 'portal', 'road'] },
  { text: `Shift to another reality?`, icon: '$quaternary', color: 'quaternary', terms: ['jenny everywhere', 'shift', 'power'] },
])
</script>
