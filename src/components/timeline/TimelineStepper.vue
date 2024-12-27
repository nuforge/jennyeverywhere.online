<template>
  <v-stepper non-linear>
    <v-stepper-header v-model="steps">
      <v-stepper-item editable :value="-1">
        <template v-slot:icon>
          <v-avatar :image="PersonaAvatar" rounded="sm"></v-avatar>
        </template>
      </v-stepper-item>
      <v-divider></v-divider>
      <template v-for="(event, index) in events" :key="index">
        <v-stepper-item icon="mdi-web-clock" :value="index" editable>
        </v-stepper-item>
        <v-divider></v-divider>
      </template>
    </v-stepper-header>
    <v-stepper-window>
      <v-stepper-window-item :value="-1">
        <v-card flat>Character Creation
          <v-card-text></v-card-text>
        </v-card>
      </v-stepper-window-item>
      <v-stepper-window-item v-for="(event, index) in events" :key="index" :value="index">
        <v-card flat>{{ event.name }}
          <v-card-text>{{ event.description }}</v-card-text>
          <tag-group :tags="event.tagList()" noLabel></tag-group>
        </v-card>
      </v-stepper-window-item>
    </v-stepper-window>
  </v-stepper>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PersonaAvatar from '@/assets/images/avatars/jenny-everywhere-avatar.png';
import TagGroup from '@/components/tags/TagGroup.vue';
import { useTimelineStore } from '@/stores/timelines'
const events = useTimelineStore().events
console.log(events)

const steps = ref(0)


</script>
