<script setup lang="ts">
import { onMounted, ref } from 'vue'
import usePersonaStore from '@/stores/persona';

const persona = usePersonaStore()

const showAvatar = ref(false)

function toggleImage() {
  showAvatar.value = !showAvatar.value
}

onMounted(async () => {
  persona.randomAvatar()
})
</script>

<template>
  <v-avatar :image="showAvatar ? persona.avatar : undefined" rounded="0" v-if="persona.avatar"
    :icon="!showAvatar ? persona.focus.icon : undefined" @click="toggleImage()" size="x-large">
  </v-avatar>
</template>

<style scoped>
.v-avatar {
  cursor: pointer;
}
</style>
