<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Tag from '@/objects/nu/Tag';
import TagFactory from '@/objects/nu/TagFactory';
import SearchSortCollect from '@/components/search/SearchSortCollect.vue';

import useSearchStore from '@/stores/search';
import SelectionSort from '@/components/search/SelectionSort.vue';
const search = useSearchStore();

const newTag = ref('')

defineProps<{
  modelValue: Tag[]
}>()


const removeTagFromSearch = async (tag: string) => {
  await search.removeFromSearch(tag)
  search.depthSearchTags(tag)
}

const addToSearch = async (tag: Tag) => {
  await search.addtoSearch(tag.name)
  //search.depthSearchTags(tag.name)
}

const searchTags = computed<Tag[]>(() => {
  return TagFactory.createBatch(search.searchTerms, { color: 'primary', icon: 'mdi-tag' })
})

onMounted(async () => {
  await search.init()
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
      <v-list density="compact" nav return-object slim class="bg-background rounded pa-0 ma-1 ">
        <v-list-item v-for="tag in searchTags" :key="tag.name" class="ma-0 pa-0" :min-height="0"
          @dblclick="removeTagFromSearch(tag.name)">
          <NuTag :tag="tag" size="small" variant="tonal" class="d-flex flex-block" />
        </v-list-item>
        <v-list-item>
          <v-text-field v-model="newTag" label="add term" density="compact"
            @keydown.enter="addToSearch(TagFactory.create(newTag))" variant="plain" prepend-icon="mdi-plus" />
        </v-list-item>
      </v-list>
    </v-card>
    <v-card>
      <v-card-title>
        <v-label>selection tags</v-label>
      </v-card-title>
      <v-card-actions class="bg-bac">
        <SelectionSort />
      </v-card-actions>
      <v-list density="compact" nav return-object slim class="bg-background rounded pa-0 ma-1 " v-if="modelValue">
        <v-list-item v-for="tag in modelValue" :key="tag.name" class="ma-0 pa-0" :min-height="0"
          @dblclick="addToSearch(tag)">
          <NuTag :tag="tag" size="small" variant="text" class="d-flex flex-block" />
        </v-list-item>
      </v-list>

    </v-card>
  </v-container>

</template>
