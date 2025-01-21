export const NAMESPACE_SPLIT_CHAR = ':' as const
export const TAG_WHITESPACE_REPLACER = '-' as const
export const TAG_WHITESPACE = ' ' as const
export const TAG_EMPTYSPACE = '' as const
export const REGEX_SPACE = /\s+/g
export const REGEX_WORD = /\w+/g

// Utility class for string operations
export default class StringUtils {
  static CleanString(
    text?: string,
    options: {
      toLowerCase?: boolean
      trimWhitespace?: boolean
      replaceSpaces?: boolean
      spaceReplacer?: string
    } = {
      toLowerCase: false,
      trimWhitespace: true,
      replaceSpaces: false,
      spaceReplacer: TAG_WHITESPACE_REPLACER,
    },
  ): string {
    if (!text) return TAG_EMPTYSPACE
    let result = text

    const {
      toLowerCase = false,
      trimWhitespace = true,
      replaceSpaces = false,
      spaceReplacer = TAG_WHITESPACE_REPLACER,
    } = options

    if (toLowerCase) result = result.toLowerCase()
    if (trimWhitespace) result = result.trim()
    if (replaceSpaces) result = result.replace(REGEX_SPACE, spaceReplacer)

    return result
  }

  static normalizeTagName(name: string | number): string {
    return this.CleanString(String(name), {
      toLowerCase: true,
      trimWhitespace: true,
      replaceSpaces: true,
      spaceReplacer: TAG_WHITESPACE_REPLACER,
    })
  }

  static parseString(input: string): { space?: string; name: string } {
    const normalized = this.CleanString(input)
    const result: { space?: string; name: string } = { name: TAG_EMPTYSPACE }
    const [space, name] = normalized.split(NAMESPACE_SPLIT_CHAR)
    if (name) {
      result.space = space
      result.name = name
    } else {
      result.space = undefined
      result.name = normalized
    }
    return result
  }

  static extractKeywords(input: string): { individual: string[]; grouped: string[] } {
    const normalized = this.CleanString(input, { toLowerCase: true, trimWhitespace: true })
    const words = normalized.match(REGEX_WORD) || []
    const individual = Array.from(new Set(words))
    const grouped = new Set<string>()
    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j <= words.length; j++) {
        const phrase = words.slice(i, j).join(TAG_WHITESPACE)
        if (phrase.split(TAG_WHITESPACE).length > 1) grouped.add(phrase)
      }
    }
    return { individual, grouped: Array.from(grouped) }
  }

  static extractPhrases(input: string, maxPhraseLength: number = 5): string[] {
    const words = input.match(REGEX_WORD) || []
    const phrases = new Set<string>()

    words.forEach((_, i) => {
      for (let j = i + 1; j <= Math.min(i + maxPhraseLength, words.length); j++) {
        phrases.add(words.slice(i, j).join(TAG_WHITESPACE))
      }
    })

    return Array.from(phrases)
  }

  static extractScopedKeywords(input: string): string[] {
    const normalized = StringUtils.CleanString(input, { toLowerCase: true, trimWhitespace: true })
    //input.trim().toLowerCase().replace(/\s+/g, TAG_WHITESPACE)
    return normalized.split(NAMESPACE_SPLIT_CHAR)
  }
}
