<template>
  <v-bottom-sheet inset v-model="sheet.display">
    <v-card>
      <v-card-item class="pa-1">
        <template v-slot:prepend>
          <v-tag :text="sheet.data?.text" :icon="sheet.data?.icon" :color="sheet.data?.color" :value="sheet.data?.text"
            tooltip density="compact">
          </v-tag>
        </template>
      </v-card-item>
      <v-divider></v-divider>
      <v-card-text>
        <template v-slot:default>{{ sheet.data?.text }}</template>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSheetStore } from '@/stores/sheet';

const sheet = ref(useSheetStore())



</script>
