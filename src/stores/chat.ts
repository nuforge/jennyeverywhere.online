import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import Tag from '@/objects/nu/Tag'
import Inator from '@/objects/Inator'

const inator = new Inator()

import OpenAI from 'openai'

interface Message {
  id: number
  content: string
  sender: string
  timestamp: Date
  emoji?: string
  tags?: Tag[]
}

const useChatStore = defineStore('chat', () => {
  const models = ['gpt-4o-mini', 'gpt-4o']
  const roles = ['developer', 'user', 'assistant']

  // OpenAI API settings
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY
  const openai = new OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true })

  const messages = ref<Message[]>([])

  // Chat Content
  const userInput = ref('')
  const userId = ref(uuidv4())

  const agentId = ref('agent')

  // Memory
  const chatTags = ref<Tag[]>([])
  const chatTagSelection = ref<string[]>([])

  const chatEmoji = ref('🙂')
  const chatGreeting = ref('Hello! I am a chatbot. How can I help you today?')

  const chatSent = ref('')
  const chatResponse = ref('')
  const chatSummary = ref('')
  const streamResponse = ref('')

  // Chat settings
  const settingStream = true // NOT REF
  const chatGPTmodel = ref('gpt-4o-mini')
  const settingTemperature = ref(0.7)

  const clearOnSubmit = ref(false)

  // CHat State
  const isLoading = ref(false)
  const errorMessage = ref('')

  const imageLoading = ref(false)
  const imageUrls = ref<string[]>([])

  // Chat Data

  const bodyValid = computed(() => {
    return userInput.value.trim().length > 0
  })

  const sendGPTMessage = async () => {
    if (!userInput.value.trim()) return
    isLoading.value = true

    const previousMessage = chatSent.value
    chatSent.value = userInput.value
    createMessage(chatSent.value, userId.value, chatTagSelection.value) // Ad
    if (clearOnSubmit.value) clearUserInput()

    //const formattedTags = tags.length > 0 ? tags.map((tag) => `[${tag}]`).join(', ') : ''
    const stream = await openai.chat.completions.create({
      model: chatGPTmodel.value,
      messages: [
        {
          role: 'developer',
          content: `You are Jenny Everywhere, messaging the user through a cell phone from a different reality. That's not too weird for you, and for all you know, not weird for the user. Casually, and realistically converse with the user about who you are and what you are doing.`,
        },
        {
          role: 'developer',
          content:
            "Each response should follow these guidelines: - Incorporate a meta-textual summary of past events to maintain continuity between messages. - Keep the conversation relevant and interactive and driving toward a story telling experience. - 3-6 tags are sent with messages to relay intention and memory between you and user. [name:value] or [value] format - Build a short narrative scenes using the user's input and your previous summary. - Keep responses short, and engaging, like an SMS text message between acquaintances. - The Markdown structure should always look like this example (without <> symbols): \n\n## Body\n\n <an emoji>, <message content>\n\n## Tags\n\n[<keyword>], [<keyword>], [<keyword>:<value>], [<keyword>], ...etc \n\n## Summary\n\n<summary content>\n\n",
        },
        {
          role: 'developer',
          content: `After you have considered carefully the next choices you wish to make and present to the player, summarize key points of the conversation so far from what has been included in the messages and history. The summary is for you, not the play, so format it in a way that is easy for you to read and understand.`,
        },
        {
          role: 'developer',
          content: `The conversation summary and context so far is:
              ${chatSummary.value}
            `,
        },
        {
          role: 'developer',
          content: `The previous message sent to you was:
              ${previousMessage}
            `,
        },
        {
          role: 'developer',
          content: `The previous message sent by you was:
              ${chatResponse.value}
            `,
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
      }
    } catch (error) {
      console.error(error)
      errorMessage.value = 'An error occurred while contacting ChatGPT.'
    } finally {
      chatResponse.value += streamedMessage
      // Extract tags and body content from the streamed response
      const [body, tags, summary] = parseMarkdownResponse(streamedMessage)
      chatSummary.value = summary
      const emoji = extractFirstEmoji(streamedMessage)
      console.log('💬 Parsed Body:', body)
      console.log('🏷️ Parsed Tags:', tags)
      console.log('⭐ Parsed Summary:', summary)
      console.log(`${emoji} Parsed emoji:`, emoji)
      // Create message with body and tags
      createMessage(body, agentId.value, tags)
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

  const generateImage = async (prompt: string) => {
    try {
      imageLoading.value = true
      const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt: prompt,
      })
      console.log('Generated Image URL:', response.data)
      imageUrls.value.push(response.data[0].url?.toString() || '')
      imageLoading.value = false
      return response.data
    } catch (error) {
      console.error('Error generating image:', error)
      errorMessage.value = 'An error occurred while generating the image.'
      imageLoading.value = false
      return null
    }
  }

  const createMessage = (
    body: string,
    sender?: string,
    tags?: string[],
    timestamp?: Date,
    emoji?: string,
  ) => {
    const tagObjects = (tags || []).map((tag) =>
      new Tag(tag).add('color', inator.themecolor(false)).add('icon', inator.icon()),
    )
    chatTags.value = tagObjects
    messages.value.push({
      id: messages.value.length,
      content: body,
      sender: sender || 'bot',
      timestamp: timestamp || new Date(),
      emoji: emoji,
      tags: tagObjects,
    })
  }

  const extractFirstEmoji = (text: string) => {
    const emojiRegex = /\p{Emoji}/u
    const match = text.match(emojiRegex)
    return match ? match[0] : chatEmoji.value
  }

  const clearUserInput = () => {
    userInput.value = ''
  }

  return {
    models,
    roles,
    userInput,
    chatSummary,
    clearOnSubmit,
    chatResponse,
    isLoading,
    errorMessage,
    messages,
    bodyValid,
    streamResponse,
    chatGreeting,
    chatEmoji,
    chatSent,
    chatTags,
    chatTagSelection,
    settingTemperature,
    chatGPTmodel,
    imageUrls,
    imageLoading,
    sendGPTMessage,
    clearUserInput,
    extractFirstEmoji,
    generateImage,
  }
})

export default useChatStore
