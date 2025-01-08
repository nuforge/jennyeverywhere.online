<script setup lang="ts">
import { ref, computed } from 'vue';
import NuTag from '@/components/nu/NuTag.vue';
// import usePersonaStore from '@/stores/persona';
// const persona = usePersonaStore();
import Tag from '@/objects/NuTag';

import Inator from '@/objects/Inator';

const inator = new Inator();

const tagString = ref('')
const myTag = computed(() => new Tag(tagString.value))
const newTagString = computed(() => myTag.value.toString())
// import useCardStore from '@/stores/cards';
// const cards = useCardStore();

const keywordTags = computed(() => {
  const keywords = Tag.extractKeywords(tagString.value)
  const individualTags = keywords.individual.map((keyword) => {
    //console.log('keyword', keyword)
    const check = inator.checkIcons(keyword)
    console.log('check', check)
    const tg = new Tag(keyword, 'primary', !check ? 'mdi-tag' : 'mdi-' + check[0].name)
    // console.log('tg', tg)

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
  {{ keywordTags }}
  <v-divider>Tag String</v-divider>
  <NuTag v-for="tag in keywordTags" :key="tag.id" :tag="tag" />


</template>
