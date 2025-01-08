<script setup lang="ts">
import { ref, computed } from 'vue';
import NuTag from '@/components/nu/NuTag.vue';
// import usePersonaStore from '@/stores/persona';
// const persona = usePersonaStore();
import Tag from '@/objects/NuTag';

const tagString = ref('')
const parsedString = computed(() => Tag.parseString(tagString.value))
const myTag = computed(() => new Tag(tagString.value))
const newTagString = computed(() => myTag.value.toString())
// import useCardStore from '@/stores/cards';
// const cards = useCardStore();

const attributesToTags = computed(() => {
  if (!parsedString.value) {
    return []
  }
  return Object.entries(parsedString.value)
    .map(([key, value]) => {
      if (value) {
        return new Tag(`${key}:${value}`)
      }
      return undefined
    })
    .filter((tag): tag is Tag => tag !== undefined)
}
)

</script>

<template>
  <v-divider>Tag String</v-divider>
  <v-text-field v-model="tagString" density="compact" min-width="200"
    label="Construct Tag: `space:name.default`"></v-text-field>
  <v-divider>{{ newTagString }}</v-divider>
  <NuTag :tag="myTag" />
  <v-divider>Tag String</v-divider>
  <NuTag v-for="tag in attributesToTags" :key="tag.id" :tag="tag" />

</template>
