<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import EvTrayCard from '@/components/tags/EvTrayCard.vue';
import Tag from '@/objects/nu/v1/ValTag';
import NuTag from '@/components/nu/v1/NuTag.vue';
import useDiceStore from '@/stores/dice';
const dice = useDiceStore()

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()

import MarkdownManager from '@/objects/MarkdownManager';
const markdowninator = new MarkdownManager()
import Inator from '@/objects/Inator';
const inator = new Inator()


const content = ref('')

const selected = ref<string[]>([])
const randomNumber = ref(dice)
const filters = ref([...inator.commonStopWords(), ...inator.htmlTags(), ...['wiki', 'wikipedia']])

watch(
  () => persona.focus, // Use optional chaining to avoid errors
  (newFocus) => {
    if (newFocus) {
      selected.value = [newFocus.id]; // Update the selection array
    } else {
      selected.value = []; // Clear the selection array
    }
  },
  { immediate: true }
);

const onDoubleClick = (event: Event, tag: Tag) => {
  console.log('onDoubleClick', tag)
  persona.focusOn(tag)
  persona.openDrawer()

}

//const tags = computed(() => inator.iconTags(randomNumber.value.getResults()))
//const body = computed(() => inator.shuffleArray([...tags.value.map((tag) => tag.label), ...inator.words(randomNumber.value.getResults() * 2)]).join(' '))
//const filtered = computed(() => bodytags.value.filter((tag) => selected.value.includes(tag.label.toLowerCase().replace(/ /g, '-'))))

const wordData = computed(() => {
  const words = markdowninator.cleanAndCountWords(content.value, randomNumber.value.getResults() * 2, filters.value)
  return words
}
)

const bodytags = computed(() => inator.shuffleArray(wordData.value.map((word) => {
  const tag = new Tag(`count:${word.word}`, inator.color(), inator.icon());
  return tag;
})));

watch(randomNumber.value, () => {
  selected.value = inator.shuffleArray(bodytags.value.map((tag) => tag.label)).slice(0, Math.floor(randomNumber.value.getResults()))
})

dice.rollDice(1)
// Markdown Tools

// const deets = computed(() => {
//   const textToMarkdown = markdowninator.textToMarkdown(content.value, filtered.value)
//   return markdowninator.htmlToTags(textToMarkdown)
// })

// Color Stats

/*const colorStats = computed(() => {
  return tags.value.reduce((acc, tag) => {
    const color = tag.color || 'default'; // Fallback to 'default' if no color
    if (!acc[color]) {
      acc[color] = { color, count: 0, selected: selected.value.includes(tag.label) };
    }
    acc[color].count += 1;
    return acc;
  }, {} as Record<string, { color: string; count: number, selected: boolean }>);
});*/


onMounted(async () => {
  await markdowninator.loadMarkdown('/jennyeverywhere.online/markdown/phoenix.md', false).then((data) => {
    content.value = data ?? '';
  }) // Store the parsed HTML into the content ref
  //console.log(' Markdown:', content.value); // You can log the result if needed
});
</script>

<template>
  <v-container>
    <v-container>
      <v-divider>counts</v-divider>
      <NuTag v-for="item in wordData" :key="item.word" :tag="new Tag(item.word, inator.color(), inator.icon())"
        :count="item.count" @double-click="onDoubleClick" variant="text" />
      <v-divider />
    </v-container>
    <v-row>
      <v-col>
        <EvTrayCard name="phoenix.md" :body="content" :tags="bodytags" v-model="selected" />
      </v-col>
    </v-row>

    {{ wordData }}
  </v-container>
</template>
