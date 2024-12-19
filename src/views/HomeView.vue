<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <img src="@/assets/stories/gallery/001.png" alt="A glowing green portal" />
        </v-col>
        <v-col cols="12" md="8">
          <h2>You wake up on a Monday. Or is it Tuesday?</h2>
          <div v-html="storyBody"></div>
        </v-col>
      </v-row>

      <v-row class="">
        <v-col cols="auto" md="6">
          <v-item-group selected-class="rounded-e-xl bg-surface border-opacity-100" v-model="selection">
            <v-item v-slot="{ isSelected, selectedClass, toggle }" v-for="(button, index) in buttons" :key="index">
              <v-card hover
                :class="['mx-auto border-s-lg my-2 rounded-s-lg bg-transparent', selectedClass, `border-${button.color}`]"
                @click="toggle">

                <template v-slot:prepend><v-icon :icon="button.icon"
                    :color="isSelected ? button.color : 'text'"></v-icon></template>
                <template v-slot:subtitle>{{ button.text
                  }}</template>
                <template v-slot:append v-if="isSelected"><v-icon icon="$next" color="text"></v-icon></template>
              </v-card>
            </v-item>
          </v-item-group>
        </v-col>
        <v-col cols="6">
          <v-chip-group column>
            <v-chip v-for="(tag, index) in tags" :key="index" :text="tag.text" tile class="rounded-lg"
              @click="tag.count ? tag.count++ : tag.count = 1">
              <template v-slot:prepend><v-icon :icon="tag.icon" :color="tag.color"></v-icon></template>
              <template v-slot:default><span class="mx-2 text-no-wrap">{{ tag.text }}</span></template>
              <template v-slot:append v-if="tag.count"><v-badge :content="tag.count?.toString()"
                  inline></v-badge></template>
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const selection = ref([])

interface Button {
  text: string
  icon: string
  color: string
  terms: string[]
}

interface Tag {
  text: string
  icon: string
  color: string
  count?: number
}

const buttons = ref<Button[]>([
  { text: 'Slam the window shut and pretend this isn’t happening?', icon: 'mdi-account', color: 'primary', terms: ['window'] },
  { text: 'Grab a pillow, because clearly you’re still dreaming?', icon: 'mdi-home', color: 'secondary', terms: ['Jenny Everywhere'] },
  { text: 'Ask Jenny why there’s a 🟢 portal in the middle of the road?', icon: 'mdi-dice-d20', color: 'tertiary', terms: ['portal'] },
  { text: 'Activate Shifting Power', icon: 'mdi-star', color: 'quaternary', terms: ['jetpack'] },
])

const tags = ref<Tag[]>([
  { text: 'window', icon: 'mdi-account', color: 'primary' },
  { text: 'Jenny Everywhere', icon: 'mdi-home', color: 'secondary' },
  { text: 'portal', icon: 'mdi-dice-d20', color: 'tertiary' },
  { text: 'jetpack', icon: 'mdi-star', color: 'quaternary', count: 3 },
])

const storyBase = `
          <p>Either way, it's a day, and Jenny Everywhere is banging on your apartment window.</p>
          <p>"Get your jetpack, we're late!" she yells, her 🧣scarf flapping dramatically, even though there's no wind.
            She doesn't seem to care that you're still in pajamas—or that jetpacks aren't real (or so you thought).</p>

          <p>You stumble to the window, pulling it open. Jenny grins, radiating that effortless 😎 confidence that makes
            you want to believe she knows exactly what's going on... even though she probably doesn't. 😏 </p>

          <p>Behind her, a glowing green 🟢 portal hums ominously in the middle of the street, swirling with unearthly
            energy.</p>

          <p>A dude with a mohawk and a flamethrower casually steps out, his expression as calm as if he's just picking
            up groceries.</p>`

const storyBody = ref(storyBase)

// storyBody = linkText(storyBase, button.terms[0])

function linkText(text: string, pattern: string) {
  // Escape special regex characters if pattern is a literal string
  const escapedPattern = typeof pattern === 'string'
    ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    : pattern; // If already a RegExp, use it as is

  // Create a RegExp if pattern is a string
  const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern;

  // Replace matches with <b> tags
  return text.replace(regex, (match) => `[${match}]()`);
}

console.log('Hello world!')


</script>
