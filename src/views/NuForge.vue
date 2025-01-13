<script setup lang="ts">
import { ref } from "vue";
import Tag from '@/objects/nu/Tag';

import Inator from '@/objects/Inator';
//import NuTag from "@/components/nu/NuTag.vue";
import DragManager from '@/objects/DragManager';

const inator = new Inator();
const dragManager = new DragManager();

const tags = ref(inator.ntags(3))
const sTag = ref(new Tag('strong', 'primary', 'mdi-format-bold'))
const fTag = ref(new Tag('fire', 'warning', 'mdi-fire'))
const iTag = ref(new Tag('invisibility', 'accent', 'mdi-eye-outline'))
tags.value.push(sTag.value);
tags.value.push(fTag.value);
tags.value.push(iTag.value);


const updateColor = (tag: Tag) => {
  tag.color = inator.color();
}

const currentTag = ref(sTag.value);

const onDragStart = (event: DragEvent, tag: Tag) => {
  currentTag.value = tag;
  dragManager.dragStart(event, 'text/plain', JSON.stringify(tag));
};

const onDrop = (event: DragEvent) => {
  dragManager.drop(event, (data: string) => {
    const droppedTag = JSON.parse(data);
    // Handle the dropped tag
  });
};

</script>
<template>
  <div>
    <v-btn @click="updateColor(fTag as Tag)" v-tag="currentTag">Update Color</v-btn>
    <p :draggable="true" @dragstart="event => onDragStart(event, sTag.value)"
      @dragover="event => dragManager.dragOver(event)">I do nothing</p>
    <p v-tag="sTag" draggable="true" @dragstart="event => onDragStart(event, sTag.value)"
      @dragover="event => dragManager.dragOver(event)">Strong as Bull</p>
    <p v-tag="fTag" draggable="true" @dragstart="event => onDragStart(event, fTag.value)"
      @dragover="event => dragManager.dragOver(event)">Burn baby Burn</p>
    <div @drop="onDrop" @dragover="event => dragManager.dragOver(event)">Drop Zone</div>
  </div>
</template>
