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
            let newAsteroid = new Asteroid( {"pos" : this.randomPosition()} )
            this.asteroids.push( newAsteroid )
        }
    }

    randomPosition(){
        return [ Math.random() * 800 , Math.random() * 600 ]
    }

    draw(ctx){
        ctx.clearRect(0,0, 800, 600)
        this.asteroids.forEach( (asteroid) => {
            asteroid.draw(ctx)
        })
    }
    
    moveObjects(){
        this.asteroids.forEach ( (asteroid) => {
            asteroid.move()
        })
    }
}

export default Game;
