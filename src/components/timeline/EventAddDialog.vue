<template>
  <v-dialog v-model="state.event" scrim="#000000">
    <form @submit.prevent="saveEvent">
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="d-flex justify-space-between align-center">
              <v-icon>mdi-calendar-edit</v-icon> Add Event
              <v-spacer></v-spacer>
              <v-icon @click="admin = !admin" :icon="admin ? 'mdi-eye' : 'mdi-eye-outline'" size="sm"></v-icon>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="event.name" label="Name" required density="compact" prepend-inner-icon="mdi-label"
                variant="solo-filled"></v-text-field>
              <v-text-field v-model="event.date" label="Date/time" required density="compact"
                prepend-inner-icon="mdi-web-clock" variant="solo-filled"></v-text-field>
              <v-textarea label="Description" v-model="event.description" name="Description" auto-grow required
                density="compact" prepend-inner-icon="mdi-calendar-text" variant="solo-filled"></v-textarea>
              <ColorPicker v-model="event.color" label="Color" variant="solo-filled" />
              <tag-autocomplete v-model="event.icon" :prepend-inner-icon="event.icon" variant="solo-filled" />
            </v-card-text>
            <v-card-actions>
              <v-btn @click="cancelEvent" text="Cancel" prepend-icon="$close" variant="plain"></v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="saveEvent" text="Add Event" density="comfortable" prepend-icon="mdi-calendar-edit"
                class="elevation-2" variant="tonal"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col v-show="admin">
          <v-expansion-panels multiple variant="accordion" v-model="panels">
            <v-expansion-panel>
              <v-expansion-panel-title static>
                <v-tag dense label="Public Tags" icon="mdi-tag"></v-tag>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="bg-background ">
                <tag-group :tags="tagList"></tag-group>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title static>
                <v-tag dense label="Description" icon="mdi-text-box-outline"></v-tag>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="bg-background ">
                <MarkdownRenderer :text="event.description" />
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title static>
                <v-tag dense label="System Tags" icon="mdi-tag-hidden" color="disabled"></v-tag>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="bg-background ">
                <tag-group :tags="systemTags" disabled></tag-group>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </form>
  </v-dialog>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';
import { useStateStore } from '@/stores/state'
import { useTimelineStore } from '@/stores/timelines'

import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';
const state = useStateStore()
const timeline = useTimelineStore()

import Tag from '@/objects/Tag';
import TagGroup from '@/components/tags/TagGroup.vue';
import Event from '@/objects/Event';
import MarkdownRenderer from '../MarkdownRenderer.vue';
const panels = ref([0, 1])

const admin = ref(true)


const event = ref(new Event('Battle of Wolf 359', '40+ Federation starships were destroyed defending Earth from a Borg invasion lead by Locutus, an assimilated Captain Jean-Luc Picard', 'stardate:44002.3'))

const systemTags = computed(() => {
  const tags = []
  const tag = new Tag(`${event.value.name}`)
  tags.push(new Tag(`name:${tag.name}`, 'system', `mdi-tag-outline`))   // Name
  tags.push(new Tag(`id:${tag.id}`, 'system', `mdi-label-outline`)) // ID
  tags.push(new Tag(`timestamp:${Date.now()}`, 'system', `$system`)) // Timestamp
  tags.push(new Tag(`event`, 'system', 'mdi-calendar')) // Event
  tags.push(new Tag(`icon:${event.value.icon}`, 'system', `${event.value.icon}`)) // Icon
  tags.push(new Tag(`color:${event.value.color}`, event.value.color, `$color`)) // Color

  return tags as Tag[]
})

const tagList = computed(() => {
  const tags = []
  if (event.value.name !== '') {

    const tag = new Tag(`${event.value.name}`)
    tag.icon = event.value.icon
    tag.color = event.value.color

    tags.push(new Tag(`${tag.name}`, tag.color, tag.icon))
  }
  tags.push(new Tag(`${event.value.date}`, '$system', `$timestamp`))

  tags.push(new Tag(`Federation`, `#59A7D3`, `mdi-account-group`))
  tags.push(new Tag(`planet:Earth`, `#2079FF`, `mdi-earth`))
  tags.push(new Tag(`species:Borg`, `#73C25F`, `mdi-account-group`))
  tags.push(new Tag(`captain:Jean-Luc Picard`, `#56A1F2`, `mdi-account`))
  tags.push(new Tag(`Borg:Locutus`, `#73C25F`, `mdi-account`))
  tags.push(new Tag(`borg:assimilate`, `#73C25F`, `mdi-memory`))
  tags.push(new Tag(`invasion`))
  tags.push(new Tag(`starship`))

  return tags as Tag[]
})


function saveEvent() {
  // Save the event
  timeline.addEvent(event.value, tagList.value)
  state.eventClose()
}

function cancelEvent() {
  // Cancel the event
  state.event = false
}



</script>
