<script setup lang="ts">
import NuTag from '../nu/Tag.vue';
import Tag from '@/objects/nu/Tag';

const loading = new Tag('...', 'grey', 'mdi-dots-horizontal');
</script>

<template>
  <NuTag :tag="loading" :labels="false" />
</template>
