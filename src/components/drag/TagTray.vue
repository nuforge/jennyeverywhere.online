<template>
  <div class="tag-tray">
    <TagItem v-for="tag in tags" :key="tag.id" :tag="tag" v-tag="tag" />
  </div>
</template>

<script setup lang="ts">
import Tag from '@/objects/nu/Tag';
import TagItem from "./TagItem.vue";

defineProps<{
  tags: Tag[];
}>();
</script>

<style>
.tag-tray {
  display: flex;
  gap: 8px;
}
</style>
