import Persona from '@/objects/Persona'

const JennyEverywhere = new Persona('Jenny Everywhere')

console.log('JennyEverywhere', 'Hello World!')
// STA - STAR TREK ADVENTURES

import json from '@/game/characters/JennyEverywhere.json'

json.tags.forEach((tag) => {
  JennyEverywhere.addLabel(
    tag.value ? `${tag.name}:${tag.value}` : tag.name,
    tag.color ?? undefined,
    tag.icon ?? undefined,
  )
})
export default JennyEverywhere
