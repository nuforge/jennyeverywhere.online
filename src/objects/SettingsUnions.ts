// AN ALTERNATE OPTION OFFERED BY CHATGPT

type SettingKeys = 'theme' | 'notifications' | 'fontSize'
type SettingValue = string | number | boolean

class SettingsManager {
  private settings: Record<SettingKeys, SettingValue>

  constructor(initialSettings: Partial<Record<SettingKeys, SettingValue>> = {}) {
    this.settings = {
      theme: 'light',
      notifications: true,
      fontSize: 12,
      ...initialSettings,
    }
  }

  setSetting<K extends SettingKeys>(key: K, value: SettingValue): void {
    this.settings[key] = value
  }

  getSetting<K extends SettingKeys>(key: K): SettingValue {
    return this.settings[key]
  }

  toggleSetting(key: 'notifications'): void {
    this.settings[key] = !this.settings[key] as boolean
  }

  getAllSettings(): Record<SettingKeys, SettingValue> {
    return this.settings
  }
}

// Example usage:
const settings = new SettingsManager({ theme: 'dark' })
settings.setSetting('fontSize', 16)
settings.toggleSetting('notifications')
console.log(settings.getSetting('theme')) // dark
console.log(settings.getAllSettings()) // { theme: 'dark', notifications: false, fontSize: 16 }
