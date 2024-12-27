<template>
  <v-dialog v-model="state.event" max-width="500">
    <v-card>
      <v-card-title>
        <v-icon>mdi-calendar-edit</v-icon> Add Event
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="event.title" label="Title" required density="compact"></v-text-field>
        <v-text-field v-model="event.formattedDate" label="Date" required density="compact"></v-text-field>
        <v-text-field v-model="event.description" label="Description" required density="compact"></v-text-field>

        <ColorPicker v-model="color" label="Color" />

        <tag-autocomplete v-model="event.icon" :prepend-inner-icon="`mdi-${event.icon}`" />

        <v-divider>tags</v-divider>
        <tag-group :tags="event.tags" noLabel class="bg-background pa-2 my-1 rounded"></tag-group>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="saveEvent">Save</v-btn>
        <v-btn @click="cancelEvent">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useStateStore } from '@/stores/state'
import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';
const state = useStateStore()

import Tag from '@/objects/Tag';
import TagGroup from '@/components/tags/TagGroup.vue';

const color = ref('#FFFFFF')

interface Event {
  title: string;
  formattedDate: string;
  icon: string;
  color: string;
  tags: Array<Tag>;
  description: string;
}

const event = ref<Event>({
  title: '',
  formattedDate: '',
  icon: 'web-clock',
  color: '#FFFFFF',
  tags: [],
  description: '',
})

function saveEvent() {
  // Save the event
}

function cancelEvent() {
  // Cancel the event
}



</script>
