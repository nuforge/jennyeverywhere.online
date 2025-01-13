<script setup lang="ts">
import NuTag from '@/components/nu/v1/NuTag.vue'
import Tag from '@/objects/nu/v1/NuTag'

</script>

<template>
  <NuTag v-for="tag in mergedTags" :key="tag.id" :tag="new Tag('hello')" />
</template>
