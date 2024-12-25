<template>
  <v-btn :prepend-icon="`$d${faces}`" :text="value.toString().padStart(2, '0')" dark>
    <template v-slot:prepend>
      <sub v-if="rolls.length > 1">{{ rolls.length }}</sub>
      <v-icon :color="`d${faces}`"></v-icon>
    </template>
  </v-btn>
</template>

<script setup lang="ts">

defineProps<{
  faces: number,
  value: number,
  rolls: number[]

}>()
</script>
