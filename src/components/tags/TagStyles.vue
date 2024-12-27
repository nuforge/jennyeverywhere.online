<template>
  <v-btn-toggle density="compact" variant="plain">
    <v-btn @click="state.add = !state.add" :prepend-icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"
      :ripple="false">
      <v-tooltip activator="parent" location="top">
        <v-icon :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"></v-icon> Add Tag
      </v-tooltip>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="styles.labels = !styles.labels" :prepend-icon="styles.labels ? `mdi-label-off-outline` : `mdi-label`"
      :ripple="false">
      <v-tooltip activator="parent" location="top">
        Show labels: <v-icon :icon="styles.labels ? `mdi-label-off-outline` : `mdi-label`"></v-icon> {{ !styles.labels
        }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="styles.icons = !styles.icons" :prepend-icon="styles.icons ? `mdi-eye-off-outline` : `mdi-eye`"
      :ripple="false">
      <v-tooltip activator="parent" location="top">
        Show icons: <v-icon :icon="styles.icons ? `mdi-eye-off-outline` : `mdi-eye`"></v-icon> {{ !styles.icons }}
      </v-tooltip>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="styles.closable = !styles.closable"
      :prepend-icon="styles.closable ? `mdi-delete` : `mdi-delete-outline`" :ripple="false">
      <v-tooltip activator="parent" location="top" text="Delete Tags" variant="text"></v-tooltip>
    </v-btn>
  </v-btn-toggle>

</template>

<script setup lang="ts">
import { useStyleStore } from '@/stores/styles'
import { useStateStore } from '@/stores/state'

const styles = useStyleStore()
const state = useStateStore()

</script>
