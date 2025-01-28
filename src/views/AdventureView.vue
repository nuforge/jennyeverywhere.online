<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
import Tag from '@/objects/nu/Tag';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import TagFactory from '@/objects/nu/TagFactory';

import story from '@/assets/stories/story.json'
import HydrusTagSearch from '@/components/HydrusTagSearch.vue';
import useSearchStore from '@/stores/search';
const search = useSearchStore();

const raw = ref<string>(story.content.reduce((acc, curr) => acc + curr + `\n\n`, ''))


const tags = ref<Tag[]>([TagFactory.create('Jenny Everywhere', { color: 'primary', icon: 'mdi-account-circle' })]);

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

const searchTags = computed<Tag[]>(() => {
  const newTags = TagFactory.createBatch(search.searchTerms, { color: 'primary', icon: 'mdi-tag' })
  //console.log('searchTags', search.searchTerms, newTags)
  return newTags as Tag[];
})
// route.params.archetype
</script>


<template>
  <v-container>

    <v-row>
      <v-col cols="4">
        <HydrusTagSearch v-model="(tags as Tag[])" />
      </v-col>
      <v-col>
        <MarkdownRenderer :text="raw" id="md_container" :tags="(searchTags as Tag[])" @click-tag="onClick"
          @click="onClick" @right-click="onRightClick" />
      </v-col>
    </v-row>
  </v-container>
</template>
