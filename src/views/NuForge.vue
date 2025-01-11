<script setup lang="ts">
import { ref } from "vue";
import TagTray from "@/components/drag/TagTray.vue";
import TagDropZone from "@/components/drag/TagDropZone.vue";
import Tag from '@/objects/nu/NuTag';

import Inator from '@/objects/Inator';
import NuTag from "@/components/nu/NuTag.vue";

const inator = new Inator();

const tags = ref(inator.ntags(3))
const sTag = new Tag('strong', 'primary', 'mdi-format-bold')
const fTag = new Tag('fire', 'warning', 'mdi-fire')
const iTag = ref(new Tag('invisibility', 'accent', 'mdi-eye-off'))
console.log('strongTag:', sTag.value);
tags.value.push(sTag);
tags.value.push(fTag);
tags.value.push(iTag.value);


</script>
<template>
  <div>
    <p v-simple-directive>Strong as Bull</p>
    <p :v-tag="sTag">Strong as Bull</p>
    <p v-tag="fTag">Burn baby Burn</p>
    <p :v-tag="fTag">Burn baby Burn (no colon)</p>
    <NuTag v-for="tag in (tags as Tag[])" :key="tag.label" :tag="(tag as Tag)" :v-tag="tag" />
    <TagTray :tags="(tags as Tag[])" />
    <TagDropZone />
  </div>
</template>
