import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

import OpenAI from 'openai'

interface Message {
  id: number
  text: string
  sender: string
  timestamp: string
}

const useChatStore = defineStore('chat', () => {
  const userId = ref(uuidv4().toString())

  const greeting = ref(`New reality... who this ?`)
  const emoji = ref(`🤔`)

  const recipientId = ref('jenny_everywhere')
  const model = ref('gpt-4o-mini')

  const userInput = ref('')

  const messages = ref<Message[]>([])

  const chatSent = ref('')
  const chatResponse = ref('')

  const isLoading = ref(false)
  const errorMessage = ref('')

  const snackbar = ref(false)
  const timeout = ref('3000')

  // OpenAI API settings
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY
  const openai = new OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true })

  const bodyValid = computed(() => {
    return userInput.value.trim().length > 0
  })

  const sendGPTMessage = async () => {
    if (!userInput.value.trim()) return
    isLoading.value = false
    console.log('sendGPTMessage userInput.value', userInput.value)
    chatSent.value = userInput.value
    clearUserInput()

    createMessage(chatSent.value, userId.value) // Add user message to chat
    const stream = await openai.chat.completions.create({
      model: model.value,
      messages: [
        {
          role: 'developer',
          content: [
            {
              type: 'text',
              text: `You are Jenny Everywhere. You can exist in any universe. You are an explorer, a shapeshifter, and a hero. You are known for your goggles, your scarf, and your ability to ask really good questions, and make really bad guesses. You can who can be anyone, anywhere, at any time. You are Jenny Everywhere, this chat session is you on an interdimensional communication device (cell phone) in the middle of an adventure and you need the user's help to figure out how to progress in your adventure. use markup language to format with bold, italics, and surround important keyword or phrases with square brackets [word].`,
            },
          ],
          name: recipientId.value,
        },
        { role: 'user', content: chatSent.value, name: userId.value },
      ],
      stream: true,
    })

    let streamedMessage = ''
    chatResponse.value = '' // Reset chat response for the new stream

    try {
      for await (const chunk of stream) {
        const partialContent = chunk.choices[0]?.delta?.content || ''
        streamedMessage += partialContent
        chatResponse.value += partialContent
        console.log(' for await', chatResponse.value)
      }
    } catch (error) {
      console.error(error)
      errorMessage.value = 'An error occurred while contacting ChatGPT.'
    } finally {
      createMessage(streamedMessage, recipientId.value)
      isLoading.value = false
      console.log('finally', chatResponse.value)
    }
  }

  const getMessages = () => {
    return messages.value
  }

  const createMessage = (body: string, sender?: string, timestamp?: string) => {
    messages.value.push({
      id: messages.value.length,
      text: body,
      sender: sender || 'bot',
      timestamp: timestamp || new Date().toLocaleTimeString(),
    })
  }

  const addMessageToChat = (message: Message) => {
    messages.value.push(message)
  }

  const toggleChat = () => {
    snackbar.value = !snackbar.value
  }

  const displayChat = () => {
    return (snackbar.value = true)
  }

  const hideChat = () => {
    snackbar.value = false
  }

  const isChatVisible = () => {
    return snackbar.value
  }

  const clearUserInput = () => {
    userInput.value = ''
  }

  return {
    snackbar,
    timeout,
    greeting,
    emoji,
    userInput,
    chatResponse,
    isLoading,
    errorMessage,
    messages,
    bodyValid,
    getMessages,
    createMessage,
    addMessageToChat,
    sendGPTMessage,
    hideChat,
    displayChat,
    toggleChat,
    isChatVisible,
  }
})

export default useChatStore
