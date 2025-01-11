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

const jennyEverywhere = defineStore('jenny_everywhere', () => {
  const userId = ref(uuidv4())
  const agentId = ref('jenny_everywhere')
  const messages = ref<Message[]>([])

  const summary = ref(
    'summary so far: the app you are using is new and you are making contact with users for the first time. Excited, hopeful, and ready to talk about your adventures.',
  )

  const isLoading = ref(false)
  const errorMessage = ref('')

  const snackbar = ref(false)
  const timeout = ref('-1') // -1 for no timeout
  const streamResponse = ref('')

  const greeting = ref(`New reality... who 'dis ?`)
  const emoji = ref(`🤔`)

  const model = ref('gpt-4o-mini')

  const userInput = ref('')

  const chatSent = ref('')
  const chatResponse = ref('')
  const responseJSON = ref<{ title: string; body: string; summary: string; tags: string[] }>({
    title: '',
    body: '',
    summary: '',
    tags: [],
  })

  // OpenAI API settings
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY
  const openai = new OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true })

  const bodyValid = computed(() => {
    return userInput.value.trim().length > 0
  })

  const sendGPTMessage = async () => {
    if (!userInput.value.trim()) return
    isLoading.value = true
    //console.log('sendGPTMessage userInput.value', userInput.value)

    chatSent.value = userInput.value
    clearUserInput()

    createMessage(chatSent.value, userId.value) // Add user message to chat

    const stream = await openai.chat.completions.create({
      model: model.value,
      messages: [
        {
          role: 'system',
          content:
            'You are the character Jenny Everywhere, a multidimensional explorer trapped in a time loop. Are are texting the user and asking for choice With each response, you should: \n\n1. start converstation as though this is your countless loop. \n2. Provide a meta-summary of the conversation so far that will encode data for an AI to extrapolate information about the adventure so far. \n3. Generate and return a list of 3 to 10 relevant tags some from the body of the text or summary. \n\nThe JSON structure should always look like this: \n\n\n{ \n "title": "a short name for easy reference" , \n "body": "...", \n  "summary": "meta summary of conversation helpful for an ai to remember and continue conversation", \n  "tags": ["tag1", "tag2", ...] \n}\n\nBe creative, interactive, and guide the user with meaningful choices. This is meant to be a fun and MEMORABLE experience. Keep body of responses short, causally toned, and engaging like a decent text message.',
          name: agentId.value,
        },
        {
          role: 'system',
          content: summary.value,
          name: agentId.value,
        },
        { role: 'user', content: chatSent.value, name: userId.value },
      ],
      stream: true,
      temperature: 0.7,
    })

    let streamedMessage = ''
    chatResponse.value = '' // Reset chat response for the new stream

    try {
      // Check if stream is iterable and handle each chunk
      for await (const chunk of stream) {
        // Access the chunk content directly (avoid `choices`)
        const partialContent = chunk.choices[0]?.delta?.content || '' // Use `delta?.content` directly for each chunk
        streamedMessage += partialContent
        streamResponse.value = streamedMessage
        chatResponse.value += partialContent
        //console.log('streaming chunk', chatResponse.value)
      }
    } catch (error) {
      console.error(error)
      errorMessage.value = 'An error occurred while contacting ChatGPT.'
    } finally {
      summary.value = chatResponse.value
      // Process and send back the response with additional tags, summaries, and instructions
      const response = {
        body: streamedMessage,
        title: 'Story continues...', // Title formatted for Markdown
        summary: 'Updated conversation summary here...', // Placeholder for summary
        tags: ['[adventure]', '[time_loop]', '[exploration]'], // Tags based on the plot/mood
        imageRequest: false, // Optional function to trigger image request
      }
      createMessage(response.body, agentId.value)

      isLoading.value = false
      //console.log('finally', chatResponse.value)
    }
  }
  const getTags = () => responseJSON.value.tags
  const getTitle = () => responseJSON.value.title
  const getBody = () => responseJSON.value.body
  const getSummary = () => responseJSON.value.summary

  // Helper Functions (you'll implement these based on response structure)
  function parseTitle(response: string): string {
    // Extract title from the AI response
    return response.split('\n')[0]
  }

  function parseBody(response: string): string {
    // Extract body from the AI response
    return response.split('\n')[1]
  }

  function parseSummary(response: string): string {
    // Extract summary from the response
    return response.split('\n')[2]
  }

  function extractTags(response: string): string[] {
    // Use regex or some other method to extract tags
    return response.match(/\[.*?\]/g) || []
  }

  function extractImageRequest(response: string): string | undefined {
    // Optionally extract image request if it's in the response
    const match = response.match(/image request: (.*)/)
    return match ? match[1] : undefined
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
    streamResponse,
    chatSent,
    responseJSON,
    getTitle,
    getTags,
    getBody,
    getSummary,
    sendGPTMessage,
    parseTitle,
    parseBody,
    parseSummary,
    extractTags,
    extractImageRequest,
    getMessages,
    createMessage,
    addMessageToChat,
    hideChat,
    displayChat,
    toggleChat,
    isChatVisible,
  }
})

export default jennyEverywhere
