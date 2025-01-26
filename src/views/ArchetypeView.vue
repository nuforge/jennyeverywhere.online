<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

import type Tag from '@/objects/nu/Tag';
import TagFactory from '@/objects/nu/TagFactory';

import archtypes from '@/assets/stories/story.archetypes.json'
import zodiac from '@/assets/stories/story.zodiac.json'
// import heroesJourney from '@/assets/stories/story.heroesjourney.json'

import NuTag from '@/components/nutag/NuTag.vue';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

const zodiacTags = ref<Tag[]>([])
const archetypeTags = ref<Tag[]>([])
const myTags = ref<Tag[]>([])

const allTags = computed(() => {
  return [...archetypeTags.value, ...myTags.value]
})

Object.values(archtypes).map((archetype) => {
  // console.log('archtype', archetype)
  archetypeTags.value.push(TagFactory.create(archetype.name, archetype))
})
Object.values(zodiac).map((sign) => {
  console.log('sign', sign)
  zodiacTags.value.push(TagFactory.create(sign.name, sign))
})

// Object.values(heroesJourney).map((stage) => {
//   console.log('stage', stage)
//   zodiacTags.value.push(TagFactory.create(stage.title, stage))
// })


const profile = computed(() => {
  const archetype = route.params.archetype as keyof typeof archtypes
  return archtypes[archetype]
})

function onClick(event: MouseEvent) {
  const target = event.target as HTMLElement | null;
  if (target && target.textContent) {
    const tag = archetypeTags.value.find(tag => tag.attribute('name') === target.textContent);
    if (tag) {
      router.push(`/archetype/${tag.name.toLowerCase()}`);
    }
  }
}

function onRightClick(event: MouseEvent, tag: Tag) {
  myTags.value.push(tag)
  console.log('onRightClick', event, tag)
  // const tag = markdowninator.getTagFromEvent(event)
  // emit('right-click', event, tag)
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" sm="12">
        <NuTag v-for="tag in archetypeTags" :key="tag.name" :tag="(tag as Tag)"
          :to="`/archetype/${tag.name.toLowerCase()}`" :labels="false" />
        <NuTag v-for="tag in zodiacTags" :key="tag.name" :tag="(tag as Tag)"
          :to="`/archetype/${tag.name.toLowerCase()}`" :labels="false" />
      </v-col>
      <v-col v-if="profile">
        <h2><v-icon :icon="profile.icon" :color="profile.color" /> <router-link :to="$route.path">{{
          $route.params.archetype }}</router-link>
        </h2>
        <MarkdownRenderer :text="profile.description" :tags="(allTags as Tag[])" @click="onClick"
          @right-click="onRightClick" />
      </v-col>
    </v-row>
    <v-row v-if="profile">
      <v-col cols="12" md="4" sm="12" class="ga-2 d-flex flex-wrap">
        <NuTag v-for="attribute in Object.entries(profile)" :key="attribute[0]"
          :tag="TagFactory.create(`${attribute[0]}:${attribute[1]}`)" />
      </v-col>
    </v-row>

  </v-container>
</template>
