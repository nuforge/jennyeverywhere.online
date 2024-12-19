<template>
  <v-chip tile class="rounded-lg" variant="text">
    <template v-slot:prepend><v-icon :icon="icon" :color="color"></v-icon></template>
    <template v-slot:default><span class="mx-2 text-no-wrap">{{ text }}</span></template>
    <template v-slot:append v-if="value"><v-badge :content="value" inline :color="color"></v-badge></template>
  </v-chip>
</template>

<script setup lang="ts">

defineProps({
  prependIcon: String,
  appendIcon: String,
  icon: String,
  text: String,
  class: String,
  color: String,
  value: String
})
</script>
