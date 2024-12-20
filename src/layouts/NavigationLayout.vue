<template>
  <v-navigation-drawer temporary>
    <v-container>
      <v-row>
        <v-col>
          <v-chip-group column v-model="tags.selection" multiple
            @update:modelValue="story.setHTML(tags.linkText(story.story))">
            <v-tag v-for="(tag, index) in tags.tags" :key="index" expand :text="tag.text" :icon="tag.icon"
              :color="tag.color" tooltip>
            </v-tag>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'
const story = ref(useStoryStore());
const tags = ref(useTagStore());


</script>
