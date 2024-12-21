<template>
  <v-navigation-drawer temporary>
    <v-container>
      <v-row>
        <v-col>
          <v-chip-group column v-model="story.tags.selection" multiple @update:modelValue="story.highlightTags()">
            <v-tag v-for="(tag, index) in story.tags.tags" :key="index" expand :label="tag.label" :icon="tag.icon"
              :value="tag.id" :color="tag.color" tooltip>
            </v-tag>
          </v-chip-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <AddTag />
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddTag from '@/components/AddTag.vue'
import { useStoryStore } from '@/stores/story'
const story = ref(useStoryStore());


</script>
