<script setup lang="ts">
import { ref, watch } from 'vue';

import Tag from '@/objects/nu/Tag';
import Label from '@/objects/nu/Label';
import NuTag from '@/components/nu/NuTag.vue';
import IconsJSON from '@/assets/icons/mdi-icons.json'

import Inator from '@/objects/Inator';
const inator = new Inator();
const currentTag = ref<Tag>()
const manyTags = ref<Tag[]>([])
const manyLabels = ref<Label[]>([])

const generateTags = (): void => {
  currentTag.value = inator.tag()
};

const wordMap = new Map()

IconsJSON.map((icon) => {
  const splitWords = icon.name.toString().split('-')

  splitWords.concat()//, ...icon.aliases?.toString().split('-') ?? undefined

  splitWords.sort((a, b) => a.length - b.length).map((word) => {
    wordMap.set(word, icon.name)

  })
  return splitWords
})

//{{ `mdi-${wordMap.get('point')}` }}

watch(currentTag, (newTag) => {
  if (newTag) {
    const newTag = inator.tag()
    const iconSearch = newTag.name.toLowerCase()

    if (wordMap.has(iconSearch)) {
      const newLabel = new Label(newTag)
      newLabel.setIcon(`mdi-${wordMap.get(iconSearch)}`).setColor(inator.themecolor(false))
      manyLabels.value.push(newLabel)
    }
    manyTags.value.push(newTag)
  }
});

</script>



<template>
  <div>
    <v-btn @click="generateTags()">Generate Tags</v-btn>
    <v-chip-group column multiple variant="plain">
      <NuTag v-for="tag in manyLabels" :key="tag.id" :value="tag.name" :tag="(tag as Label)"
        @click.right="console.log(tag)" :color="tag.color" :icon="tag.icon" variant="text" />
    </v-chip-group>

  </div>
</template>
