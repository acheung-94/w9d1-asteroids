import Game from "./game"
//OMG *v* it populated when i typed "new Game()" !!! <3 <3

class GameView {
    constructor(ctx){
        this.ctx = ctx
        this.game = new Game()
    }

    start () {
        setInterval( (game) => {
            this.game.moveObjects()
            this.game.draw(this.ctx);
        }, 20)
    }
}

export default GameView;