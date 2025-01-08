import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

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
  const apiUrl = 'https://api.openai.com/v1/chat/completions'
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY

  // Function to send message to ChatGPT API
  const sendMessage = async () => {
    if (!userInput.value.trim()) return

    console.log(userInput.value)
    isLoading.value = true
    errorMessage.value = ''

    try {
      const response = await axios.post(
        apiUrl,
        {
          model: 'gpt-4o-mini', // Use your preferred model
          messages: [{ role: 'user', content: userInput.value }],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        },
      )

      // Parse response
      chatResponse.value = response.data.choices[0].message.content
      createMessage(chatResponse.value)
      console.log(chatResponse.value)
    } catch (error) {
      console.error(error)
      errorMessage.value = 'An error occurred while contacting ChatGPT.'
    } finally {
      isLoading.value = false
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
    sendMessage,
    createMessage,
    addMessageToChat,
  }
})

export default useChatStore
