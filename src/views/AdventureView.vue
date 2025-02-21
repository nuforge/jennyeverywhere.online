<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

import story from '@/assets/stories/story.json'

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
const raw = ref<string>(story.content.reduce((acc, curr) => acc + curr + `\n\n`, ''))

const tags = ref<Tag[]>([
  TagFactory.create('Jenny Everywhere', { color: 'primary', icon: 'mdi-account-circle' }),
  TagFactory.create('jetpack', { color: 'warning', icon: 'mdi-rocket' }),
  TagFactory.create('color:green', { color: 'green', icon: 'mdi-circle-opacity' }),
  TagFactory.create('mystery:artifact', { color: 'accent', icon: 'mdi-help' }),
]);

const searchTags = computed(() => {
  return [...tags.value]
})

function onClick(event: Event) {
  const target = event.target as HTMLElement | null;
  if (target && target.textContent) {
    const tag = tags.value.find(tag => tag.attribute('name') === target.textContent);
    if (tag) {
      router.push(`/tag/${tag.name.toLowerCase()}`);
    }
  }
}

const onRightClick = async (event: MouseEvent, tag: Tag) => {
  tags.value.push(tag)
  search.addSearchTag(tag)
  // const tag = markdowninator.getTagFromEvent(event)
  // emit('right-click', event, tag)
}

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

function toggleSearchBar() {
  showSearchBar.value = !showSearchBar.value
}

// const searchTags = computed<Tag[]>(() => {
//   const newTags = TagFactory.createBatch(search.searchTerms, { color: 'text', icon: 'mdi-circle-small' })
//   //console.log('searchTags', search.searchTerms, newTags)
//   return newTags as Tag[];
// })
// route.params.archetype


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
        </v-col>
      </v-slide-x-transition>
      <v-divider vertical @dblclick="toggleSearchBar" class="editor-divider ps-2 my-2" />

      <v-slide-x-transition>
        <v-col>
          <MarkdownRenderer :text="raw" id="md_container" :tags="(search.searchTags as Tag[])" @click-tag="onClick"
            @click="onClick" @right-click="onRightClick" />
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
