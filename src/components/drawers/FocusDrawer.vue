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
      <v-card-text>
        <EvTrayCard :tags="(persona.attention.tags as Tag[])" @click-tag="onClickTag" v-model="selection" />
      </v-card-text>

      <!-- Tag Details -->

      <v-scale-transition>
        <v-card-text v-if="selection.length === 1">
          <EvTrayCard :tags="(persona.
            currentTag.attributesToTags() as Tag[])" />

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
import { ref } from 'vue';
import EvTag from '@/components/tags/EvTag.vue';
import Tag from '@/objects/Tag.ts';
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


function onClickTag(event: MouseEvent, tag: Tag) {

  persona.focusOn(tag)
  text.value = tag.name
  color.value = tag.color ?? ''
  icon.value = tag.icon ?? ''
}

function submitForm() {
  console.log('submitForm', text.value, color.value, icon.value)
  persona.focusOn(new Tag(text.value, color.value, icon.value))
}


</script>
