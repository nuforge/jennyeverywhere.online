<template>
  <v-navigation-drawer v-model="state.details" app right width="300">

    <v-card class="bg-background" flat>
      <v-card-title>
        <v-icon @click="state.details = !state.details">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <slot>
          <TagTray :tags="tagMerge" :multiple="false" />
        </slot>
      </v-card-text>
    </v-card>

  </v-navigation-drawer>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import Tag from '@/objects/Tag';


import { useStateStore } from '@/stores/state';
import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'

const state = useStateStore()
const story = useStoryStore()
const tags = useTagStore()

const tagMerge = computed(() => {
  const mergedTags = [...tags.tags, ...story.tags] as Tag[]

  const uniqueTags = mergedTags.filter(
    (tag, index, self) => self.findIndex(t => t.name === tag.name) === index
  );

  return uniqueTags;
})


</script>
