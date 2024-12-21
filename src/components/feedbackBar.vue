<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn-toggle v-model="selected" selected-class="opacity-100">
          <v-btn v-for="(vote, index) in votes" :key="index" :icon="vote.icon" :color="vote.color" density="compact"
            class="opacity-10" variant="plain" :ripple="false">
          </v-btn>
        </v-btn-toggle>
        <v-btn-toggle v-model="acted" selected-class="opacity-100" multiple>
          <v-btn v-for="(action, index) in actions" :key="index" :color="action.color" density="compact" variant="plain"
            class="opacity-10" :ripple="false" multiple :icon="`${action.icon}`">
          </v-btn>
        </v-btn-toggle>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref<string[]>([]);
const acted = ref<string[]>([]);

const votes = ref({
  upvote: {
    icon: 'mdi-arrow-up',
    color: 'primary',
  },
  downvote: {
    icon: 'mdi-arrow-down',
    color: 'error',
  },
})

const actions = ref({
  comment: {
    icon: 'mdi-comment',
    color: 'secondary',
  },
  favorite: {
    icon: 'mdi-heart',
    color: 'quaternary',
  }
})
</script>
