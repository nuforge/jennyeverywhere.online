<template>
  <v-main>
    <v-container>
      <h2>{{ character.name }}</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-tag v-for="(attribute, index) in attributes" :key="index" :text="attribute.name" :icon="attribute.icon"
            :color="attribute.color" :value="attribute.value?.toString()">
          </v-tag>
        </v-col>
        <v-col cols="12" md="6">
          <v-tag v-for="(department, index) in departments" :key="index" :text="department.name" :icon="department.icon"
            :color="department.color" :value="department.value?.toString()">
          </v-tag>
        </v-col>
        <v-col cols="12" md="6">
          <v-tag v-for="(trait, index) in traits" :key="index" :text="trait.name" :icon="trait.icon"
            :color="trait.color" :value="trait.value?.toString()">
          </v-tag>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Character from '@/game/Character'
import Attribute from '@/game/Attribute';

const character = ref(new Character('Jenny Everywhere'))

character.value.addAttribute(new Attribute('Control', 8, '$sta-control', 'var(--sta-teal)'))
character.value.addAttribute(new Attribute('Fitness', 7, '$sta-fitness', 'var(--sta-teal)'))
character.value.addAttribute(new Attribute('Daring', 11, '$sta-daring', 'var(--sta-teal)'))
character.value.addAttribute(new Attribute('Presence', 10, '$sta-presence', 'var(--sta-teal)'))
character.value.addAttribute(new Attribute('Insight', 11, '$sta-insight', 'var(--sta-teal)'))
character.value.addAttribute(new Attribute('Reason', 9, '$sta-reason', 'var(--sta-teal)'))

character.value.addAttribute(new Attribute('Command', 2, '$sta-command', 'var(--sta-command)'), 'department')
character.value.addAttribute(new Attribute('Conn', 5, '$sta-conn', 'var(--sta-conn)'), 'department')
character.value.addAttribute(new Attribute('Engineering', 4, '$sta-engineering', 'var(--sta-engineering)'), 'department')
character.value.addAttribute(new Attribute('Security', 1, '$sta-security', 'var(--sta-security)'), 'department')
character.value.addAttribute(new Attribute('Medicine', 1, '$sta-medicine', 'var(--sta-medicine)'), 'department')
character.value.addAttribute(new Attribute('Science', 3, '$sta-science', 'var(--sta-science)'), 'department')



character.value.addAttribute(new Attribute('Species: Hologram', undefined, '$sta-species', 'var(--sta-trait)'), 'trait')
character.value.addAttribute(new Attribute('Determined', undefined, '$sta-trait',), 'trait')

const attributes = character.value.getAttributes()
const departments = character.value.getAttributes('department')
const traits = character.value.getAttributes('trait')

</script>
