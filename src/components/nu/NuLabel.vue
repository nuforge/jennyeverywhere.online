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
    <v-tooltip location="top start" :open-delay="900">
      <template #activator="{ props }">
        <span v-bind="props"> {{ nameLabel }} </span>
      </template>
      {{ nameLabel }}
    </v-tooltip>
  </span>
</template>
