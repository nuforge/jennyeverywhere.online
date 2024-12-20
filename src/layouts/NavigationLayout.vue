<template>
  <v-navigation-drawer temporary>
    <v-container>
      <v-row>
        <v-col>
          <v-chip-group column v-model="story.tags.selection" multiple @update:modelValue="story.highlightTags()">

            <v-tag v-for="(tag, index) in story.tags.tags" :key="index" expand :text="tag.text" :icon="tag.icon"
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
import { useStoryStore } from '@/stores/story'
const story = ref(useStoryStore());


</script>
