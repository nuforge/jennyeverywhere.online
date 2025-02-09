import type { Rule } from '../types'
// src/rule-engine/rules/decentralizationRule.ts
export const decentralizationRule: Rule = {
  id: 'decentralization',
  priority: 1,
  condition: (text) => text.includes('decentralization') || text.includes('localization'),
  action: (memory) => {
    memory.tags.push({ space: 'theme', name: 'decentralization' })
    memory.metadata.aiConfidence = 0.9
  },
}
