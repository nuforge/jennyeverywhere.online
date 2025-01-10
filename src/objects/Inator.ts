import { generate } from 'random-words'
import { LoremIpsum } from 'lorem-ipsum'
import Tag from '@/objects/nu/NuTag'
import IconsJSON from '@/assets/icons/mdi-icons.json'
import basicStopWords from '@/assets/words/stopwords.basic.json'
import commonStopWords from '@/assets/words/stopwords.common.json'
import HTMLTags from '@/assets/words/html.tags.json'
import basicColors from '@/assets/color/colors.basic.json'
import themeColors from '@/assets/color/colors.theme.json'
import backgroundColors from '@/assets/color/colors.background.json'

class Inator {
  private _scale: number
  private _seed: number
  private lastValidMatch: string | null = null

  constructor(scale: number = Math.random()) {
    this._scale = scale
    this._seed = scale * (Math.random() + Math.random())
    return this
  }

  colors = () => {
    return basicColors
  }

  stopWords = () => {
    return commonStopWords
  }

  htmlTags = () => {
    return HTMLTags
  }

  themeColors = () => {
    return themeColors
  }

  keywordTags(keyword: string) {
    const keywords = Tag.extractKeywords(keyword)
    const individualTags = keywords.individual.map((keyword) => {
      console.log('best color', this.bestColor(keyword))
      const tg = new Tag(keyword, this.bestColor(keyword) || '', this.bestIcon(keyword) || '')

      return tg
    })
    return individualTags
  }

  bestIcon(word: string) {
    const iconPotentials = this.checkIcons(word)
    return iconPotentials.length > 0 ? iconPotentials[0] : this.lastValidMatch
  }
  bestColor(word: string) {
    const ColorPotentials = this.checkColors(word)

    return ColorPotentials.length > 0 ? ColorPotentials[0] : this.color()
  }

  checkIcons(word: string) {
    const potentials = IconsJSON.filter((icon) => icon.name.includes(word)).sort((a, b) => {
      const aExact = a.name === word
      const bExact = b.name === word
      if (aExact && !bExact) return -1 // Exact match
      if (bExact && !aExact) return 1 // Exact match
      const aSimilarity = a.name.includes(word)
      const bSimilarity = b.name.includes(word)
      if (aSimilarity && !bSimilarity) return -1 // Include if a is closer
      if (bSimilarity && !aSimilarity) return 1 // Include if b is closer
      const aStarts = a.name.startsWith(word)
      const bStarts = b.name.startsWith(word)
      if (aStarts && !bStarts) return -1 // Starts with `word`
      if (bStarts && !aStarts) return 1 // Starts with `word`
      return 0 // No preference
    })

    if (potentials.length === 0 && this.lastValidMatch) {
      this.lastValidMatch = this.lastValidMatch
    } else {
      // If we have valid results, update the last valid match
      this.lastValidMatch = potentials.length ? `mdi-${potentials[0].name}` : null
    }
    return potentials.map((icon) => `mdi-${icon.name}`)
  }

  checkColors(word: string) {
    const colorpool = [...this.themecolors(), ...this.colors()]
      .filter((color) => color.includes(word))
      .sort((a, b) => {
        const aExact = a === word
        const bExact = b === word
        const aStarts = a.startsWith(word)
        const bStarts = b.startsWith(word)

        if (aExact && !bExact) return -1 // Exact match
        if (bExact && !aExact) return 1 // Exact match
        if (aStarts && !bStarts) return -1 // Starts with `word`
        if (bStarts && !aStarts) return 1 // Starts with `word`
        return 0 // No preference
      })
    return colorpool
  }

  chaosinate(scale: number = this._scale) {
    return generate(Math.random() * scale)
  }

  twoPennies = <T, R>(input: (params: T) => R, params: T): [R, R] => {
    return [input(params), input(params)]
  }

