<template>
  <v-container>
    <h1>Timelines</h1>
    <v-row>
      <v-col>
        <v-btn-toggle v-model="timelineDirection" density="compact" mandatory>
          <v-btn icon="mdi-align-vertical-center" value="horizontal"
            :variant="timelineDirection === 'horizontal' ? 'text' : 'plain'"></v-btn>
          <v-btn icon="mdi-align-horizontal-center" value="vertical"
            :variant="timelineDirection === 'vertical' ? 'text' : 'plain'"></v-btn>
        </v-btn-toggle>
        {{ timelineDirection }}
        <v-timeline :direction="timelineDirection" line-inset="5" truncate-line="both">
          <v-timeline-item>
            <template v-slot:opposite>
              <TagList noLabel />
            </template>
            <template v-slot:icon>
              <v-avatar :image="PersonaAvatar" rounded="sm"></v-avatar>
            </template>
            <div class="text-h6">
              <router-link to="/">You wake up on a Monday.</router-link>
            </div>
            <v-img :src="storyImage" alt="A glowing green portal" cover max-height="120" rounded="lg"
              max-width="256"></v-img>
          </v-timeline-item>
          <v-timeline-item v-for="event in events" :key="event.title" :date="event.formattedDate" dot-color="surface"
            fill-dot>
            <template v-slot:icon>
              <v-icon icon="$sta-career" color="sta-career">
              </v-icon>
              <v-tooltip activator="parent" location="bottom" content-class="bg-surface" elevated>
                <v-icon icon="$sta-career" color="sta-career"></v-icon> {{ event.title }}
              </v-tooltip>
            </template>
            <template v-slot:opposite>
              <v-tag icon="mdi-calendar-clock" :label="event.formattedDate"
                @click.stop="console.log('clicked')"></v-tag>
            </template>
            <div>
              <p>{{ event.description }}</p>
              <v-tag v-for="(tag, index) in event.tags" :key="index" :label="tag.name" :value="tag.name"
                :icon="tag.icon"></v-tag>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tag from '@/objects/Tag';
import TagList from '@/components/TagList.vue';
import storyImage from '@/assets/stories/gallery/001.png'
import PersonaAvatar from '@/assets/images/avatars/jenny-everywhere-avatar-13.png';

const timelineDirection = ref('vertical')

class Event {
  protected _id: string
  protected _title: string
  protected _description: string
  protected _date: Date
  protected _tags: Tag[] = []

  constructor(title: string, description: string, date: Date) {

    this._title = title
    this._id = title.toLowerCase().replace(/\s/g, '-')
    this._description = description
    this._date = date

    return this
  }

  get formattedDate() {
    return `${this._date.toLocaleTimeString()}`
  }

  get title() {
    return this._title
  }

  get description() {
    return this._description
  }

  get date() {
    return this._date
  }

  get tags() {
    return this._tags
  }

  addTag(tag: string) {
    this._tags.push(new Tag(tag))
    return this
  }
}

const events = ref(<Event[]>[
  new Event('Career Event', 'Discovered a Wormhole', new Date()).addTag('career event:Discovered a wormhole'),
  new Event('Event 2', 'Description 2', new Date()),
  new Event('Event 3', 'Description 3', new Date()),
  new Event('Event 4', 'Description 4', new Date()),
  new Event('Event 5', 'Description 5', new Date()),
])



</script>

<style></style>
