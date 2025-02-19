<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Tag from '@/objects/nu/Tag';
import TagFactory from '@/objects/nu/TagFactory';

import SearchSortCollect from '@/components/search/SearchSortCollect.vue';
import SelectionSort from '@/components/search/SelectionSort.vue';
import NuTagList from '@/components/nutag/NuTagList.vue';

import useSearchStore from '@/stores/search';
const search = useSearchStore();

const newTag = ref('')

defineProps<{
  modelValue: Tag[]
}>()

const onDoubleClickSearchTags = async (index: number, tag: Tag) => {
  await removeTagFromSearch(tag)
}

const removeTagFromSearch = async (tag: Tag) => {
  await search.removeSearchTag(tag)
}

const onDblClckSelection = async (index: number, tag: Tag) => {
  await addTagToSearch(tag)
}

const addTagToSearch = async (tag: Tag) => {
  await search.addSearchTag(tag)
  newTag.value = ''
}

onMounted(async () => {
  await search.init()
})
</script>

<template>
  <v-container class="d-flex flex-column ga-2 pa-0">
    <v-card flat>
      <v-card-actions class="bg-background pa-1 ma-1 rounded">
        <SearchSortCollect />
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>
        <v-label>search</v-label>
      </v-card-title>
      <NuTagList :tags="(search.searchTags as Tag[])" @double-click="onDoubleClickSearchTags" />
      <v-text-field class="bg-background rounded pa-1 ma-1" v-model="newTag" label="add term" density="compact"
        hide-details @keydown.enter="addTagToSearch(TagFactory.create(newTag))" variant="plain"
        prepend-icon="mdi-plus" />
    </v-card>
    <v-card>
      <v-card-title>
        <v-label>selection tags</v-label>
      </v-card-title>
      <v-card-actions class="bg-background pa-1 ma-1 rounded">
        <SelectionSort />
      </v-card-actions>
      <NuTagList :tags="modelValue" @double-click="onDblClckSelection" />
    </v-card>
  </v-container>

</template>
