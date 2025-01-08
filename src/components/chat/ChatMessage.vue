<script setup lang="ts">
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import Tag from '@/objects/NuTag';



defineProps<{
  message: {
    id: number;
    text: string;
    sender: string;
    timestamp: string;
  };
  tags: Tag[];
}>();

</script>

<template>
  <v-list-item>
    <MarkdownRenderer :text="message.text" :tags="tags" />
    <v-label>{{ message.timestamp }}</v-label>
  </v-list-item>
</template>
