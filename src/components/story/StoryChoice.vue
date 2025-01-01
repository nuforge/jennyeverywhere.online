<template>
  <v-item v-slot="{ isSelected, selectedClass, toggle }">
    <v-card hover
      :class="['story-choice border-s-lg  bg-background border-opacity-25', selectedClass, `border-${color}`, isSelected ? 'border-e-lg' : 'border-e-none']"
      @click="toggle">
      <v-card-item density="compact">
        <template v-slot:prepend><v-icon :icon="icon" :color="isSelected ? color : 'text'"
            :class="isSelected ? null : 'opacity-20'"></v-icon></template>
        <template v-slot:default> {{ text }}
          <v-spacer></v-spacer>
          <v-chip v-for="(tag, index) in tags" :key="index">{{ tag }}
          </v-chip>
        </template>
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
  tags: Array,
  expand: Boolean
})

</script>
