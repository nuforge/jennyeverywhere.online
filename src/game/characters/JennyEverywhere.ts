import Character from '@/game/Character'
import Attribute from '@/game/Attribute'

const JennyEverywhere = new Character('Jenny Everywhere')

console.log('JennyEverywhere', 'Hello World!')
// STA - STAR TREK ADVENTURES

JennyEverywhere.addTag(
  new Attribute('Character Name', 'Jenny', '$persona-name', 'var(--sta-teal)'),
  'sta-character',
)
JennyEverywhere.addTag(
  new Attribute('Department', 'Engineering', 'mdi-account-box-outline', 'var(--sta-gold)'),
  'sta-character',
)
JennyEverywhere.addTag(
  new Attribute('Rank', 'Chief Petty Officer', 'mdi-account-box-outline'),
  'sta-character',
)
JennyEverywhere.addTag(
  new Attribute('Pronouns', 'She/her', 'mdi-account-box-outline'),
  'sta-character',
)

// STA Attributes
JennyEverywhere.addTag(
  new Attribute('Control', 8, '$sta-control', 'var(--sta-teal)'),
  'sta-attribute',
)
JennyEverywhere.addTag(
  new Attribute('Fitness', 7, '$sta-fitness', 'var(--sta-teal)'),
  'sta-attribute',
)
JennyEverywhere.addTag(
  new Attribute('Daring', 11, '$sta-daring', 'var(--sta-teal)'),
  'sta-attribute',
)
JennyEverywhere.addTag(
  new Attribute('Presence', 10, '$sta-presence', 'var(--sta-teal)'),
  'sta-attribute',
)
JennyEverywhere.addTag(
  new Attribute('Insight', 11, '$sta-insight', 'var(--sta-teal)'),
  'sta-attribute',
)
JennyEverywhere.addTag(
  new Attribute('Reason', 9, '$sta-reason', 'var(--sta-teal)'),
  'sta-attribute',
)

// STA Departments
JennyEverywhere.addTag(
  new Attribute('Command', 2, '$sta-command', 'var(--sta-command)'),
  'sta-department',
)
JennyEverywhere.addTag(new Attribute('Conn', 5, '$sta-conn', 'var(--sta-conn)'), 'sta-department')
JennyEverywhere.addTag(
  new Attribute('Security', 1, '$sta-security', 'var(--sta-security)'),
  'sta-department',
)
JennyEverywhere.addTag(
  new Attribute('Engineering', 4, '$sta-engineering', 'var(--sta-engineering)'),
  'sta-department',
)
JennyEverywhere.addTag(
  new Attribute('Medicine', 1, '$sta-medicine', 'var(--sta-medicine)'),
  'sta-department',
)
JennyEverywhere.addTag(
  new Attribute('Science', 3, '$sta-science', 'var(--sta-science)'),
  'sta-department',
)

// STA Traits
JennyEverywhere.addTag(
  new Attribute('Species', 'Hologram', '$sta-species', 'var(--sta-trait)'),
  'sta-trait',
)
JennyEverywhere.addTag(
  new Attribute('Starfleet Officer', undefined, '$sta-trait', 'var(--sta-trait)'),
  'sta-trait',
)

// STA Talents
JennyEverywhere.addTag(new Attribute('Gut Feeling', undefined, '$sta-talent'), 'sta-talent')
JennyEverywhere.addTag(
  new Attribute('Precision Maneuvering', undefined, '$sta-talent'),
  'sta-talent',
)
JennyEverywhere.addTag(new Attribute('Mental Repository', undefined, '$sta-talent'), 'sta-talent')

// STA Values
JennyEverywhere.addTag(new Attribute('Mark Your Exits', undefined, '$sta-value'), 'sta-value')
JennyEverywhere.addTag(new Attribute('No Stupid Questions', undefined, '$sta-value'), 'sta-value')
JennyEverywhere.addTag(new Attribute('Yeah... I got this', undefined, '$sta-value'), 'sta-value')

// STA Focuses
JennyEverywhere.addTag(new Attribute('Wormhole Navigation', undefined, '$sta-focus'), 'sta-focus')
JennyEverywhere.addTag(new Attribute('Wormhole Physics', undefined, '$sta-focus'), 'sta-focus')
JennyEverywhere.addTag(new Attribute('Helm Operations', undefined, '$sta-focus'), 'sta-focus')
JennyEverywhere.addTag(new Attribute('Quantum Mechanics', undefined, '$sta-focus'), 'sta-focus')
JennyEverywhere.addTag(new Attribute('Ship Recognition', undefined, '$sta-focus'), 'sta-focus')

