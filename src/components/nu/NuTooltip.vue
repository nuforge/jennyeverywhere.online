<script setup lang="ts">
import { defineProps } from 'vue';
import Tag from '@/objects/nu/NuTag';

defineProps
  ({
    tag: {
      type: Tag,
      default: () => ({ icon: '', name: '' })
    },
    text: {
      type: String,
    },

  })
</script>

<template>
  <v-tooltip content-class="bg-background" activator="parent" location="bottom" persistent :close-delay="300"
    :open-delay="900" :opacity=".5">
    <v-chip :prepend-icon="(tag.icon as string)" :text="text ?? (tag.label as string)" variant="text" />
  </v-tooltip>
</template>
