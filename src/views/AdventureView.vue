<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import DexieDBEditor from '@/components/admin/DexieDBEditor.vue';
const router = useRouter()

import MemoryManager from '@/objects/storage/MemoryManager'
const memory = new MemoryManager()

import story from '@/assets/stories/story.json'
import archtypes from '@/assets/stories/story.archetypes.json'

import Tag from '@/objects/nu/Tag';
import TagFactory from '@/objects/nu/TagFactory';

import useSearchStore from '@/stores/search';
const search = useSearchStore();

import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import HydrusTagSearch from '@/components/HydrusTagSearch.vue';

// import StickFigureGame from '@/objects/game/stick_figure_game'
// const stickGame = new StickFigureGame()
// stickGame.init()
const showSearchBar = ref(true)
const raw = ref<string>(story.content.reduce((acc, curr) => acc + curr + `\n\n`, ''))
const archetypeTags = ref<Tag[]>([])

const memoryTags = ref<Tag[]>([])

Object.values(archtypes).map((archetype) => {
  // console.log('archtype', archetype)
  archetypeTags.value.push(TagFactory.create(`archetype:${archetype.name}`, archetype))
})

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

function onRightClick(event: MouseEvent, tag: Tag) {
  tags.value.push(tag)
  // const tag = markdowninator.getTagFromEvent(event)
  // emit('right-click', event, tag)
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

onMounted(async () => {
  memoryTags.value = await memory.getTags()
})

</script>

<template>
  <v-container>
    <v-row>
      <v-slide-x-transition>
        <v-col cols="4" v-if="showSearchBar">
          <HydrusTagSearch v-model="(searchTags as Tag[])" />
          <DexieDBEditor />
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
