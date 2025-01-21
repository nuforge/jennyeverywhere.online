<script setup lang="ts">
import Tag from '@/objects/nu/Tag';

const loading = new Tag('...').attribute('color', 'grey').attribute('icon', '$loading');
</script>

<template>
  <NuTag :tag="loading" :labels="false" />
</template>
