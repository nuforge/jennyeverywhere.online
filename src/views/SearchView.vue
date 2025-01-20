<script setup lang="ts">
import HydrusTagSearch from '@/components/HydrusTagSearch.vue';
import useSearchStore from '@/stores/search';
const search = useSearchStore();
import stTags from '@/assets/tags/tags.startrek.json'
import stEdges from '@/assets/tags/edges.startrek.json'
import Tag from '@/objects/nu/Tag';

const addStarTrek = async () => {
  await search.addTags(stTags as Tag[])
  await search.addEdges(stEdges)
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col sm="5">
        <v-card flat>
          <v-card-actions>
            <v-btn-group class="d-flex flex-wrap" multiple variant="plain">
              <v-btn text="Init StarTrek" size="x-small" @click="addStarTrek" />
              <v-btn text="Reset DB" size="x-small" @click="search.resetDatabase" color="warning"
                prepend-icon="mdi-nuke" />
            </v-btn-group>
          </v-card-actions>
        </v-card>
        <HydrusTagSearch />
      </v-col>
      <v-col sm="7" cols="auto">
        <h2><v-icon icon="mdi-tag-search" size="x-small" color="warning" /> Tag Search</h2>

        <v-card-text>
          <NuTag v-for="(tag, index) in search.searchResults" :key="index" :space="tag.space" :label="`${tag.name}`"
            size="small" />
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>
