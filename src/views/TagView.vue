<script setup lang="ts">
import TagFactory from '@/objects/nu/TagFactory';
import NuTag from '@/components/nutag/NuTag.vue';
// route.params.archetype
</script>


<template>
  <v-container>
    <NuTag :tag="TagFactory.create(Array.isArray($route.params.tag) ? $route.params.tag[0] : $route.params.tag)" />
  </v-container>
</template>
