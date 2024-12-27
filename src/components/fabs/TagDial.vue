<template>
  <v-speed-dial transition="fade-transition" location="bottom end" :close-on-content-click="false" persistent
    v-model="state.drawer" no-click-animation>

    <template v-slot:activator="{ props: activatorProps }">
      <v-fab :icon="state.drawer ? `$tags` : `$no-tags`" location="bottom end" app appear @click="state.drawerToggle"
        v-bind="activatorProps" variant="plain"></v-fab>
    </template>
    <v-btn @click="styles.closable = !styles.closable"
      :prepend-icon="styles.closable ? `mdi-delete` : `mdi-delete-outline`" :ripple="false" :key="1">
      <v-tooltip activator="parent" location="start" text="Delete Tags" variant="text"></v-tooltip>
    </v-btn>
    <v-btn @click="styles.icons = !styles.icons" :prepend-icon="styles.icons ? `mdi-eye-off-outline` : `mdi-eye`"
      :ripple="false" :key="2">
      <v-tooltip activator="parent" location="start">
        Show icons: <v-icon :icon="styles.icons ? `mdi-eye-off-outline` : `mdi-eye`"></v-icon> {{ !styles.icons }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="styles.labels = !styles.labels" :prepend-icon="styles.labels ? `mdi-label-off-outline` : `mdi-label`"
      :ripple="false" :key="3">
      <v-tooltip activator="parent" location="start">
        Show labels: <v-icon :icon="styles.labels ? `mdi-label-off-outline` : `mdi-label`"></v-icon> {{ !styles.labels
        }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="state.add = !state.add" :prepend-icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"
      :ripple="false" size="small" :key="4">
      <v-tooltip activator="parent" location="start">
        <v-icon :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"></v-icon> Add Tag
      </v-tooltip>
    </v-btn>
  </v-speed-dial>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import { useStyleStore } from '@/stores/styles'

const styles = useStyleStore()
const state = useStateStore()

</script>
