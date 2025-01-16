<script setup lang="ts">
import IndexedDBEditor from './IndexedDBEditor.vue';
import LocalStorageEditor from './LocalStorageEditor.vue';
import ChatManager from './ChatManager.vue';

</script>

<template>
  <v-divider>
    <h4>Chat Manager</h4>
  </v-divider>
  <ChatManager />
  <v-divider>
    <h4>Memory Manager</h4>
  </v-divider>
  <v-row>
    <v-col>
      <LocalStorageEditor />
    </v-col>
    <v-col>
      <IndexedDBEditor />
    </v-col>
  </v-row>
</template>
