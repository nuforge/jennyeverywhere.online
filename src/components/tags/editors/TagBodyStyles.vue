<template>
  <v-btn @click="emit('update:titles', !titles)" :icon="!titles ? `mdi-label-variant-outline` : `mdi-label-variant`">
  </v-btn>
  <v-btn @click="emit('update:bodys', !bodys)" :icon="!bodys ? `mdi-card-text-outline` : `mdi-card-text`">
  </v-btn>
</template>

<script setup lang="ts">


const emit = defineEmits(['update:titles', 'update:bodys'])
defineProps({
  titles: {
    type: Boolean,
    required: true
  },
  bodys: {
    type: Boolean,
    required: true
  },

})

</script>
