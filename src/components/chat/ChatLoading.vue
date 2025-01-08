<script setup lang="ts">
import NuTag from '../nu/NuTag.vue';
import Tag from '@/objects/NuTag';

const loading = new Tag('...', 'grey', 'mdi-dots-horizontal');
</script>

<template>
  <NuTag :tag="loading" :labels="false" />
</template>
