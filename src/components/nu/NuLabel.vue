<script setup lang="ts">

const props = defineProps({
  tag: {
    type: Object,
    required: true,
  },
  label: {
    type: String,
  },
})

const nameLabel = props.label ?? props.tag.name

</script>

<template>
  <span class="mx-2 text-no-wrap">
    {{ nameLabel }}
  </span>
</template>
