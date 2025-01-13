<script setup lang="ts">
import { ref } from "vue";
import Tag from '@/objects/nu/v1/NuTag';

import Inator from '@/objects/Inator';
import NuTag from "@/components/nu/v1/NuTag.vue";

const inator = new Inator();

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

const onDragStart = (tag: Tag) => {
  // console.log('onDragStart:', tag);
  currentTag.value = tag;
  //console.log('onDragStart.currentTag:', currentTag.value);
};

// const onDrop = (event: Event) => {
//   const target = event.target as HTMLElement;
//   //target.setAttribute('v-tag', currentTag.value); // CHATGPT LIES!!!!


//   // console.log('onDrop:', target.attributes);
//   // console.log('onDrop:currentTag.value', currentTag.value);
//   // Set the tag directive on the target element
//   // console.log('onDrop:', target.attributes);
// }

</script>
<template>
  <div>
    <v-btn @click="updateColor(fTag as Tag)" v-tag="currentTag">Update Color</v-btn>
    <p :draggable="true" @dragover="event => event.preventDefault()">I do nothing</p>
    <p v-tag="sTag" draggable="true" @dragover="event => event.preventDefault()">Strong as Bull
    </p>
    <p v-tag="fTag" draggable="true" @dragover="event => event.preventDefault()">Burn baby Burn
    </p>
    <p v-tag="iTag" draggable="true" @dragover="event => event.preventDefault()">Can you See Me?
    </p>
    <NuTag v-for="tag in (tags as Tag[])" :key="tag.label" :tag="(tag as Tag)" :v-tag="tag"
      @dragstart="onDragStart(tag)" draggable="true" />
  </div>
</template>
