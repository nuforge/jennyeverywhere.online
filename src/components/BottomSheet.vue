<template>
  <v-bottom-sheet inset persistent v-model="sheet.display" :scrim="false" close-on-content-click>
    <v-card class="rounded-t-lg pb-1">
      <v-card-item class="pa-1">
        <template v-slot:prepend>
          <v-tag :text="sheet.data?.label" :icon="sheet.data?.icon" :color="sheet.data?.color"
            :value="sheet.data?.label" :label="sheet.data?.label" tooltip density="compact" noLabel>
          </v-tag>
        </template>

        <template v-slot:append>
          <v-tag icon="$addTag" value="Add Tag" :label="sheet.data?.label" tooltip density="compact" noLabel
            variant="tonal" @click="addATag(sheet.data?.label, sheet.data?.color, sheet.data?.icon)">
          </v-tag>
        </template>
      </v-card-item>
      <v-divider></v-divider>
      <v-card-text>
        <template v-slot:default>{{ sheet.data?.label }}</template>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSheetStore } from '@/stores/sheet';
import { useTagStore } from '@/stores/tags'

const sheet = ref(useSheetStore())
const tags = ref(useTagStore())

const addATag = (label: string | undefined, color: string | undefined, icon: string | undefined) => {
  tags.value.addTag(label, color, icon)
}




</script>
