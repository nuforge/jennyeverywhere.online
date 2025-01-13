<script setup lang="ts">
import NuTag from '../nu/v1/NuTag.vue';
import Tag from '@/objects/nu/v1/ValTag';

const loading = new Tag('...', 'grey', 'mdi-dots-horizontal');
</script>

<template>
  <NuTag :tag="loading" :labels="false" />
</template>
