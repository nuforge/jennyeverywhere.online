import { ref } from 'vue'
import { defineStore } from 'pinia'
import Timeline from '@/objects/Timeline'

export const useTimelineStore = defineStore('timeline', () => {
  const timeline = ref<Timeline>(new Timeline('tum'))

  return { timeline}
})
