<script setup lang="ts">
import TagFactory from '@/objects/nu/TagFactory';

const loading = TagFactory.create('...', { color: 'grey', icon: 'mdi-loading' });
</script>

<template>
  <NuTag :tag="loading" :labels="false" />
</template>
