import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import Tag from '@/objects/nu/NuTag'
import Inator from '@/objects/Inator'

const inator = new Inator()

import OpenAI from 'openai'

interface Message {
  id: number
  text: string
  sender: string
  timestamp: string
  tags?: Tag[]
}

const jennyEverywhere = defineStore('jenny_everywhere', () => {
  const userId = ref(uuidv4())
  const agentId = ref('jenny_everywhere')
  const greeting = ref(`New reality... who 'dis ?`)
  const emoji = ref(`🤔`)
  const messages = ref<Message[]>([])

  const chatSummary = ref(
    'summary so far: the app you are using is new and you are making contact with users for the first time. Excited, hopeful, and ready to talk about your adventures.',
  )
  const isLoading = ref(false)
  const errorMessage = ref('')

  const userInput = ref('')
  const snackbar = ref(false)
  const timeout = ref('-1') // -1 for no timeout
  const streamResponse = ref('')
  const chatSent = ref('')
  const chatResponse = ref('')

  const chatTags = ref<Tag[]>([])

  // OpenAI API settings
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY
  const openai = new OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true })

  const bodyValid = computed(() => {
    return userInput.value.trim().length > 0
  })

  const sendGPTMessage = async (tags: string[]) => {
    if (!userInput.value.trim()) return
    isLoading.value = true
    chatSent.value = userInput.value
    clearUserInput()

    createMessage(chatSent.value, userId.value) // Add user message to chat
    const formattedTags = tags.map((tag) => `[${tag}]`).join(', ')

    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `
              You are Jenny Everywhere, a multidimensional explorer trapped in a time loop.
              Your role is to guide the user through an adventure, engaging them in meaningful dialogue.
              Each response must:
                1. Incorporate the summary of past events to maintain continuity.
                2. Keep the conversation relevant and interactive.
                3. 3-6 tags are send with messages to relay intention and memory between you and user. [tag] format
                4. Help build the narrative using the user's input and your previous summary.
                5. Keep responses short, casual, and engaging, like a text message.
                6. The Markdown structure should always look like this example: \n\n## Body\n\n<message content>\n\n## Tags\n\n[keyword], [keyword], [keyword]\n\n## Summary\n\n<summary content>\n\n',
              The conversation summary and context so far is:
              ${chatSummary.value}
            `,
          name: agentId.value,
        },
        {
          role: 'user',
          content: `## body: ${chatSent.value} ## tags: ${formattedTags}`,
          name: userId.value,
        },
      ],
      stream: true,
      temperature: 0.7,
    })

    let streamedMessage = ''
    chatResponse.value = '' // Reset chat response for the new stream

    try {
      // Check if stream is iterable and handle each chunk
      for await (const chunk of stream) {
        const partialContent = chunk.choices[0]?.delta?.content || '' // Use `delta?.content` directly for each chunk
        streamedMessage += partialContent
        streamResponse.value = streamedMessage
        chatResponse.value += partialContent
      }
    } catch (error) {
      console.error(error)
      errorMessage.value = 'An error occurred while contacting ChatGPT.'
    } finally {
      // Extract tags and body content from the streamed response
      const [body, tags, summary] = parseMarkdownResponse(streamedMessage)
      console.log('Parsed Body:', body)
      console.log('Parsed Tags:', tags)
      console.log('Parsed Summary:', summary)
      chatSummary.value = summary
      // Create message with body and tags
      createMessage(body, agentId.value, tags)
      // Log the tags for future use
      console.log('Extracted Tags:', tags)
      isLoading.value = false
    }
  }

  // Function to extract body and tags from markdown response
  function parseMarkdownResponse(response: string): [string, string[], string] {
    const bodyMatch = response.match(/## Body\n\n(.*?)\n\n## Tags\n\n(.*?)\n\n## Summary\n\n(.*)/s)

    if (!bodyMatch) return [response, [], '']

    const body = bodyMatch[1].trim()
    const tags = bodyMatch[2].split(',').map((tag) => tag.trim().replace('[', '').replace(']', ''))
    const summary = bodyMatch[3].trim()

    return [body, tags, summary]
  }
  const createMessage = (body: string, sender?: string, tags?: string[], timestamp?: string) => {
    const tagObjects = (tags || []).map(
      (tag) => new Tag(tag, inator.themecolor(true), inator.icon()),
    )
    chatTags.value = tagObjects
    messages.value.push({
      id: messages.value.length,
      text: body,
      sender: sender || 'bot',
      timestamp: timestamp || new Date().toLocaleTimeString(),
      tags: tagObjects,
    })
  }

  const clearUserInput = () => {
    userInput.value = ''
  }

  return {
    snackbar,
    timeout,
    userInput,
    chatResponse,
    isLoading,
    errorMessage,
    messages,
    bodyValid,
    streamResponse,
    greeting,
    emoji,
    chatSent,
    chatTags,
    sendGPTMessage,
  }
})

export default jennyEverywhere
