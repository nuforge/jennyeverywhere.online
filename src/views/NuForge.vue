<template>
  <EvTagCard :tags="story"> </EvTagCard>
</template>


<script setup lang="ts">

import EvTagCard from '@/components/tags/EvTagCard.vue';


// Temp add Story Tags
import { useStoryStore } from '@/stores/story';
import type Tag from '@/objects/Tag';
const story = useStoryStore().tags as Tag[]
// END TEMP

</script>
