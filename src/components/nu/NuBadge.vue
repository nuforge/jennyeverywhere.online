<template>
  <v-badge v-if="props.count > 1" :content="props.count" :dot="showCount" floating :color="'background'" :offsetY="-12"
    @click="show = !show" text-color="text" />

</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';

const show = ref(false)

const showCount = computed(() => show.value && props.count > 1)

// Props

const props = defineProps
  ({
    count: {
      type: Number,
      default: 1,
    },
  })

</script>