  randomArrayValue = <T>(array: T[]): T => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * array.length)

    // Return the value at the random index
    return array[randomIndex]
  }

  shuffleArray = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)) // Get random index from 0 to i
      ;[array[i], array[j]] = [array[j], array[i]] // Swap elements
    }
    return array
  }

  bodyToTags = (body: string): Tag[] => {
    const words = body.split(' ')
    const tags = words.map((word) => {
      return new Tag(word, this.themecolor(), this.icon())
    })
    return tags
  }

  letter = () => {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26))
  }

  letters = (count: number = 1) => {
    return Array.from({ length: count }, () => this.letter()).join('')
  }

  number = (max: number = 100) => {
    return Math.floor(Math.random() * max)
  } // Generate a random number between 0 and 100

  numbers = (count: number = 1) => {
    return Array.from({ length: count }, () => this.number()).join('')
  } // Generate 5 random numbers

  lorem = (count: number) => {
    const lorem = new LoremIpsum()
    return lorem.generateWords(count)
  } // Generate 5 random words

  word = (count: number = 1): string => {
    return this.words(count).toString()
  } // Generate 5 random words

  words = (count: number): string | string[] => {
    return generate(count)
  } // Generate 5 random words

  sentence = (count: number = 1, inject: string[] = []) => {
    const words = this.words(count)
    const injected = [...words, ...inject]
    if (injected.length > 0) {
      return (this.shuffleArray(injected) as string[]).join(' ')
    }
    return ''
  }

  sentences = (count: number, lorem: boolean) => {
    if (lorem) return this.lorem(count)
    const sentences = [] as string[]
    for (let i = 0; i < count; i++) {
      sentences.push(this.sentence(count))
    }
    return sentences
  } // Generate 5 random sentences

  body = (count: number = 1, lorem: boolean = false) => {
    const sentences = this.sentences(count, lorem)
    return Array.isArray(sentences) ? sentences.join(' ') : sentences
  } // Generate  random sentences

  tag = (count: number = 1) => {
    return new Tag(this.words(count) as string, this.themecolor(), this.icon() as string)
  } // Generate

  tags = (count: number = 1): Tag[] => {
    const tags = [] as Tag[]
    for (let i = 0; i < count; i++) {
      tags.push(this.tag())
    }
    return tags
  } // Generate 5 random tags

  ntag = (space?: string, count: number = 1): Tag => {
    const theme = this.themecolor(false)
    const tag = new Tag(`${this.word()}`, theme, this.icon() as string)
    tag.value = this.words(count).toString()
    return tag
  } // Generate 5 random tags

  ntags = (count: number = 1, space?: string): Tag[] => {
    const tags = [] as Tag[]
    for (let i = 0; i < count; i++) {
      tags.push(this.ntag(space))
    }
    return tags
  } // Generate 5 random tags

  hexcode = (length: number = 6, hash: boolean = true): string => {
    // Generate a random hex string
    let hex = Math.random().toString(16).slice(2)

    // Ensure the length matches the desired value
    while (hex.length < length) {
      hex += Math.random().toString(16).slice(2)
    }

    // Truncate to the exact length
    hex = hex.slice(0, length)

    // Return with or without a hash
    return hash ? `#${hex}` : hex
  }

  hexcodes = (count: number = 1, length: number = 6, hash: boolean = true): string[] => {
    return Array.from({ length: count }, () => this.hexcode(length, hash))
  }

  icon = () => {
    return this.icons(1).toString()
  } // Generate 1 random icon

  icons = (count: number = 1): string[] => {
    const iconList = IconsJSON.map((icon) => `mdi-${icon.name}`)
    const randomIcons: string[] = []

    // Ensure count doesn't exceed available icons
    const maxCount = Math.min(count, iconList.length)

    while (randomIcons.length < maxCount) {
      const randomIndex = Math.floor(Math.random() * iconList.length)
      const randomIcon = iconList[randomIndex]

      // Add to result if duplicates are not allowed
      if (!randomIcons.includes(randomIcon)) {
        randomIcons.push(randomIcon)
      }
    }

    return randomIcons
  } // Generate 5 random icons

  iconTag = (): Tag => {
    const icon = this.randomArrayValue(IconsJSON)
    return new Tag(`${icon.name}`, `mdi-${icon.name}`)
  }

  iconTags = (count: number = 1): Tag[] => {
    const formatName = (name: string) => {
      return name
        .replace(/-/g, ' ') // Replace hyphens with spaces
        .replace(/\bmdi\b/gi, '') // Remove "mdi" prefix (if needed, optional)
        .trim() // Clean up leading/trailing spaces
    }

    const getColor = () => this.themecolor()

    const icons = IconsJSON.map(
      (icon) => new Tag(formatName(icon.name), getColor(), `mdi-${icon.name}`),
    )
    return this.shuffleArray(icons).slice(0, count)
  }

  colorTags = (): Tag[] => {
    return this.colors().map((color) => new Tag(`color:${color}`, color, 'mdi-circle-opacity'))
  }

  allcolors = () => {
    return [...this.colors(), ...this.themecolors()]
  }
  color = () => {
    return this.randomArrayValue(this.allcolors())
  } // Generate 1 random color

  themecolor = (includeBackgroundColors: boolean = true) => {
    return this.randomArrayValue(this.themecolors(includeBackgroundColors))
  } // G

  themecolors = (includeBackgroundColors: boolean = true) => {
    return [...themeColors, ...(includeBackgroundColors ? this.bgcolors() : [])]
  }

  bgcolors = () => {
    return backgroundColors
  }

  stopwords = () => {
    return basicStopWords
  }
}

export default Inator
