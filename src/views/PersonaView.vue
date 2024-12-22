<template>
  <v-container>
    <h2><router-link to="">Persona: </router-link></h2>
    <v-card>
      <v-card-title>Attributes</v-card-title>
      <v-chip-group column>
        <v-chip v-for="(tag, index) in tags.tags" :key="index" :text="tag.name" :prepend-icon="tag.icon">
          <template v-slot:prepend>
            <v-icon :icon="tag.icon" :color="tag.color"></v-icon>
          </template>
          <template v-slot:default>{{ tag.name }}
            <v-tooltip activator="parent" location="bottom" content-class="bg-surface" elevated>
              <v-icon :icon="tag.icon" :color="tag.color"></v-icon> {{ tag.space }}:{{ tag.icon }}
            </v-tooltip>
          </template>
        </v-chip>
      </v-chip-group>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTagStore } from '@/stores/tags';


const tags = ref(useTagStore())

tags.value.addStyle('name', 'warning', 'mdi-account-circle')
tags.value.addStyle('action', 'primary', 'mdi-sword')
tags.value.addStyle('occupation', 'warning', 'mdi-domain')
tags.value.addTag('Jenny Everywhere')
tags.value.addTag('action:attack')
tags.value.addTag('item:green portal')
tags.value.addTag('item:jetpack')
tags.value.addTag('fire:flamethrower')
tags.value.addTag('character:dude with a mohawk')
tags.value.addTag('occupation:firefighter')
tags.value.addTag('toast')

console.log(tags.value.tags)



</script>
