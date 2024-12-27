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
    ).createTag('career event:Discovered a wormhole', 'blue', '$wormhole'),
    new Event(
      'Career Promotion',
      'Assigned to the USS Mandelbrot and received a promotion to Lieutenant (junior grade)',
    )
      .createTag('rank:Lieutenant (junior grade)', 'sta-career', 'mdi-chevron-double-up')
      .createTag('ship:USS Mandelbrot', 'secondary', 'mdi-rocket'),
  ])

  const addEvent = (newEvent: Event, tags: Array<Tag>) => {
    const event = new Event(newEvent.title, newEvent.description, newEvent.date)
    events.value.push(event)
    console.log('Adding event:', event)
  }

  return { timeline, events, addEvent }
})
