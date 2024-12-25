import { ref } from 'vue'
import { defineStore } from 'pinia'
import Event from '@/objects/Event'
import Timeline from '@/objects/Timeline'

export const useTimelineStore = defineStore('timeline', () => {
  const timeline = ref<Timeline>(new Timeline('tum'))

  const events = ref(<Event[]>[
    new Event('Career Event', 'Discovered a wormhole while navigating through unexplored space')
      .addTag('career event:Discovered a wormhole')
      .addIcon('$wormhole')
      .addColor('blue'),
    new Event(
      'Event 2',
      'Assigned to the USS Mandelbrot and received a promotion to Lieutenant (junior grade)',
    )
      .addTag('rank:Lieutenant (junior grade)')
      .addIcon('mdi-chevron-double-up')
      .addColor('sta-career')
      .addTag('ship:USS Mandelbrot')
      .addIcon('mdi-rocket')
      .addColor('secondary'),
  ])
  return { timeline, events }
})
