<template>
  <v-stepper non-linear>
    <v-stepper-header v-model="steps">
      <template v-for="(event, index) in events" :key="index">
        <v-stepper-item :icon="event.icon" :value="index" editable>
        </v-stepper-item>
        <v-divider></v-divider>
      </template>
      <v-stepper-item icon="mdi-plus" value="plus" editable>
      </v-stepper-item>
    </v-stepper-header>
    <v-stepper-window>
      <v-stepper-window-item v-for="(event, index) in events" :key="index" :value="index">
        <v-card>{{ event.title }}</v-card>
        <TagGroup :tags="event.tags" noLabel></TagGroup>
      </v-stepper-window-item>
    </v-stepper-window>
  </v-stepper>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tag from '@/objects/Tag';
import TagGroup from './tags/TagGroup.vue';

const steps = ref(0)

interface Event {
  title: string;
  formattedDate: string;
  icon: string;
  color: string;
  tags: Tag[];
  description: string; // Add this line
}

defineProps<{
  events: Event[]
}>()
</script>
