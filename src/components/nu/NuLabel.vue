<template>
  <span class="mx-2 text-no-wrap">
    {{ tag.label }}
  </span>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

defineProps({
  tag: {
    type: Object,
    required: true,
  },
})

</script>
