import Character from '@/game/Character'
import Attribute from '@/game/Attribute'

const JennyEverywhere = new Character('Jenny Everywhere')

// STA - STAR TREK ADVENTURES

JennyEverywhere.addAttribute(
  new Attribute('Character Name', 'Jenny', '$persona-name', 'var(--sta-teal)'),
  'sta-character',
)
JennyEverywhere.addAttribute(
  new Attribute('Department', 'Engineering', 'mdi-account-box-outline', 'var(--sta-gold)'),
  'sta-character',
)
JennyEverywhere.addAttribute(
  new Attribute('Rank', 'Chief Petty Officer', 'mdi-account-box-outline'),
  'sta-character',
)
JennyEverywhere.addAttribute(
  new Attribute('Pronouns', 'She/her', 'mdi-account-box-outline'),
  'sta-character',
)

// STA Attributes
JennyEverywhere.addAttribute(
  new Attribute('Control', 8, '$sta-control', 'var(--sta-teal)'),
  'sta-attribute',
)
JennyEverywhere.addAttribute(
  new Attribute('Fitness', 7, '$sta-fitness', 'var(--sta-teal)'),
  'sta-attribute',
)
JennyEverywhere.addAttribute(
  new Attribute('Daring', 11, '$sta-daring', 'var(--sta-teal)'),
  'sta-attribute',
)
JennyEverywhere.addAttribute(
  new Attribute('Presence', 10, '$sta-presence', 'var(--sta-teal)'),
  'sta-attribute',
)
JennyEverywhere.addAttribute(
  new Attribute('Insight', 11, '$sta-insight', 'var(--sta-teal)'),
  'sta-attribute',
)
JennyEverywhere.addAttribute(
  new Attribute('Reason', 9, '$sta-reason', 'var(--sta-teal)'),
  'sta-attribute',
)

// STA Departments
JennyEverywhere.addAttribute(
  new Attribute('Command', 2, '$sta-command', 'var(--sta-command)'),
  'sta-department',
)
JennyEverywhere.addAttribute(
  new Attribute('Security', 1, '$sta-security', 'var(--sta-security)'),
  'sta-department',
)
JennyEverywhere.addAttribute(
  new Attribute('Medicine', 1, '$sta-medicine', 'var(--sta-medicine)'),
  'sta-department',
)
JennyEverywhere.addAttribute(
  new Attribute('Conn', 5, '$sta-conn', 'var(--sta-conn)'),
  'sta-department',
)
JennyEverywhere.addAttribute(
  new Attribute('Engineering', 4, '$sta-engineering', 'var(--sta-engineering)'),
  'sta-department',
)
JennyEverywhere.addAttribute(
  new Attribute('Science', 3, '$sta-science', 'var(--sta-science)'),
  'sta-department',
)

// STA Traits
JennyEverywhere.addAttribute(
  new Attribute('Species: Hologram', undefined, '$sta-species', 'var(--sta-trait)'),
  'sta-trait',
)
JennyEverywhere.addAttribute(
  new Attribute('Starfleet Officer', undefined, '$sta-trait', 'var(--sta-trait)'),
  'sta-trait',
)

// STA Talents
JennyEverywhere.addAttribute(new Attribute('Gut Feeling', undefined, '$sta-talent'), 'sta-talent')
JennyEverywhere.addAttribute(
  new Attribute('Precision Maneuvering', undefined, '$sta-talent'),
  'sta-talent',
)
JennyEverywhere.addAttribute(
  new Attribute('Menatal Repository', undefined, '$sta-talent'),
  'sta-talent',
)

// STA Values
JennyEverywhere.addAttribute(new Attribute('Mark Your Exits', undefined, '$sta-value'), 'sta-value')
JennyEverywhere.addAttribute(
  new Attribute('No Stupid Questions', undefined, '$sta-value'),
  'sta-value',
)
JennyEverywhere.addAttribute(
  new Attribute('Yeah... I got this', undefined, '$sta-value'),
  'sta-value',
)

// STA Focuses
JennyEverywhere.addAttribute(
  new Attribute('Wormhole Navigation', undefined, '$sta-focus'),
  'sta-focus',
)
JennyEverywhere.addAttribute(
  new Attribute('Wormhole Physics', undefined, '$sta-focus'),
  'sta-focus',
)
JennyEverywhere.addAttribute(new Attribute('Helm Operations', undefined, '$sta-focus'), 'sta-focus')
JennyEverywhere.addAttribute(
  new Attribute('Quantum Mechanics', undefined, '$sta-focus'),
  'sta-focus',
)
JennyEverywhere.addAttribute(
  new Attribute('Ship Recognition', undefined, '$sta-focus'),
  'sta-focus',
)

