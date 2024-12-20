class Symbol {
  private _id: number = 0
  private _icon: string = '$icon'
  private _color: string = '$primary'
  private _name?: string = ''
  private _description?: string = ''

  constructor(public name: string) {
    this._name = name
  }
}

class Tag {
  private _symbol: Symbol | string = ''
  private _id: string | number = 0
  private _namespace: string = ''
  private _parent: Tag | null = null
  private _description?: string = ''

  constructor(public name: string) {
    this._namespace = name
  }
}

export { Tag, Symbol }
