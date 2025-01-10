export type SettingKey = string // For Map keys
export type SettingValue = string | number | boolean // Shared by Map and Record

// Use SettingKey and SettingValue throughout your code.

class SettingsManager {
  private settings: Map<SettingKey, SettingValue>

  constructor(initialSettings?: Record<string, SettingValue>) {
    this.settings = new Map(Object.entries(initialSettings || {}))
  }

  setTrue(key: SettingKey): void {
    this.settings.set(key, true)
  }

  setFalse(key: SettingKey): void {
    this.settings.set(key, false)
  }

  set(key: SettingKey, value: SettingValue): void {
    this.settings.set(key, value)
  }

  get<T extends SettingValue>(key: SettingKey, defaultValue?: T): T {
    return (this.settings.get(key) as T) ?? defaultValue!
  }

  check(key: SettingKey): boolean {
    return Boolean(this.get(key))
  }

  setSetting(key: SettingKey, value: SettingValue): void {
    this.settings.set(key, value)
  }

  getSetting<T extends SettingValue>(key: SettingKey, defaultValue?: T): T {
    return (this.settings.get(key) as T) ?? defaultValue!
  }

  toggleSetting(key: SettingKey): void {
    const current = this.settings.get(key)
    if (typeof current === 'boolean') {
      this.settings.set(key, !current)
    } else {
      throw new Error(`Cannot toggle a non-boolean setting: ${key}`)
    }
  }

  getAllSettings(): Record<SettingKey, SettingValue> {
    return Object.fromEntries(this.settings.entries())
  }
}

// // Example usage:
// const settings = new SettingsManager({ theme: 'dark', notifications: true })
// settings.setSetting('fontSize', 16)
// settings.toggleSetting('notifications')
// console.log(settings.getSetting('theme')) // dark
// console.log(settings.getAllSettings()) // { theme: 'dark', notifications: false, fontSize: 16 }

export default SettingsManager
