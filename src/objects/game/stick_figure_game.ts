class StickFigureGame {
  private player: SVGSVGElement
  private x: number = 50
  private y: number = 50
  private velocityX: number = 0
  private velocityY: number = 0
  private gravity: number = 0.5
  private jumpPower: number = -12
  private speed: number = 1
  private maxSpeed: number = 6
  private acceleration: number = 0.5
  private friction: number = 0.85
  private isJumping: boolean = false
  private isFalling: boolean = false
  private touchedElements: Set<Element> = new Set()
  private keys: Set<string> = new Set()

  constructor() {
    this.y = window.innerHeight - 140
    this.player = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    this.createStickFigure()
    this.addEventListeners()
    this.gameLoop()
  }

  private createStickFigure(): void {
    this.player.setAttribute('width', '20')
    this.player.setAttribute('height', '40')
    this.player.setAttribute('style', 'position: fixed; z-index: 9999;')
    this.player.innerHTML = `
      <line x1="10" y1="5" x2="10" y2="20" stroke="white" stroke-width="2" />
      <circle cx="10" cy="3" r="3" fill="white" />
      <line x1="10" y1="20" x2="5" y2="35" stroke="white" stroke-width="2" />
      <line x1="10" y1="20" x2="15" y2="35" stroke="white" stroke-width="2" />
      <line x1="10" y1="10" x2="2" y2="18" stroke="white" stroke-width="2" />
      <line x1="10" y1="10" x2="18" y2="18" stroke="white" stroke-width="2" />
    `
    document.body.appendChild(this.player)
    this.updatePosition()
  }

  private updatePosition(): void {
    this.player.style.left = `${this.x}px`
    this.player.style.top = `${this.y}px`
  }
  private addEventListeners(): void {
    document.addEventListener('keydown', (e) => this.keys.add(e.key))
    document.addEventListener('keyup', (e) => this.keys.delete(e.key))
  }

  private dropThroughPlatform(): void {
    this.y += 10
  }

  private gameLoop(): void {
    if (this.keys.has('ArrowRight')) {
      this.velocityX += this.acceleration
      if (this.velocityX > this.maxSpeed) this.velocityX = this.maxSpeed
    }
    if (this.keys.has('ArrowLeft')) {
      this.velocityX -= this.acceleration
      if (this.velocityX < -this.maxSpeed) this.velocityX = -this.maxSpeed
    }
    if (this.keys.has('ArrowUp') && !this.isJumping) {
      this.velocityY = this.jumpPower
      this.isJumping = true
    }
    if (this.keys.has('ArrowDown')) {
      this.dropThroughPlatform()
    }

    this.velocityY += this.gravity
    this.velocityX *= this.friction

    this.x += this.velocityX
    this.y += this.velocityY
    this.isFalling = true

    const platforms = document.querySelectorAll('p, img, button, a, h1, h2, h3')
    platforms.forEach((platform) => {
      const rect = platform.getBoundingClientRect()
      if (
        this.y + 40 >= rect.top &&
        this.y + 40 <= rect.top + 10 &&
        this.x + 20 > rect.left &&
        this.x < rect.right
      ) {
        this.y = rect.top - 40
        this.velocityY = 0
        this.isJumping = false
        this.isFalling = false

        platform.classList.add('active')
        this.touchedElements.add(platform)
      }
    })

    if (this.y + 40 > window.innerHeight) {
      this.y = window.innerHeight - 40
      this.velocityY = 0
      this.isJumping = false
      this.isFalling = false
    }

    this.updatePosition()
    requestAnimationFrame(() => this.gameLoop())
  }
}
export default StickFigureGame
