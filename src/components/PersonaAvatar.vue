<template>
  <v-avatar :image="persona.avatar" rounded="0" v-if="persona.avatar" size="x-large">
  </v-avatar>
  <v-tooltip activator="parent" location="end" content-class="bg-background" elevated>
    <v-icon icon="mdi-comment"></v-icon> Hello!
  </v-tooltip>

</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usePersonaStore } from '@/stores/persona';

const persona = usePersonaStore()


onMounted(async () => {
  persona.randomAvatar()
})
</script>
