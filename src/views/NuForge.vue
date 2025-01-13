<script setup lang="ts">
import { ref } from 'vue';
import { watch } from 'vue';

import Tag from '@/objects/nu/v2/Tag';
import Label from '@/objects/nu/v2/Label';
import NuTag from '@/components/nu/v2/NuTag.vue';

import Inator from '@/objects/Inator';
const inator = new Inator();
const currentTag = ref<Tag>()
const manyLabels = ref<Label[]>([])

const generateTags = (): void => {
  currentTag.value = inator.tag()
};


watch(currentTag, (newTag) => {
  if (newTag) {
    const newLabel = inator.label()
    manyLabels.value.push(newLabel)
  }
});

</script>
<template>
  <div>
    <v-btn @click="generateTags()">Generate Tags</v-btn>
    <NuTag v-if="currentTag" :tag="currentTag" :icon="`mdi-home`" />
    <NuTag v-for="tag in manyLabels" :key="tag.id" :tag="(tag as Label)" @click.right="console.log(tag)"
      :color="tag.color" :icon="tag.icon" />
  </div>
</template>
