<template>
  <v-container>
    <v-row>
      <v-col>

        <v-btn v-for="(action, index) in actions" :key="index" icon :color="action.color" density="compact"
          variant="plain" :ripple="false" :class="action.active ? 'opacity-100' : 'opacity-20'"
          @click="action.active = !action.active">
          <v-icon :icon="action.icon"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>


<script setup lang="ts">
import { ref } from 'vue'

const actions = ref({
  upvote: {
    icon: 'mdi-arrow-up',
    color: 'primary',
    active: false,
  },
  downvote: {
    icon: 'mdi-arrow-down',
    color: 'error',
    active: false,
  },
  comment: {
    icon: 'mdi-comment',
    color: 'secondary',
    active: false,
  },
  favorite: {
    icon: 'mdi-heart',
    color: 'quaternary',
    active: false,
  }
})

</script>
