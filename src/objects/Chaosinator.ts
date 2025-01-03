import { generate } from 'random-words'
import { LoremIpsum } from 'lorem-ipsum'
import Tag from '@/objects/Tag'
import IconsJSON from '@/assets/icons.json'

class Chaosinator {
  private _scale: number
  private _seed: number

  constructor(scale: number = Math.random()) {
    this._scale = scale
    this._seed = scale * (Math.random() + Math.random())
    return this
  }

  number = (max: number = 100) => {
    return Math.floor(Math.random() * max)
  } // Generate a random number between 0 and 100

  lorem = (count: number) => {
    const lorem = new LoremIpsum()
    return lorem.generateWords(count)
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
    console.log(sentences)
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
    return new Tag(
      `${space ?? this.words(count)}:${this.words(count)}`,
      this.color(),
      this.icon() as string,
    )
  } // Generate 5 random tags

  ntags = (count: number = 1, space?: string): Tag[] => {
    const tags = [] as Tag[]
    for (let i = 0; i < count; i++) {
      tags.push(this.ntag(space))
    }
    return tags
  } // Generate 5 random tags

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

  color = () => {
    return this.randomArrayValue([...this.colors(), ...this.themecolors()])
  } // Generate 1 random color

  colors = () => {
    return [
      'red',
      'pink',
      'purple',
      'deep-purple',
      'indigo',
      'blue',
      'light-blue',
      'cyan',
      'teal',
      'green',
      'light-green',
      'lime',
      'yellow',
      'amber',
      'orange',
      'deep-orange',
      'brown',
      'blue-grey',
      'grey',
    ]
  }

  themecolor = () => {
    return this.randomArrayValue(this.themecolors())
  } // G

  themecolors = () => {
    return [
      'primary',
      'secondary',
      'accent',
      'error',
      'info',
      'success',
      'warning',
      'background',
      'surface',
    ]
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
}

export default Chaosinator
