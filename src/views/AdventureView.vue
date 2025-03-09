<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

import useChatStore from '@/stores/chat/nuchat.ts';
const chat = useChatStore();

import Tag from '@/objects/nu/Tag';
import TagFactory from '@/objects/nu/TagFactory';

import useSearchStore from '@/stores/search';
const search = useSearchStore();

import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import NuTagList from '@/components/nutag/NuTagList.vue';

// import StickFigureGame from '@/objects/game/stick_figure_game'
// const stickGame = new StickFigureGame()
// stickGame.init()
const showSearchBar = ref(true)
const userInput = ref('')

const tags = ref<Tag[]>([
  TagFactory.create('Jenny Everywhere', { color: 'primary', icon: 'mdi-account-circle' }),
  TagFactory.create('jetpack', { color: 'warning', icon: 'mdi-rocket' }),
  TagFactory.create('color:green', { color: 'green', icon: 'mdi-circle-opacity' }),
  TagFactory.create('mystery:artifact', { color: 'accent', icon: 'mdi-help' }),
]);

const searchTags = computed(() => {
  return [...tags.value]
})


function toggleSearchBar() {
  showSearchBar.value = !showSearchBar.value
}


// MArkdownRenderer

const onRightClick = async (event: MouseEvent, tag: Tag) => {
  tags.value.push(tag)
  search.addSearchTag(tag)
  // const tag = markdowninator.getTagFromEvent(event)
  // emit('right-click', event, tag)
}

function onClick(event: Event) {
  const target = event.target as HTMLElement | null;
  if (target && target.textContent) {
    const tag = tags.value.find(tag => tag.attribute('name') === target.textContent);
    if (tag) {
      router.push(`/tag/${tag.name.toLowerCase()}`);
    }
  }
}

// TAG SELECTION
const onDblClckSelection = async (index: number, tag: Tag) => {
  await addTagToSearch(tag)
}
const onDoubleClickSearchTags = async (index: number, tag: Tag) => {
  await removeTagFromSearch(tag)
}

const removeTagFromSearch = async (tag: Tag) => {
  await search.removeSearchTag(tag)
}

const addTagToSearch = async (tag: Tag) => {
  await search.addSearchTag(tag)
}


// CHAT

const validBody = computed(() => {
  return userInput.value.trim().length > 0
})

const submitForm = async (event: Event) => {
  event.preventDefault()
  //chat.generateImage(chat.userInput)

  chat.sendGPTMessage(userInput.value).
    then((response) => {
      console.log('response', response)
      const tags = chat.chatTags
      tags.forEach(tag => addTagToSearch(tag as Tag))

    })
  if (chat.clearOnSubmit) {
    userInput.value = ''
  }
}

</script>

<template>
  <v-container>
    <v-row>
      <v-slide-x-transition>
        <v-col cols="4" v-if="showSearchBar">
          <v-label>Search Tags</v-label>
          <NuTagList :tags="(search.searchTags as Tag[])" @double-click="onDoubleClickSearchTags" />
          <v-label>Memory Tags</v-label>
          <NuTagList :tags="(searchTags as Tag[])" @double-click="onDblClckSelection" />
          <v-label>Chat</v-label>
          <v-textarea v-model="userInput" auto-grow :rows="3" :label="chat.chatGreeting" density="compact"
            @keydown.enter="submitForm" bg-color="background" variant="solo-filled" counter>
            <template #append-inner>
              <v-btn v-if="!chat.isLoading" @click="submitForm" :disabled="!validBody"
                :icon="!validBody ? 'mdi-chat' : 'mdi-send'" flat size="medium" variant="plain" />
              <v-progress-circular v-else indeterminate color="warning" size="18" />
            </template>
          </v-textarea>
        </v-col>
      </v-slide-x-transition>
      <v-divider vertical @dblclick="toggleSearchBar" class="editor-divider ps-2 my-2" />

      <v-slide-x-transition>
        <v-col>
          <MarkdownRenderer :text="chat.chatResponse" id="md_container" :tags="(search.searchTags as Tag[])"
            @click-tag="onClick" @click="onClick" @right-click="onRightClick" />
        </v-col>

      </v-slide-x-transition>
    </v-row>
  </v-container>
</template>

<style scoped>
.editor-divider {
  cursor: pointer;
  user-select: none;
  /* standard syntax */
  -webkit-user-select: none;
  /* webkit (safari, chrome) browsers */
  -moz-user-select: none;
  /* mozilla browsers */
  -khtml-user-select: none;
  /* webkit (konqueror) browsers */
  -ms-user-select: none;
  /* IE10+ */
}
</style>
