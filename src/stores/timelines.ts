import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/Tag'
import Event from '@/objects/Event'
import Timeline from '@/objects/Timeline'

export const useTimelineStore = defineStore('timeline', () => {
  const timeline = ref<Timeline>(new Timeline('tum'))

  type TimelineDirection = 'horizontal' | 'vertical'
  type TimelineSide = 'end' | 'start'

  const timelineDirection = ref<TimelineDirection>('vertical')
  const timelineSide = ref<TimelineSide>()
  const timelineOpposite = ref(true)
  const timelineBody = ref(true)

  const events = ref(<Event[]>[
    new Event(
      'Scientific Discovery',
      'Discovered a wormhole while navigating through unexplored space',
    ).createTag('career event:Discovered a wormhole', 'blue', 'mdi-orbit'),
    new Event(
      'Career Promotion',
      'Assigned to the USS Mandelbrot and received a promotion to Lieutenant (junior grade)',
    )
      .createTag('ship:USS Mandelbrot', 'secondary', 'mdi-rocket')
      .createTag('rank:Lieutenant (junior grade)', 'sta-career', 'mdi-chevron-double-up'),
  ])

  const addEvent = (newEvent: Event, tags: Tag[]) => {
    console.log('add Event: ', newEvent)
    const eventObj = new Event(newEvent.name, newEvent.body)
    tags.forEach((tag) => {
      eventObj.createTag(tag.name, tag.color || 'text', tag.icon || 'mdi-tag') // #FIX HARD CODED VALUES
    })
    events.value.unshift(eventObj)
  }

  const addDiceRoll = () => {
    new Event('Dice Roll', 'Discovered a wormhole while navigating through unexplored space')
  }

  return {
    timeline,
    timelineSide,
    timelineDirection,
    timelineOpposite,
    timelineBody,
    events,
    addEvent,
    addDiceRoll,
  }
})
