import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import Tag from '@/objects/nu/Tag'
import Inator from '@/objects/Inator'
import TagFactory from '@/objects/nu/TagFactory' // Import TagFactory

import prompts from '@/assets/gpt/prompts.json'

const inator = new Inator()

import OpenAI from 'openai'

interface Message {
  id: number
  text: string
  sender: string
  timestamp: string
  emoji?: string
  tags?: Tag[]
}

const jennyEverywhere = defineStore('jenny_everywhere', () => {
  const messages = ref<Message[]>([])
  const userId = ref(uuidv4())
  const agentId = ref('jenny_everywhere')
  const greeting = ref(`New reality... who 'dis ?`)
  const chatSummary = ref(
    'summary so far: the app you are using is new and you are making contact with users for the first time. Excited, hopeful, and ready to talk about your adventures.',
  )
  const emoji = ref(`🤔`)

  const settingStream = true // NOT REF
  const chatGPTmodel = ref('gpt-4o-mini')
  const settingTemperature = ref(0.7)

  const isLoading = ref(false)
  const errorMessage = ref('')

  const userInput = ref('')

  const snackbar = ref(false)
  const timeout = ref('3000') // -1 for no timeout

  const chatSent = ref('')
  const streamResponse = ref('')
  const chatResponse = ref('')

  const chatTags = ref<Tag[]>([])
  const chatTagSelection = ref<string[]>([])

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

    createMessage(chatSent.value, userId.value, chatTagSelection.value) // Ad
    const formattedTags = tags.length > 0 ? tags.map((tag) => `[${tag}]`).join(', ') : ''
    const stream = await openai.chat.completions.create({
      model: chatGPTmodel.value,
      messages: [
        {
          role: prompts[0].role as 'system' | 'user' | 'assistant',
          content: prompts[0].content,
          name: agentId.value,
        },
        {
          role: 'system',
          content: `The conversation summary and context so far is:
              ${chatSummary.value}
            `,
          name: agentId.value,
        },
        {
          role: 'system',
          content: `User tags associated with this message Use these to influence direction of store and the tags sent in return: ${formattedTags}`,
          name: agentId.value,
        },

        {
          role: 'user',
          content: chatSent.value,
          name: userId.value,
        },
      ],
      stream: settingStream,
      temperature: settingTemperature.value,
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
      const emoji = extractFirstEmoji(body)
      //console.log('Parsed Body:', body)
      //console.log('Parsed Tags:', tags)
      console.log('Extracted Tags:', tags)
      console.log('Parsed Summary:', summary)
      chatSummary.value = summary
      // Create message with body and tags
      createMessage(body, agentId.value, tags, emoji)
      // Log the tags for future use
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

  const createMessage = (
    body: string,
    sender?: string,
    tags?: string[],
    timestamp?: string,
    emoji?: string,
  ) => {
    const tagObjects = (tags || []).map((tag) =>
      TagFactory.create(tag, { color: inator.themecolor(false), icon: inator.icon() }),
    )
    chatTags.value = tagObjects
    messages.value.push({
      id: messages.value.length,
      text: body,
      sender: sender || 'bot',
      timestamp: timestamp || new Date().toLocaleTimeString(),
      emoji: emoji,
      tags: tagObjects,
    })
  }

  const extractFirstEmoji = (text: string) => {
    const emojiRegex = /\p{Emoji}/u
    const match = text.match(emojiRegex)
    return match ? match[0] : emoji.value
  }

  const clearUserInput = () => {
    userInput.value = ''
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
    chatTagSelection,
    settingTemperature,
    chatGPTmodel,
    sendGPTMessage,
    hideChat,
    displayChat,
    toggleChat,
    isChatVisible,
    clearUserInput,
    extractFirstEmoji,
  }
})

export default jennyEverywhere
