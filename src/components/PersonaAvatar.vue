<script setup lang="ts">
import { onMounted, ref } from 'vue'
import usePersonaStore from '@/stores/persona';

const persona = usePersonaStore()

const showAvatar = ref(true)


onMounted(async () => {
  persona.randomAvatar()
})
</script>

<template>
  <v-avatar :image="showAvatar ? persona.avatar : undefined" rounded="0" v-if="persona.avatar"
    :icon="!showAvatar ? persona.focus.icon : undefined" size="x-large">
  </v-avatar>
</template>
