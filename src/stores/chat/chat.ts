import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/nu/v1/ValTag'

import ChatManager from '@/objects/chat/ChatManager'
const chatManager = new ChatManager()

const useChatStore = defineStore('chat', () => {
  // Memory
  const chatTags = ref<Tag[]>([])
  const chatTagSelection = ref<string[]>([])

  const clearOnSubmit = ref(false)

  function sendGPTMessage() {
    chatManager.sendGPTTextChat()
  }

  return {
    clearOnSubmit,
    chatTags,
    chatTagSelection,
    sendGPTMessage,
  }
})

export default useChatStore
