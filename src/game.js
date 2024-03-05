import Asteroid from './asteroid.js'
import Ship from './ship.js'

class Game {
    static DIM_X = 800
    static DIM_Y = 600
    static NUM_ASTEROIDS = 4

    constructor (){
        this.asteroids = []
        this.addAsteroids(Game.NUM_ASTEROIDS);
        this.ship = new Ship({ "game" : this})
    }
    allObjects (){
        let objects = this.asteroids.concat([this.ship])
        return objects
    }
    addAsteroids(num){
        while (this.asteroids.length < num) {
            let newAsteroid = new Asteroid( {"pos" : this.randomPosition(), "game": this} )
            this.asteroids.push( newAsteroid )
        }
    }

    randomPosition(){
        return [ Math.random() * 800 , Math.random() * 600 ]
    }

    draw(ctx, img){
        ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y)
        // ctx.fillStyle = "black"
        // ctx.fillRect(0,0, Game.DIM_X, Game.DIM_Y)
        ctx.drawImage(img, 0,0);
        this.allObjects().forEach( (object) => {
            object.draw(ctx)
        })
    }
    
    moveObjects(){
        this.allObjects().forEach ( (object) => {
            object.move()
        })
    }

    wrap (pos){
        if (pos[0] > Game.DIM_X) {
            pos[0] = 0
            return pos
        }
        if (pos[1] > Game.DIM_Y){
            pos[1] = 0
            return pos
        }
        if (pos[0] < 0){
            pos[0] = Game.DIM_X
            return pos
        }
        if (pos[1] < 0){
            pos[1] = Game.DIM_Y
            return pos
        }
        return pos
    }

    checkCollisions(){
        for (let i=0; i < this.allObjects().length-1; i++){
            let object1 = this.allObjects()[i]
            for(let j=i+1; j < this.allObjects().length; j++){
                let object2 = this.allObjects()[j]
                if (object1.isCollidedWith(object2) && (object1 instanceof Asteroid)) {
                    object1.collideWith(object2);
                }
            }
        }
    }//wow this is gonna be clunky running every 20 ms

    step(){
        this.moveObjects()
        this.checkCollisions()
    }

    remove(asteroid){
        let idx = this.asteroids.indexOf(asteroid)
        this.asteroids.splice(idx, 1)
        // it's splice, not slice! (why such bad names for similar functions? :/)
    }
}

export default Game;
