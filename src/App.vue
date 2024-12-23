<template>
  <v-responsive class="border rounded">
    <v-app :theme="state.theme">
      <v-fab :icon="state.drawer ? `$close` : `mdi-tag-multiple-outline`" location="bottom start" variant="plain" app
        appear @click="state.toggleMenu"></v-fab>
      <v-fab :icon="state.theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'" variant="plain"
        location="bottom end" app appear @click="state.changeTheme"></v-fab>
      <HeaderLayout />
      <NavigationLayout v-model="state.drawer" />
      <v-main>
        <RouterView />
      </v-main>
      <BottomSheet />
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStateStore } from './stores/state';
import { useStoryStore } from '@/stores/story'
import { useTagStore } from '@/stores/tags';

const state = ref(useStateStore());
const tags = ref(useTagStore())
const story = ref(useStoryStore());

import HeaderLayout from './layouts/HeaderLayout.vue';
import NavigationLayout from './layouts/NavigationLayout.vue';
import BottomSheet from './components/BottomSheet.vue';

onMounted(async () => {
  tags.value.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle')
  tags.value.addLabel('green portal', 'green', 'mdi-orbit')
  tags.value.addLabel('flamethrower', 'red', 'mdi-fire')
  tags.value.addTag('jetpack')
  tags.value.addTag('dude with a mohawk')
  tags.value.addTag('toast')

  await story.value.fetchStory()
    .then((result) => {
      if (typeof result === 'string') {
        story.value.HTML = tags.value.linkText(result)
      }
    })
});
</script>
