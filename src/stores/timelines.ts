import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/Tag'
import Event from '@/objects/Event'
import Timeline from '@/objects/Timeline'

export const useTimelineStore = defineStore('timeline', () => {
  const timeline = ref<Timeline>(new Timeline('tum'))

  const events = ref(<Event[]>[
    new Event(
      'Scientific Discovery',
      'Discovered a wormhole while navigating through unexplored space',
    ).createTag('career event:Discovered a wormhole', 'blue', 'mdi-orbit'),
    new Event(
      'Career Promotion',
      'Assigned to the USS Mandelbrot and received a promotion to Lieutenant (junior grade)',
    )
      .createTag('rank:Lieutenant (junior grade)', 'sta-career', 'mdi-chevron-double-up')
      .createTag('ship:USS Mandelbrot', 'secondary', 'mdi-rocket'),
  ])

  const addEvent = (newEvent: Event, tags: Array<Tag>) => {
    const event = new Event(newEvent.name, newEvent.description, newEvent.date)
    tags.forEach((tag) => {
      event.createTag(tag.name, tag.color, tag.icon)
    })
    events.value.unshift(event)
  }

  return { timeline, events, addEvent }
})
