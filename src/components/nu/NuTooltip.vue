<template>
  <v-tooltip content-class="bg-background" activator="parent" location="bottom" persistent :close-delay="500"
    :open-delay="500" :opacity="0.8">
    <v-chip prepend-icon="mdi-help" :text="text" variant="text" />
  </v-tooltip>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';
import Tag from '@/objects/Tag';

defineProps
  ({
    tag: {
      type: Tag as Tag,
    },
    text: {
      type: String,
    },

  })
</script>