// STCCG - Star Trek CCG
JennyEverywhere.addTag(
  new Attribute('Card Name', 'Jenny Everywhere', '$persona-name', 'var(--sta-teal)'),
  'stccg-card',
)
JennyEverywhere.addTag(
  new Attribute('Card Type', 'Personnel', 'mdi-cards-outline', 'text'),
  'stccg-card',
)
JennyEverywhere.addTag(
  new Attribute('Affiliation', 'Federation', 'mdi-web', 'var(--sta-blue)'),
  'stccg-card',
)
JennyEverywhere.addTag(
  new Attribute('Property', 'Star Trek Everywhere', 'mdi-label-variant-outline', 'var(--sta-teal)'),
  'stccg-card',
)
JennyEverywhere.addTag(
  new Attribute('Classification', 'Engineer', 'mdi-badge-account-outline', 'var(--sta-gold)'),
  'stccg-card',
)

JennyEverywhere.addTag(
  new Attribute('Expansion', 'JennyEverywhere.online', 'mdi-link-box-outline', 'text'),
  'stccg-card',
)

// STCCG Attributes
JennyEverywhere.addTag(
  new Attribute('Integrity', 9, 'mdi-numeric-9-box', 'var(--sta-blue)'),
  'stccg-attribute',
)
JennyEverywhere.addTag(
  new Attribute('Cunning', 7, 'mdi-numeric-7-box', 'var(--sta-teal)'),
  'stccg-attribute',
)
JennyEverywhere.addTag(
  new Attribute('Strength', 2, 'mdi-numeric-2-box', 'var(--sta-red)'),
  'stccg-attribute',
)

// STCCG Skills
JennyEverywhere.addTag(
  new Attribute('NAVIGATION', undefined, 'mdi-circle-medium', 'var(--sta-red)'),
  'stccg-skill',
)
JennyEverywhere.addTag(
  new Attribute('Engineer x2', undefined, 'mdi-circle-medium', 'var(--sta-red)'),
  'stccg-skill',
)
JennyEverywhere.addTag(
  new Attribute('Wormhole', undefined, 'mdi-triangle-small-down', 'var(--sta-red)'),
  'stccg-skill',
)

// STCCG Icons
JennyEverywhere.addTag(
  new Attribute('Staff', undefined, 'mdi-star-four-points-outline', 'silver'),
  'stccg-icon',
)
JennyEverywhere.addTag(
  new Attribute('Holographic', undefined, 'mdi-atom', 'var(--sta-gold)'),
  'stccg-icon',
)
JennyEverywhere.addTag(
  new Attribute('Alternate Reality', undefined, 'mdi-all-inclusive-box', 'var(--sta-red)'),
  'stccg-icon',
)

// MTG - Magic the Gathering

JennyEverywhere.addTag(
  new Attribute('Name', 'Jenny, the Shifter', '$persona-name', 'var(--sta-teal)'),
  'mtg-card',
)
JennyEverywhere.addTag(new Attribute('Casting Cost', 3, 'mdi-numeric-3-circle'), 'mtg-card')
JennyEverywhere.addTag(new Attribute('Card Color', 'Colorless', 'mdi-circle'), 'mtg-card')

// MTG Types
JennyEverywhere.addTag(
  new Attribute('Legendary', undefined, 'mdi-label', 'var(--sta-gold)'),
  'mtg-type',
)
JennyEverywhere.addTag(new Attribute('Artifact', undefined, 'mdi-label'), 'mtg-type')
JennyEverywhere.addTag(new Attribute('Creature', undefined, 'mdi-label'), 'mtg-type')
JennyEverywhere.addTag(new Attribute('Creature Type', 'Illusion', 'mdi-label-outline'), 'mtg-type')

// MTG Abilities
JennyEverywhere.addTag(
  new Attribute('Indestructible', undefined, 'mdi-star-four-points-outline'),
  'mtg-ability',
)
// MTG Power Toughness
JennyEverywhere.addTag(new Attribute('Power', 0, 'mdi-sword', 'var(--sta-blue)'), 'mtg-pt')
JennyEverywhere.addTag(new Attribute('Toughness', 1, 'mdi-shield', 'var(--sta-blue)'), 'mtg-pt')
export default JennyEverywhere
