import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const API_KEY = process.env.API_KEY
const API_URL = 'https://api.openai.com/v1/chat/completions'

export const sendMessageToChatGPT = async (messages: object) => {
  console.log(messages)
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-4o-mini', // Specify the model
        messages: messages, // Example: [{ role: 'user', content: 'Hi!' }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    )
    return response.data.choices[0].message.content
  } catch (error) {
    console.error('Error communicating with ChatGPT:', error)
    throw error
  }
}

export default sendMessageToChatGPT
