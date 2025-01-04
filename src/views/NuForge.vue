<template>

  <v-container>
    <v-row>
      <v-col cols="6">
        <EvTrayCard name="Tag.inator (Random)" :tags="(tags as Tag[])" v-model="selected" :body="body" />
      </v-col>
      <v-divider vertical />
      <v-col cols="6">
        <MarkdownRenderer :text="body" :tags="filtered" id="md_container" />
        <v-divider />
        <v-container>
          <EvTrayCard name="Parsed From HTML" :tags="(deets.custom as Tag[])" v-model="userTags.selection"
            :body="body" />
        </v-container>
      </v-col>
    </v-row>
    {{ userTags.selection }}
    <v-divider />
    {{ selected }}
    <v-row v-if="0">
      <v-col>
        <EvTrayCard :tags="persona.themeTags" name="theme" v-model="selected" />
        <v-divider />
        <div v-for="themeColor in persona.themeBase" :key="themeColor">
          <v-chip class="ma-1" v-if="colorStats[themeColor]" prepend-icon="mdi-circle-opacity"
            :text="`${colorStats[themeColor].count.toString()}`"
            :variant="selected.includes(colorStats[themeColor].color) ? 'plain' : 'text'">
            <template #prepend>
              <v-icon :color="themeColor"></v-icon>
            </template></v-chip>
        </div>
        <v-divider />
        {{ colorStats }}
        <v-divider />
        <div v-for="themeColor in persona.themeBase" :key="themeColor">
          <v-chip class="ma-1" v-if="filteredColorStats[themeColor]" prepend-icon="mdi-circle-opacity"
            :text="`${themeColor}: ${filteredColorStats[themeColor].count.toString()}`" variant="outlined">
            <template #prepend>
              <v-icon :color="themeColor"></v-icon>
            </template>
          </v-chip>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Tag from '@/objects/Tag'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import EvTrayCard from '@/components/tags/EvTrayCard.vue';
import { useDiceStore } from '@/stores/dice';
import { useTagStore } from '@/stores/tags';
import { usePersonaStore } from '@/stores/persona';


import MarkdownManager from '@/objects/MarkdownManager';
const markdowninator = new MarkdownManager()
import Inator from '@/objects/Inator';
const inator = new Inator()

const userTags = useTagStore()
const persona = usePersonaStore()


//const response = await fetch('@/public/icons.html');

const dice = useDiceStore()
const selected = ref<string[]>([])
const randomNumber = ref(dice)

const tags = computed(() => inator.iconTags(randomNumber.value.getResults()))
const body = computed(() => inator.shuffleArray([...tags.value.map((tag) => tag.name), ...inator.words(randomNumber.value.getResults() * 2)]).join(' '))
const filtered = computed(() => tags.value.filter((tag) => selected.value.includes(tag.name)))


// Markdown Tools

const deets = computed(() => {
  const textToMarkdown = markdowninator.textToMarkdown(body.value, filtered.value)
  return markdowninator.htmlToTags(textToMarkdown)
})


// Color Stats

const colorStats = computed(() => {
  return tags.value.reduce((acc, tag) => {
    const color = tag.color || 'default'; // Fallback to 'default' if no color
    if (!acc[color]) {
      acc[color] = { color, count: 0, selected: selected.value.includes(tag.name) };
    }
    acc[color].count += 1;
    return acc;
  }, {} as Record<string, { color: string; count: number, selected: boolean }>);
});


const filteredColorStats = computed(() => {
  return filtered.value.reduce((acc, tag) => {
    const color = tag.color || 'default'; // Fallback to 'default' if no color
    if (!acc[color]) {
      acc[color] = { color, count: 0 };
    }
    acc[color].count += 1;
    return acc;
  }, {} as Record<string, { color: string; count: number }>);
});

watch(randomNumber.value, () => {
  selected.value = inator.shuffleArray(tags.value.map((tag) => tag.name)).slice(0, Math.floor(randomNumber.value.getResults() / 2))
})

dice.rollDice(1)

inator.iconTags()
// HTML PARSER ----


</script>
