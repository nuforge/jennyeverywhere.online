<template>
  <router-link to="/persona">
    <v-avatar :image="persona.avatar" rounded="0" v-if="persona.avatar">
    </v-avatar>
    <v-tooltip activator="parent" location="top" content-class="bg-surface" elevated>
      <v-icon icon="mdi-account-circle"></v-icon> Jenny Everywhere
    </v-tooltip>
  </router-link>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePersonaStore } from '@/stores/persona';

const persona = ref(usePersonaStore())


onMounted(async () => {
  persona.value.randomAvatar()
})
</script>
