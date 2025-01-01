import Persona from '@/objects/Persona'

const JennyEverywhere = new Persona('Jenny Everywhere')

console.log('JennyEverywhere:', '"hello world"')
// STA - STAR TREK ADVENTURES

import json from '@/objects/game/characters/JennyEverywhere.json'

json.tags.forEach((tag) => {
  const strtag = tag.value !== null ? `${tag.name}:${tag.value}` : tag.name

  JennyEverywhere.addLabel(tag.space, tag.color ?? '', tag.icon)
  JennyEverywhere.addLabel(strtag, tag.color ?? '', tag.icon)
})
export default JennyEverywhere
