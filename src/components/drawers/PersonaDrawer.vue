<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Tag from '@/objects/Tag.ts';
import NuTag from '@/components/nu/NuTag.vue';
import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorAutocomplete from '@/components/form/ColorAutocomplete.vue';

import useStateStore from '@/stores/state';
import usePersonaStore from '@/stores/persona';
import BtnFocusLink from '../BtnFocusLink.vue';
import GlobalSettings from '@/components/drawers/persona/GlobalSettings.vue';
const persona = usePersonaStore()
const state = useStateStore()

const tempTag = ref(new Tag('', 'primary', 'mdi-tag'))

const descending = computed(() => [...persona.attention.tags].reverse())


const expansions = ref([])


function submitForm() {
  //console.log('submitForm', tempTag.value)
  persona.focusOn(new Tag(tempTag.value.name, tempTag.value.color, tempTag.value.icon))
}

function resetTemp() {
  tempTag.value = persona.focus
}


watch(
  () => persona.focus, // Use optional chaining to avoid errors
  (newFocus) => { // OPEN FOCUS PANEL
    console.log('watch', newFocus)
  }
);

</script>


<template>
  <v-navigation-drawer permanent class="bg-background " v-model="persona.drawer" width="300" :scrim="!state.dragging"
    flat :rail="persona.rail">
    <v-card class="bg-transparent">
      <v-card-actions class="bg-background">
        <v-icon @click=" persona.drawer = !persona.drawer">mdi-chevron-left</v-icon>
        <v-spacer />
        <v-chip-group density="compact" class="bg-background ga-0">
          <NuTag v-for="tag in (descending.slice(0, 3).reverse() as Tag[])" :key="tag.id" :tag="(tag as Tag)"
            variant="plain" @click="persona.focusOn(persona.focus as Tag)" :labels="false" size="small"
            density="compact" />
        </v-chip-group>

        <NuTag :tag="new Tag('label:history', 'text', 'mdi-history')" variant="plain"
          @click="persona.focusOn(persona.focus as Tag)" :labels="false" />

      </v-card-actions>
      <v-card-text>
        <v-expansion-panels v-model="expansions" collapse-icon="mdi-chevron-up" selected-class="bg-primary" multiple
          static flat>
          <v-expansion-panel>
            <v-expansion-panel-title expand-icon="mdi-image-filter-center-focus" class="bg-background">

              <NuTag :tag="(persona.focus as Tag)" variant="text" @click="persona.focusOn(persona.focus as Tag)" />

            </v-expansion-panel-title>
            <v-expansion-panel-text class="bg-background align-start">
              <v-label>system tags</v-label>
              <v-list-item v-for="tag in (persona.focus.attributesToTags() as Tag[])" :key="tag.id">
                <NuTag :tag="tag" elevation="2" />
              </v-list-item>

            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Focus Tag -->
          <v-expansion-panel :title="persona.rail ? undefined : 'Create Tag'" expand-icon="mdi-tag-plus"
            class="bg-background">
            <v-expansion-panel-text class="bg-background">
              <v-spacer>
                <BtnFocusLink @click="resetTemp" />
              </v-spacer>

              <!-- ADD TAG FORM -->
              <v-form @submit.prevent="submitForm()">

                <v-text-field label="label" v-model="tempTag.name" density="compact" variant="outlined"
                  prepend-inner-icon="mdi-label-outline" persistent-counter></v-text-field>
                <tag-autocomplete v-model="tempTag.icon" :prepend-inner-icon="tempTag.icon" />
                <ColorAutocomplete v-model="(tempTag.color as string)" label="color" />
              </v-form>

            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- FORM END -->

          <v-expansion-panel :title="persona.rail ? undefined : 'Styles'" expand-icon="mdi-palette-swatch"
            class="bg-background">
            <v-expansion-panel-text class="bg-background  text-center ma-0 ">


              <GlobalSettings id="GlobalSettings_PersonaDrawer" />

            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel :title="persona.rail ? undefined : 'History'" expand-icon="mdi-history"
            class="bg-background">
            <v-expansion-panel-text>

              <v-list lines="one" density="compact">
                <v-list-item v-for="tag in (descending as Tag[])" :key="tag.id">
                  <NuTag :tag="tag" elevation="2" />
                </v-list-item>
              </v-list>

            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>
