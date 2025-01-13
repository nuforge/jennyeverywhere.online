<script setup lang="ts">
import NuTag from '@/components/nu/Tag.vue'
import Tag from '@/objects/nu/Tag'

</script>

<template>
  <NuTag v-for="tag in mergedTags" :key="tag.id" :tag="new Tag('hello')" />
</template>
