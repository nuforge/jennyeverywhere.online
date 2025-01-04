<template>
  <v-navigation-drawer v-model="persona.drawer" app right width="300" :scrim="!state.dragging">
    <v-card>

      <!-- Focus Drawer Card Actions -->
      <v-card-actions>
        <v-icon @click="persona.drawer = !persona.drawer">mdi-close</v-icon>
        <v-spacer> </v-spacer>
        <v-icon @click="addTagVisible = !addTagVisible"
          :icon="addTagVisible ? `mdi-tag-plus` : `mdi-tag-plus-outline`"></v-icon>
      </v-card-actions>


      <!-- Focus Tag Tray -->
      <v-card-text v-if="persona.focus">
        <v-divider></v-divider>
        <v-container class="bg-background pa-2 text-center">
          <NuTag :tag="persona.focus" v-if="persona.focus.id" elevation="2" />
        </v-container>
        <v-divider></v-divider>
      </v-card-text>


      <!-- Tag Details -->
      <v-scale-transition>
        <v-card-text v-if="selection.length === 1">
          <EvTrayCard :name="persona.focus.name" :tags="(persona.focus.attributesToTags() as Tag[])" />

        </v-card-text>
      </v-scale-transition>

      <!-- Add Tag Form -->
      <v-scale-transition>
        <v-container v-if="addTagVisible && selection.length === 1">
          <v-form @submit.prevent="submitForm()">
            <v-text-field label="label" v-model="text" density="compact" variant="outlined"
              prepend-inner-icon="mdi-label-outline" autofocus persistent-counter></v-text-field>
            <tag-autocomplete v-model="icon" :prepend-inner-icon="icon" />
            <ColorAutocomplete v-model="color" label="color" />
            <v-card-actions>
              <v-btn icon="mdi-close" variant="plain" @click="addTagVisible = false" />
              <EvTag :icon="icon" :color="color" :text="text"></EvTag>
              <v-spacer>
              </v-spacer>
              <v-btn type="submit" icon="mdi-tag-plus" :disabled="!text" variant="text" />
            </v-card-actions>
          </v-form>
        </v-container>
      </v-scale-transition>



    </v-card>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import EvTag from '@/components/tags/EvTag.vue';
import Tag from '@/objects/Tag.ts';
import NuTag from '@/components/tags/NuTag.vue';
import EvTrayCard from '@/components/tags/EvTrayCard.vue';
import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorAutocomplete from '@/components/form/ColorAutocomplete.vue';

import { useStateStore } from '@/stores/state';
import { usePersonaStore } from '@/stores/persona';
const persona = usePersonaStore()
const state = useStateStore()

const text = ref('')
const color = ref('primary')
const icon = ref('mdi-tag')

const addTagVisible = ref(false)

const selection = ref<string[]>([])

watch(
  () => persona.focus, // Use optional chaining to avoid errors
  (newFocus) => {
    if (newFocus) {
      selection.value = [newFocus.id]; // Update the selection array
    } else {
      selection.value = []; // Clear the selection array
    }
  },
  { immediate: true }
);


function submitForm() {
  console.log('submitForm', text.value, color.value, icon.value)
  persona.myFocusOn(new Tag(text.value, color.value, icon.value))
}


</script>
