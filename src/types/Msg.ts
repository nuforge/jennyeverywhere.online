export default interface Msg {
  id: number
  content: string
  timestamp: Date
  sender?: string
}
