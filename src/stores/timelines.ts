import { ref } from 'vue'
import { defineStore } from 'pinia'
import Event from '@/objects/Event'
import Timeline from '@/objects/Timeline'

export const useTimelineStore = defineStore('timeline', () => {
  const timeline = ref<Timeline>(new Timeline('tum'))

  const events = ref(<Event[]>[
    new Event(
      'Career Event',
      'Discovered a wormhole while navigating through unexplored space',
    ).createTag('career event:Discovered a wormhole', 'blue', '$wormhole'),
    new Event(
      'Event 2',
      'Assigned to the USS Mandelbrot and received a promotion to Lieutenant (junior grade)',
    )
      .createTag('rank:Lieutenant (junior grade)', 'sta-career', 'mdi-chevron-double-up')
      .createTag('ship:USS Mandelbrot', 'secondary', 'mdi-rocket'),
  ])
  return { timeline, events }
})
