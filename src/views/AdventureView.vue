<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
import Tag from '@/objects/nu/Tag';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import TagFactory from '@/objects/nu/TagFactory';

import story from '@/assets/stories/story.json'
import HydrusTagSearch from '@/components/HydrusTagSearch.vue';
import useSearchStore from '@/stores/search';
import TagFactoryForm from '@/components/form/TagFactoryForm.vue';
const search = useSearchStore();

const showAddForm = ref(true)
const raw = ref<string>(story.content.reduce((acc, curr) => acc + curr + `\n\n`, ''))

const tags = ref<Tag[]>([
  TagFactory.create('Jenny Everywhere', { color: 'primary', icon: 'mdi-account-circle' }),
  TagFactory.create('jetpack', { color: 'warning', icon: 'mdi-rocket' }),
  TagFactory.create('color:green', { color: 'green', icon: 'mdi-circle-opacity' }),
  TagFactory.create('mystery:artifact', { color: 'accent', icon: 'mdi-help' }),
]);

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
      <v-col cols="4">
        <HydrusTagSearch v-model="(tags as Tag[])" />
        <v-divider class="pa-2 ma-2" />
        <TagFactoryForm v-model="showAddForm" @create-tag="tags.push($event)" @close="console.log" />
      </v-col>
      <v-col>
        <MarkdownRenderer :text="raw" id="md_container" :tags="(search.searchTags as Tag[])" @click-tag="onClick"
          @click="onClick" @right-click="onRightClick" />
      </v-col>
    </v-row>
  </v-container>
</template>
