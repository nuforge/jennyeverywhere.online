<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Tag from '@/objects/nu/Tag';
import TagFactory from '@/objects/nu/TagFactory';
import SearchSortCollect from '@/components/search/SearchSortCollect.vue';

import useSearchStore from '@/stores/search';
import SelectionSort from '@/components/search/SelectionSort.vue';
import NuTagList from './nutag/NuTagList.vue';
const search = useSearchStore();

const selection = ref(search.selectionManager)
const selected = computed(() => Array.from(selection.value.state.selectedIndices))

const newTag = ref('')

defineProps<{
  modelValue: Tag[]
}>()


const onDoubleClickSearchTags = async (index: number, tag: Tag) => {
  await removeTagFromSearch(tag)
}

const removeTagFromSearch = async (tag: Tag) => {
  await search.removeSearchTag(tag)
  //search.depthSearchTags(tag)
}

const onDblClckSelection = async (index: number, tag: Tag) => {
  //console.log('addToSearch', tag, event)
  //TagFactory.create(newTag)
  await addTagToSearch(tag)
}

const addTagToSearch = async (tag: Tag) => {
  //console.log('addToSearch', tag, event)
  //TagFactory.create(newTag)
  await search.addSearchTag(tag)
  newTag.value = ''
}

onMounted(async () => {
  await search.init()
  search.createSearchTag('jenny')
})


</script>

<template>
  <v-container class="d-flex flex-column ga-2 pa-0">
    <v-card flat>
      <v-card-actions>
        <SearchSortCollect />
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>
        <v-label>search</v-label>
      </v-card-title>
      <NuTagList :tags="search.searchTags" v-model="selected" @double-click="onDoubleClickSearchTags" />
      <v-text-field class="bg-background rounded pa-1 ma-1" v-model="newTag" label="add term" density="compact"
        hide-details @keydown.enter="addTagToSearch(TagFactory.create(newTag))" variant="plain"
        prepend-icon="mdi-plus" />
    </v-card>
    <v-card>
      <v-card-title>
        <v-label>selection tags</v-label>
      </v-card-title>
      <v-card-actions class="bg-bac">
        <SelectionSort />
      </v-card-actions>
      <NuTagList :tags="modelValue" :overrideSelection="selected" @double-click="onDblClckSelection" />
    </v-card>
  </v-container>

</template>
