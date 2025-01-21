<script setup lang="ts">
import { ref } from 'vue'
import IndexedDBEditor from '@/components/admin/IndexedDBEditor.vue';
import LocalStorageEditor from '@/components/admin/LocalStorageEditor.vue';
import ChatEditor from '@/components/admin/ChatEditor.vue';
import ChatMemory from '@/components/admin/ChatMemory.vue';
import ChatTimeline from '@/components/admin/ChatTimeline.vue';
import MessageQueue from '@/components/admin/MessageQueue.vue';
import TagSearch from '@/components/TagSearch.vue';

import NuTag from '@/components/nutag/NuTag.vue';

import TagFactory from '@/objects/nu/TagFactory';


const newTag = ref(TagFactory.create('tag').add('color:red').add('icon:mdi-tag'))
console.log('newTag.value', newTag.value); // "namespace"
//TagFactory.saveToLocalStorage(newTag.value);
// import useChatStore from '@/stores/chat/nuchat';
// const chat = useChatStore();
const showTagFactory = ref(true)
const showTagSearch = ref(false)
const showMessageQueue = ref(false)
const showChatEditor = ref(false)
const showChatMemory = ref(false)
const showChatTimeline = ref(false)
const showBrowserMemory = ref(true)

// const tag = new Tag('captain:picard', { color: 'red' });
//const captainFactory = new TagFactory('captain', { icon: 'mdi-account' });

// console.log('seed', tag.seed);  // "namespace:value"
// console.log('space', tag.space); // "namespace"
// console.log('name', tag.name);  // "value"

// tag.attribute('icon', 'star');
// console.log('icon', tag.getAttribute('icon')); // "star"
// console.log('color', tag.getAttribute('color')); // "star"

// // Changing seed updates space and name automatically
// tag.seed = 'new-space:new-value';
// console.log("new-space", tag.space); // "new-space"
// console.log("new-value", tag.name);  // "new-value"

</script>

<template>
  <v-divider class="my-4" />
  <v-btn-group multiple variant="plain">
    <v-btn @click="showTagFactory = !showTagFactory" size="small" :icon="showTagFactory ? `mdi-factory` : `mdi-factory`"
      flat color="info" />
    <v-btn @click="showTagSearch = !showTagSearch" size="small"
      :icon="showTagSearch ? `mdi-tag-search` : `mdi-tag-search-outline`" flat color="warning" />
    <v-btn @click="showMessageQueue = !showMessageQueue" size="small"
      :icon="showMessageQueue ? `mdi-forum` : `mdi-forum-outline`" flat color="warning" />
    <v-btn @click="showChatEditor = !showChatEditor" size="small"
      :icon="showChatEditor ? `mdi-message-processing` : `mdi-message-processing-outline`" flat color="primary" />
    <v-btn @click="showChatMemory = !showChatMemory" size="small"
      :icon="showChatMemory ? `mdi-message-badge` : `mdi-message-badge-outline`" flat color="secondary" />
    <v-btn @click="showChatTimeline = !showChatTimeline" size="small"
      :icon="showChatTimeline ? `mdi-map` : `mdi-map-outline`" flat color="success" />
    <v-btn @click="showBrowserMemory = !showBrowserMemory" size="small"
      :icon="showBrowserMemory ? `mdi-brain` : `mdi-egg-off-outline`" flat color="accent" />
  </v-btn-group>

  <v-expand-transition>
    <v-row v-if="showTagFactory">
      <v-col cols="12">
        {{ newTag }}
        <h2><v-icon icon="mdi-factory" size="x-small" color="info" /> Tag Factory</h2>
        <v-text-field v-model="newTag.seed" label="seed" />
        <NuTag :tag="newTag" />
      </v-col>
    </v-row>
  </v-expand-transition>

  <TagSearch v-if="showTagSearch" />

  <v-divider class="my-4" />

  <v-expand-transition>
    <v-row v-if="showMessageQueue">
      <v-col cols="12">
        <h2><v-icon icon="mdi-forum" size="x-small" color="warning" /> Message Queue</h2>
        <MessageQueue />
      </v-col>
    </v-row>
  </v-expand-transition>
  <v-expand-transition>
    <v-row v-if="showChatEditor">
      <v-col>
        <h2><v-icon icon="mdi-message-processing" size="x-small" color="primary" /> Chat</h2>
        <ChatEditor />
      </v-col>
    </v-row>
  </v-expand-transition>

  <v-expand-transition>
    <v-row v-if="showChatMemory || showChatTimeline">
      <v-expand-transition>
        <v-col v-if="showChatMemory">
          <h2><v-icon icon="mdi-message-badge" size="x-small" color="secondary" /> ChatMemory</h2>
          <ChatMemory />
        </v-col>
      </v-expand-transition>
      <v-expand-transition>
        <v-col v-if="showChatTimeline">
          <h2><v-icon icon="mdi-map" size="x-small" color="success" /> ChatHistory</h2>
          <ChatTimeline />
        </v-col>
      </v-expand-transition>
    </v-row>
  </v-expand-transition>


  <v-expand-transition>
    <v-row v-if="showBrowserMemory">
      <v-col cols="12">
        <h2><v-icon icon="mdi-brain" size="x-small" color="accent" /> Memory</h2>
      </v-col>
      <v-col>
        <LocalStorageEditor />
      </v-col>
      <v-col>
        <IndexedDBEditor />
      </v-col>
    </v-row>
  </v-expand-transition>

</template>

<style scoped>
.draggable {
  cursor: grab;
}
</style>
