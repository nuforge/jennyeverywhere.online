export class TagUtils {
  static extractKeywords(input: string): { individual: string[]; grouped: string[] } {
    const normalized = input.trim().toLowerCase().replace(/\s+/g, ' ')
    const words = normalized.match(/\w+/g) || []
    const individual = Array.from(new Set(words))
    const grouped = new Set<string>()

    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j <= words.length; j++) {
        const phrase = words.slice(i, j).join(' ')
        if (phrase.split(' ').length > 1) grouped.add(phrase)
      }
    }

    return {
      individual,
      grouped: Array.from(grouped),
    }
  }

  static extractPhrases(input: string): string[] {
    const words = input.match(/\w+/g) || []
    const phrases = new Set<string>()

    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j <= words.length; j++) {
        const phrase = words.slice(i, j).join(' ')
        phrases.add(phrase)
      }
    }
    return Array.from(phrases)
  }
}