// MTG - Magic the Gathering

JennyEverywhere.addAttribute(
  new Attribute('Name', 'Jenny, the Shifter', '$persona-name', 'var(--sta-teal)'),
  'mtg-card',
)
JennyEverywhere.addAttribute(new Attribute('Casting Cost', 3, 'mdi-numeric-3-circle'), 'mtg-card')
JennyEverywhere.addAttribute(
  new Attribute('Card Color', 'Colorless', 'mdi-circle', 'text'),
  'mtg-card',
)

// MTG Types
JennyEverywhere.addAttribute(
  new Attribute('Legendary', undefined, 'mdi-label', 'var(--sta-gold)'),
  'mtg-type',
)
JennyEverywhere.addAttribute(new Attribute('Artifact', undefined, 'mdi-label'), 'mtg-type')
JennyEverywhere.addAttribute(new Attribute('Creature', undefined, 'mdi-label'), 'mtg-type')
JennyEverywhere.addAttribute(new Attribute('Creature Type', 'Hologram', '$sta-species'), 'mtg-type')

// MTG Abilities
JennyEverywhere.addAttribute(
  new Attribute('Indestructible', undefined, 'mdi-star-four-points-outline'),
  'mtg-ability',
)
JennyEverywhere.addAttribute(
  new Attribute('Changeling', undefined, 'mdi-star-four-points-outline'),
  'mtg-ability',
)

// MTG Power Toughness
JennyEverywhere.addAttribute(new Attribute('Power', 0, 'mdi-sword', 'var(--sta-teal)'), 'mtg-pt')
JennyEverywhere.addAttribute(
  new Attribute('Toughness', 0, 'mdi-shield', 'var(--sta-teal)'),
  'mtg-pt',
)

// STCCG - Star Trek CCG
JennyEverywhere.addAttribute(
  new Attribute('Card Name', 'Jenny Everywhere', '$persona-name', 'var(--sta-teal)'),
  'stccg-card',
)
JennyEverywhere.addAttribute(
  new Attribute('Card Type', 'Personnel', 'mdi-cards-outline', 'text'),
  'stccg-card',
)
JennyEverywhere.addAttribute(
  new Attribute('Affiliation', 'Federation', 'mdi-web', 'var(--sta-blue)'),
  'stccg-card',
)
JennyEverywhere.addAttribute(
  new Attribute('Property', 'Star Trek Everywhere', 'mdi-label-variant-outline', 'var(--sta-teal)'),
  'stccg-card',
)
JennyEverywhere.addAttribute(
  new Attribute('Classification', 'Engineer', 'mdi-badge-account-outline', 'var(--sta-gold)'),
  'stccg-card',
)

JennyEverywhere.addAttribute(
  new Attribute('Expansion', 'JennyEverywhere.online', 'mdi-link-box-outline', 'text'),
  'stccg-card',
)

// STCCG Attributes
JennyEverywhere.addAttribute(
  new Attribute('Integrity', 9, 'mdi-numeric-9-box', 'var(--sta-blue)'),
  'stccg-attribute',
)
JennyEverywhere.addAttribute(
  new Attribute('Cunning', 7, 'mdi-numeric-7-box', 'var(--sta-teal)'),
  'stccg-attribute',
)
JennyEverywhere.addAttribute(
  new Attribute('Strength', 2, 'mdi-numeric-2-box', 'var(--sta-red)'),
  'stccg-attribute',
)

// STCCG Skills
JennyEverywhere.addAttribute(
  new Attribute('NAVIGATION', undefined, 'mdi-circle-medium', 'var(--sta-red)'),
  'stccg-skill',
)
JennyEverywhere.addAttribute(
  new Attribute('Engineer x2', undefined, 'mdi-circle-medium', 'var(--sta-red)'),
  'stccg-skill',
)
JennyEverywhere.addAttribute(
  new Attribute('Wormhole', undefined, 'mdi-triangle-small-down', 'var(--sta-red)'),
  'stccg-skill',
)

// STCCG Icons
JennyEverywhere.addAttribute(
  new Attribute('Staff', undefined, 'mdi-star-four-points-outline', 'silver'),
  'stccg-icon',
)
JennyEverywhere.addAttribute(
  new Attribute('Holographic', undefined, 'mdi-atom', 'var(--sta-gold)'),
  'stccg-icon',
)
JennyEverywhere.addAttribute(
  new Attribute('Alternate Reality', undefined, 'mdi-all-inclusive-box', 'var(--sta-red)'),
  'stccg-icon',
)

export default JennyEverywhere
