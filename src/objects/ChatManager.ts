import OpenAI from 'openai'
import { v4 as uuidv4 } from 'uuid'

const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY
const openai = new OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true })
const MESSAGE_PARSE_STRING = /## Body\n\n(.*?)\n\n## Tags\n\n(.*?)\n\n## Summary\n\n(.*)/s

// Chat settings

interface Message {
  id: number
  text: string
  sender: string
  timestamp: string
  emoji?: string
}

export default class ChatManager {
  protected _models = ['gpt-4o-mini', 'gpt-4o']
  protected _roles = ['developer', 'user', 'assistant']

  protected _userId = uuidv4()
  protected _agentId = 'agent'

  protected _userInput = ''
  protected _messages: Message[] = []

  protected _chatGreeting = 'Hello! I am a chatbot. How can I help you today?'
  protected _chatEmoji: string = '💬'

  protected _chatSent: string = ''
  protected _chatResponse: string = ''
  protected _chatSummary: string = ''
  protected _chatStreamResponse: string = ''

  protected _settingStream: boolean = true
  protected _settingChatModel: string = this._models[0]
  protected _settingTemperature = 0.7

  // CHat State
  protected _isLoading = false
  protected _errorMessage = ''

  protected _imageLoading = false
  protected _imageUrls: string[] = []

  constructor() {}

  sendGPTTextChat = async () => {
    if (!this._userInput.trim()) return
    this._isLoading = true

    const previousMessage = this._chatSent
    this._chatSent = this._userInput

    //createMessage(this._chatSent, this._userId, this._chatTagSelection) // Ad
    //const formattedTags = tags.length > 0 ? tags.map((tag) => `[${tag}]`).join(', ') : ''
    const stream = await openai.chat.completions.create({
      model: this._settingChatModel,
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
              ${this._chatSummary}
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
              ${this._chatResponse}
            `,
        },
        {
          role: 'user',
          content: this._chatSent,
          name: this._userId,
        },
      ],
      stream: true,
      temperature: this._settingTemperature,
    })

    let streamedMessage = ''
    this._chatResponse = '' // Reset chat response for the new stream
    this._chatSent = this._userInput

    try {
      // Check if stream is iterable and handle each chunk
      for await (const chunk of stream) {
        const partialContent = chunk.choices[0]?.delta?.content || '' // Use `delta?.content` directly for each chunk
        streamedMessage += partialContent
        this._chatStreamResponse = streamedMessage
      }
    } catch (error) {
      console.error(error)
      this._errorMessage = 'An error occurred while contacting ChatGPT.'
    } finally {
      this._chatResponse += streamedMessage
      // Extract tags and body content from the streamed response
      const [body, tags, summary] = this.parseMarkdownResponse(streamedMessage)
      if (summary && summary.length > 0) this._chatSummary = summary
      const emoji = this.extractFirstEmoji(streamedMessage)

      // Create message with body and tags
      this.recordMessage(body, this._agentId, Date(), emoji)

      console.log('💬 Parsed Body:', body)
      console.log('🏷️ Parsed Tags:', tags)
      console.log('⭐ Parsed Summary:', summary)
      this._isLoading = false
    }
  }

  recordMessage(body: string, sender: string = 'bot', timestamp?: string, emoji?: string) {
    this._messages.push({
      id: this._messages.length,
      text: body,
      sender: sender,
      timestamp: timestamp ?? new Date().toLocaleTimeString(),
      emoji: emoji,
    })
  }

  extractFirstEmoji(text: string) {
    const emojiRegex = /\p{Emoji}/u
    const match = text.match(emojiRegex)
    return match ? match[0] : this._chatEmoji
  }

  clearUserInput() {
    this._userInput = ''
  }

  // Function to extract body and tags from markdown response
  parseMarkdownResponse(response: string): [string, string[], string] {
    const bodyMatch = response.match(MESSAGE_PARSE_STRING)

    if (!bodyMatch) return [response, [], '']

    const body = bodyMatch[1].trim()
    const tags = bodyMatch[2].split(',').map((tag) => tag.trim().replace('[', '').replace(']', ''))
    const summary = bodyMatch[3].trim()

    return [body, tags, summary]
  }

  get validBody() {
    return this._userInput.trim().length > 0
  }

  get models() {
    return this._models
  }

  get roles() {
    return this._roles
  }

  get messages() {
    return this._messages
  }

  get chatSent() {
    return this._chatSent
  }

  get chatResponse() {
    return this._chatResponse
  }

  get chatSummary() {
    return this._chatSummary
  }

  get chatStreamResponse() {
    return this._chatStreamResponse
  }

  get settingStream() {
    return this._settingStream
  }

  get settingChatModel() {
    return this._settingChatModel
  }

  get settingTemperature() {
    return this._settingTemperature
  }

  get isLoading() {
    return this._isLoading
  }

  get errorMessage() {
    return this._errorMessage
  }

  get imageUrls() {
    return this._imageUrls
  }

  get imageLoading() {
    return this._imageLoading
  }

  set chatSent(value: string) {
    this._chatSent = value
  }

  set chatResponse(value: string) {
    this._chatResponse = value
  }

  set chatSummary(value: string) {
    this._chatSummary = value
  }

  set chatStreamResponse(value: string) {
    this._chatStreamResponse = value
  }

  set settingStream(value: boolean) {
    this._settingStream = value
  }

  set settingChatModel(value: string) {
    this._settingChatModel = value
  }

  set settingTemperature(value: number) {
    this._settingTemperature = value
  }

  set isLoading(value: boolean) {
    this._isLoading = value
  }

  set errorMessage(value: string) {
    this._errorMessage = value
  }

  set imageUrls(value: string[]) {
    this._imageUrls = value
  }

  set imageLoading(value: boolean) {
    this._imageLoading = value
  }
}
