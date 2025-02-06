import { Dexie } from 'dexie'

export interface Friend {
  id?: number
  name: string
  tags?: string[]
  // ...other fields
}

export class AppDB extends Dexie {
  friends!: Dexie.Table<Friend, number>

  constructor() {
    super('FriendsDB')
    this.version(1).stores({
      friends: '++id, name, tags',
    })
  }
}

export const dexiedb = new AppDB()
