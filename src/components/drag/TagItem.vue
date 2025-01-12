<template>
  <div class="tag-item" draggable="true" @dragstart="onDragStart" :style="{ backgroundColor: tag.color || '#ccc' }">
    {{ tag.label || tag.name }}
  </div>
</template>

<script setup lang="ts">
import Tag from '@/objects/nu/Tag';

const props = defineProps<{
  tag: Tag;
}>();

function onDragStart(event: DragEvent) {
  if (!event.dataTransfer) return;
  // Store the tag data as JSON in the drag event
  event.dataTransfer.setData("application/json", JSON.stringify(props.tag));
  event.dataTransfer.effectAllowed = "move";
}
</script>

<style>
.tag-item {
  padding: 8px;
  border-radius: 4px;
  cursor: grab;
}
</style>
