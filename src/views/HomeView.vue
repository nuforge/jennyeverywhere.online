<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <img src="@/assets/stories/gallery/001.png" alt="A glowing green portal" />
        </v-col>
        <v-col cols="12" md="8">
          <div class="story-base  text-decoration-none " v-html="storyHTML">

          </div>
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
          <v-chip-group column v-model="tagselection" multiple @update:modelValue="linkText">
            <v-tag v-for="(tag, index) in tags" :key="index" :text="tag.text" :icon="tag.icon" :color="tag.color"
              class="text-red" :value="tag.count?.toString()">
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
  </v-main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import markdownit from 'markdown-it'


const md = markdownit({
  html: true,
  linkify: true,
})



const selection = ref([])
const tagselection = ref([])
const story = ref('')
const storyHTML = ref('')


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
  { text: `Slam the window shut and pretend this isn't happening?`, icon: 'mdi-window-closed-variant', color: 'primary', terms: ['window', 'dude with a mohawk', 'flamethrower'] },
  { text: `Grab a pillow, because clearly you're still dreaming?`, icon: 'mdi-bed', color: 'secondary', terms: ['pillow', 'jetpack', 'scarf', 'pajamas'] },
  { text: `Ask Jenny why there's a portal in the middle of the road?`, icon: 'mdi-chat-question', color: 'tertiary', terms: ['jenny everywhere', 'portal', 'road'] },
  { text: `Activate Shifting Power`, icon: 'mdi-dice-d20', color: 'quaternary', terms: ['jenny everywhere', 'shift', 'power'] },
])

const tags = ref<Tag[]>([
  { text: 'Jenny Everywhere', icon: 'mdi-account-box', color: 'primary' },
  { text: 'portal', icon: 'mdi-orbit', color: 'green' },
  { text: 'window', icon: 'mdi-window-closed-variant', color: 'grey' },
  { text: 'jetpack', icon: 'mdi-rocket-launch', color: 'tertiary' },
  { text: 'flamethrower', icon: 'mdi-fire', color: 'warning' },
  { text: 'scarf', icon: 'mdi-fire', color: 'warning' },
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
  tagselection.value.forEach((tag) => {

    const pattern = tags.value[tag].text

    // Escape special regex characters if pattern is a literal string
    const escapedPattern = typeof pattern === 'string'
      ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      : pattern; // If already a RegExp, use it as is

    const regex = typeof tags.value[tag].text === 'string' ? new RegExp(escapedPattern, 'g') : tags.value[tag].text;

    temp = temp.replace(regex, (match) => `<i class="mdi ${tags.value[tag].icon} text-${tags.value[tag].color}"></i> [${match}](${match.toLowerCase().replace(/\s/g, '-')})`);
  });
  // Replace matches with <b> tags
  storyHTML.value = md.render(temp)
}

console.log('Hello world!')
onMounted(() => {
  fetchStory()
})

</script>


<style>
.story-base a {
  color: var(--v-primary);
  text-decoration-line: none;
  font-weight: bold;
}
</style>
