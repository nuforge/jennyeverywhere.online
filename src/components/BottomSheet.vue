<template>
  <v-bottom-sheet inset persistent v-model="sheet.display" :scrim="false" close-on-content-click>
    <v-card class="rounded-t-lg pb-1">
      <v-card-item class="pa-1">
        <template v-slot:prepend>
          <v-tag :text="label" :icon="icon" :color="color" :value="label" :label="label" tooltip density="compact"
            noLabel>
          </v-tag>
        </template>

        <template v-slot:append>
          <v-tag icon="$addTag" value="Add Tag" :label="label" tooltip density="compact" noLabel variant="tonal"
            @click="tags.addLabel(label, color, icon)">
          </v-tag>
        </template>
      </v-card-item>
      <v-divider></v-divider>
      <v-card-text>
        <template v-slot:default>{{ label }}</template>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSheetStore } from '@/stores/sheet';
import { useTagStore } from '@/stores/tags'

const sheet = useSheetStore()
const tags =  useTagStore()

const label = ref('')
const color = ref('')
const icon = ref('')






</script>
