class MovingObject {
    constructor (optionsObject){
        this.pos = optionsObject["pos"]
        this.vel = optionsObject["vel"]
        this.radius = optionsObject["radius"]
        this.color = optionsObject["color"]
        this.game = optionsObject["game"]
    }
    draw (ctx){
        ctx.beginPath();
        ctx.arc(...this.pos, this.radius, 0, 360)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    move (){
       let dX = this.vel[0]
       let dY = this.vel[1]
       this.pos[0] += dX
       this.pos[1] += dY
       this.game.wrap(this.pos)
    }
}

export default MovingObject;