<template>
  <v-btn :prepend-icon="`$d${faces}`" @click="roll()" :text="value.toString().padStart(2, '0')" dark>
    <template v-slot:prepend>
      <sub v-if="rolls.length > 1">{{ rolls.length }}</sub>
      <v-icon :color="`d${faces}`"></v-icon>
    </template>
  </v-btn>
</template>

<script setup lang="ts">

const props = defineProps<{
  faces: number,
  value: number,
  rolls: number[]

}>()

const roll = () => {
  console.log(Math.floor(Math.random() * props.faces) + 1)
}
</script>
