<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useSearchStore from '@/stores/search';
//import NuTag from './nutag/NuTag.vue';
const search = useSearchStore();

const newTag = ref('')

const removeTagFromSearch = async (tag: string) => {
  await search.removeFromSearch(tag)
  search.depthSearchTags(tag)
}

const addToSearch = async (tag: string) => {
  await search.addtoSearch(tag)
  search.depthSearchTags(tag)
}

onMounted(async () => {
  await search.init()
})
</script>

<template>
  <v-container class="d-flex flex-column ga-2 pa-0">
    <v-card flat>
      <v-card-actions>
        <v-btn-group class="d-flex flex-wrap" multiple variant="plain">
          <v-btn text="Sort by" size="x-small" />
          <v-btn text="descending" size="x-small" />
          <v-btn text="no collections" size="x-small" />
          <v-btn text="unmatched" size="x-small" />
          <v-btn text="tags" size="x-small" />
        </v-btn-group>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>
        <v-label>search</v-label>
      </v-card-title>
      <v-list density="compact" nav return-object slim class="bg-background rounded pa-0 ma-1 ">
        <v-list-item v-for="tag in search.searchTerms" :key="tag" class="ma-0 pa-0" :min-height="0"
          @dblclick="removeTagFromSearch(tag)">
          <NuTag :label="tag" size="small" variant="text" class="d-flex flex-block" />
        </v-list-item>
        <v-list-item>
          <v-text-field v-model="newTag" label="add term" density="compact" @keydown.enter="addToSearch(newTag)"
            variant="plain" prepend-icon="mdi-plus" />
        </v-list-item>
      </v-list>
    </v-card>
    <v-card>
      <v-card-title>
        <v-label>selection tags</v-label>
      </v-card-title>
      <v-card-actions class="bg-bac">
        <v-btn-group class="d-flex flex-wrap" multiple variant="plain">
          <v-btn text="Sort: count" size="x-small" />
          <v-btn text="most first" size="x-small" />
          <v-btn text="no group" size="x-small" />
        </v-btn-group>
      </v-card-actions>
      <v-list density="compact" nav return-object slim class="bg-background rounded pa-0 ma-1 ">
        <v-list-item v-for="tag in search.searchResults" :key="tag.name" class="ma-0 pa-0" :min-height="0"
          @dblclick="addToSearch(tag.name)">
          <NuTag :label="tag.name" size="small" variant="text" class="d-flex flex-block" />
        </v-list-item>
      </v-list>

    </v-card>
  </v-container>

</template>
