<template>
<v-dialog v-model="state.add"  max-width="500">
  <v-card elevation="0" id="color-picker-attach">
    <v-card-item>
      <v-card-title>Add Tag</v-card-title>
      <TagAddForm class="bg-surface" />
    </v-card-item>
  </v-card>
</v-dialog>

</template>

<script setup lang="ts">
import TagAddForm from '@/components/tags/TagAddForm.vue';
import { useStateStore } from '@/stores/state'
const state = useStateStore()

</script>
