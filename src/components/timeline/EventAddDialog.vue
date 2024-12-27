<template>
  <v-dialog v-model="state.event" scrim="#000000">
    <form @submit.prevent="saveEvent">
      <v-card>
        <v-card-title>
          <v-icon>mdi-calendar-edit</v-icon> Add Event
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field v-model="event.title" label="Name" required density="compact" prepend-inner-icon="mdi-label"
                variant="outlined"></v-text-field>
              <v-text-field v-model="event.date" label="Date/time" required density="compact"
                prepend-inner-icon="mdi-web-clock" variant="outlined"></v-text-field>
              <v-textarea label="Description" v-model="event.description" name="Description" auto-grow required
                density="compact" prepend-inner-icon="mdi-calendar-text" variant="outlined"></v-textarea>
              <ColorPicker v-model="event.color" label="Color" />
              <tag-autocomplete v-model="event.icon" :prepend-inner-icon="event.icon" />
            </v-col>
            <v-col>
              <tag-group :tags="tagList" class="bg-background pa-2 my-1 rounded"></tag-group>
              <tag-group :tags="hiddenTags" class="bg-background pa-2 my-1 rounded"></tag-group>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="saveEvent">Save</v-btn>
          <v-btn @click="cancelEvent">Cancel</v-btn>
        </v-card-actions>
      </v-card>
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


const event = ref(new Event('Battle of Wolf 359', '40+ Federation starships were destroyed defending Earth from a Borg invasion lead by Locutus, an assimilated Captain Jean-Luc Picard', 'stardate:44002.3'))

const hiddenTags = computed(() => {
  const tags = []
  const tag = new Tag(`${event.value.title}`)
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
  if (event.value.title !== '') {

    const tag = new Tag(`${event.value.title}`)
    tag.icon = event.value.icon
    tag.color = event.value.color

    tags.push(new Tag(`${tag.name}`, tag.color, tag.icon))
  }
  tags.push(new Tag(`${event.value.date}`, '$system', `$timestamp`))

  tags.push(new Tag(`Federation`, `#59A7D3`, `mdi-account-group`))
  tags.push(new Tag(`Species:Borg`, `#73C25F`, `mdi-account-group`))
  tags.push(new Tag(`Captain:Jean-Luc Picard`, `#56A1F2`, `mdi-account`))
  tags.push(new Tag(`Borg:Locutus`, `#73C25F`, `mdi-account`))

  return tags as Tag[]
})


function saveEvent() {
  // Save the event
  timeline.addEvent(event.value, tagList.value)
  console.log(timeline.events)
}

function cancelEvent() {
  // Cancel the event
  state.event = false
}



</script>
