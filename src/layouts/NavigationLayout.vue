<template>
  <v-navigation-drawer temporary>
    <v-container>
      <v-row>
        <v-col>
          <v-chip-group column v-model="tagList.selection" multiple @update:modelValue="story.linkText">
            <v-tag v-for="(tag, index) in tagList.tags" :key="index" :text="tag.text" :icon="tag.icon"
              :color="tag.color" class="text-red" :value="tag.count?.toString()" tooltip>
            </v-tag>
          </v-chip-group>
        </v-col>
      </v-row></v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'
const story = ref(useStoryStore());
const tagList = ref(useTagStore());


</script>
