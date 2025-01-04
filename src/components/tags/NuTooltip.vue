<template>
  <v-tooltip activator="parent" location="bottom" persistent :close-delay="500" :open-delay="500" :opacity="0.8">
    <v-chip prepend-icon="mdi-help" :text="props.tag.name" variant="text" />
  </v-tooltip>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';
import Tag from '@/objects/Tag';

const props = defineProps
  ({
    tag: {
      type: Tag as Tag,
      required: true,
    },

  })
</script>
