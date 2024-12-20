<template>
  <v-item-group selected-class="rounded-te-xl  border-b-sm bg-surface border-opacity-100" v-model="selection">
    <storyChoice v-for="(button, index) in buttons" :key="index" :text="button.text" :icon="button.icon"
      :color="button.color" />
  </v-item-group>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import storyChoice from '@/components/StoryChoice.vue'

interface Button {
  text: string
  icon: string
  color: string
  terms: string[]
}

const selection = ref<number[]>([]);

const buttons = ref<Button[]>([
  { text: `Slam the window shut and pretend this isn't happening?`, icon: '$primary', color: 'primary', terms: ['window', 'dude with a mohawk', 'flamethrower'] },
  { text: `Grab a pillow, because clearly you're still dreaming?`, icon: '$secondary', color: 'secondary', terms: ['pillow', 'jetpack', 'scarf', 'pajamas'] },
  { text: `Ask Jenny why there's a portal in the middle of the road?`, icon: '$tertiary', color: 'tertiary', terms: ['jenny everywhere', 'portal', 'road'] },
  { text: `Shift to another reality?`, icon: '$quaternary', color: 'quaternary', terms: ['jenny everywhere', 'shift', 'power'] },
])
</script>
