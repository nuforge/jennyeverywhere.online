<template>
  <v-dialog v-model="state.event" max-width="500" scrim="#000000">
    <form @submit.prevent="saveEvent">
      <v-card>
        <v-card-title>
          <v-icon>mdi-calendar-edit</v-icon> Add Event
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="event.title" label="Name" required density="compact" prepend-inner-icon="mdi-label"
            variant="outlined"></v-text-field>
          <v-text-field v-model="event.date" label="Date/time" required density="compact"
            prepend-inner-icon="mdi-web-clock" variant="outlined"></v-text-field>
          <v-textarea label="Description" v-model="event.description" name="Description" auto-grow required
            density="compact" prepend-inner-icon="mdi-calendar-text" variant="outlined"></v-textarea>
          <ColorPicker v-model="event.color" label="Color" />
          <tag-autocomplete v-model="event.icon" :prepend-inner-icon="event.icon" />
          <v-divider>tags</v-divider>
          <tag-group :tags="tagList" class="bg-background pa-2 my-1 rounded"></tag-group>
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

const tagList = computed(() => {
  const tags = []

  if (event.value.title !== '') {

    const tag = new Tag(`${event.value.title}`)
    tag.icon = event.value.icon
    tag.color = event.value.color

    tags.push(tag)
    tags.push(new Tag(`name:${tag.name}`, '$system', `mdi-label`))
    if (tag.space)
      tags.push(new Tag(`event:${tag.space}`, '$system', `$event`))
  }

  tags.push(new Tag(`${event.value.date}`, '$system', `$timestamp`))

  tags.push(new Tag(`timestamp:${Date.now()}`, 'system', `$system`))


  tags.push(new Tag(`event`, undefined, 'mdi-calendar'))
  const iconTag = new Tag(`icon:${event.value.icon}`)
  iconTag.icon = `${event.value.icon}`

  tags.push(iconTag)

  const colorTag = new Tag(`color:${event.value.color}`)
  colorTag.icon = `$color`
  colorTag.color = event.value.color

  tags.push(colorTag)


  tags.push(new Tag(`Federation`, `#59A7D3`, `mdi-account-group`))
  tags.push(new Tag(`species:Borg`, `#73C25F`, `mdi-account-group`))
  tags.push(new Tag(`Jean-Luc Picard`, `#56A1F2`, `mdi-account`))
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
