<template>
  <div class="d-flex justify-space-between">
    <v-btn-toggle v-model="selected" selected-class="opacity-100">
      <v-btn v-for="(vote, index) in votes" :key="index" :value="index"
        :icon="selected === index ? `${vote.icon}` : `${vote.icon}-off`" :color="vote.color" density="compact"
        class="opacity-10" variant="plain" :ripple="false">
      </v-btn>
    </v-btn-toggle>
    <v-btn-toggle v-model="acted" selected-class="opacity-100" multiple>
      <v-btn v-for="(action, index) in actions" :key="index" :value="index" :color="action.color" density="compact"
        variant="plain" class="opacity-10" :ripple="false" multiple
        :icon="acted.includes(index) ? action.icon : `${action.icon}-off`">
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref<string>('');
const acted = ref<Array<string>>([]);

const votes = ref({
  upvote: {
    icon: '$upvote',
    color: 'primary',
  },
  downvote: {
    icon: '$downvote',
    color: 'error',
  },
})

const actions = ref({
  comment: {
    icon: '$comment',
    color: 'secondary',
  },
  favorite: {
    icon: '$favorite',
    color: 'quaternary',
  }
})
</script>
