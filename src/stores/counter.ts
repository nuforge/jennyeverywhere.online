import { ref } from 'vue'
import { defineStore } from 'pinia'
import Counter from '@/game/Counter'

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(new Counter())

  function increment() {
    counter.value.increment()
  }

  function decrement() {
    counter.value.decrement()
  }

  function count() {
    return counter.value.count
  }

  function icon() {
    return counter.value.getIcon()
  }

  return { counter, increment, decrement, count, icon }
})
