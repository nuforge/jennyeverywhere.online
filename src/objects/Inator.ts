import { generate } from 'random-words'
import { LoremIpsum } from 'lorem-ipsum'
import Tag from '@/objects/Tag'
import IconsJSON from '@/assets/mdi-icons.json'

class Inator {
  private _scale: number
  private _seed: number

  constructor(scale: number = Math.random()) {
    this._scale = scale
    this._seed = scale * (Math.random() + Math.random())
    return this
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
      this.themecolor(),
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

  color = () => {
    return this.randomArrayValue([...this.colors(), ...this.themecolors()])
  } // Generate 1 random color

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

  htmlTags = () => {
    return [
      'org',
      'com',
      'net',
      'a',
      'b',
      'blockquote',
      'br',
      'button',
      'canvas',
      'cite',
      'code',
      'div',
      'em',
      'footer',
      'http',
      'https',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'header',
      'i',
      'img',
      'input',
      'label',
      'li',
      'link',
      'main',
      'nav',
      'ol',
      'p',
      'pre',
      'section',
      'span',
      'strong',
      'style',
      'table',
      'tbody',
      'td',
      'textarea',
      'th',
      'thead',
      'tr',
      'ul',
      'video',
      'wbr',
    ]
  }

  stopwords = () => {
    return ['the', 'is', 'a', 'and', 'for', 'of', 'from', 'its']
  }

  commonStopWords = () => {
    return [
      'i',
      'me',
      'my',
      'myself',
      'we',
      'our',
      'ours',
      'ourselves',
      'you',
      'your',
      'yours',
      'yourself',
      'yourselves',
      'he',
      'him',
      'his',
      'himself',
      'she',
      'her',
      'hers',
      'herself',
      'it',
      'its',
      'itself',
      'they',
      'them',
      'their',
      'theirs',
      'themselves',
      'what',
      'which',
      'who',
      'whom',
      'this',
      'that',
      'these',
      'those',
      'am',
      'is',
      'are',
      'was',
      'were',
      'be',
      'been',
      'being',
      'have',
      'has',
      'had',
      'having',
      'do',
      'does',
      'did',
      'doing',
      'a',
      'an',
      'the',
      'and',
      'but',
      'if',
      'or',
      'because',
      'as',
      'until',
      'while',
      'of',
      'at',
      'by',
      'for',
      'with',
      'about',
      'against',
      'between',
      'into',
      'through',
      'during',
      'before',
      'after',
      'above',
      'below',
      'to',
      'from',
      'up',
      'down',
      'in',
      'out',
      'on',
      'off',
      'over',
      'under',
      'again',
      'further',
      'then',
      'once',
      'here',
      'there',
      'when',
      'where',
      'why',
      'how',
      'all',
      'any',
      'both',
      'each',
      'few',
      'more',
      'most',
      'other',
      'some',
      'such',
      'no',
      'nor',
      'not',
      'only',
      'own',
      'same',
      'so',
      'than',
      'too',
      'very',
      's',
      't',
      'can',
      'will',
      'just',
      'don',
      'should',
      'now',
      'd',
      'll',
      'm',
      'o',
      're',
      've',
      'y',
      'ain',
      'aren',
      'couldn',
      'didn',
      'doesn',
      'hadn',
      'hasn',
      'haven',
      'isn',
      'ma',
      'mightn',
      'mustn',
      'needn',
      'shan',
      'shouldn',
      'wasn',
      'weren',
      'won',
      'wouldn',
    ]
  }
}

export default Inator
