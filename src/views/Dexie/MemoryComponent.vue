<!-- MemoryComponent.vue -->
<script setup lang="ts">
import { onMounted } from 'vue';
import { useMemoryStore } from '@/stores/memory';

const memoryStore = useMemoryStore();

// Load initial memories
onMounted(async () => {
  const tag = { space: '', name: 'tag' }; // Create a Tag object
  await memoryStore.loadMemoriesByTag(tag);
});
</script>

<template>
  <div>
    <!-- Loading State -->
    <v-progress-circular v-if="memoryStore.isLoading" indeterminate />

    <!-- Error Display -->
    <v-alert v-if="memoryStore.error" type="error">
      {{ memoryStore.error }}
    </v-alert>

    <!-- Memory List -->
    <v-list>
      <v-list-item v-for="memory in memoryStore.memories" :key="memory.id">
        <v-list-item-content>
          <v-list-item-title>{{ memory.content }}</v-list-item-title>
          <v-list-item-subtitle>
            <v-chip v-for="tag in memory.tags" :key="`${tag.space}:${tag.name}`" class="ma-1">
              {{ tag.space ? `${tag.space}:` : '' }}{{ tag.name }}
            </v-chip>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="memoryStore.deleteMemory(memory.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>
