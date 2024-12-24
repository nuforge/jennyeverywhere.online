<template>
  <v-item v-slot="{ isSelected, selectedClass, toggle }">
    <v-card hover
      :class="['story-choice mx-auto border-s-lg my-2 rounded-s-lg bg-transparent', selectedClass, `border-${color}`]"
      @click="toggle">
      <v-card-item density="compact">
        <template v-slot:prepend><v-icon :icon="icon" :color="isSelected ? color : 'text'"
            :class="isSelected ? null : 'opacity-10'"></v-icon></template>
        <template v-slot:default> {{ text }}</template>
      </v-card-item>
    </v-card>
  </v-item>
</template>


<script setup lang="ts">

defineProps({
  icon: String,
  text: String,
  class: String,
  color: String,
  value: String,
  expand: Boolean
})

</script>
