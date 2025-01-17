<script setup lang="ts">
import Tag from '@/objects/nu/Tag';

const loading = new Tag('...').add('color', 'grey').add('icon', '$loading');
</script>

<template>
  <NuTag :tag="loading" :labels="false" />
</template>
