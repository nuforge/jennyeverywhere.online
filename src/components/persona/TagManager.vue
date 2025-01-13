<script setup lang="ts">
import { ref } from 'vue'
import Tag from '@/objects/nu/Tag'
import usePersonaStore from '@/stores/persona'
const persona = usePersonaStore()

import Inator from '@/objects/Inator'
const inator = new Inator()

import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorAutocomplete from '@/components/form/ColorAutocomplete.vue';
import BtnFocusLink from '@/components/BtnFocusLink.vue';

const tempTag = ref(new Tag('', 'primary', 'mdi-tag'))

function submitForm() {
  //console.log('submitForm', tempTag.value)
  persona.focusOn(new Tag(tempTag.value.name, tempTag.value.color, tempTag.value.icon))
}

function resetTemp() {
  tempTag.value = persona.focus
}
</script>


<template>
  <v-form @submit.prevent="submitForm()">
    <!-- ADD TAG FORM -->
    <v-spacer>
      <BtnFocusLink @click="resetTemp" />
    </v-spacer>
    <v-text-field label="label" v-model="tempTag.name" density="compact" variant="outlined"
      prepend-inner-icon="mdi-label-outline" persistent-counter></v-text-field>
    <tag-autocomplete v-model="tempTag.icon" :prepend-inner-icon="tempTag.icon" />
    <ColorAutocomplete v-model="(tempTag.color as string)" label="color" />
    <v-text-field v-model="tempTag.value" density="compact"
      :prepend-icon="inator.bestIcon(tempTag.name) || 'mdi-lock'"></v-text-field>
  </v-form>
</template>
