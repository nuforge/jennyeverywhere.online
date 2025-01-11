<script setup lang="ts">
import TagTray from "@/components/drag/TagTray.vue";
import TagDropZone from "@/components/drag/TagDropZone.vue";

import Inator from '@/objects/Inator';

const inator = new Inator();

const tags = inator.ntags(3)
</script>
<template>
  <div>
    <TagTray :tags="tags" />
    <TagDropZone />
  </div>
</template>
