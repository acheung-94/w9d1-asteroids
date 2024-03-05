import Asteroid from './asteroid.js'

class Game {
    static DIM_X = 800
    static DIM_Y = 600
    static NUM_ASTEROIDS = 10

    constructor (){
        this.asteroids = []
        this.addAsteroids(Game.NUM_ASTEROIDS);
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
        this.asteroids.forEach( (asteroid) => {
            asteroid.draw(ctx)
        })
    }
    
    moveObjects(){
        this.asteroids.forEach ( (asteroid) => {
            asteroid.move()
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
}

export default Game;
