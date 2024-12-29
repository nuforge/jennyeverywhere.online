<template>
  <VBtnToggle>
    <v-btn @click="styles.labels = !styles.labels"
      :prepend-icon="styles.labels ? `mdi-label-off-outline` : `mdi-label`">
      <v-tooltip activator="parent">
        Show labels: <v-icon :icon="styles.labels ? `mdi-label-off-outline` : `mdi-label`"></v-icon> {{ !styles.labels
        }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="styles.icons = !styles.icons" :prepend-icon="styles.icons ? `mdi-eye-off-outline` : `mdi-eye`">
      <v-tooltip activator="parent">
        Show icons: <v-icon :icon="styles.icons ? `mdi-eye-off-outline` : `mdi-eye`"></v-icon> {{ !styles.icons }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="styles.color = !styles.color" :prepend-icon="styles.color ? `mdi-palette` : `mdi-palette-outline`">
      <v-tooltip activator="parent">
        Show color: <v-icon :icon="styles.color ? `mdi-palette-outline` : `mdi-palette`"></v-icon> {{ styles.color
        }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="state.add = !state.add" :prepend-icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`">
      <v-tooltip activator="parent">
        <v-icon :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"></v-icon> Add Tag
      </v-tooltip>
    </v-btn>
  </VBtnToggle>
</template>

<script setup lang="ts">
import { useStyleStore } from '@/stores/styles'
import { useStateStore } from '@/stores/state'

const styles = useStyleStore()
const state = useStateStore()

</script>
