<script setup lang="ts">
import { ref, computed } from 'vue';
import NuTag from '@/components/nu/Tag.vue';
// import usePersonaStore from '@/stores/persona';
// const persona = usePersonaStore();
import Tag from '@/objects/nu/Tag';

import Inator from '@/objects/Inator';

const inator = new Inator();

const tagString = ref('')
const myTag = computed(() => new Tag(tagString.value, inator.bestColor(tagString.value) || '', inator.bestIcon(tagString.value) || ''))
const newTagString = computed(() => myTag.value.toString())
// import useCardStore from '@/stores/cards';
// const cards = useCardStore();

const keywordTags = computed(() => {
  const keywords = Tag.extractKeywords(tagString.value)
  const individualTags = keywords.individual.map((keyword) => {
    const tg = new Tag(keyword, inator.bestColor(keyword) || '', inator.bestIcon(keyword) || '')

    return tg
  })
  return individualTags
})


</script>
<template>
  <v-divider>Tag String</v-divider>
  <v-text-field v-model="tagString" density="compact" min-width="200"
    label="Construct Tag: `space:name.default`"></v-text-field>
  <v-divider>{{ newTagString }}</v-divider>
  <NuTag :tag="myTag" />
  <v-divider>Tag String</v-divider>
  <NuTag v-for="tag in keywordTags" :key="tag.id" :tag="tag" />


</template>
