import { ref } from 'vue'
import { defineStore } from 'pinia'
import Dice from '@/game/Dice'

export const useDiceStore = defineStore('dice', () => {
  const dice = ref<Dice>(new Dice(20))

  return { dice }
})
