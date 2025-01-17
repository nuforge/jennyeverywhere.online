import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/nu/Tag'
import Log from '@/objects/Log'
import Timeline from '@/objects/Timeline'

const useTimelineStore = defineStore('timeline', () => {
  const timeline = ref<Timeline>(new Timeline('tum'))

  type TimelineDirection = 'horizontal' | 'vertical'
  type TimelineSide = 'end' | 'start'

  const timelineDirection = ref<TimelineDirection>('vertical')
  const timelineSide = ref<TimelineSide>()
  const timelineOpposite = ref(true)
  const timelineBody = ref(true)

  const events = ref(<Log[]>[
    new Log(
      'Scientific Discovery',
      'Discovered a wormhole while navigating through unexplored space',
    ).createTag('career event:Discovered a wormhole', 'blue', 'mdi-orbit'),
    new Log(
      'Career Promotion',
      'Assigned to the USS Mandelbrot and received a promotion to Lieutenant (junior grade)',
    )
      .createTag('ship:USS Mandelbrot', 'secondary', 'mdi-rocket')
      .createTag('rank:Lieutenant (junior grade)', 'sta-career', 'mdi-chevron-double-up'),
  ])

  const addLog = (newLog: Log, tags: Tag[]) => {
    console.log('add Log: ', newLog)
    const eventObj = new Log(newLog.name, newLog.body)
    tags.forEach((tag) => {
      eventObj.createTag(tag.label, tag.color || 'text', tag.icon || 'mdi-tag') // #FIX HARD CODED VALUES
    })
    events.value.unshift(eventObj)
  }

  const addDiceRoll = () => {
    new Log('Dice Roll', 'Discovered a wormhole while navigating through unexplored space')
  }

  return {
    timeline,
    timelineSide,
    timelineDirection,
    timelineOpposite,
    timelineBody,
    events,
    addLog,
    addDiceRoll,
  }
})

export default useTimelineStore
