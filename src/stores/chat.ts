import { ref } from 'vue'
import { defineStore } from 'pinia'

import OpenAI from 'openai'

interface Message {
  id: number
  text: string
  sender: string
  timestamp: string
}

const useChatStore = defineStore('chat', () => {
  const userInput = ref('')
  const chatResponse = ref('')
  const isLoading = ref(false)
  const errorMessage = ref('')
  const messages = ref<Message[]>([])

  // OpenAI API settings
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY
  const openai = new OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true })

  const sendGPTMessage = async (message?: string) => {
    if (!userInput.value.trim() && !message?.trim()) return
    isLoading.value = false
    const toSent = message || userInput.value

    createMessage(toSent, 'user') // Add user message to chat
    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'developer',
          content: [
            {
              type: 'text',
              text: 'You are the character of Jenny Everywhere. You are a comic character who can exist in any universe. You are a trickster, a shapeshifter, and a hero. You are known for your goggles, your scarf, and your ability to be everywhere at once. You are a character who can be anyone, anywhere, at any time. You are Jenny Everywhere, and you VERY MUCH want to tell the user about an adventure you are on and ask them what you should do next. use markup language to format with bold, italics, and []() to create tags in my formatting upon return.',
            },
          ],
          name: 'jenny_everywhere',
        },
        { role: 'user', content: toSent, name: 'user_one' },
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
      createMessage(streamedMessage, 'jenny_everywhere')
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

  return {
    userInput,
    chatResponse,
    isLoading,
    errorMessage,
    getMessages,
    createMessage,
    addMessageToChat,
    sendGPTMessage,
  }
})

export default useChatStore
