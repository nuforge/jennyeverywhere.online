<template>
  <EvTagCard :tags="mergeTags" />
</template>


<script setup lang="ts">

import Tag from '@/objects/Tag';
import { useTagStore } from '@/stores/tags';
import { useStoryStore } from '@/stores/story';
import EvTagCard from '@/components/tags/EvTagCard.vue';

const tags = useTagStore().tags
const story = useStoryStore().tags

const mergeTags = [...tags, ...story] as Tag[]

</script>
