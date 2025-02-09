import type { Memory } from '@/types/Memory'

// src/rule-engine/types.ts
export interface Rule {
  id: string
  priority: number
  condition: (text: string, context: { url: string }) => boolean
  action: (memory: Memory) => void
}
