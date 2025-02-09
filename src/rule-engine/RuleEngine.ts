import type { Rule } from './types'
import type { Memory } from '@/types/Memory'
import Tag from '@/objects/nu/Tag'
export interface Memory {
  id: string // Unique ID (UUID or hash)
  content: string // Text/content of the memory
  tags: Tag[] // Associated tags
  metadata?: {
    source?: string // URL or context where the memory was created
    timestamp?: Date // When the memory was stored
    personaId?: string // Associated AI persona
  }
}
export class RuleEngine {
  private rules: Rule[] = []

  addRule(rule: Rule) {
    this.rules.push(rule)
    this.rules.sort((a, b) => b.priority - a.priority) // Higher priority first
  }

  process(text: string, context = { url: window.location.href }): Memory[] {
    return this.rules
      .filter((rule) => rule.condition(text, context))
      .map((rule) => {
        const memory = this.createMemoryFromText(text)
        rule.action(memory)
        return memory
      })
  }

  createMemoryFromText(text: string): Memory {
    const newMemory = {
      id: Math.random().toString(36).substring(7),
      content: text,
      tags: [],
      metadata: {
        source: window.location.href,
        timestamp: new Date(),
      },
    }
    return newMemory
  }
}
