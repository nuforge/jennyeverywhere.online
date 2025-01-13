<template>
  <div id="dropzone" class="drop-zone" @dragover="onDragOver" @drop="onDrop" :class="{ active: isActive }">
    Drop Tags Here
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Tag from '@/objects/nu/NuTag';

const isActive = ref(false);

function onDragOver(event: DragEvent) {
  event.preventDefault(); // Necessary to allow dropping
  isActive.value = true;
}

function onDrop(event: DragEvent) {
  event.preventDefault();
  isActive.value = false;

  // Retrieve and parse the dropped tag data
  const data = event.dataTransfer?.getData("application/json");
  if (data) {
    const tag: Tag = JSON.parse(data);
    console.log("Dropped Tag:", tag);
  }
}
</script>

<style>
.drop-zone {
  padding: 16px;
  border: 2px dashed #ccc;
  text-align: center;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.drop-zone.active {
  border-color: #4caf50;
  background-color: rgba(76, 175, 80, 0.1);
}
</style>
