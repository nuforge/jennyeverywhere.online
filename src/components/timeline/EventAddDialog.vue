<template>
  <v-dialog v-model="state.event" scrim="#000000">
    <form @submit.prevent="saveEvent">
      <v-row>
        <v-spacer v-if="!admin"></v-spacer>
        <v-col>
          <v-card class="bg-background">
            <v-card-title class="d-flex justify-space-between align-center">
              <v-icon icon="mdi-calendar-edit" class="me-2"></v-icon> Add Event
              <v-spacer></v-spacer>
              <v-icon @click="admin = !admin" :icon="admin ? 'mdi-eye' : 'mdi-eye-outline'" size="sm"
                variant="plain"></v-icon>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="event.name" label="Name" required density="compact" prepend-inner-icon="mdi-label"
                variant="solo-filled" clearable></v-text-field>
              <v-text-field v-model="event.date" label="Date/time" required density="compact"
                prepend-inner-icon="mdi-web-clock" variant="solo-filled" clearable></v-text-field>
              <v-textarea label="Description" v-model="event.body" name="Description" auto-grow required
                density="compact" prepend-inner-icon="mdi-calendar-text" variant="solo-filled" clearable></v-textarea>
              <ColorPicker v-model="event.color" label="Color" variant="solo-filled" />
              <tag-autocomplete v-model="event.icon" :prepend-inner-icon="event.icon" variant="solo-filled" />
            </v-card-text>
            <v-card-actions>
              <v-btn @click="cancelEvent" text="Close" prepend-icon="$close" variant="plain"></v-btn>
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
                <VTagItem dense label="Public Tags" icon="mdi-tag" />
              </v-expansion-panel-title>
              <v-expansion-panel-text class="bg-background ">
                <EvTagTray :tags="(evTags.tags as Tag[])" noLabel @close="removeTag"></EvTagTray>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title static>
                <VTagItem dense label="Description" icon="mdi-text-box-outline" />
              </v-expansion-panel-title>
              <v-expansion-panel-text class="bg-background ">
                <MarkdownRenderer :text="event.body" :tags="(evTags.tags as Tag[])" />
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title static>
                <VTagItem dense label="System Tags" icon="mdi-tag-hidden" color="disabled" />
              </v-expansion-panel-title>
              <v-expansion-panel-text class="bg-background ">
                <EvTagTray :tags="systemTags" noLabel></EvTagTray>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-spacer v-if="!admin"></v-spacer>
      </v-row>
    </form>
  </v-dialog>
</template>

<script setup lang="ts">

import { ref, computed, onMounted } from 'vue';
import { useStateStore } from '@/stores/state'
import { useTimelineStore } from '@/stores/timelines'

import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';
const state = useStateStore()
const timeline = useTimelineStore()

import Tag from '@/objects/Tag';
import Log from '@/objects/Log';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import EvTagTray from '@/components/tags/EvTagTray.vue';
import { default as tagTray } from '@/objects/TagTray';

const panels = ref([0, 1])
const admin = ref(true)
const eventTags = ref<Tag[]>([])

const evTags = ref(new tagTray([]))


const event = ref()

const systemTags = computed(() => {
  const tags = []
  const tag = new Tag(`${event.value.title}`)
  tags.push(new Tag(`name:${tag.name}`, 'system', `mdi-label-variant-outline`))   // Name
  tags.push(new Tag(`title:${tag.name}`, 'system', `mdi-label-variant-outline`))   // Name
  tags.push(new Tag(`id:${tag.id}`, 'system', `mdi-identifier`)) // ID
  tags.push(new Tag(`timestamp:${Date.now()}`, 'system', `mdi-calendar-clock`)) // Timestamp
  tags.push(new Tag(`event`, 'system', 'mdi-calendar-outline')) // Event
  tags.push(new Tag(`icon:${event.value.icon}`, 'system', `${event.value.icon}`)) // Icon
  tags.push(new Tag(`color:${event.value.color}`, event.value.color, `$color`)) // Color
  evTags.value.copy(tags as Tag[])
  return tags as Tag[]
})

function removeTag(tag: Tag) {
  evTags.value.map.deleteTag(tag)
}


function saveEvent() {
  // Save the event
  timeline.addLog(event.value, evTags.value.tags as Tag[])
  state.eventClose()
}

function cancelEvent() {
  // Cancel the event
  state.event = false
}

onMounted(() => {

  event.value = new Log('Battle of Wolf 359', '40+ Federation starships were destroyed defending Earth from a Borg invasion lead by Locutus, an assimilated Captain Jean-Luc Picard')

  if (event.value.name !== '') {
    const tag = new Tag(`${event.value.title}`)
    tag.icon = event.value.icon
    tag.color = event.value.color
    evTags.value.copy(new Tag(`${tag.name}`, tag.color, tag.icon))
    eventTags.value.push(new Tag(`${tag.name}`, tag.color, tag.icon))
  }
  eventTags.value.push(new Tag(`Federation`, `primary`, `mdi-account-group`))
  eventTags.value.push(new Tag(`planet:Earth`, `primary`, `mdi-earth`))
  eventTags.value.push(new Tag(`species:Borg`, `green`, `mdi-account-group`))
  eventTags.value.push(new Tag(`captain:Jean-Luc Picard`, `primary`, `mdi-account`))
  eventTags.value.push(new Tag(`borg:Locutus`, `green`, `mdi-account`))
  eventTags.value.push(new Tag(`borg:assimilate`, `green`, `mdi-memory`))
  eventTags.value.push(new Tag(`stardate:44002.3`, 'info', `mdi-web-clock`)) // Timestamp
  eventTags.value.push(new Tag(`battle`, `warning`, `mdi-sword`))
  eventTags.value.push(new Tag(`invasion`))
  eventTags.value.push(new Tag(`starship`))

  evTags.value.copy(eventTags.value as Tag[])
})


</script>
