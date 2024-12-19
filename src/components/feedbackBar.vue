<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn-toggle v-model="toggle_exclusive" variant="plain" density="compact">
          <v-btn icon color="primary" density="compact">
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
          <v-btn icon color="error" density="compact">
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
        </v-btn-toggle>
        <v-btn icon density="compact" variant="plain" disabled>
          <v-icon>mdi-comment-outline</v-icon>
        </v-btn>
        <v-btn icon density="compact" variant="plain" disabled>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>


<script setup lang="ts">
import { ref } from 'vue'

const toggle_exclusive = ref(2)
</script>
