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

    isCollidedWith(otherObject){
        let sumRad = this.radius + otherObject.radius
        let dx = this.pos[0] - otherObject.pos[0]
        let dy = this.pos[1] - otherObject.pos[1]
        let distance = (dx ** 2) + (dy ** 2)
        distance = Math.sqrt(distance)
        return (distance < sumRad)
    }
}

export default MovingObject;