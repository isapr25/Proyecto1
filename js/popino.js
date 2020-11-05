class Popino {
    constructor(ctx, popinoPosX, popinoPosY, popinoWidth, popinoHeight, popinoImage, speed, direction) {
      this.ctx = ctx
      this.popinoPos = {
        x: popinoPosX,
        y: popinoPosY
      },
      this.popinoSize = {
        w: popinoWidth,
        h: popinoHeight
      },
      this.imageName = popinoImage
      this.popinoInstance = undefined
      this.init()
      
      this.speed = speed
      this.direction = direction
      
    }
    init() {
      this.popinoInstance = new Image()
      this.popinoInstance.src = `img/${this.imageName}`
      
    }
  
    draw() {
      this.ctx.drawImage(this.popinoInstance, this.popinoPos.x, this.popinoPos.y, this.popinoSize.w, this.popinoSize.h)
    }
  
  move(x, y) {
    setTimeout(() => {
      if (this.popinoPos.y < y) {
        this.popinoPos.y += this.speed;
      }
      if (this.popinoPos.y >= y && this.popinoPos.x < x) {
        this.popinoPos.x += this.speed;
      }
    }, 20);
    if (this.popinoPos.x > (x-10) && this.popinoPos.y > (y-10)) {
        
        clearInterval(this.interval);
        document.querySelector(".win").classList.toggle("hidden")
        document.querySelector("#myCanvas").classList.toggle("hidden")
    }
  }
    
  }